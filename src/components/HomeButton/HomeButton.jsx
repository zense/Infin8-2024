import React from "react";
import "./HomeButton.css";
import { useNavigate } from "react-router-dom";
const HomeButton=()=>{
    const navigate=useNavigate();
    return(
        <>
        <div className="btn-wrapper">
            <button className="btn bg-yellow text-red rounded-md text-center h-11 px-5 text-2xl mr-5 mt-4 cursor-pointer heading" onClick={()=>navigate("/")}>Home</button>
        </div>
        </>   
    )
}
export default HomeButton;