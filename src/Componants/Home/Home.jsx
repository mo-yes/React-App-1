import Content from "../Content/Content";

import Logo from "../../assets/avataaars.png";
import Context from "../Context/Context";



export default function Home() {
  return (
    <section className="home" id="home">
      <Content  img={Logo}  />
      <Context />
    </section>
  )
}
