import "./Header.scss";
import { slide as Menu } from "react-burger-menu";
import { useState, useEffect, useCallback } from "react";
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

    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = useCallback((className) => {
    const section = document.querySelector(`.${className}`);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  }, []);

  // Updated section list without 'hero'
  const navSections = ["about", "shows", "classes", "bookings", "contact"];

  return (
    <header
      className={`header ${
        isMobile
          ? "header--mobile"
          : isTablet
          ? "header--tablet"
          : "header--desktop"
      }`}
      role="banner"
    >
      {isMobile || isTablet ? (
        <div className="header__mobile-wrap">
          <div className="header__logo-container">
            <img
              src={LogoMobile}
              alt="Gui Tavares Logo"
              className="header__logo"
            />
            <button
              className="header__hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            <Menu
              right
              width={"250px"}
              className="header__menu"
              isOpen={menuOpen}
              onStateChange={handleMenuStateChange}
              aria-label="Main navigation"
            >
              {navSections.map((section) => (
                <a
                  key={section}
                  className="header__nav-link"
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </Menu>
          </div>
        </div>
      ) : (
        <div className="header__desktop-wrap">
          <a
            className="header__title"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About"
          >
            <img
              src={LogoDefault}
              alt="Gui Tavares Logo"
              className="header__logo"
            />
          </a>
          <nav className="header__nav" role="navigation" aria-label="Main">
            <ul className="header__nav-list">
              {navSections.map((section) => (
                <li key={section} className="header__nav-item">
                  <a
                    className="header__nav-link"
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
