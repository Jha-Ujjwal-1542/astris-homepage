import Image from "next/image";
import ExpertTherapist from "../../public/images/Expert therapist.png"
import contactBG from "../../public/images/contactBg.png"
import { useState } from "react";
import Link from 'next/link';
import { FaUser } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { IoCall } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'

const ContactUs = () => {
   const [form, setform] = useState({
		firstname: "",
		lastname: "",
		state: "",
		postcode: "",
		email: "",
		phone: "",
		mobile: "",
		role: "",
	});

	const handleChange = (e:any) => {
		const { name, value } = e.target;
		setform(prevState => ({
			...prevState,
			[name]: value,
		}));
	};

   const onContactFormHomeSubmit = (e: any) => {
      e.preventDefault();
   }

   return (
      <section className="contactSection">
         <div className="contactBgoverlay">
            <Image src={contactBG} width="" height="" alt="" />
         </div>
         <div className="container">
            <div className="contactBox">
               <div className="contactImagebox">
                  <div className="contactImage">
                     <figure>
                        <Image width="522px" height="500px" src={ExpertTherapist} alt="" />
                     </figure>
                  </div>
                  <div className="contactImagetext">
                     <strong>Joanna Bloggs</strong> Expert Therapist
                  </div>
               </div>
               <div className="contactFormbox">
                  <div className="sectionTitle">
                     <div className="subTitle">FREE CONSULTATION</div>
                     <div className="mainTitle">
                        <h3>Speak To Us Today!</h3>
                     </div>
                  </div>
                  <form onSubmit={onContactFormHomeSubmit}>
                     <div className="contactForm">
                        <div className="formGroup">
                           <FaUser className="formIcon" />
                           <input type="text" className="formControl" name="first-name" id="first-name" placeholder="Your Full Name" onChange={handleChange} required />
                        </div>
                        <div className="formGroup">
                           <GrMail className="formIcon" />
                           <input type="email" className="formControl" name="email-address" id="email-address" placeholder="Your Email Address" onChange={handleChange} required  />
                        </div>
                        <div className="formGroup">
                           <IoCall className="formIcon" />
                           <input type="text" className="formControl" name="phone-number" id="phone-number" placeholder="Your Phone Number" onChange={handleChange} required  />
                        </div>
                        <div className="formGroup">
                           <MdLocationOn className="formIcon" />
                           <select name="location" id="choose-location" className="formControl" placeholder="Choose a Location" onChange={handleChange} required>
                                <option value="0">Choose A Location</option>
                           </select>
                        </div>
                        <div className="formGroupSubmit">
                           <Link href="#" passHref>
                              <a className="links">
                                 <input type="submit" className="formSubmit button buttonYellow caps w-100" value="REQUEST FREE CONSULTATION" />
                              </a>
                           </Link>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )      
}
export default ContactUs;