import { useState } from "react";

const ContactForm = () => {
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

   const onContactFormSubmit = (e: any) => {
      e.preventDefault();
   }

	return (
		<form className="contactForm" onSubmit={onContactFormSubmit}>
			<div className="contactFormBox">
				<label className="labelInput">First Name</label>
				<input type="text" className="inputControl" name="first-name" id="first-name" onChange={handleChange} required />
				
				<label className="labelInput">Last Name</label>
				<input type="text" className="inputControl" name="last-name" id="last-name" onChange={handleChange} required  />
				
				<label className="labelInput">State</label>
				<input type="text" className="inputControl" name="state" id="state" onChange={handleChange} required  />
				
				<label className="labelInput">Post Code</label>
				<input type="text" className="inputControl" name="post-code" id="post-code" onChange={handleChange} required />
				
				<label className="labelInput">Email Address</label>
				<input type="email" className="inputControl" name="email-address" id="email-address" onChange={handleChange} required  />
				
				<label className="labelInput">Phone Number (Incl Area Code)</label>
				<input type="text" className="inputControl" name="phone-number" id="phone-number" onChange={handleChange} required  />
				
				<label className="labelInput">Mobile Number</label>
				<input type="text" className="inputControl" name="mobile-number" id="mobile-number" onChange={handleChange} required />
				
				<label className="labelInput">Role</label>
				<input type="text" className="inputControl" name="role" id="role" onChange={handleChange} required  />
				
				<label className="labelInput">How can we help?</label>
				<textarea name="message" id="message" className="inputControl" defaultValue="How can we help?" required />

				<button type="submit" className="button">
					Send Message
				</button>
			</div>
		</form>
	);
};

export default ContactForm;
