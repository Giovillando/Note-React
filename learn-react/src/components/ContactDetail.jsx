import React from "react";
import PropTypes from "prop-types";

function ContactDetail({ contact }) {
  const { title, body, createdAt } = contact;

  return (
    <div>
      <h2>{title}</h2>
      <p>Creation date: {createdAt}</p>
      <p>{body}</p>
    </div>
  );
}

ContactDetail.propTypes = {
  contact: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactDetail;
