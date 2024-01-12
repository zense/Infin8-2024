import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import IIITBlogo from "../../assets/IIITBlogo.png";
import infin8whitelogo from "../../assets/infin8white.svg";

const Footer = () => {
  return (
    <div className="w-screen  bg-bgredlight footer" id="contactus">
      <div className="skewtext flex items-center justify-center relative ">
        <div className="infin8-text bg-yellow text-bgredlight absolute flex text-8xl p-5">
          <p className="moving-infin8 w-screen">
            INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;2024.&nbsp;INFIN8.&nbsp;
          </p>
        </div>
      </div>
      <div className="handles   flex">
        <div className="logos w-3/5 flex items-center justify-start pl-40 gap-20">
          <img src={infin8whitelogo} alt="" />
          <img src={IIITBlogo} alt="" />
        </div>
        <div className="contact w-2/5 h-full flex flex-col text-yellow text-3xl font-semibold items-center justify-center">
          <div className="h-full flex flex-col text-yellow text-3xl font-semibold items-center justify-center pb-6">
            <h1 className="text-5xl font-bold pb-9">Get in touch.</h1>
            <div className="flex justify-between w-full">
              <a href="https://twitter.com/infin8_iiitb">Twitter</a>
              <SocialIcon
                bgColor="#E5203B"
                fgColor="yellow"
                url="https://twitter.com/infin8_iiitb"
              />
            </div>
            <div className="flex justify-between w-full">
              <a href="https://www.instagram.com/infin8_iiitb/">Instagram</a>
              <SocialIcon
                bgColor="#E5203B"
                fgColor="yellow"
                url="https://www.instagram.com/infin8_iiitb/"
              />
            </div>
            <div className="flex justify-between w-full">
              <a href="https://www.facebook.com/infin8.iiitb/">Facebook</a>
              <SocialIcon
                bgColor="#E5203B"
                fgColor="yellow"
                url="https://www.facebook.com/infin8.iiitb/"
              />
            </div>
            <div className="flex justify-between w-full">
              <a href="https://www.linkedin.com/company/infin8-iiitb/">LinkedIn</a>
              <SocialIcon
                bgColor="#E5203B"
                fgColor="yellow"
                url="https://www.linkedin.com/company/infin8-iiitb/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
