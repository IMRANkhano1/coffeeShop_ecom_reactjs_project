import React from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.css";
function Header({ cartProducts }) {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h1>
          <span>
            <ion-icon name="cafe"></ion-icon>
          </span>
          Coffee Shop
        </h1>
      </div>
      <div className={style.navs}>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart" className={style.cart}>
                <ion-icon name="cart"></ion-icon>
                <span className="cart-length">
                  {cartProducts.length === 0 ? 0 : cartProducts.length}{" "}
                </span>
              </Link>
            </li>
            <li>
              <Link to="/login" className={style.join}>
                Join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
