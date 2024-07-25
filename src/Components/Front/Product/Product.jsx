import React from "react";
import "./product.css";
function Product({ products, addToCart }) {
  return (
    <>
      <div className="container">
        {products.map((product) => {
          return (
            <div className="products" key={product.id}>
              <div className="img">
                <img src={product.img} alt=" no img" className="product-img" />
              </div>
              <div>
                <h3 className="product-name">{product.name}</h3>
              </div>
              <div className="product-price">
                <span>Rs.</span>
                {product.price}
              </div>
              <div>
                <button
                  className="product-add"
                  onClick={() => addToCart(product)}
                >
                  Add To cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
