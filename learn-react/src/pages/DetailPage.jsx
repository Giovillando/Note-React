import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ContactDetail from "../components/ContactDetail";
import DeleteButton from "../components/DeleteButton";
import { getNote, deleteNote } from "../utils/api";

function DetailPage() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchContact() {
      const fetchedContact = await getNote(id);
      setContact(fetchedContact);
    }
    fetchContact();
  }, [id]);

  const handleDelete = async () => {
    await deleteNote(id);
    navigate("/");
  };

  if (!contact) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Contact Detail</h2>
      <ContactDetail contact={contact} />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DetailPage;
