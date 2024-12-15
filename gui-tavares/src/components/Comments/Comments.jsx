import "./Comments.scss";
import React from "react";

export default function Comments() {
  return (
    <section class="comments">
      <h2 class="comments__title">Join the Conversation</h2>
      <form class="comments__form">
        <img
          src="./assets/Images/HeadShot.png"
          alt="Mohan-Murge-headshot"
          class="comments__img"
        />
        <div class="comments__box">
          <label class="comments__name" for="name">
            NAME
          </label>
          <input
            class="comments__input"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
          <label class="comments__comment-box" for="comment">
            COMMENT
          </label>
          <textarea
            class="comments__input comments__input--text"
            id="comment"
            name="comment"
            placeholder="Add a new comment"
          ></textarea>
          <button type="submit" class="comments__btn">
            COMMENT
          </button>
        </div>
      </form>
      <div class="comments-list" id="comments-list"></div>
    </section>
  );
}
