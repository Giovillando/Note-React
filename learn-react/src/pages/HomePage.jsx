import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactList from "../components/ContactList";
import { getAllNotes, deleteNote } from "../utils/data";

function HomePage() {
  const [notes, setNotes] = useState(getAllNotes());

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getAllNotes());
  };

  return (
    <div>
      <h2>Contact List</h2>
      <ContactList
        contacts={notes}
        onDelete={handleDelete}
        onArchive={() => {}}
      />
    </div>
  );
}

export default HomePage;
