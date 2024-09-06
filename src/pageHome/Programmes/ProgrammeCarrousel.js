import React from "react";
import "./ProgrammeCarrousel.css";

function PricingCard({ title, price, features, className }) {
  return (
    <div className={`pack-container ${className}`}>
      <Header title={title} price={price} />
      <FeatureList features={features} />
      <BuyButton />
    </div>
  );
}

function Header({ title, price }) {
  return (
    <div className="header-programmas">
      <p className="title-programmas">{title}</p>
      <div className="price-container">
        <span>$</span>
        {price}
        <span>/mo</span>
      </div>
    </div>
  );
}

function FeatureList({ features }) {
  return (
    <ul className="lists-programmas">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </ul>
  );
}

function FeatureItem({ feature }) {
  return (
    <li className="list-programmas">
      {/* <span>
        <svg
          aria-hidden="true"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 12.75l6 6 9-13.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
      </span> */}
      <p>- {feature}</p>
    </li>
  );
}

function BuyButton() {
  return (
    <div className="button-container-programmas">
      <button type="button-programmas">Buy Now</button>
    </div>
  );
}

export default PricingCard;
