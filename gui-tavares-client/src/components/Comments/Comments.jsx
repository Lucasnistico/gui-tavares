import "./Comments.scss";
import React, { useState } from "react";
import Avatar from "../../assets/Images/avatar.png";
import Rating from "react-rating-stars-component";

export default function Comments() {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <section className="comments">
      <h2 className="comments__title">Join the Conversation</h2>
      <form className="comments__form">
        <img src={Avatar} alt="User Avatar" className="comments__img" />
        <div className="comments__box">
          <label className="comments__label" htmlFor="name">
            NAME
          </label>
          <input
            className="comments__input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />

          <label className="comments__label" htmlFor="comment">
            COMMENT
          </label>
          <textarea
            className="comments__input comments__input--text"
            id="comment"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>

          {/* Rating Section */}
          <div className="comments__rating">
            <label className="comments__label">RATING</label>
            <Rating
              count={5}
              value={rating}
              size={24}
              onChange={handleRating}
              activeColor="#ffd700"
            />
          </div>

          <button type="submit" className="comments__btn">
            COMMENT
          </button>
        </div>
      </form>

      <div className="comments-list" id="comments-list"></div>
    </section>
  );
}
