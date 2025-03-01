import "./Home.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { useState } from "react";
import Pic from "../../assets/Images/jazzcafepic.png";
import Jazz from "../../assets/Images/jazz-cafe.png";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true); // State to control popup visibility

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="home">
        <Hero />
        {showPopup && (
          <div className="popup">
            <div className="popup__content">
              <button className="popup__close" onClick={closePopup}>
                X Close pop-up
              </button>
              <div className="popup__logo">
                <img src={Jazz} alt="Jazz Cafe Logo" />
              </div>
              <div className="popup__details">
                <h1>Clube da Esquina</h1>
                <h2>Anniversary Performance</h2>
                <p>Tuesday 18th March</p>
                <p>Standing Tickets: £10</p>
                <p>Restaurant Tickets: £25</p>
                <a
                  href="https://thejazzcafe.com/event/clube-da-esquina-anniversary-performance/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popup__tickets"
                >
                  Get Tickets
                </a>
              </div>
              <div className="popup__image">
                <img src={Pic} alt="Clube da Esquina" />
              </div>
              <div className="popup__spotify">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/album/5risYG7klZCSLMNxB9dZhf?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
