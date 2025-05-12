import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./pages/About/About.jsx";
import Shows from "./pages/Shows/Shows.jsx";
import Class from "./pages/Classes/Classes.jsx";
import Bookings from "./pages/Bookings/Bookings.jsx";
import ContactMe from "./pages/ContactMe/ContactMe.jsx";
import Hero from "./components/Hero/Hero.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Shows />
      <Class />
      <Bookings />
      <ContactMe />
      <Hero />
      <Footer />
    </>
  );
}
