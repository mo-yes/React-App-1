import React from 'react'
import "./Aboutcomponant.css";
import Decoration from "../Decoretion/Decoration"; 


export default function Aboutcomponant() {
  return (
    <>
    <div className=" container-fluid py-5  bg-info text-center text-white   ">
        <div className=" row justify-content-center">
            <div className=" col-md-10">
                <div className="about-content ">
                    <h2 className=' fs-2 fw-bold text-uppercase'>about component</h2>
                    <Decoration />
                </div>
            </div>
            <div className=" col-md-5 mt-2">
                <div className="left">
                    <p className=' lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
            <div className=" col-md-5 mt-2">
                <div className="right">
                    <p className=' lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
