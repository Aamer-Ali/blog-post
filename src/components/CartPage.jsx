import React, { useState, useEffect, useContext } from "react";
import CartContext from "../context/cartContext";

function CartPage(props) {
  const [cartItems, setCartItem] = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState();
  const [discount, setDiscount] = useState();

  useEffect(() => {
    function calculateData() {
      const result = cartItems.reduce(
        (total, currentValue) => (total = total + currentValue.price),
        0
      );
      setTotalAmount(result);
      if (result > 100 && result <= 500) {
        const dis = (10 / result) * 100;
        setDiscount(dis);
      } else if (result > 500) {
        const dis = (20 / result) * 100;
        setDiscount(dis);
      }
    }
    calculateData();
  }, [cartItems, discount]);

  return (
    <div>
      <div>
        {cartItems
          ? cartItems.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-header text-start d-flex justify-content-between">
                  <div>{item.item_name}</div>
                </div>
                <div className="card-body">
                  <p className="card-text text-start">
                    Price for One Item :: {item.price}
                  </p>
                  <p className="card-text text-start">
                    Total Item :: {item.numberOfItems}
                  </p>
                  <p className="card-text text-start">
                    Total Price ::
                    {item.numberOfItems * item.price}
                  </p>
                </div>
              </div>
            ))
          : null}
      </div>
      <div> Complete price == {totalAmount}</div>
      <div>Discout == {discount}</div>
      <br />
      <br />
    </div>
  );
}

export default CartPage;

// if total <= 100 ===0;
// 101 == 5== ===10%
// 500 ===20
