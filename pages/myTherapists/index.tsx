import Header from './../../src/includes/portals/header';
import Sidebar from './../../src/includes/portals/sidebar';
import Link from 'next/link'
import { FaCaretLeft, FaCaretRight, FaSearch, FaRegEye } from 'react-icons/fa';
import doctors from '../../src/datas/therapists.json'

export const getStaticProps = async () => {
   const res = "../src/datas/therapists.json"
   return{
      props: { doctors : [] }
   }
}
const Therapists = () => {
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
                                    <h3>Contact</h3>
                                 </div>
                                 <div className="buttonHolder">
                                    <Link href="/addNewTherapist" passHref>
                                       <a className="button buttonYellow" title="Add New Address">Add New Therapist</a>
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
                                    </div>
                                    <div className="portalSortby">
                                       <select name="sort-by" id="" className="inputControl selectCustomized absoluteList">
                                          <option value="">Sort by: Alphabetical</option>
                                          <option value="">Sort by: Alphabetical</option>
                                          <option value="">Sort by: Alphabetical</option>
                                          <option value="">Sort by: Alphabetical</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="portalTable">
                                    <div className="tableResponsive">
                                       <table className="themeTable">
                                          <thead>
                                             <tr>
                                                <th>Full Name</th>
                                                <th>Phone Number</th>
                                                <th>Email Address</th>
                                                <th>Clinic</th>
                                                <th>Access Level</th>
                                                <th></th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             {doctors.map( doctor => (
                                                   <tr key={doctor.id}>
                                                      <td>{doctor.name}</td>
                                                      <td>{doctor.number}</td>
                                                      <td>{doctor.email}</td>
                                                      <td>{doctor.clinic}</td>
                                                      <td><span className="colGreen fontBold">{doctor.access}</span></td>
                                                      <td className="tdAction">
                                                         <Link href="/editTherapist">
                                                            <a className="tableAction">
                                                               <FaRegEye />
                                                            </a>
                                                         </Link>
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
      </section>
   )
}

export default Therapists
