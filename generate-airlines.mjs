import fs from 'fs'
import https from 'https'
import { readFileSync } from 'fs'

let apiKey = ''
try {
  const envFile = readFileSync('.env.local', 'utf8')
  const match = envFile.match(/GEMINI_API_KEY\s*=\s*(.*)/)
  if (match) apiKey = match[1].trim().replace(/['"']/g, '')
} catch (e) {
  console.error("Could not read .env.local file")
  process.exit(1)
}

if (!apiKey) {
  console.error("Error: GEMINI_API_KEY not found in .env.local")
  process.exit(1)
}

const airlinesList = [
  'Ryanair', 'Wizz Air', 'Vueling', 'Norwegian Air',
  'Transavia', 'Eurowings', 'Aegean Airlines', 'TAP Air Portugal',
  'Finnair', 'SAS Scandinavian Airlines', 'LOT Polish Airlines',
  'Austrian Airlines', 'Brussels Airlines', 'Croatia Airlines',
  'Air Serbia', 'Air Malta', 'Icelandair', 'Air Europa',
  'SmartWings', 'Pegasus Airlines', 'SunExpress', 'Flydubai',
  'Air Arabia', 'Jazeera Airways', 'Kuwait Airways', 'Oman Air',
  'Gulf Air', 'Royal Jordanian', 'Middle East Airlines',
  'EgyptAir', 'Tunisair', 'Royal Air Maroc', 'Ethiopian Airlines',
  'Kenya Airways', 'South African Airways', 'Air Mauritius',
  'RwandAir', 'ASKY Airlines', 'Air Seychelles',
  'GoFirst', 'AirAsia India', 'Star Air India',
  'Alliance Air India', 'Blue Dart Aviation', 'Akasa Air'
]

function callGeminiWithRetry(prompt, retries = 3, delay = 5000) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { 
        temperature: 0.2, 
        maxOutputTokens: 1500
      }
    })

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      path: `/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }

    const executeRequest = () => {
      const req = https.request(options, res => {
        res.setEncoding('utf8')
        let data = ''
        res.on('data', chunk => data += chunk)
        res.on('end', async () => {
          try {
            const json = JSON.parse(data)
            
            if (json.error) {
              const code = json.error.code
              if ((code === 429 || code === 503) && retries > 0) {
                const waitTime = code === 429 ? 30000 : delay
                console.log(`⚠️ API Busy (${code}). Waiting ${waitTime / 1000}s before retry...`)
                await sleep(waitTime)
                return resolve(callGeminiWithRetry(prompt, retries - 1, delay * 2))
              }
              return reject(new Error(`API Error: ${json.error.message} (Code: ${code})`))
            }

            const text = json.candidates?.[0]?.content?.parts?.[0]?.text || ''
            if (!text) return reject(new Error("Empty response payload received."))
            resolve(text)
          } catch (e) { 
            reject(new Error(`JSON Body Read Fail -> ${e.message}`)) 
          }
        })
      })

      req.on('error', async (err) => {
        if (retries > 0) {
          await sleep(delay)
          return resolve(callGeminiWithRetry(prompt, retries - 1, delay * 2))
        }
        reject(err)
      })
      req.write(body)
      req.end()
    }

    executeRequest()
  })
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function generateAirline(name) {
  const prompt = `Return a raw JSON object containing customer service directory metadata for ${name}. Follow this structural format exactly:
{
  "phone": "string phone number",
  "ivr": "string explaining phone menu options",
  "bestTime": "best string time to call",
  "waitTime": "average wait string",
  "alternative": "alternative contact methods string",
  "issues": ["issue1", "issue2", "issue3"],
  "faq": [
    { "q": "question text?", "a": "answer text" }
  ]
}`

  try {
    const response = await callGeminiWithRetry(prompt)
    
    // FIXED: Uses safe regex matching to pluck JSON boundaries out cleanly 
    const jsonMatch = response.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error("No JSON boundaries found in response string context.")
    }

    const data = JSON.parse(jsonMatch[0].trim())

    return {
      name,
      phone: data.phone || 'Check website',
      ivr: data.ivr || 'Press 0 to reach an operator',
      bestTime: data.bestTime || '8am-10am weekdays',
      waitTime: data.waitTime || '15 mins average',
      alternative: data.alternative || 'Official website chat',
      issues: data.issues || ['refund', 'rebooking', 'baggage'],
      faq: data.faq || []
    }
  } catch (e) {
    console.log(`❌ Error processing structural text for ${name}: ${e.message}`)
    return null
  }
}

async function main() {
  console.log('Starting airline data generation engine...')
  
  let existing = {}
  try {
    const content = readFileSync('app/airlines.ts', 'utf8')
    const matches = content.match(/['"']([a-z0-9-]+)['"']:\s*\{/g)
    if (matches) {
      matches.forEach(m => {
        const slug = m.match(/['"']([a-z0-9-]+)['"']/)[1]
        existing[slug] = true
      })
    }
    console.log(`Found ${Object.keys(existing).length} existing airlines in your repository.`)
  } catch (e) {
    console.log('Could not parse app/airlines.ts, initiating template setup.')
  }

  const newEntries = []
  let count = 0

  for (const airline of airlinesList) {
    const slug = slugify(airline)
    if (existing[slug]) {
      continue
    }

    console.log(`🚀 Processing: ${airline}... (${++count} remaining)`)
    const data = await generateAirline(airline)

    if (data) {
      const entry = `  '${slug}': {
    name: '${data.name.replace(/'/g, "\\'")}',
    phone: '${data.phone.replace(/'/g, "\\'")}',
    ivr: '${data.ivr.replace(/'/g, "\\'")}',
    bestTime: '${data.bestTime.replace(/'/g, "\\'")}',
    waitTime: '${data.waitTime.replace(/'/g, "\\'")}',
    alternative: '${data.alternative.replace(/'/g, "\\'")}',
    issues: ${JSON.stringify(data.issues)},
    faq: [
      ${data.faq.map(f => `{ q: '${f.q.replace(/'/g, "\\'")}', a: '${f.a.replace(/'/g, "\\'")}' }`).join(',\n      ')}
    ]
  }`
      newEntries.push(entry)
      console.log(`✅ Completed: ${airline}`)
      
      // Cooldown buffer to avoid hitting free tier limits
      await sleep(5000)
    }
  }

  if (newEntries.length === 0) {
    console.log('No new datasets to include.')
    return
  }

  let currentContent = ''
  try {
    currentContent = readFileSync('app/airlines.ts', 'utf8')
  } catch (e) {
    currentContent = 'export const airlines = {\n}'
  }

  const lastBrace = currentContent.lastIndexOf('}')
  const newContent = currentContent.slice(0, lastBrace) +
    (lastBrace > 25 ? ',\n' : '') + newEntries.join(',\n') + '\n}'

  fs.writeFileSync('app/airlines.ts', newContent)
  console.log(`\n🎉 Success! Processed and added ${newEntries.length} new records directly to app/airlines.ts`)
}

main().catch(console.error)