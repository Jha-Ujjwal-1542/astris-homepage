import styles from '../../styles/contactUs.module.css'
import Link from 'next/link'
import { FaHome, FaCaretRight } from 'react-icons/fa'
import ContactForm from "../"


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
         <section>
            <div className="mainTitle">
               Message Center
               <div className="subTitle">
                  Please complete the following form and we will reach out to you soon.
               </div>
            </div>
            <section className="contactUsSection">
               <div className="container">
                  <div className="sectionBox">
                     <div className="contactusBox">
                        <ContactForm />
                     </div>
                  </div>
               </div>
            </section>
         </section>
      </section>
   )
}

export default contactUs