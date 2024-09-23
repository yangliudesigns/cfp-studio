import "./Service.scss";
import ServiceCard from "../ServiceCard/ServiceCard";
import serviceData from "../../data/service.json";


export default function Service() {
  return (
    <div className="service-container">
      {serviceData.map((service) => (
        <ServiceCard 
          key={service.id} 
          text={service.text} 
          imageSrc={service.imageSrc} 
        />
      ))}
    </div>
  )
}
