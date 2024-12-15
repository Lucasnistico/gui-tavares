import "./PhotoPage.scss";

import Comments from "../../components/Comments/Comments.jsx";

export default function PhotoPage() {
  return (
    <>
      <section className="photo-page">
        <div className="photo-page__content">
          <h1 className="photo-page__title">Gui Tavares</h1>
          <p className="photo-page__subtitle">The best music in London</p>
          <button className="photo-page__btn">Listen Now</button>
        </div>
      </section>
      <Comments />
    </>
  );
}
