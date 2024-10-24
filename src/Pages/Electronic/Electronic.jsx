import React, { useEffect, useState } from "react";
import test from "../../Api";
import Proudct from "../../Component/proudct/Proudct";
import Nav from "../../Component/Nav/Nav";
import Search from "../../Component/Search/Search";

function Electronic() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  async function Fetch() {
    const response = await test();
    setProducts(response);
  }

  useEffect(() => {
    try {
      Fetch();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div class="spinner-border text-info" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div class="alert alert-danger" role="alert">
        Error while Fetch data please try again
      </div>
    );
  }

  const filteredProducts = products.filter(
    (item) => item.category === "electronics"
  );

  return (
    <>
      <Nav hide={true} />
      <Search />
      <Proudct item={filteredProducts} />
    </>
  );
}

export default Electronic;
