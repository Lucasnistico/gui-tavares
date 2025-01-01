import "./Shows.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Importando as imagens da galeria

import Photo2 from "../../assets/Images/gallery2.png";
import Photo3 from "../../assets/Images/gallery3.jpg";
import Photo4 from "../../assets/Images/gallery4.jpg";
import Photo5 from "../../assets/Images/gallery5.jpg";
import Photo6 from "../../assets/Images/gallery6.jpg";
import Photo7 from "../../assets/Images/gallery7.jpg";
import Photo8 from "../../assets/Images/Hero2.jpg";
import photo10 from "../../assets/Images/show.jpg";
import photo11 from "../../assets/Images/show2.jpg";

export default function Shows() {
  const [viewMode, setViewMode] = useState("grid");
  const navigate = useNavigate();

  const photos = [
    { id: 2, src: Photo2, alt: "Audience enjoying the show" },
    { id: 3, src: Photo3, alt: "Light show during performance" },
    { id: 4, src: Photo4, alt: "Crowd cheering" },
    { id: 5, src: Photo5, alt: "Close-up of Gui Tavares" },
    { id: 6, src: Photo6, alt: "Backstage moments" },
    { id: 7, src: Photo7, alt: "Band playing live" },
    { id: 8, src: Photo8, alt: "Gui Tavares playing guitar" },

    { id: 10, src: photo10, alt: "Gui Tavares playing guitar" },
    { id: 11, src: photo11, alt: "Gui Tavares playing guitar" },
  ];

  const handlePhotoClick = (photo) => {
    navigate("/photo", { state: { photo } });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="shows">
        <div className="shows__content">
          <h1 className="shows__title">Gui's Live Shows</h1>
          <p className="shows__description">
            Revive the magic moments with Gui and his shows!
          </p>
          <p className="shows__description">
            Click inside each photo to view details of the shows and participate
            with us!
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

        <Link to="/bookings" className="shows__btn-book" onClick={scrollToTop}>
          Book Now!
        </Link>
      </section>

      <Hero
        title="Sinta a Música"
        subtitle="Junte-se a Gui Tavares em sua próxima apresentação e sinta o ritmo ao vivo."
      />
    </>
  );
}
