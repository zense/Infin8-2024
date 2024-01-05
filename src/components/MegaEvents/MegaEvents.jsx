import React from 'react'
import './MegaEvents.css'
import rectangle from '../../assets/rectangle.png'

const MegaEvents = () => {
  return (
    <div className='MegaEvents-screen w-screen flex bg-blue relative text-purple text-9xl items-center justify-center gap-16'>
      <div className='bg-text absolute bg-text-top'>INFIN8INFIN8INFIN8INFIN8INFIN8INFIN8</div>
      <div className='bg-text absolute bg-text-mobile text-blue'>8NIFNI8NIFNI8NIFNI8NIFNI8NIFNI8NIFNI</div>
      <div className='bg-text absolute bg-text-bottom'>FIN8INFIN8INFIN8INFIN8INFIN8INFIN8</div>
      <img src={rectangle} alt="" />
      <img src={rectangle} alt="" />
      <img src={rectangle} alt="" />
    </div>
  )
}

export default MegaEvents