import React, { useState } from "react";
import "../fruit&vegetables/fruit&vegetables-styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import 'bootstrap/dist/css/bootstrap.css';
import Products from "../fruit&vegetables/fruit&vegetables-products.json";
import { Offcanvas } from "react-bootstrap";



const FruitVegetables = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="fruit-vegetables" id="fruit-vegetables">
      <div className="d-flex justify-content-between" id="fruit-heading">
        <div className="titles" id="titles">
          <p className="text-left" id="title">Fruit & Vegetables</p>
          <p className="text-#8C8C8C" id="subtitle">A selection of the freshest fruits and vegetables available in the region.</p>
        </div>
        <button className="text-center bg-white d-flex justify-content-between" id="shop-now" type="button">
          <a id="view-more" className="w-100 d-flex justify-content-evenly text-decoration-none bg-#FFFFFF" href="https://www.spinneys.com/en-ae/catalogue/?selected_facets=is_new_exact%3ATrue&sort_by=boost-value">
            Shop Now
            <img id="shop-now-arrow" className="shop-now-arrow" alt="view more" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-right-grey.0942813cbb44.svg" />
          </a>
        </button>
      </div>

      <Splide options={{
        perMove: 1,
        perPage: 4,
        pagination: false,
        breakpoints: {
          500: {
            perPage: 1,
            perMove: 1,
            pagination: false,
            height: '20rem'
          },
          900: {
            perPage: 2,
            perMove: 1,
            gap: "0rem",
            pagination: false,
            height: '10rem'
          }
        },
      }} id="splide">
        {Products.products.map((product, i) => (
          <SplideSlide key={i} id="splide-slide">
            <div className="product-card" id="product-card">
              <a className="product-link" href={product["product-src"]} id="product-link" >
                <img id="product-img" alt="product" src={product["product-src"]} srcSet={product.srcset} />
                {product["country-badge"] ?
                  <div className="badges" id="badges" >
                    <img id="badge1" alt="country badge" src={product["country-badge"]} />
                  </div>
                  :
                  <div></div>
                }
                {product["organic-badge"] ?
                  <div className="badges" id="badges" >
                    <img id="badge1" alt="country badge" src={product["country-badge"]} />
                  </div>
                  :
                  <div></div>
                }
                {product["country-badge"] && product["organic-badge"] ?
                  <div className="badges" id="badges" >
                    <img id="badge1" alt="country badge" src={product["country-badge"]} />
                    <img id="badge2" className="badge2" alt="organic badge" src={product["organic-badge"]} />
                  </div>
                  :
                  <div></div>
                }
              </a>
            </div>
            <div className="overlay ctr"></div>
            <div className="product-buttons" id="product-buttons">
              <button id="remove-btn" className="remove-btn" onClick={handleShow}>
                <img id="remove-product" className="remove-product" alt="Remove" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/minus-green.6302dea6e804.svg" />
              </button>
              <button id="add-btn" className="add-btn" onClick={handleShow}>
                <img id="add-product" className="add-product" alt="Add" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/plus-green.bad8810df108.svg" />
              </button>
            </div>
            <div id="product-info" className="product-info">
              <p id="price" className="price">
                AED {product.price}
              </p>
              <p id="name" className="name">
                <a id="name-link" className="name-link" href={product["rest-src"]} >
                  {product["product-name"]}
                </a>
              </p>
              <div id="rest" className="rest">
                <a id="more-info" className="more-info" href={product["rest-src"]}>
                  Rest of the aisle
                </a>
                <svg id="fruit-arrow-svg" className="fruit-arrow-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30" height="10" focusable="false">
                  <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                </svg>
              </div>
              <div id="add-remove" className="add-remove d-none" onClick={handleShow}>
                <div id="remove" className="remove">
                  <img id="remove-product" className="remove-product" alt="Remove" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/minus-green.6302dea6e804.svg" />
                </div>
                <div id="count" className="count">
                  0
                </div>
                <div id="add" className="add">
                  <img id="add-product" className="add-product" alt="Add" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/plus-green.bad8810df108.svg" />
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
export default FruitVegetables;