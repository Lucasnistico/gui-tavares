import "./Home.scss";
import Hero from "../../components/Hero/Hero.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="home">
        <div className="home__content">
          <h1 className="home__title">Gui Tavares</h1>
          <p className="home__subtitle">The best music in London</p>
          <button className="home__btn">Listen Now</button>
        </div>
      </section>
    </>
  );
}
