import './Home.css'
import {React,useEffect} from "react";
import Aboutus from '../components/Aboutus/Aboutus'
import Slider from '../components/Slider/Slider'
import Timeline from '../components/Timeline/Timeline'
import MegaEvents from '../components/MegaEvents/MegaEvents'
import Faqs from '../components/Faqs/Faqs'
import LandingScreen from '../components/LandingScreen/LandingScreen'
import Footer from '../components/Footer/Footer'
import {motion} from "framer-motion"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div className='bg-purple background-main' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}>  
      <LandingScreen/>
      <Aboutus/>
      <Slider/>
      <Timeline/>
      <MegaEvents/>
      <Faqs/>
      <Footer/>
    </motion.div>
  )
}

export default App
