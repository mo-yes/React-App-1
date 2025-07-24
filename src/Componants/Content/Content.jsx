import Decoration from "../Decoretion/Decoration"; 
import "../Home/Home.css"
export default function Content({ img }) {
  return (
    <>
    <div className=" container-fluid py-5 bg-info  text-center  mt-5">
        <div className=" row justify-content-center">
            <div className=" col-md-4">
                <div className="content   ">
                  <div className="content-img">
                    <h1 className=" my-font fs-1 fw-bold pt-5">Home Componants</h1>
                    <img className=' w-75 img-fluid mb-2' src={img} alt="Avatar" />
                  </div>
                  <div className="content-text">
                    <h1 className=' fs-1 fw-bold my-font text-uppercase'>start Framework</h1>
                    <Decoration />
                    <p className="my-font lead">Graphic Artist - Web Designer - Illustrator</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
