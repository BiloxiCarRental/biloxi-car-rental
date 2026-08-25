"use client";

import { useMemo, useState } from "react";

const cars = [
  {
    name: "Ford Mustang Convertible",
    type: "Convertible",
    typeGroup: "Convertible",
    seats: 4,
    bestFor: "Fun & Weekend",
    priceRank: 8,
    badge: "Gulf Coast fun",
    image: "/cars/mustang.webp",
    href: "https://turo.com/us/en/your-car/3529571"
  },
  {
    name: "Toyota Corolla",
    type: "Economy Sedan",
    typeGroup: "Sedan",
    seats: 5,
    bestFor: "Budget",
    priceRank: 2,
    badge: "Great value",
    image: "/cars/corolla.webp",
    href: "https://turo.com/us/en/your-car/3502155"
  },
  {
    name: "Toyota Sienna",
    type: "Family Minivan",
    typeGroup: "Minivan",
    seats: 7,
    bestFor: "Family",
    priceRank: 10,
    badge: "7 Passenger",
    image: "/cars/sienna.webp",
    href: "https://turo.com/us/en/your-car/3628595"
  },
  {
    name: "Chevrolet Equinox",
    type: "SUV",
    typeGroup: "SUV",
    seats: 5,
    bestFor: "Family",
    priceRank: 6,
    badge: "Roomy SUV",
    image: "/cars/equinox.webp",
    href: "https://turo.com/us/en/your-car/3859657"
  },
  {
    name: "Kia Soul",
    type: "Economy",
    typeGroup: "Compact",
    seats: 5,
    bestFor: "Budget",
    priceRank: 1,
    badge: "Easy around town",
    image: "/cars/soul.webp",
    href: "https://turo.com/us/en/your-car/2883870"
  },
  {
    name: "Hyundai Venue",
    type: "Compact SUV",
    typeGroup: "SUV",
    seats: 5,
    bestFor: "Budget",
    priceRank: 3,
    badge: "Compact SUV",
    image: "/cars/venue.webp",
    href: "https://turo.com/us/en/your-car/3429346"
  },
  {
    name: "Kia Sportage",
    type: "SUV",
    typeGroup: "SUV",
    seats: 5,
    bestFor: "Family",
    priceRank: 5,
    badge: "Gulf Coast ready",
    image: "/cars/sportage.webp",
    href: "https://turo.com/us/en/your-car/3447501"
  },
  {
    name: "Mazda CX-3",
    type: "Compact SUV",
    typeGroup: "SUV",
    seats: 5,
    bestFor: "Comfort",
    priceRank: 4,
    badge: "Easy to drive",
    image: "/cars/cx3.webp",
    href: "https://turo.com/us/en/your-car/3806189"
  },
  {
    name: "Mazda CX-5",
    type: "SUV",
    typeGroup: "SUV",
    seats: 5,
    bestFor: "Comfort",
    priceRank: 7,
    badge: "Comfortable SUV",
    image: "/cars/cx5.webp",
    href: "https://turo.com/us/en/your-car/3193813/edit-pricing"
  },
  {
    name: "Kia Sorento",
    type: "7-Passenger SUV",
    typeGroup: "SUV",
    seats: 7,
    bestFor: "Family",
    priceRank: 11,
    badge: "7 Passenger",
    image: "/cars/sorento.webp",
    href: "https://turo.com/us/en/suv-rental/united-states/biloxi-ms/kia/sorento/3309313"
  },
  {
    name: "Kia Forte",
    type: "Economy Sedan",
    typeGroup: "Sedan",
    seats: 5,
    bestFor: "Budget",
    priceRank: 2.5,
    badge: "Great value",
    image: "/cars/forte.webp",
    href: "https://turo.com/us/en/car-rental/united-states/undefined-undefined/kia/forte/3561569"
  },
  {
    name: "Ford Mustang Convertible — Black",
    type: "Convertible",
    typeGroup: "Convertible",
    seats: 4,
    bestFor: "Fun & Weekend",
    priceRank: 9,
    badge: "Gulf Coast fun",
    image: "/cars/mustang-black.webp",
    href: "https://turo.com/us/en/your-car/3620769"
  },
  {
    name: "Hyundai Santa Cruz",
    type: "Pickup / Adventure",
    typeGroup: "Pickup",
    seats: 5,
    bestFor: "Adventure",
    priceRank: 8.5,
    badge: "Adventure ready",
    image: "/cars/santa-cruz.webp",
    href: "https://turo.com/us/en/truck-rental/united-states/biloxi-ms/hyundai/santa-cruz/2881343"
  }
];

