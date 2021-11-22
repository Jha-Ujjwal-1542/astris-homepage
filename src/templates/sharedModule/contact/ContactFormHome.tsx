import { useState } from "react";
import Link from 'next/link';
import { FaUser } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { IoCall } from 'react-icons/io5'
import { MdLocationOn } from 'react-icons/md'

const ContactFormHome = () => {
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
		<form onSubmit={onContactFormHomeSubmit}>
			<div className="contactForm">
				<div className="formGroup">
					<FaUser className="formIcon" /><input type="text" className="formControl" name="first-name" id="first-name" placeholder="Your First Name" onChange={handleChange} required />
				</div>
				<div className="formGroup">
					<GrMail className="formIcon" /><input type="email" className="formControl" name="email-address" id="email-address" placeholder="Your Email Address" onChange={handleChange} required  />
				</div>
				<div className="formGroup">
					<IoCall className="formIcon" /><input type="text" className="formControl" name="phone-number" id="phone-number" placeholder="Your Phone Number" onChange={handleChange} required  />
				</div>
				<div className="formGroup">
					<MdLocationOn className="formIcon" /><input type="text" className="formControl" name="role" id="role" placeholder="Choose a Location" onChange={handleChange} required  />
				</div>
				<div className="formGroupSubmit">
					<Link href="#" passHref>
						<a>
							<button type="submit" className="formSubmit button buttonYellow">
								REQUEST FREE CONSULTATION
							</button>
						</a>
          		</Link>
            </div>
			</div>
		</form>
	);
};

export default ContactFormHome;
