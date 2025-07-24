import React from 'react'
import "./Context.css";


export default function Context() {
  return (
    <div className=" container-fluid bg-info-subtle text-black text-center">
        <div className=" row justify-content-center">
            <div className=" col-md-4">
                <div className="one  p-5">
                    <h3 className="fs-3 fw-bold my-font">LOCATION</h3>
                    <p className="lead my-font">2215 John Daniel Drive</p>
                    <p className="lead my-font">Clark, MO 65243</p>
                </div>
            </div>
            <div className=" col-md-4">
                <div className="two  p-5">
                    <h2 className="fs-2 fw-bold my-font">AROUND THE WEB</h2>
                    <ul className="list-unstyled d-flex justify-content-center m-auto text-center mt-2">
                        <li className="my-icon me-4"><i className="fa-brands fa-facebook " ></i></li>
                        <li className="my-icon me-4"><i className="fa-brands fa-twitter "></i></li>
                        <li className="my-icon me-4"><i className="fa-brands fa-linkedin-in " ></i></li>
                        <li className="my-icon me-4"><i className="fa-solid fa-globe mx-1 icon " ></i></li>
                    </ul>
                </div>
            </div>
            <div className=" col-md-4">
                <div className="three p-5">
                    <h2 className=" fs-2 fw-bold my-font">ABOUT FREELANCER</h2>
                    <p className="lead my-font">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                </div>
            </div>
        </div>
    </div>
  )
}
