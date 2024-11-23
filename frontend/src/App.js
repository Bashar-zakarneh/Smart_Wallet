import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import HomePage from "./components/HomePage";
import SummaryPage from "./components/SummaryPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
