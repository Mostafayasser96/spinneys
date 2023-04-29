import React from "react";
import "../what's-new/what's-new-styles.css";
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';
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
      
    </div>
  )
}
export default WhatsNew;