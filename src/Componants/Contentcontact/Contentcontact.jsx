import "./Contentcontact.css"
import FloatingInput from "../FloatingInput/FloatingInput"
import Decoration from "../Decoretion/Decoration";

export default function Contentcontact() {
  return (
    <>
    <div className="contact text-center text-uppercase my-font ">
        <h1 className=" fs-1 fw-bold my-font">conatct componants</h1>
        <Decoration />
    </div>
    <div className=" mt-5">
        <div className=" container">
            <div className=" row justify-content-center g-3">
                <div className=" col-md-8">
                    <div className=" user-form">
                        <FloatingInput />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
