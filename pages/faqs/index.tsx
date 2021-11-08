import { FaHome, FaCaretRight, FaQuestion } from "react-icons/fa"
import styles from '../../styles/faq.module.css'
import Link from 'next/link'

const FAQ = () => {
   
   return(
      <>
         <section className={styles.breadcrumb}>
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <Link href="/">
                     <FaHome />
                  </Link>
                  <FaCaretRight />
                  <span className={styles.breadcrumbText}>Terms and Conditions</span>
               </div>
            </div>
         </section>
         <section>
            <div className={styles.mainTitle}>
               FREQUENTLY ASKED QUESTIONS
               <div className={styles.subTitle}>
                  Get All Your Queries Answered
               </div>
            </div>
            <div className={styles.sectionTitle}>
               <div className={styles.sectionSearchbox}>
                  <FaQuestion />
                  <input type="text" placeholder="Type & Find Your Preferred Brand" />
               </div>
            </div>
            <div className={styles.faqSection}>
               <div className={styles.faqQuestion}>
                  {Array(5).fill("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut ?")}
                  <br/><br/>
                  <div className={styles.faqAnswer}>
                     {Array(5).fill("Dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren")}
                  </div>
               </div>
               
            </div>
         </section>
      </>
   )
}
export default FAQ