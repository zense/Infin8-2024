import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sponsers.css";
import { MdOutlineMail } from "react-icons/md";
import SponsorCard from "../components/TitleSponsorCard/TitleSponsorCard";
import sponsors from "../content/sponsors";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import design from "../assets/sponsordesign.svg";
import design1 from "../assets/spd.svg";

const Sponsors = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="text-xl text-white ml-0 bg-purple cursor-pointer left-0"
        onClick={() => navigate(-1)}
      >
        &lt;Back
      </div>
      <div className="bg-purple flex flex-col justify-center items-center">
        <div className="flex">
          <img src={design1} alt="" />
          <h1 className="heading">SPONSORS</h1>

          <img src={design} alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="titleS flex justify-center items-center">
            <h1>Title Sponsor</h1>
          </div>
          <div className="mt-10 ">
            <SponsorCard sponsor={{ name: "Infin8", logo: "amazon.webp" }} />
          </div>
          <div className="partners flex justify-center items-center my-16">
            Our Partners
          </div>
          <div className="flex justify-between flex-wrap m-5 gap-11 ">
            {sponsors.map((element) => (
              <SponsorCard
                key={element.id}
                sponsor={{ name: element.name, logo: element.logo }}
              />
            ))}
          </div>
        </div>
      </div>
      <div className=" contactd flex flex-col items-center justify-center">
        <div className="contact flex justify-center items-center mt-16">
          <h1>Contact Us</h1>
        </div>
        <div className="flex mt-10 gap-10">
          <div className="flex flex-col items-center justify-around box w-1/3">
            <MdOutlineMail style={{ width: "4.6875rem", height: "3.75rem" }} />
            <h1 className="box-text">Email Us</h1>
            <p>sac@iiitb.ac.in</p>
          </div>
          <div className="flex flex-col items-center justify-around box w-1/3">
            {/* <img src="../assets/phone.svg" alt="" /> */}
            <IoCallOutline style={{ width: "4.6875rem", height: "3.75rem" }} />
            <h1 className="box-text">Call Us</h1>
            <pre>Nathan: +91 8848839946</pre>

            <p>Divyam: +91 7717608434</p>
          </div>
          <div className="flex flex-col box w-1/3 items-center justify-around">
            {/* <img src="../assets/phone.svg" alt="" /> */}
            <FaInstagram style={{ width: "4.6875rem", height: "3.75rem" }} />
            <h1 className="box-text">Connect with us</h1>
            <p>@infin8_iiitb</p>
          </div>
        </div>
        <div className="mt-16">
          <Footer />{" "}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
