import React, { useEffect } from 'react'
import './Slider.css'

const Slider = () => {
    // let track = null,gallery = null
    // useEffect(() => {
    //     track = document.getElementById("image-track")
    //     gallery = document.getElementById("gallery")
    // }, [])
    
    // const mouseDownHandler =(e)=>{
    //     track.dataset.mouseDownAt = e.clientX;
    // }
    // const mouseMoveHandler = (e) =>{
    //     if(track.dataset.mouseDownAt === "0") return
    //     const mouseDelta = parseFloat(track.dataset.mouseDownAt)-e.clientX;
    //     let maxDelta = window.innerWidth/4;

    //     const percentage = (mouseDelta/maxDelta)* -100;
    //     let nextPercentage = parseFloat(track.dataset.prevPercentage)+percentage;
    //     nextPercentage = Math.min(nextPercentage,0);
    //     nextPercentage = Math.max(nextPercentage,-250);
    //     track.dataset.percentage = nextPercentage;
    //     track.style.transform = `translate(${nextPercentage}%,-50%)`;
    //     track.animate({
    //         transform:`translate(${nextPercentage}%,-50%)`},{duration:1200, fill: "forwards"
    //     })

    //     for(const image of track.getElementsByClassName("image")){
    //         image.animate({
    //             objectPosition: `${Math.min((nextPercentage+250)/4,100)}% center`},{duration:1200, fill: "forwards"
    //         });
    //     }
    // }
    // const handleMouseUp = () =>{
    //     track.dataset.mouseDownAt = "0";
    //     track.dataset.prevPercentage = track.dataset.percentage;
    // }

    // const handleScroll = () =>{
    //     let scrollPercentage = 100*(gallery.scrollLeft)/(track.scrollWidth-track.clientWidth)
    //     for(const image of track.getElementsByClassName("image")){
    //         image.animate({
    //             objectPosition: `${scrollPercentage}% center`},{duration:800, fill: "forwards"
    //         });
    //     }
    // }

  return (
    <div className='slider-screen w-screen overflow-auto relative' id='gallery'>
        <div className="image-track flex gap-6" data-mouse-down-at="0" id='image-track' data-prev-percentage="0">
            <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='image' alt="" draggable={false} />
            <img src="https://images.unsplash.com/photo-1682695795557-17447f921f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" className='image' alt="" draggable={false}/>
            <img src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" className='image' alt="" draggable={false} />
            <img src="https://images.unsplash.com/photo-1703769605297-93464fbf186f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" className='image' alt="" draggable={false}/>
            <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8" className='image' alt="" draggable={false}/>
            <img src="https://images.unsplash.com/photo-1682695795557-17447f921f79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" className='image' alt="" draggable={false}/>
            <img src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D" className='image' alt="" draggable={false}/>
            <img src="https://images.unsplash.com/photo-1703769605297-93464fbf186f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D" className='image' id='lastImage' alt="" draggable={false}/>
        </div>
    </div>
  )
}

export default Slider