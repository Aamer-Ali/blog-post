import http from "../services/httpServices";
import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/cartContext";


function Task(props) {
  const [product, setProduct] = useState([]);
  //   const [cartItem, setCartItem] = useState([]);
  //   const [cartItem, setCartItem] = useContext(CartContext);
  const [cartItem, setCartItem, update] = useContext(CartContext);

  useEffect(() => {
    async function getData() {
      const { data } = await http.get(
        "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7"
      );
      setProduct(data);
    }
    getData();
  }, []);

  const handleAddToCart = (product) => {
    const data = [...cartItem];
    if (cartItem.length == 0) {
      console.log("Cart was empty just nadded new data");
      data.push({ ...product, numberOfItems: 1 });
      setCartItem(data);
    } else {
      const mdata = cartItem.find((item) => {
        return item.id === product.id;
      });
      if (mdata) {
        mdata.numberOfItems++;
      } else {
        console.log("One New Item Added to cart");
        data.push({ ...product, numberOfItems: 1 });
        setCartItem(data);
      }
    }
    // update();
  };

  const showCartItems = () => {
    // setCartItem([...cartItem, 12]);
    // cartItem.push(12);
    // console.log(cartItem);
    // update(21);
  };

  return (
    <div className="container ">
      <div className="row g-1 justify-content-center ">
        {/* <button className="btn btn-primary ms-5 me-5" onClick={showCartItems}>
          Add to Cart
        </button> */}
        {product.map((p) => (
          <div key={p.id} className="col-sm-6 col-md-6 col-lg-3 col-xl-3">
            <div className="card p-2">
              <div className="titleText">{p.item_name}</div>
              <div>{p.price}</div>
              <button
                className="btn btn-primary ms-5 me-5"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;
