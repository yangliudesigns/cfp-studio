import "./ServiceCard";
import { useNavigate } from 'react-router-dom';



export default function ServiceCard({ text, imageSrc }) {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/gallery');
    };

  return (
    <div className="service-card" onClick={handleClick}>
        <img
        src={imageSrc}
        alt="Service Card Background"
        className="service-card__image"
        />
        <div className="service-card__overlay">
            <p className="service-card__text">{text}</p>
        </div>
    </div>
  )
}


