import React, { useState } from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

function Nav({ hide }) {
  const [count, setcount] = useState(0);

  const check = () => {
    return sessionStorage.getItem("Login") === "true" ? "d-none" : "d-flex";
  };
  const check2 = () => {
    return sessionStorage.getItem("Login") === "true" ? "d-flex" : "d-none";
  };
  

  const inc = () => setcount(count + 1);
  return (
    <>
      <nav className="navbar bg-body-tertiary sticky-top">
        <div className="container-fluid">
          <span class="navbar-text">
            <h1 class="navbar-title">
              <span class="rotate">M</span>arke<span class="highlight">To</span>
            </h1>
          </span>
          <div className="d-flex ">
            <NavLink to="/Login" className={check()}>
              <button className="btn btn-primary me-2">Login</button>
            </NavLink>
            <button
              onClick={inc}
              type="button"
              class="btn btn-warning position-relative me-3"
            >
              <span className="material-symbols-outlined">shopping_cart</span>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {count}
                <span className="visually-hidden"></span>
              </span>
            </button>
            <NavLink to="/Login" className={check2()} >
              <button className="btn btn-primary me-2">
                <i class="fa-solid fa-right-from-bracket"></i>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="parent d-none d-sm-flex d-flex justify-content-evenly gap-3">
          <div className="nav link-group">
            <NavLink to="/" className="nav-link custom-link">
              <i className="bi bi-house"></i> Home
            </NavLink>
            <NavLink to="/clothes" className="nav-link custom-link">
              <i className="bi bi-tshirt"></i> Clothes
            </NavLink>
            <NavLink to="/electronics" className="nav-link custom-link">
              <i className="bi bi-laptop"></i> Electronics
            </NavLink>
            <NavLink to="/jewelery" className="nav-link custom-link">
              <i className="bi bi-gem"></i> Jewelry
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
