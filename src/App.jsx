import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipe from "./components/OurRecipe";


const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>

    </div>
  );
};

export default App;