// FavoriteRecipes.js
import React, { useEffect, useState } from "react";
import RecipeCards from "./RecipeCards";
import FavoutiteCards from "./FavoutiteCards";

const FavoriteRecipes = () => {
  const [favorites, setFavorites] = useState([]);
  const [isRemove, setIsRemove] = useState(true);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recipes"));
    data ? setFavorites(data) : setFavorites([]);
  }, [isRemove]);
  return (
    <div className="bg-gray-100 min-h-[100vh]">
      <header className="bg-green-500 p-6 text-white text-center">
        <h1 className="text-3xl font-bold">Recipe Finder</h1>
        <p className="mt-2">Find the best recipes for your ingredients</p>
      </header>
      <section className="mt-10 px-4 ">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Favorite Recipes
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.length === 0 ? (
            <h1 className="text-[30px]">NO FAVORITE RECIPES...</h1>
          ) : (
            favorites.map((card) => (
              <div key={card.idMeal} className="relative">
                <FavoutiteCards card={card} setIsRemove={setIsRemove} />
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoriteRecipes;
