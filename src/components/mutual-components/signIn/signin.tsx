import React from "react";
import { Offcanvas } from "react-bootstrap";
import "../signIn/signin-styles.css";
import 'bootstrap/dist/css/bootstrap.css';


const SignIn = ({ ...props }) => {
  return (
    <div className="sign-in">
      <Offcanvas {...props} id="signin-offcanvas" >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form className="signin-form">
            <img className="signin-logo" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/logo-color.ee51dd2e8427.svg" alt="Spinneys" />
            <h3 className="welcome">Welcome Back!</h3>
            <p className="signin-p">Log in with your email and password</p>
            <input className="signin-email" type="email" placeholder="Email" />
            <input className="signin-password" type="password" placeholder="Password" />
            <button className="signin-btn" type="submit">sign in</button>
            <a className="forgot-password" href="/en-ae/accounts/reset_password/">
              Forgot password?
            </a>
          </form>
          <div className="signin-or">
            <div className="signin-line"></div>
            <p className="or">or</p>
            <div className="signin-line"></div>
          </div>
          <button className="signin-facebook" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.31" height="21.36" viewBox="0 0 21.31 21.36">
              <path d="M20.13 0h-19A1.18 1.18 0 0 0 0 1.18v19a1.18 1.18 0 0 0 1.18 1.18h10.2v-8.3H8.61V9.84h2.78V7.47a3.87 3.87 0 0 1 4.14-4.25 22.87 22.87 0 0 1 2.47.13v2.87h-1.7c-1.34 0-1.59.63-1.59 1.57v2.05h3.19l-.42 3.22H14.7v8.25h5.43a1.18 1.18 0 0 0 1.18-1.18v-19A1.18 1.18 0 0 0 20.13 0z" fill="#FFFFFF"></path>
            </svg>
            <span className="facebook-span">sign in with facebook</span>
          </button>
          <div className="signin-google">
            <svg xmlns="http://www.w3.org/2000/svg" width="22.547" height="23.007" viewBox="0 0 22.547 23.007">
              <g id="Group_15527" data-name="Group 15527" transform="translate(-1376 -575.144)">
                <path id="Shape" d="M20.047,9.717a13.222,13.222,0,0,0-.209-2.354H9v4.451h6.193a5.294,5.294,0,0,1-2.3,3.473v2.887h3.719a11.223,11.223,0,0,0,3.431-8.458Z" transform="translate(1378.5 577.189)" fill="#4285f4" fillRule="evenodd"></path>
                <path id="Shape-2" data-name="Shape" d="M11.24,20.031a10.986,10.986,0,0,0,7.616-2.788l-3.719-2.887A6.942,6.942,0,0,1,4.8,10.71H.957v2.981A11.5,11.5,0,0,0,11.24,20.031Z" transform="translate(1376.267 578.121)" fill="#34a853" fillRule="evenodd"></path>
                <path id="Shape-3" data-name="Shape" d="M5.068,12.312a6.8,6.8,0,0,1,0-4.373V4.958H1.224a11.522,11.522,0,0,0,0,10.335l3.844-2.981Z" transform="translate(1376 576.522)" fill="#fbbc05" fillRule="evenodd"></path>
                <path id="Shape-4" data-name="Shape" d="M11.24,4.577a6.216,6.216,0,0,1,4.4,1.721L18.94,3a11.059,11.059,0,0,0-7.7-3A11.5,11.5,0,0,0,.957,6.339L4.8,9.321A6.858,6.858,0,0,1,11.24,4.577Z" transform="translate(1376.267 575.144)" fill="#ea4335" fillRule="evenodd"></path>
              </g>
            </svg>
            <span className="google-span"> sign in with Google</span>
          </div>
          <p className="signin-hint">
            Don't have an account?
            <a className="register-link" href="#">Register</a>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default SignIn;