export type Airline = {
  name: string
  phone: string
  ivr: string
  bestTime: string
  waitTime: string
  alternative: string
  issues: string[]
  faq: { q: string; a: string }[]
}

export const airlines: Record<string, Airline> = {
  'air-india': {
    name: 'Air India',
    phone: '1-800-180-1407',
    ivr: 'Press 2, then press 4, then say agent when prompted',
    bestTime: '6am-8am IST weekdays',
    waitTime: '8-12 minutes average',
    alternative: 'Twitter @AirIndia or airindia.in live chat',
    issues: ['refund', 'rebooking', 'lost baggage', 'cancellation', 'upgrade'],
    faq: [
      { q: 'How do I talk to a real person at Air India?', a: 'Call 1-800-180-1407, press 2, then 4, then say agent when prompted. This bypasses the IVR and connects you to a live representative.' },
      { q: 'What is the fastest way to reach Air India customer service?', a: 'Calling between 6am and 8am IST on weekdays gives the shortest wait times, typically under 5 minutes.' },
      { q: 'Can I get a refund from Air India by calling?', a: 'Yes. A live Air India agent can process refunds for cancelled or delayed flights. Have your PNR number ready.' }
    ]
  },
  'indigo': {
    name: 'IndiGo',
    phone: '0124-6173838',
    ivr: 'Press 2 for English, then press 1 for existing bookings, then say agent',
    bestTime: '7am-9am IST weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'Twitter @IndiGo6E or goindigo.in chat',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'web check-in'],
    faq: [
      { q: 'How do I speak to a human at IndiGo?', a: 'Call 0124-6173838, press 2 for English, then 1 for existing bookings, then say agent.' },
      { q: 'What is IndiGo customer service wait time?', a: 'Average wait is 10-15 minutes. Calling early morning between 7am and 9am IST reduces wait times significantly.' },
      { q: 'How do I get a refund from IndiGo?', a: 'Call with your PNR and reason for cancellation. Refunds typically take 7-10 business days.' }
    ]
  },
  'emirates': {
    name: 'Emirates',
    phone: '1-800-777-3999',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am GMT weekdays',
    waitTime: '5-10 minutes average',
    alternative: 'emirates.com live chat or Twitter @EmiratesSupport',
    issues: ['refund', 'rebooking', 'miles', 'upgrade', 'baggage allowance'],
    faq: [
      { q: 'How do I reach a live agent at Emirates?', a: 'Call 1-800-777-3999, press 1 for English, press 2 for existing bookings, then press 0 to bypass the IVR.' },
      { q: 'What is the best time to call Emirates customer service?', a: 'Between 8am and 10am GMT on weekdays. Emirates operates 24/7 but these hours have the shortest queues.' },
      { q: 'Can Emirates agents change my flight over the phone?', a: 'Yes. Emirates phone agents can rebook flights, process upgrades, add baggage, and handle refunds.' }
    ]
  },
  'british-airways': {
    name: 'British Airways',
    phone: '1-800-247-9297',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 twice to reach an agent',
    bestTime: '7am-9am GMT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'ba.com live chat or Twitter @British_Airways',
    issues: ['refund', 'rebooking', 'avios', 'upgrade', 'lost baggage'],
    faq: [
      { q: 'How do I talk to a human at British Airways?', a: 'Call 1-800-247-9297, press 1 for English, press 2 for existing bookings, then press 0 twice to reach a live agent.' },
      { q: 'What is the best time to call British Airways?', a: 'Early morning between 7am and 9am GMT on weekdays has the shortest queues.' },
      { q: 'Can I rebook my British Airways flight over the phone?', a: 'Yes. A live BA agent can rebook, cancel, and process refunds. Have your booking reference ready.' }
    ]
  },
  'qantas': {
    name: 'Qantas',
    phone: '1-800-227-4500',
    ivr: 'Press 1 for English, press 2 for existing bookings, say agent or press 0',
    bestTime: '8am-10am AEST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'qantas.com live chat or Twitter @QantasSupport',
    issues: ['refund', 'rebooking', 'frequent flyer', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Qantas?', a: 'Call 1-800-227-4500, press 1 for English, press 2 for existing bookings, then say agent or press 0.' },
      { q: 'What is the best time to call Qantas customer service?', a: 'Between 8am and 10am AEST on weekdays. Avoid Mondays and days after public holidays.' },
      { q: 'Can Qantas process refunds over the phone?', a: 'Yes. Qantas agents can process refunds for eligible tickets. Have your booking reference and reason ready.' }
    ]
  },
  'united-airlines': {
    name: 'United Airlines',
    phone: '1-800-864-8331',
    ivr: 'Say agent immediately when the automated system answers',
    bestTime: '6am-8am CST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'united.com chat or Twitter @United',
    issues: ['refund', 'rebooking', 'miles', 'upgrade', 'lost baggage', 'delay compensation'],
    faq: [
      { q: 'How do I talk to a real person at United Airlines?', a: 'Call 1-800-864-8331 and say agent immediately when the automated system answers. This is the fastest way to bypass the IVR.' },
      { q: 'What is the best time to call United Airlines?', a: 'Between 6am and 8am CST on weekdays. United call volume is lowest in early morning hours.' },
      { q: 'How do I get a refund from United Airlines?', a: 'A United agent can process refunds for cancelled flights and eligible tickets. Have your confirmation number ready.' }
    ]
  },
  'delta': {
    name: 'Delta Air Lines',
    phone: '1-800-221-1212',
    ivr: 'Press 0 repeatedly or say agent to bypass the automated system',
    bestTime: '5am-7am EST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'delta.com chat or Twitter @Delta',
    issues: ['refund', 'rebooking', 'skymiles', 'upgrade', 'baggage', 'delay compensation'],
    faq: [
      { q: 'How do I reach a human at Delta Air Lines?', a: 'Call 1-800-221-1212 and press 0 repeatedly or say agent when the system answers. This bypasses Delta IVR system.' },
      { q: 'What is the fastest way to reach Delta customer service?', a: 'Calling between 5am and 7am EST on weekdays gives the shortest wait times, often under 5 minutes.' },
      { q: 'Can Delta agents process refunds over the phone?', a: 'Yes. Delta agents can process refunds for cancelled and eligible flights. Have your confirmation number ready.' }
    ]
  },
  'american-airlines': {
    name: 'American Airlines',
    phone: '1-800-433-7300',
    ivr: 'Press 0 or say agent when prompted to bypass the IVR',
    bestTime: '5am-7am CST weekdays',
    waitTime: '15-30 minutes average',
    alternative: 'aa.com chat or Twitter @AmericanAir',
    issues: ['refund', 'rebooking', 'aadvantage miles', 'upgrade', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I talk to a human at American Airlines?', a: 'Call 1-800-433-7300 and press 0 or say agent when prompted. This connects you directly to a live American Airlines representative.' },
      { q: 'What is the best time to call American Airlines?', a: 'Between 5am and 7am CST on weekdays. American Airlines has high call volumes during midday and evenings.' },
      { q: 'How do I get a refund from American Airlines?', a: 'American Airlines agents can process refunds for cancelled flights and eligible tickets. Have your record locator ready.' }
    ]
  },
  'singapore-airlines': {
    name: 'Singapore Airlines',
    phone: '1-800-742-3333',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am SGT weekdays',
    waitTime: '5-10 minutes average',
    alternative: 'singaporeair.com live chat or Twitter @SingaporeAir',
    issues: ['refund', 'rebooking', 'krisflyer miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Singapore Airlines?', a: 'Call 1-800-742-3333, press 1 for English, press 2 for existing bookings, then press 0 to reach a live agent.' },
      { q: 'What is the best time to call Singapore Airlines?', a: 'Between 8am and 10am SGT on weekdays. Singapore Airlines is known for relatively short wait times.' },
      { q: 'Can Singapore Airlines agents process refunds by phone?', a: 'Yes. Singapore Airlines agents can process refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'lufthansa': {
    name: 'Lufthansa',
    phone: '1-800-645-3880',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 or say agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'lufthansa.com chat or Twitter @lufthansa',
    issues: ['refund', 'rebooking', 'miles and more', 'upgrade', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I talk to a human at Lufthansa?', a: 'Call 1-800-645-3880, press 1 for English, press 2 for existing bookings, then press 0 or say agent to reach a live representative.' },
      { q: 'What is the best time to call Lufthansa customer service?', a: 'Between 7am and 9am CET on weekdays. Avoid calling during European peak hours.' },
      { q: 'Can Lufthansa process refunds over the phone?', a: 'Yes. Lufthansa agents can process refunds for cancelled and eligible flights. Have your booking reference ready.' }
    ]
  },
  'air-france': {
    name: 'Air France',
    phone: '1-800-237-2747',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 for an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'airfrance.com chat or Twitter @AirFranceUS',
    issues: ['refund', 'rebooking', 'flying blue miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a live agent at Air France?', a: 'Call 1-800-237-2747, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Air France agent.' },
      { q: 'What is the best time to call Air France?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Air France agents handle refunds by phone?', a: 'Yes. Air France agents can process refunds for cancelled and eligible tickets over the phone.' }
    ]
  },
  'klm': {
    name: 'KLM Royal Dutch Airlines',
    phone: '1-800-618-0104',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'klm.com chat or Twitter @KLM',
    issues: ['refund', 'rebooking', 'flying blue', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at KLM?', a: 'Call 1-800-618-0104, press 1 for English, press 2 for existing bookings, then press 0 to reach a live KLM agent.' },
      { q: 'What is the best time to call KLM customer service?', a: 'Between 7am and 9am CET on weekdays. KLM has relatively efficient customer service lines.' },
      { q: 'Can KLM process refunds over the phone?', a: 'Yes. KLM agents can handle refunds, rebooking, and upgrades. Have your booking reference ready.' }
    ]
  },
  'turkish-airlines': {
    name: 'Turkish Airlines',
    phone: '1-800-874-8875',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent or press 0',
    bestTime: '8am-10am TRT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'turkishairlines.com chat or Twitter @TurkishAirlines',
    issues: ['refund', 'rebooking', 'miles and smiles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Turkish Airlines?', a: 'Call 1-800-874-8875, press 1 for English, press 2 for existing reservations, then say agent or press 0.' },
      { q: 'What is the best time to call Turkish Airlines?', a: 'Between 8am and 10am TRT on weekdays gives the shortest wait times.' },
      { q: 'Can Turkish Airlines agents process refunds by phone?', a: 'Yes. Turkish Airlines agents can process refunds for eligible tickets. Have your PNR ready.' }
    ]
  },
  'cathay-pacific': {
    name: 'Cathay Pacific',
    phone: '1-800-233-2742',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am HKT weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'cathaypacific.com chat or Twitter @cathaypacific',
    issues: ['refund', 'rebooking', 'asia miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at Cathay Pacific?', a: 'Call 1-800-233-2742, press 1 for English, press 2 for existing bookings, then press 0 to reach a live agent.' },
      { q: 'What is the best time to call Cathay Pacific?', a: 'Between 8am and 10am HKT on weekdays. Cathay Pacific operates 24/7 customer service.' },
      { q: 'Can Cathay Pacific process refunds over the phone?', a: 'Yes. Cathay Pacific agents can handle refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'etihad': {
    name: 'Etihad Airways',
    phone: '1-877-690-0767',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 or say agent',
    bestTime: '8am-10am GST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'etihad.com chat or Twitter @EtihadHelp',
    issues: ['refund', 'rebooking', 'etihad guest miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a live agent at Etihad Airways?', a: 'Call 1-877-690-0767, press 1 for English, press 2 for existing bookings, then press 0 or say agent.' },
      { q: 'What is the best time to call Etihad customer service?', a: 'Between 8am and 10am GST on weekdays gives the shortest wait times.' },
      { q: 'Can Etihad agents handle refunds by phone?', a: 'Yes. Etihad agents can process refunds for cancelled and eligible tickets. Have your booking reference ready.' }
    ]
  },
  'qatar-airways': {
    name: 'Qatar Airways',
    phone: '1-877-777-2827',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am AST weekdays',
    waitTime: '8-12 minutes average',
    alternative: 'qatarairways.com chat or Twitter @qatarairways',
    issues: ['refund', 'rebooking', 'privilege club miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at Qatar Airways?', a: 'Call 1-877-777-2827, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Qatar Airways agent.' },
      { q: 'What is the best time to call Qatar Airways?', a: 'Between 8am and 10am AST on weekdays. Qatar Airways is known for good customer service response times.' },
      { q: 'Can Qatar Airways agents process refunds by phone?', a: 'Yes. Qatar Airways agents can handle refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'southwest': {
    name: 'Southwest Airlines',
    phone: '1-800-435-9792',
    ivr: 'Press 1 for English, say representative or press 0 to reach a human',
    bestTime: '6am-8am CST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'southwest.com chat or Twitter @SouthwestAir',
    issues: ['refund', 'rebooking', 'rapid rewards', 'cancellation', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Southwest Airlines?', a: 'Call 1-800-435-9792, press 1 for English, then say representative or press 0 to reach a live Southwest agent.' },
      { q: 'What is the best time to call Southwest Airlines?', a: 'Between 6am and 8am CST on weekdays. Southwest has high call volumes during midday.' },
      { q: 'Does Southwest give refunds over the phone?', a: 'Yes. Southwest agents can process refunds and travel credits. Southwest has a relatively flexible refund policy.' }
    ]
  },
  'alaska-airlines': {
    name: 'Alaska Airlines',
    phone: '1-800-252-7522',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent or press 0',
    bestTime: '5am-7am PST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'alaskaair.com chat or Twitter @AlaskaAir',
    issues: ['refund', 'rebooking', 'mileage plan', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at Alaska Airlines?', a: 'Call 1-800-252-7522, press 1 for English, press 2 for existing reservations, then say agent or press 0.' },
      { q: 'What is the best time to call Alaska Airlines?', a: 'Between 5am and 7am PST on weekdays gives the shortest wait times.' },
      { q: 'Can Alaska Airlines process refunds over the phone?', a: 'Yes. Alaska Airlines agents can handle refunds for eligible tickets. Have your confirmation code ready.' }
    ]
  },
  'jetblue': {
    name: 'JetBlue Airways',
    phone: '1-800-538-2583',
    ivr: 'Press 1 for English, press 2 for existing bookings, say agent to reach a human',
    bestTime: '6am-8am EST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'jetblue.com chat or Twitter @JetBlue',
    issues: ['refund', 'rebooking', 'trueblue points', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at JetBlue?', a: 'Call 1-800-538-2583, press 1 for English, press 2 for existing bookings, then say agent to reach a live JetBlue representative.' },
      { q: 'What is the best time to call JetBlue customer service?', a: 'Between 6am and 8am EST on weekdays. JetBlue has lower call volumes in early morning.' },
      { q: 'Can JetBlue agents process refunds by phone?', a: 'Yes. JetBlue agents can handle refunds and credits for eligible tickets.' }
    ]
  },
  'air-canada': {
    name: 'Air Canada',
    phone: '1-888-247-2262',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '6am-8am EST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'aircanada.com chat or Twitter @AirCanada',
    issues: ['refund', 'rebooking', 'aeroplan miles', 'upgrade', 'baggage', 'delay compensation'],
    faq: [
      { q: 'How do I talk to a human at Air Canada?', a: 'Call 1-888-247-2262, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Air Canada agent.' },
      { q: 'What is the best time to call Air Canada?', a: 'Between 6am and 8am EST on weekdays. Air Canada can have long wait times during peak hours.' },
      { q: 'Can Air Canada agents process refunds over the phone?', a: 'Yes. Air Canada agents can handle refunds for cancelled and eligible flights. Have your booking reference ready.' }
    ]
  },
  'frontier-airlines': {
    name: 'Frontier Airlines',
    phone: '1-801-401-9000',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent or press 0',
    bestTime: '6am-8am MST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'flyfrontier.com chat or Twitter @FlyFrontier',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'discount den'],
    faq: [
      { q: 'How do I talk to a human at Frontier Airlines?', a: 'Call 1-801-401-9000, press 1 for English, press 2 for existing reservations, then say agent or press 0 to reach a live Frontier agent.' },
      { q: 'What is the best time to call Frontier Airlines?', a: 'Between 6am and 8am MST on weekdays. Frontier has high call volumes during afternoon and evening hours.' },
      { q: 'Can Frontier Airlines process refunds over the phone?', a: 'Yes. Frontier agents can process refunds for cancelled flights. Note Frontier has strict fare rules so have your booking details ready.' }
    ]
  },
  'spirit-airlines': {
    name: 'Spirit Airlines',
    phone: '1-855-728-3555',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '6am-8am EST weekdays',
    waitTime: '20-35 minutes average',
    alternative: 'spirit.com chat or Twitter @SpiritAirlines',
    issues: ['refund', 'rebooking', 'baggage fees', 'cancellation', 'seat upgrade'],
    faq: [
      { q: 'How do I reach a human at Spirit Airlines?', a: 'Call 1-855-728-3555, press 1 for English, press 2 for existing bookings, then press 0. Spirit is known for long wait times so calling early morning is essential.' },
      { q: 'What is the best time to call Spirit Airlines?', a: 'Between 6am and 8am EST on weekdays. Spirit Airlines consistently has some of the longest wait times of any US carrier.' },
      { q: 'Can Spirit Airlines give refunds over the phone?', a: 'Spirit agents can process refunds for cancelled flights and eligible fares. Spirit has strict no-refund policies on basic fares so check your fare type first.' }
    ]
  },
  'hawaiian-airlines': {
    name: 'Hawaiian Airlines',
    phone: '1-800-367-5320',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent or press 0',
    bestTime: '7am-9am HST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'hawaiianairlines.com chat or Twitter @HawaiianAir',
    issues: ['refund', 'rebooking', 'hawaiian miles', 'upgrade', 'baggage', 'inter-island flights'],
    faq: [
      { q: 'How do I talk to a human at Hawaiian Airlines?', a: 'Call 1-800-367-5320, press 1 for English, press 2 for existing reservations, then say agent or press 0 to reach a live Hawaiian Airlines representative.' },
      { q: 'What is the best time to call Hawaiian Airlines?', a: 'Between 7am and 9am HST on weekdays. Hawaiian Airlines has relatively shorter wait times compared to mainland carriers.' },
      { q: 'Can Hawaiian Airlines process refunds over the phone?', a: 'Yes. Hawaiian Airlines agents can handle refunds for cancelled and eligible flights. Have your confirmation code ready.' }
    ]
  },
  'sun-country-airlines': {
    name: 'Sun Country Airlines',
    phone: '1-651-905-2737',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'suncountry.com chat or Twitter @SunCountryAir',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'vacation packages'],
    faq: [
      { q: 'How do I reach a human at Sun Country Airlines?', a: 'Call 1-651-905-2737, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Sun Country agent.' },
      { q: 'What is the best time to call Sun Country Airlines?', a: 'Between 7am and 9am CST on weekdays gives the shortest wait times.' },
      { q: 'Can Sun Country process refunds over the phone?', a: 'Yes. Sun Country agents can handle refunds for eligible tickets. Have your booking reference ready.' }
    ]
  },
  'avelo-airlines': {
    name: 'Avelo Airlines',
    phone: '1-346-616-9500',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent to reach a human',
    bestTime: '7am-9am CST weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'aveloair.com chat or Twitter @aveloairlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I talk to a human at Avelo Airlines?', a: 'Call 1-346-616-9500, press 1 for English, press 2 for existing reservations, then say agent to reach a live Avelo representative.' },
      { q: 'What is the best time to call Avelo Airlines?', a: 'Between 7am and 9am CST on weekdays. Avelo is a smaller carrier with generally shorter wait times.' },
      { q: 'Can Avelo Airlines process refunds by phone?', a: 'Yes. Avelo agents can process refunds for cancelled flights and eligible fares.' }
    ]
  },
  'breeze-airways': {
    name: 'Breeze Airways',
    phone: '1-501-273-3931',
    ivr: 'Press 1 for English, press 2 for existing bookings, say agent or press 0',
    bestTime: '7am-9am EST weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'flybreeze.com chat or Twitter @BreezeAirways',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'breezepoints'],
    faq: [
      { q: 'How do I reach a human at Breeze Airways?', a: 'Call 1-501-273-3931, press 1 for English, press 2 for existing bookings, then say agent or press 0 to reach a live Breeze representative.' },
      { q: 'What is the best time to call Breeze Airways?', a: 'Between 7am and 9am EST on weekdays. Breeze is a newer carrier with generally manageable wait times.' },
      { q: 'Can Breeze Airways handle refunds over the phone?', a: 'Yes. Breeze agents can process refunds for cancelled flights and eligible fares.' }
    ]
  },
  'allegiant-air': {
    name: 'Allegiant Air',
    phone: '1-702-505-8888',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '6am-8am PST weekdays',
    waitTime: '20-30 minutes average',
    alternative: 'allegiantair.com chat or Twitter @Allegiant',
    issues: ['refund', 'rebooking', 'baggage fees', 'cancellation', 'allways rewards'],
    faq: [
      { q: 'How do I talk to a human at Allegiant Air?', a: 'Call 1-702-505-8888, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Allegiant agent.' },
      { q: 'What is the best time to call Allegiant Air?', a: 'Between 6am and 8am PST on weekdays. Allegiant can have long wait times especially around holiday periods.' },
      { q: 'Can Allegiant Air process refunds over the phone?', a: 'Allegiant agents can process refunds for cancelled flights. Note Allegiant has strict policies on non-refundable fares.' }
    ]
  },
  'air-transat': {
    name: 'Air Transat',
    phone: '1-877-872-6728',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am EST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'airtransat.com chat or Twitter @AirTransat',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'club transat'],
    faq: [
      { q: 'How do I reach a human at Air Transat?', a: 'Call 1-877-872-6728, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Air Transat agent.' },
      { q: 'What is the best time to call Air Transat?', a: 'Between 7am and 9am EST on weekdays gives the shortest wait times.' },
      { q: 'Can Air Transat process refunds over the phone?', a: 'Yes. Air Transat agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'westjet': {
    name: 'WestJet',
    phone: '1-888-937-8538',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent or press 0',
    bestTime: '6am-8am MST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'westjet.com chat or Twitter @WestJet',
    issues: ['refund', 'rebooking', 'westjet rewards', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at WestJet?', a: 'Call 1-888-937-8538, press 1 for English, press 2 for existing reservations, then say agent or press 0 to reach a live WestJet representative.' },
      { q: 'What is the best time to call WestJet?', a: 'Between 6am and 8am MST on weekdays. WestJet operates out of Calgary and has generally reasonable wait times.' },
      { q: 'Can WestJet process refunds over the phone?', a: 'Yes. WestJet agents can handle refunds for cancelled and eligible flights. Have your booking reference ready.' }
    ]
  },
  'virgin-atlantic': {
    name: 'Virgin Atlantic',
    phone: '1-800-862-8621',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 or say agent',
    bestTime: '7am-9am GMT weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'virginatlantic.com chat or Twitter @VirginAtlantic',
    issues: ['refund', 'rebooking', 'flying club miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Virgin Atlantic?', a: 'Call 1-800-862-8621, press 1 for English, press 2 for existing bookings, then press 0 or say agent to reach a live Virgin Atlantic representative.' },
      { q: 'What is the best time to call Virgin Atlantic?', a: 'Between 7am and 9am GMT on weekdays. Virgin Atlantic has a reputation for good customer service.' },
      { q: 'Can Virgin Atlantic process refunds over the phone?', a: 'Yes. Virgin Atlantic agents can handle refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'iberia': {
    name: 'Iberia',
    phone: '1-800-772-4642',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'iberia.com chat or Twitter @Iberia_en',
    issues: ['refund', 'rebooking', 'iberia plus miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at Iberia?', a: 'Call 1-800-772-4642, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Iberia agent.' },
      { q: 'What is the best time to call Iberia?', a: 'Between 8am and 10am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Iberia process refunds over the phone?', a: 'Yes. Iberia agents can handle refunds for cancelled and eligible tickets. Have your booking reference ready.' }
    ]
  },
  'swiss-airlines': {
    name: 'SWISS International Air Lines',
    phone: '1-877-359-7947',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'swiss.com chat or Twitter @FlySWISS',
    issues: ['refund', 'rebooking', 'miles and more', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at SWISS Airlines?', a: 'Call 1-877-359-7947, press 1 for English, press 2 for existing bookings, then press 0 to reach a live SWISS agent.' },
      { q: 'What is the best time to call SWISS Airlines?', a: 'Between 7am and 9am CET on weekdays. SWISS is known for efficient customer service.' },
      { q: 'Can SWISS Airlines process refunds over the phone?', a: 'Yes. SWISS agents can handle refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'ana': {
    name: 'All Nippon Airways (ANA)',
    phone: '1-800-235-9262',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am JST weekdays',
    waitTime: '8-12 minutes average',
    alternative: 'ana.co.jp chat or Twitter @ANAWorldwide',
    issues: ['refund', 'rebooking', 'ana mileage club', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at ANA?', a: 'Call 1-800-235-9262, press 1 for English, press 2 for existing reservations, then press 0 to reach a live ANA representative.' },
      { q: 'What is the best time to call ANA customer service?', a: 'Between 8am and 10am JST on weekdays. ANA is known for exceptional customer service and shorter wait times.' },
      { q: 'Can ANA process refunds over the phone?', a: 'Yes. ANA agents can handle refunds, rebooking, and upgrades. Have your booking reference ready.' }
    ]
  },
  'japan-airlines': {
    name: 'Japan Airlines (JAL)',
    phone: '1-800-525-3663',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am JST weekdays',
    waitTime: '8-12 minutes average',
    alternative: 'jal.co.jp chat or Twitter @JAL_Official_jp',
    issues: ['refund', 'rebooking', 'jal mileage bank', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Japan Airlines?', a: 'Call 1-800-525-3663, press 1 for English, press 2 for existing bookings, then press 0 to reach a live JAL agent.' },
      { q: 'What is the best time to call Japan Airlines?', a: 'Between 8am and 10am JST on weekdays. JAL is known for excellent customer service standards.' },
      { q: 'Can Japan Airlines process refunds over the phone?', a: 'Yes. JAL agents can handle refunds, rebooking, and upgrades. Have your booking reference ready.' }
    ]
  },
  'korean-air': {
    name: 'Korean Air',
    phone: '1-800-438-5000',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am KST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'koreanair.com chat or Twitter @KoreanAir_KE',
    issues: ['refund', 'rebooking', 'skypass miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at Korean Air?', a: 'Call 1-800-438-5000, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Korean Air agent.' },
      { q: 'What is the best time to call Korean Air?', a: 'Between 8am and 10am KST on weekdays gives the shortest wait times.' },
      { q: 'Can Korean Air process refunds over the phone?', a: 'Yes. Korean Air agents can handle refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'air-new-zealand': {
    name: 'Air New Zealand',
    phone: '1-800-262-1234',
    ivr: 'Press 1 for English, press 2 for existing bookings, say agent or press 0',
    bestTime: '8am-10am NZST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'airnewzealand.com chat or Twitter @AirNZNews',
    issues: ['refund', 'rebooking', 'airpoints', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Air New Zealand?', a: 'Call 1-800-262-1234, press 1 for English, press 2 for existing bookings, then say agent or press 0 to reach a live Air New Zealand agent.' },
      { q: 'What is the best time to call Air New Zealand?', a: 'Between 8am and 10am NZST on weekdays. Air New Zealand is known for good customer service.' },
      { q: 'Can Air New Zealand process refunds over the phone?', a: 'Yes. Air New Zealand agents can handle refunds, rebooking, and upgrades over the phone.' }
    ]
  },
  'thai-airways': {
    name: 'Thai Airways',
    phone: '1-212-949-8424',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am ICT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'thaiairways.com chat or Twitter @ThaiAirways',
    issues: ['refund', 'rebooking', 'royal orchid plus', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I talk to a human at Thai Airways?', a: 'Call 1-212-949-8424, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Thai Airways agent.' },
      { q: 'What is the best time to call Thai Airways?', a: 'Between 8am and 10am ICT on weekdays gives the shortest wait times.' },
      { q: 'Can Thai Airways process refunds over the phone?', a: 'Yes. Thai Airways agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'malaysia-airlines': {
    name: 'Malaysia Airlines',
    phone: '1-800-552-9264',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am MYT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'malaysiaairlines.com chat or Twitter @MAS',
    issues: ['refund', 'rebooking', 'enrich miles', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Malaysia Airlines?', a: 'Call 1-800-552-9264, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Malaysia Airlines agent.' },
      { q: 'What is the best time to call Malaysia Airlines?', a: 'Between 8am and 10am MYT on weekdays gives the shortest wait times.' },
      { q: 'Can Malaysia Airlines process refunds over the phone?', a: 'Yes. Malaysia Airlines agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'spicejet': {
    name: 'SpiceJet',
    phone: '1-800-180-3333',
    ivr: 'Press 1 for English, press 2 for existing bookings, say agent or press 0',
    bestTime: '7am-9am IST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'spicejet.com chat or Twitter @flyspicejet',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'spicecash'],
    faq: [
      { q: 'How do I talk to a human at SpiceJet?', a: 'Call 1-800-180-3333, press 1 for English, press 2 for existing bookings, then say agent or press 0 to reach a live SpiceJet representative.' },
      { q: 'What is the best time to call SpiceJet?', a: 'Between 7am and 9am IST on weekdays gives the shortest wait times.' },
      { q: 'Can SpiceJet process refunds over the phone?', a: 'Yes. SpiceJet agents can handle refunds for cancelled and eligible tickets. Have your PNR ready.' }
    ]
  },
  'vistara': {
    name: 'Vistara',
    phone: '1-800-908-1515',
    ivr: 'Press 1 for English, press 2 for existing reservations, say agent or press 0',
    bestTime: '7am-9am IST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'airvistara.com chat or Twitter @airvistara',
    issues: ['refund', 'rebooking', 'club vistara points', 'upgrade', 'baggage'],
    faq: [
      { q: 'How do I reach a human at Vistara?', a: 'Call 1-800-908-1515, press 1 for English, press 2 for existing reservations, then say agent or press 0 to reach a live Vistara representative.' },
      { q: 'What is the best time to call Vistara?', a: 'Between 7am and 9am IST on weekdays. Vistara is known for good customer service standards.' },
      { q: 'Can Vistara process refunds over the phone?', a: 'Yes. Vistara agents can handle refunds for cancelled and eligible flights. Have your PNR ready.' }
    ]
  }
}