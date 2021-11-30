import Sidebar from './../../src/includes/portals/sidebar';
import Header from './../../src/includes/portals/header';
import Link from 'next/link'

export const handleVerifyMobile = () => {}

const PwdSecurity = () => {
   return (
      <div>
         <Header/>
         <section className="protalSection">
            <div className="portalContainer">
               <div className="portalMainbox">
                  <Sidebar />
                  <main className="portalMain">
                     <div className="myAccountsBox">
                        <div className="myAccountsList">
                           <ul>
                              <li>
                                 <Link href="/myDetails" passHref><a className="active" title="My Details">My Details</a></Link>
                              </li>
                              <li>
                                 <Link href="/myAddress" passHref><a title="My Addresses">My Addresses</a></Link>
                              </li>
                              <li>
                                 <Link href="/passwordSecurity" passHref><a title="Password & Security">Password & Security</a></Link>
                              </li>
                              <li>
                                 <Link href="/accContact" passHref><a title="Contacts">Contacts</a></Link>
                              </li>
                              <li>
                                 <Link href="/myTherapists" passHref><a title="My Therapists">My Therapists</a></Link>
                              </li>
                           </ul>
                        </div>
                        <div className="portalScroller">
                           <div className="myAccountsDetail">
                              <div className="sectionTitle">
                                 <div className="mainTitle">
                                       <h3>Password & Security</h3>
                                 </div>
                              </div>
                              <div className="passwordSecurityBox">
                                 <div className="titleHolder">
                                    <h5>Multi Factor Authentication</h5>
                                    <p>Use Multi Factor Authentication to keep your account safe. Enter a mobile number and a verification coed will be sent to you for confirmation</p>
                                 </div>
                                 <div className="securityFormbox">
                                    <div className="securityForm">
                                       <label htmlFor="mobile-number">Enter Mobile Number</label>
                                       <div className="inputHolder">
                                          <input type="text" className="inputControl" name="mobile-number" id="mobile-number" placeholder="Enter Mobile Number" />
                                       </div>
                                       <div className="buttonHoler">
                                          <button className="button buttonYellow">Update MFA Number</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="myAccountsFormbox">
                                 <div className="myAccountsFormtitle">
                                    <h5>Change Password</h5>
                                 </div>
                                 <form action="">
                                    <div className="myAccountsForm">
                                       <div className="inputGroup fullWidth">
                                          <label htmlFor="current-password">Enter Current Password</label>
                                          <input type="password" className="inputControl" name="current-password" id="current-password" placeholder="Enter Current Password" />
                                       </div>
                                       <div className="inputGroup fullWidth">
                                          <label htmlFor="new-password">Enter New Password</label>
                                          <input type="text" className="inputControl" name="new-password" id="new-password" placeholder="Enter New Password" />
                                       </div>
                                       <div className="inputGroup fullWidth">
                                          <label htmlFor="verify-new-password">Verify New Password</label>
                                          <input type="text" className="inputControl" name="verify-new-password" id="verify-new-password" placeholder="Verify New Password" />
                                       </div>
                                       <div className="inputGroup submitButton">
                                          <input type="submit" className="button buttonYellow" value="Update Password" />
                                       </div>
                                    </div>
                                 </form>
                              </div>
                           </div>
                        </div>
                     </div>
                  </main>
               </div>
            </div>
         </section>
      </div>
   )
}

export default PwdSecurity
