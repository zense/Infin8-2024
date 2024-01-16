import React, { useEffect } from 'react'
import './Slider.css'
import image1 from "../../assets/slider/image1.jpg"
import image2 from "../../assets/slider/image2.jpg"
import image3 from "../../assets/slider/image3.jpeg"
import image4 from "../../assets/slider/image4.jpeg"
import image5 from "../../assets/slider/image5.jpeg"
import image6 from "../../assets/slider/image6.jpeg"
import image7 from "../../assets/slider/image7.jpeg"
import image8 from "../../assets/slider/image8.jpeg"
import image9 from "../../assets/slider/image9.jpeg"
import image10 from "../../assets/slider/image10.jpeg"
import image11 from "../../assets/slider/image11.jpg"
import image12 from "../../assets/slider/image12.jpeg"

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
            <img src={image1} className='image' alt="" draggable={false} />
            <img src={image2} className='image' alt="" draggable={false}/>
            <img src={image3} className='image' alt="" draggable={false} />
            <img src={image4} className='image' alt="" draggable={false} />
            <img src={image5} className='image' alt="" draggable={false} />
            <img src={image6} className='image' alt="" draggable={false} />
            <img src={image7} className='image' alt="" draggable={false} />
            <img src={image8} className='image' alt="" draggable={false} />
            <img src={image9} className='image' alt="" draggable={false} />
            <img src={image10} className='image' alt="" draggable={false} />
            <img src={image11} className='image' alt="" draggable={false} />
            <img src={image12} className='image' alt="" draggable={false} />
            <img src={image1} className='image' alt="" draggable={false} />
            <img src={image2} className='image' alt="" draggable={false}/>
            <img src={image3} className='image' alt="" draggable={false} />
            <img src={image4} className='image' alt="" draggable={false} />
            <img src={image5} className='image' alt="" draggable={false} />
            <img src={image6} className='image' alt="" draggable={false} />
            <img src={image7} className='image' alt="" draggable={false} />
            <img src={image8} className='image' alt="" draggable={false} />
            <img src={image9} className='image' alt="" draggable={false} />
            <img src={image10} className='image' alt="" draggable={false} />
            <img src={image11} className='image' alt="" draggable={false} />
            <img src={image12} className='image' alt="" draggable={false} />
        </div>
    </div>
  )
}

export default Slider