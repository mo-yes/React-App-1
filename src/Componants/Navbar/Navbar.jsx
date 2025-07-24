import { useState } from "react"
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"

export default function Navbar() {


  const [isScroll, setIsScroll] = useState(false)

  window.addEventListener('scroll',function(){
    if(scrollY>0){
      setIsScroll(true)
    }else{
      setIsScroll(false)
    }
  })

  return (
    <>
      <nav className={`navbar navbar-expand-lg  bg-info-subtle tranzetion fixed-top w-100 ${isScroll?"":"py-3"}  `}>
  <div className="container">
    <a className="navbar-brand my-link fs-1 fw-bold text-uppercase" href="#">Start Framework</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
        {/* <li className="nav-item">
          <NavLink className="nav-link my-link   fs-5 fw-bold" aria-current="page" to="/">Home</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link my-link fs-5 fw-bold" aria-current="page" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  my-link fs-5 fw-bold" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  my-link fs-5 fw-bold" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}
