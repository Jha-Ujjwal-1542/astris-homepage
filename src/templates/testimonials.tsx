import Link from 'next/link'
import Image from 'next/image'
import TestimonialBG from '../../public/images/testimonial/testimonialBg.png'
import PlayIcon from '../../public/images/iconPlay.svg'
import sayings from '../../src/datas/sayings.json'
import React from "react"


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
      <section className = "testimonialSection">
         <div className="testimonialBgoverlay">
            <Image src={TestimonialBG} alt="" />
         </div>
         <div className = "container">
            <div className = "sectionBox">
               <div className = "sectionTitle center">
                  <div className = "mainTitle">
                     <h3 className="colWhite">What Our Valued Clients Have To Say</h3>
                  </div>
               </div>
               <div className = "testimonialSliderbox">
                  <div className = "testimonialSlider" id="testimonialSlider">
                     {sayings.map( saying => (
                        <div className="testimonialItem" key={saying.id}>
                           <div className="testimonialImagebox">
                                 <div className="testimonialImage">
                                    <figure>
                                       <Image src={saying.image} width="530px" height="250px" alt="Testimonials" />
                                    </figure>
                                 </div>
                                 <div className="testimonialVideoPopup">
                                    <button>
                                       <Image src={PlayIcon} alt="Play Icon" />
                                    </button>
                                 </div>
                              </div>
                              <div className="testimonialTextbox">
                                 <div className="text">
                                    <p>PME are fantastic – the best we’ve ever dealt with. We had to get through a few issues with NDIS to get my daughters new wheelchair, but once that was sorted the process was made easy by PME. They couldn’t do enough for us.</p>
                                 </div>
                                 <div className="details">
                                    <div className="name">{saying.name}</div>
                                    <span>{ saying.desc }</span>
                                 </div>
                              </div>
                           </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Testimonials