import "./About.scss";
import Hero from "../../components/Hero/Hero.jsx";
import Records from "../../components/Records/Records.jsx";
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
        <div className="about__records">
          <Records />
        </div>
        <div className="about__contents">
          <div className="about__content about__content--top">
            Graduated in Classical and Popular Guitar, as well as Composition
            and Conducting from UNICAMP, Gui Tavares is a distinct voice in
            contemporary Brazilian music. His first independent album, Noite que
            Brincou de Lua, released in partnership with Edu Passeto, marked the
            beginning of his recording career and was later released by Far Out
            Records due to the cultural impact it achieved.
          </div>
          <div className="about__content">
            His career includes collaborations on albums by artists such as
            Jazzinho and Ed Motta, as well as contributions to two kids music
            compilations from the American label Putumayo Records. Gui leads
            projects that celebrate Brazilian music, such as Clube da Esquina
            Tribute, Minas Heart of Brazil, and the vocal group Nossa Voz, which
            has over 20 years. Additionally, he promotes lectures and workshops
            on Brazil's musical culture.
          </div>
        </div>
        <Link to="/bookings" className="about__btn" onClick={scrollToTop}>
          Book Now!
        </Link>
      </section>
      <Hero />
    </>
  );
}
