// Visit visa content. Facts checked November 2026; visa rules change often, so every page reminds
// travellers that we confirm current requirements before submitting a file.
import type { QA } from "./study";

export type VisaPage = {
  slug: string; name: string; flag: string;
  metaTitle: string; metaDesc: string; h1: string; lead: string;
  facts: { label: string; value: string }[];
  documents: string[];
  tips: string[];
  faqs: QA[];
};

const commonDocs = [
  "Passport valid for at least 6 months, with blank pages",
  "Recent passport-size photographs to the required specification",
  "CNIC copy",
  "Personal bank statement for recent months",
];

export const visaPages: VisaPage[] = [
  {
    slug: "usa", name: "USA", flag: "us",
    metaTitle: "USA Visit Visa from Pakistan (B1/B2) | Lahore Consultants",
    metaDesc: "USA B1/B2 visit visa from Pakistan with Sky Bridge Consultancy, Lahore. DS-160 form, appointment booking, documents and interview preparation.",
    h1: "USA Visit Visa from Pakistan (B1/B2)",
    lead: "The US B1/B2 visa covers tourism, family visits and short business trips. The decision is made at a personal interview at the US Embassy in Islamabad or the Consulate in Karachi, so a well-prepared file and confident answers matter.",
    facts: [
      { label: "Visa type", value: "B1/B2 visitor visa" },
      { label: "How to apply", value: "DS-160 online form, fee payment and in-person interview" },
      { label: "Where", value: "US Embassy Islamabad or Consulate General Karachi" },
      { label: "Waiting time", value: "Interview waits can be several months. Plan early." },
    ],
    documents: [
      ...commonDocs,
      "DS-160 confirmation page and appointment letter",
      "Employment letter, salary slips or business registration",
      "Tax returns and proof of property or other ties to Pakistan",
      "Travel plan; invitation letter if visiting family",
      "Previous travel history, if any",
    ],
    tips: [
      "The interviewer wants to see strong reasons for you to return to Pakistan: job, business, family and property.",
      "Answer honestly and simply. Never memorise answers or carry fake documents.",
      "Do not buy non-refundable tickets until your visa is issued.",
    ],
    faqs: [
      { q: "How long does it take to get a US visit visa from Pakistan?", a: "The longest part is usually the wait for an interview appointment, which can be several months. After the interview, some applications need extra administrative processing. We recommend starting at least six months before you plan to travel." },
      { q: "What is the US visa fee for Pakistanis?", a: "The application (MRV) fee for B1/B2 is set by the US government and is non-refundable. We confirm the current fee when you apply." },
      { q: "Why are US visas refused?", a: "Most refusals happen when the officer is not convinced you will return to Pakistan. We help you present your ties clearly and honestly." },
      { q: "Can you guarantee my US visa?", a: "No one can. The decision is made only by the US consular officer. We make sure your form and documents are accurate and that you are well prepared for the interview." },
    ],
  },
  {
    slug: "uae", name: "UAE (Dubai)", flag: "ae",
    metaTitle: "Dubai Visit Visa from Pakistan | UAE Tourist Visa Lahore",
    metaDesc: "Dubai and UAE tourist visa from Pakistan with Sky Bridge Consultancy, Lahore. 30 and 60 day visit visas, documents, and complete file preparation.",
    h1: "Dubai & UAE Visit Visa from Pakistan",
    lead: "Dubai is the most popular holiday and family-visit destination for Pakistanis. Pakistani passport holders need a UAE visa arranged before travel, and complete, genuine documents are essential because files are checked carefully.",
    facts: [
      { label: "Visa type", value: "UAE tourist / visit visa (e-visa)" },
      { label: "How to apply", value: "Through an approved sponsor: travel agency, airline, hotel or UAE resident" },
      { label: "Durations", value: "Commonly 30 or 60 days" },
      { label: "Visa on arrival", value: "Not available for Pakistani passport holders" },
    ],
    documents: [
      ...commonDocs,
      "Confirmed return ticket",
      "Hotel booking or host's details if staying with family",
      "Sponsor's Emirates ID and visa copy, if visiting relatives",
    ],
    tips: [
      "Apply only for genuine tourism or family visits. A visit visa does not allow you to work.",
      "Keep your hotel booking and return ticket ready for immigration at the airport.",
      "Overstaying leads to fines and can affect future visas.",
    ],
    faqs: [
      { q: "Can Pakistanis get a UAE visa on arrival?", a: "No. Pakistani passport holders must have a UAE visa issued before they travel." },
      { q: "How long does a Dubai visit visa take?", a: "When the file is complete, processing is usually quick, often a few working days. Incomplete or doubtful files take longer or are refused." },
      { q: "Can I look for a job on a visit visa?", a: "A visit visa is for tourism and family visits. Working on a visit visa is not allowed." },
      { q: "Can I visit other emirates on a Dubai visa?", a: "Yes. A UAE tourist visa lets you travel across all emirates, including Abu Dhabi and Sharjah." },
    ],
  },
  {
    slug: "turkey", name: "Turkey", flag: "tr",
    metaTitle: "Turkey Visit Visa from Pakistan | Tourist Visa Lahore",
    metaDesc: "Turkey tourist visa from Pakistan with Sky Bridge Consultancy, Lahore. Sticker visa files, conditional e-visa eligibility and complete document preparation.",
    h1: "Turkey Visit Visa from Pakistan",
    lead: "From Istanbul's history to Cappadocia's balloons, Turkey is a favourite with Pakistani families. Most Pakistani travellers need a sticker visa, while those holding certain valid visas may qualify for an e-visa.",
    facts: [
      { label: "Sticker visa", value: "Applied through the Turkish visa application channels in Pakistan" },
      { label: "Conditional e-visa", value: "Possible if you hold a valid US, UK, Ireland or Schengen visa or residence permit" },
      { label: "E-visa stay", value: "Up to 30 days, single entry" },
      { label: "Best for", value: "Tourism, family holidays and short business trips" },
    ],
    documents: [
      ...commonDocs,
      "Hotel bookings and travel itinerary",
      "Return flight reservation",
      "Employment letter, salary slips or business documents",
      "Travel insurance",
    ],
    tips: [
      "Check first whether you qualify for the conditional e-visa. It is faster if you are eligible.",
      "Show a clear travel plan and sufficient funds for your trip.",
      "Book refundable flights and hotels until your visa is approved.",
    ],
    faqs: [
      { q: "Can Pakistanis get a Turkey e-visa?", a: "Only if they meet the conditions, such as holding a valid US, UK, Ireland or Schengen visa or residence permit. Others apply for a sticker visa." },
      { q: "How long does a Turkey sticker visa take?", a: "Processing time varies with the season and application volume. Apply a few weeks before travel." },
      { q: "Is Turkey safe for Pakistani tourists?", a: "Turkey is a popular and welcoming destination for Pakistani travellers. As anywhere, follow normal travel precautions." },
      { q: "Can I visit Turkey for a family holiday?", a: "Yes. We prepare complete files for families, including children's documents." },
    ],
  },
  {
    slug: "azerbaijan", name: "Azerbaijan", flag: "az",
    metaTitle: "Azerbaijan Visa from Pakistan | Baku e-Visa (ASAN)",
    metaDesc: "Azerbaijan e-visa for Pakistanis with Sky Bridge Consultancy, Lahore. ASAN e-visa for Baku trips: documents, application and travel guidance.",
    h1: "Azerbaijan e-Visa from Pakistan",
    lead: "Baku has become one of the easiest and most popular short trips for Pakistanis. Pakistani passport holders can apply for Azerbaijan's ASAN e-visa online, with no embassy visit needed.",
    facts: [
      { label: "Visa type", value: "ASAN e-visa, single entry" },
      { label: "Stay", value: "Up to 30 days" },
      { label: "Validity", value: "Usually 90 days from issue" },
      { label: "Processing", value: "A few working days, with an urgent option" },
    ],
    documents: [
      "Passport valid for at least 6 months",
      "Clear scan of your passport bio page",
      "Travel dates and hotel details",
      "Return flight reservation",
    ],
    tips: [
      "If you stay more than 15 days, you must register with the migration authorities (hotels often do this for you).",
      "Apply only through the official ASAN Visa system or a trusted agent. Avoid look-alike websites.",
      "Enter through an authorised border point, usually Baku airport.",
    ],
    faqs: [
      { q: "Do Pakistanis need a visa for Azerbaijan?", a: "Yes, but it is an e-visa that can be obtained online through the ASAN Visa system without an embassy visit." },
      { q: "How long can I stay in Azerbaijan on an e-visa?", a: "The standard e-visa allows a stay of up to 30 days, single entry." },
      { q: "How quickly can I get an Azerbaijan e-visa?", a: "Standard processing usually takes a few working days, and an urgent option is available for an extra fee." },
      { q: "Can you arrange my Baku trip too?", a: "Yes. Alongside the visa we can book your flights, so your trip is handled in one place." },
    ],
  },
  {
    slug: "thailand", name: "Thailand", flag: "th",
    metaTitle: "Thailand Visa from Pakistan | Tourist e-Visa Lahore",
    metaDesc: "Thailand tourist e-visa from Pakistan with Sky Bridge Consultancy, Lahore. Bangkok, Phuket and Pattaya trips: documents and online application support.",
    h1: "Thailand Tourist Visa from Pakistan",
    lead: "Thailand's beaches, food and cities attract many Pakistani travellers. Since 2025, Pakistanis apply for a Thailand tourist visa online through the official e-visa system instead of visiting the embassy.",
    facts: [
      { label: "Visa type", value: "Tourist e-visa (TR)" },
      { label: "How to apply", value: "Online through Thailand's official e-visa system" },
      { label: "Before you fly", value: "Complete the Thailand Digital Arrival Card (TDAC)" },
      { label: "Visa exemption", value: "Not available for Pakistani passport holders" },
    ],
    documents: [
      ...commonDocs,
      "Confirmed return flight booking",
      "Hotel bookings for your stay",
      "Employment letter or business documents",
    ],
    tips: [
      "Use only genuine flight and hotel bookings. False documents can lead to refusal and a ban.",
      "Apply two to three weeks before travel to be safe.",
      "Print your approved e-visa and carry it with you.",
    ],
    faqs: [
      { q: "Can Pakistanis apply for a Thailand visa online?", a: "Yes. Thailand's e-visa system covers Pakistan, so you can apply online without visiting the embassy." },
      { q: "Do I need a bank statement for a Thailand visa?", a: "Yes, you should show sufficient funds for your trip. We tell you what balance and statements are appropriate for your plans." },
      { q: "What is the TDAC?", a: "The Thailand Digital Arrival Card is an online form travellers complete shortly before arrival. We remind you to fill it in." },
      { q: "Can you book my Thailand flights too?", a: "Yes. We can arrange your international flights along with the visa." },
    ],
  },
  {
    slug: "singapore", name: "Singapore", flag: "sg",
    metaTitle: "Singapore Visa from Pakistan | Visit Visa Lahore",
    metaDesc: "Singapore visit visa from Pakistan with Sky Bridge Consultancy, Lahore. Forms, documents and submission through an authorised channel.",
    h1: "Singapore Visit Visa from Pakistan",
    lead: "Singapore is a clean, modern city that is perfect for families and business visitors. Pakistani citizens cannot apply directly to Singapore's immigration authority, so we prepare your file and submit it through our authorised visa agent partner.",
    facts: [
      { label: "Visa type", value: "Singapore visit visa (e-visa)" },
      { label: "How to apply", value: "Through our authorised visa agent partner" },
      { label: "Forms", value: "Form 14A and supporting forms as required" },
      { label: "When to apply", value: "Within the window allowed before your trip" },
    ],
    documents: [
      ...commonDocs,
      "Completed and signed application forms",
      "Return flight booking and hotel details",
      "Employment letter or business documents",
    ],
    tips: [
      "Accurate forms are essential. Small mistakes can delay or affect your application.",
      "Apply two to three weeks before travel.",
      "Singapore e-visas are issued electronically; print and carry yours.",
    ],
    faqs: [
      { q: "Can I apply for a Singapore visa myself?", a: "Pakistani citizens cannot apply directly to Singapore's immigration authority. Applications must go through an authorised visa agent or a local contact in Singapore. We work with an authorised visa agent, so we prepare your file and submit it through them." },
      { q: "How long does a Singapore visa take?", a: "Processing is often a few working days after submission, but it can take longer, so apply in good time." },
      { q: "Is a Singapore visa difficult for Pakistanis?", a: "With complete, genuine documents and a clear travel plan, the process is usually smooth." },
      { q: "What is the Singapore visa fee?", a: "There is a government fee plus the authorised agent's charges. We confirm the total before you apply." },
    ],
  },
  {
    slug: "indonesia", name: "Indonesia", flag: "id",
    metaTitle: "Indonesia Visa from Pakistan | Bali Tourist Visa Lahore",
    metaDesc: "Indonesia tourist visa from Pakistan with Sky Bridge Consultancy, Lahore. Bali and Jakarta trips: e-visa application, documents and travel support.",
    h1: "Indonesia Visit Visa from Pakistan",
    lead: "Bali's beaches and Jakarta's energy make Indonesia an exciting destination. Pakistani passport holders are not eligible for visa-free entry, so a visa must be arranged before travel.",
    facts: [
      { label: "Visa type", value: "Tourist visa / e-visa arranged before travel" },
      { label: "Visa exemption", value: "Not available for Pakistani passport holders" },
      { label: "Popular for", value: "Bali holidays, honeymoons and family trips" },
      { label: "When to apply", value: "Two to three weeks before travel" },
    ],
    documents: [
      ...commonDocs,
      "Return flight booking",
      "Hotel bookings",
      "Employment letter or business documents",
    ],
    tips: [
      "Apply only through official channels. Avoid unofficial websites that charge extra.",
      "Keep your return ticket and hotel bookings ready at immigration.",
      "Check your passport validity before booking anything.",
    ],
    faqs: [
      { q: "Do Pakistanis get visa on arrival in Indonesia?", a: "Pakistani passport holders should arrange their visa before travel. We confirm the current option for your trip when you apply." },
      { q: "Can I visit Bali on an Indonesian tourist visa?", a: "Yes. Bali is part of Indonesia, so the same tourist visa covers your trip." },
      { q: "How long does an Indonesia visa take?", a: "Processing usually takes several working days. Apply two to three weeks before travel." },
      { q: "Can you book my Bali flights?", a: "Yes. We can book your international flights alongside the visa." },
    ],
  },
];

export const visaBySlug = (slug: string) => visaPages.find((p) => p.slug === slug);