export default function FleetExplorer() {
  const [type, setType] = useState("All");
  const [seats, setSeats] = useState("All");
  const [bestFor, setBestFor] = useState("All");
  const [price, setPrice] = useState("Recommended");

  const filteredCars = useMemo(() => {
    const list = cars.filter((car) => {
      const typeMatch = type === "All" || car.typeGroup === type;
      const seatsMatch = seats === "All" || (seats === "7+" ? car.seats >= 7 : car.seats === Number(seats));
      const bestMatch = bestFor === "All" || car.bestFor === bestFor;
      return typeMatch && seatsMatch && bestMatch;
    });

    if (price === "Low to High") return [...list].sort((a, b) => a.priceRank - b.priceRank);
    if (price === "High to Low") return [...list].sort((a, b) => b.priceRank - a.priceRank);
    return list;
  }, [type, seats, bestFor, price]);

  const reset = () => {
    setType("All");
    setSeats("All");
    setBestFor("All");
    setPrice("Recommended");
  };

  const isFiltered = type !== "All" || seats !== "All" || bestFor !== "All" || price !== "Recommended";

  return (
    <>
      <div className="fleetToolbar" aria-label="Filter rental cars">
        <div className="filterPill">
          <label htmlFor="typeFilter">Type</label>
          <select id="typeFilter" value={type} onChange={(e) => setType(e.target.value)}>
            <option>All</option>
            <option>SUV</option>
            <option>Sedan</option>
            <option>Convertible</option>
            <option>Minivan</option>
            <option>Compact</option>
            <option>Pickup</option>
          </select>
        </div>

        <div className="filterPill">
          <label htmlFor="seatFilter">Seats</label>
          <select id="seatFilter" value={seats} onChange={(e) => setSeats(e.target.value)}>
            <option>All</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="7+">7+</option>
          </select>
        </div>

        <div className="filterPill">
          <label htmlFor="bestFilter">Best For</label>
          <select id="bestFilter" value={bestFor} onChange={(e) => setBestFor(e.target.value)}>
            <option>All</option>
            <option>Budget</option>
            <option>Family</option>
            <option>Comfort</option>
            <option>Fun & Weekend</option>
            <option>Adventure</option>
          </select>
        </div>

        <div className="filterPill">
          <label htmlFor="priceFilter">Price</label>
          <select id="priceFilter" value={price} onChange={(e) => setPrice(e.target.value)}>
            <option>Recommended</option>
            <option>Low to High</option>
            <option>High to Low</option>
          </select>
        </div>

        {isFiltered && <button className="resetFilters" type="button" onClick={reset}>Clear</button>}
      </div>

      <div className="fleetCount">
        <strong>{filteredCars.length}</strong> {filteredCars.length === 1 ? "vehicle" : "vehicles"} shown
      </div>

      <div className="carGrid">
        {filteredCars.map((car) => (
          <article className="carCard" key={car.name}>
            <a className="carImage" href={car.href} target="_blank" rel="noopener noreferrer" aria-label={`Check ${car.name} availability on Turo`}>
              <img src={car.image} alt={`${car.name} rental in Biloxi Mississippi`} loading="lazy" />
              <span className="carBadge">{car.badge}</span>
            </a>
            <div className="carBody">
              <span className="carType">{car.type}</span>
              <h3>{car.name}</h3>
              <div className="carMeta">
                <span>{car.seats} seats</span>
                <span>Automatic</span>
                <span>A/C</span>
              </div>
              <a className="availabilityLink" href={car.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${car.name} on Turo`}>
                Check availability <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="noResults">
          <strong>No exact match.</strong>
          <span>Try clearing one of the filters.</span>
          <button type="button" onClick={reset}>Show all cars</button>
        </div>
      )}
    </>
  );
}
