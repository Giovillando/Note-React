import React, { useState, useEffect } from "react";
import ContactItem from "../components/ContactItem";
import { getAllNotes } from "../utils/data";

function HomePage() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const allNotes = getAllNotes();
    setContacts(allNotes);
  }, []);

  // Filter out archived contacts
  const nonArchivedContacts = contacts.filter((contact) => !contact.archived);

  return (
    <div>
      <h2>Home</h2>
      {nonArchivedContacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div>
          {nonArchivedContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;
