import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Offcanvas } from "react-bootstrap";
import "../register/register-styles.css";


const Register = ({ ...props }) => {
  const [smsCheck, setSmsCheck] = useState<string>("green");
  const handleSmsCheck = () => {
    if (smsCheck == "green") {
      setSmsCheck("white");
      console.log("sms is white");
    } else {
      setSmsCheck("green");
      console.log("sms is green");
    }
  }
  const [emailCheck, setEmailCheck] = useState<string>("green");
  const handleEmailCheck = () => {
    if(emailCheck == "green") {
      setEmailCheck("white");
      console.log("email is white");
    } else {
      setEmailCheck("green");
      console.log("email is green");
    }
  }
  return (
    <div className="register">
      <Offcanvas {...props} id="register-offcanvas">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="register-title">
            <img className="register-logo" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/logo-color.ee51dd2e8427.svg" alt="Spinneys" />
            <h3 className="register-heading">Get the freshest produce straight to your door!</h3>
          </div>
          <form className="register-form">
            <div className="field">
              <select name="field-title" id="field-title" className="field-title" defaultValue="Title">
                <option className="title-option d-none" disabled> Title </option>
                <option value="mr">MR</option>
                <option value="miss">MISS</option>
                <option value="mrs">MRS</option>
                <option value="ms">MS</option>
                <option value="dr">DR</option>
              </select>
              <input className="first-name" type="text" placeholder="first name" />
              <input className="last-name" type="text" placeholder="last name" />
            </div>
            <input className="email-address" type="email" placeholder="Email Address" />
            <input className="phone-number" type="number" placeholder="Phone number (+971 50 111 1111)" />
            <input className="password" type="password" placeholder="Choose a Password" />
            <p className="preferences">Your marketing preferences</p>
            <p className="question">How would you like to hear from us about our latest products, news and offers?</p>
            <div className="check">
              <svg className="s-card-chcek" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <g id="s-card-tick-mark" data-name="Group 14" transform="translate(381 -1577)">
                  <g onClick={handleSmsCheck} id="circle-card" className="circle-card" data-name="Ellipse 5" transform="translate(-381 1577)" fill={smsCheck} stroke="#e6e6e6" strokeWidth="1">
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none"></circle>
                    <circle cx="12.5" cy="12.5" r="12" fill="none"></circle>
                  </g>
                  <path className="s-card-filter-tick" d="M0,69.072l3.965,3.9L11.578,65.5l-1.093-1.059-6.52,6.4L1.078,68.005Z" transform="translate(-374 1520.557)" fill="#fff"></path>
                </g>
              </svg>
              <span className="check-sms">sms</span>

              <svg className="s-card-chcek" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                <g id="s-card-tick-mark" data-name="Group 14" transform="translate(381 -1577)">
                  <g onClick={handleEmailCheck} id="circle-card" className="circle-card" data-name="Ellipse 5" transform="translate(-381 1577)" fill={emailCheck} stroke="#e6e6e6" strokeWidth="1">
                    <circle cx="12.5" cy="12.5" r="12.5" stroke="none"></circle>
                    <circle cx="12.5" cy="12.5" r="12" fill="none"></circle>
                  </g>
                  <path className="s-card-filter-tick" d="M0,69.072l3.965,3.9L11.578,65.5l-1.093-1.059-6.52,6.4L1.078,68.005Z" transform="translate(-374 1520.557)" fill="#fff"></path>
                </g>
              </svg>
              <span className="check-email">email</span>
            </div>
            <p className="sub-preferences">You will still receive communications regarding orders placed with us.</p>
            <button className="register-sub-btn" type="submit">continue</button>
          </form>
          <div className="register-or">
            <div className="register-line"></div>
            <p className="or">or</p>
            <div className="register-line"></div>
          </div>
          <button className="register-facebook" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="21.31" height="21.36" viewBox="0 0 21.31 21.36">
              <path d="M20.13 0h-19A1.18 1.18 0 0 0 0 1.18v19a1.18 1.18 0 0 0 1.18 1.18h10.2v-8.3H8.61V9.84h2.78V7.47a3.87 3.87 0 0 1 4.14-4.25 22.87 22.87 0 0 1 2.47.13v2.87h-1.7c-1.34 0-1.59.63-1.59 1.57v2.05h3.19l-.42 3.22H14.7v8.25h5.43a1.18 1.18 0 0 0 1.18-1.18v-19A1.18 1.18 0 0 0 20.13 0z" fill="#FFFFFF"></path>
            </svg>
            <span className="facebook-span">sign in with facebook</span>
          </button>
          <span className="register-line2"></span>
          <div className="terms-conditions">
            <p className="agreement">By signing up, you agree to Spinneys</p>
            <a className="terms-link" href="#">Terms and Conditions</a>
          </div>
          <p className="register-hint">
            Already got an account?
            <a className="register-link" href="#">Log In</a>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
export default Register;