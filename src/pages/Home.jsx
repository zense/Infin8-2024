import './Home.css'

import Aboutus from '../components/Aboutus/Aboutus'
import Slider from '../components/Slider/Slider'
import Timeline from '../components/Timeline/Timeline'
import MegaEvents from '../components/MegaEvents/MegaEvents'
import Faqs from '../components/Faqs/Faqs'
import LandingScreen from '../components/LandingScreen/LandingScreen'
import Footer from '../components/Footer/Footer'

function App() {

  return (
    <div className='bg-purple background-main'>
      <LandingScreen/>
      <Aboutus/>
      <Slider/>
      <Timeline/>
      <MegaEvents/>
      <Faqs/>
      <Footer/>
    </div>
  )
}

export default App
