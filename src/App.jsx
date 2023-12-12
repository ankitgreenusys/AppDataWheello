import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Dashboard from "./Components/Dashboard";

function App() {
  const [user, setuser] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      setuser(true);
    }
  }, []);

  return (
    <>
      <Header user={user} setuser={setuser} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login setuser={setuser} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
