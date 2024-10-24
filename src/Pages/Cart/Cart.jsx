import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchById from "../../../getById";
import Nav from "../../Component/Nav/Nav";

function Cart() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await SearchById(id);
        setProduct(data);
        console.log("Fetech success");
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [id]);

  return (
    <>
        <Nav />
     {product ? (
        <div className="card mb-3 mt-3 d-flex justify-content-align-c" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={product.image} className="img-fluid rounded-start" alt={product.title} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Product not found.</div>
      )}
    </>
  );
}

export default Cart;
