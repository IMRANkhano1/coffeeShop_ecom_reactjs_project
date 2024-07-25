import React, { useState } from "react";
import Header from "./Components/Front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import Rout from "./Components/Front/Route/Route";
import data from "./Components/Back/data/Data";
function App() {
  const { productItems } = data;
  const [cartProducts, setCartProducts] = useState([]);
  const handelAddProduct = (product) => {
    const ProductExist = cartProducts.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      console.log("new");
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    }
  };
  const handelRemoveProduct = (product) => {
    const ProductExist = cartProducts.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartProducts(cartProducts.filter((item) => item.id !== product.id));
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClear = () => {
    setCartProducts([]);
  };
  return (
    <Router>
      <Header cartProducts={cartProducts} />
      <Rout
        products={productItems}
        addToCart={handelAddProduct}
        cartProducts={cartProducts}
        handleCartClear={handleCartClear}
        handelRemoveProduct={handelRemoveProduct}
      />
    </Router>
  );
}

export default App;
