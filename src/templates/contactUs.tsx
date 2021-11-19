import Image from "next/image";
import ContactForm from "../../src/templates/sharedModule/contact/contactFormHome"
import ExpertTherapist from "../../public/images/Expert therapist.png"
import contactBG from "../../public/images/contactBg.png"


const ContactUs = () => {
   return (
      <section className="contactSection">
         <div className="contactBgoverlay">
            <Image src={contactBG} width="" height="" alt="" />
         </div>
         <div className="container">
            <div className="contactBox">
               <div className="contactImagebox">
                  <div className="contactImage">
                     <figure>
                        <Image width="522px" height="500px" src={ExpertTherapist} alt="" />
                     </figure>
                  </div>
                  <div className="contactImagetext">
                     <strong>Joanna Bloggs</strong> Expert Therapist
               </div>
               </div>
               <div className="contactFormbox">
                  <div className="sectionTitle">
                     <div className="subTitle">
                        FREE CONSULTATION
                     </div>
                     <div className="mainTitle">
                        <h3>Speak To Us Today!</h3>
                     </div>
                  </div>
                  <ContactForm />
               </div>
            </div>
         </div>
      </section>
   )      
}
export default ContactUs;