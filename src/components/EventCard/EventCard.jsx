import React from "react";
import PropTypes from "prop-types";
import "./EventCard.css";
const EventCard = ({
  title,
  description,
  image,
  prizes: { first, second },
}) => {
  return (
    <div className="event-card ">
      <img src={image} alt="event-image" className="card-img" />
      <h1 className="card-text">{title}</h1>
      <p className="text-yellow text-lg para">{description}</p>
      <h1 className="incentive-text mt-2">First Prize: {first}</h1>
      <h1 className="incentive-text mt-1">Second Prize: {second}</h1>
    </div>
  );
};
EventCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  prizes: PropTypes.shape({
    first: PropTypes.number,
    second: PropTypes.number,
  }).isRequired,
};
export default EventCard;