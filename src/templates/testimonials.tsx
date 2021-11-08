import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/testimonials.module.css'
import SayingPerson1 from '../../public/images/testimonialPerson1.png'
import PlayIcon from '../../public/images/iconPlay.svg'
import sayings from '../../src/datas/sayings.json'
import React from "react"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export const getStaticProps = async () => {
   const res = "../src/datas/sayings.json"
   // const data = await res.json()
   console.log(res)
   return{
      props: { sayings : [] }
   }

}

const Testimonials = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 4,
      slidesToScroll: 1
    }; 
    
    return(
      <>
         <section className = {styles.testimonialSection}>
            <div className = {styles.testimonialBgoverlay}></div>
            <div className = {styles.container}>
               <div className = {styles.sectionBox}>
                     <div className = {styles.sectionTitle}>
                        <div className = {styles.mainTitle}>
                           <h3>What Our Valued Clients Have To Say</h3>
                        </div>
                     </div>
                     <div className = {styles.testimonialSliderbox}>
                        <div className = {styles.testimonialSlider} id="testimonialSlider">
                        <Slider {...settings}>
                           {sayings.map( saying => (
                              <div key={saying.id}>
                                 <Image src={SayingPerson1} />
                                 {/*<div>
                                    
                                    <div className={styles.testimonialVideo}>
                                        <button>
                                          <Image src={PlayIcon} />
                                       </button> 
                                    </div>
                                 </div>*/}
                                 <span>{ saying.desc }</span>
                                 <br/>
                                 <button>
                                    Continue Reading
                                 </button>
                              </div>
                           ))}
                           
                        </Slider>
                        </div>
                     </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Testimonials