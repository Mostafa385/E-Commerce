import React from "react";
import { useLocation } from "react-router-dom";
import Proudct from "../Component/proudct/Proudct";
import Nav from "../Component/Nav/Nav"
import Search from "../Component/Search/Search";

function Filtered() {
  const location = useLocation();
  const { products } = location.state || { products: [] }; 

  return (
    <>
    <Nav hide={true}/>
    <Search />
    <div className="filtered-products ">
      <h1 className="text-center p-4">Result of your search</h1>
      <Proudct item={products}/>
    </div>
    </>
  );
}

export default Filtered;
