import React, { useEffect, useState } from "react";
import recipeData from "./data";
import RecipeCards from "./RecipeCards";
import { Link } from "react-router-dom";

function RecipeFinder() {
  const [cards, setCards] = useState(null);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const recipes = async () => {
      if (inputVal.trim().length > 1) {
        const data = await recipeData(inputVal);
        setCards(data);
      } else {
        setCards(null);
      }
    };
    recipes();
  }, [inputVal]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">Recipe Finder</h1>
        <p className="mt-2">Find the best recipes for your ingredients</p>
      </header>

      {/* Search Bar */}
      <div className="mt-6 mx-auto w-full px-4 flex justify-between">
        <input
          type="text"
          placeholder="Search for recipes..."
          className="w-[500px] p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          onKeyUp={(e) => setInputVal(e.target.value)}
        />
        <Link to={"/favourite"}>
          <button className=" bg-blue-500 text-white p-2 rounded">
            Favorite Recipes
          </button>
        </Link>
      </div>

      {/* Recipe List */}
      <section className="mt-10 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recipes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {!cards ? (
            <h1 className="text-[30px]">SEARCH FOR NEW RECIPES...</h1>
          ) : cards && (!cards.meals || cards.meals.length === 0) ? (
            // If search is made but no recipes are found
            <h1 className="text-[30px]">NO RECIPES FOUND...</h1>
          ) : (
            cards.meals.map((card) => (
              <RecipeCards card={card} key={card.idMeal} />
            ))
          )}
        </div>
      </section>
    </div>
  );
}

export default RecipeFinder;
