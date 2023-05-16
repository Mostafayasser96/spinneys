import React from "react";
import "../recipe-inspiration/recipe-inspiration.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import 'bootstrap/dist/css/bootstrap.css';
import Recipes from "../recipe-inspiration/recipes.json";
import { Offcanvas } from "react-bootstrap";



const RecipeInspiration = () => {
  return (
    <div className="recipe-inspiration" id="recipe-inspiration">
      <div className="d-flex justify-content-between" id="recipe-heading">
        <div className="recipe-titles" id="recipe-titles">
          <p className="text-left" id="recipe-title">Fruit & Vegetables</p>
          <p className="text-#8C8C8C" id="recipe-subtitle">A selection of the freshest fruits and vegetables available in the region.</p>
        </div>
        <button className="text-center bg-white d-flex justify-content-between" id="recipe-shop-now" type="button">
          <a id="recipe-view-more" className="w-100 d-flex justify-content-evenly text-decoration-none bg-#FFFFFF" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            Shop Now
            <img id="shop-now-arrow" className="shop-now-arrow" alt="view more" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" />
          </a>
        </button>
      </div>

      

    </div>
  )
}
export default RecipeInspiration;