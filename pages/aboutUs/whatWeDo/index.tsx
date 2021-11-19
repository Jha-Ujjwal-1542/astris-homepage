import { FaHome, FaCaretRight, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import people from "../../../public/images/people.png"
import aboutusImage2 from "../../../public/images/aboutusImage2.png"
import Timo from "../../../public/images/brands/brand1.png"
import Thomas from "../../../public/images/brands/brand2.png"
import Columbia from "../../../public/images/brands/brand3.png"
import Spex from "../../../public/images/brands/brand4.png"
import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { GrDiamond } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { GiStrong } from "react-icons/gi";

const whatWeDo = () => {
      const settings = {
         dots: false,
         infinite: true,
         speed: 250,
         slidesToShow: 4,
         slidesToScroll: 1
       }; 
   
   return(
      <section>
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a>
                     <FaHome />
                     </a>
                  </Link>
                  <span className="breadcrumbIcon">
                     <FaCaretRight />
                  </span>
                  <span>What We Do</span>
               </div>
            </div>
         </section>
         <section className="whatwedoSection">
            <div className="container">
               <div>
                     <div className="sectionTitle">
                        <div className="subTitle">WHAT WE DO</div>
                        <div className="mainTitle">
                           <h3>The Astris PME Story</h3>
                        </div>
                     </div>
                     <div>
                        <Image src={people}  alt="" />
                     </div>
                     <div className="aboutusTextbox">
                        <div className="description">
                           <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                           <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                           <p>Our vision is to be Australia’s leading supplier of world class assistive technology equipment that improves quality of life for clients and carers.</p>
                           <p>Our mission is to achieve this by providing technologically advanced equipment that empowers individual achievement and enables the full potential of all people with a disability.</p>
                        </div>
                     </div>
                  <div className="aboutusBox">
                     <div className="aboutusImage">
                        <Image src={aboutusImage2}  alt=""  />
                     </div>
                     <div className="aboutusTextbox">
                        <div className="description">
                              <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                              <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                              <p>Our vision is to be Australia’s leading supplier of world class assistive technology equipment that improves quality of life for clients and carers.</p>
                              <p>Our mission is to achieve this by providing technologically advanced equipment that empowers individual achievement and enables the full potential of all people with a disability.</p>
                        </div>
                        <div className="buttonHolder">
                              <Link href="/aboutUs/whoWeAre">
                                 <a  className="buttonLink" title="View our Team Members">View our Team Members</a>
                              </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className="whychooseusSection">
            <div className="container">
               <div className="featuregroup">
                  <div>
                     <GrDiamond /> 
                     <br/>
                     <span>Equipment Trials</span>
                     <span>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</span>
                  </div>
                  <div>
                     <RiTeamLine/>
                     <br/>
                     <span>Experienced Team</span>
                     <span>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</span></div>
                  <div><GiStrong />
                     <br/>
                     <span>Strong Relationships</span>
                     <span>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</span>
                     </div>
                  <div><FaHandsHelping/>
                     <br/>
                     <span>Configured Care</span>
                     <span>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</span>
                  </div>
                  
                  
                  
               </div>
            </div>
         </section>
         <section className="brandsSection">
            <div className="container">
               <div className="sectionBox">
                     <div className="sectionTitle">
                        <div className="mainTitle">
                           <h3>Trusted By The Following Brands</h3>
                        </div>
                     </div>
                     <div className="brandsSliderbox">
                        <div className="brandsSlider owl-carousel owl-theme" id="brandsSlider">
                           <div className="brandsItem">
                              <Link href="#">
                              <a title="">
                                 <figure>
                                    <Image className="brandsImage" src={Timo} alt="" />
                                 </figure>
                                 <figure>
                                    <Image className="brandsImage" src={Thomas} alt="" />
                                 </figure>
                                 <figure>
                                    <Image className="brandsImage" src={Columbia} alt="" />
                                 </figure>
                                 <figure>
                                    <Image className="brandsImage" src={Spex} alt="" />
                                 </figure>
                              </a>
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </section>
      
   )
}

export default whatWeDo