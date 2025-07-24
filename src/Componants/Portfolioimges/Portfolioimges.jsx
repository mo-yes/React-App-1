import "./Portfolioimges.css"
import img1 from "../../assets/poert1.png"
import img2 from "../../assets/port2.png"
import img3 from "../../assets/port3.png"

export default function Portfolioimges() {
  const images = [img1, img2, img3, img1, img2, img3];

  return (
    <>
    <div className=" container text-center mb-4">
      <div className="row g-4">
  {images.map((img, index) => (
    <div className="col-md-4" key={index}>
      <div className="portfolio-card">
        <img src={img} alt={`portfolio-${index}`} className="w-100" />
        <div className="overlay">
          <i className="fa-solid fa-plus fa-2x "></i>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
    </>
  )
}
