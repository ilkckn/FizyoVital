import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Landing from "./pages/Landing/Landing";
import Treatments from "./pages/Treatments/Treatments";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import ManualTherapy from "./pages/ManualTherapy/ManualTherapy";
import SportsRehabilitation from "./pages/SportsRehabilitation/SportsRehabilitation";
import NeurologicalPhysiotherapy from "./pages/NeurologicalPhysiotherapy/NeurologicalPhysiotherapy";
import OrthopedicRehabilitation from "./pages/OrthopedicRehabilitation/OrthopedicRehabilitation";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  const { i18n, language } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n, language]);

  return (
    <>
      <Navbar />
      <main className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/services/manual-therapy" element={<ManualTherapy />} />
          <Route path="/services/sports-rehabilitation" element={<SportsRehabilitation />} />
          <Route path="/services/neurological-physiotherapy" element={<NeurologicalPhysiotherapy />} />
          <Route path="/services/orthopedic-rehabilitation" element={<OrthopedicRehabilitation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App