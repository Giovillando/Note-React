import React from "react";
import PropTypes from "prop-types";

function ContactItemBody({ title, body, createdAt }) {
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{title}</h3>
      <p className="contact-item__username">{body}</p>
      <p className="contact-item__date">{createdAt}</p>
    </div>
  );
}

ContactItemBody.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default ContactItemBody;
