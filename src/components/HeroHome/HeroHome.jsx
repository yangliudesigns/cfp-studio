import "./HeroHome.scss";
import { Slide, Fade } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import hero1 from "../../assets/images/hero-1.webp";
import hero2 from "../../assets/images/hero-2.webp";
import hero3 from "../../assets/images/hero-3.webp";
import hero4 from "../../assets/images/hero-4.webp";
import hero5 from "../../assets/images/hero-5.webp";
import hero6 from "../../assets/images/hero-6.webp";
import hero7 from "../../assets/images/hero-7.webp";
import hero8 from "../../assets/images/hero-8.webp";
import hero9 from "../../assets/images/hero-9.webp";
import hero10 from "../../assets/images/hero-10.webp";
import hero11 from "../../assets/images/hero-11.webp";

export default function Hero() {

    const fadeImages = [
        hero1, hero2, hero3, hero4,
        hero5, hero6, hero7, hero8,
        hero9, hero10, hero11,
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
