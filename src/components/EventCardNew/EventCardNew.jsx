// EventCardNew.js

import React from "react";
import "./EventCardNew.css";

const EventCardNew = ({ name, Rollno, colour, imageDestination, addShadows }) => {
  return (
    <div className={`max-w-xs overflow-hidden bg-white shadow1`}>
      <img
        className="object-cover w-full h-40 shadow"
        src={imageDestination}
        alt={`${name}'s profile`}
        style={{ width: "340px", height: "370px" }}
      />
      <div
        className={`p-4 bg-${colour} flex flex-col justify-center items-center  shadow  text-white`}
        style={{ width: "340px", height: "95px " }}
      >
        <h2 className="text-3xl text1  mb-4">{name}</h2>
        <p className="text-2xl text2">{Rollno}</p>
      </div>
    </div>
  );
};

export default EventCardNew;
