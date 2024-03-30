import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ContactItem({ contact, onDelete, onArchive }) {
  // Tambahkan onArchive sebagai props

  return (
    <div className="note">
      <h3>
        <Link to={`/contacts/${contact.id}`}>{contact.title}</Link>{" "}
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
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired, // Tambahkan propType untuk onArchive
};

export default ContactItem;
