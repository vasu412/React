import "./index.css";

const Item = ({
  company,
  img,
  info,
  discount,
  price,
  prevPrice,
  bold,
  id,
  buttonClicked,
  checkClick,
}) => {
  return (
    <div className="item">
      <div className="img">
        <img src={img} />
      </div>
      <p>
        <b>{company}</b> {info}
      </p>
      <b style={{ fontSize: "14.5px", marginTop: "5px" }}>{bold}</b>
      <div style={{ display: "inline", alignItems: "center" }} className="div">
        <span style={{ fontWeight: "300", color: "#cc1c39" }}>
          -{discount}%
        </span>
        <span>
          <sup>&#8377;</sup>
          {price}
          <sup>00</sup>
        </span>
        <span style={{ fontSize: "14px", color: "rgb(90, 88, 88)" }}>
          <del>&#8377;{prevPrice}</del>
        </span>
      </div>
      <p style={{ fontSize: "13px", fontWeight: "400", marginTop: "5px" }}>
        FREE Delivery over &#8377;499
      </p>
      <button
        value="0"
        onClick={(e) => {
          buttonClicked(img, price, id);
          // if (checkClick[price] === "Add To Cart") {
          //   e.target.style.backgroundColor = "transparent";
          // }
        }}
        className="btn">
        {checkClick[price]}
      </button>
    </div>
  );
};

export default Item;
