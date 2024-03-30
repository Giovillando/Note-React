import React from "react";
import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

function ContactList({ contacts, onDelete }) {
  return (
    <div>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <ContactItem contact={contact} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
