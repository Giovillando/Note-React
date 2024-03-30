import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactDetail from "../components/ContactDetail";
import DeleteButton from "../components/DeleteButton";
import ArchiveButton from "../components/ArchiveButton";
import { getNote, deleteNote, archiveNote } from "../utils/data";

function DetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedContact = getNote(id);
    setContact(fetchedContact);
  }, [id]);

  const handleDelete = () => {
    deleteNote(id);
    navigate("/");
  };

  const handleArchive = () => {
    archiveNote(id);
    navigate("/archive");
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Detail</h2>
      <ContactDetail contact={contact} />
      <ArchiveButton onClick={handleArchive} />
      <DeleteButton id={id} onDelete={handleDelete} />
    </div>
  );
}

export default DetailPage;
