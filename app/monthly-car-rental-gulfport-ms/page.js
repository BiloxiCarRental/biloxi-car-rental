import SeoLanding from "../components/SeoLanding";

export const metadata = {
  "title": "Monthly Car Rental Gulfport MS | Biloxi Car Rental",
  "description": "Need a monthly or long-term car rental in Gulfport, MS? Browse local vehicles for extended trips, temporary transportation and longer stays on the Gulf Coast.",
  "alternates": {
    "canonical": "https://biloxicarrentals.com/monthly-car-rental-gulfport-ms"
  }
};

export default function Page() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Monthly Car Rental Gulfport MS",
  "provider": {
    "@type": "AutoRental",
    "name": "Biloxi Car Rental",
    "url": "https://biloxicarrentals.com"
  },
  "areaServed": [
    "Gulfport, Mississippi",
    "Biloxi, Mississippi"
  ],
  "url": "https://biloxicarrentals.com/monthly-car-rental-gulfport-ms"
};
  const props = {
  "eyebrow": "MONTHLY CAR RENTAL GULFPORT",
  "title": "Monthly & long-term car rental in Gulfport, MS.",
  "intro": "Need a vehicle for more than a weekend? Our Gulf Coast fleet can be a practical option for longer stays, temporary transportation, work assignments and extended trips around Gulfport and Biloxi.",
  "bullets": [
    "Extended-trip friendly",
    "Gulfport and Biloxi service",
    "Useful for repairs, work and longer stays",
    "Current terms and pricing shown on Turo"
  ],
  "sections": [
    {
      "kicker": "MONTHLY CAR RENTAL GULFPORT",
      "heading": "A practical option when you need a car for longer.",
      "paragraphs": [
        "Monthly and longer-term rentals can make sense when your own vehicle is being repaired, you are working temporarily on the Gulf Coast, you are between vehicles or you simply need transportation for an extended stay.",
        "Our fleet includes everyday sedans, SUVs and other vehicles suited to different types of longer trips."
      ]
    },
    {
      "kicker": "LONG-TERM RENTAL",
      "heading": "Keep the process simple.",
      "paragraphs": [
        "Start by choosing a vehicle and checking the available dates. Longer-trip pricing and availability can vary by vehicle and season, so current trip details are shown through Turo rather than using a one-size-fits-all rate on this site.",
        "If a vehicle is not available for your entire period, another car in the fleet may fit your dates."
      ]
    },
    {
      "kicker": "LOCAL SERVICE",
      "heading": "Serving Gulfport, Biloxi and nearby communities.",
      "paragraphs": [
        "Our local service area makes extended rentals useful for both visitors and Gulf Coast residents. Depending on the trip, convenient local pickup or delivery options may also be available."
      ]
    }
  ],
  "faq": [
    {
      "q": "Do you offer monthly car rentals in Gulfport?",
      "a": "Vehicles may be available for monthly or extended trips depending on the dates and individual vehicle availability."
    },
    {
      "q": "Do you have long-term car rentals?",
      "a": "Yes, longer trips can be booked when the selected vehicle has availability for the requested period."
    },
    {
      "q": "Is there a fixed monthly price?",
      "a": "Pricing varies by vehicle, dates and trip length. Current extended-trip pricing is shown through Turo."
    },
    {
      "q": "Can local residents book an extended rental?",
      "a": "Yes. Extended rentals can be useful for repairs, work, temporary transportation and other local needs."
    }
  ],
  "ctaTitle": "Check extended-rental availability."
};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoLanding {...props} />
    </>
  );
}
