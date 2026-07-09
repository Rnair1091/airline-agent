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
,
  'easyjet': {
    name: 'EasyJet',
    phone: '+44 (0)330 5515151',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 3 for new bookings, press 4 for baggage queries, press 0 to speak to an agent.',
    bestTime: '8am-10am GMT weekdays, or late evenings after 8pm GMT.',
    waitTime: '15-30 minutes average, longer during peak travel seasons or disruptions.',
    alternative: 'EasyJet Help Centre on their website (easyjet.com/en/help), Live Chat available via the \'Contact Us\' section on their website, or Twitter handle @easyJet.',
    issues: ["refund","rebooking","baggage","cancellation","flight changes","check-in issues","special assistance"],
    faq: [
      { q: 'How do I talk to a human at EasyJet?', a: 'You can call EasyJet customer service at +44 (0)330 5515151. Follow the IVR prompts: Press 1 for English, then typically press 0 or listen for options to speak to an agent. For existing bookings, press 2, and you may find an option to speak to a representative within that menu. Be prepared for potential wait times, especially during peak hours.' },
      { q: 'What is the best time to call EasyJet?', a: 'The best time to call EasyJet customer service is generally early in the morning, between 8am and 10am GMT on weekdays, or later in the evening after 8pm GMT. Avoid calling during lunch hours (12pm-2pm GMT) and immediately after major flight disruptions, as wait times will be significantly longer.' },
      { q: 'Can EasyJet process refunds over the phone?', a: 'EasyJet can process refunds over the phone, primarily for flights cancelled by EasyJet or in specific circumstances outlined in their terms and conditions (e.g., certain medical reasons with proof). For voluntary cancellations or changes, EasyJet\'s standard policy is generally non-refundable, though you may be able to change your flight for a fee. Any eligible refunds are typically processed back to the original payment method.' }
    ]
  }
