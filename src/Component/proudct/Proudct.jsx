import React from "react";
import "./Proudct.css";
import { NavLink, useParams } from "react-router-dom";
import SearchById from "../../../getById";
import mapCategoryToClothes from "../mapCategoryToClothes";

function Proudct({ item }) {
  
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {item.map((item) => (
          <div className="col-md-4 mb-4 " key={item.id}>
            <div className="card custom-card bg-body-tertiary border-0">
              <img src={item.image} className="card-img-top" alt={item.title} />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title text-truncate">{item.title}</h4>
                <div className="d-flex justify-content-between">
                  <h5>{item.category}</h5>
                  <h6 className="price fw-bolder text-bg-warning p-1 rounded">${item.price}</h6>
                </div>
                  <NavLink to={`/${mapCategoryToClothes(item.category)}/${item.id}`} className="btn btn-info mt-2">
                  <button className="bg-transparent">
                    Go details
                </button>
                  </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Proudct;
