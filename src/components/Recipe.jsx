import { useEffect, useState } from "react";

const Recipe = ({addRecipeToQueue}) => {
    
    const [recipes, setRecipes] = useState([]);
    useEffect(()=> {
        fetch('./recipe.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])
    console.log(recipes)

    return (
        <div className="md:w-2/3 px-3 lg:px-0">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
           {recipes.map(recipe => (
                <div key={recipe.recipe_id} className="card bg-base-100 shadow-xl border-2">
                <figure className="px-8 pt-6">
                  <img
                    src={recipe.recipe_image}
                    alt="recipe" className="w-full md:h-52 rounded-lg"/>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-base md:text-xl font-semibold">{recipe.recipe_name}</h2>
                  <p className="text-xs md:text-base font-normal text-[#878787]"> {recipe.short_description} </p>
                  <hr className="border-t-2 border-gray-400"/>
                  <p className="text-base md:text-xl font-semibold">Ingredients: {recipe.ingredients.length} </p>
                  <ul className="ml-8 text-[#878787] text-xs md:text-base">
                    {recipe.ingredients.map((item, index) => (
                        <li className="list-disc" key={index}> {item} </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                  <div className="flex items-center text-xs md:text-base gap-1"><i className="fa-solid fa-stopwatch"></i> <p>{recipe.preparing_time}</p> </div>
                  <div className="flex items-center text-xs md:text-base gap-1"><i className="fa-solid fa-fire-flame-curved"></i> <p>{recipe.calories}</p> </div>
                  </div>
                  <div className="card-actions justify-start">
                    <button onClick={() => addRecipeToQueue(recipe)} className="btn rounded-full bg-[#0BE58A] px-8 mt-2 text-xs md:text-base">Want to Cook</button>
                  </div>
                </div>
              </div>
                ))}
           </div>
        </div>
    );
};

export default Recipe;