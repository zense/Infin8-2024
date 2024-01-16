import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import IIITBlogo from "../../assets/IIITBlogo.png";
import infin8whitelogo from "../../assets/infin8white.svg";
import { Link, useLocation, useParams } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    
    <div className="w-screen  bg-bgredlight footer" id="contactus">
      <div className="skewtext flex items-center justify-center relative ">
        <div className="infin8-text bg-yellow text-bgredlight absolute flex text-8xl p-5">
          <p className="moving-infin8 w-screen">
            INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;
          </p>
        </div>
      </div>
      <div className="handles flex">
        <div className="logos w-3/5 flex items-center justify-start pl-40 gap-20">
        <Link to={"/"} className="text-white sm:text-2xl back block" onClick={scrollToTop}>
      <img src={infin8whitelogo} alt="" />
    </Link>
          <a href="https://www.iiitb.ac.in/" target="_blank">
          <button >
          <img src={IIITBlogo} alt="" />
          </button>
          </a>
        </div>
        <div className="contact-footer w-2/5 h-full flex flex-col text-yellow text-3xl font-semibold items-center justify-center">
          <div className="h-full flex flex-col text-yellow text-3xl font-semibold items-center justify-center pb-6">
            <h1 className="text-5xl font-bold pb-9">Get in touch.</h1>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://twitter.com/infin8_iiitb">Twitter
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://www.instagram.com/infin8_iiitb/">Instagram
              <i class="fa-brands fa-instagram"></i>
              </a>
              
            </div>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://www.facebook.com/infin8.iiitb/">Facebook
              <i class="fa-brands fa-facebook"></i></a>

              
            </div>
            <div className="flex justify-between w-full">
              <a className="flex items-center justify-between w-full" href="https://www.linkedin.com/company/infin8-iiitb/">LinkedIn
              <i class="fa-brands fa-linkedin"></i></a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
