import styles from "../../../styles/whereWeAre.module.css";
import { FaHome, FaCaretRight, FaHandsHelping } from "react-icons/fa";
import Image from "next/image";
import aboutusImage1 from "../../../public/images/aboutUsImage1.png"
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
         <section className={styles.breadcrumbSection}>
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <a href="/" className={styles.breadcrumbHome}>
                     <FaHome />
                  </a>
                  <span className={styles.breadcrumbIcon}>
                     <FaCaretRight />
                  </span>
                  <span className={styles.breadcrumbText}>
                     What We Do
                  </span>
               </div>
            </div>
         </section>
         <section className={styles.whoweareSection}>
            <div className={styles.container}>
               <div>
                  <div>
                     <div className={styles.aboutusTextbox}>
                        <div className={styles.sectionTitle}>
                           <div className={styles.subTitle}>WHAT WE DO</div>
                           <div className={styles.mainTitle}>
                              <h3>The Astris PME Story</h3>
                           </div>
                        </div>
                        <div>
                           <Image src={aboutusImage1} />
                        </div>
                        <div className={styles.description}>
                           <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                           <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                           <p>Our vision is to be Australia’s leading supplier of world class assistive technology equipment that improves quality of life for clients and carers.</p>
                           <p>Our mission is to achieve this by providing technologically advanced equipment that empowers individual achievement and enables the full potential of all people with a disability.</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.aboutusBox}>
                     <div className={styles.aboutusImg}>
                        <Image src={aboutusImage2} />
                     </div>
                     <div className={styles.aboutusTextbox}>
                        <div className={styles.description}>
                              <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                              <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                              <p>Our vision is to be Australia’s leading supplier of world class assistive technology equipment that improves quality of life for clients and carers.</p>
                              <p>Our mission is to achieve this by providing technologically advanced equipment that empowers individual achievement and enables the full potential of all people with a disability.</p>
                        </div>
                        <div className={styles.buttonHolder}>
                              <a href="/aboutUs/whoWeAre" className={styles.buttonLink} title="View our Team Members">View our Team Members</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section className={styles.whychooseusSection}>
            <div className={styles.container}>
               <div className={styles.featuregroup}>
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
         <section className={styles.brandsSection}>
            <div className={styles.container}>
               <div className={styles.sectionBox}>
                     <div className={styles.sectionTitle}>
                        <div className={styles.mainTitle}>
                           <h3>Trusted By The Following Brands</h3>
                        </div>
                     </div>
                     <Slider {...settings}>
                        <Image src={Timo} width="520px" height="230px" />
                        <Image src={Thomas} width="520px" height="230px" />
                        <Image src={Columbia} width="520px" height="230px" />
                        <Image src={Spex} width="520px" height="230px" />  
                     </Slider>
               </div>
            </div>
         </section>
      </section>
      
   )
}

export default whatWeDo