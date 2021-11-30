import Header from './../../src/includes/portals/header';
import Sidebar from './../../src/includes/portals/sidebar';
import indoorSeat from '../../public/images/products/indoorSeat.png'
import Link from 'next/link'
import Image from 'next/image'
import { FaCaretLeft, FaCaretRight, FaRegEye } from 'react-icons/fa';
import gridItems from '../../src/datas/equipGriditem.json'

export const getStaticProps = async () => {
    const res = "../src/datas/equipGriditem.json"
    return{
       props: { gridItems : [] }
    }
 }
const Equipments = () => {
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
                              <div className="breadcrumbBox">
                                 <span className="breadcrumbText">My Equipment</span>
                              </div>
                        </div>
                        <div className="portalScroller">
                        <div className="myAccountsDetail" id="ViewSwitchTabs">
                            <div className="sectionTitle spaceBetween">
                                 <div className="mainTitle">
                                    <h3>My Equipment</h3>
                                 </div>
                                 <div className="buttonHolder">
                                    <div className="viewSwitch">
                                       <ul>
                                          <li>
                                             <button className="vsTablinks" title="">
                                                <span className="icon">
                                                   <Image src="img/icon--grid--view.svg" alt="" />
                                                </span>
                                             </button>
                                          </li>
                                          <li>
                                             <button className="vsTablinks active" title="">
                                                <span className="icon">
                                                   <Image src="img/iconList--view.svg" alt="" />
                                                </span>
                                             </button>
                                          </li>
                                       </ul>
                                    </div>
                                    <button className="button buttonYellow" title="Add New Equipment">Add New Equipment</button>
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
                                    <div className="vsTabcontent" id="grid--view">
                                       <div className="myEquipmentsGridview">
                                          <div className="myEquipmentsGrid">
                                            {gridItems.map( gridItem => (
                                                <div key={gridItem.id} className="myEquipmentsGriditem">
                                                <Link href="/myEqpSummary" passHref>
                                                   <a title="">
                                                      <div className="myEquipmentsGridimg">
                                                         <div className="brandLogo">
                                                            <Image src={gridItem.logo} alt="" />
                                                         </div>
                                                         <figure>
                                                            <Image src={gridItem.product} alt="" />
                                                         </figure>
                                                      </div>
                                                      <div className="myEquipmentsGridtext">
                                                         <div className="title fontBold">{gridItem.title}</div>
                                                         <p>Last Service <span className="colGreen fontBold">{gridItem.status}</span></p>
                                                      </div>
                                                   </a>
                                                </Link>
                                             </div>
                                            ))}
                                        </div>
                                            <div className="tableData">
                                                <div className="portalShowdata">
                                                    <select name="show-data" id="" className="inputControl selectCustomized">
                                                        <option value="">Show: 3 Equipments</option>
                                                        <option value="">Show: 3 Equipments</option>
                                                        <option value="">Show: 3 Equipments</option>
                                                    </select>
                                                </div>
                                                <div className="portalDataNav">
                                                    <span>Showing: 1-3 of 50 Results</span>
                                                    <ul>
                                                        <li><button><FaCaretLeft /></button></li>
                                                        <li><button><FaCaretRight /></button></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="vsTabcontent" id="list--view">
                                        <div className="portalTable">
                                            <div className="tableResponsive">
                                                <table className="themeTable">
                                                    <thead>
                                                        <tr>
                                                            <th>Equipment (Model)</th>
                                                            <th>Location</th>
                                                            <th>Supplied By</th>
                                                            <th>Service Status</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {gridItems.map( gridItem => (  
                                                            <tr key={gridItem.id}>
                                                                <td>
                                                                    <div className="-productDetail">
                                                                        <div className="-productImage">
                                                                           <Image src={gridItem.listImage} width={24} height={24} alt="" />
                                                                        </div>
                                                                        <p>
                                                                           <span className="fontBold">{gridItem.title}</span><span>{gridItem.subtitle}</span>
                                                                        </p>
                                                                    </div>
                                                                </td>
                                                                <td>{gridItem.locationA}<br/><span>{gridItem.locationB}</span></td>
                                                                <td>{gridItem.supplierA}<br/><span>{gridItem.supplierB}</span></td>
                                                                <td><span className="colGreen fontBold">{gridItem.status}</span><br /><span>{gridItem.date}</span></td>
                                                                <td className="tdAction">
                                                                    <div className="tdActionbox">
                                                                        <Link href="/myEqpSummary" passHref>
                                                                           <a className="tableAction">
                                                                              <FaRegEye />
                                                                           </a>
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
                                                    <option value="">Show: 4 Equipments</option>
                                                    <option value="">Show: 4 Equipments</option>
                                                    <option value="">Show: 4 Equipments</option>
                                                    <option value="">Show: 4 Equipments</option>
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

export default Equipments
