import "./Header.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import LogoDefault from "../../assets/Logo/logo2.svg";
import LogoMobile from "../../assets/Logo/guiTavares.svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 767);
      setIsTablet(width >= 767 && width <= 1023);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`header ${
        isMobile
          ? "header--mobile"
          : isTablet
          ? "header--tablet"
          : "header--desktop"
      }`}
    >
      {isMobile || isTablet ? (
        <div className="header__mobile-wrap">
          <div className="header__logo-container">
            <img src={LogoMobile} alt="Logo" className="header__logo" />
            <Menu
              right
              width={"250px"}
              className="header__menu"
              isOpen={menuOpen}
              onStateChange={handleMenuStateChange}
            >
              <Link
                to="/"
                className="header__nav-link"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="header__nav-link"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                About
              </Link>
              <Link
                to="/shows"
                className="header__nav-link"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Shows
              </Link>
              <Link
                to="/classes"
                className="header__nav-link"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Classes
              </Link>
              <Link
                to="/bookings"
                className="header__nav-link"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Bookings
              </Link>
              <Link
                to="/contact"
                className="header__nav-link"
                onClick={() => {
                  closeMenu();
                  scrollToTop();
                }}
              >
                Contact Me
              </Link>
            </Menu>
          </div>
        </div>
      ) : (
        <div className="header__desktop-wrap">
          <Link to="/" className="header__title" onClick={scrollToTop}>
            <img src={LogoDefault} alt="Logo" className="header__logo" />
          </Link>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/" className="header__nav-link" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/about"
                  className="header__nav-link"
                  onClick={scrollToTop}
                >
                  About
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/shows"
                  className="header__nav-link"
                  onClick={scrollToTop}
                >
                  Shows
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/classes"
                  className="header__nav-link"
                  onClick={scrollToTop}
                >
                  Classes
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/bookings"
                  className="header__nav-link"
                  onClick={scrollToTop}
                >
                  Bookings
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  to="/contact"
                  className="header__nav-link"
                  onClick={scrollToTop}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
