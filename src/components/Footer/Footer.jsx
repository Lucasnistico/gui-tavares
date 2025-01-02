import { Link } from "react-router-dom";
import "./Footer.scss";
import Instagram from "../../assets/Icons/SVG/Icon-instagram.svg";
import Facebook from "../../assets/Icons/SVG/Icon-facebook.svg";
import Twitter from "../../assets/Icons/SVG/Icon-twitter.svg";
import SoundCloud from "../../assets/Icons/SVG/soundcloud.svg";
import Spotify from "../../assets/Icons/SVG/spotify.svg";
import Youtube from "../../assets/Icons/SVG/youtube.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <nav className="footer__nav">
          <div className="footer__title-wrap">
            <Link to="/contact" className="footer__logo" onClick={scrollToTop}>
              <h2 className="footer__title">Get in Touch</h2>
            </Link>
          </div>
          <div className="footer__head-icons">
            <Link
              to="#"
              className="footer__head-icon-link"
              onClick={() =>
                window.open(
                  "https://soundcloud.com/guitavares-127051646",
                  "_blank"
                )
              }
            >
              <img
                className="footer__icon"
                src={SoundCloud}
                alt="SoundCloud logo"
              />
            </Link>

            <Link
              to="#"
              className="footer__head-icon-link"
              onClick={() =>
                window.open(
                  "https://open.spotify.com/artist/6N8eZrTInoOzZPUHaows7c",
                  "_blank"
                )
              }
            >
              <img className="footer__icon" src={Spotify} alt="Spotify logo" />
            </Link>

            <Link
              to="#"
              className="footer__head-icon-link"
              onClick={() =>
                window.open("https://www.youtube.com/@guitavares9536", "_blank")
              }
            >
              <img className="footer__icon" src={Youtube} alt="Youtube logo" />
            </Link>

            <Link
              to="#"
              className="footer__head-icon-link"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/gui_tavares_music/",
                  "_blank"
                )
              }
            >
              <img
                className="footer__icon"
                src={Instagram}
                alt="Instagram logo"
              />
            </Link>

            <Link
              to="#"
              className="footer__head-icon-link"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/guitavaresmusic/",
                  "_blank"
                )
              }
            >
              <img
                className="footer__icon"
                src={Facebook}
                alt="Facebook logo"
              />
            </Link>

            <Link
              to="#"
              className="footer__head-icon-link"
              onClick={() => window.open("https://x.com/", "_blank")}
            >
              <img className="footer__icon" src={Twitter} alt="Twitter logo" />
            </Link>
          </div>
        </nav>
        <section className="footer__info-wrap">
          <div className="footer__info">
            <p className="footer__info-subtitle">Gui Tavares</p>
            <p className="footer__info-content">London Road, NW10</p>
            <p className="footer__info-content">London, United Kingdom</p>
            <Link
              to="mailto:info@guitavares.co.uk"
              className="footer__info-email"
            >
              contact@guitavares.com
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
}
