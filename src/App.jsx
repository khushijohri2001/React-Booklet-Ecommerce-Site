import "./styles.css";
import "./css/ProductsListing.css";
import React, { useState } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";

export default function App(props) {
  const [showNav, setShowNav] = useState(true);

  return (
    <>
      {showNav && <Header />}

      <Routes>
        <Route path="/" element={<Home funcNav={setShowNav} />} />
        <Route
          path="/all-products"
          element={<AllProducts funcNav={setShowNav} />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/wishlist" element={<Wishlist funcNav={setShowNav} />} />
        <Route path="/cart" element={<Cart funcNav={setShowNav} />} />
      </Routes>

      {showNav && <Footer />}
    </>
  );
}
