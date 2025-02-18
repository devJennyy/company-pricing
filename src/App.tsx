import FeaturedWebsites from "./sections/FeaturedWebsites";
import FeaturesAndBenefits from "./sections/FeaturesAndBenefits";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import ServicesOffered from "./sections/ServicesOffered";
import "./styles/App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Navbar />
      <Hero />
      <FeaturedWebsites />
      <FeaturesAndBenefits />
      <ServicesOffered />
      <Footer />
    </div>
  );
}

export default App;
