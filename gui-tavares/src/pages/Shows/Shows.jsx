import "./Shows.scss";

import Hero from "../../components/Hero/Hero.jsx";

export default function Shows() {
  return (
    <>
      <Hero />
      <section className="shows">
        <div className="shows__content">
          <h1 className="shows__title">Gui Tavares</h1>
          <p className="shows__subtitle">The best music in London</p>
          <button className="shows__btn">Listen Now</button>
        </div>
      </section>
    </>
  );
}
