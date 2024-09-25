import Header from "../components/Header/Header";
import Hero from "../components/HeroHome/HeroHome";
import About from "../components/About/About";
import Service from "../components/Service/Service";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Service />
      <Footer />
    </div>
  )
}
