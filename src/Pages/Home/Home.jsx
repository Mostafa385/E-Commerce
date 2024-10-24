import React, { useEffect, useState } from "react";
import Nav from "../../Component/Nav/Nav";
import "./Home.css";
import Proudct from "../../Component/proudct/Proudct";
import Carousel from "../../Component/Carousel/Carousel";
import Card from "../../Component/HomeCard/Card";
import Categoriy from "../../Component/Categories Card/Categoriy";
import test from "../../Api";
import Search from "../../Component/Search/Search";

function Home() {
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await test();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  return (
    <>
      <Nav hide={false} />
      <Search />
      <Carousel item={products} />
      <h1 className="text-center">Categories for you!</h1>
      <Categoriy />
    </>
  );
}

export default Home;
