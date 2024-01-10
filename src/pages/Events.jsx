import events from "../content/Events";
import EventCard from "../components/EventCard/EventCard";
import "./Events.css";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
const Events = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-purple h-full">
        <div className="flex ">
        <div className="flex justify-between ">
          <div>
            <h1 className="ml-2 text-8xl text-yellow  title ">Events</h1>
          </div>
          {/* <div
            className="bg-yellow text-red rounded-md text-center h-10 px-4 text-2xl mr-5 mt-4 cursor-pointer heading  "
            onClick={() => navigate("/")}
          >
            Home
          </div> */}
        </div>
        </div>
        <h3 className="ml-10 text-textblue register text-4xl font-normal mb-4">
          Register here
        </h3>

        <div className="">
          <hr style={{ border: " 1px solid black" }} />
          <p className="my-2 games text-xl text-textdarkblue font-medium truncate ">
            Valorant. Stand-Up. DJ-Night. Call Of Duty. Duet Dance Valorant.
            Stand-Up. DJ-Night. Call Of Duty. Duet Dance Valorant.Stand-Up.
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
            eventId={element.eventId}
          />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Events;
