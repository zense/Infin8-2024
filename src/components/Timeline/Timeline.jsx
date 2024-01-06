import React from 'react'
import './Timeline.css'

const Timeline = () => {
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
      <div className='gallery-container' >
        <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='gallery-item gallery-item-1' id='1' alt="" />
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
    </div>
  )
}

export default Timeline