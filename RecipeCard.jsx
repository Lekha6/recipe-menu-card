
// import React from "react";

// function RecipeCard({ recipe }) {
//   return (
//     <div className="recipe-card">
//       <div className="recipe-header">
//         <h2>{recipe.title}</h2>
//         <p>
//           Prep Time: {recipe.prepTime} | Cook Time: {recipe.cookTime}
//         </p>
//       </div>

//       <div className="recipe-body">
//         <div className="recipe-info">
//           <span>Serves: {recipe.serves}</span>
//           <span>Difficulty: {recipe.difficulty}</span>
//           <span>Type: {recipe.type}</span>
//         </div>
//         <img src={recipe.image} alt={recipe.title} className="recipe-img" />
//       </div>
//     </div>
//   );
// }
// export default RecipeCard;
import React, { useState } from "react";

function RecipeCard({ recipe }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="recipe-card">
      <div className="recipe-inner">
        
        {/* Front side */}
        <div className="recipe-front">
          <div className="front-content">
            
            {/* Left: text */}
            <div className="front-text">
              <h2>{recipe.title}</h2>
              <p>Prep Time: {recipe.prepTime}</p>
              <p>Cook Time: {recipe.cookTime}</p>
              <p>Serves: {recipe.serves}</p>
              <p>Difficulty: {recipe.difficulty}</p>
              <p>Type: {recipe.type}</p>
            </div>

            {/* Right: like + image side by side */}
            <div className="front-image">
              <div className="like-btn" onClick={() => setLiked(!liked)}>
                {liked ? "❤️" : "🤍"}
              </div>
              <img src={recipe.image} alt={recipe.title} className="recipe-img" />
            </div>
          </div>
        </div>

        {/* Back side */}
        {/* <div className="recipe-back">
          <span>Prep Time: {recipe.prepTime}</span>
          <span>Cook Time: {recipe.cookTime}</span>
          <span>Serves: {recipe.serves}</span>
          <span>Difficulty: {recipe.difficulty}</span>
          <span>Type: {recipe.type}</span>
        </div> */}

      </div>
    </div>
  );
}

export default RecipeCard;



// import React, { useState } from "react";

// function RecipeCard({ recipe }) {
//   const [liked, setLiked] = useState(false);

//   return (
//     <div className="recipe-card">
//       <div className="recipe-inner">
        
//         {/* Front side */}
//         <div className="recipe-front">
//           <div className="front-content">
            
//             {/* Left: text */}
//             <div className="front-text">
//               <h2>{recipe.title}</h2>
//               <p>Prep Time: {recipe.prepTime}</p>
//               <p>Cook Time: {recipe.cookTime}</p>
//               <p>Serves: {recipe.serves}</p>
//               <p>Difficulty: {recipe.difficulty}</p>
//               <p>Type: {recipe.type}</p>
//             </div>

//             {/* Middle: like button */}
//             <div className="like-btn" onClick={() => setLiked(!liked)}>
//               {liked ? "❤️" : "🤍"}
//             </div>

//             {/* Right: image */}
//             <div className="front-image">
//               <img src={recipe.image} alt={recipe.title} className="recipe-img" />
//             </div>
//           </div>
//         </div>

//         {/* Back side */}
//         <div className="recipe-back">
//           <span>Prep Time: {recipe.prepTime}</span>
//           <span>Cook Time: {recipe.cookTime}</span>
//           <span>Serves: {recipe.serves}</span>
//           <span>Difficulty: {recipe.difficulty}</span>
//           <span>Type: {recipe.type}</span>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default RecipeCard;

