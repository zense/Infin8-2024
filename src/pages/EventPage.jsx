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
            <Link
              to={"/events"}
              className="text-white text-2xl back hidden md:block"
            >
              EVENTS
            </Link>
          </div>

          <div className="text-white flex competitionName w-full h-1/2 items-center justify-start px-12 text-9xl">
            <div className="">Competiton Name</div>
          </div>

          <div className="text-white text-3xl text-right h-1/2 flex flex-col items-end justify-center px-12">
            <div className="h1">Last Date to Register</div>
            <div className="h2 text-5xl pb-12">20 February 2024</div>
            <div className="h1">prize pool</div>
            <div className="h2 text-5xl">Rs.1,00,000</div>
          </div>

          <img className="absolute flower1" src={vector2}></img>
        </div>

          <div className="flex items-center flex-col bg-dark-purple flex justify-center md:w-1/3 eventpage-image">
            <img className=" mt-10 w-3/4" src={white_img} alt="White Image" />
            <button className=" text-white text-4xl reg h-20 w-3/4 bg-blue">
              REGISTER
            </button>
          </div>

      </div>
      <div className="w-screen blue-stripe bg-blue hidden md:block"></div>

      {/* Additional Content Section */}

      <div className="flex flex-col h-screen  bg-red main">
        <div className="flex flex-row justify-center w-full h-1/6">
          <div className="smallBox1 text-yellow bg-yellow  mt-14 mr-10">
            hello
          </div>
          <div className="bg-yellow mt-10 ml-0 h-1/2 w-1/6 text-white text-right flex flex-col justify-center  headBoxL ">
            <div className="text-red about text-4xl">Abo</div>
          </div>
          <div className="bg-yellow mt-10 ml-0 h-1/2 w-1/6 flex flex-col justify-center  headBoxR">
            <div className="about text-red text-4xl">ut</div>
          </div>
          <div className="smallBox1 text-yellow bg-yellow  mt-14 ml-10 ">
            hello
          </div>
        </div>

        <div className="flex justify-center w-full h-2/6">
          <div className="bg-yellow   h-/4 w-5/6">hell</div>
        </div>
        <div className="flex flex-row justify-center w-full h-1/6">
          <div className="smallBox1 text-yellow bg-yellow  mt-14 mr-10">
            hello
          </div>
          <div className="bg-yellow mt-10 ml-0 h-1/2 w-1/6 text-white text-right flex flex-col justify-center  headBoxL ">
            <div className="text-red about text-4xl">Rul</div>
          </div>
          <div className="bg-yellow mt-10 ml-0 h-1/2 w-1/6 flex flex-col justify-center  headBoxR">
            <div className="about text-red text-4xl">es</div>
          </div>
          <div className="smallBox1 text-yellow bg-yellow  mt-14 ml-10 ">
            hello
          </div>
        </div>
        <div className="flex justify-center w-full h-2/6">
          <div className="bg-yellow   h-/4 w-5/6">hell</div>
        </div>
      </div>

      <div className="bg-purple w-screen h-80 flex justify-center">
        <div className="bg-blue  mt-10 h-3/4 w-5/6 flex justify-evenly ">
          <div className="mt-10 flex-col ">
            <img src={vector3}></img>
            <div className="mt-5 w-1/2 contact text-dark-purple text-3xl">
              Contact the Organisers
            </div>
          </div>
          <div className="mt-10 flex-col person text-3xl text-dark-purple">
            person1
            <div className="mt-5 w-1/2">+91XXXXXXXXXX</div>
          </div>
          <div className="mt-10 flex-col  person text-3xl text-dark-purple">
            person2
            <div className="mt-5 w-1/2">+91XXXXXXXXXX</div>
          </div>
          <div className="mt-10 flex-col  person text-3xl text-dark-purple">
            person3
            <div className="mt-5 w-1/2">+91XXXXXXXXXX</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPage;
