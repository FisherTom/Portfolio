import React, { useState } from "react";
import { Link } from "react-router-dom";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/82b64830-c4cc-11ed-aae2-49fd856067b7";
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div>
          <p>Thanks! I'll be in touch soon.</p>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <form
      className="contact-form"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="form-details">
        <input
          className="form-input"
          type="text"
          placeholder="Your name"
          name="name"
          required
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          name="email"
          required
        />

        <textarea
          className="form-input"
          placeholder="Your message"
          name="message"
          required
        />
      </div>

      <div>
        <button className="button" type="submit" style={{ border: 0 }}>
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
