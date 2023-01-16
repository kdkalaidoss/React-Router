import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import FeatureList from "./components/FeatureList";
import Home from "./components/Home";
// import Load from "./components/Load";
import NoMatch from "./components/NoMatch";
import ProductList from "./components/ProductList";
import Service from "./components/Service";
import User from "./components/User";
import Users from "./components/Users";
const LazyLoad = React.lazy(() => import("./components/Load"));
function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>
        <li>
          <NavLink to="service">Service</NavLink>
        </li>
        <li>
          <NavLink to="nomatch">NoMatch</NavLink>
        </li>
        <li>
          <NavLink to="/user/:id">User</NavLink>
        </li>
        <li>
          <NavLink to="users">Users</NavLink>
        </li>
        <li>
          <NavLink to="load">Load</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />}>
          <Route index element={<FeatureList />} />
          <Route path="featureList" element={<FeatureList />} />
          <Route path="productList" element={<ProductList />} />
        </Route>
        <Route path="user/:id" element={<User />} />
        <Route path="users" element={<Users />} />
        <Route path="*" element={<NoMatch />} />
        <Route
          path="load"
          element={
            <React.Suspense fallback='load....'>
              <LazyLoad />
            </React.Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
