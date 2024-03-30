// ContactApp.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";
import NotFoundPage from "../components/NotFoundPage";

function ContactApp() {
  return (
    <Router>
      <div className="contact-app">
        <header className="contact-app__header">
          <h1>Aplikasi Catatan</h1>
          <h3 className="archive">
            <Link to="/archive">Go to Archive</Link>
          </h3>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/contacts/:id" element={<DetailPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default ContactApp;
