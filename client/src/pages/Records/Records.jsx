import "./Records.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/guiTavares.svg";

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="about__wrap">
        <img src={Logo} alt="Gui Tavares" className="about__logo" />
        <div className="about__title-wrap">
          <h3 className="about__content-title">Gui Tavares</h3>
          <p className="about__subtitle">
            Samba é a voz do meu país, está em tudo o que se diz. O mundo
            precisa te encontrar! Canta, solta a voz para se ouvir, deixa o céu
            iluminar, salva o samba que chegar.&#127925;&#127926;
          </p>
          <p className="about__subtitle about__subtitle--slogan">
            Song Writter | Singer | Multi intrumentalist | Conductor
          </p>
          <p className="about__subtitle about__subtitle--slogan">
            Gui Tavares: One of the faces of Brazilian music in the UK to the
            world!{" "}
          </p>
        </div>

        <Link to="/bookings" className="about__btn" onClick={scrollToTop}>
          Book Now!
        </Link>
      </section>
      <Hero />
    </>
  );
}
