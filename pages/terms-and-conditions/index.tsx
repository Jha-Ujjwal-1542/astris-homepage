import Link from "next/link";
import Image from "next/image";
import { FaHome, FaCaretRight } from "react-icons/fa";

const TermsConditions = () => {
  return (
    <div>
      <section className="breadcrumbSection">
        <div className="container">
          <div className="breadcrumbBox">
            <Link href="/">
              <a className="breadcrumbHome">
                <FaHome />
              </a>
            </Link>
            <span className="breadcrumbIcon">
              <FaCaretRight />
            </span>
            <span className="breadcrumbText">Terms and Conditions</span>
          </div>
        </div>
      </section>
      <section className="pagesSection">
        <div className="container">
          <div className="sectionMainbox">
            <aside className="sectionSidebar pages">
              <div className="pagesList">
                <ul>
                  <li>
                    <Link href="">
                      <a title="Privacy Policy">Privacy Policy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-and-conditions">
                      <a className="active" title="Terms & Conditions">
                        Terms & Conditions
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a title="Terms Of Use">Terms Of Use</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
            <main className="sectionMain">
              <div className="pagesBox">
                <div className="sectionTitle">
                  <div className="mainTitle">
                    <h3>Terms & Conditions</h3>
                  </div>
                </div>
                <div className="text">
                  <p>
                    These Terms and Conditions apply (unless otherwise
                    previously agreed in writing) to the supply of Goods by
                    Astris PME to a Customer from time to time. Any supply of
                    Goods by Astris PME to the Customer made after the date of
                    acceptance of these terms is a supply pursuant to these
                    Terms and Conditions as defined and any such supply does not
                    give rise to a new or separate agreement.
                  </p>
                  <br />
                  <strong>Interpretation</strong>
                  <br />
                  <p>
                    In these conditions unless the contrary intention appears:
                  </p>
                  <ul>
                    <li className="terms">
                      “Additional Charges” includes all installation charges,
                      delivery, handling and storage charges, goods and services
                      tax, stamp duty, interest, legal and other costs of
                      recovery of unpaid money and all other government imposts
                      and all money, other than the Purchase Price, payable by
                      the Customer to Astris PME arising out of the sale of the
                      Goods.
                    </li>
                    <li className="terms">
                      “Customer” means the person or entity to or for whom the
                      Goods are to be supplied by Astris PME.
                    </li>
                    <li className="terms">
                      “Goods” means the goods sold to the Customer by Astris PME
                      and any related services provided by Astris PME.
                    </li>
                    <li className="terms">
                      “Intellectual Property” means Astris PME’s business names,
                      trade names, trade marks, product names, copyright,
                      patents, designs, industrial processes, trade secrets,
                      know how and other intellectual property rights and
                      development in such property rights.
                    </li>
                    <li className="terms">
                      “Astris PME” means Astris PME Pvt. Ltd., ABN 62 630 886
                      887.
                    </li>
                    <li className="terms">
                      “Purchase Price” means the list price for the goods as
                      charged by Astris PME at the date of delivery or such
                      other price as may be agreed by Astris PME and the
                      Customer prior to delivery of the Goods.
                    </li>
                    <li className="terms">
                      “Terms and Conditions” means these trading terms and
                      conditions as amended from time to time by Astris PME and
                      notified to the Customer.
                    </li>
                  </ul>
                  <br />
                  <strong>Order for Goods</strong>
                  <br />
                  <p>
                    An order given to Astris PME is binding on Astris PME and
                    the Customer, if:
                    <br />
                    <ul>
                      <li className="terms">
                        a written acceptance is signed for or on behalf of
                        Astris PME; or
                      </li>
                      <li className="terms">
                        the Goods are supplied by Astris PME in accordance with
                        the order.
                      </li>
                      <li className="terms">
                        The Customer must place all orders to Astris PME in
                        writing specifying order number, date of order, goods
                        required, requested delivery date, quotation reference
                        number, place of delivery and full name and title of
                        person placing the order.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
