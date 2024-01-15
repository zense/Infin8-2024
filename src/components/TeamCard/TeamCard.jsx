import React, { useEffect } from "react";
import "./TeamCard.css";

const TeamCard = ({ name, Rollno, colour, imageDestination }) => {
  return (
    <div className="max-w-xs overflow-hidden bg-white shadow-lg">
      <img
        className="object-cover w-full h-40"
        src={imageDestination}
        alt={`${name}'s profile`}
        style={{ width: "340px", height: "270px" }}
      />
      <div
        className={`p-4 bg-${colour} flex flex-col justify-center items-center   text-white`}
        style={{ width: "340px", height: "155px" }}
      >
        <h2 className="text-3xl text1  mb-4">{name}</h2>
        <p className="text-2xl text2">{Rollno}</p>
      </div>
    </div>
  );
};

export default TeamCard;
