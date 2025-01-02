import "./Comments.scss";
import React, { useState, useEffect } from "react";
import Avatar from "../../assets/Images/avatar.png";
import Rating from "react-rating-stars-component";

export default function Comments() {
  const [rating, setRating] = useState(5);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("commentsList");
    if (savedComments) {
      setCommentsList(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("commentsList", JSON.stringify(commentsList));
  }, [commentsList]);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !comment.trim()) {
      alert("Please enter both name and comment!");
      return;
    }

    const newComment = {
      id: Date.now(),
      name,
      comment,
      rating,
    };

    setCommentsList((prev) => [...prev, newComment]);

    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <section className="comments">
      <h2 className="comments__title">Join the Conversation!</h2>

      <form className="comments__form" onSubmit={handleSubmit}>
        <img src={Avatar} alt="Artist Avatar" className="comments__img" />

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label className="comments__label" htmlFor="comment">
            COMMENT
          </label>
          <textarea
            className="comments__input comments__input--text"
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>

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
      <div className="comments__list">
        {commentsList.length > 0 ? (
          commentsList.map((comment) => (
            <div key={comment.id} className="comments__item">
              <div className="comments__item-wrap">
                <div className="comments__item-header">
                  <p className="comments__item-name">
                    <strong>{comment.name}</strong>
                  </p>
                </div>
                <div className="comments__item-rating">
                  {Array.from({ length: comment.rating }, (_, index) => (
                    <span key={index}>⭐</span>
                  ))}
                </div>
              </div>
              <p className="comments__item-text">{comment.comment}</p>
            </div>
          ))
        ) : (
          <p className="comments__no-comments">
            No comments yet. Be the first!
          </p>
        )}
      </div>
    </section>
  );
}
