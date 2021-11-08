import Image from "next/image";
import ExpertTherapist from "../../public/images/Expert therapist.png"
import ContactForm from "../../src/templates/sharedModule/contact/contactForm"


const ContactUs = () => {
   return (
      <section className="contactus--section padding-area">
      <div className="container">
         <div className="section--box small-gap">
            <div className="sub-title col-skyblue">
               FREE CONSULTATION
            </div>
            <div className="main-title">
               Speak To Us Today!
            </div>
            <div className="contactus--box">
               <div className="contactus--itemholder">
                  <div className="contactus--formbox">
                     <ContactForm />
                     <div className="contactus--itembox">
							   <div className="contactus--item">
                           <div className="contactus--itemdetail">
                              <Image
                                 width="900px"
                                 height="500px"
                                 src={ExpertTherapist}
                                 alt=""
                              />
                              <span>Joanna Bloggs Expert Therapist</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
   )
}
export default ContactUs;