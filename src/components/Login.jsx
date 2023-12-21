import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [creds, setCreds] = useState({ username: "", password: "" });

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: creds.username, password: creds.password }),
    });
    const json = await response.json();

    console.log(json);
    if (json.success) {
      // save the auth token and redirect to home page
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      // props.showAlert("Invalid credentials", "danger");
      window.alert("Invalid Creds !")
    }
  };

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <section id="services">
        <div className="inner-width">
          <div className="services">
            <div className="service service1">
              <div className="logo1">
                <img src="imgs/logo.png" alt="logo" />
                {/* <img src="/imgs/logo_new.png" alt="logo" /> */}
              </div>
              <h1>AIKC College of Education</h1>
              <h4 className="my-2">
                Education for Excellence and Empowerment.
              </h4>
              <p className="mb-4">
                173-175, Khilafat House, Motishah Lane, Byculla(east) Mumbai,
                Maharashtra 400027 , India
              </p>

              <Link to="/insert" id="form_btn">
                Student Form
              </Link>
            </div>

            <div className="service login-container">
              <h2>Login</h2>
              <form onSubmit={handleSubmit} className="login-form">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={onChange}
                  value={creds.username}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={onChange}
                  value={creds.password}
                  required
                />
                <button className="login-button" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
