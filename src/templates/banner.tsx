import Image from "next/image";
import styles from "../../styles/banner.module.css";
import { IoBagHandleSharp } from "react-icons/io5";
import bannerimg from "../../public/images/bannerimg.png"

const banner = () => {
   return(
      <section>
         <div className={styles.BannerDescription}>
            <div className={styles.welcome}>
               <Image 
                  src={bannerimg} 
                  className={styles.banner} 
                  width="1800px" 
                  height="516px" 
               />
            </div>
            <span className={styles.welcometext1}>Welcome to Astris PME</span><br/>
            <span className={styles.welcometext2}>Improving lives</span>
            <div>
               <button className={styles.producttrial}>
                  <span>REQUEST PRODUCT TRIAL</span>
               </button>
               <button className={styles.browseprods}>
               <IoBagHandleSharp /> <span>START BROWSING PRODUCTS</span>
               </button>
            </div>
         </div>
      </section>
   )
}

export default banner