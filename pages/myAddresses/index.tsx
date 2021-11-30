import Header from './../../src/includes/portals/header';
import Link from 'next/link'
import Sidebar from './../../src/includes/portals/sidebar';
import Footer from './../../src/includes/portals/footer';
import { FaCaretDown, FaCaretLeft, FaSearch, FaCaretRight } from 'react-icons/fa';
import { BiSliderAlt } from 'react-icons/bi';
import addresses from '../../src/datas/addrs.json'

export const getStaticProps = async () => {
   const res = "../src/datas/addresses.json"
   return{
      props: { addresses : [] }
   }
}

const Addresses = () => {
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
                                    <h3>My Addresses</h3>
                              </div>
                              <div className="buttonHolder">
                                 <Link href="/addNewAddress" passHref>
                                    <a className="button buttonYellow" title="Add New Address">Add New Address</a>
                                 </Link>
                              </div>
                           </div>
                           <div className="portalTablebox">
                              <div className="tableFilters">
                                 <div className="sectionSearch">
                                    <div className="sectionSearchbox">
                                       <FaSearch />
                                       <input type="text" placeholder="Enter Keyword" />
                                    </div>
                                 </div>
                                 <div className="portalFilter">
                                    <select name="filter" id="" className="inputControl selectCustomized filterIcon absoluteList">
                                       <option value="">Filter By: Type</option>
                                       <option value="">Filter By: Type</option>
                                       <option value="">Filter By: Type</option>
                                       <option value="">Filter By: Type</option>
                                    </select>
                                    <BiSliderAlt />
                                 </div>
                                 <div className="portalSortby">
                                    <select name="sort-by" id="" className="inputControl selectCustomized absoluteList">
                                       <option value="">Sort by: Alphabetical</option>
                                       <option value="">Sort by: Alphabetical</option>
                                       <option value="">Sort by: Alphabetical</option>
                                       <option value="">Sort by: Alphabetical</option>
                                    </select>
                                    <FaCaretDown />
                                 </div>
                              </div>
                              <div className="portalTable">
                                 <div className="tableResponsive">
                                    <table className="themeTable">
                                       <thead>
                                          <tr>
                                             <th>Street Address</th>
                                             <th>Town/City/Suburb</th>
                                             <th>State (DDL)</th>
                                             <th>Postcode</th>
                                             <th>Type</th>
                                             <th>Closest Showroom</th>
                                             <th></th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                       {addresses.map( address => (
                                          <tr key={address.id} className="rowSelected">
                                             <td>{address.street}</td>
                                             <td>{address.town}</td>
                                             <td>{address.state}</td>
                                             <td>{address.postcode}</td>
                                             <td>{address.type}</td>
                                             <td><span className="colText fontBold">{address.showroom}</span></td>
                                             <td className="tdAction">
                                                <button className="tableAction"><span></span></button>
                                             </td>
                                          </tr>
                                       ))}
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                              <div className="tableData">
                                 <div className="portalShowdata">
                                    <select name="show-data" id="" className="inputControl selectCustomized">
                                       <option value="">Show: 4 Addresses</option>
                                       <option value="">Show: 4 Addresses</option>
                                       <option value="">Show: 4 Addresses</option>
                                       <option value="">Show: 4 Addresses</option>
                                    </select>
                                    <FaCaretDown />
                                 </div>
                                 <div className="portalDataNav">
                                    <span>Showing: 1-4 of 50 Results</span>
                                    <ul>
                                       <li><button><FaCaretLeft /></button></li>
                                       <li><button><FaCaretRight /></button></li>
                                    </ul>
                                 </div>
                              </div>
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

export default Addresses
