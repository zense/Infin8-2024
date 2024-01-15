import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Sponsers.css";
import { MdOutlineMail } from "react-icons/md";
import SponsorCard from "../components/SponsorCard/SponsorCard";
import TitleSponsorCard from "../components/TitleSponsorCard/TitleSponsorCard";
import sponsors from "../content/sponsors";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Footer from "../components/Footer/Footer";
import design from "../assets/vec2.svg";

const Sponsors = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sponsors-wrapper bg-purple w-screen ">
        <div className="events-header flex justify-center items-center relative w-screen pb-4">
          <Link
            className="absolute button-back-events top-0 left-0 text-white text-xl md:text-2xl p-4 font-bold"
            to={"/"}
          >
            &lt; Back
          </Link>
          <img src={design} className="rotate-180 w-10 md:w-auto" alt="" />
          <h1 className="heading text-5xl md:text-9xl text-yellow px-3 md:px-9 py-16 pb-20">
            SPONSORS
          </h1>
          <img src={design} className="w-10 md:w-auto" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center">
        <div className="titleS flex justify-center items-center">
            Title Sponsor
          </div>
          <div className="md:pt-10">
            <TitleSponsorCard
              sponsor={{ name: "Infin8", logo: "https://st2.depositphotos.com/3588977/9960/i/600/depositphotos_99605378-stock-photo-lilac-breasted-roller.jpg" }}
            />
          </div>
          <div className="partners flex justify-center items-center mt-32 mb-10">
            Our Partners
          </div>
          <div className="event-cards flex flex-wrap items-center justify-center 2xl:px-32 md:pt-1 pb-40">
            <div className="flex flex-wrap items-center justify-center gap-20 2xl:gap-36 md:gap-30" >
            {sponsors.map((element) => (
              <SponsorCard
                key={element.id}
                sponsor={{ name: element.name, logo: "https://st2.depositphotos.com/3588977/9960/i/600/depositphotos_99605378-stock-photo-lilac-breasted-roller.jpg" }}
              />
            ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" contactd flex flex-col items-center justify-center">
        <div className="contact flex justify-center items-center mt-16">
          <h1>Contact Us</h1>
        </div>
        <div className="flex mt-10 gap-10">
        <div className="flex flex-col sm:flex-row items-center justify-around">
  <div className="flex flex-col items-center justify-around box w-full sm:w-1/3">
    <MdOutlineMail style={{ width: "4.6875rem", height: "3.75rem" }} />
    <h1 className="box-text">Email Us</h1>
    <p>sac@iiitb.ac.in</p>
  </div>
  <div className="flex flex-col items-center justify-around box w-full sm:w-1/3">
    <IoCallOutline style={{ width: "4.6875rem", height: "3.75rem" }} />
    <h1 className="box-text">Call Us</h1>
    <pre>Nathan: +91 8848839946</pre>
    <p>Divyam: +91 7717608434</p>
  </div>
  <div className="flex flex-col box w-full sm:w-1/3 items-center justify-around">
    <FaInstagram style={{ width: "4.6875rem", height: "3.75rem" }} />
    <h1 className="box-text">Connect with us</h1>
    <p>@infin8_iiitb</p>
  </div>
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
