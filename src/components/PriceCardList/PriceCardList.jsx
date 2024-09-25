import "./PriceCardList.scss";
import PricingCard from "../PriceCard/PriceCard";
import React from 'react';
import pricingData from '../../data/price.json';  
import logo1 from "../../assets/images/logo-charl.png";
import logo2 from "../../assets/images/logo-faerie.png";
import logo3 from "../../assets/images/logo-light.png";


export default function PricingCardList() {

  const logoMap = {
    logo1: logo1,
    logo2: logo2,
    logo3: logo3,
  };

  return (
    <div className="pricing-card-list">
      {pricingData.map((item) => (
        <PricingCard
          key={item.id}
          logoSrc={logoMap[item.logoSrc]}  
          location={item.location}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}
