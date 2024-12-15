import { Link } from "react-router-dom";
import "./Footer.scss";

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
              to="https://www.instagram.com/gui_tavares_music/"
              className="footer__head-icon-link"
            >
              <img
                className="footer__icon"
                src="../assets/Icons/SVG/Icon-instagram.svg"
                alt="Instagram logo"
              />
            </Link>
            <Link
              to="https://www.facebook.com/guitavaresmusic/"
              className="footer__head-icon-link"
            >
              <img
                src="./assets/Icons/SVG/Icon-facebook.svg"
                alt="Facebook logo"
                className="footer__icon"
              />
            </Link>
            <Link to="https://x.com/" className="footer__head-icon-link">
              <img
                src="./assets/Icons/SVG/Icon-twitter.svg"
                alt="Twiter Logo "
                className="footer__icon"
              />
            </Link>
          </div>
          <div className="footer__head-img">
            <Link to="./index.html" className="footer__head-img-link">
              <img
                src="./assets/Logo/Logo-bandsite.svg"
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
        <section className="footer__info-wrap">
          <div className="footer__info">
            <p className="footer__info-subtitle">Entertainment</p>
            <p className="footer__info-content">Booking Agent for</p>
            <p className="footer__info-content">Gui Tavares</p>
            <Link
              to="mailto:agent@guitavares.co.uk"
              className="footer__info-email"
            >
              bookings@archentertainment.com
            </Link>
          </div>
        </section>
        <div className="footer__img-wrap">
          <Link to="./index.html" className="footer__img-link">
            <img
              src="../assets/Logo/Logo-bandsite.svg"
              alt="Bandsite Logo"
              className="footer__img"
            />
          </Link>
        </div>
        <p className="footer__text">
          Copyright Gui Tavares © 2024 All Rights Reserved.
        </p>
      </footer>
    </>
  );
}
