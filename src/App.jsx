import Navbar from "./Components/Navbar";
import HeroSection from "./Components/Hero";
import FeatureSection from "./Components/Feature";
import Workflow from "./Components/Workflow";
import Footer from "./Components/Footer";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;