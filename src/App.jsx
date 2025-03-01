import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Shows from "./pages/Shows/Shows.jsx";
import { Routes, Route } from "react-router-dom";
import Classes from "./pages/Classes/Classes.jsx";
import Bookings from "./pages/Bookings/Bookings.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import PhotoPage from "./pages/PhotoPage/PhotoPage.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import ContactMe from "./pages/ContactMe/ContactMe.jsx";
import { Analytics } from "@vercel/analytics/react";
import "./styles/_partials/global.scss";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Analytics id="G-4J9D3Q3Z2T" />
    </>
  );
}
