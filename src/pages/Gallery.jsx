import Header from "../components/Header/Header";
import GalleryGrid from "../components/GalleryGrid/GalleryGrid";
import Footer from "../components/Footer/Footer";
import HerosForPages from "../components/HerosForPages/HerosForPages";
import GalleryHero from "../assets/images/hero-galleries.jpg";


export default function Gallery() {
  return (
    <div>
      <Header />
      <HerosForPages HerosForPagesSrc={GalleryHero}/>
      <GalleryGrid />
      <Footer />
    </div>
  )
}
