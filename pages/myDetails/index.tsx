import Sidebar from './../../src/includes/portals/sidebar';
import Link from 'next/link';
import Header from './../../src/includes/portals/header';
import Footer from './../../src/includes/portals/footer';
const MyDetails = () => {
   return (
      <section>
         <Header />
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
                           <div className="sectionTitle spaceBetween">
                              <div className="mainTitle">
                                 <h3>My Details</h3>
                              </div>
                              <div className="buttonHolder">
                                 <Link href=""><a className="button buttonYellow" title="Save Information">Save Information</a></Link>
                              </div>
                           </div>
                           <div className="myAccountsFormbox">
                              <form action="">
                                 <div className="myAccountsForm">
                                    <div className="inputGroup">
                                       <label htmlFor="first-name">First Name *</label>
                                       <input type="text" className="inputControl" name="first-name" id="first-name" placeholder="First Name" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="last-name">Last Name *</label>
                                       <input type="text" className="inputControl" name="sur-name" id="sur-name" placeholder="Sur Name" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="email-address">Email Address *</label>
                                       <input type="email" className="inputControl" name="email-address" id="email-address" placeholder="Email Address" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="last-name">Userame *</label>
                                       <input type="text" className="inputControl" name="username" id="username" placeholder="Userame" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="phone-number">Mobile Phone Number (Incl Area Code) *</label>
                                       <input type="text" className="inputControl" name="phone-number" id="phone-number" placeholder="Phone Number" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="phone-number">Alternate Phone Number 1</label>
                                       <input type="text" className="inputControl" name="phone-number-alt-1" id="phone-number-alt-1" placeholder="Alternate Phone Number 1" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="phone-number">Alternate Phone Number 2</label>
                                       <input type="text" className="inputControl" name="phone-number-alt-2" id="phone-number-alt-2" placeholder="Alternate Phone Number 2" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="role">NDIS Participant Number</label>
                                       <input type="text" className="inputControl" name="ndis-number" id="ndis-number" placeholder="NDIS Participant Number" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="state">Date of Birth</label>
                                       <input type="date" className="inputControl" placeholder="Date of Birth" />
                                    </div>
                                    <div className="inputGroup">
                                       <label htmlFor="state">Alternate Reference</label>
                                       <input type="text" className="inputControl" name="alt-ref" id="alt-ref" placeholder="Alternate Reference" />
                                    </div>
                                    <div className="inputGroup fullWidth">
                                       <label htmlFor="post-code">Comments</label>
                                       <input type="text" className="inputControl" name="comments" id="comments" placeholder="Comments" />
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
         <Footer />
      </section>
      
   )
}

export default MyDetails




