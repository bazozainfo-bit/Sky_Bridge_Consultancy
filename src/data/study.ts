// Study destination content. Facts checked November 2026; rules and amounts change, so pages remind
// students that we confirm the latest requirements before every application.
import type { Funding } from "./site";

export type QA = { q: string; a: string };
export type StudyPage = {
  slug: string; name: string; flag: string; funding: Funding[];
  metaTitle: string; metaDesc: string; h1: string; lead: string;
  why: { t: string; d: string }[];
  funding_intro: string;
  scholarships: { name: string; d: string }[];
  levels: { BS: string; MS: string; PhD: string };
  requirements: string[];
  costs: string;
  faqs: QA[];
};

export const studyPages: StudyPage[] = [
  {
    slug: "germany", name: "Germany", flag: "de", funding: ["Fully Funded"],
    metaTitle: "Study in Germany from Pakistan | Scholarships & Admissions",
    metaDesc: "Study in Germany from Pakistan with Sky Bridge Consultancy, Lahore. Tuition-free public universities, DAAD scholarship guidance, blocked account and student visa support.",
    h1: "Study in Germany from Pakistan",
    lead: "Germany is one of the few countries where a world-class degree can cost little or nothing in tuition. Most public universities charge only a small semester contribution, and scholarships such as DAAD can support Master's and PhD students with a monthly stipend.",
    why: [
      { t: "Low or no tuition", d: "Most public universities do not charge tuition for international students. You pay a semester contribution that usually includes a local transport ticket." },
      { t: "English-taught Master's", d: "Hundreds of Master's programs are taught fully in English, especially in engineering, computer science, business and the sciences." },
      { t: "Strong job market", d: "After graduating you can stay to look for work, and Germany actively recruits skilled graduates in technical fields." },
      { t: "Research powerhouse", d: "Funded PhD positions at universities and research institutes are paid like jobs, giving researchers a real salary." },
    ],
    funding_intro: "Fully funded study in Germany usually comes from a scholarship plus tuition-free public education. Competition is strong, so a clear plan and early start make a real difference.",
    scholarships: [
      { name: "DAAD scholarships", d: "Germany's academic exchange service funds selected Master's and PhD students with a monthly stipend, insurance and travel support. Many programs ask for work experience." },
      { name: "Funded PhD positions", d: "Many PhD students in Germany are employed by their university or institute on a research contract, which means a salary instead of fees." },
      { name: "University and foundation awards", d: "Universities and private foundations offer merit scholarships, often available after your first semester." },
    ],
    levels: {
      BS: "Bachelor's programs are mostly taught in German and usually need a foundation year (Studienkolleg) for Pakistani FSc students. We guide you on the realistic route.",
      MS: "The most popular route. A 16-year Bachelor's with good grades and IELTS opens many English-taught Master's programs at public universities.",
      PhD: "Apply to advertised funded positions or find a supervisor directly. We help with your research proposal and outreach emails.",
    },
    requirements: [
      "16 years of education for Master's (recognised Bachelor's degree)",
      "Good academic record; some programs set a minimum grade",
      "IELTS or TOEFL for English-taught programs (German language for German-taught ones)",
      "Motivation letter, CV and reference letters",
      "Proof of finances for the visa, usually a blocked account",
    ],
    costs: "For the student visa, Germany asks for proof that you can cover living costs. In 2026 the standard blocked account amount is €11,904 for one year (€992 per month). If you have a full scholarship, the scholarship letter can replace part or all of it.",
    faqs: [
      { q: "Is studying in Germany really free for Pakistani students?", a: "At most public universities there is no tuition fee, but you pay a semester contribution and your own living costs. Some states, such as Baden-Württemberg, charge tuition to non-EU students. We will tell you the real cost of each university on your list." },
      { q: "Do I need IELTS to study in Germany?", a: "For English-taught programs, most universities ask for IELTS or TOEFL. A few accept other proof, but it is safer to plan for IELTS. German-taught programs need German language certificates instead." },
      { q: "How much money do I need for a German student visa?", a: "In 2026 the standard blocked account requirement is €11,904 for one year. A recognised scholarship can reduce or replace this amount." },
      { q: "Can I work while studying in Germany?", a: "International students can work part-time within the limits set by German law, which helps with living costs. Work should never be your main source of funding in the visa application." },
    ],
  },
  {
    slug: "italy", name: "Italy", flag: "it", funding: ["Fully Funded"],
    metaTitle: "Study in Italy from Pakistan | DSU Scholarship Guidance",
    metaDesc: "Study in Italy with fully funded DSU regional scholarship guidance from Sky Bridge Consultancy, Lahore. Admissions, ISEE parificato documents and student visa support.",
    h1: "Study in Italy from Pakistan",
    lead: "Italy combines historic public universities with one of Europe's most generous need-based funding systems. Through regional DSU scholarships, eligible students can receive a tuition waiver, a yearly cash stipend and subsidised housing or meals.",
    why: [
      { t: "DSU regional scholarships", d: "Need-based grants run by each Italian region can cover tuition, give a yearly stipend and offer free or low-cost housing." },
      { t: "Affordable public universities", d: "Even without a scholarship, public university fees are among the lowest in Western Europe and are linked to family income." },
      { t: "English-taught programs", d: "Many Bachelor's and Master's programs are taught in English, especially in engineering, economics, architecture and the sciences." },
      { t: "Life in Europe", d: "Study in cities like Milan, Rome, Turin, Padua, Pisa or Bologna and travel across the Schengen area during your studies." },
    ],
    funding_intro: "The key to funded study in Italy is the DSU scholarship, which is based on your family's income and assets. Preparing the right documents early is what separates successful applicants from the rest.",
    scholarships: [
      { name: "DSU regional scholarship", d: "Each region (for example Lazio, Lombardy, Piedmont, Tuscany, Emilia-Romagna) opens its own call, usually in summer. Non-EU students apply using an ISEE parificato based on family documents from Pakistan." },
      { name: "Italian Government (MAECI) scholarships", d: "Awarded through Italian embassies to selected foreign students, mainly for Master's and research-level study." },
      { name: "University scholarships", d: "Many universities offer their own merit awards and fee reductions for international students." },
    ],
    levels: {
      BS: "Possible after 12 years of education for many English-taught programs, often with an entrance test such as SAT or the university's own exam.",
      MS: "A 16-year Bachelor's in a related field opens most English-taught Master's programs. This is the most common route for Pakistani students.",
      PhD: "PhD positions in Italy are usually funded with a monthly scholarship. Calls open once a year at each university.",
    },
    requirements: [
      "12 years of education for Bachelor's, 16 years for Master's",
      "Academic transcripts and degree, legalised as required",
      "IELTS or another accepted English test (some universities accept an English-medium letter)",
      "Pre-enrolment on the Universitaly portal",
      "Family income and asset documents for the DSU scholarship, legalised and translated",
      "Proof of funds and accommodation for the student visa",
    ],
    costs: "Tuition at public universities depends on your family's ISEE value, and DSU winners usually have tuition waived. Living costs vary by city: Milan and Rome are the most expensive, while southern cities are cheaper.",
    faqs: [
      { q: "Is the DSU scholarship really fully funded?", a: "For eligible students it can cover tuition and provide a yearly stipend plus housing or meal support. Amounts and rules differ by region and change each year, so we check the current call for your city." },
      { q: "What is ISEE parificato?", a: "It is the Italian calculation of your family's financial situation using documents from Pakistan. It is required to apply for DSU and for income-based fee reductions, and it takes time to prepare, so start early." },
      { q: "Can I study in Italy without IELTS?", a: "Some Italian universities accept an English-medium instruction letter instead of IELTS. It depends on the university and program, and the embassy may still assess your English at the visa interview." },
      { q: "When should I start my Italy application?", a: "Ideally 8 to 10 months before your intake. University deadlines often fall early in the year, and DSU calls usually close between July and September." },
    ],
  },
  {
    slug: "australia", name: "Australia", flag: "au", funding: ["Fully Funded"],
    metaTitle: "Study in Australia from Pakistan | Scholarships & Admissions",
    metaDesc: "Study in Australia from Pakistan with Sky Bridge Consultancy, Lahore. Australia Awards and research scholarship guidance, university admissions and student visa support.",
    h1: "Study in Australia from Pakistan",
    lead: "Australia offers globally ranked universities, a high quality of life and strong post-study work options. For Pakistani students, fully funded routes exist mainly at Master's and research level, through government and university scholarships.",
    why: [
      { t: "Top-ranked universities", d: "Several Australian universities sit among the best in the world for engineering, health, business and IT." },
      { t: "Australia Awards for Pakistan", d: "A fully funded Australian Government scholarship for Pakistani professionals pursuing a Master's degree." },
      { t: "Research scholarships", d: "Research Training Program (RTP) and university awards can cover tuition and pay a living stipend for research degrees." },
      { t: "Work while you study", d: "Student visa holders can work part-time, and graduates may be eligible for post-study work rights." },
    ],
    funding_intro: "Australia's fully funded scholarships are competitive and focused on postgraduate study. Undergraduate students usually study self-funded, sometimes with a partial university scholarship.",
    scholarships: [
      { name: "Australia Awards Scholarships (Pakistan)", d: "Fully funded Master's scholarships for Pakistani citizens living in Pakistan, usually with relevant work experience. Applications typically open in February and close at the end of April." },
      { name: "Research Training Program (RTP)", d: "Government-funded scholarships offered through universities for Master's by Research and PhD students, covering tuition and often a living stipend." },
      { name: "University scholarships", d: "Many universities offer merit scholarships and tuition reductions for international students, including some aimed at South Asian applicants." },
    ],
    levels: {
      BS: "Usually self-funded, with partial merit scholarships available at some universities. A foundation program may be needed after FSc or A-Levels.",
      MS: "Coursework Master's degrees are the most popular option. Australia Awards is the main fully funded route for working professionals.",
      PhD: "Research degrees can be fully funded through RTP and university scholarships if you secure a supervisor and a strong proposal.",
    },
    requirements: [
      "Recognised academic qualifications (16 years for most Master's programs)",
      "IELTS, PTE or TOEFL scores meeting university and visa requirements",
      "Statement of purpose and CV",
      "Work experience for Australia Awards and some professional Master's",
      "Proof of funds and health cover (OSHC) for the student visa",
      "Genuine Student requirement statement for the visa",
    ],
    costs: "Self-funded study in Australia is a significant investment, so we help you compare universities, cities and scholarship options. Fully funded scholarships cover tuition, travel and living costs for the duration of the award.",
    faqs: [
      { q: "Can Pakistani students get a fully funded scholarship in Australia?", a: "Yes, mainly at postgraduate level. Australia Awards supports Pakistani professionals for Master's study, and RTP or university scholarships can fund research degrees. Undergraduate scholarships are usually partial." },
      { q: "Do I need work experience for Australia Awards?", a: "Work experience in a relevant field strengthens your application considerably, and the program is designed for people who will return to contribute in Pakistan." },
      { q: "Which English test is best for Australia?", a: "IELTS and PTE are both widely accepted by universities and for the student visa. We help you check the exact scores your program needs." },
      { q: "Can I work in Australia after my degree?", a: "Eligible graduates can apply for a post-study work visa. The rules and duration depend on your qualification and are set by the Australian Government." },
    ],
  },
  {
    slug: "new-zealand", name: "New Zealand", flag: "nz", funding: ["Fully Funded"],
    metaTitle: "Study in New Zealand from Pakistan | Scholarships & Admissions",
    metaDesc: "Study in New Zealand from Pakistan with Sky Bridge Consultancy, Lahore. University admissions, funded PhD and scholarship guidance, and student visa support.",
    h1: "Study in New Zealand from Pakistan",
    lead: "New Zealand is known for safe cities, welcoming people and universities that rank among the world's best. For students aiming for funded study, research degrees are the strongest route, and we help you find the scholarships you are actually eligible for.",
    why: [
      { t: "Globally ranked universities", d: "All of New Zealand's universities are well regarded internationally, from Auckland and Otago to Victoria University of Wellington." },
      { t: "PhD at domestic fees", d: "International PhD students in New Zealand generally pay the same tuition as local students, and many receive a doctoral scholarship." },
      { t: "Safe and welcoming", d: "A peaceful country with a high quality of life and a growing South Asian community." },
      { t: "Post-study work options", d: "Eligible graduates can apply for a post-study work visa to gain experience in New Zealand." },
    ],
    funding_intro: "Fully funded study in New Zealand mostly comes through university doctoral scholarships. Government scholarship eligibility for Pakistani citizens changes from year to year, so we always check the current list before advising you.",
    scholarships: [
      { name: "University doctoral scholarships", d: "Universities offer scholarships for PhD students that can cover tuition and pay a living stipend, usually awarded on academic merit." },
      { name: "Government scholarships", d: "New Zealand's government scholarship programs are open only to selected partner countries, and the list changes. We confirm whether Pakistani applicants are eligible in the current round." },
      { name: "Master's and merit awards", d: "Some universities offer partial scholarships or fee reductions for strong international Master's applicants." },
    ],
    levels: {
      BS: "Usually self-funded. Some students start with a foundation year after FSc or A-Levels.",
      MS: "Taught and research Master's degrees are available; partial scholarships are more common than full ones at this level.",
      PhD: "The strongest route to fully funded study. You need a strong academic record, a research proposal and a supervisor willing to take you on.",
    },
    requirements: [
      "Recognised qualifications (16 years for Master's, a Master's or strong research Bachelor's for PhD)",
      "IELTS, PTE or TOEFL meeting the university requirement",
      "Research proposal and supervisor contact for PhD",
      "Statement of purpose, CV and references",
      "Proof of funds or scholarship letter for the student visa",
      "Medical and police certificates as required by Immigration New Zealand",
    ],
    costs: "Tuition depends on the university and program. PhD students generally pay domestic-level fees, which makes funded doctoral study especially attractive.",
    faqs: [
      { q: "Is the Manaaki scholarship open to Pakistani students?", a: "Eligibility for New Zealand's government scholarships is limited to selected countries and has changed in recent years. We check the current eligible list before advising you, so you do not waste time on a scholarship you cannot apply for." },
      { q: "Can I do a fully funded PhD in New Zealand?", a: "Yes. Many universities offer doctoral scholarships that cover tuition and provide a stipend. A strong academic record and research proposal are essential." },
      { q: "Do I need IELTS for New Zealand?", a: "Most universities ask for IELTS, PTE or TOEFL. We help you find out the exact score your program requires." },
      { q: "Can my family join me in New Zealand?", a: "In some cases, for example for PhD students, partners and children may be eligible for visas. Rules are set by Immigration New Zealand and we will explain your options." },
    ],
  },
  {
    slug: "uk", name: "United Kingdom", flag: "gb", funding: ["Self-Funded", "Partially Funded"],
    metaTitle: "Study in UK from Pakistan | Admissions & Student Visa",
    metaDesc: "Study in the UK from Pakistan with Sky Bridge Consultancy, Lahore. One-year Master's, university scholarships and tuition discounts, and UK student visa support.",
    h1: "Study in the UK from Pakistan",
    lead: "The UK is home to some of the world's best-known universities, and its one-year Master's degrees save both time and money. We help self-funded students find the right university and apply for the scholarships and discounts that make a real difference to the cost.",
    why: [
      { t: "One-year Master's", d: "Most taught Master's degrees last 12 months, so you spend less on fees and living costs than in many other countries." },
      { t: "World-famous universities", d: "A wide range of universities to suit different grades and budgets, with degrees recognised worldwide." },
      { t: "Post-study work", d: "The Graduate Route lets eligible graduates stay and work. It is two years for applications made before 1 January 2027 and 18 months after that, with three years for PhD graduates." },
      { t: "Multiple intakes", d: "Many universities offer September and January intakes, and some also offer May." },
    ],
    funding_intro: "For the UK we focus on self-funded and partially funded study. Many universities offer international scholarships and early-payment discounts that reduce tuition significantly.",
    scholarships: [
      { name: "University international scholarships", d: "Merit-based awards that reduce tuition, often given automatically to strong applicants." },
      { name: "Early deposit and payment discounts", d: "Some universities reduce fees if you pay your deposit or full tuition early." },
      { name: "Alumni and regional awards", d: "Discounts for South Asian applicants or graduates of partner institutions at selected universities." },
    ],
    levels: {
      BS: "Possible after A-Levels or FSc with good grades, sometimes through a foundation year.",
      MS: "A 16-year Bachelor's opens most one-year Master's programs. Some universities accept 14-year degrees with conditions.",
      PhD: "Usually three to four years. Funding is competitive; self-funded and partially funded PhD options are more common for international students.",
    },
    requirements: [
      "Academic transcripts and degree",
      "IELTS for UKVI or another accepted English test (some universities accept English-medium letters)",
      "Personal statement and references",
      "CAS letter from your university",
      "Proof of funds held for the required period (28 days)",
      "TB test certificate from an approved clinic in Pakistan",
    ],
    costs: "UK tuition varies widely by university and subject. The UK student visa also requires proof that you can cover tuition and living costs, and the amount is higher for London than for other cities.",
    faqs: [
      { q: "Can I study in the UK without IELTS?", a: "Some UK universities accept an English-medium instruction letter or their own test instead of IELTS. For the visa, the university's assessment is often enough, but we confirm each case." },
      { q: "How long can I stay in the UK after my Master's?", a: "Under the Graduate Route, applications made before 1 January 2027 receive two years. Applications made on or after that date receive 18 months for Bachelor's and Master's graduates, and three years for PhD graduates." },
      { q: "Do you offer fully funded scholarships for the UK?", a: "Our UK focus is self-funded and partially funded study, where we can help you reduce costs with university scholarships and discounts. If you have a strong profile we will also tell you about competitive full scholarships." },
      { q: "When should I apply for a September intake?", a: "Ideally 8 to 10 months ahead, so you have time for offers, scholarships, deposits and the visa." },
    ],
  },
  {
    slug: "turkey", name: "Turkey", flag: "tr", funding: ["Self-Funded", "Partially Funded"],
    metaTitle: "Study in Turkey from Pakistan | Affordable Universities",
    metaDesc: "Study in Turkey from Pakistan with Sky Bridge Consultancy, Lahore. Affordable public and private universities, partial scholarships and Turkish student visa support.",
    h1: "Study in Turkey from Pakistan",
    lead: "Turkey offers modern universities, affordable tuition and a culture that feels familiar to many Pakistani students. Private universities in Istanbul and Ankara regularly offer partial scholarships that cut tuition considerably.",
    why: [
      { t: "Affordable tuition", d: "Public and many private universities charge far less than in the UK, Australia or North America." },
      { t: "Partial scholarships", d: "Private universities often offer 25% to 75% tuition scholarships based on your grades." },
      { t: "English-taught programs", d: "A wide choice of programs in English, from engineering and medicine to business and IT." },
      { t: "Familiar culture", d: "A Muslim-majority country with halal food everywhere and a warm attitude towards Pakistanis." },
    ],
    funding_intro: "We help students apply self-funded or with a partial scholarship at Turkish universities, which keeps the total cost realistic for many families.",
    scholarships: [
      { name: "University partial scholarships", d: "Private universities offer tuition discounts based on academic results, often decided at the time of admission." },
      { name: "Early registration discounts", d: "Some universities reduce fees for students who confirm their seat early or pay in advance." },
      { name: "Merit awards during study", d: "High-performing students can sometimes increase their scholarship in later years." },
    ],
    levels: {
      BS: "Many private universities accept FSc, ICS and A-Level students directly, sometimes with an English preparatory year.",
      MS: "A Bachelor's degree in a related field opens Master's programs, with and without thesis options.",
      PhD: "Available at public and private universities, often with research assistant opportunities.",
    },
    requirements: [
      "Academic transcripts and certificates, attested as required",
      "English test or the university's English preparatory year",
      "Passport copy and photographs",
      "Acceptance letter from a Turkish university",
      "Proof of funds and accommodation for the student visa",
      "Health insurance for your residence permit",
    ],
    costs: "Private university tuition depends on the program and your scholarship percentage. Living costs are moderate, though Istanbul is more expensive than other cities.",
    faqs: [
      { q: "Is Turkey good for Pakistani students?", a: "Yes. Tuition is affordable, many programs are taught in English and the culture is welcoming. It is a popular choice for families who want quality at a manageable cost." },
      { q: "Can I get a scholarship to study in Turkey?", a: "Private universities commonly offer partial scholarships based on your grades. We apply on your behalf and help you compare offers." },
      { q: "Do I need IELTS for Turkey?", a: "Many universities accept IELTS or TOEFL, and some let you take their own English test or join an English preparatory year." },
      { q: "How do I apply for a Turkish student visa?", a: "After your acceptance letter, you apply for a student visa through the Turkish visa channels in Pakistan. We prepare the full file with you." },
    ],
  },
  {
    slug: "north-cyprus", name: "North Cyprus", flag: "nc", funding: ["Self-Funded"],
    metaTitle: "Study in North Cyprus from Pakistan | Admissions Guide",
    metaDesc: "Study in North Cyprus from Pakistan with Sky Bridge Consultancy, Lahore. Low tuition, English-taught programs and a simple admission process for BS, MS and PhD.",
    h1: "Study in North Cyprus from Pakistan",
    lead: "North Cyprus is a budget-friendly option with English-taught programs and a straightforward admission process. It suits students who want an international degree in a relaxed Mediterranean setting at a manageable cost.",
    why: [
      { t: "Low tuition", d: "Tuition and living costs are lower than in most European destinations, which makes self-funded study realistic." },
      { t: "English-taught programs", d: "Most programs at the main universities are taught in English." },
      { t: "Simple admission", d: "Admission requirements and timelines are generally straightforward, with several intakes each year." },
      { t: "Mediterranean lifestyle", d: "A safe, relaxed island with a large international student community." },
    ],
    funding_intro: "North Cyprus is a self-funded destination. Many universities still offer tuition discounts for good grades, which we help you apply for.",
    scholarships: [
      { name: "Merit-based tuition discounts", d: "Universities often reduce tuition for international students based on academic results." },
      { name: "Early payment discounts", d: "Some universities lower fees for students who pay early." },
    ],
    levels: {
      BS: "Accepts FSc, ICS and A-Level students, with an English preparatory year if needed.",
      MS: "A Bachelor's degree in a related field opens most Master's programs.",
      PhD: "Available at several universities for students with a relevant Master's degree.",
    },
    requirements: [
      "Academic transcripts and certificates",
      "Passport copy and photographs",
      "English test, or the university's own English exam or preparatory year",
      "Acceptance letter from the university",
      "Proof of funds as required",
    ],
    costs: "Tuition depends on the university and program. Living costs are moderate compared with Europe.",
    faqs: [
      { q: "Is a North Cyprus degree recognised?", a: "Recognition depends on the university and on how you plan to use the degree. Before you apply, we explain recognition for your chosen university, including in Pakistan, so you can decide with full information." },
      { q: "Is North Cyprus expensive?", a: "It is one of the more affordable study destinations, with lower tuition and living costs than most of Europe." },
      { q: "Do I need IELTS for North Cyprus?", a: "Many universities accept students without IELTS and assess English through their own test or a preparatory year." },
      { q: "How do I travel to North Cyprus?", a: "Students usually fly via Turkey. We guide you on the travel route and the documents you need before departure." },
    ],
  },
];

export const studyBySlug = (slug: string) => studyPages.find((p) => p.slug === slug);