,
  'transavia': {
    name: 'Transavia',
    phone: '+31 (0)20 215 0000',
    ivr: 'When calling, you will typically be presented with options for existing bookings, new bookings, flight changes or cancellations, baggage inquiries (lost, delayed, or damaged), special assistance, and general questions or complaints. Listen carefully to select the option that best matches your query.',
    bestTime: 'Weekdays between 9:00 AM and 11:00 AM CET, or between 2:00 PM and 4:00 PM CET. Avoid Mondays, Fridays, and peak lunch hours for potentially shorter wait times.',
    waitTime: 'Average wait times can range from 10 to 30 minutes, depending on the time of day and call volume. During peak travel seasons or disruptions, wait times may be longer.',
    alternative: 'Transavia offers alternative contact methods including WhatsApp (+31 (0)6 83 83 83 83), Facebook Messenger, Twitter (@Transavia), and a contact form available on their official website for non-urgent inquiries.',
    issues: ["Flight changes and cancellations","New flight bookings","Baggage inquiries (lost, delayed, damaged)","Refund requests","Special assistance and medical needs","Online check-in issues","Complaints and feedback"],
    faq: [
      { q: 'How can I change my Transavia flight?', a: 'You can usually change your flight online via \'My Transavia\' on their website, provided your ticket type allows changes. Fees and fare differences may apply. For complex changes or if online options are unavailable, contact customer service.' },
      { q: 'What is Transavia\'s baggage policy?', a: 'Transavia\'s baggage policy varies by ticket type. Hand luggage (small bag) is typically free, but checked luggage usually incurs a fee and has weight/size restrictions. Always check the specific allowance for your booking on their website or in your booking confirmation.' },
      { q: 'How do I check in for my Transavia flight?', a: 'Online check-in is available from 30 hours up to 4 hours before departure via the Transavia website or app. You can also check in at the airport, but be aware of potential fees for airport check-in depending on your ticket type.' },
      { q: 'What should I do if my Transavia flight is delayed or cancelled?', a: 'If your flight is delayed or cancelled, Transavia will usually inform you via email or SMS. You may be entitled to rebooking on an alternative flight, a refund, or compensation, depending on the length of the delay and the reason for the disruption. Check their website for specific policies on passenger rights.' }
    ]
  },
  'eurowings': {
    name: 'Eurowings',
    phone: '+49 (0)221 599 1000',
    ivr: 'The IVR typically offers options for new bookings, existing booking changes or cancellations, baggage inquiries (lost, delayed, damaged), flight status information, special assistance, and general inquiries. Listen carefully for the most relevant option.',
    bestTime: 'Early mornings (8:00 AM - 10:00 AM CET) or late afternoons (4:00 PM - 6:00 PM CET) on weekdays, avoiding peak lunch hours and weekends, generally have shorter wait times.',
    waitTime: 'Wait times can vary significantly based on call volume, time of day, and current events. Expect longer waits during peak travel seasons, flight disruptions, or public holidays. It\'s advisable to check their social media for real-time updates on service levels.',
    alternative: 'Eurowings offers several alternative contact methods including a contact form on their website (for email inquiries), a chatbot for immediate assistance, and direct messaging via their official social media channels (Facebook, Twitter). Their comprehensive FAQ section can also resolve many common issues.',
    issues: ["Booking changes and cancellations","Refund requests","Baggage inquiries (lost, delayed, damaged)","Flight status and delays","Check-in assistance","Special assistance requests","Complaints and feedback","My Eurowings account support"],
    faq: [
      { q: 'How can I change or cancel my Eurowings flight?', a: 'You can usually change or cancel your flight online via \'My Eurowings\' or \'Manage booking\' on their website, depending on your fare type and the terms and conditions. Fees may apply. For certain changes or cancellations, you might need to contact customer service.' },
      { q: 'What are the baggage rules for Eurowings?', a: 'Baggage rules vary depending on your fare (BASIC, SMART, BIZCLASS) and destination. You can find detailed information on permitted carry-on and checked baggage sizes, weights, and fees on the Eurowings website under the \'Baggage\' section.' },
      { q: 'How do I check in for my Eurowings flight?', a: 'You can check in online via the Eurowings website or mobile app starting 72 hours before departure. Airport check-in counters and self-service kiosks are also available at most airports, but online check-in is recommended for convenience.' },
      { q: 'What should I do if my Eurowings flight is delayed or cancelled?', a: 'If your flight is delayed or cancelled, Eurowings will typically inform you via email or SMS. You can check the latest flight status on their website or app. Depending on the circumstances, you may be entitled to rebooking, a refund, or compensation according to EU regulations.' },
      { q: 'How can I request a refund from Eurowings?', a: 'Refund requests can usually be submitted through the contact form on the Eurowings website, especially for cancelled flights or specific fare types. Ensure you provide all necessary booking details and reasons for the refund.' }
    ]
  },
  'tap-air-portugal': {
    name: 'TAP Air Portugal',
    phone: '+1 800 221 7370 (USA & Canada)',
    ivr: 'Typical options include: Press 1 for new bookings, 2 for existing reservations, 3 for flight status, 4 for baggage inquiries, 5 for Miles&Go program, or 0 to speak with an agent.',
    bestTime: 'Early mornings (e.g., 8 AM - 10 AM local time) or late evenings (e.g., after 6 PM local time) on weekdays, avoiding peak lunch hours and weekends.',
    waitTime: 'Highly variable, often ranging from 15-30 minutes during off-peak times, but can exceed 60 minutes during peak travel periods or for complex issues.',
    alternative: 'Online contact form on their website, TAP Talk (live chat) available on their website, social media (Facebook, Twitter), and email for specific departments (e.g., refunds, special assistance).',
    issues: ["Flight booking changes and cancellations","Refund requests","Baggage inquiries (lost, damaged, delayed)","Flight status and delays","Check-in assistance","Miles&Go program support","Special assistance requests"],
    faq: [
      { q: 'How can I change or cancel my flight?', a: 'You can manage your booking online via the \'Manage Booking\' section on the TAP Air Portugal website or mobile app. Changes and cancellations may be subject to fare rules and fees. For complex changes, contact customer service.' },
      { q: 'What is TAP Air Portugal\'s baggage policy?', a: 'Baggage allowance varies by fare type, destination, and class of service. Details regarding checked baggage, carry-on baggage, and excess baggage fees can be found on the \'Baggage\' section of the TAP Air Portugal website.' },
      { q: 'How do I request a refund?', a: 'Refund requests for eligible tickets can be submitted through the dedicated \'Refund Request\' form available on the TAP Air Portugal website. Processing times may vary.' },
      { q: 'When can I check-in for my flight?', a: 'Online check-in is typically available from 36 hours up to 90 minutes before your scheduled departure time. You can check-in via the TAP Air Portugal website or mobile app.' }
    ]
  },
  'ryanair': {
    name: 'Ryanair',
    phone: '0818-30-30-30',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am GMT weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'ryanair.com live chat or Twitter @Ryanair',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'check-in'],
    faq: [
      { q: 'How do I talk to a human at Ryanair?', a: 'Call 0818-30-30-30, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Ryanair agent.' },
      { q: 'What is the best time to call Ryanair?', a: 'Between 8am and 10am GMT on weekdays. Ryanair has high call volumes during afternoons and weekends.' },
      { q: 'Can Ryanair process refunds over the phone?', a: 'Yes. Ryanair agents can process refunds for cancelled flights. Note Ryanair has strict no-refund policies on non-refundable fares.' }
    ]
  },
  'wizz-air': {
    name: 'Wizz Air',
    phone: '0330-977-0444',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '20-30 minutes average',
    alternative: 'wizzair.com chat or Twitter @wizzair',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'wizz flex'],
    faq: [
      { q: 'How do I talk to a human at Wizz Air?', a: 'Call 0330-977-0444, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Wizz Air agent.' },
      { q: 'What is the best time to call Wizz Air?', a: 'Between 7am and 9am CET on weekdays. Wizz Air has high call volumes during peak travel seasons.' },
      { q: 'Can Wizz Air process refunds over the phone?', a: 'Yes. Wizz Air agents can process refunds for cancelled flights. Have your booking reference ready.' }
    ]
  },
  'norwegian-air': {
    name: 'Norwegian Air',
    phone: '+47-21-49-00-15',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'norwegian.com chat or Twitter @Fly_Norwegian',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'cashpoint'],
    faq: [
      { q: 'How do I reach a human at Norwegian Air?', a: 'Call +47-21-49-00-15, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Norwegian agent.' },
      { q: 'What is the best time to call Norwegian Air?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Norwegian Air process refunds over the phone?', a: 'Yes. Norwegian agents can process refunds for cancelled and eligible flights.' }
    ]
  },
  'vueling': {
    name: 'Vueling',
    phone: '+34-931-51-81-58',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am CET weekdays',
    waitTime: '15-20 minutes average',
    alternative: 'vueling.com chat or Twitter @vueling',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'points'],
    faq: [
      { q: 'How do I talk to a human at Vueling?', a: 'Call +34-931-51-81-58, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Vueling agent.' },
      { q: 'What is the best time to call Vueling?', a: 'Between 8am and 10am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Vueling process refunds over the phone?', a: 'Yes. Vueling agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'aegean-airlines': {
    name: 'Aegean Airlines',
    phone: '+30-210-626-1000',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am EET weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'aegeanair.com chat or Twitter @AegeanAirlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'miles and bonus'],
    faq: [
      { q: 'How do I reach a human at Aegean Airlines?', a: 'Call +30-210-626-1000, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Aegean agent.' },
      { q: 'What is the best time to call Aegean Airlines?', a: 'Between 8am and 10am EET on weekdays gives the shortest wait times.' },
      { q: 'Can Aegean Airlines process refunds over the phone?', a: 'Yes. Aegean agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'finnair': {
    name: 'Finnair',
    phone: '+358-9-818-0800',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am EET weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'finnair.com chat or Twitter @Finnair',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'finnair plus'],
    faq: [
      { q: 'How do I reach a human at Finnair?', a: 'Call +358-9-818-0800, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Finnair agent.' },
      { q: 'What is the best time to call Finnair?', a: 'Between 7am and 9am EET on weekdays gives the shortest wait times.' },
      { q: 'Can Finnair process refunds over the phone?', a: 'Yes. Finnair agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'sas-scandinavian': {
    name: 'SAS Scandinavian Airlines',
    phone: '+46-8-797-4000',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'flysas.com chat or Twitter @SAS',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'eurobonus'],
    faq: [
      { q: 'How do I talk to a human at SAS?', a: 'Call +46-8-797-4000, press 1 for English, press 2 for existing reservations, then press 0 to reach a live SAS agent.' },
      { q: 'What is the best time to call SAS?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can SAS process refunds over the phone?', a: 'Yes. SAS agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'lot-polish': {
    name: 'LOT Polish Airlines',
    phone: '+48-22-577-9500',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'lot.com chat or Twitter @LOTairlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'miles and more'],
    faq: [
      { q: 'How do I reach a human at LOT Polish Airlines?', a: 'Call +48-22-577-9500, press 1 for English, press 2 for existing bookings, then press 0 to reach a live LOT agent.' },
      { q: 'What is the best time to call LOT Polish Airlines?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can LOT Polish Airlines process refunds over the phone?', a: 'Yes. LOT agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'austrian-airlines': {
    name: 'Austrian Airlines',
    phone: '+43-5-1766-1000',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'austrian.com chat or Twitter @AustrianAirlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'miles and more'],
    faq: [
      { q: 'How do I talk to a human at Austrian Airlines?', a: 'Call +43-5-1766-1000, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Austrian agent.' },
      { q: 'What is the best time to call Austrian Airlines?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Austrian Airlines process refunds over the phone?', a: 'Yes. Austrian agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'brussels-airlines': {
    name: 'Brussels Airlines',
    phone: '+32-2-723-2345',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'brusselsairlines.com chat or Twitter @BrusselsAirline',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'miles and more'],
    faq: [
      { q: 'How do I reach a human at Brussels Airlines?', a: 'Call +32-2-723-2345, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Brussels Airlines agent.' },
      { q: 'What is the best time to call Brussels Airlines?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Brussels Airlines process refunds over the phone?', a: 'Yes. Brussels Airlines agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'icelandair': {
    name: 'Icelandair',
    phone: '+354-50-50-100',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am GMT weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'icelandair.com chat or Twitter @Icelandair',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'saga club'],
    faq: [
      { q: 'How do I talk to a human at Icelandair?', a: 'Call +354-50-50-100, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Icelandair agent.' },
      { q: 'What is the best time to call Icelandair?', a: 'Between 7am and 9am GMT on weekdays gives the shortest wait times.' },
      { q: 'Can Icelandair process refunds over the phone?', a: 'Yes. Icelandair agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'air-europa': {
    name: 'Air Europa',
    phone: '+34-902-401-501',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'aireuropa.com chat or Twitter @AirEuropa',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'suma miles'],
    faq: [
      { q: 'How do I reach a human at Air Europa?', a: 'Call +34-902-401-501, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Air Europa agent.' },
      { q: 'What is the best time to call Air Europa?', a: 'Between 8am and 10am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Air Europa process refunds over the phone?', a: 'Yes. Air Europa agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'pegasus-airlines': {
    name: 'Pegasus Airlines',
    phone: '+90-888-228-1212',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am TRT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'flypgs.com chat or Twitter @flypgs',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'bolfree'],
    faq: [
      { q: 'How do I talk to a human at Pegasus Airlines?', a: 'Call +90-888-228-1212, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Pegasus agent.' },
      { q: 'What is the best time to call Pegasus Airlines?', a: 'Between 8am and 10am TRT on weekdays gives the shortest wait times.' },
      { q: 'Can Pegasus Airlines process refunds over the phone?', a: 'Yes. Pegasus agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'sunexpress': {
    name: 'SunExpress',
    phone: '+49-6171-6780-500',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'sunexpress.com chat or Twitter @SunExpress',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I reach a human at SunExpress?', a: 'Call +49-6171-6780-500, press 1 for English, press 2 for existing bookings, then press 0 to reach a live SunExpress agent.' },
      { q: 'What is the best time to call SunExpress?', a: 'Between 8am and 10am CET on weekdays gives the shortest wait times.' },
      { q: 'Can SunExpress process refunds over the phone?', a: 'Yes. SunExpress agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'flydubai': {
    name: 'flydubai',
    phone: '+971-600-54-4445',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am GST weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'flydubai.com chat or Twitter @flydubai',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'open return'],
    faq: [
      { q: 'How do I talk to a human at flydubai?', a: 'Call +971-600-54-4445, press 1 for English, press 2 for existing reservations, then press 0 to reach a live flydubai agent.' },
      { q: 'What is the best time to call flydubai?', a: 'Between 8am and 10am GST on weekdays gives the shortest wait times.' },
      { q: 'Can flydubai process refunds over the phone?', a: 'Yes. flydubai agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'air-arabia': {
    name: 'Air Arabia',
    phone: '+971-6-558-0000',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am GST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'airarabia.com chat or Twitter @airarabia',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'airewards'],
    faq: [
      { q: 'How do I reach a human at Air Arabia?', a: 'Call +971-6-558-0000, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Air Arabia agent.' },
      { q: 'What is the best time to call Air Arabia?', a: 'Between 8am and 10am GST on weekdays gives the shortest wait times.' },
      { q: 'Can Air Arabia process refunds over the phone?', a: 'Yes. Air Arabia agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'gulf-air': {
    name: 'Gulf Air',
    phone: '+973-17-373-737',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am AST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'gulfair.com chat or Twitter @GulfAir',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'falconflyer'],
    faq: [
      { q: 'How do I talk to a human at Gulf Air?', a: 'Call +973-17-373-737, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Gulf Air agent.' },
      { q: 'What is the best time to call Gulf Air?', a: 'Between 8am and 10am AST on weekdays gives the shortest wait times.' },
      { q: 'Can Gulf Air process refunds over the phone?', a: 'Yes. Gulf Air agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'oman-air': {
    name: 'Oman Air',
    phone: '+968-2453-1111',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am GST weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'omanair.com chat or Twitter @OmanAir',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'sindbad miles'],
    faq: [
      { q: 'How do I reach a human at Oman Air?', a: 'Call +968-2453-1111, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Oman Air agent.' },
      { q: 'What is the best time to call Oman Air?', a: 'Between 8am and 10am GST on weekdays gives the shortest wait times.' },
      { q: 'Can Oman Air process refunds over the phone?', a: 'Yes. Oman Air agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'royal-jordanian': {
    name: 'Royal Jordanian',
    phone: '+962-6-510-0000',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am EET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'rj.com chat or Twitter @RoyalJordanian',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'royal plus'],
    faq: [
      { q: 'How do I talk to a human at Royal Jordanian?', a: 'Call +962-6-510-0000, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Royal Jordanian agent.' },
      { q: 'What is the best time to call Royal Jordanian?', a: 'Between 8am and 10am EET on weekdays gives the shortest wait times.' },
      { q: 'Can Royal Jordanian process refunds over the phone?', a: 'Yes. Royal Jordanian agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'ethiopian-airlines': {
    name: 'Ethiopian Airlines',
    phone: '+251-116-179-900',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am EAT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'ethiopianairlines.com chat or Twitter @flyethiopian',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'sheba miles'],
    faq: [
      { q: 'How do I reach a human at Ethiopian Airlines?', a: 'Call +251-116-179-900, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Ethiopian Airlines agent.' },
      { q: 'What is the best time to call Ethiopian Airlines?', a: 'Between 8am and 10am EAT on weekdays gives the shortest wait times.' },
      { q: 'Can Ethiopian Airlines process refunds over the phone?', a: 'Yes. Ethiopian Airlines agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'kenya-airways': {
    name: 'Kenya Airways',
    phone: '+254-20-327-4747',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am EAT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'kenya-airways.com chat or Twitter @KenyaAirways',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'asante rewards'],
    faq: [
      { q: 'How do I talk to a human at Kenya Airways?', a: 'Call +254-20-327-4747, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Kenya Airways agent.' },
      { q: 'What is the best time to call Kenya Airways?', a: 'Between 8am and 10am EAT on weekdays gives the shortest wait times.' },
      { q: 'Can Kenya Airways process refunds over the phone?', a: 'Yes. Kenya Airways agents can handle refunds for cancelled and eligible tickets.' }
    ]
  }
,
  'aeromexico': {
    name: 'Aeromexico',
    phone: '1-800-237-6639',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am CST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'aeromexico.com chat or Twitter @AeromexicoSA',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'club premier miles'],
    faq: [
      { q: 'How do I talk to a human at Aeromexico?', a: 'Call 1-800-237-6639, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Aeromexico agent.' },
      { q: 'What is the best time to call Aeromexico?', a: 'Between 7am and 9am CST on weekdays gives the shortest wait times.' },
      { q: 'Can Aeromexico process refunds over the phone?', a: 'Yes. Aeromexico agents can handle refunds for cancelled and eligible flights. Have your booking reference ready.' }
    ]
  },
  'latam-airlines': {
    name: 'LATAM Airlines',
    phone: '1-866-435-9526',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am EST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'latamairlines.com chat or Twitter @LATAM_Airlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'latam pass miles'],
    faq: [
      { q: 'How do I reach a human at LATAM Airlines?', a: 'Call 1-866-435-9526, press 1 for English, press 2 for existing bookings, then press 0 to reach a live LATAM agent.' },
      { q: 'What is the best time to call LATAM Airlines?', a: 'Between 7am and 9am EST on weekdays gives the shortest wait times.' },
      { q: 'Can LATAM Airlines process refunds over the phone?', a: 'Yes. LATAM agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'avianca': {
    name: 'Avianca',
    phone: '1-800-284-2622',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am EST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'avianca.com chat or Twitter @Avianca',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'lifemiles'],
    faq: [
      { q: 'How do I talk to a human at Avianca?', a: 'Call 1-800-284-2622, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Avianca agent.' },
      { q: 'What is the best time to call Avianca?', a: 'Between 7am and 9am EST on weekdays gives the shortest wait times.' },
      { q: 'Can Avianca process refunds over the phone?', a: 'Yes. Avianca agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'copa-airlines': {
    name: 'Copa Airlines',
    phone: '1-800-359-2672',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am EST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'copaair.com chat or Twitter @CopaAirlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'connectmiles'],
    faq: [
      { q: 'How do I reach a human at Copa Airlines?', a: 'Call 1-800-359-2672, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Copa Airlines agent.' },
      { q: 'What is the best time to call Copa Airlines?', a: 'Between 7am and 9am EST on weekdays gives the shortest wait times.' },
      { q: 'Can Copa Airlines process refunds over the phone?', a: 'Yes. Copa agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'aer-lingus': {
    name: 'Aer Lingus',
    phone: '1-800-474-7424',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am GMT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'aerlingus.com chat or Twitter @AerLingus',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'aer club miles'],
    faq: [
      { q: 'How do I talk to a human at Aer Lingus?', a: 'Call 1-800-474-7424, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Aer Lingus agent.' },
      { q: 'What is the best time to call Aer Lingus?', a: 'Between 7am and 9am GMT on weekdays gives the shortest wait times.' },
      { q: 'Can Aer Lingus process refunds over the phone?', a: 'Yes. Aer Lingus agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'air-china': {
    name: 'Air China',
    phone: '1-800-882-8122',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am CST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'airchina.com chat or Twitter @airchinaUS',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'phoenix miles'],
    faq: [
      { q: 'How do I reach a human at Air China?', a: 'Call 1-800-882-8122, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Air China agent.' },
      { q: 'What is the best time to call Air China?', a: 'Between 8am and 10am CST on weekdays gives the shortest wait times.' },
      { q: 'Can Air China process refunds over the phone?', a: 'Yes. Air China agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'china-eastern': {
    name: 'China Eastern Airlines',
    phone: '1-626-583-1500',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am CST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'ceair.com chat or Twitter @ChinaEasternAir',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'eastern miles'],
    faq: [
      { q: 'How do I talk to a human at China Eastern?', a: 'Call 1-626-583-1500, press 1 for English, press 2 for existing reservations, then press 0 to reach a live China Eastern agent.' },
      { q: 'What is the best time to call China Eastern?', a: 'Between 8am and 10am CST on weekdays gives the shortest wait times.' },
      { q: 'Can China Eastern process refunds over the phone?', a: 'Yes. China Eastern agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'china-southern': {
    name: 'China Southern Airlines',
    phone: '1-888-338-8988',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am CST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'csair.com chat or Twitter @CSAir',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'sky pearl miles'],
    faq: [
      { q: 'How do I reach a human at China Southern?', a: 'Call 1-888-338-8988, press 1 for English, press 2 for existing bookings, then press 0 to reach a live China Southern agent.' },
      { q: 'What is the best time to call China Southern?', a: 'Between 8am and 10am CST on weekdays gives the shortest wait times.' },
      { q: 'Can China Southern process refunds over the phone?', a: 'Yes. China Southern agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'eva-air': {
    name: 'EVA Air',
    phone: '1-800-695-1188',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am CST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'evaair.com chat or Twitter @evaairways',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'infinity mileagelands'],
    faq: [
      { q: 'How do I talk to a human at EVA Air?', a: 'Call 1-800-695-1188, press 1 for English, press 2 for existing reservations, then press 0 to reach a live EVA Air agent.' },
      { q: 'What is the best time to call EVA Air?', a: 'Between 8am and 10am CST on weekdays gives the shortest wait times.' },
      { q: 'Can EVA Air process refunds over the phone?', a: 'Yes. EVA Air agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'china-airlines': {
    name: 'China Airlines',
    phone: '1-800-227-5118',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am CST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'china-airlines.com chat or Twitter @ChinaAirlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'dynasty flyer miles'],
    faq: [
      { q: 'How do I reach a human at China Airlines?', a: 'Call 1-800-227-5118, press 1 for English, press 2 for existing bookings, then press 0 to reach a live China Airlines agent.' },
      { q: 'What is the best time to call China Airlines?', a: 'Between 8am and 10am CST on weekdays gives the shortest wait times.' },
      { q: 'Can China Airlines process refunds over the phone?', a: 'Yes. China Airlines agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'asiana-airlines': {
    name: 'Asiana Airlines',
    phone: '1-800-227-4262',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am KST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'flyasiana.com chat or Twitter @AsianaAirlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'asiana club miles'],
    faq: [
      { q: 'How do I talk to a human at Asiana Airlines?', a: 'Call 1-800-227-4262, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Asiana agent.' },
      { q: 'What is the best time to call Asiana Airlines?', a: 'Between 8am and 10am KST on weekdays gives the shortest wait times.' },
      { q: 'Can Asiana Airlines process refunds over the phone?', a: 'Yes. Asiana agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'el-al': {
    name: 'El Al Israel Airlines',
    phone: '1-800-223-6700',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am IST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'elal.com chat or Twitter @EL_AL_AIRLINES',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'matmid miles'],
    faq: [
      { q: 'How do I reach a human at El Al?', a: 'Call 1-800-223-6700, press 1 for English, press 2 for existing bookings, then press 0 to reach a live El Al agent.' },
      { q: 'What is the best time to call El Al?', a: 'Between 8am and 10am IST on weekdays gives the shortest wait times. Note El Al does not operate on the Jewish Sabbath.' },
      { q: 'Can El Al process refunds over the phone?', a: 'Yes. El Al agents can handle refunds for cancelled and eligible tickets.' }
    ]
  },
  'condor': {
    name: 'Condor Airlines',
    phone: '1-866-960-7915',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'condor.com chat or Twitter @Condor',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'bm miles'],
    faq: [
      { q: 'How do I talk to a human at Condor?', a: 'Call 1-866-960-7915, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Condor agent.' },
      { q: 'What is the best time to call Condor?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Condor process refunds over the phone?', a: 'Yes. Condor agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'norse-atlantic': {
    name: 'Norse Atlantic Airways',
    phone: '+47-21-02-00-00',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '7am-9am CET weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'flynorse.com chat or Twitter @flynorse',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I reach a human at Norse Atlantic?', a: 'Call +47-21-02-00-00, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Norse Atlantic agent.' },
      { q: 'What is the best time to call Norse Atlantic?', a: 'Between 7am and 9am CET on weekdays gives the shortest wait times.' },
      { q: 'Can Norse Atlantic process refunds over the phone?', a: 'Yes. Norse Atlantic agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'play-airlines': {
    name: 'PLAY Airlines',
    phone: '+354-571-7520',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am GMT weekdays',
    waitTime: '10-15 minutes average',
    alternative: 'flyplay.com chat or Twitter @flyPLAY',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I talk to a human at PLAY Airlines?', a: 'Call +354-571-7520, press 1 for English, press 2 for existing reservations, then press 0 to reach a live PLAY agent.' },
      { q: 'What is the best time to call PLAY Airlines?', a: 'Between 7am and 9am GMT on weekdays gives the shortest wait times.' },
      { q: 'Can PLAY Airlines process refunds over the phone?', a: 'Yes. PLAY agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'virgin-australia': {
    name: 'Virgin Australia',
    phone: '13-67-89',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am AEST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'virginaustralia.com chat or Twitter @VirginAustralia',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'velocity points'],
    faq: [
      { q: 'How do I reach a human at Virgin Australia?', a: 'Call 13-67-89, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Virgin Australia agent.' },
      { q: 'What is the best time to call Virgin Australia?', a: 'Between 8am and 10am AEST on weekdays gives the shortest wait times.' },
      { q: 'Can Virgin Australia process refunds over the phone?', a: 'Yes. Virgin Australia agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'jetstar': {
    name: 'Jetstar Airways',
    phone: '1-866-397-8170',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am AEST weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'jetstar.com chat or Twitter @JetstarAirways',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'jetstar dollars'],
    faq: [
      { q: 'How do I talk to a human at Jetstar?', a: 'Call 1-866-397-8170, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Jetstar agent.' },
      { q: 'What is the best time to call Jetstar?', a: 'Between 8am and 10am AEST on weekdays gives the shortest wait times.' },
      { q: 'Can Jetstar process refunds over the phone?', a: 'Yes. Jetstar agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'scoot': {
    name: 'Scoot',
    phone: '+65-3157-6434',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am SGT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'flyscoot.com chat or Twitter @flyscoot',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'krisflyer miles'],
    faq: [
      { q: 'How do I reach a human at Scoot?', a: 'Call +65-3157-6434, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Scoot agent.' },
      { q: 'What is the best time to call Scoot?', a: 'Between 8am and 10am SGT on weekdays gives the shortest wait times.' },
      { q: 'Can Scoot process refunds over the phone?', a: 'Yes. Scoot agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'airasia': {
    name: 'AirAsia',
    phone: '+60-3-8660-4343',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am MYT weekdays',
    waitTime: '15-25 minutes average',
    alternative: 'airasia.com chat or Twitter @AirAsia',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'big points'],
    faq: [
      { q: 'How do I talk to a human at AirAsia?', a: 'Call +60-3-8660-4343, press 1 for English, press 2 for existing reservations, then press 0 to reach a live AirAsia agent.' },
      { q: 'What is the best time to call AirAsia?', a: 'Between 8am and 10am MYT on weekdays gives the shortest wait times.' },
      { q: 'Can AirAsia process refunds over the phone?', a: 'Yes. AirAsia agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'garuda-indonesia': {
    name: 'Garuda Indonesia',
    phone: '+62-21-2351-9999',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am WIB weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'garuda-indonesia.com chat or Twitter @IndonesiaGaruda',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'garuda miles'],
    faq: [
      { q: 'How do I reach a human at Garuda Indonesia?', a: 'Call +62-21-2351-9999, press 1 for English, press 2 for existing bookings, then press 0 to reach a live Garuda agent.' },
      { q: 'What is the best time to call Garuda Indonesia?', a: 'Between 8am and 10am WIB on weekdays gives the shortest wait times.' },
      { q: 'Can Garuda Indonesia process refunds over the phone?', a: 'Yes. Garuda agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'vietnam-airlines': {
    name: 'Vietnam Airlines',
    phone: '+84-24-3832-0320',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '8am-10am ICT weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'vietnamairlines.com chat or Twitter @VietnamAirlines',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'lotusmiles'],
    faq: [
      { q: 'How do I talk to a human at Vietnam Airlines?', a: 'Call +84-24-3832-0320, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Vietnam Airlines agent.' },
      { q: 'What is the best time to call Vietnam Airlines?', a: 'Between 8am and 10am ICT on weekdays gives the shortest wait times.' },
      { q: 'Can Vietnam Airlines process refunds over the phone?', a: 'Yes. Vietnam Airlines agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'srilankan-airlines': {
    name: 'SriLankan Airlines',
    phone: '+94-11-977-1979',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am IST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'srilankan.com chat or Twitter @srilankanair',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'flysmilespoints'],
    faq: [
      { q: 'How do I reach a human at SriLankan Airlines?', a: 'Call +94-11-977-1979, press 1 for English, press 2 for existing bookings, then press 0 to reach a live SriLankan Airlines agent.' },
      { q: 'What is the best time to call SriLankan Airlines?', a: 'Between 8am and 10am IST on weekdays gives the shortest wait times.' },
      { q: 'Can SriLankan Airlines process refunds over the phone?', a: 'Yes. SriLankan Airlines agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'akasa-air': {
    name: 'Akasa Air',
    phone: '+91-90-0408-3333',
    ivr: 'Press 1 for English, press 2 for existing reservations, press 0 to reach an agent',
    bestTime: '7am-9am IST weekdays',
    waitTime: '8-15 minutes average',
    alternative: 'akasaair.com chat or Twitter @AkasaAirline',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation'],
    faq: [
      { q: 'How do I talk to a human at Akasa Air?', a: 'Call +91-90-0408-3333, press 1 for English, press 2 for existing reservations, then press 0 to reach a live Akasa Air agent.' },
      { q: 'What is the best time to call Akasa Air?', a: 'Between 7am and 9am IST on weekdays gives the shortest wait times.' },
      { q: 'Can Akasa Air process refunds over the phone?', a: 'Yes. Akasa Air agents can handle refunds for cancelled and eligible flights.' }
    ]
  },
  'south-african-airways': {
    name: 'South African Airways',
    phone: '+27-11-978-5313',
    ivr: 'Press 1 for English, press 2 for existing bookings, press 0 to reach an agent',
    bestTime: '8am-10am SAST weekdays',
    waitTime: '10-20 minutes average',
    alternative: 'flysaa.com chat or Twitter @flysaa',
    issues: ['refund', 'rebooking', 'baggage', 'cancellation', 'voyager miles'],
    faq: [
      { q: 'How do I reach a human at South African Airways?', a: 'Call +27-11-978-5313, press 1 for English, press 2 for existing bookings, then press 0 to reach a live SAA agent.' },
      { q: 'What is the best time to call South African Airways?', a: 'Between 8am and 10am SAST on weekdays gives the shortest wait times.' },
      { q: 'Can South African Airways process refunds over the phone?', a: 'Yes. SAA agents can handle refunds for cancelled and eligible flights.' }
    ]
  }
}