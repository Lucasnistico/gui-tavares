import "./Classes.scss";
import Hero from "../../components/Hero/Hero.jsx";
import { Link } from "react-router-dom";

export default function Classes() {
  return (
    <>
      <section className="classes">
        <div className="classes__content">
          <h1 className="classes__title">Discover Your Talent</h1>
          <p className="classes__description">
            Gui Tavares offers personalized music lessons tailored to your
            needs. Whether you're just starting out or looking to improve your
            skills, Gui will guide you through:
          </p>
          <ul className="classes__list">
            <li className="classes__item">
              🎹 <strong>Piano Lessons</strong> – Master technique, chords, and
              expressive playing.
            </li>
            <li className="classes__item">
              🎸 <strong>Guitar Lessons</strong> – Learn acoustic or electric
              guitar, from basic chords to advanced solos.
            </li>
            <li className="classes__item">
              🎤 <strong>Singing Lessons</strong> – Find your voice with vocal
              exercises, breathing techniques, and confidence-building.
            </li>
            <li className="classes__item">
              🎼 <strong>Music Theory</strong> – Understand harmony, rhythm,
              composition, and improvisation.
            </li>
          </ul>
          <p className="classes__cta-text">
            Ready to start your musical journey? Book a class now and let Gui
            help you achieve your goals!
          </p>
          <Link to="/bookings" className="classes__btn">
            Book a Class
          </Link>
        </div>
      </section>
      <Hero
        title="Learn Music with Gui Tavares"
        subtitle="Unlock your musical talent with the best music teacher in London."
      />
    </>
  );
}
