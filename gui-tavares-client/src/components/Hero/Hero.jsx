import React, { useState } from "react";
import "./Hero.scss";

export default function Hero() {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);

  const handleListenNow = () => {
    setIsPlayerVisible((prev) => !prev);
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Gui Tavares</h1>
        <p className="hero__subtitle">The best music in London</p>
        <button className="hero__btn" onClick={handleListenNow}>
          {isPlayerVisible ? "Close" : "Listen Now"}
        </button>

        {isPlayerVisible && (
          <div className="hero__player">
            <iframe
              title="SoundCloud Player"
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/guitavares-127051646/o-samba-e-a-voz&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&color=%23535bf2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
