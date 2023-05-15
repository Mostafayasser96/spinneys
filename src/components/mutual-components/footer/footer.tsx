import React from "react";
import "../footer/footer-styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Accordion } from "react-bootstrap";



const MyFooter = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="contact-info">
          <div className="footer-logo">
            <img className="footer-white-logo" alt="spinneys" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/logo-white.5d7ed9a5d307.svg" />
          </div>
          <div className="quick-links">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>About Us</Accordion.Header>
                <Accordion.Body>
                  <ul className="accord-links1">
                    <li className="accord-link1">Who We Are</li>
                    <li className="accord-link">About Us</li>
                    <li className="accord-link">Our Story</li>
                    <li className="accord-link">Let's Do Better Together</li>
                    <li className="accord-link">Store Locator</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Shipping Online</Accordion.Header>
                <Accordion.Body>
                  <ul className="accord-links2">
                    <li className="accord-link1">Shopping Online</li>
                    <li className="accord-link">Frequently Asked Questions</li>
                    <li className="accord-link">Terms & Conditions</li>
                    <li className="accord-link">Privacy Policy</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Customer Services</Accordion.Header>
                <Accordion.Body>
                  <ul className="accord-links3">
                    <li className="accord-link1">Customer Service</li>
                    <li className="accord-link">Contact Us</li>
                    <li className="accord-link">Corporate Portal</li>
                    <li className="accord-link">Careers</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <ul className="quick-links1 list-unstyled">
              <li className="quick-link1">Who We Are</li>
              <li className="quick-link">About Us</li>
              <li className="quick-link">Our Story</li>
              <li className="quick-link">Let's Do Better Together</li>
              <li className="quick-link">Store Locator</li>
            </ul>
            <ul className="quick-links2 list-unstyled">
              <li className="quick-link1">Shopping Online</li>
              <li className="quick-link">Frequently Asked Questions</li>
              <li className="quick-link">Terms & Conditions</li>
              <li className="quick-link">Privacy Policy</li>
            </ul>
            <ul className="quick-links3 list-unstyled">
              <li className="quick-link1">Customer Service</li>
              <li className="quick-link">Contact Us</li>
              <li className="quick-link">Corporate Portal</li>
              <li className="quick-link">Careers</li>
            </ul>

          </div>
          <div className="social">
            <a href="https://twitter.com/Spinneys_UAE" target="_blank" rel="noreferrer">
              <img className="twitter" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/twitter-white.90840d1b66ba.svg" alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/spinneysuae/" target="_blank" rel="noreferrer">
              <img className="instagram" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/insta-white.f5d1b9c52ff6.svg" alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/SpinneysUAE" target="_blank" rel="noreferrer">
              <img className="facebook" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/fb-white.5300733c8ef6.svg" alt="Facebook" />
            </a>
          </div>
        </div>
        <div className="sign-up">
          <p className="sign-up-p">Sign up for our newsletter to receive special offers, news and events.</p>
          <form className="form">
            <input className='email' type="email" placeholder="Enter Your Email Address" />
            <button type='button' className="sub-btn">OK</button>
          </form>
          <p className="region">
            <span className="region-span1">Country/Region</span>
            <img className="country-flag" alt="UAE" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/uae.7847726d0663.svg" />
            <span className="region-span2">UAE</span>
          </p>
          <div className="payment-methods">
            <svg className="visa_master" xmlns="http://www.w3.org/2000/svg" width="128.937" height="38.147" viewBox="0 0 128.937 38.147">
              <g id="Group_14927" data-name="Group 14927" transform="translate(-53.069 -484.351)">
                <g id="Group_14924" data-name="Group 14924" transform="translate(53.569 484.851)">
                  <rect id="Rectangle_4014" data-name="Rectangle 4014" width="59.541" height="36.738" rx="5" transform="translate(0 0)" stroke="#fff" strokeWidth="1" opacity="0.496" fill="transparent"></rect>
                  <g id="Group_14923" data-name="Group 14923" transform="translate(14.625 6.814)">
                    <g id="Group_14922" data-name="Group 14922" transform="translate(1.749 19.803)">
                      <path id="Path_4197" data-name="Path 4197" d="M168.655,666.18a.738.738,0,1,1,.74.781.732.732,0,0,1-.74-.781m1.974,0v-1.219h-.53v.3a.924.924,0,0,0-.77-.357,1.282,1.282,0,0,0,0,2.561.924.924,0,0,0,.77-.357v.3h.53Zm17.916,0a.738.738,0,1,1,.74.781.732.732,0,0,1-.74-.781m1.975,0v-2.2h-.531v1.275a.924.924,0,0,0-.77-.357,1.282,1.282,0,0,0,0,2.561.924.924,0,0,0,.77-.357v.3h.531Zm-13.31-.806a.606.606,0,0,1,.617.591h-1.265a.628.628,0,0,1,.648-.591m.011-.475a1.282,1.282,0,0,0,.036,2.561,1.482,1.482,0,0,0,1-.342l-.26-.393a1.166,1.166,0,0,1-.709.255.677.677,0,0,1-.729-.6h1.811c.005-.066.011-.133.011-.2a1.169,1.169,0,0,0-1.158-1.281m6.4,1.281a.738.738,0,1,1,.74.781.732.732,0,0,1-.74-.781m1.974,0v-1.219h-.53v.3a.925.925,0,0,0-.77-.357,1.282,1.282,0,0,0,0,2.561.925.925,0,0,0,.77-.357v.3h.53Zm-4.968,0a1.232,1.232,0,0,0,1.3,1.28,1.276,1.276,0,0,0,.877-.291l-.255-.429a1.072,1.072,0,0,1-.638.22.782.782,0,0,1,0-1.561,1.072,1.072,0,0,1,.638.219l.255-.428a1.276,1.276,0,0,0-.877-.291,1.232,1.232,0,0,0-1.3,1.281m6.836-1.281a.72.72,0,0,0-.643.357v-.3H186.3V667.4h.531v-1.367c0-.4.173-.628.52-.628a.857.857,0,0,1,.332.061l.163-.5a1.126,1.126,0,0,0-.378-.067m-14.213.255a1.823,1.823,0,0,0-.994-.255c-.618,0-1.015.3-1.015.781,0,.4.3.643.841.719l.251.036c.291.041.428.117.428.255,0,.189-.194.3-.556.3a1.3,1.3,0,0,1-.811-.255l-.25.413a1.759,1.759,0,0,0,1.056.317c.7,0,1.112-.332,1.112-.8,0-.429-.321-.653-.852-.729l-.25-.036c-.229-.03-.413-.076-.413-.239,0-.179.173-.285.464-.285a1.573,1.573,0,0,1,.76.209Zm6.841-.255a.718.718,0,0,0-.642.357v-.3h-.526V667.4h.53v-1.367c0-.4.173-.628.52-.628a.857.857,0,0,1,.332.061l.163-.5a1.127,1.127,0,0,0-.378-.067m-4.525.061H174.7v-.74h-.536v.74h-.494v.485h.494v1.112c0,.566.22.9.847.9a1.245,1.245,0,0,0,.663-.189l-.153-.454a.98.98,0,0,1-.469.138c-.265,0-.352-.163-.352-.408v-1.1h.867ZM167.64,667.4v-1.531a.908.908,0,0,0-.959-.969.944.944,0,0,0-.857.434.9.9,0,0,0-.806-.434.807.807,0,0,0-.714.362v-.3h-.531V667.4h.536v-1.352a.571.571,0,0,1,.6-.648c.352,0,.53.229.53.643V667.4h.536v-1.352a.575.575,0,0,1,.6-.648c.362,0,.535.229.535.643V667.4Z" transform="translate(-163.773 -663.982)" fill="#fff"></path>
                    </g>
                    <path id="Path_4198" data-name="Path 4198" d="M172.763,530.708a9.322,9.322,0,0,0-5.672,1.9,9.319,9.319,0,0,0-5.671-1.9,9.422,9.422,0,0,0,0,18.844,9.32,9.32,0,0,0,5.671-1.9,9.323,9.323,0,0,0,5.672,1.9,9.422,9.422,0,0,0,0-18.844Zm-5.672,16.329a8.938,8.938,0,0,1,0-13.815,8.938,8.938,0,0,1,0,13.815Zm-14.617-6.907a8.956,8.956,0,0,1,8.945-8.946,8.846,8.846,0,0,1,5.282,1.726h0l.008.007a9.423,9.423,0,0,0,0,14.428l-.008.007h0a8.847,8.847,0,0,1-5.282,1.726A8.956,8.956,0,0,1,152.474,540.13Zm20.288,8.947a8.85,8.85,0,0,1-5.283-1.726l-.008-.006a9.423,9.423,0,0,0,0-14.428l.008-.006a8.849,8.849,0,0,1,5.283-1.726,8.946,8.946,0,0,1,0,17.893Z" transform="translate(-151.999 -530.708)" fill="#fff" stroke="#fff" strokeWidth="0.5"></path>
                  </g>
                </g>
                <g id="Group_14926" data-name="Group 14926" transform="translate(122.071 484.851)">
                  <rect id="Rectangle_4015" data-name="Rectangle 4015" width="59.435" height="37.147" rx="5" transform="translate(0 0)" stroke="#fff" strokeWidth="1px" opacity="0.496" fill="transparent"></rect>
                  <g id="Group_14925" data-name="Group 14925" transform="translate(12.63 13.056)">
                    <path id="Path_4199" data-name="Path 4199" d="M617.264,576.243c-.02,1.537,1.37,2.4,2.417,2.905,1.075.523,1.437.859,1.433,1.327-.008.716-.858,1.032-1.653,1.045a5.77,5.77,0,0,1-2.836-.674l-.5,2.339a8.312,8.312,0,0,0,3.07.566c2.9,0,4.8-1.432,4.808-3.651.011-2.817-3.9-2.973-3.87-4.232.009-.382.374-.789,1.172-.893a5.2,5.2,0,0,1,2.723.477l.485-2.263a7.4,7.4,0,0,0-2.584-.474c-2.73,0-4.65,1.451-4.665,3.528m11.913-3.333a1.258,1.258,0,0,0-1.175.783l-4.143,9.892h2.9l.577-1.594h3.541l.335,1.594h2.554l-2.229-10.675h-2.358m.405,2.884.836,4.008h-2.291l1.454-4.008M613.75,572.91l-2.284,10.675h2.761l2.283-10.675H613.75m-4.085,0-2.875,7.266L605.627,574a1.288,1.288,0,0,0-1.274-1.088h-4.7l-.066.31a11.506,11.506,0,0,1,2.725.908,1.169,1.169,0,0,1,.656.938l2.2,8.518h2.919l4.474-10.675h-2.9" transform="translate(-599.589 -572.715)" fill="#fff"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>

      </div>
      <div className="line">

      </div>
      <ul className="rights-info">
        <li className="apps">
          <a className="apple-store" rel="noreferrer" href="https://apps.apple.com/us/app/id1518538261" target="_blank">
            <img className="apple-img" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/appstore.e2bb6fdcf290.svg" alt="apple app store" />
          </a>
          <a className="google-store" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.dnc.spinneys" target="_blank">
            <img src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/appstore.e2bb6fdcf290.svg" alt="google app store" />
          </a>
        </li>
        <li className="footer-logo2">
          <img className="footer-white-logo2" alt="spinneys" src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/logo-white.5d7ed9a5d307.svg" />
        </li>
        <li className="rights">
          &copy; 2020-2023 Spinneys. All Rights Reserved.
        </li>
        <li className="made-by">
          <span className="made-by-span">Made by</span>
          <a className='developer' rel="noreferrer" target="_blank" href="//www.digitalandcode.com">
            <img className='dev-company' src="https://prod-spinneys-cdn-new.azureedge.net/static/spinneys/svg/dc_logo.c3bb4aa1da09.svg" alt="Digital & Code" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default MyFooter;