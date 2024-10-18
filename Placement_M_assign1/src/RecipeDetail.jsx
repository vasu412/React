import React from "react";

const RecipeDetail = ({ setDetails, card, favourite }) => {
  // Destructure data from the card object
  const { strMeal, strMealThumb, strInstructions, strYoutube } = card;

  // Combine ingredients and measurements into an array
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = card[`strIngredient${i}`];
    const measure = card[`strMeasure${i}`];

    // Only add to the array if the ingredient is not empty
    if (ingredient) {
      ingredients.push({ name: ingredient, amount: measure });
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-5/12 sm:w-3/4 lg:w-1/2 p-6 relative max-h-[90vh] overflow-scroll">
        <button
          className="sticky top-0 left-[100%] text-gray-600 hover:text-gray-800"
          onClick={() => setDetails(false)}>
          ✕
        </button>
        <img
          src={strMealThumb}
          alt={strMeal}
          className="rounded-lg w-full h-[400px] mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold mb-2">{strMeal}</h2>
        <p className="text-gray-700 mb-4">{strInstructions}</p>
        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside text-gray-700">
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient.name}: {ingredient.amount}
            </li>
          ))}
        </ul>
        <a href={strYoutube} target="blank">
          <h2 className="text-xl font-semibold my-2 underline">
            Click to watch video
          </h2>
        </a>
        {!favourite && (
          <button
            className="mt-3 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={() => setDetails(true)}>
            Add to favourites
          </button>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
