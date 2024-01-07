import React from "react";
import { SocialIcon } from "react-social-icons";
import events from "../content/Events";
import EventCard from "../components/EventCard/EventCard";
import "./Events.css";
import Footer from "../components/Footer/Footer";
const Events = () => {
  return (
    <>
      <div className="bg-purple h-full">
        <div className="flex flex-col">
          <h1 className="ml-2 text-4xl text-yellow title ">Events</h1>
          <h3 className="ml-10 text-textblue register text-4xl font-normal mb-4">
            Register here
          </h3>
        </div>

        <div className="">
          <hr style={{ border: " 1px solid black" }} />
          <p className="my-2 games text-xl text-textdarkblue font-medium ">
            Valorant. Stand-Up. DJ-Night. Call Of Duty. Duet Dance
          </p>
          <hr style={{ border: " 1px solid black" }} />
        </div>
      </div>
      {/* to add cards */}
      <div className="  card-container">
        {events.map((element, index) => (
          <EventCard
            key={index}
            title={element.title}
            description={element.description}
            image={element.image}
            prizes={element.prizes}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Events;
