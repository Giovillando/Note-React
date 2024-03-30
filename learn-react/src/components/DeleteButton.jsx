import React from "react";
import PropTypes from "prop-types";
import { FiDelete } from "react-icons/fi";

function DeleteButton({ onDelete }) {
  return (
    <button className="contact-item__delete" onClick={onDelete}>
      <FiDelete />
    </button>
  );
}

DeleteButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
