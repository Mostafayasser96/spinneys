import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navbar-styles.css';

const MyNavbar = () => {

  return (
    // <nav className="navbar">
    //   <a href="/" className="navbar-brand">Brand</a>
    //   <button type="button" className="navbar-toggler d-xl-block d-lg-none d-md-none d-sm-block"
    //     data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <ul className="list1 d-xl-block d-lg-block d-md-block d-sm-none">
    //     <li>shop</li>
    //     <li>recipes</li>
    //     <li>lifestyle</li>
    //     <li>podcast</li>
    //   </ul>
    //   <form className="form">
    //     <input className="input"></input>
    //     <button className="btn">Submit</button>
    //   </form>
    //   <ul className="list2 d-xl-block d-lg-block d-md-block d-sm-none">
    //     <li>Arabic</li>
    //     <li>Register</li>
    //     <li>Sign In</li>
    //   </ul>



    //   <div className="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
    //     <div className="offcanvas-header">
    //       <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom</h5>
    //       <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    //     </div>
    //     <div className="offcanvas-body small">
    //       ...
    //     </div>
    //   </div>

    // </nav>




    <nav className="navbar w-100 border-bottom p-0">
      <ul className="navbar-nav w-100 d-flex flex-nowrap flex-row">
        <li className="toggler-li border-end">
          <button className="navbar-toggler d-sm-block d-md-none d-lg-none d-xl-none border border-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </li>
        <li className="logo-li border-end">
          <a href="/" className="logo">
            <img alt='logo' className='logo-img' src="https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/logo-color.ee51dd2e8427.svg" />
          </a>
        </li>
        <li className="single-search d-none">
          <button className="single-search-btn w-100 border border-white"
            type="submit"
            data-bs-toggle='offcanvas'
            data-bs-target='#offcanvasTop'
            aria-controls="offcanvasTop"
          >
            <img src="https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/search-icon.f7270e7c129d.svg"
              alt="single search"
              className="single-search-img"
            />
          </button>
        </li>
        <li className="shop border-end">
          <a href="/" className="text-black w-100% h-100% d-flex justify-content-space-between text-decoration-none">
            <span>Shop</span>
            <img src="https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/arrow-menu-down-black.a21cbb2d6b36.svg"
              alt="arrow"
              className="arrow"
            />
          </a>
        </li>
        <li className="recipes border-end">
          <a href="/" className="nav-link fw-600 p-0 text-black">Recipes</a>
        </li>
        <li className="lifestyle border-end">
          <a href="/" className="nav-link fw-600 p-0 text-black">Lifestyle</a>
        </li>
        <li className="podcast border-end">
          <a href="/" className="nav-link fw-600 p-0 text-black">Podcast</a>
        </li>
        <li className="search border-end">
          <form className="form border-none">
            <button className="search-btn position-absolute outline-none border border-white" type="submit">
              <img src="https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/search-icon.f7270e7c129d.svg"
                alt="search"
                className="search-img"
              />
            </button>
            <input className="input w-100 border border-none" placeholder="Search Products, Recipes & Articles"></input>

          </form>
        </li>
        <li className="arabic border-end">
          <a href="/" className="nav-link fw-600 p-0 text-black">العربية</a>
        </li>
        <li className="register border-end">
          <a href="/" className="nav-link fw-600 p-0 text-black">Register</a>
        </li>
        <li className="sign-in border-end">
          <a href="/" className=" d-flex justify-content-space-between h-100% text-decoration-none text-black">
            <span>Sign In</span>
            <img src="https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/sign-in.01d28dab1267.svg"
              className="signin-img"
              alt="person"
            />
          </a>
        </li>
        <li className="cart">
          <a className="text-black h-100 d-flex justify-content-between text-decoration-none"
            data-bs-toggle="offcanvas"
            href="#offcanvasRight"
            role="button"
            aria-controls="offcanvasRight"
          >
            <img src="https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/cart-green.16c44836996c.svg"
              alt="shopping cart"
              className="cart-img"
            />
            <span className="purchases">
            0
          </span>
          </a>
          
        </li>
      </ul>

      <div className="offcanvas offcanvas-bottom" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">

      </div>



      <div className="offcanvas offcanvas-top" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasTopLabel">Offcanvas top</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </div>


      <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          ...
        </div>
      </div>



    </nav>
  )
}
export default MyNavbar; 