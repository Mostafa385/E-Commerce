import React from "react";
import Comp from "../../assets/computer-114.svg";
import Clothes from "../../assets/clothes.svg";
import jel from "../../assets/jewelry-1.svg";
import "./Category.css";
import { Link } from "react-router-dom";

function Categoriy() {
  return (
    <>
      <div className="d-flex justify-content-evenly mt-5 mb-5">
        <button className="Card bg-primary-subtle rounded shadow  p-2 btn-w hover-primary">
          <Link to="/electronics" className="text-decoration-none d-flex align-items-center justify-content-around">
            <h4 className="text-primary fw-bolder">Clothes</h4>
            <img src={Clothes} alt="Clothes" style={{ width: "60px" }} />
          </Link>
        </button>
        <button className="Card bg-warning-subtle rounded shadow p-2 btn-w hover-warning">
          <Link
            to="/jewelery"
            className="text-decoration-none d-flex align-items-center justify-content-around"
          >
            <h4 className="text-warning fw-bolder">Jewelry</h4>
            <img src={jel} alt="Jewelry" style={{ width: "50px" }} />
          </Link>
        </button>
        <button className="Card bg-success-subtle rounded shadow  p-2 btn-w hover-success">
          <Link
            to="/clothes"
            className="text-decoration-none d-flex align-items-center justify-content-around"
          >
            <h4 className="text-success fw-bolder ">Computer</h4>
            <img src={Comp} alt="Computer" style={{ width: "60px" }} />
          </Link>
        </button>
      </div>
    </>
  );
}

export default Categoriy;
