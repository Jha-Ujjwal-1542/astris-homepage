import Image from "next/image";
import Link from "next/link";
import ClientPortalImg from "../../../public/images/logos/icon--client-portal-img.svg";
import ClientPoralTxt from "../../../public/images/logos/icon--client-portal-text.svg";
import { FaSearch } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { HiHome } from "react-icons/hi";

const Header = () => {
  return (
    <main className="portalContainer">
      <section className="portalHeaderSection">
        <div className="portalHeaderBox">
          <div className="portalHeaderLogo">
            <div className="portalSidebarTrigger">
              <button aria-label="sidebarTrigger" id="portalTrigger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <Link href="">
              <a title="">
                <Image
                  src={ClientPortalImg}
                  width={50}
                  height={36}
                  className="imgImage"
                  alt=""
                />
                <Image
                  src={ClientPoralTxt}
                  className="imageText"
                  width={118}
                  height={33}
                  alt=""
                />
              </a>
            </Link>
          </div>
          <div className="portalHeaderItembox">
            <div className="portalHeaderSearchbox">
              <div className="navSearchbox">
                <input type="text" placeholder="Search Wesbite" />
                <FaSearch />
              </div>
            </div>
            <div className="portalHeaderNotification">
              <button className="newNotificationButton">
                <MdMessage />
              </button>
              <div className="navList">
                <ul>
                  <li className="hasChild">
                    <ul>
                      <li>
                        <p>
                          Order has been placed. Your items are being shipped to
                          our warehouse and will reach you very soon!
                        </p>
                        <span className="noteData">
                          From <strong>Astris PME</strong> at{" "}
                          <strong>12/02/2021 (13:00 PM)</strong>
                        </span>
                      </li>
                      <li>
                        <p>
                          Order has been placed. Your items are being shipped to
                          our warehouse and will reach you very soon!
                        </p>
                        <span className="noteData">
                          From <strong>Astris PME</strong> at{" "}
                          <strong>12/02/2021 (13:00 PM)</strong>
                        </span>
                      </li>
                      <li>
                        <p>
                          Order has been placed. Your items are being shipped to
                          our warehouse and will reach you very soon!
                        </p>
                        <span className="noteData">
                          From <strong>Astris PME</strong> at{" "}
                          <strong>12/02/2021 (13:00 PM)</strong>
                        </span>
                      </li>
                      <li>
                        <p>
                          Order has been placed. Your items are being shipped to
                          our warehouse and will reach you very soon!
                        </p>
                        <span className="noteData">
                          From <strong>Astris PME</strong> at{" "}
                          <strong>12/02/2021 (13:00 PM)</strong>
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portalHeader--return">
              <Link href="/">
                <a className="links" title="Astrice PME">
                  <HiHome />
                  <span>Return to Main Site</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Header;
