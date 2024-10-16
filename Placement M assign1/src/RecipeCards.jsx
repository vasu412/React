import React, { useState } from "react";
import RecipeDetail from "./RecipeDetail";

const RecipeCards = ({ card }) => {
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
            data
              ? localStorage.setItem("recipes", JSON.stringify([...data, card]))
              : localStorage.setItem("recipes", JSON.stringify([card]));
          }}>
          Add to favourites
        </button>
      </div>

      {details && <RecipeDetail setDetails={setDetails} card={card} />}
    </div>
  );
};

export default RecipeCards;
