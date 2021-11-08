import { useState } from "react";

const ContactForm = () => {
	const [form, setform] = useState({
		name: "",
		email: "",
		phone: "",
      location: "",
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
		<form className="contactus--form" onSubmit={onContactFormSubmit}>
			<div className="input-holder">
				<input
					type="text"
					name="name"
					className="form-control"
					placeholder="Your Full Name"
					onChange={handleChange}
					required
				/>
			</div>
			<div className="input-holder">
				<input
					type="email"
					name="email"
					className="form-control"
					placeholder="Your Email Address"
					onChange={handleChange}
					required
				/>
			</div>
			<div className="input-holder">
				<input
					type="text"
					name="phone"
					className="form-control"
					placeholder="Your Phone Number"
					onChange={handleChange}
					required
				/>
			</div>
			<div className="select-holder input-holder">
				<select
					name="location"
					id=""
					className="form-control required customized"
					onChange={handleChange}
				>
					<option className="col-red" value="0">
						Choose A Location
					</option>
					<option value="Kathmandu">
                  Kathmandu
               </option>
					<option value="Lalitpur">
                  Lalitpur
					</option>
					<option value="Bhaktapur">
                  Bhaktapur
               </option>
				</select>
			</div>
			<div className="input-holder">
				<input
					type="submit"
					className="btn btn-green btn-submit"
					value="Request Free Consultation"
				/>
			</div>
		</form>
	);
};

export default ContactForm;
