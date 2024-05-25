import { useState } from "react";
import Item from "./item";
import React from "react";
import "./index.css";
import CartItems from "./cartItems";

function App() {
  const [val, setVal] = useState(0);
  const [list, setList] = useState([]);
  const [checkClick, setCheckClick] = useState(false);

  function buttonClicked(img, price, id) {
    const obj = {
      img: img,
      price: price,
    };

    setVal((prevVal) => parseFloat(prevVal) + parseFloat(price));

    if (list.length === 0) {
      let rightP = document.querySelector(".rightP");
      rightP.style.display = "none";
    }

    setList((prevList) => {
      return [...prevList, obj];
    });
  }
  return (
    <>
      <div className="left">
        <div
          style={{
            backgroundColor: "#232f3e",
            padding: "20px",
            color: "white",
          }}>
          <h1>PRODUCTS</h1>
        </div>
        <hr style={{ marginBottom: "20px" }} />
        <div className="products">
          <Item
            company={"The Derma Co"}
            img={
              "https://m.media-amazon.com/images/I/41NQN8irrVL._MCnd_AC_.jpg"
            }
            info={
              "1% Hyaluronic Sunscreen Aqua Ultra Light Gel with SPF 50 PA++++ For Broad Spectrum, UV A, UV B & Blue Light Protection - 50g(dermaco)"
            }
            discount={"16"}
            price={"418"}
            prevPrice={"499.00"}
            bold={"Unscented · Wrinkle Treatment,Pore Treatment"}
            key={1}
            id={1}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"Brinton"}
            img={
              "https://m.media-amazon.com/images/I/31SOMn7LufL._MCnd_AC_.jpg"
            }
            info={
              " Healthcare UvDoux Face & Body Sunscreen gel with SPF 50 PA+++ in Matte Finish and Oil Free Formula| Water Resistant Sunscreen| Protection against UVA/UVB Rays (50 GM)"
            }
            discount={"15"}
            price={"630"}
            prevPrice={"745.00"}
            bold={"50 Sun Protection Factor (SPF)"}
            key={2}
            id={2}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"Mamaearth"}
            img={
              "https://m.media-amazon.com/images/I/311UQSlLlDL._MCnd_AC_.jpg"
            }
            info={
              "Vitamin C Daily Glow Sunscreen SPF 50 PA+++ | No White Cast with Vitamin C & Turmeric | Lightweight | Sun Protection & Glow | For Women & Men | All Skin Types | 80gm"
            }
            discount={"20"}
            price={"359"}
            prevPrice={"499.00"}
            bold={"80 Grams · 180 Grams · 1"}
            key={3}
            id={3}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"FIXDERMA"}
            img={
              "https://m.media-amazon.com/images/I/41yZpfqJQAL._MCnd_AC_.jpg"
            }
            info={
              " Shadow Sunscreen Spf 30+ Gel, Broad Spectrum Sunscreen For Oily Skin, Uva & Uvb Protection For Unisex, Body & Face, Non Greasy & Water Resistant, 40g"
            }
            discount={"10"}
            price={"198"}
            prevPrice={"220.00"}
            bold={"SHADOW SPF 30 GEL · Oil ControlSHADOW SPF 30 GEL "}
            key={4}
            id={4}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"Aqualogica"}
            img={
              "https://m.media-amazon.com/images/I/416pDzJljOL._MCnd_AC_.jpg"
            }
            info={
              "Glow+ Dewy Sunscreen SPF 50 PA++++ | UVA/B & Blue Light Protection for Men & Women | Oily, Dry, Sensitive & Combination Skin | Fragrance-Free | 50g"
            }
            discount={"17"}
            price={"372"}
            prevPrice={"499.00"}
            bold={"Papaya · Ultra-Violet Protection"}
            key={5}
            id={5}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"LAKMÉ"}
            img={
              "https://m.media-amazon.com/images/I/31XmKBGN-SL._MCnd_AC_.jpg"
            }
            info={
              "Lakme Sun Expert, SPF 50 PA+++ Tinted Sunscreen, 100g, for Sun Protection with Natural Matte Finish, Dermatologically Tested, For All Skin Types"
            }
            discount={"43"}
            price={"329"}
            prevPrice={"575.00"}
            bold={"Cucumber · Dark Spot Correction"}
            key={6}
            id={5}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"Neutrogena"}
            img={
              "https://m.media-amazon.com/images/I/31wbbfrv5WL._MCnd_AC_.jpg"
            }
            info={
              " Ultra Sheer Sunscreen SPF 50+ | Broad Spectrum UVA/UVB PA++++ | No White Cast | Water resistant, Ultra light & Non sticky | For Oily, Dry & Sensitive Skin "
            }
            discount={"52"}
            price={"300"}
            prevPrice={"625.00"}
            bold={"Non-ComedogenicUnscented"}
            key={7}
            id={7}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
          <Item
            company={"Minimalist"}
            img={
              "https://m.media-amazon.com/images/I/313nf+p926L._MCnd_AC_.jpg"
            }
            info={
              "Sunscreen SPF 50 PA++++ | Clinically Tested in US (In-Vivo) | Lightweight with Multi-Vitamins | No White Cast | Broad Spectrum | For Women & Men | 50g"
            }
            discount={"10"}
            price={"379"}
            prevPrice={"399.00"}
            bold={"Unscented · Hydrating"}
            key={8}
            id={8}
            buttonClicked={buttonClicked}
            checkClick={checkClick}
          />
        </div>
      </div>
      <div className="right">
        <h3 style={{ margin: "10px 0" }} className="rightH">
          CART
        </h3>
        <h4 style={{ margin: "10px 0" }} className="rightH2">
          SubTotal : {val}
        </h4>
        <span
          style={{
            fontWeight: "300",
            color: "#cc1c39",
            margin: "0",
            display: "none",
          }}
          className="span"></span>
        <hr className="span" />
        <p className="rightP">No Product added to the cart</p>
        <div className="cart_data">
          {list.map((x, idx) => {
            return (
              <CartItems
                key={idx}
                x={x}
                val={val}
                setVal={setVal}
                buttonClicked={buttonClicked}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
