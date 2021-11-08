import styles from '../../styles/contactUs.module.css'
import Link from 'next/link'
import { FaHome, FaCaretRight } from 'react-icons/fa'

const contactUs = () => {
   return(
      <section>
         <section className={styles.breadcrumbSection}>
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <Link href="/">
                     <FaHome />
                  </Link>
                  <FaCaretRight />
                  <span className={styles.breadcrumbText}>Message Center</span>
               </div>
            </div>
         </section>
         <section>
            <div className={styles.mainTitle}>
               Message Center
               <div className={styles.subTitle}>
                  Please complete the following form and we will reach out to you soon.
               </div>
            </div>
            <div>
               <form>
                  <div className={styles.contactUsForm}>
                     <label className={styles.labelInput}>First Name</label>
                     <input type="text" className={styles.inputControl} name="first-name" id="first-name" />
                     
                     <label className={styles.labelInput}>Last Name</label>
                     <input type="text" className={styles.inputControl} name="last-name" id="last-name" />
                     
                     <label className={styles.labelInput}>State</label>
                     <input type="text" className={styles.inputControl} name="state" id="state" />
                     
                     <label className={styles.labelInput}>Post Code</label>
                     <input type="text" className={styles.inputControl} name="post-code" id="post-code" />
                     
                     <label className={styles.labelInput}>Email Address</label>
                     <input type="email" className={styles.inputControl} name="email-address" id="email-address" />
                     
                     <label className={styles.labelInput}>Phone Number (Incl Area Code)</label>
                     <input type="text" className={styles.inputControl} name="phone-number" id="phone-number" />
                     
                     <label className={styles.labelInput}>Mobile Number</label>
                     <input type="text" className={styles.inputControl} name="mobile-number" id="mobile-number"/>
                     
                     <label className={styles.labelInput}>Role</label>
                     <input type="text" className={styles.inputControl} name="role" id="role" />
                     
                     <label className={styles.labelInput}>How can we help?</label>
                     <textarea name="message" id="message" className={styles.inputControl}> </textarea>
                  
                     <button type="submit" className={styles.button}>
                        Send Message
                     </button>
                  </div>
               </form>
            </div>
         </section>
      </section>
   )
}

export default contactUs