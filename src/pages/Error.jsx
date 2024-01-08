import './Home.css'

import Aboutus from '../components/Aboutus/Aboutus'
import Slider from '../components/Slider/Slider'
import Timeline from '../components/Timeline/Timeline'
import MegaEvents from '../components/MegaEvents/MegaEvents'
import Faqs from '../components/Faqs/Faqs'
import LandingScreen from '../components/LandingScreen/LandingScreen'
import Footer from '../components/Footer/Footer'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

function Error() {

  return (
    <>
    <div className='flex bg-purple'>
     <div className='bg-yellow w-1/4'>
        <img src={logo}></img>
     </div>
      <div className=' text-white flex flex-col justify-center relative   font-bold text-8xl h-screen w-2/3'>
       <h1 className="">ERROR 404</h1> 
       <h2>PAGE NOT FOUND</h2>
       <button className='absolute left-0 bottom-60 text-4xl rounded-full border-4 border-blue-500 px-4 py-2'>
        <Link to ={"/"}>
  HOME
  </Link>
</button>

      </div>
   
     
     
     
    </div>
     <Footer/>
     </>
  )
}

export default Error
