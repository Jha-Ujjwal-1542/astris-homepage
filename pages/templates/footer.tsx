import styles from "../../pages/home/home.module.css";
import Image from "next/image";
import astrispmeLogo from "../img/astrisPMELogowhaite.png"
import iconPhone from "../img/phoneIcon.png"
import iconMail from "../img/mailIcon.png"
import iconMapMarker from "../img/locationIcon.png"
import iconFacebook from "../img/fbIcon.png"
import iconLinkedin from "../img/linkedinIcon.png"
import iconYoutube from "../img/youtubeIcon.png"

const footer = () => {
   return(
      <section>
         <footer className={styles.footerSection}>
            <div className={styles.container}>
               <div className={styles.footerBox}>
                  <div className={styles.footerDetailbox}>
                     <div className={styles.footerLogo}>
                        <a href="/" title="">
                           <Image src={astrispmeLogo} />
                        </a>
                     </div>
                     <div className={styles.footerListMain}>
                        <div className={styles.footerList}>Contact Us</div>
                           <ul className={styles.dataSpan}>
                              <li>
                                 <span className={styles.dataIcon}><Image src={iconPhone} /></span>
                                 <span className={styles.dataText}><a href="tel:1300131884" title="Call Us">1300 131 884</a></span>
                              </li>
                              <li>
                                 <span className={styles.dataIcon}>
                                    <Image src={iconMail} />
                                 </span>
                                 <span className={styles.dataText}><a href="mailto:info@astris-pme.com.au" title="Mail Us">info@astris-pme.com.au</a></span>
                              </li>
                           </ul>
                        </div>
                        <div className={styles.footerNewsletter}>
                           <div className={styles.formGroup}>
                           <Image src={iconMail} />
                              <input type="email" placeholder="Your Email Address" className={styles.formControl} />
                           </div>
                           <div className={styles.formGroupSubmit}>
                              <input type="submit" className={styles.buttonGrey} value="SUBSCRIBE TO OUR NEWSLETTER" />
                           </div>
                        </div>
                     </div>
                     <div className={styles.footerItembox}>
                        <div className={styles.footerListbox}>
                           <div className={styles.footerList}>
                              <div className={styles.footerListTitle}>
                                 Site Map
                              </div>
                              <ul>
                                 <li><a href="what-we-do.php" title="About Us">About Us</a></li>
                                 <li><a href="browse-by-category.php" title="Our Products">Our Products</a></li>
                                 <li><a href="browse-by-category.php" title="Shop Now">Shop Now</a></li>
                                 <li><a href="brochures.php" title="Resources">Resources</a></li>
                                 <li><a href="service-request.php" title="Booking">Booking</a></li>
                                 <li><a href="contact-us.php" title="Contact Us">Contact Us</a></li>
                                 <li><a href="my-therapist.php" title="Therapist">Therapist</a></li>
                                 <li><a href="my-details.php" title="User Portal">User Portal</a></li>
                              </ul>
                           </div>
                           <div className={styles.footerList}>
                              <div className={styles.footerListTitle}>Our Branches</div>
                                 <ul className={styles.dataSpan}>
                                    <li>
                                       <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                       <span className={styles.dataText}><strong>Sydney (HO)</strong> 0 Prime Dr, Seven Hills NSW 2147</span>
                                    </li>
                                    <li>
                                       <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                       <span className={styles.dataText}><strong>Sydney (South)</strong> 4 Phiney Place, Ingleburn NSW 2565</span>
                                    </li>
                                    <li>
                                       <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                       <span className={styles.dataText}><strong>Newcastle/Central Coast</strong> 109 Munibong Road, Boolaroo, NSW 2284</span>
                                    </li>
                                    <li>
                                       <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                       <span className={styles.dataText}><strong>Young</strong> 5 McVeigh St, Young NSW 2594</span>
                                    </li>
                                    <li>
                                       <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                       <span className={styles.dataText}><strong>Brisbane</strong> 38 Industry Place, Wynnum</span>
                                    </li>
                                    <li>
                                       <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                       <span className={styles.dataText}><strong>Melbourne</strong> 3 Carmen Street Truganina VIC 3029</span>
                                    </li>
                                    <li>
                                    <span className={styles.dataIcon}><Image src={iconMapMarker} /></span>
                                    <span className={styles.dataText}><strong>Canberra</strong> 3 Dominion Place, Queanbeyan, NSW 2620</span>
                                 </li>
                              </ul>
                           </div>
                        </div>
                        <div className={styles.footerData}>
                           <ul className={styles.socialIcons}>
                              <li><a href="" title="Facebook" rel="noreferrer"><Image src={iconFacebook}/></a></li>
                              <li><a href="" title="Linkedin" rel="noreferrer"><Image src={iconLinkedin}/></a></li>
                              <li><a href="" title="Youtube" rel="noreferrer"><Image src={iconYoutube}/></a></li>
                           </ul>
                        <div className={styles.text}>Improving Lives. With Astris PME.</div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
         <section className={styles.copyrightSection}>
            <div className={styles.container}>
               <div className={styles.copyrightBox}>
                  <div className={styles.copyrightText}>
                     © 2021 Astris PME Pty Ltd. All Rights Reserved.
                  </div>
                  <div className={styles.copyrightLinks}>
                     <ul id={styles.copyrightLinksList}>
                        <li id={styles.copyrightLinksLists}>
                           <a href="terms-and-conditions.php" title="Terms & Conditions">
                              Terms & Conditions
                           </a>
                        </li>
                        <li id={styles.copyrightLinksLists}>
                           <a href="#" title="Privacy Policy">
                              Privacy Policy
                           </a>
                        </li>
                        <li id={styles.copyrightLinksLists}>
                           <a href="#" title="Terms Of Use">
                              Terms Of Use
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div className={styles.copyrightText}>
                     By <a href="#" title="WEBO Digital">WEBO Digital</a>
                  </div>
               </div>
            </div>
         </section>
      </section>
   )
}

export default footer
