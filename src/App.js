import React from "react";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import {Home} from "./components/Home"
import {Product} from "./components/product"
import {ProductDetails} from "./components/productDetails"


export default function App() {
  return (
    <Routes>
      <Route path="home" element={<Home/>} ></Route>
      <Route path="product" element={<Product/>} >
      <Route path=":id" element={<ProductDetails/>} />

      </Route>

    </Routes>
  );
}

