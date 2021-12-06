import { FaHome, FaSearch, FaCaretRight } from 'react-icons/fa'
import Link from 'next/link'
import IconUpload from '../../../public/images/Upload.svg'
import {useState} from 'react';

const ServiceReq = () => {
    const [checked, setChecked] = useState(false); 
    const handleChange = () => { 
      setChecked(!checked); 
    };

    return (
    <section>
        {/* <section className="bannerInnerSection">
            <h1 className="dNone">Service Request - Astris PME</h1>
        </section> */}
        <section className="breadcrumbSection">
            <div className="container">
                <div className="breadcrumbBox">
                    <Link href="/">
                        <a><FaHome width={17} height={15} /></a>
                    </Link>
                    <span className="breadcrumbIcon"><FaCaretRight   /></span>
                    <span className="breadcrumbText">Service Request</span>
                </div>
            </div>
        </section>
        <section className="SuestSection">
            <div className="container">
                <div className="sectionBox">
                    <div className="sectionTitle">
                        <div className="mainTitle">
                            <h3>Service Request</h3>
                        </div>
                        <div className="text">
                            <p>Please complete the following form to submit a Service Request</p>
                        </div>
                    </div>
                    <div className="serviceRequestBox">
                        <form action="">
                            <div className="serviceRequestForm">
                                <div className="formHolder">
                                    <label>
                                        <strong>Full Name *</strong>
                                        <span>(NDIS participant name)</span>
                                    </label>
                                    <input type="text" className="inputControl" placeholder="Full Name" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Full Name *</strong>
                                        <span>(Best person for technician to contact and arrange a time for the service)</span>
                                    </label>
                                    <input type="text" className="inputControl" placeholder="Full Name *" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Phone Number *</strong>
                                        <span>(Best number for technician to call and arrange a time for the service)</span>
                                    </label>
                                    <input type="text" className="inputControl" placeholder="Phone Number *" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Email Address *</strong>
                                        <span>(Where quote is to be sent)</span>
                                    </label>
                                    <input type="text" className="inputControl" placeholder="Email Address *" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Address *</strong>
                                        <span>(Where the service will take place)</span>
                                    </label>
                                    <select name="address" id="" className="inputControl selectCustomized">
                                        <option value="">Select Address</option>
                                    </select>
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Account Details / Funding Body *</strong>
                                    </label>
                                    <input type="text" className="inputControl" placeholder="Account Details / Funding Body *" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>NDIS Number</strong>
                                    </label>
                                    <input type="text" className="inputControl" placeholder="NDIS Number" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Date of Birth</strong>
                                    </label>
                                    <input type="date" className="inputControl" placeholder="Enter Date" />
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Authority to create the NDIS Service Booking *</strong>
                                        <span>(Please Tick)</span>
                                    </label>
                                    <div className="customGroup">
                                        <input type="checkbox" name="" id="yes-authority" onChange={handleChange} />
                                        <label>Yes - I give authority</label>
                                    </div>
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>NDIS Support Budget Funds to be taken from *</strong>
                                    </label>
                                    <div className="customGroup">
                                        <input type="checkbox" name="" id="consumables" onChange={handleChange} />
                                        <label>Consumables</label>
                                    </div>
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Product Name of Equipment to be Serviced / Repaired</strong>
                                    </label>
                                    <div className="formSearchbox inputIcon">
                                        <input type="text" className="inputControl " placeholder="Search Product" />
                                        <FaSearch width={19} height={19}/>
                                    </div>
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Reason for Repair *</strong>
                                        <span>NOTE: Where products are damaged, please upload photos of the equipment to be serviced, e.g. wheelchair, shower commode, etc. as well as the damaged area and broken parts. This will help speed up the service procedure.</span>
                                    </label>
                                    <textarea className="inputControl" placeholder="Reason for Repair *"></textarea>
                                </div>
                                <div className="formHolder">
                                    <label>
                                        <strong>Serial Number</strong>
                                    </label>
                                    <div className="inputUpload">
                                        <div>
                                            <input type="file" className="inputFile" id="fileUp" />
                                            <label>
                                                <span className="fileName">Select File</span>
                                                {/* <span className="fileIcon"><Image src={IconUpload} alt="" /></span> */}
                                            </label>
                                        </div>
                                        <span>(Maximum of 3 images / Limit of 2Mb per file)</span>
                                    </div>
                                </div>
                                <div className="submitHolder">
                                    <input type="submit" className="button buttonYellow caps w-100" value="SUBMIT FOR SERVICE" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </section>
   )
}

export default ServiceReq
