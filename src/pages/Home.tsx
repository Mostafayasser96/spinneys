import React from "react";
import MyStories from "../components/home-page-components/stories/stories-carousel";
import WhatsNew from "../components/home-page-components/what's-new/what's-new";
import MyNavbar from "../components/mutual-components/navbar/navbar";
import MyFooter from "../components/mutual-components/footer/footer";
import SpinneysFood from "../components/home-page-components/spinneysfood/spinneysfood";
import TasteofItaly from "../components/home-page-components/taste-of-italy/taste-of-italy";
import NewinStore from "../components/home-page-components/new-in-store/new-in-store";
import FruitVegetables from "../components/home-page-components/fruit&vegetables/fruit-&-vegetables";
import RecipeInspiration from "../components/home-page-components/recipe-inspiration/recipe-inspiration";
import SpinneysStudio from "../components/home-page-components/spinneys-studio/spinneys-studio";
import Bakery from "../components/home-page-components/bakery/bakery";
import FlowerShop from "../components/home-page-components/flower-shop/flower-shop";
import LifestyleReads from "../components/home-page-components/lifestyle-reads/lifestyle-reads";
import Vegetarian from "../components/home-page-components/vegetarian&vegan/vegetarian-&-vegan";
import PowerofPlants from "../components/home-page-components/power-of-plants/power-of-plants";



const Home = () => {
  return (
    <div className="Home">
      <MyNavbar />
      <MyStories />
      <WhatsNew />
      <SpinneysFood />
      <TasteofItaly />
      <NewinStore />
      <FruitVegetables />
      <RecipeInspiration />
      <SpinneysStudio />
      <Bakery />
      <FlowerShop />
      <LifestyleReads />
      <Vegetarian />
      <PowerofPlants />
      <MyFooter />
    </div>

  )
}
export default Home;