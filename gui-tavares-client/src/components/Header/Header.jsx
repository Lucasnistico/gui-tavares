import "./Header.scss";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect } from "react";
import Logo from "../../assets/Logo/logo2.svg";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="header">
      <div className="header__title-wrap">
        <Link to="/" className="header__title" onClick={scrollToTop}>
          <img src={Logo} alt="Logo" className="header__logo" />
        </Link>
      </div>
      {isMobile ? (
        <>
          <Menu
            right
            width={"250px"}
            className="header__menu"
            customBurgerIcon={
              <div className="header__burger-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
            }
          >
            <Link to="/" className="header__nav-link" onClick={scrollToTop}>
              Home
            </Link>
            <Link
              to="/about"
              className="header__nav-link"
              onClick={scrollToTop}
            >
              About
            </Link>
            <Link
              to="/shows"
              className="header__nav-link"
              onClick={scrollToTop}
            >
              Shows
            </Link>
            <Link
              to="/classes"
              className="header__nav-link"
              onClick={scrollToTop}
            >
              Classes
            </Link>
            <Link
              to="/bookings"
              className="header__nav-link"
              onClick={scrollToTop}
            >
              Bookings
            </Link>
          </Menu>
        </>
      ) : (
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
          </ul>
        </nav>
      )}
    </header>
  );
}
