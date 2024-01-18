import React from 'react'
import logo from '../../assets/logo.svg'
import vector from '../../assets/vector.png'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LandingScreen = () => {
    const [days, setDays] = useState(0) 
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)
  
    useEffect(() => {
      let myinterval = setInterval(()=>{
        const currentDate = new Date();
        const month = currentDate.getMonth();
        if(month)  setDays(15-currentDate.getDate());
        else setDays(15+31-currentDate.getDate());
        setHours(23 - currentDate.getHours())
        setMinutes(59 - currentDate.getMinutes())
        setSeconds(60-currentDate.getSeconds())
      },100)
      return ()=>{
        clearInterval(myinterval)
      }
    })
    
  
    useEffect(() => {
      if(window.innerWidth < 810){
        let list = document.getElementById('nav');
        list.style.display = 'none';
      }
    }, [])
    
    const menuclick =  ()=>{
      let list = document.getElementById('nav');
      console.log(list.style);
      if(list.style.display === 'flex') list.style.display='none';
      else list.style.display = 'flex'
    }
    const handleRemove = ()=>{
      if(window.innerWidth>500) return; 
      let list = document.getElementById('nav');
      list.style.display='none';
    }
  return (
    <div className='w-screen h-screen flex justify-end overflow-hidden'>
        <div className='landing-yellow bg-yellow flex align-center justify-center flex-col'>
          <img className='flower f1' src={vector} alt="" onClick={handleRemove}/>
          <img className='flower f2' src={vector} alt="" onClick={handleRemove}/>
          <div className='w-auto' onClick={menuclick}>
            <div className='nav-menu bg-red text-white rounded-3xl text-xl w-20 justify-center items-center mx-3 p-1'>Menu</div>
            <div className='nav-container w-auto flex items-center justify-end px-40 h-1/6' id='nav' >
              <div className="navbar bg-red text-white rounded-3xl text-xl">
                <ul className=' navbar-list flex md:gap-5 p-2 px-10'>
                  {/* <li className=''><Link to={"/"} >Home</Link></li> */}
                  <li><Link to={"/events"} >Events</Link></li>
                  {/* <li><Link to={"/sponsors"} >Sponsosrs</Link></li> */}

                  <li><a href="#gallery">Gallery</a> </li>
                  <li><a href="#faqs">FAQs</a></li>
                  <li><Link to={"/team"} >Team</Link></li>

                  <li><a href="#contactus">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='main-landing h-5/6 w-full flex' onClick={handleRemove}>
            <div className="left w-1/2 h-4/5 flex flex-col justify-center items-center" id='left-main' onClick={handleRemove}>
              <img src={logo} className='logo' alt="logo" onClick={handleRemove}/>
              <div className="eventTheme h-28 items-center justify-center flex text-yellow text-5xl"onClick={handleRemove}>A Radiant Reverie</div>
            </div>
            <div className="countdown-container right flex w-3/5 h-4/5 justify-center items-center gap-7 text-6xl" onClick={handleRemove}>
              <div className='flex flex-col items-center gap-3'>
                <div className='countdown w-36 h-36 flex items-center justify-center '>{days}</div>
                <h1 className='countdown-text text-purple text-5xl'>Days</h1>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='countdown w-36 h-36 flex items-center justify-center'>{hours}</div>
                <h1 className='countdown-text text-purple text-5xl'>Hours</h1>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='countdown w-36 h-36 flex items-center justify-center'>{minutes}</div>
                <h1 className='countdown-text text-purple text-5xl'>Minutes</h1>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='countdown w-36 h-36 flex items-center justify-center'>{seconds}</div>
                <h1 className='countdown-text text-purple text-5xl'>Seconds</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LandingScreen