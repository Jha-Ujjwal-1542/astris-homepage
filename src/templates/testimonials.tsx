import Link from 'next/link'
import Image from 'next/image'
import SayingPerson1 from '../../public/images/testimonialPerson1.png'
import SayingPerson2 from '../../public/images/testimonialPerson2.png'
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
      slidesToShow: 2,
      slidesToScroll: 1
    }; 
    
    return(
      <>
         <section className = "testimonialSection">
            <div className = "container">
               <div className = "sectionBox">
                     <div className = "sectionTitle">
                        <div className = "mainTitle">
                           <h3>What Our Valued Clients Have To Say</h3>
                        </div>
                     </div>
                     <div className = "testimonialSliderbox">
                        <div className = "testimonialSlider" id="testimonialSlider">
                        <Slider {...settings}>
                           {sayings.map( saying => (
                              <div key={saying.id}>
                                 <div className="testimonialImage">
                                    <div className="testimonialImage figure">
                                       <Image className="testimonialImage image" src={saying.image} width="530px" height="240px" alt="" />   
                                    </div>
                                 </div>
                                 {/*<div>
                                    
                                    <div className="testimonialVideo}>
                                        <button>
                                          <Image src={PlayIcon} />
                                       </button> 
                                    </div>
                                 </div>*/}
                                 <div className="details"> 
                                    <div className="name">{saying.name}</div>
                                    <span>{ saying.desc }</span>
                                 </div>
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