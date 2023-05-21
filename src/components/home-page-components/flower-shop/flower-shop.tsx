import React from "react";
import "../flower-shop/flower-shop-styles.css";
import "../flower-shop/Pandu.otf";



const FlowerShop = () => {
  return (
    <div className="flower-shop">
      <img className="flower-img" src='https://prod-spinneys-cdn-new.azureedge.net/media/images/flowershop.original.original.jpg' alt="flower shop image" />
      <div className="flower-txt">
        <p className="flower-heading">Flower Shop</p>
        <p className="flower-p">Brighten up your space with these stunning flowers</p>
        <button className="flower-shop-now" type="button">
          <a href="https://www.spinneys.com/en-ae/flower-shop/" className="flower-shop-link">
            Shop Now
            <img className="flower-arrow" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" alt="shop now arrow" />
          </a>
        </button>
      </div>
    </div>
  )
}
export default FlowerShop;