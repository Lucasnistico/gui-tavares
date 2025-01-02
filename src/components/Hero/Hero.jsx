import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Video from "../../assets/Videos/videositegui.mp4";
import Image from "../../assets/Images/Hero.jpg";

export default function Hero() {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleListenNow = () => {
    setIsPlayerVisible((prev) => !prev);
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: isMobileOrTablet ? "none" : `url(${Image})`,
      }}
    >
      {isMobileOrTablet && (
        <div className="hero__media">
          <video
            className="hero__video"
            autoPlay
            loop
            muted
            playsInline
            src={Video}
          ></video>
        </div>
      )}

      <div className="hero__content">
        <h1 className="hero__title">Gui Tavares</h1>
        <p className="hero__subtitle">Great music in London!</p>
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
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1996840291&color=%23535bf2&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
}
