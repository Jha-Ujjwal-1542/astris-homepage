import Features from "./Features/index"
import WhoWeAre from "../aboutUs/whoWeAre"
// import Products from "./browseProducts/index"
// import Testimonials from "./testimonials/index"
// import Brands from "./ourBrands/index"
// import NEWS from "./news/index"

export default function Home() {
  return (
    <div>
      <h1>
      Astis PME
      </h1>
      <Features />
      <WhoWeAre />
      {/* <Products />
      <Brands />
      <NEWS />*/}
    </div>
  );
}