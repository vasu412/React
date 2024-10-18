const recipeData = async (val) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe data:", error);
  }
};

export default recipeData;
