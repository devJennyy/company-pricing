import FeaturedWebsites from "./sections/FeaturedWebsites";
import FeaturesAndBenefits from "./sections/FeaturesAndBenefits";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import ServicesOffered from "./sections/ServicesOffered";
import "./styles/App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedWebsites />
      <FeaturesAndBenefits />
      <ServicesOffered />
      <Footer />
    </>
  );
}

export default App;
