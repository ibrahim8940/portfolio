import { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import FiverrTips from "./components/FiverrTips";
import FiverrMockup from "./components/FiverrMockup";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

export default function App() {
  const [toastShow, setToastShow] = useState(false);

  const handleFormSubmit = useCallback(() => {
    setToastShow(true);
  }, []);

  const closeToast = useCallback(() => {
    setToastShow(false);
  }, []);

  return (
    <div className="bg-[#020617] text-white">
      <Toast
        show={toastShow}
        onClose={closeToast}
        message="Message sent successfully! I'll respond within 1 hour."
      />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Experience />
      <FiverrTips />
      <FiverrMockup />
      <Contact onSubmit={handleFormSubmit} />
      <Footer />
    </div>
  );
}
