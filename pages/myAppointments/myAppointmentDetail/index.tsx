import Header from './../../../src/includes/portals/header';
import Sidebar from './../../../src/includes/portals/sidebar';
import Link from 'next/link'
import Image from 'next/image'
import { FaCaretRight, FaSearch, FaTrash, FaCaretLeft } from 'react-icons/fa';
import appointmentDetails from '../../../src/datas/appointmentDetails.json'
import Footer from './../../../src/includes/portals/footer';

export const getStaticProps = async () => {
   const res = "../src/datas/appointmentDetails.json"
   return{
      props: { appointmentDetails : [] }
   }
}
const AppointmentDetail = () => {
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
                           <div className="breadcrumbBox">
                              <Link href="/myAppointments">
                                 <a title="My Appointment">My Appointment</a>
                              </Link>
                              <span className="breadcrumbIcon"><FaCaretRight /></span>
                              <span className="breadcrumbText">14th January, 2021</span>
                           </div>
                        </div>
                        <div className="portalScroller">
                           <div className="myAccountsDetail">
                              <div className="sectionTitle spaceBetween">
                                 <div className="mainTitle">
                                    <h3>14th January, 2021</h3>
                                 </div>
                                 <div className="buttonHolder">
                                    <button className="button buttonYellow" title="Add New Equipment">Add New Equipment</button>
                                    {/* onclick="evtPopup(event,'product-trail-popup')" */}
                                 </div>
                              </div>
                              <div className="portalTablebox">
                                 <div className="tableFilters">
                                       <div className="sectionSearch">
                                          <div className="sectionSearchbox">
                                             <FaSearch />
                                             <input type="text" placeholder="Enter Keyword (Equipment Name, Key, Company, etc.)" />
                                          </div>
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
                                                   <th>Equipment Model</th>
                                                   <th>Brand</th>
                                                   <th>Serial Number</th>
                                                   <th>Supplier</th>
                                                   <th></th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                             {appointmentDetails.map( detail => (
                                                      <tr key={detail.id}>
                                                         <td>
                                                               <div className="-product-detail">
                                                                  <div className="-product-img"><Image src={detail.image} alt="" /></div>
                                                                  <span className="fontBold">{detail.model}</span>
                                                               </div>
                                                         </td>
                                                         <td>{detail.brand}</td>
                                                         <td>{detail.serialNumber}</td>
                                                         <td>{detail.supplier}</td>
                                                         <td className="tdAction">
                                                               <div className="tdActionbox">
                                                               <Link href="#"><a className="tableAction"><FaTrash /></a></Link>
                                                               </div>
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
                                             <option value="">Show: 4 Appointments</option>
                                             <option value="">Show: 4 Appointments</option>
                                             <option value="">Show: 4 Appointments</option>
                                             <option value="">Show: 4 Appointments</option>
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
<Footer />
      </section>
   )
}

export default AppointmentDetail
