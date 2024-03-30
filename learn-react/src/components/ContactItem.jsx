import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ContactItem({ contact }) {
  return (
    <div className="note">
      <h3>
        <Link to={`/contacts/${contact.id}`}>{contact.title}</Link>
      </h3>
      <p>Creation date: {contact.createdAt}</p>
      <p>{contact.body}</p>
    </div>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired, // Tambahkan properti createdAt
  }).isRequired,
};

export default ContactItem;
