import './Home.css'
import logo from '../assets/logo.png'
import vector from '../assets/vector.png'
import { useEffect } from 'react'
import Aboutus from '../components/Aboutus/Aboutus'
import Slider from '../components/Slider/Slider'
import Timeline from '../components/Timeline/Timeline'
import MegaEvents from '../components/MegaEvents/MegaEvents'
import Faqs from '../components/Faqs/Faqs'

function App() {
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
  return (
    <div className='bg-purple'>
      <div className='w-screen h-screen flex justify-end overflow-hidden'>
        <div className='landing-yellow bg-yellow flex align-center justify-center flex-col'>
          <img className='flower f1' src={vector} alt="" />
          <img className='flower f2' src={vector} alt="" />
          <div>
            <div className='nav-menu bg-red text-white rounded-3xl text-xl w-20 justify-center items-center mx-3 p-1' onClick={menuclick}>Menu</div>
            <div className='nav-container w-full flex items-center justify-end px-40 h-1/6' id='nav' >
              <div className="navbar bg-red text-white rounded-3xl text-xl">
                <ul className=' navbar-list flex gap-20 p-3 px-10'>
                  <li className=''>Home</li>
                  <li>Events</li>
                  <li>Gallery</li>
                  <li>FAQs</li>
                  <li>Contact Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='main-landing h-5/6 w-full flex'>
            <div className="left w-1/2 h-4/5 flex flex-col justify-center items-center">
              <img src={logo} className='logo' alt="logo" />
              <div className="eventTheme h-28 items-center justify-center flex text-yellow text-5xl">Rangtarang Elysium</div>
            </div>
            <div className="countdown-container right flex w-3/5 h-4/5 justify-center items-center gap-9 text-7xl">
              <div className='flex flex-col items-center gap-3'>
                <div className='countdown w-44 h-44 flex items-center justify-center '>24</div>
                <h1 className='countdown-text text-purple text-6xl'>Days</h1>
              </div>
              <div className='countdown-element flex flex-col items-center gap-3'>
                <div className='countdown w-44 h-44 flex items-center justify-center'>24</div>
                <h1 className='countdown-text text-purple text-6xl'>Hours</h1>
              </div>
              <div className='flex flex-col items-center gap-3'>
                <div className='countdown w-44 h-44 flex items-center justify-center'>24</div>
                <h1 className='countdown-text text-purple text-6xl'>Minutes</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutus/>
      <Slider/>
      <Timeline/>
      <MegaEvents/>
      <Faqs/>
    </div>
  )
}

export default App
