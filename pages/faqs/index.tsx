import { FaHome, FaCaretRight, FaQuestion } from "react-icons/fa"
import styles from '../../styles/faq.module.css'
import Link from 'next/link'

const FAQ = () => {
   
   return(
      <>
         <section className="breadcrumb">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a><FaHome /></a>
                  </Link>
                  <FaCaretRight />
                  <span className="breadcrumbText">Terms and Conditions</span>
               </div>
            </div>
         </section>
         <section>
            <div className="mainTitle">
               FREQUENTLY ASKED QUESTIONS
               <div className="subTitle">
                  Get All Your Queries Answered
               </div>
            </div>
            <div className="sectionTitle">
               <div className="sectionSearchbox">
                  <FaQuestion />
                  <input type="text" placeholder="Type & Find Your Preferred Brand" />
               </div>
            </div>
            <div className="faqSection">
               <div className="faqQuestion">
                  {Array(5).fill("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ?")}
                  <br/><br/>
                  <div className="faqAnswer">
                     {Array(5).fill("Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren")}
                  </div>
               </div>
               
            </div>
         </section>
      </>
   )
}
export default FAQ