import "./Shows.scss";
import { useNavigate, Link } from "react-router-dom";

import Photo2 from "../../assets/Images/gallery2.png";
import Photo3 from "../../assets/Images/gallery3.jpg";
import Photo4 from "../../assets/Images/gallery4.jpg";
import Photo5 from "../../assets/Images/gallery5.jpg";
import Photo6 from "../../assets/Images/gallery6.jpg";
import Photo7 from "../../assets/Images/gallery7.jpg";
import Photo8 from "../../assets/Images/Hero2.jpg";
import photo10 from "../../assets/Images/show.jpg";
import photo11 from "../../assets/Images/show2.jpg";
import photo12 from "../../assets/Images/show10.jpg";
import Photo13 from "../../assets/Images/show11.jpg";
import Photo14 from "../../assets/Images/show12.jpg";

export default function Shows() {
  const navigate = useNavigate();

  const photos = [
    { id: 8, src: Photo8, alt: "Gui Tavares playing guitar" },
    { id: 4, src: Photo4, alt: "Crowd cheering" },
    { id: 5, src: Photo5, alt: "Close-up of Gui Tavares" },
    { id: 3, src: Photo3, alt: "Light show during performance" },
    { id: 6, src: Photo6, alt: "Backstage moments" },
    { id: 7, src: Photo7, alt: "Band playing live" },
    { id: 2, src: Photo2, alt: "Audience enjoying the show" },
    { id: 11, src: photo11, alt: "Gui Tavares playing guitar" },
    { id: 13, src: Photo13, alt: "Gui Tavares playing guitar" },
    { id: 14, src: Photo14, alt: "Gui Tavares playing guitar" },
    { id: 9, src: photo12, alt: "Gui Tavares playing guitar" },
    { id: 10, src: photo10, alt: "Gui Tavares playing guitar" },
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
          <div className="shows__gallery">
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
    </>
  );
}
