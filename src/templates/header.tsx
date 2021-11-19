import Image from "next/image";
import Logo from "../../public/images/logos/Logo.png";
import NDIS from "../../public/images/logos/LoveNDIS.png";
import { VscMail } from "react-icons/vsc";
import { IoGlobeSharp, IoBagHandleSharp, IoCall } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { BiSearch } from "react-icons/bi"
import { FaClipboardList, FaUserAlt } from "react-icons/fa"
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

const headerSection =() => {
   return( 
   <IdProvider>
      <section className="headerMain">
         <header className="headerSection">
         <div className="containerFluid">
               <div className="headerBox">
                  <div className="headerLogobox">
                     <Link href="/">
                        <a className="links">
                           <Image className="headerLogo" src={Logo} width="165px" height="61px" alt="" />
                        </a>
                     </Link>
                     <Link href="#">
                        <a className="links">
                           <Image className="headerLogo" src={NDIS} width="144px" height="63px" alt="" />
                        </a>
                     </Link>
                  </div>
                  <div className="headerItembox">
                  <div className="headerDetails">
                     <ul>
                        <li>
                           <VscMail width="25px" height="25px" />
                           <Link href="mailto:info@astris-pme.com.au">
                              <a className="links" title="Mail Us">
                                 info@astris-pme.com.au
                              </a>
                           </Link>
                        </li>
                        <li>
                           <IoCall width="25px" height="25px" />
                           <Link href="call:1300 131 884">
                              <a className="links"  title="Mail Us">
                                 1300 131 884
                              </a>
                           </Link>
                        </li>
                        <li className="languageList">
                           <IoGlobeSharp width="25px" height="25px" />
                           <span className="text">English (UK)</span>
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
                        <a className="links">
                           <button className="shopnow">
                              <IoBagHandleSharp />
                              SHOP NOW
                           </button>
                        </a>
                     </Link>
                  </div>
                  </div>
               </div>  
         </div>
         </header>
         <header className="headerNavbar">
            <div className="navBox">
               <div className="navBar">
                  <span></span><span></span><span></span>
               </div>
               <div className="navList">
                  <ul>
                     <li className="listDropdown">
                        <button title="Our Products">
                           <MdMenu width="16" height="14" />
                           <span className="text">Our Products</span>
                        </button>
                     </li>
                     <li className="hasChild">
                        <span>Resources</span>
                        <ul>
                           <li>
                              <Link href="/brochures">
                                 <a className="links"  title="Our Blogs">
                                    Blogs
                                 </a>
                              </Link>
                           </li>
                           <li>
                              <Link href="/blogs"><a className="links"  title="Brochures">Brochures</a></Link>
                           </li>
                        </ul>
                     </li>
                     <li className="hasChild">
                        <span>About Us</span>
                        <ul>
                           <li><Link href="/aboutUs/whatWeDo"><a className="links"  title="What We Do">What We Do</a></Link></li>
                           <li><Link href="/aboutUs/whoWeAre"><a className="links"  title="Who We Are">Who We Are</a></Link></li>
                           <li><Link href="/aboutUs/whereWeAre"><a className="links"  title="Where We Are">Where We Are</a></Link></li>
                        </ul>
                     </li>
                     <li><Link href="/contactUs"><a className="links"  title="Contact Us">Contact Us</a></Link></li>
                     <li><Link href="/faqs"><a className="links"  title="FAQs">FAQs</a></Link></li>
                     <li className="hasChild">
                        <span>Bookings</span>
                        <ul>
                           <li><button onClick={handleProductTrialPopup} title="Product Trial Request">Product Trial Request</button></li>
                           <li><button onClick={handleHireRequestPopup} title="Hire Request">Hire Request</button></li>
                           <li>
                              <Link href="/bookings/serviceRequest">
                                 <a><button title="Service Request">Service Request</button></a>
                              </Link>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>
               <div className="navItembox">
                  <div className="navSearchbox">
                     <input type="text" placeholder="Search Wesbite" />
                     <BiSearch />
                  </div>
                  <div className="navItem">
                     <ul>
                        <li>
                           <a className="links"  href="/myQuotes" title="">
                              <FaClipboardList className="dataIcon" />
                              <span className="dataText">2 Items</span>
                           </a>
                        </li>
                        <li>
                           <a className="links" href="/myDetails" title="User Portal">
                              <FaUserAlt className="dataIcon" />
                              <span className="dataText">User Portal</span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </header> 
      </section>


         
      
   </IdProvider>
   )
}

export default headerSection