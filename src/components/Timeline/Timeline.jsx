import React, { useEffect, useState } from 'react'
import './Timeline.css'
import Nukkad from "../../assets/timelineEvents/Nukkad.jpg"
import clash from "../../assets/timelineEvents/clash.jpg"
import jijnasa from "../../assets/timelineEvents/Jijnasa.jpg"
import lost from "../../assets/timelineEvents/Lost.jpg"
import Nrittas from "../../assets/timelineEvents/Nrittas.png"
import Nrittag from "../../assets/timelineEvents/Nrittag.png"
import cards from "../../assets/timelineEvents/Cards.png"

import sargam from "../../assets/timelineEvents/Sargam.png"
import codm from "../../assets/timelineEvents/codm.png"
import bgmi from "../../assets/timelineEvents/PUBG.png"
import league from "../../assets/timelineEvents/League.png"
import jam from "../../assets/timelineEvents/jam.png"
import rang from "../../assets/timelineEvents/Stage.png"
import math from "../../assets/timelineEvents/MATH.png"
import vedanta from "../../assets/timelineEvents/Vedanta.png"

import gulp from "../../assets/timelineEvents/gulp.png"
import brush from "../../assets/timelineEvents/brush.png"
import valo from "../../assets/timelineEvents/valo.png"
import fifa from "../../assets/timelineEvents/fifa.png"
import cut from "../../assets/timelineEvents/cut.png"
import ramp from "../../assets/timelineEvents/ramp.png"
import battle from "../../assets/timelineEvents/battle.png"

const Timeline = () => {
  const [day, setDay] = useState("btn-1");

  useEffect(() => {
    const choice = document.getElementById(day)
    const todisable = document.getElementsByClassName("gallery-container")
    const ani = document.getElementById("ani")
    for(let i = 0; i<todisable.length;i++){
      todisable[i].style.display="none"
    }
    choice.classList.remove("text-yellow")
    ani.style.transform = `translateX(${100*(Number(day[day.length-1])-1)}px)`
    console.log(`${100*(Number(day[day.length-1])-1)}px`)
    const toshow = document.getElementById(`events-${day}`);
    toshow.style.display = "flex"
  }, [day])

  const handleClick = (e) =>{
    const choice = document.getElementById(day)
    choice.classList.add("text-yellow")
    setDay(e.target.id)
  }
  const handleNextClick = () => {
    let images = document.getElementsByClassName('gallery-item');
    Array.from(images).forEach(ele => {
      let idstring = ele.classList[1];
      let id = idstring[idstring.length - 1];
      id = (Number(id) - 1) % 8;
      if (id == 0) {
        id = 8;
      }
      ele.classList.remove(ele.classList[1]);
      ele.classList.add(`gallery-item-${id}`);
    })
  }
  const handlePrevClick = () => {
    let images = document.getElementsByClassName('gallery-item');
    Array.from(images).forEach(ele => {
      let idstring = ele.classList[1];
      let id = idstring[idstring.length - 1];
      id = (Number(id) + 1) % 8;
      if (id == 0) {
        id = 8;
      }
      ele.classList.remove(ele.classList[1]);
      ele.classList.add(`gallery-item-${id}`);
      console.log(`gallery-item-${id}`)
    })
  }
  return (
    <div className='w-screen gallery-screen flex flex-col bg-bgredlight relative'>
      <div className="left-timeline bg-bgreddark w-1/2 h-full absolute"></div>
      <div className="timeline-heading w-full text-yellow flex items-center justify-center text-9xl pt-20">
        <h1>TIMELINE</h1>
      </div>
      <div className='w-full flex items-center justify-center day-btns z-10 text-2xl mt-20'>
        <div className='flex border-4 border-yellow rounded-xl relative'>

        <span className="btn-1 text-yellow cursor-pointer btns text-center" id='btn-1'
         onClick={handleClick}
        >
            Day 1
        </span>
        <span className="btn-2 text-yellow cursor-pointer btns text-center" id='btn-2'
         onClick={handleClick}
        >
            Day 2
        </span>
        <span className="btn-3 text-yellow cursor-pointer btns text-center" id='btn-3'
         onClick={handleClick}
        >
            Day 3
        </span>
        <div className='start-home hover-animation absolute h-full width bg-yellow rounded-sm' id='ani'>

        </div>
           </div>
      </div>
      <div className='gallery-container' id='events-btn-1' >
        <img src={Nukkad} className='gallery-item gallery-item-1' id='1' alt="" />
        <img src={clash} className='gallery-item gallery-item-2' id='2' alt="" />
        <img src={jijnasa} className='gallery-item gallery-item-3' id='3' alt="" />
        <img src={lost} className='gallery-item gallery-item-4' id='4' alt="" />
        <img src={Nrittas} className='gallery-item gallery-item-5' id='5' alt="" />
        <img src={Nrittag} className='gallery-item gallery-item-6' alt="" />
        <img src={cards} className='gallery-item gallery-item-7' alt="" />
        <img src={lost} className='gallery-item gallery-item-8' alt="" />
        <button onClick={handlePrevClick} className='button button-prev bg-yellow rounded-full w-20 h-20 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <button onClick={handleNextClick} className='button button-next bg-yellow rounded-full w-20 h-20 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

      <div className='gallery-container' id='events-btn-2' >
        <img src={sargam} className='gallery-item gallery-item-1' id='1' alt="" />
        <img src={codm} className='gallery-item gallery-item-2' id='2' alt="" />
        <img src={bgmi} className='gallery-item gallery-item-3' id='3' alt="" />
        <img src={league} className='gallery-item gallery-item-4' id='4' alt="" />
        <img src={jam} className='gallery-item gallery-item-5' id='5' alt="" />
        <img src={rang} className='gallery-item gallery-item-6' alt="" />
        <img src={math} className='gallery-item gallery-item-7' alt="" />
        <img src={vedanta} className='gallery-item gallery-item-8' alt="" />
        <button onClick={handlePrevClick} className='button button-prev bg-yellow rounded-full w-20 h-20 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <button onClick={handleNextClick} className='button button-next bg-yellow rounded-full w-20 h-20 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

      <div className='gallery-container' id='events-btn-3' >
        <img src={gulp} className='gallery-item gallery-item-1' id='1' alt="" />
        <img src={brush} className='gallery-item gallery-item-2' id='2' alt="" />
        <img src={valo} className='gallery-item gallery-item-3' id='3' alt="" />
        <img src={fifa} className='gallery-item gallery-item-4' id='4' alt="" />
        <img src={cut} className='gallery-item gallery-item-5' id='5' alt="" />
        <img src={ramp} className='gallery-item gallery-item-6' alt="" />
        <img src={battle} className='gallery-item gallery-item-7' alt="" />
        <img src={fifa} className='gallery-item gallery-item-8' alt="" />
        <button onClick={handlePrevClick} className='button button-prev bg-yellow rounded-full w-20 h-20 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
        </button>
        <button onClick={handleNextClick} className='button button-next bg-yellow rounded-full w-20 h-20 flex items-center justify-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default Timeline