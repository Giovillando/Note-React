import React, { useState } from "react";
import PropTypes from "prop-types";

function ContactInput({ onAddContact }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContact({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

ContactInput.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactInput;
