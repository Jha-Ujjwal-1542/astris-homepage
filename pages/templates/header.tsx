import Image from "next/image";
import styles from "../home/home.module.css";
import Logo from "../img/Logo.png";
import NDIS from "../img/LoveNDIS.png";
import { VscMail } from "react-icons/vsc";
import { IoCall } from "react-icons/io5";
import { IoGlobeSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { IoBagHandleSharp } from "react-icons/io5";
import { BiSearch } from "react-icons/bi"
import { FaClipboardList } from "react-icons/fa"
import { FaUserAlt } from "react-icons/fa"

const headerSection =() => {
   return( 
   <section className="aboutus--section">
      <div className={styles.header}>
         <Image src ={Logo} width="165px" height="61px" />
         <Image src = {NDIS} width="144px" height="63px" />
         <div className={styles.info}>
            <VscMail />
            info@astris-pme.com.au
         </div>
         <div className={styles.info}>
            <IoCall />
            1300 131 884
         </div>
         <div className={styles.languages}>
            <IoGlobeSharp />
            Languages
            {/* <select name="languages" id="languages">
               <option value="UK">English (UK)</option>
               <option value="AUS">English (AUS)</option>
               <option value="US">English (US)</option>
               <option value="Spanish">Español</option>
            </select> */}
         </div>
         <button className={styles.shopnow}>
            <IoBagHandleSharp />
            SHOP NOW
         </button>
      </div>
      <div className={styles.header}>
         <button className={styles.menubutton}>
            <MdMenu width="16px" height="14px" />
            OUR PRODUCTS
         </button>
         <div className={styles.menulinks}>
            Resources
         </div>
         <div className={styles.menulinks}>
            About Us
         </div>
         <div className={styles.menulinks}>
            Contact Us
         </div>
         <div className={styles.menulinks}>
            FAQs
         </div>
         <div className={styles.menulinks}>
            Bookings
         </div>
         <div className={styles.search}>
            <BiSearch />
            Search Wesbite
         </div>
         <div>
            <FaClipboardList/>  2 items
         </div>
         <div>
            <FaUserAlt />  User Portal
         </div>
      </div>
   </section>
   )
}

export default headerSection