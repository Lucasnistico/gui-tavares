import "./Home.scss";
import Hero from "../../components/Hero/Hero.jsx";
import About from "../../pages/About/About.jsx";
import Shows from "../../pages/Shows/Shows.jsx";
import Class from "../../pages/Classes/Classes.jsx";
import Bookings from "../../pages/Bookings/Bookings.jsx";
import ContactMe from "../ContactMe/ContactMe.jsx";

export default function Home() {
  return (
    <>
      <div className="home">
        <Hero />
        <About />
        <Shows />
        <Class />
        <Bookings />
        <ContactMe />
        <Hero />
      </div>
    </>
  );
}
