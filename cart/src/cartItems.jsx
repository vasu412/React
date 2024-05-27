const CartItems = ({
  id,
  x,
  val,
  setVal,
  setList,
  setCheckClick,
  itemQuantity,
  setItemQuantity,
}) => {
  const handleIncrement = () => {
    setItemQuantity((prev) => {
      const updatedQuantities = prev.map((item, index) =>
        index === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      return updatedQuantities;
    });
    setVal((prevVal) => parseFloat(prevVal) + parseFloat(x.price));
  };

  const handleDecrement = () => {
    if (itemQuantity[id].quantity > 1) {
      setItemQuantity((prev) => {
        const updatedQuantities = prev.map((item, idx) => {
          return idx === id ? { ...item, quantity: item.quantity - 1 } : item;
        });
        return updatedQuantities;
      });
      setVal((prevVal) => parseFloat(prevVal) - parseFloat(x.price));
    }
  };

  const handleDelete = () => {
    const quantityToRemove = itemQuantity[id].quantity;
    setVal(
      (prevVal) => parseFloat(prevVal) - parseFloat(x.price) * quantityToRemove
    );
    setCheckClick((prev) => ({ ...prev, [x.price]: "Add To Cart" }));
    setList((prev) => prev.filter((item) => item.id !== x.id));
    setItemQuantity((prev) => prev.filter((_, index) => index !== id));
  };
  {
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
        <span>Quantity:{itemQuantity[id].quantity}</span>
        <div className="btns">
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleDelete}>
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
