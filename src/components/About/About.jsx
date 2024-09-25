import "./About.scss";
import Charlotte from "../../assets/images/charlotte.png";


export default function About() {
  return (
    <div className="about-container">
      <div className="about-text">
        <p className="about-text__description">
          I use my camera to tell stories. My goal is to capture the essence of people's lives, 
          creating images that will make you smile or cry years later.
        </p>
        <h5 className="about-text__title">FOUNDER & PHOTOGRAPHER</h5>
        <h5 className="about-text__name">CHARLOTTE</h5>
      </div>
      <div className="about-image">
        <img src={Charlotte} alt="Charlotte taking a photo" />
      </div>
    </div>
  )
}
