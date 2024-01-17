import React, { useEffect, useState } from "react";
import vector3 from "../assets/vector3.png";
import vector2 from "../assets/vector2.png";
import "./EventPage.css";
import back from "../assets/back.png";
import white_img from "../assets/white_img.png";
import { Link, ScrollRestoration, useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import events from "../content/Events";
// import image1 from "../assets/white_img.png";
// import image2 from "../assets/white_img.png";
// import image3 from "../assets/white_img.png";
// import image4 from "../assets/white_img.png";
// import image5 from "../assets/white_img.png";
// import image6 from "../assets/white_img.png";
// import image7 from "../assets/white_img.png";
// import image8 from "../assets/white_img.png";
// import image9 from "../assets/white_img.png";
// import image10 from "../assets/white_img.png";
// import image11 from "../assets/white_img.png";
// import image12 from "../assets/white_img.png";
// import image13 from "../assets/white_img.png";
// import image14 from "../assets/white_img.png";
// import image15 from "../assets/white_img.png";
// import image16 from "../assets/white_img.png";
// import image17 from "../assets/white_img.png";
// import image18 from "../assets/white_img.png";
// import image19 from "../assets/white_img.png";
// import image20 from "../assets/white_img.png";
// import image21 from "../assets/white_img.png";
// import image22 from "../assets/white_img.png";
// import image23 from "../assets/white_img.png";
// import image24 from "../assets/white_img.png";
// import image25 from "../assets/white_img.png";
// import image26 from "../assets/white_img.png";
// import image27 from "../assets/white_img.png";
// import image28 from "../assets/white_img.png";
const EventPage = () => {
  let { id } = useParams();
  useEffect(() => {
    const element = document.getElementById("cont");
    window.scrollTo(0,0)
  }, [])


  const redirectToExternalLink = () => {
    window.location.href = events[Number(id) - 1].link;
    console.log(events[Number(id) - 1].link);
  };
  return (
    <div className="overflow-hidden w-auto" > 
      <div className="flex bg-purple w-screen eventpage-container" id="cont">
        <div className="bg-purple relative w-2/3 flex flex-col  upper-text-eventpage">
          <div className="flex items-center p-5 back-button">
            <Link to={"/events"} className="text-white sm:text-2xl back block" >
              &lt;
              EVENTS
            </Link>
          </div>

          <div className="text-white flex competitionName w-full h-1/2 items-center justify-start px-12 text-6xl sm:text-9xl">
            <div className="">{events[Number(id) - 1].title}</div>
          </div>

          <div className="text-white text-xl sm:text-3xl text-right h-1/2 flex flex-col items-end justify-center px-3 sm:px-12 pb-8 sm:pb-0">
            <div className="h1">Last Date to Register</div>
            <div className="h2 text-3xl sm:text-5xl pb-5 sm:pb-12">
            {events[Number(id) - 1].lastDate}
            </div>
            <div className="h1">Prize pool</div>
            <div className="h2 text-3xl sm:text-5xl">
              Rs. {events[Number(id) - 1].prizePool}
            </div>
          </div>

          <img className="absolute flower1" src={vector2}></img>
        </div>

        <div className="flex items-center flex-col bg-dark-purple flex justify-center md:w-1/3 eventpage-image sm:pb-0 pb-12">
          <img
            className=" mt-10 w-3/4"
            src="/white_img.png"
            alt="White Image"
          />
       
          <button className=" text-white text-4xl reg h-20 w-3/4 bg-blue"  onClick={redirectToExternalLink}>
            REGISTER
          </button>
         
        </div>
      </div>
      <div className="w-screen blue-stripe bg-blue hidden md:block"></div>

      {/* Additional Content Section */}

      <div className="flex flex-col h-auto pb-16 bg-red main">
        <div className="faqs-heading-container flex w-screen items-center justify-center">
          <div className="text-red faqs-heading flex items-center justify-center text-3xl">
            About
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="bg-yellow h-auto w-5/6 p-7 sm:text-2xl text-red font-medium rounded-2xl">
            {events[Number(id) - 1].description}
          </div>
        </div>

        <div className="faqs-heading-container flex w-screen items-center justify-center">
          <div className="text-red faqs-heading flex items-center justify-center text-3xl">
            Rules
          </div>
        </div>

        <div className="flex justify-center w-full">
            <ul className="rules-list bg-yellow h-auto w-5/6 p-7 sm:text-2xl text-red font-medium rounded-2xl">
              {events[Number(id) - 1].rules.map((rule,index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
        </div>
      </div>

      <div className="bg-purple w-screen p-10 contact_bg  px-0 flex justify-center">
        <div className="bg-blue w-5/6 flex p-7">
          <div className=" sm:w-1/4 w-1/2 p-4 sm:p-7 flex flex-col justify-center items-center gap-5 ">
            <img src={vector3}></img>
            <div className="contact-eventpage text-dark-purple text-xl sm:text-3xl text-center flex items-center justify-center">
              Contact the Organisers
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  items-center justify-center sm:w-3/4 w-1/2 gap-4 sm:gap-9 sm:text-3xl p-3">
            {events[Number(id) - 1].contacts.map((contact,index) => (
              <div className="flex flex-col person  text-dark-purple items-center justify-center" key={index}>
                <div>{contact.name}</div>
                <div>{contact.number}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventPage;
