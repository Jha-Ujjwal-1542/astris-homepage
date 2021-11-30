import Header from './../../src/includes/portals/header';
import Sidebar from './../../src/includes/portals/sidebar';
import Link from 'next/link'
import Image from 'next/image'
import {FaCalendarAlt, FaList, FaRegEye, FaCaretLeft, FaCaretRight} from "react-icons/fa"
import appointmentList from '../../src/datas/appointmentList.json'

export const getStaticProps = async () => {
    const res = "../src/datas/appointmentList.json"
    return{
       props: { appointmentList : [] }
    }
 }

const Appointments = () => {
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
                        <div className="breadcrumbBox">
                            <span className="breadcrumbText">My Appointments</span>
                        </div>
                    </div>
                    <div className="portalScroller">
                        <div className="myAccountsDetail" id="ViewSwitchTabs">
                            <div className="sectionTitle spaceBetween">
                                <div className="mainTitle">
                                    <h3>My Appointments</h3>
                                </div>
                                <div className="btnHolder">
                                    <div className="viewSwitch">
                                        <ul>
                                            <li><button className="vsTablinks"  title=""><span className="icon"><FaCalendarAlt /></span></button></li>
                                            {/* onClick={vsTabs(e,'calendar--view')} */}
                                            <li><button className="vsTablinks active" title=""><span className="icon"><FaList /></span></button></li>
                                            {/* onClick={vsTabs(e,'list--view')} */}
                                        </ul>
                                    </div>
                                    <button className="btn btnYellow" title="Add New Equipment">Add New Equipment</button>
                                </div>
                            </div>
                            <div className="portalTablebox">
                                <div className="tableFilters">
                                    <div className="sectionSearch">
                                        <div className="sectionSearchbox">
                                            <Image src="img/iconSearch.svg" alt="" />
                                            <input type="text" placeholder="Enter Keyword (Equipment Name, Key, Company, etc.)" />
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
                                <div className="vsContentbox">
                                    <div className="vs__tabcontent" id="calendarView">
                                        <div className="myAppointmentCalendar">
                                            <h3>Calendar View</h3>
                                        </div>
                                    </div>
                                    <div className="vs__tabcontent" id="listView">
                                        <div className="portalTable">
                                            <div className="tableResponsive">
                                                <table className="themeTable">
                                                    <thead>
                                                        <tr>
                                                            <th>Date of Appointment</th>
                                                            <th>Appointment Type</th>
                                                            <th>Status</th>
                                                            <th>Consultant</th>
                                                            <th>Therapist</th>
                                                            <th>Location</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {appointmentList.map( appointment => (
                                                            <tr key={appointment.id}>
                                                                <td>{appointment.date}</td>
                                                                <td>{appointment.type}</td>
                                                                <td>{appointment.status}</td>
                                                                <td>{appointment.consultant}</td>
                                                                <td>{appointment.therapist}</td>
                                                                <td>{appointment.street}<br/><span>{appointment.location}</span></td>
                                                                <td className="tdAction">
                                                                    <div className="tdActionbox">
                                                                        <Link href="/myAppointmentDetail" passHref>
                                                                            <a className="tableAction"><FaRegEye /></a>
                                                                        </Link>
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
                    </div>
                </div>
            </main>
        </div>
    </div>
</section>
      </div>
   )
}

export default Appointments
