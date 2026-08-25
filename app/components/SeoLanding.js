import Link from "next/link";
import { placeholderFleet, serviceAreas } from "../site-data";

export default function SeoLanding({
  eyebrow,
  title,
  intro,
  bullets,
  sections,
  faq,
  ctaTitle = "Ready to find a car?",
  ctaText = "Browse our current fleet and continue to Turo for live availability and trip details."
}) {
  return (
    <>
      <header className="nav">
        <Link className="brand" href="/">
          <span className="brandMark">B</span>
          <span><strong>Biloxi</strong><small>Car Rental</small></span>
        </Link>
        <nav className="desktopNav">
          <Link href="/#fleet">Fleet</Link>
          <Link href="/biloxi-casino-car-rental">Casino Guests</Link>
          <Link href="/monthly-car-rental-gulfport-ms">Monthly Rentals</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <Link className="navCta" href="/#fleet">Find a Car</Link>
      </header>

      <main>
        <section className="seoHero">
          <div className="seoHeroCopy">
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            <p>{intro}</p>
            <div className="heroActions">
              <Link className="primaryBtn" href="/#fleet">Browse Our Fleet</Link>
              <Link className="secondaryBtn seoDeliveryBtn" href="/#delivery">Delivery Options</Link>
            </div>
          </div>
          <div className="seoHeroPanel">
            <small>LOCAL GULF COAST RENTALS</small>
            <strong>Simple. Flexible. Nearby.</strong>
            <ul>
              {bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
          </div>
        </section>

        <section className="areaNav">
          <span>Explore nearby:</span>
          {serviceAreas.map((a) => <a key={a.name} href={a.href}>{a.name}</a>)}
        </section>

        {sections.map((s, i) => (
          <section className={`seoContent ${i % 2 ? "seoAlt" : ""}`} key={s.heading}>
            <div>
              <div className="eyebrow dark">{s.kicker}</div>
              <h2>{s.heading}</h2>
            </div>
            <div className="seoProse">
              {s.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </section>
        ))}

        <section className="section">
          <div className="sectionHeading">
            <div>
              <div className="eyebrow dark">POPULAR VEHICLE TYPES</div>
              <h2>Choose a car that fits the trip.</h2>
            </div>
            <p>Live vehicles, pricing and availability will be connected to our Turo fleet in the final production version.</p>
          </div>
          <div className="carGrid">
            {placeholderFleet.map((car) => (
              <article className="carCard" key={car.name}>
                <div className="carImage">
                  <span className="carBadge">{car.badge}</span>
                  <img src={car.image} alt={`${car.year} ${car.name} rental on the Mississippi Gulf Coast`} loading="lazy" />
                </div>
                <div className="carBody">
                  <span className="carType">{car.type}</span>
                  <h3>{car.year} {car.name}</h3>
                  <p>{car.seats} · Automatic · A/C</p>
                  <Link href="/#fleet">View fleet <span>→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section faqSection">
          <div className="sectionHeading">
            <div><div className="eyebrow dark">QUICK ANSWERS</div><h2>Frequently asked questions.</h2></div>
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
          <div><div className="eyebrow">READY TO DRIVE?</div><h2>{ctaTitle}</h2><p>{ctaText}</p></div>
          <Link className="whiteBtn" href="/#fleet">Browse Cars</Link>
        </section>
      </main>

      <footer>
        <div className="footerBrand">
          <span className="brandMark">B</span>
          <div><strong>Biloxi Car Rental</strong><p>Mississippi Gulf Coast</p></div>
        </div>
        <div className="footerLinks">
          <Link href="/car-rental-gulfport-ms">Gulfport</Link>
          <Link href="/car-rental-ocean-springs-ms">Ocean Springs</Link>
          <Link href="/biloxi-casino-car-rental">Casino Guests</Link>
          <Link href="/monthly-car-rental-gulfport-ms">Monthly Rentals</Link>
        </div>
        <p className="legal">Reservations are completed through Turo. Vehicle availability, pricing and trip terms are shown on Turo.</p>
      </footer>
    </>
  );
}
