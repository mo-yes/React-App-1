import "./About.css"
import Decoration from '../Decoretion/Decoration'
import Context from "../Context/Context"

export default function About() {
  return (
    <>
    <div className="container-fluid About bg-info  text-center mt-5  my-font">
                <div className=" row g-3">
            <div className=" col-md-12">
                <h1 className=' fs-1 fw-bold text-uppercase my-2'>about component</h1>
                <Decoration />
                <div className=" row g-3  align-items-center justify-content-around ">
                <div className="col-md-5">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-5 ">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    <Context />
    </>
  )
}
