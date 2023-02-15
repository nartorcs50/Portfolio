import React from "react";
import Email from "./ui/Email";

function Contact() {
  return (
    <section id="contact">
      <div className="contact__content">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__para">
          I'm currently open for work and will be delighted to take on
          opportunities presented to me, I'm progressively working on my career.
          Your welcome to say hello or want to learn more about me.
        </p>
        <button className="contact__btn">Say Hello!</button>
      </div>
      <Email />
    </section>
  );
}

export default Contact;
