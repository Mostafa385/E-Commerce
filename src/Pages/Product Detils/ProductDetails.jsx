import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchById from "../../../getById";
import Nav from "../../Component/Nav/Nav";
import Counter from "../../Component/Counter/Counter";
import CheckLogin from "../../Component/CheckLogin";

function ProductDetails() {
  const [count, setcount] = useState(1);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await SearchById(productId); 
        setProduct(data); 
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <>
      <Nav hide={true} />
      <div className="product-details container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h4>Price: ${product.price}</h4>
            <h5> <i class="fa-solid fa-star" style={{color: "#FFD43B"}}></i> {product.rating.rate}</h5>
            <Counter count={count} setcount={setcount} price={product.price} />
            <CheckLogin id={productId} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
