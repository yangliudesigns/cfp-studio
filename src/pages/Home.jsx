import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import ServiceCard from "../components/ServiceCard/ServiceCard";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ServiceCard />
      <Footer />
    </div>
  )
}
