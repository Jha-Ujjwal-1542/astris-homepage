import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaFacebookSquare, FaLinkedin, FaYoutube, FaPhoneAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import astrispmeLogo from "../../public/images/logos/astrisPMELogowhaite.png"

const footer = () => {
   return(
      <section>
         
         <section className="footerSection">
         <div className="container">
               <div className="footerBox">
                  <div className="footerDetailbox">
                     <div className="footerLogo">
                        <Link href="/" >
                           <a>
                              <Image src={astrispmeLogo} alt="" />
                           </a>
                        </Link>
                     </div>
                     <div className="footerList">
                        <div className="footerListTitle">Contact Us</div>
                        <ul className="dataSpan">
                           <li>
                              <span className="dataIcon"><FaPhoneAlt  /></span>
                              <span className="dataText"><a href="tel:1300131884" title="Call Us">1300 131 884</a></span>
                           </li>
                           <li>
                              <span className="dataIcon"><SiGmail /></span>
                              <span className="dataText"><a href="mailto:info@astris-pme.com.au" title="Mail Us">info@astris-pme.com.au</a></span>
                           </li>
                        </ul>
                     </div>
                     <div className="footerNewsletter">
                        <div className="formGroup">
                           <SiGmail  />
                           <input type="email" className="formControl" placeholder="Your Email Address"  />
                        </div>
                        <div className="formGroupSubmit">
                           <input type="submit" className="buttonGrey" value="SUBSCRIBE TO OUR NEWSLETTER" />
                        </div>
                     </div>
                  </div>
                  <div className="footerDetailbox">
                     <div className="footerListbox">
                        <div className="footerList">
                           <div className="footerListTitle">Site Map</div>
                           <ul>
                              <li> 
                                 <Link href="/aboutUs/whatWeDo">
                                    <a title="About Us">About Us</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/browseByCategory">
                                    <a title="Our Products">Our Products</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/browseByCategory">
                                    <a title="Shop Now">Shop Now</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/brochures">
                                    <a title="Resources">Resources</a>
                                    </Link>
                              </li>
                              <li>
                                 <Link href="/serviceRequest">
                                    <a title="Booking">Booking</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/contactUs">
                                    <a title="Contact Us">Contact Us</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/myTherapist">
                                    <a title="Therapist">Therapist</a>
                                 </Link>
                              </li>
                              <li>
                                 <Link href="/myDetails">
                                    <a title="User Portal">User Portal</a>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                        <div className="footerList">
                           <div className="footerListTitle">Our Branches</div>
                           <ul className="dataSpan">
                                 <li>
                                    <span className="dataIcon"><FaMapMarkerAlt /></span>
                                    <span className="dataText"><strong>Sydney (HO)</strong> 0 Prime Dr, Seven Hills NSW 2147</span>
                                 </li>
                                 <li>
                                    <span className="dataIcon"><FaMapMarkerAlt  /></span>
                                    <span className="dataText"><strong>Sydney (South)</strong> 4 Phiney Place, Ingleburn NSW 2565</span>
                                 </li>
                                 <li>
                                    <span className="dataIcon"><FaMapMarkerAlt  /></span>
                                    <span className="dataText"><strong>Newcastle/Central Coast</strong> 109 Munibong Road, Boolaroo, NSW 2284</span>
                                 </li>
                                 <li>
                                    <span className="dataIcon"><FaMapMarkerAlt  /></span>
                                    <span className="dataText"><strong>Young</strong> 5 McVeigh St, Young NSW 2594</span>
                                 </li>
                                 <li>
                                    <span className="dataIcon"><FaMapMarkerAlt  /></span>
                                    <span className="dataText"><strong>Brisbane</strong> 38 Industry Place, Wynnum</span>
                                 </li>
                                 <li>
                                    <span className="dataIcon"><FaMapMarkerAlt /></span>
                                    <span className="dataText"><strong>Melbourne</strong> 3 Carmen Street Truganina VIC 3029</span>
                                 </li>
                                 <li>
                                 <span className="dataIcon"><FaMapMarkerAlt  /></span>
                                 <span className="dataText"><strong>Canberra</strong> 3 Dominion Place, Queanbeyan, NSW 2620</span>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="footerData">
                        <ul className="socialIcons">
                           <li><Link href="#"><a title="Facebook" rel="noreferrer"><FaFacebookSquare /></a></Link></li>
                           <li><Link href="#"><a title="Linkedin" rel="noreferrer"><FaLinkedin /></a></Link></li>
                           <li><Link href="#"><a title="Youtube" rel="noreferrer"><FaYoutube /></a></Link></li>
                        </ul>
                        <div className="text">Improving Lives. With Astris PME.</div>
                     </div>
                  </div>
               </div>
               </div>
         </section>
        
         
         <section>
            <div className="copyrightBox">
               <div className="container">
                  <div className="copyrightText">
                     © 2021 Astris PME Pty Ltd. All Rights Reserved.
                  </div>
                  <div className="copyrightLinks">
                     <ul>
                        <li>
                           <Link href="#">
                              <a title="Terms & Conditions">
                                 Terms & Conditions
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a title="Privacy Policy">
                                 Privacy Policy
                              </a>
                           </Link>
                        </li>
                        <li>
                           <Link href="#">
                              <a title="Terms Of Use">
                                 Terms Of Use
                              </a>
                           </Link>
                        </li>
                     </ul>
                  </div>
                  <div className="copyrightText">
                     By 
                     <Link href="#">
                        <a title="WEBO Digital">WEBO Digital</a>
                     </Link>
                  </div>
               </div>
            </div>
         </section>
      </section>
   )
}

export default footer
