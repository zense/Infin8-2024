import React from 'react'
import './Aboutus.css'
import aboutus from "../../content/Aboutus"
import border from "../../assets/border.svg"
import lotus from "../../assets/aboutus-lotus.svg"

const Aboutus = () => {
  return (
    <div className='au-container flex w-screen  relative overflow-hidden'>
      <img src={lotus} className='absolute w-96 h-96 lotus' alt="" />
      <div className="au-heading w-2/5 h-auto bg-yellow flex flex-col items-center justify-center pr-10">
          <h1 className='au-about text-red text-9xl' >About</h1>
          <h1 className='au-infin8 text-purple text-9xl' >&nbsp;&nbsp;Infin8</h1>
      </div>
      <div className="au-cont w-3/5 text-yellow pr-10 text-2xl flex items-center jusftify-center bg-yellow flex flex-col">
        <img src={border} className='p-5 img-border' alt="" />
        <p className='au-content bg-purple py-10 p-9'>{aboutus}</p>
        <img src={border} className='p-5 img-border' alt="" />
      </div>
    </div>
  )
}

export default Aboutus