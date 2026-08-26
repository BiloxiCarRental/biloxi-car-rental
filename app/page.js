import Link from "next/link";
import FleetExplorer from "./FleetExplorer";
const faq = [
  {
    q: "How do I book a car?",
    a: "Choose a vehicle from our fleet and use the booking button to complete your reservation securely through Turo."
  },
  {
    q: "Do you serve Biloxi casino guests?",
    a: "Yes. Our fleet is especially convenient for guests staying around Biloxi's casino and entertainment district."
  },
  {
    q: "Can my rental car be delivered to my hotel or casino?",
    a: "Yes. Delivery is available to major Biloxi casinos, hotels, and other convenient locations within approximately 10 miles of our local service area. Available delivery options are shown when arranging your trip."
  },
  {
    q: "Can local Biloxi residents rent from you?",
    a: "Absolutely. We serve local drivers who need a temporary vehicle for work, repairs, family visits, or everyday transportation."
  },
  {
    q: "Where do I see pricing and availability?",
    a: "Current pricing, trip dates, protection options and availability are shown on the vehicle's Turo booking page."
  }
];

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: "Biloxi Car Rental",
    url: "https://biloxicarrentals.com",
    areaServed: [
      "Biloxi, Mississippi",
      "Gulfport, Mississippi",
      "Ocean Springs, Mississippi",
      "D'Iberville, Mississippi"
    ],
    description:
      "Local car rental serving Biloxi casino guests, Gulf Coast visitors and local drivers."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <header className="nav">
        <a className="brand" href="#">
          <span className="brandMark">B</span>
          <span>
            <strong>Biloxi</strong>
            <small>Car Rental</small>
          </span>
        </a>

        <nav className="desktopNav">
          <a href="#fleet">Fleet</a>
          <Link href="/biloxi-casino-car-rental">Casino Guests</Link>
          <a href="#local">Local Rentals</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a className="navCta" href="#fleet">Find a Car</a>
      </header>

      <main>
        <section className="hero">
          <div className="heroGlow one" />
          <div className="heroGlow two" />

          <div className="heroCopy">
            <div className="eyebrow">LOCAL • SIMPLE • GULF COAST</div>
            <h1>Biloxi Car Rental</h1>
            <div className="heroIntro">
              <p>Local car rental for Biloxi visitors and residents.</p>
              <ul>
                <li>Casino &amp; hotel delivery</li>
                <li><strong>No rental counters. No hassle.</strong></li>
                <li><strong>Book online in minutes</strong></li>
                <li>Serving Biloxi &amp; the Mississippi Gulf Coast</li>
              </ul>
            </div>

            <div className="heroActions">
              <a className="primaryBtn" href="#fleet">Browse Our Fleet</a>
              <a className="secondaryBtn" href="#why">Why Rent With Us?</a>
            </div>

            <div className="trustRow">
              <div><strong>Local</strong><span>Biloxi based</span></div>
              <div><strong>Delivered</strong><span>Casino, hotel & local options</span></div>
              <div><strong>Secure</strong><span>Booking through Turo</span></div>
            </div>
          </div>

          <div className="heroVisual" aria-label="Biloxi Car Rental vehicle showcase">
            <div className="sun" />
            <div className="coastLine" />
            <div className="carShape">
              <div className="carWindow" />
              <div className="wheel w1" />
              <div className="wheel w2" />
            </div>
            <div className="heroCard">
              <span>Gulf Coast ready</span>
              <strong>Pick your ride.</strong>
              <small>Book securely on Turo →</small>
            </div>
          </div>
        </section>

        <section className="logoStrip">
          <span>Serving drivers across</span>
          <strong>Biloxi</strong>
          <Link href="/car-rental-gulfport-ms"><strong>Gulfport</strong></Link>
          <Link href="/car-rental-ocean-springs-ms"><strong>Ocean Springs</strong></Link>
          <Link href="/car-rental-diberville-ms"><strong>D'Iberville</strong></Link>
        </section>

        <section className="section" id="fleet">
          <div className="sectionHeading">
            <div>
              <div className="eyebrow dark">OUR FLEET</div>
              <h2>Find the right car for your stay.</h2>
            </div>
            <p>
              From affordable daily drivers to family SUVs and Gulf Coast
              weekend cars.
            </p>
          </div>

          <FleetExplorer />

          <div className="center">
            <Link className="outlineBtn" href="/car-rental-gulfport-ms">Explore Gulf Coast Car Rentals</Link>
          </div>
        </section>

        <section className="deliverySection" id="delivery">
          <div className="deliveryCopy">
            <div className="eyebrow dark">CONVENIENT LOCAL DELIVERY</div>
            <h2>Your car. Where you need it.</h2>
            <p>
              Skip the rental-counter hassle. We can have your rental car ready
              and waiting at your Biloxi casino, hotel, or another convenient
              location within approximately 10 miles of our local service area.
            </p>
            <div className="deliveryChips">
              <span>Biloxi Casinos</span>
              <span>Hotels</span>
              <span>Local Addresses</span>
              <span>Up to ~10 Miles</span>
            </div>
          </div>
          <div className="deliveryVisual" aria-label="Local Biloxi car rental delivery">
            <div className="deliveryMap">
              <span className="mapRoad rA" />
              <span className="mapRoad rB" />
              <span className="mapRoad rC" />
              <span className="pin p1"><i /></span>
              <span className="pin p2"><i /></span>
              <span className="pin p3"><i /></span>
              <div className="deliveryCard">
                <small>READY WHEN YOU ARRIVE</small>
                <strong>Casino • Hotel • Local</strong>
                <span>Choose a convenient location.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="splitSection" id="casino">
          <div className="photoPanel casinoPanel">
            <div className="panelLabel">BILOXI, MISSISSIPPI</div>
            <div className="skyline">
              <span className="tower t1" />
              <span className="tower t2" />
              <span className="tower t3" />
              <span className="tower t4" />
              <span className="tower t5" />
            </div>
          </div>
          <div className="splitCopy">
            <div className="eyebrow dark">FOR CASINO GUESTS</div>
            <h2>Stay in Biloxi. Drive on your schedule.</h2><div className="casinoQuick"><p><strong>Staying at Beau Rivage, Harrah&apos;s, IP Casino or Hard Rock?</strong></p><ul><li>Have your rental car delivered directly to your casino</li><li>No rental counter. No unnecessary pickup trip.</li><li>Book online and have your car ready when you need it</li><li>Explore Biloxi and the Mississippi Gulf Coast on your schedule</li></ul></div><Link className="textLink" href="/biloxi-casino-car-rental">Biloxi casino car rentals →</Link>
          </div>
        </section>

        <section className="splitSection reverse" id="local">
          <div className="photoPanel localPanel">
            <div className="road" />
            <div className="roadCar">
              <span className="rWindow" />
              <i className="rWheel rw1" />
              <i className="rWheel rw2" />
            </div>
          </div>
          <div className="splitCopy">
            <div className="eyebrow dark">FOR LOCAL DRIVERS</div>
            <h2>A straightforward local car rental.</h2>
            <p>
              Car in the shop? Family coming to town? Need an extra vehicle for
              a few days? Biloxi Car Rental gives local Gulf Coast drivers a
              simple way to find temporary transportation.
            </p>
            <a className="textLink" href="#">Local Biloxi car rentals →</a>
          </div>
        </section>

        <section className="why" id="why">
          <div className="eyebrow">WHY BILOXI CAR RENTAL</div>
          <h2>Local service. A better way to get moving.</h2>

          <div className="whyGrid">
            <div>
              <span className="num">01</span>
              <h3>Local fleet</h3>
              <p>Vehicles selected for the needs of Gulf Coast visitors and local drivers.</p>
            </div>
            <div>
              <span className="num">02</span>
              <h3>Convenient delivery</h3>
              <p>Have your vehicle ready at a casino, hotel, or another convenient Biloxi-area location.</p>
            </div>
            <div>
              <span className="num">03</span>
              <h3>Clear communication</h3>
              <p>Simple pickup information and a local host when you need help during your trip.</p>
            </div>
          </div>
        </section>


        <section className="section localsSection" id="local"><div className="sectionHeading"><div><div className="eyebrow dark">FOR GULF COAST LOCALS</div><h2>Sometimes you just need another car.</h2></div><p>Everyday reasons. Local cars. Simple online booking.</p></div><div className="localUseGrid"><article><span>01</span><h3>Your car is in the shop?</h3><p>Stay on the road while yours is being repaired.</p></article><article><span>02</span><h3>Family coming to town?</h3><p>Get an extra car without rearranging everyone&apos;s schedule.</p></article><article><span>03</span><h3>Need a car for a few days?</h3><p>Simple local transportation without the rental-counter hassle.</p></article><article><span>04</span><h3>Want something fun for the weekend?</h3><p>Grab a convertible and enjoy the Mississippi Gulf Coast.</p></article></div><div className="localsBottom"><p><strong>Local rentals for Biloxi, Gulfport, Ocean Springs &amp; D&apos;Iberville.</strong> Weekly and extended trips may be available too.</p><a className="outlineBtn" href="#fleet">Browse Local Rentals</a></div></section><section className="section seoLinksSection">
          <div className="sectionHeading">
            <div>
              <div className="eyebrow dark">MISSISSIPPI GULF COAST</div>
              <h2>Car rental where you need it.</h2>
            </div>
            <p>Explore local rental options by destination and trip type.</p>
          </div>
          <div className="seoLinkGrid">
            <Link href="/car-rental-gulfport-ms"><small>GULFPORT</small><strong>Car Rental Gulfport MS</strong><span>Local cars, delivery options and Gulf Coast access →</span></Link>
            <Link href="/car-rental-ocean-springs-ms"><small>OCEAN SPRINGS</small><strong>Car Rental Ocean Springs MS</strong><span>Convenient rentals for visitors and local drivers →</span></Link>
            <Link href="/biloxi-casino-car-rental"><small>CASINO GUESTS</small><strong>Biloxi Casino Car Rental</strong><span>Hotel and casino delivery options in Biloxi →</span></Link>
            <Link href="/monthly-car-rental-gulfport-ms"><small>EXTENDED TRIPS</small><strong>Monthly Car Rental Gulfport</strong><span>Options for longer stays and temporary transportation →</span></Link>
          </div>
        </section>

        <section className="section faqSection" id="faq">
          <div className="sectionHeading">
            <div>
              <div className="eyebrow dark">QUICK ANSWERS</div>
              <h2>Biloxi car rental FAQ.</h2>
            </div>
          </div>

          <div className="faqGrid">
            {faq.map((item) => (
              <details key={item.q}>
                <summary>{item.q}<span>+</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="ctaBand">
          <div>
            <div className="eyebrow">READY TO DRIVE?</div>
            <h2>Find your Biloxi rental car.</h2>
            <p>Browse the fleet and check current availability.</p>
          </div>
          <a className="whiteBtn" href="#fleet">Browse Cars</a>
        </section>
      </main>

      <footer>
        <div className="footerBrand">
          <span className="brandMark">B</span>
          <div><strong>Biloxi Car Rental</strong><p>Biloxi, Mississippi</p></div>
        </div>
        <div className="footerLinks">
          <a href="#fleet">Fleet</a>
          <Link href="/biloxi-casino-car-rental">Casino Guests</Link>
          <a href="#local">Local Rentals</a>
          <a href="#faq">FAQ</a>
        </div>
        <p className="legal">
          Reservations are completed through Turo. Vehicle availability,
          pricing and trip terms are shown on Turo.
        </p>
      </footer>
    </>
  );
}
