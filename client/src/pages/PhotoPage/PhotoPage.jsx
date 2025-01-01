import "./PhotoPage.scss";
import { useLocation } from "react-router-dom";
import Comments from "../../components/Comments/Comments.jsx";
import Hero from "../../components/Hero/Hero.jsx";

export default function PhotoPage() {
  const location = useLocation();
  const photo = location.state?.photo;

  return (
    <>
      <section className="photo-page">
        <div className="photo-page__content">
          <h1 className="photo-page__title">Gui Tavares Live</h1>
          <p className="photo-page__subtitle">
            A moment captured from Gui's unforgettable shows.
          </p>

          {photo ? (
            <div className="photo-page__image-container">
              <img
                src={photo.src}
                alt={photo.alt}
                className="photo-page__image"
              />
            </div>
          ) : (
            <p>No photo selected.</p>
          )}
        </div>
      </section>

      <Comments />

      <Hero
        title="Relive the Music"
        subtitle="Join Gui for his next show and experience the magic live!"
      />
    </>
  );
}
