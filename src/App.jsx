import Header from "./components/Header";
import Banner from "./components/Banner";
import OurRecipe from "./components/OurRecipe";
import Recipe from "./components/Recipe";
import SideBar from "./components/SideBar";


const App = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header></Header>
      <Banner></Banner>
      <OurRecipe></OurRecipe>
      <section className="flex flex-col md:flex-row gap-5">
        {/* card section */}
          <Recipe></Recipe>

        {/* sidebar section */}
          <SideBar></SideBar>
      </section>
    </div>
  );
};

export default App;