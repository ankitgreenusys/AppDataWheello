import React from "react";
import "./Styles.css";
import { useNavigate } from "react-router-dom";

import BaseURL from "../../apis/BaseURL";

const Index = (props) => {
  const navigate = useNavigate();
  const [fdata, setFdata] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFdata({ ...fdata, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    // console.log(fdata);
    e.preventDefault();
    fetch(`${BaseURL}admin/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fdata),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
          return;
        }
        localStorage.setItem("token", res.token);
        props.setuser(true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Admin Portal
                </h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                      value={fdata.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                      value={fdata.password}
                      onChange={handleChange}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <div className="d-grid mb-2">
                    <button
                      className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
