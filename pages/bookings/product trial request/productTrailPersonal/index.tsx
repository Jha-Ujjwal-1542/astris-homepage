import { FaHome, FaSearch, FaCaretRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image';
import indoorSeat from '../../../../public/images/products/indoorSeat.png'
import IconUpload from '../../../../public/images/Upload.svg'

export const eqUserDetail =() => {
   
}
export const locTrail =() => {
   
}
export const therapist =() => {
   
}
export const trailCart =() => {
   
}
const trialPersonal = () => {
   return (
      <section>
         <section className="breadcrumbSection">
            <div className="container">
            <div className="breadcrumbBox">
               <Link href="/">
                  <a><FaHome width="25px" height="25px" /></a>
               </Link>
               <FaCaretRight />
               <span className="breadcrumbText">Product Trial Request</span>
            </div>
         </div>
         </section>
         <section className="hireRequestSection">
            <div className="container">
               <div className="sectionBox">
                  <div className="sectionTitle">
                     <div className="mainTitle">
                        <h3>Product Trial Request</h3>
                        <div className="text">
                           <p>Please complete the following form and we will reach out to you soon.</p>
                        </div>
                     </div>
                     <div className="buttonHolder">
                        <Link href="#" passHref>
                           <a className="button" title="Go to next Step">Go to next Step</a>
                        </Link>
                     </div>
                  </div>
                  <div className="submitQuoteBox">
                     <div className="productTable">
                        <div className="tableResponsive">
                           <table className="themeTable">
                              <thead>
                                 <tr>
                                    <th>Product Name</th>
                                    <th>Code</th>
                                    <th></th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <td>
                                    <div className="-product-detail">
                                       <div className="-product-img">
                                          <Image src={indoorSeat} alt="" /></div>
                                       <span>Gravity Relaxation Chair</span>
                                    </div>
                                    </td>
                                    <td>GRC-1013</td>
                                    <td><button >Remove</button></td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
                  <div className="hireRequestTabbox">
                     <div className="hireRequestTablist">
                        <ul>
                           <li><button className="pt_tablinks active" onClick={eqUserDetail}>Step 1. Equipment User Detail</button></li>
                           <li><button className="pt_tablinks" onClick={locTrail}>Step 2. Location of Trial</button></li>
                           <li><button className="pt_tablinks" onClick={therapist}>Step 3. Therapist</button></li>
                           <li><button className="pt_tablinks" onClick={trailCart}>Step 4. Trial Cart</button></li>
                        </ul>
                     </div>
                     <div className="hireRequestTabdetails">
                        <div className="hireRequestTabcontent pt_tabcontent" id="eqUserDetail">
                              <div className="hireRequestTabdata">
                                 <div className="mainTitle">
                                    <h5>Personal Information</h5>
                                 </div>
                                 <form action="">
                                    <div className="serviceRequestForm">
                                          <div className="formHolder">
                                             <label>
                                                <strong>First Name *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="First Name *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Last name *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Last name *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Email *</strong>
                                             </label>
                                             <input type="email" className="inputControl" placeholder="Email *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Phone Number *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Phone Number *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>NDIS Participant number (optional)</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="NDIS Participant number (optional)" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Appointment Arranged By</strong>
                                             </label>
                                             <select name="address" id="" className="inputControl selectCustomized">
                                                <option value="">Therapist</option>
                                                <option value="">Therapist</option>
                                                <option value="">Therapist</option>
                                                <option value="">Therapist</option>
                                             </select>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>First Name</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="First Name" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Lastname</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Lastname" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Email</strong>
                                             </label>
                                             <input type="email" className="inputControl" placeholder="Email *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Mobile</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Mobile" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Relationship to Equipment User</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Relationship to Equipment User" value="Father" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Upload MAT EVAL, Or Photos, Etc. (Optional)</strong>
                                             </label>
                                             <div className="inputUpload">
                                                <div>
                                                      <input type="file" className="inputFile" />
                                                      <label>
                                                         <span className="fileName">Select File</span>
                                                         <span className="fileIcon"><Image src={IconUpload} alt="" /></span>
                                                      </label>
                                                </div>
                                                <span>(Maximum of 3 images / Limit of 2Mb per file)</span>
                                             </div>
                                          </div>
                                          <div className="submitHolder">
                                             <span></span>
                                             <button className="button buttonYellow">GO TO NEXT STEP</button>
                                          </div>
                                    </div>
                                 </form>
                              </div>
                        </div>
                        <div className="hireRequestTabcontent pt_tabcontent" id="locTrail">
                              <div className="hireRequestTabdata">
                                 <form action="">
                                    <div className="serviceRequestForm">
                                          <div className="formHolder bordered">
                                             <label>
                                                <strong>Select Address</strong>
                                             </label>
                                             <select name="address" id="" className="inputControl selectCustomized">
                                                <option value="">Select Address</option>
                                             </select>
                                          </div>
                                          <div className="customGroup">
                                             <input type="checkbox" name="use-different-address" id="uda" />
                                             <label>Use a different address</label>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Street Address *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Street Address *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Suburb / Town *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Suburb / Town *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>State *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="State *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Postcode *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Postcode *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Landline for location *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Landline for location *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Location Type *</strong>
                                             </label>
                                             <select name="location" id="" className="inputControl selectCustomized">
                                                <option value="">Select Location Type</option>
                                             </select>
                                          </div>
                                          <div className="formHolder bordered">
                                             <label>
                                                <strong>Is The Location On Ground Floor? *</strong>
                                             </label>
                                             <select name="location-type" id="" className="inputControl selectCustomized">
                                                <option value="">Select Answer</option>
                                             </select>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Any Special Access Instructions</strong>
                                             </label>
                                             <textarea className="inputControl" placeholder="Type Details"></textarea>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Best Parking Location For Our Van</strong>
                                             </label>
                                             <textarea className="inputControl" placeholder="Type Details"></textarea>
                                          </div>
                                          <div className="submitHolder inline">
                                             <div className="formNote">
                                                <span className="icon">
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="18.511" height="18.511" viewBox="0 0 18.511 18.511">
                                                      <path id="Icon_ionic-md-checkmark-circle" data-name="Icon ionic-md-checkmark-circle" d="M12.63,3.375a9.255,9.255,0,1,0,9.255,9.255A9.283,9.283,0,0,0,12.63,3.375Zm-1.9,14.19L5.987,12.822l1.33-1.33,3.417,3.417L17.948,7.7l1.33,1.33Z" transform="translate(-3.375 -3.375)" fill="#79ce73" />
                                                   </svg>
                                                </span> 
                                                <span>Hire Request Is Within Service Area</span>
                                             </div>
                                             <button className="button buttonYellow">GO TO NEXT STEP</button>
                                          </div>
                                    </div>
                                 </form>
                              </div>
                        </div>
                        <div className="hireRequestTabcontent pt_tabcontent" id="therapist">
                              <div className="hireRequestTabdata">
                                 <div className="mainTitle">
                                    <h5>Your Therapist</h5>
                                 </div>
                                 <form action="">
                                    <div className="serviceRequestForm">
                                          <div className="formHolder">
                                             <label>
                                                <strong>Are you intending for a therapist to be present for the trial? </strong>
                                             </label>
                                             <select name="" id="" className="inputControl selectCustomized">
                                                <option value="">Are you intending for a therapist to be present for the trial?</option>
                                             </select>
                                          </div>
                                          <div className="formHolder bordered">
                                             <label>
                                                <strong>Select from your list of therapists</strong>
                                             </label>
                                             <select name="" id="" className="inputControl selectCustomized">
                                                <option value="">Select from your list of therapists</option>
                                             </select>
                                          </div>
                                          <div className="customGroup">
                                             <input type="checkbox" name="add-different-therapist" id="adt"/>
                                             <label>Add a different therapist</label>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>First Name *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="First Name *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Lastname *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Lastname *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Contact Number *</strong>
                                             </label>
                                             <input type="text" className="inputControl" placeholder="Contact Number *" />
                                          </div>
                                          <div className="formHolder bordered">
                                             <label>
                                                <strong>Email Address *</strong>
                                             </label>
                                             <input type="email" className="inputControl" placeholder="Email Address *" />
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Additional Comments</strong>
                                             </label>
                                             <textarea className="inputControl" placeholder="Type Details"></textarea>
                                          </div>
                                          <div className="submitHolder inline">
                                             <span></span>
                                             <button className="button buttonYellow">GO TO NEXT STEP</button>
                                          </div>
                                    </div>
                                 </form>
                              </div>
                        </div>
                        <div className="hireRequestTabcontent pt_tabcontent" id="trailCart">
                              <div className="hireRequestTabdata">
                                 <form action="">
                                    <div className="serviceRequestForm">
                                          <div className="customGroup">
                                             <input type="checkbox" name="equipment-category" id="equipment-category" />
                                             <label>
                                                <h5>Option 1 - Equipment category</h5>
                                             </label>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Select Equipment Category</strong>
                                             </label>
                                             <select name="" id="" className="inputControl selectCustomized">
                                                <option value="">Select Equipment Category</option>
                                             </select>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Select Equipment Sub-Category</strong>
                                             </label>
                                             <select name="" id="" className="inputControl selectCustomized">
                                                <option value="">Select Equipment Sub-Category</option>
                                             </select>
                                          </div>
                                          <div className="formHolder bordered">
                                             <label>
                                                <strong>Select Equipment</strong>
                                             </label>
                                             <select name="" id="" className="inputControl selectCustomized">
                                                <option value="">Select Equipment</option>
                                             </select>
                                          </div>
                                          <div className="customGroup">
                                             <input type="checkbox" name="quote-list" id="quote-list" />
                                             <label>
                                                <h5>Option 2 - Quote List</h5>
                                             </label>
                                          </div>
                                          <div className="formHolder bordered">
                                             <label>
                                                <strong>Equipment Currently In Quote</strong>
                                             </label>
                                             <select name="" id="" className="inputControl selectCustomized">
                                                <option value="">Select from Quote List</option>
                                             </select>
                                          </div>
                                          <div className="customGroup">
                                             <input type="checkbox" name="equipment-database" id="equipment-database" />
                                             <label>
                                                <h5>Option 3 - Equipment Database</h5>
                                             </label>
                                          </div>
                                          <div className="formHolder">
                                             <label>
                                                <strong>Search For Products (Product Code, Keyword, Category, etc.)</strong>
                                             </label>
                                             <div className="formSearchbox inputIcon">
                                                <FaSearch />
                                                <input type="text" className="inputControl " placeholder="Search Product" />
                                             </div>
                                          </div>
                                          <div className="submitHolder buttonGroup">
                                             <button className="button buttonYellow" title="Add These Products to List">Add These Products to List</button>
                                             <button className="button" title="Submit for Trail">Submit for Trail</button>
                                          </div>
                                    </div>
                                 </form>
                              </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </section>
   )
}

export default trialPersonal
