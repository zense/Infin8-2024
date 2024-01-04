import React from "react";
import { SocialIcon } from "react-social-icons";

const EventPage = () => {
  return (
    <div>
      <div className="bg-purple-500 h-full">
        <div className="flex flex-col">
          <h1 className="ml-2 text-4xl text-yellow-400">Events</h1>
          <h3 className="ml-10 text-teal-500 font-lobster text-4xl font-normal mb-4">
            Register here
          </h3>
        </div>
        <div className="">
          <hr style={{ border: " 1px solid black" }} />
          <p className="my-2 text-xl font-medium font-GloriaHallelujah">
            Valorant. Stand-Up. DJ-Night. Call Of Duty. Duet Dance
          </p>
          <hr style={{ border: " 1px solid black" }} />
        </div>
      </div>
      <div className="bg-red-500">
        <div className=" bg-yellow-300">
          <div className="text-red-600 font-archivo text-7xl font-medium  rotate-5">
            INFIN8. 2023. INFIN8. 2023. INFIN8. 2023.
          </div>
        </div>

        <div className="flex">
          <div className="w-1/2">
            <img src="../iiitblogo.png" />
          </div>
          <div className="flex flex-col text-yellow-300 text-xl">
            Get in Touch.
            <div>
              Twitter{" "}
              <SocialIcon
                bgColor="#EF4444"
                fgColor="yellow"
                url="https://twitter.com/infin8_iiitb"
              />{" "}
            </div>
            <div>
              Instagram{" "}
              <SocialIcon
                bgColor="#EF4444"
                fgColor="yellow"
                url="https://www.instagram.com/infin8_iiitb/"
              />
            </div>
            <div>
              Facebook
              <SocialIcon
                bgColor="#EF4444"
                fgColor="yellow"
                url="https://www.facebook.com/infin8.iiitb/"
              />
            </div>
            <div>
              Linkedln
              <SocialIcon
                bgColor="#EF4444"
                fgColor="yellow"
                url="https://www.linkedin.com/company/infin8-iiitb/"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
