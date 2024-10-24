import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./Login.css"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userData = JSON.parse(sessionStorage.getItem("userData"));

    if (userData) {
      if (userData.email === email && userData.password === password) {
        navigate("/");
        sessionStorage.setItem("Login", true);
      } else {
        setMessage(
          <div className="alert alert-warning" role="alert">
            Invalid email or password
          </div>
        );
      }
    } else {
      setMessage(
        <div className="alert alert-danger" role="alert">
          No user founded please Signup first
        </div>
      );
    }
  };

  return (
    <div className="signup-background">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="wrapper p-4 border rounded shadow w-50">
          {message && <p>{message}</p>}
          <h1 className="text-center">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                value={email}
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                value={password}
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Login
            </button>
            <div className="text-center mt-3">
              <p>
                Create account <NavLink to="/Signup">Signup</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
