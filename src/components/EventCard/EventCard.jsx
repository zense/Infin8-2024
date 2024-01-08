import React from "react";
import PropTypes from "prop-types";
import "./EventCard.css";
import {Link} from 'react-router-dom'
const EventCard = ({
  title,
  description,
  eventId,
  image,
  prizes: { first, second },
}) => {
    const totalPrize=first+second;
    const link="/events/"+eventId;
  return (
    <div className="event-card ">
    <Link to={link}>
            <img src={image} alt="event-image" className="card-img" />
    </Link>
      <h1 className="card-text">{title}</h1>
      <h1 className="incentive-text mt-2">Prize Pool: {totalPrize} Rs.</h1>
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
