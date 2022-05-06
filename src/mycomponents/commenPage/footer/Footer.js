import React from "react";
import Secondwave from "../../../images/wave2.png"
import linkedin from "../../../images/linkedin-icon.png"
import whatsapp from "../../../images/whatsapp-icon.png"
import facebook from "../../../images/facebook-icon.png"
import "../footer/footer.css"
const Footer = () => {
  return (
    <>
      <div className="footer">
      <img src={Secondwave} alt="" srcSet="" className="seconWave" />
        <div className="container">
       
          <div className="row py-5">
            <div className="col-md-5">
              <div className="footer-content">
                <h4>ABOUT ROOM RENT</h4>
                <p>
                  The company is born out of an idea to make house hunting easy
                  for singles (includes bachelors &amp; bachelorettes both) and
                  families for whom it is not less than a nightmare to find a
                  perfect abode in a good locality. From searching the property
                  to 
                </p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-content">
                    <h4>GET TO KNOW US</h4>
                    <ul>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">Blog</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">
                          Refer and Earn
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">
                          Complaint
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-content">
                    <h4>CONNECT WITH US</h4>
                    <ul className=" d-flex flex-wrap">
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="https://www.instagram.com/"><img src={linkedin} alt="" /></a>
                      </li>

                      
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="https://www.facebook.com/">
                         <img src={facebook} alt="" />
                        </a>
                      </li>

                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="https://web.whatsapp.com/">
                          <img src={whatsapp} alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-content">
                    <h4>CUSTOMER SERVICE</h4>
                    <ul>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">
                          How It Works
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="">Careers</a>
                      </li>
                      <li>
                        <i className="fa fa-angle-right"></i>
                        <a href="/#">Pay Rent</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <hr className="dropdown-divider"/>
        <div className="footer-bottom">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-12">
                <p>Copyright © 2020 Room Rent Technologies Pvt. Ltd.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
