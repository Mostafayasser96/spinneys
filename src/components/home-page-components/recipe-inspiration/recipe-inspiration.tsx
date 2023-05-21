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
          <p className="text-left" id="recipe-title">Recipe Inspiration</p>
          <p className="text-#8C8C8C" id="recipe-subtitle">Explore the culinary world with Spinneys recipes.</p>
        </div>
        <button className="text-center bg-white d-flex justify-content-between" id="recipe-shop-now" type="button">
          <a id="recipe-view-more" className="w-100 d-flex justify-content-evenly text-decoration-none bg-#FFFFFF" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            Shop Now
            <img id="shop-now-arrow" className="shop-now-arrow" alt="view more" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" />
          </a>
        </button>
      </div>

      <Splide options={{
        perMove: 1,
        perPage: 3,
        pagination: false,
        gap: "1.2rem",
        breakpoints: {
          900: {
            perMove: 1,
            perPage: 2,
            gap: "1rem"
          },
          500: {
            perMove: 1,
            perPage: 1
          }
        }
      }}
      >
        {Recipes.recipes.map((recipe, i) => (
          <SplideSlide id="recipe-slide" key={i}>
            <div className="recipe-box">
              <a id="recipe-img-link" href={recipe["recipe-link"]}>
                <img className="recipe-img" id="recipe-img" alt={recipe.name} src={recipe.src} />
              </a>
              <div className="bookmark top-0 end-0" id="bookmark">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
                  <g id="Group_14176" data-name="Group 14176" transform="translate(-909.948 -4115.613)">
                    <rect id="bookmark-bx" data-name="Rectangle 434" width="50" height="50" transform="translate(909.948 4115.613)" fill="#114634"></rect>
                    <path id="bookmark-mark" data-name="Path 363" d="M939.79,4368.4l-4.844-4.842L930.1,4368.4v-13.561h9.685Z" transform="translate(0 -221.001)" fill="none" stroke="#fff" strokeMiterlimit="10" strokeWidth="1.5"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="recipe-info" id="recipe-info">
              <a id="recipe-link" href={recipe["recipe-link"]}>
               <h3 className="recipe-name" id="recipe-name">{recipe.name}</h3> 
              </a>
              <div id="sub-info">
                <span id="recipe-country">{recipe.country}</span>
                <span id="prep-time">{recipe["prep-time"]} Prep / Cook</span>
              </div>
            </div>
          </SplideSlide>

        ))}

      </Splide>

    </div>
  )
}
export default RecipeInspiration;