import React from "react";
import { Link, Outlet } from "react-router-dom";

function Service() {
  return (
    <div>
      <h1>Service</h1>
      <li>
        <Link to="featureList">FeatureList</Link>
      </li>
      <li>
        <Link to="productList">ProductList</Link>
      </li>
      <Outlet />
    </div>
  );
}

export default Service;
