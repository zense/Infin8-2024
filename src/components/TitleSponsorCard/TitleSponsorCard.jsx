import React from "react";
import "./TitleSponsorCard.css";

// use width=60 for smaller cards and width =
const TitleSponsorCard = ({ sponsor }) => {
  return (
    //change width value according to the page
    <div className={`bg-blue flex flex-col`} style={{ width: "550px" }}>
      <div className="image-container">
        <img
          className={` w-full image`}
          src={sponsor.logo}
          alt={sponsor.name}
        />
      </div>
      <div className="bg-yellow sponsor flex items-center justify-center text-2xl">
        <span>{sponsor.name}</span>
      </div>
    </div>
  );
};

export default TitleSponsorCard;
