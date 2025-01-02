import React, { useRef, useState } from "react";
import "./ContactMe.scss";
import Avatar from "../../assets/Images/avatar.png";
import Hero from "../../components/Hero/Hero.jsx";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8aq9ixm",
        "template_jwepmgn",
        form.current,
        "8oEES5JMMUIoD_n8j"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true);
          setErrorMessage("");
        },
        (error) => {
          console.log(error.text);
          setMessageSent(false);
          setErrorMessage(
            "Failed to send the message. Please try again later."
          );
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section className="contact">
        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <img src={Avatar} alt="User Avatar" className="contact__img" />
          <div className="contact__box">
            <label className="contact__label" htmlFor="name">
              NAME
            </label>
            <input
              className="contact__input"
              type="text"
              id="name"
              name="user_name"
              placeholder="Enter your name"
              required
            />
            <label className="contact__label" htmlFor="email">
              EMAIL
            </label>
            <input
              className="contact__input"
              type="email"
              id="email"
              name="user_email"
              placeholder="Enter your email"
              required
            />
            <label className="contact__label" htmlFor="comment">
              MESSAGE
            </label>
            <textarea
              className="contact__input contact__input--text"
              id="comment"
              name="message"
              placeholder="Write your message here"
              required
            ></textarea>
            <button type="submit" className="contact__btn">
              Send
            </button>
          </div>
        </form>
        {messageSent && (
          <p className="contact__success">
            🎵 Your message was sent successfully! We'll get back to you
            soon.🎸🎹
          </p>
        )}
        {errorMessage && <p className="contact__error">❌ {errorMessage}</p>}
        <div className="contact__animation">
          <iframe
            src="https://lottie.host/embed/c7e5d275-8762-4793-8bf6-21e717327565/dqZ4wcd2rv.lottie"
            title="Lottie Animation"
            className="contact__iframe"
          ></iframe>
        </div>
      </section>
      <Hero />
    </>
  );
};

export default ContactMe;
