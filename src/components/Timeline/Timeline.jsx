import React, { useEffect, useState } from 'react'
import './Timeline.css'

const Timeline = () => {
  const [day, setDay] = useState("btn-1");

  useEffect(() => {
    const choice = document.getElementById(day)
    const todisable = document.getElementsByClassName("gallery-container")
    for(let i = 0; i<todisable.length;i++){
      todisable[i].style.display="none"
    }
    choice.classList.add("bg-yellow")
    choice.classList.remove("text-yellow")
    const toshow = document.getElementById(`events-${day}`);
    toshow.style.display = "flex"
  }, [day])

  const handleClick = (e) =>{
    const choice = document.getElementById(day)
    choice.classList.remove("bg-yellow")
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
      <div className='w-full h-20 flex items-center justify-center day-btns z-10 text-xl md:gap- pt-28'>
        <div className="btn-1 border-yellow border-4 px-3 p-1 text-yellow cursor-pointer" id='btn-1' onClick={handleClick}>
            Day 1
        </div>
        <div className="btn-2 border-yellow border-4 px-3 p-1 text-yellow cursor-pointer" id='btn-2' onClick={handleClick}>
            Day 2
        </div>
        <div className="btn-3 border-yellow border-4 px-3 p-1 text-yellow cursor-pointer" id='btn-3' onClick={handleClick}>
            Day 3
        </div>
      </div>
      <div className='gallery-container' id='events-btn-1' >
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-1' id='1' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-2' id='2' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-3' id='3' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-4' id='4' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-5' id='5' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-6' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-7' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-8' alt="" />
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
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-1' id='1' alt="" />
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-2' id='2' alt="" />
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-3' id='3' alt="" />
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-4' id='4' alt="" />
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-5' id='5' alt="" />
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-6' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-7' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-8' alt="" />
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
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-1' id='1' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-2' id='2' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-3' id='3' alt="" />
        <img src="https://img.freepik.com/free-vector/cute-happy-penguin-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2095.jpg?w=826&t=st=1705073952~exp=1705074552~hmac=aa0f14ae0a6b2243baf74089b0b99ef3cfd8ac524c24c911cbe67df18efd5b75" className='gallery-item gallery-item-4' id='4' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-5' id='5' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-6' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-7' alt="" />
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-8' alt="" />
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