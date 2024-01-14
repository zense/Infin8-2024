import events from "../content/Events";
import "./Events.css";
import Footer from "../components/Footer/Footer";
import EventCardNew from "../components/EventCardNew/EventCardNew";
import eventsDesign from "../assets/events-dots.svg";
import { Link } from "react-router-dom";
import { Eventss } from "../content/Events";

const Events = () => {
  return (
    <>
      <div className="events-wrapper bg-yellow w-screen">
        <div className="events-header flex justify-center items-center relative w-screen">
          <Link
            className="absolute button-back-events top-0 left-0 text-white text-xl md:text-2xl p-4 font-bold"
            to={"/"}
          >
            &lt; Back
          </Link>
          <img src={eventsDesign} className="rotate-180 w-12 md:w-24" alt="" />
          <h1 className="events-heading text-5xl md:text-8xl text-red px-3 md:px-9 py-20">
            EVENTS
          </h1>
          <img src={eventsDesign} className="w-12 md:w-24" alt="" />
        </div>
        {Eventss.map((eventsOfDay, index) => (
          <>
            <div className="flex justify-center items-center day-heading text-yellow mt-5 mb-10">
              <h1 className="bg-red w-60 text-center py-3 text-2xl">{`Day ${
                index + 1
              }`}</h1>
            </div>
            <div className="event-cards flex flex-wrap items-center justify-center 2xl:px-32 md:pt-10 pb-40">
              <div className="flex flex-wrap items-center justify-center gap-20 2xl:gap-36 md:gap-32">
                {eventsOfDay.map((event) => (
                  <Link to={`/events/${event.eventId}`}>
                    <EventCardNew
                      name={event.title}
                      Rollno={"Prize pool : " + event.prizePool}
                      colour={"red"}
                      addShadows={true}
                      imageDestination={
                        "https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75"
                      }
                    />
                  </Link>
                ))}
              </div>
            </div>
          </>
        ))}
        <div className="flex justify-center items-center day-heading text-yellow mt-5 mb-20">
          <h1 className="bg-red w-60 text-center py-3 text-2xl">Day 1</h1>
        </div>
        <div className="event-cards flex flex-wrap items-center justify-center 2xl:px-32 md:pt-10 pb-40">
          <div className="flex flex-wrap items-center justify-center gap-20 2xl:gap-36 md:gap-32">
            {events.map((event) => (
              <Link to={`/events/${event.eventId}`}>
                <EventCardNew
                  name={event.title}
                  Rollno={"Prize pool : " + event.prizePool}
                  colour={"red"}
                  addShadows={true}
                  imageDestination={
                    "https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75"
                  }
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
