import React from "react";
import "./Footer.css";
import footer_icon from "../../assets/icon/footer_icon.svg";
import { RiWhatsappFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__start">
          <div className="footer__card">
            <img src={footer_icon} alt="" />
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer__card">
            <h3>Contact us</h3>
            <p>
              E: info@example.com P: 
              <br />
              +94 7670000000 
              <br />
              A: 123 Hospital rd,
              <br />
              Kalubowila, Dehiwela
            </p>
          </div>
          <div className="footer__card">
            <h3>Useful links</h3>
            <p>
              {" "}
              Shop All <br /> Tempered Glass <br /> Back-cover <br /> About Us
            </p>
          </div>
          <div className="footer__card">
            <div className="footer__group">
              <RiWhatsappFill />
              <p>Whatsapp</p>
            </div>
            <div className="footer__group">
              <FaFacebook/>
              <p>Facebook</p>
            </div>
            <div className="footer__group">
              <PiInstagramLogoFill />
              <p>Instagram</p>
            </div>
            <div className="footer__group">
              <AiFillTikTok />
              <p>Tik Tok</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
