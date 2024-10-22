import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipe from "./components/OurRecipe";
import Recipe from "./components/Recipe";
import SideBar from "./components/SideBar";
import { useState } from "react";


const App = () => {

  const [recipeQueue, setRecipeQueue] = useState([]);
  const addRecipeToQueue = recipe => {
    const isExist = recipeQueue.find(
      previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
    )
    if(!isExist) {
      setRecipeQueue([...recipeQueue, recipe])
    }else {
        alert('already you select it')
      }
  }
  
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="flex flex-col md:flex-row gap-5">
        {/* card section */}
          <Recipe addRecipeToQueue={addRecipeToQueue}></Recipe>

        {/* sidebar section */}
          <SideBar recipeQueue={recipeQueue}></SideBar>
      </section>
    </div>
  );
};

export default App;