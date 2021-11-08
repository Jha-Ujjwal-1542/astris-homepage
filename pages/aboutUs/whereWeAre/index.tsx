import styles from '../../../styles/whereWeAre.module.css';
import Image from "next/image";
import { FaHome, FaCaretRight } from "react-icons/fa";
import office1 from "../../../public/images/offices/head.png"
import office2 from "../../../public/images/offices/sydney.png"
import office3 from "../../../public/images/offices/young.png"
import office4 from "../../../public/images/offices/melbourne.png"
import office5 from "../../../public/images/offices/brisbane.png"
import office6 from "../../../public/images/offices/centralCoast.png"
import office7 from "../../../public/images/offices/canberra.png"
import { CCard, CCardBody, CCardImage, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import offices from '../../../src/datas/offices.json'

export const getStaticProps = async () => {
   const res = "../src/datas/team.json"
   return{
      props: { offices : [] }
   }
}

const whereWeAre = () => {
   return (
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
                     Where We Are
                  </span>
               </div>
            </div>
         </section>
         <section className={styles.whoweareSection}>
            <div className={styles.container}>
               <div className={styles.aboutusTextbox}>
                  <div className={styles.sectionTitle}>
                     <div className={styles.subTitle}>
                        <span>WHERE WE ARE</span>
                     </div>
                     <div className={styles.mainTitle}>
                        <span>Visit Astris PME</span>
                     </div>
                  </div>
                  <div className={styles.description}>
                     <p>Please contact us if you wish to visit one of our showrooms. To make the most of our personalised service, visits to our showrooms are by appointment only.</p>
                  </div>
               </div>
               <div className={styles.officesDescription}>
               {offices.map( office => (
                  <div key={office.id}>
                     <Image src={office1} />
                     <br/>
                     <span>{ office.name }</span>
                     <br/>
                     <span>{ office.location }</span>
                  </div>
               ))}
               </div>
            </div>
         </section>
      </section>
   )
}

export default whereWeAre
