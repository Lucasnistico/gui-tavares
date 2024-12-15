import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Gui Tavares</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/" className="header__nav-link">
              Home
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/about" className="header__nav-link">
              About
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/shows" className="header__nav-link">
              Shows
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/classes" className="header__nav-link">
              Classes
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/bookings" className="header__nav-link">
              Bookings
            </Link>
          </li>
          <li className="header__nav-item">
            <Link to="/contact" className="header__nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
