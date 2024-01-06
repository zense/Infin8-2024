import React from "react";
import { SocialIcon } from "react-social-icons";
import events from "../content/Events";
import EventCard from "../components/EventCard/EventCard"
import "./Events.css"
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
      <div className="card-container">
        {events.map((element,index)=>(
          <EventCard key={index} title={element.title} description={element.description} image={element.image} prizes={element.prizes} />
        ))}
      </div>
      <div className="bg-red">
        <div className="bg-red h-32"></div>
        <div className=" bg-yellow flex">
          <div className="text-red banner text-7xl font-medium ">
            INFIN8. 2023. INFIN8. 2023. INFIN8. 2023.
          </div>
        </div>

        <div className="flex footer">
          <div className="w-1/2 ">
            <img src="../iiitblogo.png" />
          </div>
          <div className="flex font-medium flex-col text-yellow text-4xl">
            Get in Touch.
            <div className="text-3xl">
              Twitter{" "}
              <SocialIcon
                bgColor="#D90429"
                fgColor="yellow"
                url="https://twitter.com/infin8_iiitb"
              />{" "}
            </div>
            <div className="text-3xl">
              Instagram{" "}
              <SocialIcon
                bgColor="#D90429"
                fgColor="yellow"
                url="https://www.instagram.com/infin8_iiitb/"
              />
            </div>
            <div className="text-3xl">
              Facebook
              <SocialIcon
                bgColor="#D90429"
                fgColor="yellow"
                url="https://www.facebook.com/infin8.iiitb/"
              />
            </div>
            <div className="text-3xl">
              Linkedln
              <SocialIcon
                bgColor="#D90429"
                fgColor="yellow"
                url="https://www.linkedin.com/company/infin8-iiitb/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Events;
