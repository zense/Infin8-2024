import React, { useEffect } from 'react'
import Footer from "../components/Footer/Footer.jsx"
import TeamCard from '../components/TeamCard/TeamCard.jsx'
import WebDevTeam from "../content/WebDevTeam.js"
import DesignTeam from "../content/DesignTeam.js"
import OrgComm from "../content/OrgComm.js"
import vec1 from "../assets/vec1.svg"
import vec2 from "../assets/vec2.svg"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Team.css"


import sac1 from "../assets/teams/sac1.jpeg"
import sac2 from "../assets/teams/sac2.jpg"
import sac3 from "../assets/teams/sac3.jpeg"
import sac4 from "../assets/teams/sac4.jpeg"
import sac5 from "../assets/teams/sac5.jpeg"
import sac6 from "../assets/teams/sac6.jpeg"
import sac7 from "../assets/teams/sac7.jpeg"
import sac8 from "../assets/teams/sac8.jpeg"
import sac9 from "../assets/teams/sac9.jpeg"
import sac10 from "../assets/teams/sac10.jpeg"

import des1 from "../assets/teams/des1.jpeg"
import des2 from "../assets/teams/des2.jpeg"
import des3 from "../assets/teams/des3.jpeg"
import des4 from "../assets/teams/des4.jpeg"
import des5 from "../assets/teams/des5.jpeg"

import web1 from "../assets/teams/web1.jpeg"
import web2 from "../assets/teams/web2.jpeg"
import web3 from "../assets/teams/web3.jpg"
import web4 from "../assets/teams/web4.jpeg"



const Team = () => {
  const [mode,setMode]=useState("OrgComm");
  let arr=[];
  useEffect(()=>{
    const choice = document.getElementById(mode);
    const ani = document.getElementById("ani")
    choice.style.color="#000"
    if(mode==="OrgComm") ani.style.transform = `translateX(0px)`;
    else if (mode==="DesignTeam") ani.style.transform = `translateX(250px)`
    else if (mode==="WebDevTeam") ani.style.transform = `translateX(500px)`
  },[mode])
  const handleClick = (e)=>{
    const choice = document.getElementById(mode);
    if(mode!==e.target.id){
      choice.style.color="#FFF"
    }
   
    setMode(e.target.id);
  }
  if(mode=="OrgComm"){
    arr=OrgComm;
  }else if(mode=="WebDevTeam"){
    arr=WebDevTeam;
  }else{
    arr=DesignTeam;
  }
  return (
    <>
      <div className="wrapper h-auto">
        <div className='header'>
        <Link
            className="absolute button-back-team top-0 left-0 text-white text-xl md:text-3xl p-4 font-bold"
            to={"/"}
          >
            &lt; Back
          </Link>
          <div className='team-txt-container gap-4'>
            <img className='dec-img w-28' src={vec1} alt='decoration-image'/>
            <h1 className='team-txt text-8xl'>Team</h1>
            <img className='dec-img w-28' src={vec2} alt='decoration-image'/>
          </div>
          <div className='btn-bar-wrapper'>
            <nav className='btn-bar'>
              <div className='flex relative'>
              <button  id="OrgComm" className={`btn`} onClick={handleClick}>Organizing Committee</button>
              <button id="DesignTeam" className={`btn`} onClick={handleClick}>Design</button>
              <button id="WebDevTeam" className={`btn`} onClick={handleClick}>Website Dev</button>
              <div className='absolute slider-team bg-yellow left-0' id='ani'></div>
              </div>
            </nav>
          </div>
        </div>
        {/* <div className='head-tag-wrapper'>
          <div className='head-tag'>
            <h1>Heads</h1>
          </div>
        </div> */}
        <div className="card-container">
            {arr.map((element,index)=>{
              return(
                  <div className='img-wrapper' key={index}>
                    <TeamCard
                      name={element.name}
                      colour={"yellow"}
                      imageDestination={eval(`${element.Rollno}${index+1}`)}
                      />
                  </div>
              )
            })}
        </div>
      </div>
        <Footer/>
    </>
  )
}

export default Team;