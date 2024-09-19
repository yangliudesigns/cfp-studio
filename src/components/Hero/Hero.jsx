import "./Hero.scss";
import { Slide, Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import hero1 from "../../assets/images/hero-1.png";
import hero2 from "../../assets/images/hero-2.jpg";
import hero3 from "../../assets/images/hero-3.png";
import hero4 from "../../assets/images/hero-4.png";
import hero5 from "../../assets/images/hero-5.png";
import hero6 from "../../assets/images/hero-6.png";

export default function Hero() {

    const fadeImages = [
        hero1,
        hero2,
        hero3,
        hero4,
        hero5,
        hero6,
      ];
    

  return (
    <div className="slide-container">
    <Fade>
      {fadeImages.map((fadeImage, index) => (
        <div className="each-fade" key={index}>
          <div className="image-container">
            <img src={fadeImage} alt={`slide-${index + 1}`} />
          </div>
        </div>
      ))}
    </Fade>
  </div>
  )
}
