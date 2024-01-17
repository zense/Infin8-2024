// EventCardNew.js

import React from "react";
import "./EventCardNew.css";

const EventCardNew = ({
  name,
  Rollno,
  colour,
  imageDestination,
  addShadows,
}) => {
  return (
    <div className={`max-w-xs overflow-hidden bg-white shadow1`}>
      <img
        className="object-cover w-full h-40 shadow"
        src={imageDestination}
        alt={`${name}'s profile`}
        style={{height: "370px" }}
      />
      <div
        className={`p-4 bg-${colour} flex flex-col justify-center items-center shadow text-white`}
        style={{height: "150px " }}
      >
        <h2 className="text-4xl text1 text-center mb-1">{name}</h2>
        <p className="text-4xl text2">{Rollno}</p>
      </div>
    </div>
  );
};

export default EventCardNew;
