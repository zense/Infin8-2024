import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sponsers.css";
import { MdOutlineMail } from "react-icons/md";
import SponsorCard from "../components/TitleSponsorCard/TitleSponsorCard";
import sponsors from "../content/sponsors";

const Sponsors = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-purple flex flex-col justify-center items-center">
        <div
          className="text-xl text-white ml-0 left-0"
          onClick={() => navigate(-1)}
        >
          &lt;Back
        </div>
        <div>
          <img src="../assets/sponsordesign.svg" alt="" />
          <h1 className="heading">SPONSORS</h1>

          <img src="../assets/sponsordesign.svg" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="titleS flex justify-center items-center">
            <h1>Title Sponsor</h1>
          </div>
          <div className="mt-10 ">
            <SponsorCard sponsor={{ name: "Infin8", logo: "amazon.webp" }} />
          </div>
          <div className="partners flex justify-center items-center mt-10">
            Our Partners
          </div>
          <div className="flex justify-between flex-wrap m-5 gap-9 ">
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
        <div className="contact flex justify-center items-center">
          <h1>Contact Us</h1>
        </div>
        <div className="flex mt-10 gap-10">
          <div className="flex flex-col box w-1/3">
            <MdOutlineMail style={{ width: "4.6875rem", height: "3.75rem" }} />
            <h1 className="box-text">Email Us</h1>
          </div>
          <div className="flex flex-col box w-1/3">
            <img src="../assets/phone.svg" alt="" />
            <h1>Call Us</h1>
            <pre>Nathan: +91 8848839946</pre>
            <p>Divyam: +91 7717608434</p>
          </div>
          <div className="flex flex-col box w-1/3">
            <img src="../assets/phone.svg" alt="" />
            <h1>Connect with us</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
