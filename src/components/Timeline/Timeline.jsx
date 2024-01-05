import React from 'react'
import './Timeline.css'

const Timeline = () => {
    const handleNextClick = ()=>{
        let images = document.getElementsByClassName('gallery-item');
        Array.from(images).forEach(ele=>{
          let idstring = ele.classList[1];
          let id = idstring[idstring.length-1];
          id = (Number(id)-1)% 8;
          if(id==0){
            id = 8;
          }
          ele.classList.remove(ele.classList[1]);
          ele.classList.add(`gallery-item-${id}`);
          console.log(`gallery-item-${id}`)
        })
      }
      const handlePrevClick = ()=>{
        let images = document.getElementsByClassName('gallery-item');
        Array.from(images).forEach(ele=>{
          let idstring = ele.classList[1];
          let id = idstring[idstring.length-1];
          id = (Number(id)+1)% 8;
          if(id==0){
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
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-1' id='1' alt=""  />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-2' id='2' alt=""  />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-3' id='3' alt=""  />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-4' id='4' alt=""  />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-5' id='5' alt=""  />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-6' alt="" />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-7' alt="" />
                <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"  className='gallery-item gallery-item-8' alt=""  />
                <button onClick={handlePrevClick} className='button button-prev bg-yellow rounded-full w-20 h-20'>prev</button>
                <button onClick={handleNextClick} className='button button-next bg-yellow rounded-full w-20 h-20'>next</button>
            </div>
        </div>
    )
}

export default Timeline