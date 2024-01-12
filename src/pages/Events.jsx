import events from "../content/Events";
import "./Events.css";
import Footer from "../components/Footer/Footer";
import TeamCard from "../components/TeamCard/TeamCard"
import eventsDesign from "../assets/events-dots.svg"
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <>
      <div className="events-wrapper bg-blue w-screen">
        <div className="events-header flex justify-center items-center relative w-screen">
          <Link className="absolute button-back-events top-0 left-0 text-white text-xl p-4 font-bold" to={"/"} >&lt; Back</Link>
          <img src={eventsDesign} className="rotate-180 w-12 md:w-auto" alt="" />
          <h1 className="events-heading text-5xl md:text-9xl text-yellow px-3 md:px-9 py-20">EVENTS</h1>
          <img src={eventsDesign} className="w-12 md:w-auto" alt="" />
        </div>
        <div className="event-cards flex flex-wrap items-center justify-center 2xl:px-32 md:pt-10 pb-20">
          <div className="flex flex-wrap items-center justify-center gap-20 2xl:gap-36 md:gap-32">
          {events.map((event,index)=>(<Link to={`/events/${index}`}><TeamCard name={"Name"} Rollno={"Prizemoney"} colour={"purple"} imageDestination = "https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" /></Link>))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
