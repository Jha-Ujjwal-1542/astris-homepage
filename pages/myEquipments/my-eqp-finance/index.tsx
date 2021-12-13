import Header from "./../../../src/includes/portals/header";
import Sidebar from "./../../../src/includes/portals/sidebar";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import Footer from "./../../../src/includes/portals/footer";

const MyEqpFinance = () => {
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
                    <Link href="/my-equipments">
                      <a title="">Swifty Rehab Pushchair</a>
                    </Link>
                    <span className="breadcrumbIcon">
                      <FaCaretRight />
                    </span>
                    <ul className="innerList">
                      <li>
                        <Link href="/my-eqp-summary">
                          <a title="Summary">Summary</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/my-eqp-finance">
                          <a className="active" title="Financial">
                            Financial
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/my-eqp-service-request">
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
                        <h3>Financial Information</h3>
                      </div>
                      <div className="buttonHolder">
                        <Link href="">
                          <a
                            className="button buttonYellow"
                            title="Save Information"
                          >
                            View Invoice
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="myAccountsFormbox">
                      <form action="">
                        <div className="myAccountsForm">
                          <div className="inputGroup">
                            <label>Funding Body</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="NDIS"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label>Date Of Purchase/Supply</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="14th February, 2021"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label>Delivery to Location</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="Deliverered to Location"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label>Reference Number</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="124678451354"
                              readOnly
                            />
                          </div>
                          <div className="inputGroup">
                            <label>Consulting Therapist</label>
                            <input
                              type="text"
                              className="inputControl"
                              value="John Blogg"
                              readOnly
                            />
                          </div>
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
      <Footer />
    </div>
  );
};

export default MyEqpFinance;
