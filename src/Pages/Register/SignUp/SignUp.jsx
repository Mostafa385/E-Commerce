import React, { useState } from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSend = {
      name: {
        firstname: formData.firstName,
        lastname: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
      city: formData.city,
      phone: formData.phone,
    };

    sessionStorage.setItem("userData", JSON.stringify(dataToSend));
  };

  return (
    <div className="signup-background">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="wrapper p-4 border rounded shadow w-50">
          <h1 className="text-center">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name:</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name:</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">City:</label>
              <input
                type="text"
                name="city"
                className="form-control"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label ">Phone:</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
           
            <div className="text-center mt-3">
              <p>
                Already have an account? <NavLink to="/Login">Login</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
