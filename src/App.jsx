import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
