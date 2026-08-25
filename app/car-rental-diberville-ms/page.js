import SeoLanding from "../components/SeoLanding";

export const metadata = {
  "title": "Car Rental D'Iberville MS | Biloxi Car Rental",
  "description": "Convenient local car rental serving D'Iberville, MS and nearby Biloxi. Browse vehicles, local delivery options and secure Turo booking.",
  "alternates": {
    "canonical": "https://biloxicarrental.com/car-rental-diberville-ms"
  }
};

export default function Page() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Car Rental D'Iberville MS",
  "provider": {
    "@type": "AutoRental",
    "name": "Biloxi Car Rental",
    "url": "https://biloxicarrental.com"
  },
  "areaServed": "D'Iberville, Mississippi",
  "url": "https://biloxicarrental.com/car-rental-diberville-ms"
};
  const props = {
  "eyebrow": "CAR RENTAL D'IBERVILLE MS",
  "title": "Car Rental in D'Iberville, MS.",
  "intro": "Need a vehicle near D'Iberville or North Biloxi? Our local Gulf Coast fleet offers a simple way to find temporary transportation without the traditional rental-counter experience.",
  "bullets": [
    "D'Iberville and Biloxi service",
    "Nearby pickup and delivery options",
    "Visitor and local rentals",
    "Secure booking through Turo"
  ],
  "sections": [
    {
      "kicker": "D'IBERVILLE CAR RENTAL",
      "heading": "Local cars close to Biloxi.",
      "paragraphs": [
        "D'Iberville sits right next to Biloxi, making it a convenient base for casino trips, shopping, work and everyday Gulf Coast travel. Our fleet is positioned to serve drivers throughout this immediate area.",
        "Browse a vehicle online, review current availability and choose the trip option that works for you."
      ]
    },
    {
      "kicker": "FOR LOCAL DRIVERS",
      "heading": "Useful when your own car is unavailable.",
      "paragraphs": [
        "A rental does not have to be only for vacation. Local drivers use temporary vehicles while a car is in the shop, when family comes to town, for work transportation or when an extra vehicle makes life easier."
      ]
    },
    {
      "kicker": "DELIVERY OPTIONS",
      "heading": "We can make the handoff more convenient.",
      "paragraphs": [
        "Depending on the trip and vehicle, delivery may be available to nearby hotels, casinos and local addresses within our service area. Available options are shown when arranging your reservation."
      ]
    }
  ],
  "faq": [
    {
      "q": "Do you rent cars in D'Iberville, MS?",
      "a": "Yes. We serve D'Iberville and nearby Biloxi from our local Gulf Coast fleet."
    },
    {
      "q": "Can you deliver a car near D'Iberville?",
      "a": "Local delivery options may be available depending on the location, trip and vehicle."
    },
    {
      "q": "How do I check availability?",
      "a": "Choose a vehicle from our fleet and continue to Turo for current dates, pricing and availability."
    }
  ],
  "ctaTitle": "Find a car near D'Iberville."
};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoLanding {...props} />
    </>
  );
}
