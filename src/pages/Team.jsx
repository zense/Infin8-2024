import React, { useEffect } from 'react'
import Footer from "../components/Footer/Footer.jsx"
import TeamCard from '../components/TeamCard/TeamCard.jsx'
import WebDevTeam from "../content/WebDevTeam.js"
import DesignTeam from "../content/DesignTeam.js"
import OrgComm from "../content/OrgComm.js"
import group39915 from "../assets/Group 39915.png"
import group39916 from "../assets/Group 39916.png"
import { useState } from 'react'
import back from "../assets/back.png"
import { Link } from 'react-router-dom'
import "./Team.css"
const Team = () => {
  const [mode,setMode]=useState("OrgComm");
  let arr=[];
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
          <Link to={"/"}>
            <div className='back-btn-wrapper'>
              <img src={back} alt='back-img'/>
              <button className='home-btn'>Back</button>
            </div>
          </Link>
          <div className='team-txt-container'>
            <img className='dec-img' src={group39916} alt='decoration-image'/>
            <h1 className='team-txt'>Team</h1>
            <img className='dec-img' src={group39915} alt='decoration-image'/>
          </div>
          <div className='btn-bar-wrapper'>
            <nav className='btn-bar'>
              <button  id="OrgComm" className={`btn ${mode==="OrgComm" ? "active":""}`} onClick={()=>setMode("OrgComm")}>Organizing Committee</button>
              <button id="DesignTeam" className={`btn ${mode==="DesignTeam" ? "active":""}`} onClick={()=>setMode("DesignTeam")}>Design</button>
              <button id="WebDevTeam" className={`btn ${mode==="WebDevTeam" ? "active":""}`} onClick={()=>setMode("WebDevTeam")}>Website Dev</button>
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
                <div className='head-tag-wrapper conditional-tag'>
                  <div className='head-tag'>
                    <h1>Comrades</h1>
                  </div>
                </div>
                )
              }
              return(
                  <div className='img-wrapper'>
                    <TeamCard
                      name={element.name}
                      Rollno={element.Rollno}
                      colour="blue"
                      imageDestination={element.imageDestination}
                      />
                  </div>
              )
            })}
        </div>
      </div>
        {/* <Footer/> */}
    </>
  )
}

export default Team;