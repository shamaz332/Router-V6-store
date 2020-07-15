import React from "react";
import {Outlet } from "react-router-dom";
export const Product = () => {
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Our Products</h1>

      <Outlet />
    </div>
  );
};