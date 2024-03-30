import React from "react";
import PropTypes from "prop-types";
import { FiArchive } from "react-icons/fi";

function ArchiveButton({ onClick }) {
  return (
    <button className="contact-item__archive" onClick={onClick}>
      <FiArchive />
    </button>
  );
}

ArchiveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ArchiveButton;
