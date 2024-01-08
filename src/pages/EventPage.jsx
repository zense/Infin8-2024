import React from "react";
import vector3 from "../assets/vector3.png";
import vector2 from "../assets/vector2.png";
import "./EventPage.css";
import back from "../assets/back.png";
import white_img from "../assets/white_img.png";
import { Link } from "react-router-dom";
const EventPage = () => {
  return (
    <>
      <div className="flex bg-purple w-screen eventpage-container">
        <div className="bg-purple relative w-2/3 flex flex-col upper-text-eventpage">
          <div className="flex items-center p-5">
            <img className="mr-1 size-3" src={back} alt="Back Image" />
            <Link to={"/events"} className="text-white sm:text-2xl back block">
              EVENTS
            </Link>
          </div>

          <div className="text-white flex competitionName w-full h-1/2 items-center justify-start px-12 text-6xl sm:text-9xl">
            <div className="">Competiton Name</div>
          </div>

          <div className="text-white text-xl sm:text-3xl text-right h-1/2 flex flex-col items-end justify-center px-3 sm:px-12 pb-8 sm:pb-0">
            <div className="h1">Last Date to Register</div>
            <div className="h2 text-3xl sm:text-5xl pb-5 sm:pb-12">
              20 February 2024
            </div>
            <div className="h1">Prize pool</div>
            <div className="h2 text-3xl sm:text-5xl">Rs.1,00,000</div>
          </div>

          <img className="absolute flower1" src={vector2}></img>
        </div>

        <div className="flex items-center flex-col bg-dark-purple flex justify-center md:w-1/3 eventpage-image sm:pb-0 pb-12">
          <img className=" mt-10 w-3/4" src={white_img} alt="White Image" />
          <button className=" text-white text-4xl reg h-20 w-3/4 bg-blue">
            REGISTER
          </button>
        </div>
      </div>
      <div className="w-screen blue-stripe bg-blue hidden md:block"></div>

      {/* Additional Content Section */}

      <div className="flex flex-col h-auto pb-16  bg-red main">
        <div className="faqs-heading-container flex w-screen items-center justify-center">
          <div className="text-red faqs-heading flex items-center justify-center text-3xl">
            About
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="bg-yellow h-auto w-5/6 p-7 sm:text-2xl text-red font-medium rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            minima ipsa eius quis nam ea consequatur cupiditate, sunt eos
            voluptatibus impedit quaerat fuga in consectetur error suscipit,
            ipsam voluptatem aperiam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Adipisci voluptatem totam deleniti, alias,
            obcaecati ratione at sapiente excepturi expedita distinctio dolores,
            dolore cupiditate quo ducimus ut inventore! Officiis, ratione.
            Voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore veritatis praesentium fuga placeat, reiciendis, enim non
            nostrum tempore sit earum repudiandae consequatur laboriosam at
            cupiditate asperiores nemo exercitationem quaerat fugit?
          </div>
        </div>

        <div className="faqs-heading-container flex w-screen items-center justify-center">
          <div className="text-red faqs-heading flex items-center justify-center text-3xl">
            Rules
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="bg-yellow h-auto w-5/6 p-7 sm:text-2xl text-red font-medium rounded-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            minima ipsa eius quis nam ea consequatur cupiditate, sunt eos
            voluptatibus impedit quaerat fuga in consectetur error suscipit,
            ipsam voluptatem aperiam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Adipisci voluptatem totam deleniti, alias,
            obcaecati ratione at sapiente excepturi expedita distinctio dolores,
            dolore cupiditate quo ducimus ut inventore! Officiis, ratione.
            Voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolore veritatis praesentium fuga placeat, reiciendis, enim non
            nostrum tempore sit earum repudiandae consequatur laboriosam at
            cupiditate asperiores nemo exercitationem quaerat fugit?
          </div>
        </div>
      </div>

      <div className="bg-purple w-screen p-10   px-0 flex justify-center">
        <div className="bg-blue w-5/6 flex p-7">
          <div className=" sm:w-1/4 w-1/2 p-4 sm:p-7 flex flex-col justify-center items-center gap-5 ">
            <img src={vector3}></img>
            <div className="contact text-dark-purple text-xl sm:text-3xl text-center flex items-center justify-center">
              Contact the Organisers
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  items-center justify-center sm:w-3/4 w-1/2 gap-4 sm:gap-9 sm:text-3xl p-3">
            <div className="flex flex-col person  text-dark-purple items-center justify-center">
              Person 1:
              <div className="">+91XXXXXXXXXX</div>
            </div>
            <div className="flex flex-col person text-dark-purple items-center justify-center">
              Person 2:
              <div className="">+91XXXXXXXXXX</div>
            </div>
            <div className="flex flex-col person text-dark-purple items-center justify-center text-center">
              Person 3:
              <div className="">+91XXXXXXXXXX</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
