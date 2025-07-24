import Decoration from "../Decoretion/Decoration"; 
import Portfoliocomponant from "../Portfoliocomponant/Portfoliocomponant";
import Portfolioimges from "../Portfolioimges/Portfolioimges";
import Context from "../Context/Context";



export default function Portfolio() {
  return (
    <section className=" bg-info my-font" id="portfolio">
      <Portfoliocomponant />
      <Decoration />
      <Portfolioimges />
      <Context />
    </section>
  )
}
