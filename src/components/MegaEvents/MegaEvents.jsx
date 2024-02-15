import React from 'react'
import './MegaEvents.css'
import indie from "../../assets/indie.svg"
import mad from "../../assets/mad.svg"
import manga from "../../assets/manga.svg"
import dj from "../../assets/dj.svg"

const MegaEvents = () => {
  return (
    <div className='MegaEvents-screen w-screen flex bg-blue relative text-purple text-9xl items-center justify-center gap-4 py-10 px-8'>
      <div className='bg-text absolute bg-text-top'>INFIN8INFIN8INFIN8INFIN8INFIN8INFIN8</div>
      <div className='bg-text absolute bg-text-mobile text-blue'>8NIFNI8NIFNI8NIFNI8NIFNI8NIFNI8NIFNI</div>
      <div className='bg-text absolute bg-text-bottom'>FIN8INFIN8INFIN8INFIN8INFIN8INFIN8</div>
      <div className='mega-over flex items-start h-full'><img src={indie} alt="" className='mega-img' /></div>
      <div className='mega-over flex items-end h-full'><img src={mad} alt="" className='mega-img mega-img-bot' /></div>
      <div className='mega-over flex items-start h-full'><img src={manga} alt="" className='mega-img' /></div>
      <div className='mega-over flex items-end h-full'><img src={dj} alt="" className='mega-img mega-img-bot' /></div>
    </div>
  )
}

export default MegaEvents