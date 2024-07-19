import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const quicklinks = ["Home", "About Us", "Services", "Contact Us"];
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <h2 className="quicklink-logo">fgg</h2>
            <div className="facebook">Follow us on Facebook</div>

            <h4 className="quick-links">Quick Links</h4>
            {quicklinks.map((link, index) => {
              return (
                <Link
                  to={
                    link === "Home"
                      ? "/"
                      : link === "About Us"
                        ? "/about"
                        : link
                  }
                  key={index}
                  className="quicklinks-items"
                >
                  {/* <h4> */}
                  {link}

                  {/* </h4> */}
                </Link>
              );
            })}
          </div>
          <div className="footer-right">
            <h3 className="footer-contact-info">Contact Info</h3>
            <p className="footer-address">
              Moidhali pathar, Domal Road, <br /> Morigaon, Assam, 782105{" "}
            </p>
            <p className="footer-phone">+91-8822686715, +91-9435201000</p>
            <p className="footer-email">sultanhospital2017@gmail.com</p>
          </div>
        </div>
        <div className="footer2">
          <div className="line"></div>
          <h3>
            © Copyright Sultan Hospital - All Rights Reserved | Developed by
            <span className="bytesizedsolutions"> BiteSizedSolutions</span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Footer;
