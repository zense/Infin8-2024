import React, { useEffect } from 'react'
import Footer from "../components/Footer/Footer.jsx"
import TeamCard from '../components/TeamCard/TeamCard.jsx'
import WebDevTeam from "../content/WebDevTeam.js"
import DesignTeam from "../content/DesignTeam.js"
import OrgComm from "../content/OrgComm.js"
import vec1 from "../assets/vec1.svg"
import vec2 from "../assets/vec2.svg"
import team_background from "../assets/team_background.png"
import { useState } from 'react'
import back from "../assets/back.png"
import { Link } from 'react-router-dom'
import "./Team.css"
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
        <div className='head-tag-wrapper'>
          <div className='head-tag'>
            <h1>Heads</h1>
          </div>
        </div>
        <div className="card-container">
            {arr.map((element,index)=>{
              const flag=index===3;
              if(flag){
                return(
                <div className='head-tag-wrapper conditional-tag' key={index}>
                  <div className='head-tag'>
                    <h1>Comrades</h1>
                  </div>
                </div>
                )
              }
              const flag2=(index<3)
              return(
                  <div className='img-wrapper' key={index}>
                    <TeamCard
                      name={element.name}
                      Rollno={element.Rollno}
                      colour={"yellow"}
                      imageDestination={element.imageDestination}
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