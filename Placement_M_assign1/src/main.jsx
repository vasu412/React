import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecipeFinder from "./RecipeFinder.jsx";
import FavoriteRecipes from "./FavouriteRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecipeFinder />,
  },
  {
    path: "/favourite",
    element: <FavoriteRecipes />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
