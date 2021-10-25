import styles from "./home.module.css";
import Header from "../templates/header"
import Banner from "./homeBanner/index"
import Features from "./homeFeatures/index"
import WhoWeAre from "./whoWeAre/index"
// import Products from "./browseProducts/index"
// import Testimonials from "./testimonials/index"
// import Brands from "./ourBrands/index"
// import NEWS from "./news/index"
// import ContactUs from "./contactUs/index"
import Footer from "../templates/footer"

import Image from "next/image";



export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <WhoWeAre />
      {/* <Products />
      <Testimonials />
      <Brands />
      <NEWS />
      <ContactUs />*/}
      <Footer /> 

    </div>
  );
}