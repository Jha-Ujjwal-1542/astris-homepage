import Header from "../../templates/header"
import HomeBanner from "../homeBanner/index"
import styles from "../home.module.css";
import { MdHome } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import aboutusImage1 from "../../img/aboutusImage1.png"
import aboutusImage2 from "../../img/aboutusImage2.png"


const whatWeDo = () => {
   return(
      <section>
         <section className={styles.breadcrumbSection}>
            <Header />
            <HomeBanner />
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <a href="/" className={styles.breadcrumbHome}>
                     <MdHome />
                  </a>
                  <span className={styles.breadcrumbIcon}>
                     <IoMdArrowDropright />
                  </span>
                  <span className={styles.breadcrumbText}>
                     What We Do
                  </span>
               </div>
            </div>
         </section>
         <section className={styles.whoweareSection}>
         <div className={styles.container}>
            <div>
               <div>
                  <div>
                     <Image src={aboutusImage1} />
                  </div>
                  <div className={styles.aboutusTextbox}>
                     <div className={styles.sectionTitle}>
                        <div className={styles.subTitle}>WHO WE ARE</div>
                           <div className={styles.mainTitle}>
                              <h3>The Astris PME Story</h3>
                           </div>
                        </div>
                        <div className={styles.description}>
                              <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                              <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                              <p>Our vision is to be Australia’s leading supplier of world class assistive technology equipment that improves quality of life for clients and carers.</p>
                              <p>Our mission is to achieve this by providing technologically advanced equipment that empowers individual achievement and enables the full potential of all people with a disability.</p>
                        </div>
                     </div>
                  </div>
                  <div className={styles.aboutusBox}>
                     <div className={styles.aboutusImg}>
                        <figure>
                              <Image src={aboutusImage2} />
                        </figure>
                     </div>
                     <div className={styles.aboutusTextbox}>
                        <div className={styles.description}>
                              <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                              <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                              <p>Our vision is to be Australia’s leading supplier of world class assistive technology equipment that improves quality of life for clients and carers.</p>
                              <p>Our mission is to achieve this by providing technologically advanced equipment that empowers individual achievement and enables the full potential of all people with a disability.</p>
                        </div>
                        <div className={styles.buttonHolder}>
                              <a href="who-we-are.php" className={styles.buttonLink} title="View our Team Members">View our Team Members</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </section>
      
   )
}

export default whatWeDo