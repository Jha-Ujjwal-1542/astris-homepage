import Header from '../../../src/includes/portals/header';
import Sidebar from '../../../src/includes/portals/sidebar';
import Link from 'next/link'
import { useForm } from "react-hook-form";

const EditTherapist = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
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
                                    <h3>Edit Therapist</h3>
                                 </div>
                                 <div className="buttonHolder">
                                    <Link href="" passHref>
                                       <a className="button buttonYellow" title="Save Changes">Save Changes</a>
                                    </Link>
                                 </div>
                              </div>
                              <div className="myAccountsFormbox">
                                <form onSubmit={handleSubmit(onSubmit)} action="">
                                    <div className="myAccountsForm">
                                        <div className="inputGroup">
                                            <label htmlFor="first-name">First Name *</label>
                                            <input type="text" className="inputControl" name="first-name" id="first-name" defaultValue="First Name *" value="Joanna" />
                                        </div>
                                        <div className="inputGroup">
                                            <label htmlFor="last-name">Last Name *</label>
                                            <input type="text" className="inputControl" name="last-name" id="last-name" placeholder="Last Name *" value="Newsomm" />
                                        </div>
                                        <div className="inputGroup">
                                            <label htmlFor="phone-number">Phone Number *</label>
                                            <input type="text" className="inputControl" name="phone-number" id="phone-number" placeholder="Phone Number *" value="01 2345 6789 940" />
                                        </div>
                                        <div className="inputGroup">
                                            <label htmlFor="email-address">Email Address *</label>
                                            <input type="text" className="inputControl" name="email-address" id="email-address" placeholder="Email Address *" value="joanna.n@gmail.com" />
                                        </div>
                                        <div className="inputGroup">
                                            <label htmlFor="clinic">Clinic *</label>
                                            <input type="text" className="inputControl" name="clinic" id="clinic" placeholder="Clinic *" value="EyePlus Clinic" />
                                        </div>
                                        <div className="inputGroup">
                                            <label htmlFor="access-level">Access Level *</label>
                                            <select name="access-level" id="access-level" className="inputControl selectCustomized absolute--list">
                                                <option value="1">Select Access Level</option>
                                                <option value="2">Select Access Level</option>
                                                <option value="3">Select Access Level</option>
                                                <option value="4">Select Access Level</option>
                                            </select>
                                        </div>
                                        {errors.exampleRequired && <span>This field is required</span>}
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
      </section>
   )
}

export default EditTherapist
