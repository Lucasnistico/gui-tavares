import "./Home.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="home">
        <Hero />
      </div>
    </>
  );
}
