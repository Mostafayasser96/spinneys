import React, { useEffect } from "react";
import "../what's-new/what's-new-styles.css";
// import { Splide } from '@splidejs/splide';
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/splide/css';
// import '@splidejs/splide/css/core';
import 'bootstrap/dist/css/bootstrap.css';
import Products from "./what's-new-products.json";


const WhatsNew = () => {



  return (
    <div className="whatsNew">
      <div className="whatsNew-heading d-flex justify-content-between">
        <div className="address">
          <p className="address1 text-left">What's new this month?</p>
          <p className="address2 text-#8C8C8C ">Shop our wide range of new products</p>
        </div>
        <button className="shop-now text-center bg-white d-flex justify-content-between" type="button">
          <a className="view-more w-100 d-flex justify-content-evenly text-decoration-none bg-#FFFFFF" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            Shop Now
            <img className="shop-now-arrow" alt="view more" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" />
          </a>

        </button>
      </div>

      <Splide options={{
        perMove: 1,
        perPage: 4,
        pagination: false,
        breakpoints: {

        }
      }}>
        {Products.products.map((product, i) => (
          <SplideSlide key={i}>
            <div className="product">
              <div className="product-card">
               
                <a className="product-link" href={product["product-src"]} >
                  <img className="product-img" alt="product" src={product["product-src"]} srcSet={product.srcset} />
                  <img className="padge" alt="new padge" src={product["new-padge"]} />
                </a>

              </div>
              <div className="overlay"></div>
              <div className="product-buttons">
                <button className="remove-btn">
                  <img className="remove-product" alt="Remove" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/minus-green.6302dea6e804.svg" />
                </button>
                <button className="add-btn">
                  <img className="add-product" alt="Add" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/plus-green.bad8810df108.svg" />
                </button>
              </div>
              <div className="product-info">
                <p className="price">
                  AED {product.price} / Each
                </p>
                <p className="name">
                  <a className="name-link" href={product["rest-src"]} >
                    {product["product-name"]}
                  </a>
                </p>
                <div className="rest">
                  <a className="more-info" href={product["rest-src"]}>
                    Rest of the aisle
                  </a>
                  <span className="carousel-control-next-icon"></span>
                </div>

              </div>

            </div>


          </SplideSlide>
        ))}
      </Splide>
    </div>
  )
}
export default WhatsNew;