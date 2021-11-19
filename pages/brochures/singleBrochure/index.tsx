import React from "react"
import { FaHome, FaCaretRight, FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagram } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import BrochureImg1 from "../../../public/images/brochure/brochuresimage1.png";
import PushWheelChair from '../../../public/images/brochure/PushWheelChair.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import  brochures from "../../../src/datas/brochure.json";

export const getStaticProps = async () => {
   const res = "../src/datas/brochure.json"
   // const data = await res.json()
   console.log(res)
   return{
      props: { brochures : [] }
   }

}

const SingleBrochure = () => {
   
   const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 4,
      slidesToScroll: 1
    }; 
   return(
      <>
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                     <Link href="/">
                        <a><FaHome /></a>
                     </Link>
                     <FaCaretRight />
                     <Link href="/brochures">
                        <a  title="Brochures">Equipment Brochures</a>
                     </Link>
                     <FaCaretRight />
                     <span className="breadcrumbText">Wheelchair Seating Systems Brochure</span>
               </div>
            </div>
         </section>
         <section className="searchResultSection">
            <div className="container">
               <div className="sectionBox">
                  <div className="sectionTitle">
                     <div className="mainTitle">
                        Wheelchair Seating Systems Brochure
                        <div className="subTitle">
                           Published: 12 August 2020
                        </div>
                     </div>
                     <div className="sectionSharebox">
                        <span>
                           Share this Brochure On
                        </span>
                        <ul>
                           <li><Link href="#"><a title="Facebook" rel="norefferer"><FaFacebook /></a></Link></li>
                           <li><Link href="#"><a title="Linkedin" rel="norefferer"><FaLinkedin /></a></Link></li>
                           <li><Link href="#"><a title="Twitter" rel="norefferer"><FaTwitterSquare /></a></Link></li>
                           <li><Link href="#"><a title="Instagram" rel="norefferer"><FaInstagram /></a></Link></li>
                        </ul>
                     </div>
                  </div>
                  <section className="mainbox">
                     <div className="detailbox">
                        <div className="detailImage">
                           <Image src={BrochureImg1} alt="" />
                        </div>
                        <div className="detailtext">
                              <div className="text">
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                                 <br/>
                                 <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                              </div>
                              <div className="buttonHolder">
                                 <Link href="#"><a className="button" title="Download Brochure">Download Brochure</a></Link>
                              </div>
                        </div>
                     </div>
                     <div className="products">
                        <div className="title">
                           Products In Brochure
                        </div>
                        <div className="products">
                           <div className="productsSlider" id="productsSlider">
                              <div className="productArchiveItem">
                                  
                                    <Slider {...settings}>
                                       {brochures.map( brochure => (
                                          <div key={brochure.id}>
                                             <Image src={PushWheelChair}  alt="" />
                                             <span>{ brochure.price }</span>
                                             <br/>
                                             <span>{ brochure.title }</span>
                                             <br/>
                                             <button>
                                                Continue Reading
                                             </button>
                                          </div>
                                       ))}
                                       {/* <div>
                                          <div className="productArchiveItemImage}>
                                             <a href="/products/singleProduct.tsx" title="">
                                                <Image src={PushWheelChair} />
                                             </a>
                                          </div>
                                          <div className="productArchiveItemtext}>
                                             <span>$399.00</span>
                                             <br />
                                             <span>Move Folding Wheechair</span>
                                          </div>
                                       </div> */}
                                    </Slider>
                              </div>
                           </div>
                        </div>
                     </div>
                  </section>
               </div>
            </div>
         </section>
         
         {/*FAQ section
            Title: Frequently Asked Questions
            Sub-title: Get All Your Queries Answered
            Placeholder: Type and Find Your Preferred Brand
            3 FAQ cards
               Q1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut?
               A1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
               Q1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut?
               A1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
               Q1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut?
               A1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem*/}
      </>
   )
}

export default SingleBrochure