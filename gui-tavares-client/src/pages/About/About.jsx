import "./About.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo/guiTavares.svg";

export default function About() {
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
            Gui Tavares: Uma das Faces da Música Brasileira no Cenário
            Internacional.
          </p>
        </div>
        <div className="about__contents">
          <div className="about__content about__content--top">
            Formado em Violão Clássico e Popular, além de Composição e Regência
            pela UNICAMP, Gui Tavares é uma voz distinta na música brasileira
            contemporânea. Seu primeiro álbum independente, Noite que Brincou de
            Lua, lançado em parceria com Edu Passeto, marcou o início de sua
            trajetória fonográfica e foi relançado mais tarde pela Far Out
            Records devido ao impacto cultural que alcançou.
          </div>
          <div className="about__content">
            Sua carreira inclui colaborações em álbuns de artistas como Jazzinho
            e Ed Motta, além de contribuições para duas compilações infantis da
            gravadora americana Putumayo Records. Gui lidera projetos que
            celebram a música brasileira, como Clube da Esquina Tribute, Minas
            Heart of Brazil e o Grupo Vocal Nossa Voz, além de promover
            palestras e workshops sobre a cultura musical do Brasil.
          </div>
        </div>

        <Link to="/bookings" className="about__btn">
          Book Now!
        </Link>
      </section>

      {/* Hero Component */}
      <Hero
        title="Gui Tavares"
        subtitle="Gui Tavares: Uma das Faces da Música Brasileira no Cenário Internacional."
      />
    </>
  );
}
