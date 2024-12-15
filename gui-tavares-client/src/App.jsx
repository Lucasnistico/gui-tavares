import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Shows from "./pages/Shows/Shows.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Classes from "./pages/Classes/Classes.jsx";
import Bookings from "./pages/Bookings/Bookings.jsx";
import Payment from "./pages/Payment/Payment.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./styles/_partials/global.scss";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/contact" element={<Classes />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
