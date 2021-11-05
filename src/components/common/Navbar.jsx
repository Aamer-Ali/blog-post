import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/cartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faShoppingCart} />;

function Navbar(props) {
  const [cartItem, setCartItem] = useContext(CartContext);

  const handleClickEvent = () => {
    console.log(cartItem.length);
  };

  return (
    <nav className="navbar navbar-expand-lg  navbar-light bg-light justify-content-between">
      <Link className="navbar-brand ms-4" to="/posts">
        Blog Posts
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/posts">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/creat-edit-post">
              Create Posts
            </Link>
          </li>
          <li className="nav-item nav-bar-right">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item nav-bar-right">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <Link to="/cartPage">
          <span className="navbar-text">{element}</span>
          <span className="cartBadge"> {cartItem.length} </span>
        </Link>
      </div> */}
    </nav>
  );
}

export default Navbar;
