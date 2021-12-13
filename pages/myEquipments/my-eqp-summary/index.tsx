import Header from "./../../../src/includes/portals/header";
import Sidebar from "./../../../src/includes/portals/sidebar";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import Footer from "./../../../src/includes/portals/footer";
import Image from "next/image";
import PushWheelChair from "../../../public/images/products/pushwheelchair.png";
import Timo from "../../../public/images/brands/brand1.png";

const MyEquipmentSummary = () => {
  return (
    <div>
      <Header />
      <section className="protalSection">
        <div className="portalContainer">
          <div className="portalMainbox">
            <Sidebar />
            <main className="portalMain">
              <div className="myAccountsBox">
                <div className="myAccountsList">
                  <div className="breadcrumbBox">
                    <Link href="/myEquipments">
                      <a title="">Swifty Rehab Pushchair</a>
                    </Link>
                    <span className="breadcrumb--icon">
                      <FaCaretRight />
                    </span>
                    <ul className="innerList">
                      <li>
                        <Link href="/myEqp-summary">
                          <a className="active" title="Summary">
                            Summary
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/myEqp-finance">
                          <a title="Financial">Financial</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/myEqp-service-request">
                          <a title="Service History">Service History</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="portalScroller">
                  <div className="myAccountsDetail">
                    <div className="sectionTitle spaceBetween">
                      <div className="mainTitle">
                        <h3>Equipment Summary</h3>
                      </div>
                    </div>
                    <div className="myEqpSummary">
                      <div className="myEqpSummaryImagebox">
                        <div className="myEqpSummaryImage">
                          <div className="brandLogo">
                            <Image src={Timo} width={120} height={40} alt="" />
                          </div>
                          <figure>
                            <Image
                              src={PushWheelChair}
                              width={278}
                              height={278}
                              alt=""
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="myEqpSummary-detail">
                        <div className="text">
                          <strong>Product Summary</strong>
                          <p>
                            The MOVE wheelchair meets all Motion Composites’
                            lightness and quality objectives while remaining the
                            most accessible folding wheelchair in our product
                            line. The latest technologies are applied to offer a
                            standard wheelchair that will enhance your
                            day-to-day life with superior-quality parts for
                            unrivalled toughness and performance.
                          </p>
                        </div>
                        <div className="myEqpSummary-data">
                          <div className="inputGroup">
                            <label htmlFor="first-name">Equipment Model</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="Swifty Rehab Pushchair"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label htmlFor="first-name">Brand</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="Thomashilfen"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label htmlFor="first-name">Serial Number</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="1617248"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label htmlFor="first-name">Supplier</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="APEX Mobility"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label htmlFor="first-name">Location</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="123 Streety Street, WA 4567, Australia"
                              readOnly
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MyEquipmentSummary;
