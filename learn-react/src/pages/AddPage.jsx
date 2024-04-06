import React from "react";
import ContactInput from "../components/ContactInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/api";

function AddPage() {
  const navigate = useNavigate();

  function onAddContactHandler(contact) {
    addNote(contact);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah kontak</h2>
      <ContactInput onAddContact={onAddContactHandler} />
    </section>
  );
}

export default AddPage;
