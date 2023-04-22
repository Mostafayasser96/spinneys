import 'bootstrap/dist/css/bootstrap.css';
import '../navbar/navbar-styles.css';
import { Carousel } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <div className='header'>
      <nav className="navbar fixed-top w-100 bg-white border-bottom p-0">
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
              <img alt='logo' className='logo-img' src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/logo-color.ee51dd2e8427.svg" />
            </a>
          </li>
          <li className="single-search d-none">
            <button className="single-search-btn w-100 border border-white"
              type="submit"
              data-bs-toggle='offcanvas'
              data-bs-target='#offcanvasTop'
              aria-controls="offcanvasTop"
            >
              <img src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/search-icon.f7270e7c129d.svg"
                alt="single search"
                className="single-search-img"
              />
            </button>
          </li>
          <li className="shop border-end">
            <a href="/" className="text-black w-100% h-100% d-flex justify-content-space-between text-decoration-none cursor-pointer">
              <span>Shop</span>
              <img src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/arrow-menu-down-black.a21cbb2d6b36.svg"
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
                <img src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/search-icon.f7270e7c129d.svg"
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
            <a href="/" className=" d-flex justify-content-space-between h-100% text-decoration-none text-black cursor-pointer">
              <span>Sign In</span>
              <img src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/sign-in.01d28dab1267.svg"
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
              <img src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/cart-green.16c44836996c.svg"
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

      <Carousel className='carousel' interval={null}>
        <Carousel.Item>
          <img src="https://prod-spinneys-cdn-new.azureedge.net/media/images/Ramadan-Mob-Banner_20233_573uANM.original.jpg"
            className="carousel-img d-block w-100" alt="Ramadan Mob" />

          <Carousel.Caption>
            <p className='caption'>Prepare for Ramadan with these essentials</p>
            <button className='shop-btn text-uppercase' type='button'>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://prod-spinneys-cdn-new.azureedge.net/media/images/Newness-FEB20-EN-Mob.original.jpg"
            className="carousel-img d-block w-100 object-fit-cover" alt="English Mob" />

          <Carousel.Caption>
            <p className='caption'>
              Shop our wide range of new products
            </p>
            <button className='shop-btn text-uppercase' type='button'>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://prod-spinneys-cdn-new.azureedge.net/media/images/March-TFE-EN-mob.original.jpg"
            className="carousel-img d-block w-100" alt="March mob" />

          <Carousel.Caption>
            <p className='caption'>
              Bringing you the fresher experience straight to your door. Explore our wide range of products, recipes and articles.
            </p>
            <button className='shop-btn text-uppercase' type='button'>Shop Now</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    </div>
  )
}
export default MyNavbar; 