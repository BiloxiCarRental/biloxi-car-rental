import SeoLanding from "../components/SeoLanding";

export const metadata = {
  "title": "Biloxi Casino Car Rental & Hotel Delivery | Biloxi Car Rental",
  "description": "Car rental for Biloxi casino and hotel guests. Convenient local delivery options near Beau Rivage, Hard Rock, Golden Nugget and other Biloxi destinations.",
  "alternates": {
    "canonical": "https://biloxicarrental.com/biloxi-casino-car-rental"
  }
};

export default function Page() {
  const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Biloxi Casino Car Rental",
  "provider": {
    "@type": "AutoRental",
    "name": "Biloxi Car Rental",
    "url": "https://biloxicarrental.com"
  },
  "areaServed": "Biloxi, Mississippi",
  "url": "https://biloxicarrental.com/biloxi-casino-car-rental"
};
  const props = {
  "eyebrow": "BILOXI CASINO CAR RENTAL",
  "title": "A rental car that can be ready at your Biloxi casino or hotel.",
  "intro": "Staying in Biloxi and want the freedom to explore beyond the casino? Choose a local rental car and arrange an available delivery option to a convenient Biloxi hotel, casino or nearby location.",
  "bullets": [
    "Built for Biloxi casino guests",
    "Hotel and casino delivery options",
    "Explore the Gulf Coast on your schedule",
    "Book securely through Turo"
  ],
  "sections": [
    {
      "kicker": "CASINO GUESTS",
      "heading": "Check in. Get your car. Explore Biloxi.",
      "paragraphs": [
        "Biloxi visitors often spend part of the trip at the casinos and part of it exploring the Mississippi Gulf Coast. A local rental gives you the freedom to visit restaurants, beaches, Ocean Springs, Gulfport and other destinations without relying on a ride every time you leave the property.",
        "We serve guests staying around major Biloxi destinations, including the Beau Rivage area, Hard Rock, Golden Nugget and other casino and hotel locations."
      ]
    },
    {
      "kicker": "BEAU RIVAGE & DOWNTOWN BILOXI",
      "heading": "Convenient for Beau Rivage Biloxi car rental searches.",
      "paragraphs": [
        "If you are staying at Beau Rivage or another downtown Biloxi property, you do not need to spend your trip hunting for a traditional rental counter. Select a vehicle from our local fleet and review the available delivery or pickup choices for your dates.",
        "We are an independent local rental business and are not affiliated with or endorsed by any casino or hotel mentioned on this page."
      ]
    },
    {
      "kicker": "LOCAL DELIVERY",
      "heading": "Your car can meet you where you are staying.",
      "paragraphs": [
        "Available delivery options can include major Biloxi casinos, hotels and other convenient addresses within approximately 10 miles of our local service area. Specific trip options are confirmed during booking."
      ]
    }
  ],
  "faq": [
    {
      "q": "Can you deliver a rental car to a Biloxi casino?",
      "a": "Yes, delivery options are available for major Biloxi casino and hotel locations, subject to the vehicle and trip details."
    },
    {
      "q": "Do you offer car rental near Beau Rivage Biloxi?",
      "a": "We serve the Beau Rivage area and other downtown Biloxi destinations with our local fleet and available delivery options."
    },
    {
      "q": "Are you affiliated with Beau Rivage, Hard Rock or Golden Nugget?",
      "a": "No. Biloxi Car Rental is an independent local business and is not affiliated with or endorsed by the casinos or hotels mentioned."
    },
    {
      "q": "Where do I see the delivery charge?",
      "a": "Available trip and delivery options, along with current pricing, are shown when arranging the reservation through Turo."
    }
  ],
  "ctaTitle": "Find a car for your Biloxi stay."
};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SeoLanding {...props} />
    </>
  );
}
