import React from 'react'
import './Aboutus.css'
import aboutus from "../../content/Aboutus"

const Aboutus = () => {
  return (
    <div className='au-container flex w-screen mt-36'>
      <div className="au-heading w-2/5 h-96 bg-yellow flex flex-col items-center justify-center pr-10">
          <h1 className='au-about text-red text-9xl' >About</h1>
          <h1 className='au-infin8 text-purple text-9xl' >&nbsp;&nbsp;Infin8</h1>
      </div>
      <div className="au-cont w-3/5 text-yellow p-10 text-2xl flex items-center jusftify-center">
        <p className='au-content'>{aboutus}</p>
      </div>
    </div>
  )
}

export default Aboutus