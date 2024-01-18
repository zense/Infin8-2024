import React, { useEffect } from "react";
import "./TeamCard.css";

const TeamCard = ({ name, Rollno, colour, imageDestination,link }) => {
  return (
    <div className="card-team overflow-hidden bg-white shadow-lg">
      <img
        className="object-cover w-full h-40"
        src={imageDestination}
        alt={`${name}'s profile`}
        style={{ width: "340px", height: "270px" }}
      />
      <a href={link} target="_blank">
      <div
        className={` bg-${colour} flex flex-col justify-center items-center   text-white`}
        style={{ width: "auto", height: "155px" }}
        >
        <i className="fa-brands fa-instagram text-4xl pb-2"></i>
        <h2 className="text-3xl text1 text-center  mb-4">{name}</h2>
        <p className="text-2xl text2">{Rollno}</p>
      </div>
        </a>
    </div>
  );
};

export default TeamCard;
