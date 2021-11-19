import { FaHome, FaSearch, FaCaretRight } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image';
import indoorSeat from '../../../public/images/products/indoorSeat.png'
import IconUpload from '../../../public/images/Upload.svg'

export const contactDetail =() => {
   
}
export const address =() => {
   
}
export const therapist =() => {
   
}
export const addProducts =() => {
   
}
export const hireDetail =() => {
   
}

const hireReq = () => {
   return (
      <section>
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a className="breadcrumbHome"><FaHome /></a>
                  </Link>
                  <span className="breadcrumbIcon">
                     <FaCaretRight />
                  </span>
                  <span className="breadcrumbText">
                     Submit For Hire
                  </span>
               </div>
            </div>
         </section>
         <section className="hireRequestSection">
            <div className="container">
               <div className="sectionBox">
                     <div className="sectionTitle">
                        <div className="mainTitle">
                           <h3>Submit For Hire</h3>
                        </div>
                        <div className="text">
                           <p>Please complete the following form and we will reach out to you soon.</p>
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
                                                   <div className="-product-img"><Image src={indoorSeat} alt="" /></div>
                                                   <span>Gravity Relaxation Chair</span>
                                                </div>
                                             </td>
                                             <td>GRC-1013</td>
                                             <td><button aria-label="productRemove">Remove</button></td>
                                       </tr>
                                    </tbody>
                                 </table>
                           </div>
                        </div>
                     </div>
                     <div className="hireRequestTabbox" id="hireRequestTabs">
                        <div className="hireRequestTablist">
                           <ul>
                                 <li><button className="h_tablinks active" onClick={contactDetail}>Step 1. Contact Detail</button></li>
                                 <li><button className="h_tablinks" onClick={address}>Step 2. Address</button></li>
                                 <li><button className="h_tablinks" onClick={therapist}>Step 3. Therapist</button></li>
                                 <li><button className="h_tablinks" onClick={addProducts}>Step 4. Add Products</button></li>
                                 <li><button className="h_tablinks" onClick={hireDetail}>Step 5. Hire Detail</button></li>
                           </ul>
                        </div>
                        <div className="hireRequestTabdetails">
                           <div className="hireRequestTabcontent h_tabcontent" id="contactDetail">
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
                                                <input type="text" className="inputControl" placeholder="First Name *" value="John" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Surname *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Surname *" value="David" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Email *</strong>
                                                </label>
                                                <input type="email" className="inputControl" placeholder="Email *" value="david.blogg@gmail.com" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Phone Number *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Phone Number *" value="41 123 456 6890" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>NDIS Participant number (optional)</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="NDIS Participant number (optional)" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Quote Arranged By</strong>
                                                </label>
                                                <select name="address" id="" className="inputControl selectCustomized">
                                                   <option value="">Caretaker</option>
                                                   <option value="">Caretaker</option>
                                                   <option value="">Caretaker</option>
                                                   <option value="">Caretaker</option>
                                                </select>
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>First Name</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="First Name" value="David" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Surname</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Surname" value="Blogg" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Email</strong>
                                                </label>
                                                <input type="email" className="inputControl" placeholder="Email *" value="david.blogg@gmail.com" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Mobile *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Mobile *" value="123 4567 7890" />
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
                                                <div className="input--upload">
                                                   <div>
                                                         <input type="file" className="inputFile" id="fileUp" />
                                                         <label>
                                                            <span className="fileName">Select File</span>
                                                            <span className="fileIcon"><Image src={IconUpload} alt="" /></span>
                                                         </label>
                                                   </div>
                                                   <span>(Maximum of 3 images / Limit of 2Mb per file)</span>
                                                </div>
                                             </div>
                                             <div className="submitHolder inline">
                                                <span></span>
                                                <button className="button buttonYellow">GO TO NEXT STEP</button>
                                             </div>
                                       </div>
                                    </form>
                                 </div>
                           </div>
                           <div className="hireRequestTabcontent h_tabcontent" id="address">
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
                                                <div className="formNote"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" width="18.511" height="18.511" viewBox="0 0 18.511 18.511">
                                                            <path id="Icon_ionic-md-checkmark-circle" data-name="Icon ionic-md-checkmark-circle" d="M12.63,3.375a9.255,9.255,0,1,0,9.255,9.255A9.283,9.283,0,0,0,12.63,3.375Zm-1.9,14.19L5.987,12.822l1.33-1.33,3.417,3.417L17.948,7.7l1.33,1.33Z" transform="translate(-3.375 -3.375)" fill="#79ce73" />
                                                         </svg>
                                                   </span> <span>Hire Request Is Within Service Area</span></div>
                                                <button className="button buttonYellow">GO TO NEXT STEP</button>
                                             </div>
                                       </div>
                                    </form>
                                 </div>
                           </div>
                           <div className="hireRequestTabcontent h_tabcontent" id="therapist">
                                 <div className="hireRequestTabdata">
                                    <div className="mainTitle">
                                       <h5>Your Therapist</h5>
                                    </div>
                                    <form action="">
                                       <div className="serviceRequestForm">
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Are you intending for a therapist to be present?</strong>
                                                </label>
                                                <select name="" id="" className="inputControl selectCustomized">
                                                   <option value="">Select Yes/No</option>
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
                                                <input type="checkbox" name="add-different-therapist" id="adt" />
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
                                                   <strong>Surname *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Surname *" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Contact Phone Number *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Contact Phone Number *" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Email Address *</strong>
                                                </label>
                                                <input type="email" className="inputControl" placeholder="Email Address *" />
                                             </div>
                                             <div className="formHolder bordered">
                                                <label>
                                                   <strong>Role *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="(eg Physiotherapist, Occupational Therapist, etc)" />
                                             </div>
                                             <div className="customGroup">
                                                <input type="checkbox" name="choose-our-therapist" id="cot" />
                                                <label>Choose One Of Our Therapist</label>
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>First Name *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="First Name *" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Surname *</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Surname *" />
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
                           <div className="hireRequestTabcontent h_tabcontent" id="addProducts">
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
                                                <div className="form--searchbox inputIcon left-icon">
                                                   <FaSearch />
                                                   <input type="text" className="inputControl " placeholder="Search Product" />
                                                </div>
                                             </div>
                                             <div className="submitHolder buttonGroup">
                                                <button className="button buttonYellow caps" title="Add These Products to List">Add These Products to List</button>
                                                <button className="button caps" title="Skip This Step">Skip This Step</button>
                                             </div>
                                       </div>
                                    </form>
                                 </div>
                           </div>
                           <div className="hireRequestTabcontent h_tabcontent" id="hireDetail">
                                 <div className="hireRequestTabdata">
                                    <div className="mainTitle">
                                       <h5>Hire Details</h5>
                                    </div>
                                    <form action="">
                                       <div className="serviceRequestForm">
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Create Name For Hire List</strong>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Create Name For Hire List" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Select Hire Type</strong>
                                                </label>
                                                <select name="address" id="" className="inputControl selectCustomized">
                                                   <option value="">Select Hire Type</option>
                                                </select>
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Date of equipment requirement</strong>
                                                </label>
                                                <input type="date" className="inputControl" placeholder="Date of equipment requirement" />
                                             </div>
                                             <div className="formHolder bordered">
                                                <label>
                                                   <strong>If not sure about date, select one of the option</strong>
                                                </label>
                                                <select name="address" id="" className="inputControl selectCustomized">
                                                   <option value="">If not sure about date, select one of the option</option>
                                                </select>
                                             </div>
                                             <div className="mainTitle">
                                                <h5>Other Details</h5>
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Do you already have a quote for purchase of this equipment?</strong>
                                                   <span>(if so, enter EST number)</span>
                                                </label>
                                                <input type="text" className="inputControl" placeholder="Enter EST number" />
                                             </div>
                                             <div className="formHolder">
                                                <label>
                                                   <strong>Advise funding source</strong>
                                                </label>
                                                <select name="address" id="" className="inputControl selectCustomized">
                                                   <option value="">Advise funding source</option>
                                                </select>
                                             </div>
                                             <div className="formInfo">
                                                By Submitting for Hire, you will have agreed to our <a href="terms-and-conditions.php" className="colYellow" title="Terms & Conditions">Terms & Conditions</a>
                                             </div>
                                             <div className="submitHolder submit">
                                                <input type="submit" className="button buttonYellow" value="Submit for Hire" />
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

export default hireReq
