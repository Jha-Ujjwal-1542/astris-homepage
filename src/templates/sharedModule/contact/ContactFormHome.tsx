import { useState } from "react";
import Link from 'next/link';

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
		<form className="contactForm" onSubmit={onContactFormHomeSubmit}>
			<div className="contactFormBox">
				<input type="text" className="inputControl" name="first-name" id="first-name" placeholder="Your First Name" onChange={handleChange} required />
				
				<input type="email" className="inputControl" name="email-address" id="email-address" placeholder="Your Email Address" onChange={handleChange} required  />
				
				<input type="text" className="inputControl" name="phone-number" id="phone-number" placeholder="Your Phone Number" onChange={handleChange} required  />
				
				<input type="text" className="inputControl" name="role" id="role" placeholder="Choose a Location" onChange={handleChange} required  />
				
            <Link href="#" passHref>
               <a>
               <button type="submit" className="button">
					   Send Message
				   </button>
               </a>
            </Link>
			</div>
		</form>
	);
};

export default ContactFormHome;
