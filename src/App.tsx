import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { PhilosophySection } from "./components/PhilosophySection";
import { ProductSection } from "./components/ProductSection";
import { InfoSection } from "./components/InfoSection";
import { CustomerTestimonials } from "./components/CustomerTestimonial";
import { Footer } from "./components/Footer";
import { CheckoutPage } from "./components/CheckoutPage";

const HomePage = () => (
  <>
    <Header />
    <HeroSection />
    <PhilosophySection />
    <ProductSection />
    <InfoSection />
    <CustomerTestimonials />
    <Footer />
  </>
);

const App = () => {

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CheckoutPage" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
};

export default App;
