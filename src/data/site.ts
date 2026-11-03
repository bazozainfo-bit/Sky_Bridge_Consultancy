// All company details live here. Change a number or address once and the whole site updates.

export const site = {
  name: "Sky Bridge Consultancy",
  shortName: "Sky Bridge",
  tagline: "Authentic Guidance. Trusted Results.",
  descriptor: "Study Abroad & Visa Consultants in Lahore",
  url: "https://skybridgeconsultancy.network",
  founder: "Ibrar Ahmad",
  phoneDisplay: "+92 312 3081675",
  phoneE164: "+923123081675",
  whatsapp: "923123081675",
  email: "skybridgeconsultancy.info1@gmail.com",
  address: {
    line1: "Office # 8, 1st Floor, Green Complex",
    line2: "Near Kainchi Bazar, Main Ferozepur Road",
    city: "Lahore",
    region: "Punjab",
    country: "PK",
    full: "Office # 8, 1st Floor, Green Complex, Near Kainchi Bazar, Main Ferozepur Road, Lahore",
  },
  hours: { days: "Monday – Saturday", time: "10:00 AM – 5:00 PM", closed: "Sunday closed" },
  facebook: "https://www.facebook.com/SkyBridgeConsultancy1",
  stats: { years: "6+", students: "300+", destinations: "7" },
  // Paste a Google Maps share link here later for an exact pin; until then the address is used.
  mapQuery: "Green Complex, Kainchi Bazar, Ferozepur Road, Lahore",
};

export const waLink = (text = "Hello Sky Bridge, I would like some information about ") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export type Funding = "Fully Funded" | "Partially Funded" | "Self-Funded";

export const studyCountries: {
  slug: string; name: string; flag: string; funding: Funding[]; blurb: string;
}[] = [
  { slug: "germany", name: "Germany", flag: "de", funding: ["Fully Funded"], blurb: "Low or no tuition at most public universities, plus DAAD and university scholarships for Master's and PhD." },
  { slug: "italy", name: "Italy", flag: "it", funding: ["Fully Funded"], blurb: "Regional scholarships that can cover tuition, accommodation and a yearly stipend at respected public universities." },
  { slug: "australia", name: "Australia", flag: "au", funding: ["Fully Funded"], blurb: "World-ranked universities with government and university scholarships, especially for research degrees." },
  { slug: "new-zealand", name: "New Zealand", flag: "nz", funding: ["Fully Funded"], blurb: "A safe, welcoming country with globally ranked universities and scholarships for postgraduate study." },
  { slug: "uk", name: "United Kingdom", flag: "gb", funding: ["Self-Funded", "Partially Funded"], blurb: "One-year Master's degrees, historic universities and post-study work opportunities." },
  { slug: "turkey", name: "Turkey", flag: "tr", funding: ["Self-Funded", "Partially Funded"], blurb: "Affordable tuition, partial scholarships and modern campuses where East meets West." },
  { slug: "north-cyprus", name: "North Cyprus", flag: "nc", funding: ["Self-Funded"], blurb: "Low tuition, English-taught programs and a straightforward admission process." },
];

export const visaCountries: { slug: string; name: string; flag: string; note: string }[] = [
  { slug: "usa", name: "USA", flag: "us", note: "B1/B2 visit visa guidance and interview preparation" },
  { slug: "uae", name: "UAE (Dubai)", flag: "ae", note: "Dubai and UAE tourist visas for families and individuals" },
  { slug: "turkey", name: "Turkey", flag: "tr", note: "Tourist visa files for Istanbul, Cappadocia and beyond" },
  { slug: "azerbaijan", name: "Azerbaijan", flag: "az", note: "E-visa support for Baku trips" },
  { slug: "thailand", name: "Thailand", flag: "th", note: "Tourist visa for Bangkok, Phuket and Pattaya" },
  { slug: "singapore", name: "Singapore", flag: "sg", note: "Visit visa documentation done right" },
  { slug: "indonesia", name: "Indonesia", flag: "id", note: "Visa support for Bali and Jakarta" },
];

export const team = {
  leadership: [
    { name: "Ibrar Ahmad", role: "Founder & CEO", photo: "/images/ceo-ibrar-ahmad-thumb.webp" },
    { name: "Rashid Liaquat", role: "Managing Director" },
    { name: "Ali Ashraf", role: "Director" },
    { name: "Ayesha Farooq", role: "Director" },
    { name: "Moosa Ghaffar", role: "Senior Manager" },
  ],
  groups: [
    { title: "Study Abroad Team", members: [
      { name: "Zara Yousaf", role: "Student Advisor" },
      { name: "Muskan Khalid", role: "Student Advisor" },
      { name: "Saba Aslam", role: "Student Advisor" },
      { name: "Hina Aslam", role: "Student Advisor" },
    ] },
    { title: "Visa Team", members: [
      { name: "Hira Shabbir", role: "Senior Tourist Visa Consultant" },
      { name: "Amina", role: "Visit Visa Consultant" },
    ] },
    { title: "Ticketing Team", members: [
      { name: "Usman", role: "Senior Ticketing Agent" },
      { name: "Tahreem Fatima", role: "Ticketing Agent" },
    ] },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/study-abroad/", label: "Study Abroad" },
  { href: "/tourist-visa/", label: "Tourist Visa" },
  { href: "/air-ticketing/", label: "Air Tickets" },
  { href: "/about/", label: "About" },
  { href: "/faq/", label: "FAQ" },
  { href: "/contact/", label: "Contact" },
];
