import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/brochure.module.css'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { FaHome, FaSearch, FaCaretDown } from 'react-icons/fa'
import brochuresImage from '../../public/images/brochuresImage.png'
import BrochureImg1 from "../../public/images/brochure/brochuresimage1.png";
import BrochureImg2 from "../../public/images/brochure/brochuresimage2.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// export const getStaticProps = async () => {
//    const res = "../src/datas/blogs.json"
//    // const data = await res.json()
//    console.log(res)
//    return{
//       props: { blogs : [] }
//    }

// }

const Brochure = () => {
   return (
      <section>
         <section className={styles.breadcrumbSection}>
            {/* Heading and search bar */}
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <Link href="/">
                     <FaHome width="25px" height="25px" />
                  </Link>
                  <IoMdArrowDroprightCircle width="" height="" />
                  <Link href="/pages/brochures">
                     <a className={styles.breadcrumbText}>Equipment Brochure</a>
                  </Link>
               </div>
               <div className={styles.sectionSearchbox}>
                    <FaSearch />
                    <input type="text" placeholder="Search Brochures" />
                </div>
            </div>
         </section>
         {/* Slider */}
         <section className={styles.brochureSection}>
               <div className={styles.brochuresSliderbox}>
                  <div className={styles.brochuresSlider} id="brochureSlider">
                     <Image src={brochuresImage} width="142px" height="201px" />
                     <Image src={brochuresImage} width="142px" height="201px" />
                     <Image src={brochuresImage} width="142px" height="201px" />
                     <Image src={brochuresImage} width="142px" height="201px" />
                     <Image src={brochuresImage} width="142px" height="201px" />
                  </div>
               </div>
         </section>
         {/* Main Box */}
         <section className={styles.Mainbox}>
                <aside className={styles.sectionSidebar}>
                    {/*Form Sidebar for Brands*/}
                    <div className={styles.sidebarFiltergroup}>
                        <div className={styles.sidebarTitle}>
                           <span>Brand</span>
                           <span className={styles.trigger}>
                              <FaCaretDown />
                           </span>
                        </div>
                        {/*Form Sidebar*/}
                        <form className={styles.sectionSidebar}>
                            <div className={styles.customGroup}>
                                <input type="checkbox" name="brand-filter" id="bfilter-able-life" checked />
                                <label>Able Life</label>
                            </div>
                            <div className={styles.customGroup}>
                                <input type="checkbox" name="brand-filter" id="bfilter-timo" />
                                <label>TIMO</label>
                            </div>
                            <div className={styles.customGroup}>
                                <input type="checkbox" name="brand-filter" id="bfilter-trust-care" />
                                <label>Trust Care</label>
                            </div>
                            <div className={styles.customGroup}>
                                <input type="checkbox" name="brand-filter" id="bfilter-columbia-medical" />
                                <label>Columbia Medical</label>
                            </div>
                            <div className={styles.customGroup}>
                                <input type="checkbox" name="brand-filter" id="bfilter-shoprider" />
                                <label>Shoprider</label>
                            </div>
                            <div className={styles.customGroup}>
                                <input type="checkbox" name="brand-filter" id="bfilter-spex" />
                                <label>Spex</label>
                            </div>
                        </form>
                    </div>
                    {/*Form Sidebar for Category*/}
                    <div className={styles.sidebarFiltergroup}>
                        <div className={styles.sidebarTitle}>
                           <span>Category</span>
                           <span className={styles.trigger}>
                              <FaCaretDown />
                           </span>
                        </div>
                        <form>
                            <div className={styles.sidebarFilter}>
                                <div className={styles.customGroup}>
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-popularity" checked />
                                    <label>Popularity</label>
                                </div>
                                <div className={styles.customGroup}>
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-low-high"  />
                                    <label>Lowest to Highest</label>
                                </div>
                                <div className={styles.customGroup}>
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-high-low"  />
                                    <label>Highest to Lowest</label>
                                </div>
                                <div className={styles.customGroup}>
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-alphabetically" />
                                    <label>Alphabetically</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </aside>
                <main className={styles.Main}>
                    <div className={styles.brochuresItembox}>
                     <Link href="/singleBrochure.tsx">
                        <a>
                           <Image src={BrochureImg1} />
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/singleBrochure.tsx">
                        <a>
                           <Image src={BrochureImg2} />
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/singleBrochure.tsx">
                        <a>
                           <Image src={BrochureImg1} />
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/singleBrochure.tsx">
                        <a>
                           <Image src={BrochureImg2} />
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/singleBrochure.tsx">
                        <a>
                           <Image src={BrochureImg1} />
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                    </div>
                </main>
            </section>
      </section>
   )
}

export default Brochure