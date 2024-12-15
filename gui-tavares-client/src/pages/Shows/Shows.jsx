import "./Shows.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Photo1 from "../../assets/Images/gallery.png";
import Photo2 from "../../assets/Images/gallery2.png";

export default function Shows() {
  const [viewMode, setViewMode] = useState("grid");
  const navigate = useNavigate();

  const photos = [
    { id: 1, src: Photo1, alt: "Gui performing on stage" },
    { id: 2, src: Photo2, alt: "Audience enjoying the show" },
  ];

  const handlePhotoClick = (photo) => {
    navigate("/photo", { state: { photo } });
  };

  return (
    <>
      <section className="shows">
        <div className="shows__content">
          <h1 className="shows__title">Gui's Live Shows</h1>
          <p className="shows__description">
            Relive the magic of Gui Tavares' unforgettable performances through
            this gallery.
          </p>

          <div className="shows__view-toggle">
            <button
              className={`shows__view-btn ${
                viewMode === "grid" ? "active" : ""
              }`}
              onClick={() => setViewMode("grid")}
            >
              Grid View
            </button>
            <button
              className={`shows__view-btn ${
                viewMode === "list" ? "active" : ""
              }`}
              onClick={() => setViewMode("list")}
            >
              List View
            </button>
          </div>

          <div className={`shows__gallery shows__gallery--${viewMode}`}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="shows__photo"
                onClick={() => handlePhotoClick(photo)}
                style={{ cursor: "pointer" }}
              >
                <img src={photo.src} alt={photo.alt} className="shows__image" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Hero
        title="Experience the Music"
        subtitle="Join Gui Tavares on his next performance and feel the rhythm live."
      />
    </>
  );
}
