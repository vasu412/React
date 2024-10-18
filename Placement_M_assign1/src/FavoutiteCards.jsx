import React, { useState } from "react";
import RecipeDetail from "./RecipeDetail";

const FavoutiteCards = ({ card, setIsRemove }) => {
  const [details, setDetails] = useState(false);
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <img
        src={card?.strMealThumb}
        alt="Recipe"
        className="rounded-t-lg w-full"
      />
      <h3 className="text-xl font-semibold mt-2">{card?.strMeal}</h3>
      <p className="text-gray-600 mt-1 overflow-hidden ">
        {card?.strInstructions.slice(0, 105) + "...."}
      </p>
      <div className="flex justify-between">
        <button
          className="mt-3 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={() => setDetails(true)}>
          View Details
        </button>
        <button
          className="mt-3 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          onClick={() => {
            const data = JSON.parse(localStorage.getItem("recipes"));
            const filteredData = data.filter((x) => x.idMeal !== card.idMeal);
            localStorage.setItem("recipes", JSON.stringify(filteredData));
            setIsRemove((prev) => !prev);
          }}>
          Remove favourite
        </button>
      </div>

      {details && (
        <RecipeDetail setDetails={setDetails} card={card} favourite={true} />
      )}
    </div>
  );
};

export default FavoutiteCards;
