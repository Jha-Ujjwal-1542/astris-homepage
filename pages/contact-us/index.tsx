import styles from '../../styles/contactUs.module.css'
import Link from 'next/link'
import { FaHome, FaCaretRight } from 'react-icons/fa'
import ContactForm from "../../src/templates/sharedModule/contact/contactForm"


const contactUs = () => {
   return(
      <section>
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a><FaHome /></a>
                  </Link>
                  <FaCaretRight />
                  <span className="breadcrumbText">Message Center</span>
               </div>
            </div>
         </section>
         <section className="contactUsSection">
            <div className="container">
               <div className="sectionBox">
                  <div className="sectionTitle">
                     <div className="mainTitle">
                        <h3>Message Center</h3>
                     </div>
                     <div className="text">
                        <p>Please complete the following form and we will reach out to you soon.</p>
                     </div>
                  </div>
                  <div className="contactusBox">
                        <ContactForm />
                  </div>
               </div>
            </div>
         </section>
      </section>
   )
}

export default contactUs