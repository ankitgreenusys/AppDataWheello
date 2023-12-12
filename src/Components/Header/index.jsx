import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Index = (props) => {
  const navigate = useNavigate();
  const Logout = () => {
    props.setuser(false);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar bg-dark border-bottom border-body mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/images/wheeloo logo.svg"
            alt="Logo"
            className="d-inline-block align-text-top"
          />
        </a>
        {props.user ? (
          <div>
            <button className="btn btn-primary" onClick={Logout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Index;
