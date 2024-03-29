import React, { useEffect, useState } from "react";
import "./Timeline.css";
import Nukkad from "../../assets/timelineEvents/nukkad.jpg";
import clash from "../../assets/timelineEvents/clash.jpg";
import jijnasa from "../../assets/timelineEvents/jijnasa.jpg";
import lost from "../../assets/timelineEvents/lost.jpg";
import Nrittas from "../../assets/timelineEvents/nrittas.png";
import Nrittag from "../../assets/timelineEvents/nrittag.png";
import cards from "../../assets/timelineEvents/cards.png";
import codm from "../../assets/timelineEvents/codm.png";

import sargam from "../../assets/timelineEvents/sargam.png";
import bgmi from "../../assets/timelineEvents/pubg.png";
import league from "../../assets/timelineEvents/league.png";
import jam from "../../assets/timelineEvents/just.png";
import rang from "../../assets/timelineEvents/stage.png";
import math from "../../assets/timelineEvents/math.png";
import vedanta from "../../assets/timelineEvents/vedanta.png";
import slam from "../../assets/timelineEvents/slam.png";
import casein from "../../assets/timelineEvents/case.png";

import gulp from "../../assets/timelineEvents/gulp.png";
import brush from "../../assets/timelineEvents/brush.png";
import valo from "../../assets/timelineEvents/valo.png";
import fifa from "../../assets/timelineEvents/fifa.png";
import cut from "../../assets/timelineEvents/cut.png";
import ramp from "../../assets/timelineEvents/ramp.png";
import battle from "../../assets/timelineEvents/battle.png";
import photo from "../../assets/timelineEvents/photo.png";
import { Link, useNavigate } from "react-router-dom";

