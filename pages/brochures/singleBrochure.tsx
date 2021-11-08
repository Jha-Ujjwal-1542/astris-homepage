import React from "react"
import { FaHome, FaCaretRight, FaFacebook, FaLinkedin, FaTwitterSquare, FaInstagram } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"
import styles from '../../styles/brochure.module.css'
import BrochureImg1 from "../../public/images/brochure/brochuresimage1.png";
import PushWheelChair from '../../public/images/brochure/PushWheelChair.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import  brochures from "../../src/datas/brochure.json";

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
         <section className={styles.breadcrumbSection}>
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                     <Link href="/">
                        <FaHome />
                     </Link>
                     <FaCaretRight />
                     <Link href="/brochures">
                        <a  title="Brochures">Equipment Brochures</a>
                     </Link>
                     <FaCaretRight />
                     <span className={styles.breadcrumbText}>Wheelchair Seating Systems Brochure</span>
               </div>
            </div>
         </section>
         <section className={styles.searchResultSection}>
            <div className={styles.container}>
               <div className={styles.sectionBox}>
                  <div className={styles.sectionTitle}>
                     <div className={styles.mainTitle}>
                        Wheelchair Seating Systems Brochure
                        <div className={styles.subTitle}>
                           Published: 12 August 2020
                        </div>
                     </div>
                     <div className={styles.sectionSharebox}>
                        <span>
                           Share this Brochure On
                        </span>
                        <ul>
                           <li><a href="" title="Facebook" rel="norefferer"><FaFacebook /></a></li>
                           <li><a href="" title="Linkedin" rel="norefferer"><FaLinkedin /></a></li>
                           <li><a href="" title="Twitter" rel="norefferer"><FaTwitterSquare /></a></li>
                           <li><a href="" title="Mail Us" rel="norefferer"><FaInstagram /></a></li>
                        </ul>
                     </div>
                  </div>
                  <section className={styles.mainbox}>
                     <div className={styles.detailbox}>
                        <div className={styles.detailimg}>
                           <Image src={BrochureImg1} />
                        </div>
                        <div className={styles.detailtext}>
                              <div className={styles.text}>
                                 <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
                                 <br/>
                                 <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,</p>
                              </div>
                              <div className={styles.buttonHolder}>
                                 <a href="" className={styles.button} title="Download Brochure">Download Brochure</a>
                              </div>
                        </div>
                     </div>
                     <div className={styles.products}>
                        <div className={styles.title}>
                           Products In Brochure
                        </div>
                        <div className={styles.products}>
                           <div className={styles.productsSlider} id="productsSlider">
                              <div className={styles.productArchiveItem}>
                                  
                                    <Slider {...settings}>
                                       {brochures.map( brochure => (
                                          <div key={brochure.id}>
                                             <Image src={PushWheelChair} />
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
                                          <div className={styles.productArchiveItemImage}>
                                             <a href="/products/singleProduct.tsx" title="">
                                                <Image src={PushWheelChair} />
                                             </a>
                                          </div>
                                          <div className={styles.productArchiveItemtext}>
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