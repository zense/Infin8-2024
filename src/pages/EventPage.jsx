import React from 'react';
import vector3 from '../assets/vector3.png';
import vector2 from '../assets/vector2.png';
import './EventPage.css'
import back from  "../assets/back.png" ;
import white_img from "../assets/white_img.png" ;
const EventPage = () => {
  return (
    <>
       <div className="flex h-screen bg-purple sm:-w-full w-full ">
       <div className="bg-purple relative h-screen md:w-2/3 sm:w-full  flex flex-col">
  <div className="flex items-center">
    <img className="mr-1 size-3" src={back} alt="Back Image" />
    <button className='text-white text-2xl back hidden md:block'>
      EVENTS
    </button>
  </div>

          <div className='text-white flex flex-col competitionName  '>
           <div className='mt-10 ml-40'>
            Competiton
           </div>
           <div className=' ml-40'>
            Name
           </div>
          </div>
          <div className='text-white  text-5xl absolute bottom-60 right-0 '>
            <div className='h1'>Last Date to Register</div>
            <div className='h2'>date</div>
            <div className='h1'>prize pool</div>
            <div className='h2'>$$$</div>
           
          </div>
          <div className='absolute md:w-1/2 md:left-0 md:bottom-0'>
              <img className="flower1   h-3/4  w-3/4 max-w-full" src={vector2}></img>
            </div>
            <div className='w-full h-1/6 absolute bottom-0 bg-blue text-blue hidden md:block'>
hello
            </div>
          
          </div>
          <div className='bg-dark-purple flex justify-center md:w-1/3 hidden md:block relative'>
  <div className='flex items-center flex-col'>
    <img className=" mt-10 w-3/4" src={white_img} alt="White Image" />
    <button className=" text-white text-4xl reg h-20 w-3/4 bg-blue" >REGISTER</button>
    <div className='w-full h-1/6 absolute bottom-0 bg-blue text-blue'>
      hello
    </div>
  </div>
</div>

       </div>

      {/* Additional Content Section */}
      
      <div className="flex flex-col h-screen  bg-red main">
  <div className="flex flex-row justify-center w-full h-1/6">
    <div className='smallBox1 text-yellow bg-yellow  mt-14 mr-10'>hello</div>
    <div className='bg-yellow mt-10 ml-0 h-1/2 w-1/6 text-white text-right flex flex-col justify-center  headBoxL '>
    <div className='text-red about text-4xl'>Abo</div>

    </div>
    <div className='bg-yellow mt-10 ml-0 h-1/2 w-1/6 flex flex-col justify-center  headBoxR'>
    <div className='about text-red text-4xl'>ut</div>
  
    </div>
    <div className='smallBox1 text-yellow bg-yellow  mt-14 ml-10 '>hello</div>
  </div>
 
  <div className="flex justify-center w-full h-2/6">
  <div className='bg-yellow   h-/4 w-5/6'>hell
    </div></div>
    <div className="flex flex-row justify-center w-full h-1/6">
    <div className='smallBox1 text-yellow bg-yellow  mt-14 mr-10'>hello</div>
    <div className='bg-yellow mt-10 ml-0 h-1/2 w-1/6    headBoxL '>
    
    </div>
    <div className='bg-yellow mt-10 ml-0 h-1/2 w-1/6  headBoxR'>
   
    </div>
    <div className='smallBox1 text-yellow bg-yellow  mt-14 ml-10 '>hello</div>
  </div>
  <div className="flex justify-center w-full h-2/6">
  <div className='bg-yellow   h-/4 w-5/6'>hell
    </div></div>
</div>

<div className='bg-purple w-screen h-80 flex justify-center'>
<div className='bg-blue  mt-10 h-3/4 w-5/6 flex justify-evenly '>
  <div className='mt-10 flex-col '>
<img src={vector3}></img>
<div className='mt-5 w-1/2 contact text-dark-purple text-3xl'>Contact the Organisers</div>
  </div>
  <div  className='mt-10 flex-col person text-3xl text-dark-purple'>person1
  <div className='mt-5 w-1/2'>
    +91XXXXXXXXXX</div></div>
  <div  className='mt-10 flex-col  person text-3xl text-dark-purple'>person2
  <div className='mt-5 w-1/2'>
    +91XXXXXXXXXX</div></div>
  <div  className='mt-10 flex-col  person text-3xl text-dark-purple'>person3
  <div className='mt-5 w-1/2'>
    +91XXXXXXXXXX</div></div>
    </div>

</div>

    </>
  );
};

export default EventPage;
