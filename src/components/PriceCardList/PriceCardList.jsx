import "./PriceCardList.scss";
import PricingCard from "../PriceCard/PriceCard";
import React from 'react';
import pricingData from '../../data/price.json';  // 直接 import JSON 数据
import logo1 from "../../assets/images/CHARL.png";
import logo2 from "../../assets/images/FAERIE.png";
import logo3 from "../../assets/images/LIGHT.png";

const logoMap = {
  logo1: logo1,
  logo2: logo2,
  logo3: logo3,
};

export default function PricingCardList() {

  return (
    <div className="pricing-card-list">
      {pricingData.map((item) => (
        <PricingCard
          key={item.id}
          logoSrc={logoMap[item.logoSrc]}  // 根据 JSON 中的 logoSrc 动态获取图片
          location={item.location}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
}
