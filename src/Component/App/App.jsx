import { useState } from "react";
import "./App.css";
import Home from "../../Pages/Home/Home";
import SignUp from "../../Pages/Register/SignUp/SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clothes from "../../Pages/Clothes/Clothes";
import Electronic from "../../Pages/Electronic/Electronic";
import Jewelery from "../../Pages/Jeweley/Jewelery";
import ProductDetails from "../../Pages/Product Detils/ProductDetails";
import Login from "../../Pages/Login/Login";
import Filtered from "../../Pages/Filtered";
import Search from "../Search/Search";
import Cart from "../../Pages/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/clothes",
    element: <Clothes />,
  },
  {
    path: "/electronics",
    element: <Electronic />,
  },
  {
    path: "/jewelery",
    element: <Jewelery />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/clothes/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/electronics/:productId",
    element: <ProductDetails />,
  },
  {
    path: "/jewelery/:productId",
    element: <ProductDetails />,
  },{
    path: "/search",
    element: <Search />, 
  },
  {
    path: "/filtered",
    element: <Filtered />, 
  },
  {
    path: "/Cart/:id",
    element: <Cart />, 
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
