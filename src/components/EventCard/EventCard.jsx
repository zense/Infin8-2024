import React from "react";
import PropTypes from "prop-types";
import "./EventCard.css";
import {Link,Navigate} from 'react-router-dom'
import { useEffect } from "react";
const EventCard = ({
  title,
  description,
  eventId,
  image,
  prizes: { first, second },
}) => {
    const totalPrize=first+second;
    const link="/events/"+eventId;
    const handleClick=()=>{
        history.replace(link)
        window.scrollTo(0,0)
    }
  return (
    <div className="event-card ">
    <Link to={link} onClick={handleClick}>
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
