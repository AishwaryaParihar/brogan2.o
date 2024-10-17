import React from "react";
import './footer.css'

function Footer() {

  return (
    <>

      {/* <!-- foooter section start  --> */}
      <div className="footer container-fluid border-top">
        {/* footer-content  */}
        <div className=" row d-flex flex-wrap container-footer text-white">
          <div className="footer-col">
            <h3>About Brogan Boots</h3>
            <p>Brogan Boots was built out of frustration to make trade-offs between – clunky and delicate dress boots that fall apart after a few wears, or boots that were incredibly overpriced? And it is when I decided, there has to be another option.</p>
            <p>At Brogan Boots we offer ridiculously high quality footwear that are designed, developed and hand craftedin-house by our efficient and highly skilled artisans, drawing inspiration from the world around us and our amazing customers.</p>
          </div>

          <div className="footer-col">
            <h3>Our Category</h3>
            <ul className="footer-col-ul">
              <li>
                <a href="#">Rugged</a>
              </li>
              <li>
                <a href="/about-us.html">Suede</a>
              </li>
              <li>
                <a href="/ourProducts.html">Chelsea</a>
              </li>
              <li>
                <a href="/globalPresence.html">Lace-up</a>
              </li>
              <li>
                <a href="/CYD.html">All Styles</a>
              </li>
              <li>
                <a href="/contactUs.html">Stomper</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-col-ul">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="/about-us.html">Contact Us</a>
              </li>
              <li>
                <a href="/terms-conditions">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/cancel-policy">Cancellation Policy</a>
              </li>
              <li>
                <a href="/refund">Replacement & Refund Policy</a>
              </li>
              <li>
                <a href="/shipment-policy">Shipment Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Registered Business Address</h3>
            
            <ul className="footer-col-ul">
              <li>
              <li>
               <a href="">Brogan Boots</a>
              </li>
                <a
                  href="https://maps.app.goo.gl/rre5G1zuKzgNTFs67"
                  target="_blank"
                >
                  663-B, Pocket-B, DDA Flats, Hari Nagar, Near Tilak Nagar Metro Station, New Delhi – 110064
                 
                </a>
              </li>
             
              <li>
                <a href="#">+91 76111 89837</a>
              </li>
              
              <li>
                <a href="/ourProducts.html">broganboots19@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* <div className="footer-col">
            <h3>Contact us</h3>

            <div className="social-links">
              <a href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div> */}
        </div>
       
      </div>
      <div className="bg-dark">
      <div className="container">
      <div className="row container-footer bg-dark text-white">
          <div className="col-md-6 order-2 order-md-1">
            {" "}
            &#169; 2024, Brogan Boots, All rights reserved
          </div>
          <div className="col-md-6 order-1 order-md-2">
          <span className="text-white footer-col-ul d-flex justify-content-end gap-2  text-end">Developed by: SSS Technologies</span>
          </div>
        </div>
      </div>
      </div>
      {/* foooter section start  */}
    </>
  );
}

export default Footer;
