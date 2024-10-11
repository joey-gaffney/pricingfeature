import React from "react";

const cards = [
  {
    title: "Basic",
    priceMonthly: "19.99",
    priceAnnually: "199.99",
    storage: "500 GB Storage",
    users: "2 Users Allowed",
    bites: "Send up to 3GB",
    button: "LEARN MORE",
  },
  {
    title: "Professional",
    priceMonthly: "24.99",
    priceAnnually: "249.99",
    storage: "1 TB Storage",
    users: "5 Users Allowed",
    bites: "Send up to 10GB",
    button: "LEARN MORE",
  },
  {
    title: "Master",
    priceMonthly: "39.99",
    priceAnnually: "399.99",
    storage: "2 TB Storage",
    users: "10 Users Allowed",
    bites: "Send up to 20GB",
    button: "LEARN MORE",
  },
];

function Cards({ isAnnual }) {
  return (
    <div className="cards-wrapper">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`card ${
            card.title === "Professional" ? "professional-card" : ""
          }`}
        >
          <h3 className="card-title">{card.title}</h3>
          <p className="card-price">
            <span>$</span>
            {isAnnual ? card.priceAnnually : card.priceMonthly}
          </p>
          <ul className="card-info">
            <hr />
            <li>{card.storage}</li>
            <hr />
            <li>{card.users}</li>
            <hr />
            <li>{card.bites}</li>
            <hr />
          </ul>
          <button disabled>{card.button}</button>
        </div>
      ))}
    </div>
  );
}

export default Cards;
