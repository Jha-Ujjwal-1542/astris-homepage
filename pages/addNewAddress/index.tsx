import Header from './../../src/includes/portals/header';
import Sidebar from './../../src/includes/portals/sidebar';
import Link from 'next/link'
import Footer from './../../src/includes/portals/footer';


const NewAddress = () => {
   return (
      <div>
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
                                    <h3>Add New Address</h3>
                                 </div>
                                 <div className="buttonHolder">
                                    <Link href="" passHref><a className="button buttonYellow" title="Save Address">Save Address</a></Link>
                                 </div>
                              </div>
                              <div className="myAccountsFormbox">
                                 <form action="">
                                    <div className="myAccountsForm">
                                       <div className="inputGroup">
                                          <label htmlFor="street-address">Street Address *</label>
                                          <input type="text" className="inputControl" name="street-address" id="street-address" placeholder="Street Address *" />
                                       </div>
                                       <div className="inputGroup">
                                          <label htmlFor="town-city-suburb">Town/City/Suburb *</label>
                                          <input type="text" className="inputControl" name="town-city-suburb" id="town-city-suburb" placeholder="Town/City/Suburb *" />
                                       </div>
                                       <div className="inputGroup">
                                          <label htmlFor="state-dll">State (DDL) *</label>
                                          <select name="state-dll" id="state-dll" className="inputControl selectCustomized absoluteList">
                                             <option value="1">State (DDL)</option>
                                             <option value="2">State (DDL)</option>
                                             <option value="3">State (DDL)</option>
                                             <option value="4">State (DDL)</option>
                                          </select>
                                       </div>
                                       <div className="inputGroup">
                                          <label htmlFor="post-code">Postcode *</label>
                                          <input type="text" className="inputControl" name="post-code" id="post-code" placeholder="Postcode *" />
                                       </div>
                                       <div className="inputGroup">
                                          <label htmlFor="type">Type *</label>
                                          <select name="type" id="type" className="inputControl selectCustomized absoluteList">
                                             <option value="1">Type</option>
                                             <option value="2">Type</option>
                                             <option value="3">Type</option>
                                             <option value="4">Type</option>
                                          </select>
                                       </div>
                                       <div className="inputGroup">
                                          <label htmlFor="closest-showroom">Closest Showroom</label>
                                          <input type="text" className="inputControl" name="closest-showroom" id="closest-showroom" placeholder="Closest Showroom" />
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
      </div>
   )
}

export default NewAddress
