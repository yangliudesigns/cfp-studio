import Header from "../components/Header/Header";
import Hero from "../components/HeroHome/HeroHome";
import Philosophy from "../components/Philosophy/Philosophy";
import Service from "../components/Service/Service";
import Video from "../components/Video/Video";
import About from "../components/About/About";
import Booking from "../components/Booking/Booking";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Philosophy />
      <Service />
      <Video />
      <About />
      <Booking />
      <Footer />
    </div>
  )
}
