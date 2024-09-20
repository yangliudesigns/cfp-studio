import "./PriceCard.scss";


export default function PricingCard({ logoSrc, location, description, price }) {
    return (
      <div className="pricing-card">
        <div className="pricing-card__overlay">
          <img src={logoSrc} alt="Logo" className="pricing-card__logo" />
          <p className="pricing-card__location">{location}</p>
          <p className="pricing-card__description">{description}</p>
          <p className="pricing-card__price">From ${price}</p>
        </div>
      </div>
    );
  }
  
