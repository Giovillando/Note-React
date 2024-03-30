import React, { useState, useEffect } from "react";
import ContactItem from "../components/ContactItem";
import { getArchivedNotes } from "../utils/data";

function ArchivePage() {
  const [archivedContacts, setArchivedContacts] = useState([]);

  useEffect(() => {
    const archivedNotes = getArchivedNotes();
    setArchivedContacts(archivedNotes);
  }, []);

  return (
    <div>
      <h2>Archived Note</h2>
      {archivedContacts.length === 0 ? (
        <p>No archived contacts found.</p>
      ) : (
        <div>
          {archivedContacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ArchivePage;
