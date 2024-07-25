import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../About/About";
import Product from "../Product/Product";
import Contact from "../Contact/Contact";
import Join from "../Join/Join";
import AddToCart from "../CartProduct/CartProducts";
import CartProduct from "../CartProduct/CartProducts";
function Rout(props) {
  const {
    products,
    addToCart,
    cartProducts,
    handleCartClear,
    handelRemoveProduct,
  } = props;
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route
        path="/products"
        element={<Product products={products} addToCart={addToCart} />}
      />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Join />} />
      <Route
        path="/cart"
        element={
          <CartProduct
            handelAddProduct={addToCart}
            cartProducts={cartProducts}
            handleCartClear={handleCartClear}
            handelRemoveProduct={handelRemoveProduct}
          />
        }
      />
    </Routes>
  );
}

export default Rout;
