import { useState } from "react";
const CartItems = ({ x, val, setVal }) => {
  const [quantity, setQuantity] = useState(1);
  const [showItem, setShowItem] = useState(true);

  {
    if (showItem)
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "205px",
            width: "130px",
          }}
          className="main">
          <img src={x.img} style={{ height: "120px", width: "100px" }} />
          <span>
            <b style={{ fontFamily: "Ubuntu, sans-serif" }}>₹{x.price}</b>
          </span>
          <span>Quantity:{quantity}</span>
          <div className="btns">
            <button
              onClick={() => {
                setQuantity((prevQt) => prevQt + 1);
                setVal((prevVal) => parseFloat(prevVal) + parseFloat(x.price));
              }}>
              +
            </button>
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((prevQt) => prevQt - 1);
                }
                if (x.price < val) {
                  setVal(
                    (prevVal) => parseFloat(prevVal) - parseFloat(x.price)
                  );
                }
              }}>
              -
            </button>
            <button
              onClick={() => {
                setVal((prevVal) => {
                  let q = quantity;
                  return parseFloat(prevVal) - parseFloat(x.price) * q;
                });
                setShowItem(false);
              }}>
              <i className="material-icons" style={{ fontSize: "14px" }}>
                delete
              </i>
            </button>
          </div>
        </div>
      );
  }
};

export default CartItems;
