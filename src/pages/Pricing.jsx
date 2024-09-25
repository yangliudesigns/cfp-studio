import Header from "../components/Header/Header";
import PriceCardList from "../components/PriceCardList/PriceCardList";
import Booking from "../components/Booking/Booking";
import Footer from "../components/Footer/Footer";
import FAQList from "../components/FAQList/FAQList";
import HerosForPages from "../components/HerosForPages/HerosForPages";
import PricingHero from "../assets/images/hero-pricing.jpg";


export default function Pricing() {
  return (
    <div>
      <Header />
      <HerosForPages HerosForPagesSrc={PricingHero}/>
      <PriceCardList />
      <Booking />
      <FAQList />
      <Footer />
    </div>
  )
}
