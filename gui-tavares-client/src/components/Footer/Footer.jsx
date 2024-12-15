import { Link } from "react-router-dom";
import "./Footer.scss";
import Instagram from "../../assets/Icons/SVG/Icon-instagram.svg";
import Facebook from "../../assets/Icons/SVG/Icon-facebook.svg";
import Twitter from "../../assets/Icons/SVG/Icon-twitter.svg";
import Logo from "../../assets/Logo/Logo-bandsite.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <nav className="footer__nav">
          <div className="footer__title-wrap">
            <h2 className="footer__title">Get in Touch</h2>
          </div>
          <div className="footer__head-icons">
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
          <div className="footer__head-img">
            <Link to="./index.html" className="footer__head-img-link">
              <img
                src={Logo}
                alt="Bandsite Logo"
                className="footer__img footer__img--head"
              />
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
              info@guitavares.com
            </Link>
          </div>
        </section>
        <section className="footer__info-wrap">
          <div className="footer__info">
            <p className="footer__info-subtitle">Artist Group</p>
            <p className="footer__info-content">Centurion House - Staines</p>
            <p className="footer__info-content">TW18 - London, UK</p>
            <Link
              to="mailto:bookings@guitavars.co.uk"
              className="footer__info-email"
            >
              bookings@guitavares.com
            </Link>
          </div>
        </section>

        <div className="footer__img-wrap">
          <Link to="./index.html" className="footer__img-link">
            <img src={Logo} alt="Bandsite Logo" className="footer__img" />
          </Link>
        </div>
        <p className="footer__text">
          Copyright Gui Tavares © 2024 All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
