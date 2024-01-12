import React from "react";
import "./SponsorCard.css";
// use width=60 for smaller cards and width = 
const SponsorCard = ({ sponsor,  }) => {
  return (
    <div className={`w-60  bg-blue flex flex-col`}>
      <div className="image-container">
        <img className={`image w-60 image`} src={sponsor.logo} alt={sponsor.name} />
      </div>
      <div className="bg-yellow sponsor flex items-center justify-center text-xl">
        <span>{sponsor.name}</span>
      </div>
    </div>
  );
}

export default SponsorCard;
