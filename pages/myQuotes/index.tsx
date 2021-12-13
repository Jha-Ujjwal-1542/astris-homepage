import Sidebar from '../../src/includes/portals/sidebar';
import Header from '../../src/includes/portals/header';
import Link from 'next/link'
import { FaCaretLeft, FaCaretRight, FaSearch, FaTrash } from 'react-icons/fa';
import { FaRegEye } from 'react-icons/fa';
import quoteItems from '../../src/datas/quoteItems.json'

export const getStaticProps = async () => {
   const res = "../src/datas/quoteItems.json"
   return{
      props: { quoteItems : [] }
   }
}
const MyQuotes = () => {
   const array = [...Array(4)]
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
                                 <span className="breadcrumbText">My Quotes</span>
                              </div>
                           </div>
                           <div className="portalScroller">
                              <div className="myAccountsDetail">
                                 <div className="sectionTitle spaceBetween">
                                    <div className="mainTitle">
                                       <h3>My Quotes</h3>
                                    </div>
                                    <div className="buttonHolder">
                                       <Link href="/browse-by-category">
                                          <a className="button buttonYellow" title="Add More Quotes">Add More Quotes</a>
                                       </Link>
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
                                                   <th>Equipment</th>
                                                   <th>Date of Quote (EST)</th>
                                                   <th>Quote Status</th>
                                                   <th>Quote Type</th>
                                                   <th></th>
                                                </tr>
                                             </thead>
                                             <tbody>
                                             {quoteItems.map( quote => (
                                                   <tr key={quote.id}>
                                                      <td>
                                                         <Link href="/myQuotesInfo">
                                                            <a title="Mike's Equipment Hire">{quote.title}</a>
                                                         </Link>
                                                         <br/>
                                                         <span>{quote.items} Item</span>
                                                      </td>
                                                      <td>
                                                         {quote.date}
                                                         <br/>
                                                         <span>{quote.time}</span>
                                                      </td>
                                                      <td>
                                                         <span className="colRed fontBold">{quote.status}</span>
                                                         <br/>
                                                         <span>{quote.expiryDate}</span>
                                                      </td>
                                                      <td>
                                                         <span className="colText fontBold">{quote.type}</span>
                                                      </td>
                                                      <td className="tdAction">
                                                         <div className="tdActionbox">
                                                            <button className="tableAction">
                                                               <FaTrash />
                                                            </button>
                                                            <Link href="/myQuotesDetail">
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
                                             <option value="">Show: 4 Orders</option>
                                             <option value="">Show: 4 Orders</option>
                                             <option value="">Show: 4 Orders</option>
                                             <option value="">Show: 4 Orders</option>
                                          </select>
                                       </div>
                                       <div className="portalData-nav">
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

export default MyQuotes
