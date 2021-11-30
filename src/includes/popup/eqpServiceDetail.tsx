import Image from 'next/image'
import ServiceDetail from '../../../public/images/eqpServiceDetail.png'

const EqpServiceDetail = () => {
   return (
      <section className="popupSection" id="eqp-service-detail">
    <div className="popupOverlay popupClose"></div>
    <div className="popupContainer">
        <main className="popupMain">
            <div className="popupClose popupClose"></div>
            <div className="popupBox">
                <div className="eqpServiceDetail">
                    <div className="mainTitle">
                        <h3>Swifty Rehab Pushchair</h3>
                    </div>
                    <div className="serviceRequestBox">
                        <form action="">
                            <div className="serviceRequestForm">
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Full Name *</strong>
                                        <span>(NDIS participant name)</span>
                                    </label>
                                    <input type="text" className="inputControl" value="John Blogg" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Full Name *</strong>
                                        <span>(Best person htmlFor technician to contact and arrange a time htmlFor the service)</span>
                                    </label>
                                    <input type="text" className="inputControl" value="Joanna Blogg" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Phone Number *</strong>
                                        <span>(Best number for technician to call and arrange a time for the service)</span>
                                    </label>
                                    <input type="text" className="inputControl" value="01 123 456 789" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Email Address *</strong>
                                        <span>(Where quote is to be sent)</span>
                                    </label>
                                    <input type="text" className="inputControl" value="john.blogg@acme.com.au" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Address *</strong>
                                        <span>(Where the service will take place)</span>
                                    </label>
                                    <input type="text" className="inputControl" value="123 Streety Street, Western Australia" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Account Details / Funding Body *</strong>
                                    </label>
                                    <input type="text" className="inputControl" value="JC Morgan Institue, AC: 1301284912" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>NDIS Number</strong>
                                    </label>
                                    <input type="text" className="inputControl" value="123456789" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Date of Birth</strong>
                                    </label>
                                    <input type="text" className="inputControl" value="14th February 2021" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Authority to create the NDIS Service Booking *</strong>
                                        <span>(Please Tick)</span>
                                    </label>
                                    <span>Yes - I give authority</span>
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>NDIS Support Budget Funds to be taken from *</strong>
                                    </label>
                                    <span>Yes - I give authority</span>
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Product Name of Equipment to be Serviced / Repaired</strong>
                                    </label>
                                    <input type="text" className="inputControl " value="Swifty Rehab Pushchair" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Serial Number</strong>
                                    </label>
                                    <input type="text" className="inputControl " value="12946182" readOnly />
                                </div>
                                <div className="formHolder">
                                    <label htmlFor="">
                                        <strong>Reason for Repair *</strong>
                                        <span>NOTE: Where products are damaged, please upload photos of the equipment to be serviced, e.g. wheelchair, shower commode, etc. as well as the damaged area and broken parts. This will help speed up the service procedure.</span>
                                    </label>
                                    <textarea rows={6} className="inputControl" readOnly>There is some problem with the thing that spins, and frankly I do not really like how that spinning thing does not spin the way it is supposed. I would rather if it spun in an optimal spinnage frequency</textarea>
                                </div>
                                {/* <div className="formHolder">
                                    <label htmlFor=""></label>
                                    <div className="eqpDetailImage">
                                        <Image src={ServiceDetail} width={} height={} alt="" />
                                    </div>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</section>
   )
}

export default EqpServiceDetail
