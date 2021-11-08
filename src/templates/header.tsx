import Image from "next/image";
import styles from "../../pages/home/home.module.css";
import Logo from "../../public/images/logos/Logo.png";
import NDIS from "../../public/images/logos/LoveNDIS.png";
import { VscMail } from "react-icons/vsc";
import { IoGlobeSharp, IoBagHandleSharp, IoCall } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi"
import { FaClipboardList, FaUserAlt } from "react-icons/fa"
import Link from "next/link"

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
            <Link href="#">Resources</Link>
         </div>
         <div className={styles.menulinks}>
            <Link href="#">About Us</Link>
         </div>
         <div className={styles.menulinks}>
            <Link href="#">Contact Us</Link>
         </div>
         <div className={styles.menulinks}>
            <Link href="#">FAQs</Link>
         </div>
         <div className={styles.menulinks}>
            <Link href="#">Bookings</Link>
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