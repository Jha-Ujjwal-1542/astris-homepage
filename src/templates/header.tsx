import Image from "next/image";
import Logo from "../../public/images/logos/Logo.png";
import NDIS from "../../public/images/logos/LoveNDIS.png";
import { IoMdMail } from "react-icons/io";
import { IoGlobeSharp, IoBagHandleSharp, IoCall } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { FaClipboardList, FaUserAlt, FaCaretDown, FaSearch } from "react-icons/fa"
import Link from "next/link"
import { IdProvider } from '@radix-ui/react-id';
import prodTrialPopup from "../includes/popup/prodTrialPopup";
import portalLogin from "../includes/popup/portalLogin";

export const handleProductTrialPopup =() => {
  //Product Trial popup
}
export const handleHireRequestPopup=()=>{
   //Hire Req portal login form
}

const Header =() => {
   return( 
   <header className="headerSticky">
      <section className="headerSection">
         <div className="containerFluid">
               <div className="headerBox">
                  <div className="headerLogobox">
                     <div className="headerLogo">
                        <Link href="/">
                           <a>
                              <Image title="Astris PME" src={Logo} width="165px" height="61px" alt="" />
                           </a>
                        </Link>
                     </div>
                     <div className="headerLogo">
                        <Link href="#">
                           <a className="ndisLogo">
                              <Image title="NDIS" src={NDIS} width="144px" height="63px" alt="" />
                           </a>
                        </Link>
                     </div>
                  </div>
                  <div className="headerItembox">
                     <div className="headerDetails">
                        <ul>
                           <li>
                              <IoMdMail className="iconHead" />
                              <Link href="mailto:info@astris-pme.com.au">
                                 <a className="links" title="Mail Us">info@astris-pme.com.au</a>
                              </Link>
                           </li>
                           <li>
                              <IoCall className="iconHead" />
                              <Link href="tel:1300 131 884">
                                 <a className="links"  title="Call Us">1300 131 884</a>
                              </Link>
                           </li>
                           <li className="languageList">
                              <IoGlobeSharp className="iconHead" />
                              <span className="text">English (UK)</span>
                              <FaCaretDown className="iconDropdown" />
                              <ul>
                                 <li><button title="languageList">English (AUS)</button></li>
                                 <li><button title="languageList">English (UK)</button></li>
                                 <li><button title="languageList">English (US)</button></li>
                                 <li><button title="languageList">Español</button></li>
                              </ul>
                           </li>
                        </ul>
                     </div>
                     <div className="headerButton">
                        <Link href="/equipments" passHref>
                           <a  className="links"  >
                              <button className="button caps buttonIcon buttonYellow" title="Shop Now">
                                 <span className="dataIcon"><IoBagHandleSharp className="iconHead"  /></span>
                                 <span className="dataText">SHOP NOW</span>
                              </button>
                           </a>
                        </Link>
                     </div>
                  </div>
               </div>  
         </div>
      </section>
      <nav className="headerNavbar">
         <div className="navBox">
            <div className="navBar" id="navBar">
               <span></span><span></span><span></span>
            </div>
            <div className="navList">
               <ul>
                  <li className="listDropdown">
                     <button title="Our Products" id="navProductTrigger">
                        {/* <div className="navBar" id="productNavBar">
                           <span></span><span></span><span></span>
                        </div> */}
                        <MdMenu width={16} height={14} />
                        <span className="text">Our Products</span>
                     </button>
                  </li>
                  <li className="hasChild">
                     <Link href="#" passHref>
                        <a className="links"  title="Resources">Resources</a>
                     </Link>
                     <FaCaretDown className="iconDropdown"  />
                     <ul>
                        <li>
                           <Link href="/brochures">
                              <a className="links"  title="Our Blogs"> Our Blogs</a>
                           </Link>
                        </li>
                        <li>
                           <Link href="/blogs"><a className="links"  title="Brochures">Brochures</a></Link>
                        </li>
                     </ul>
                  </li>
                  <li className="hasChild">
                     <Link href="#">
                        <a className="links"  title="About Us">About Us</a>
                     </Link>
                     <FaCaretDown className="iconDropdown" />
                     <ul>
                        <li><Link href="/aboutUs/whatWeDo"><a className="links"  title="What We Do">What We Do</a></Link></li>
                        <li><Link href="/aboutUs/whoWeAre"><a className="links"  title="Who We Are">Who We Are</a></Link></li>
                        <li><Link href="/aboutUs/whereWeAre"><a className="links"  title="Where We Are">Where We Are</a></Link></li>
                     </ul>
                  </li>
                  <li>
                     <Link href="/contactUs">
                        <a className="links"  title="Contact Us">Contact Us</a>
                     </Link>
                  </li>
                  <li>
                     <Link href="/faqs">
                        <a className="links"  title="FAQs">FAQs</a>
                     </Link>
                  </li>
                  <li className="hasChild">
                     <Link href=""><a className="links"  title="Bookings">Bookings</a></Link>
                     <FaCaretDown className="iconDropdown" />
                     <ul>
                        <li><button title="Product Trial Request">Product Trial Request</button></li>
                        <li><button title="Hire Request">Hire Request</button></li>
                        <li>
                           <Link href="/bookings/serviceRequest">
                              <a className="links" ><button title="Service Request">Service Request</button></a>
                           </Link>
                        </li>
                     </ul>
                  </li>
               </ul>
            </div>
            <div className="navItembox">
               <div className="navSearchbox">
                  <input type="text" placeholder="Search Wesbite" />
                  <FaSearch />
               </div>
               <div className="navItem">
                  <ul>
                     <li>
                        <Link href="/myQuotes" passHref scroll>
                           <a className="links"  title="">
                              <span className="dataIcon"><FaClipboardList className="iconHead" /></span>
                              <span className="dataText">2 Items</span>
                           </a>
                        </Link>
                     </li>
                     <li>
                        <Link href="/myDetails" passHref>
                           <a  className="links" title="User Portal">
                              <span className="dataIcon"><FaUserAlt className="iconHead" /></span>
                              <span className="dataText">User Portal</span>
                           </a>
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </nav>
   </header>
   
   )
}

export default Header