
import React from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const recipes = [
    {
      title: "BIRYANI",
      prepTime: "40 minutes",
      cookTime: "30 minutes",
      serves: "3 people",
      difficulty: "Medium",
      type: "Dinner",
      image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
    },
    {
      title: "chicken curry",
      prepTime: "25 minutes",
      cookTime: "10 minutes",
      serves: "3 people",
      difficulty: "Medium",
      type: "Lunch",
      image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRyPAmzoBHsOPcbWGF1YnQJFRutZnECDu_8u7LGbo_QQVq7Q7IVX9NG9TggsvHoMxCK_vJ4s8t2o5a1otX56yEm_d9_TmadBU-TLsin-dikdg",
    },
    {
      title: "panner butter masala",
      prepTime: "25 minutes",
      cookTime: "15 minutes",
      serves: "3 people",
      difficulty: "Medium",
      type: "Lunch",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/paneer-butter-masala-recipe.jpg",
    },
    {
      title: "mushroom masala",
      prepTime: "25 minutes",
      cookTime: "15 minutes",
      serves: "3 people",
      difficulty: "Medium",
      type: "Lunch",
      image: "https://www.shwetainthekitchen.com/wp-content/uploads/2023/03/mutter-mushroom.jpg",
    },
  ];

  return (
    <div className="app">
      <h1 className="heading">RECIPE MENU CARD</h1>
      <div className="card-container">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default App;
