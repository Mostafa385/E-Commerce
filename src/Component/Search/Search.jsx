import React, { useEffect, useState } from "react";
import "./Search.css";
import fetchProducts from "../../Api";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [showAlert, setShowAlert] = useState(false); // State for alert
  const navigate = useNavigate();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      if (searchValue === "") {
        return
      }
      if (filter.length > 0) {
        navigate("/filtered", { state: { products: filter } });
      } else {
        setShowAlert(true); 
      }
    }
  };

  async function test() {
    try {
      const response = await fetchProducts();
      setData(response);
    } catch (error) {
      console.log("Search" + error);
    }
  }

  useEffect(() => {
    test();
  }, []);

  useEffect(() => {
    check();
  }, [searchValue, data]);

  function check() {
    const filteredProducts = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilter(filteredProducts);
  }

  return (
    <>{showAlert && (
      <div className="alert alert-info" role="alert">
        Oops, there's no product with this name.
      </div>
    )}
    <div className="Search-parent">
      
      <input
        type="text"
        className="form-control search-input w-50"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      
    </div>
    </>
  );
}

export default Search;
