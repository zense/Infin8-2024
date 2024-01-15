import React from "react";
import "./SponsorCard.css";
// use width=60 for smaller cards and width =
const SponsorCard = ({ sponsor }) => {
  return (
    <div className={`md:w-92 flex flex-col sponsor-card`}>
      <div className="image-container">
        <img
          className={`image w-full image`}
          src={sponsor.logo}
          alt={sponsor.name}
        />
      </div>
      <div className="bg-yellow sponsor flex items-center justify-center text-xl">
        <span>{sponsor.name}</span>
      </div>
    </div>
  );
};

export default SponsorCard;
