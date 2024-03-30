import React from "react";
import { useNavigate } from "react-router-dom";
import ContactInput from "../components/ContactInput";
import { addContact } from "../utils/data";

function AddPage() {
  const navigate = useNavigate();

  const handleAddContact = (newContact) => {
    addContact(newContact);
    navigate("/");
  };

  return (
    <div>
      <h2>Add New Contact</h2>
      <ContactInput onAddContact={handleAddContact} />
    </div>
  );
}

export default AddPage;