const Timeline = () => {
  const [day, setDay] = useState("btn-1");
  const navigate = useNavigate();

  useEffect(() => {
    const choice = document.getElementById(day);
    const todisable = document.getElementsByClassName("gallery-container");
    const ani = document.getElementById("ani");
    for (let i = 0; i < todisable.length; i++) {
      todisable[i].style.display = "none";
    }
    choice.classList.remove("text-yellow");
    ani.style.transform = `translateX(${
      100 * (Number(day[day.length - 1]) - 1)
    }px)`;
    const toshow = document.getElementById(`events-${day}`);
    toshow.style.display = "flex";
  }, [day]);

  const handleClick = (e) => {
    const choice = document.getElementById(day);
    choice.classList.add("text-yellow");
    setDay(e.target.id);
  };
  const handleNextClick = () => {
    let images = document.getElementsByClassName("gallery-item");
    Array.from(images).forEach((ele) => {
      let idstring = ele.classList[1];
      let id = idstring[idstring.length - 1];
      id = (Number(id) - 1) % 9;
      if (id == 0) {
        id = 9;
      }
      ele.classList.remove(ele.classList[1]);
      ele.classList.add(`gallery-item-${id}`);
    });
  };
  const handlePrevClick = () => {
    let images = document.getElementsByClassName("gallery-item");
    Array.from(images).forEach((ele) => {
      let idstring = ele.classList[1];
      let id = idstring[idstring.length - 1];
      id = (Number(id) + 1) % 9;
      if (id == 0) {
        id = 9;
      }
      ele.classList.remove(ele.classList[1]);
      ele.classList.add(`gallery-item-${id}`);
      console.log(`gallery-item-${id}`);
    });
  };
  return (
    <div className="w-screen gallery-screen flex flex-col bg-bgredlight relative">
      <div className="left-timeline bg-bgreddark w-1/2 h-full absolute"></div>
      <div className="timeline-heading w-full text-yellow flex items-center justify-center text-9xl pt-20">
        <h1>TIMELINE</h1>
      </div>
      <div className="w-full flex items-center justify-center day-btns z-10 text-2xl mt-20">
        <div className="flex border-4 border-yellow rounded-xl relative">
          <span
            className="btn-1 text-yellow cursor-pointer btns text-center"
            id="btn-1"
            onClick={handleClick}
          >
            Day 1
          </span>
          <span
            className="btn-2 text-yellow cursor-pointer btns text-center"
            id="btn-2"
            onClick={handleClick}
          >
            Day 2
          </span>
          <span
            className="btn-3 text-yellow cursor-pointer btns text-center"
            id="btn-3"
            onClick={handleClick}
          >
            Day 3
          </span>
          <div
            className="start-home hover-animation absolute h-full width bg-yellow rounded-sm"
            id="ani"
          ></div>
        </div>
      </div>
      <div className="gallery-container" id="events-btn-1">
        <img
          src={Nukkad}
          className="gallery-item gallery-item-1"
          id="1"
          alt=""
          onClick={()=>navigate("/events/8")}
        />
        <img
          src={clash}
          className="gallery-item gallery-item-2"
          id="2"
          alt=""
          onClick={()=>navigate("/events/23")}
        />
        <img
          src={jijnasa}
          className="gallery-item gallery-item-3"
          id="3"
          alt=""
          onClick={()=>navigate("/events/12")}
        />
        <img src={lost} className="gallery-item gallery-item-4" id="4" alt="" onClick={()=>navigate("/events/14")} />
        <img
          src={Nrittas}
          className="gallery-item gallery-item-5"
          id="5"
          alt=""
          onClick={()=>navigate("/events/1")}
        />
        <img src={Nrittag} className="gallery-item gallery-item-6" alt="" onClick={()=>navigate("/events/24")} />
        <img src={cards} className="gallery-item gallery-item-7" alt="" onClick={()=>navigate("/events/15")} />
        <img src={codm} className="gallery-item gallery-item-8" alt="" onClick={()=>navigate("/events/11")} />
        <img src={lost} className="gallery-item gallery-item-9" alt=""  onClick={()=>navigate("/events/14")}/>
        <button
          onClick={handlePrevClick}
          className="button button-prev bg-yellow rounded-full w-20 h-20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="button button-next bg-yellow rounded-full w-20 h-20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>

      <div className="gallery-container" id="events-btn-2">
        <img
          src={sargam}
          className="gallery-item gallery-item-1"
          id="1"
          alt=""
          onClick={()=>navigate("/events/10")}
        />
        <img src={bgmi} className="gallery-item gallery-item-2" id="2" alt="" onClick={()=>navigate("/events/22")} />
        <img src={slam} className="gallery-item gallery-item-3" id="3" alt="" onClick={()=>navigate("/events/13")}/>
        <img
          src={league}
          className="gallery-item gallery-item-4"
          id="4"
          alt=""
          onClick={()=>navigate("/events/5")}
        />
        <img src={jam} className="gallery-item gallery-item-5" id="5" alt="" onClick={()=>navigate("/events/16")} />
        <img src={rang} className="gallery-item gallery-item-6" alt="" onClick={()=>navigate("/events/9")} />
        <img src={math} className="gallery-item gallery-item-7" alt=""  onClick={()=>navigate("/events/17")}/>
        <img src={vedanta} className="gallery-item gallery-item-8" alt="" onClick={()=>navigate("/events/18")} />
        <img src={casein} className="gallery-item gallery-item-9" alt="" onClick={()=>navigate("/events/5")} />
        <button
          onClick={handlePrevClick}
          className="button button-prev bg-yellow rounded-full w-20 h-20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="button button-next bg-yellow rounded-full w-20 h-20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>

      <div className="gallery-container" id="events-btn-3">
        <img src={gulp} className="gallery-item gallery-item-1" id="1" alt="" onClick={()=>navigate("/events/19")}/>
        <img
          src={brush}
          className="gallery-item gallery-item-2"
          id="2"
          alt=""
          onClick={()=>navigate("/events/3")}
        />
        <img src={valo} className="gallery-item gallery-item-3" id="3" alt="" onClick={()=>navigate("/events/21")}/>
        <img src={fifa} className="gallery-item gallery-item-4" id="4" alt="" onClick={()=>navigate("/events/20")}/>
        <img src={cut} className="gallery-item gallery-item-5" id="5" alt="" onClick={()=>navigate("/events/25")}/>
        <img src={ramp} className="gallery-item gallery-item-6" alt="" onClick={()=>navigate("/events/4")}/>
        <img src={battle} className="gallery-item gallery-item-7" alt="" onClick={()=>navigate("/events/6")}/>
        <img src={photo} className="gallery-item gallery-item-8" alt="" onClick={()=>navigate("/events/26")}/>
        <img src={cut} className="gallery-item gallery-item-9" alt="" onClick={()=>navigate("/events/25")}/>
        <button
          onClick={handlePrevClick}
          className="button button-prev bg-yellow rounded-full w-20 h-20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
            />
          </svg>
        </button>
        <button
          onClick={handleNextClick}
          className="button button-next bg-yellow rounded-full w-20 h-20 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
