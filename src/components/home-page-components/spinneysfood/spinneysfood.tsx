import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "../spinneysfood/spinneysfood-styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Products from "../spinneysfood/spinneysfood-products.json";

const SpinneysFood = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="spinneys-food">
      <div className="category">
        <div className="cat-overlay"></div>
        <img className="cat-img" alt="spinneys food category" src="https://prod-spinneys-cdn-new.azureedge.net/media/images/CheeseSelection-2.original.jpg" />
        <img className="cat-banner" alt="spinneys food banner" src="https://prod-spinneys-cdn-new.azureedge.net/media/images/Artboard_1.original.png" />
        <p className="cat-p">
          Stock up on pantry essentials as well as the freshest ingredients.
        </p>
        <button className="shop-btn text-center d-flex justify-content-between" type="button">
          <a className="view-more w-100 d-flex justify-content-evenly text-decoration-none" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            Shop Now
            <svg className="shop-now-svg" xmlns="http://www.w3.org/2000/svg" width="3.558" height="5.707" viewBox="0 0 3.558 5.707">
              <path id="Path_388" data-name="Path 388" d="M1775.881,1072.323l2.5,2.5-2.5,2.5" transform="translate(-1775.527 -1071.97)" fill="none" stroke="#fff" strokeMiterlimit="10" stroke-width="1"></path>
            </svg>
          </a>
        </button>
      </div>
      <Splide options={{
        perMove: 1,
        perPage: 3,
        pagination: false,
        breakpoints: {
          900: {
            perMove: 1,
            perPage: 2,
          },
          500: {
            perMove: 1,
            perPage: 1
          }
        }
      }}
      >
        {Products.products.map((product, i) => (
          <SplideSlide key={i}>
            <div className="product">
              <div className="product-card">
                <a className="product-link" href={product["product-src"]} >
                  <img className="product-img" alt="product" src={product["product-src"]} srcSet={product.srcset} />
                </a>
              </div>
              <div className="overlay ctr"></div>
              <div className="product-buttons">
                <button className="remove-btn"  onClick={handleShow}>
                  <img className="remove-product" alt="Remove" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/minus-green.6302dea6e804.svg" />
                </button>
                <button className="add-btn"  onClick={handleShow}>
                  <img className="add-product" alt="Add" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/plus-green.bad8810df108.svg" />
                </button>
              </div>
              <div className="product-info">
                <p className="price">
                  AED {product.price} / Each
                </p>
                <p className="name">
                  <a className="name-link" href={product["rest"]} >
                    {product["name"]}
                  </a>
                </p>
                <div className="rest">
                  <a className="more-info" href={product["rest"]}>
                    Rest of the aisle
                  </a>
                  <svg className="spinneysfood-arrow-svg" id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30" height="10" focusable="false">
                    <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                  </svg>
                </div>
                <div className="add-remove d-none" onClick={handleShow}>
                  <div className="remove">
                    <img className="remove-product" alt="Remove" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/minus-green.6302dea6e804.svg" />
                  </div>
                  <div className="count">
                    0
                  </div>
                  <div className="add">
                    <img className="add-product" alt="Add" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/plus-green.bad8810df108.svg" />
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default SpinneysFood;