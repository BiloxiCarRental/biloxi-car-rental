import SeoLanding from "../components/SeoLanding";

export const metadata = {
  "title": "Car Rental Ocean Springs MS | Biloxi Car Rental",
  "description": "Local car rental serving Ocean Springs, MS. Convenient vehicles for visitors and residents with nearby delivery options and secure booking through Turo.",
  "alternates": {
    "canonical": "https://biloxicarrental.com/car-rental-ocean-springs-ms"
  }
};

export default function Page() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Rental Ocean Springs MS",
  "provider": {
    "@type": "AutoRental",
    "name": "Biloxi Car Rental",
    "url": "https://biloxicarrental.com"
  },
  "areaServed": "Ocean Springs, Mississippi",
  "url": "https://biloxicarrental.com/car-rental-ocean-springs-ms"
};
  const props = {
  "eyebrow": "CAR RENTAL OCEAN SPRINGS MS",
  "title": "Car Rental in Ocean Springs, MS.",
  "intro": "Explore Ocean Springs and the Mississippi Gulf Coast on your schedule with a clean, convenient local rental car and flexible nearby pickup or delivery options.",
  "bullets": [
    "Ocean Springs and Gulf Coast service",
    "Local delivery options",
    "Cars, SUVs and more",
    "Secure Turo reservations"
  ],
  "sections": [
    {
      "kicker": "OCEAN SPRINGS CAR RENTAL",
      "heading": "Easy transportation for a day, weekend or longer stay.",
      "paragraphs": [
        "Ocean Springs is built for exploring \u2014 from downtown restaurants and galleries to the beach and nearby Gulf Coast destinations. Having your own rental car makes it easier to move around without building the day around rideshares.",
        "Our nearby fleet serves both visitors and local residents who need a temporary vehicle for travel, work, family visits or while another car is being repaired."
      ]
    },
    {
      "kicker": "LOCAL CONVENIENCE",
      "heading": "Skip the traditional rental-counter routine.",
      "paragraphs": [
        "Choose your vehicle online and arrange an available local pickup or delivery option. We focus on clear communication and a straightforward handoff so you can get on the road quickly.",
        "Reservations, current availability, protection choices and pricing are completed securely through Turo."
      ]
    },
    {
      "kicker": "MISSISSIPPI GULF COAST",
      "heading": "Minutes from Biloxi and the rest of the coast.",
      "paragraphs": [
        "A rental car in Ocean Springs also puts Biloxi, D'Iberville, Gulfport and other coastal destinations within easy reach, making it a practical choice for both leisure trips and everyday transportation."
      ]
    }
  ],
  "faq": [
    {
      "q": "Do you serve Ocean Springs, Mississippi?",
      "a": "Yes. Our local Gulf Coast fleet serves Ocean Springs visitors and residents."
    },
    {
      "q": "Can I have a car delivered in Ocean Springs?",
      "a": "Delivery may be available to eligible nearby locations depending on the vehicle and trip. Check the available trip options when booking."
    },
    {
      "q": "Can local residents rent a car?",
      "a": "Yes. Local residents can use our vehicles for temporary transportation, work, repairs, family visits and other everyday needs."
    }
  ],
  "ctaTitle": "Find an Ocean Springs rental car."
};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoLanding {...props} />
    </>
  );
}
