import Image from 'next/image'
import Link from 'next/link'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { FaHome, FaSearch, FaCaretDown } from 'react-icons/fa'
import brochuresImage from '../../public/images/brochuresImage.png'
import BrochureImg1 from "../../public/images/brochure/brochuresimage1.png";
import BrochureImg2 from "../../public/images/brochure/brochuresimage2.png";
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export const getStaticProps = async () => {
   const res = "../src/datas/brochure.json"
   // const data = await res.json()
   console.log(res)
   return{
      props: { brochures : [] }
   }
}

const Brochure = () => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 250,
      slidesToShow: 4,
      slidesToScroll: 1
    }; 
    return (
      <section>
         <section className="breadcrumbSection">
            {/* Heading and search bar */}
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a>
                        <FaHome width="25px" height="25px" />
                     </a>
                  </Link>
                  <IoMdArrowDroprightCircle />
                  <Link href="/brochures">
                     <a className="breadcrumbText">Equipment Brochure</a>
                  </Link>
               </div>
               <div className="sectionSearchbox">
                    <FaSearch />
                    <input type="text" placeholder="Search Brochures" />
                </div>
            </div>
         </section>
         {/* Slider */}
         <section className="brochureSection">
            <Slider {...settings}>
               <Image src={brochuresImage} width="142px" height="201px"  alt="" />
            </Slider>
         </section>
         {/* Main Box */}
         <section className="mainBox">
                <aside className="sectionSidebarFilter">
                    {/*Form Sidebar for Brands*/}
                    <div className="sidebarFiltergroup">
                        <div className="sidebarTitle">
                           <span>Brand</span>
                           <span className="trigger">
                              <FaCaretDown />
                           </span>
                        </div>
                        {/*Form Sidebar*/}
                        <form className="sectionSidebar">
                            <div className="customGroup">
                                <input type="checkbox" name="brand-filter" id="bfilter-able-life" />
                                <label>Able Life</label>
                            </div>
                            <div className="customGroup">
                                <input type="checkbox" name="brand-filter" id="bfilter-timo" />
                                <label>TIMO</label>
                            </div>
                            <div className="customGroup">
                                <input type="checkbox" name="brand-filter" id="bfilter-trust-care" />
                                <label>Trust Care</label>
                            </div>
                            <div className="customGroup">
                                <input type="checkbox" name="brand-filter" id="bfilter-columbia-medical" />
                                <label>Columbia Medical</label>
                            </div>
                            <div className="customGroup">
                                <input type="checkbox" name="brand-filter" id="bfilter-shoprider" />
                                <label>Shoprider</label>
                            </div>
                            <div className="customGroup">
                                <input type="checkbox" name="brand-filter" id="bfilter-spex" />
                                <label>Spex</label>
                            </div>
                        </form>
                    </div>
                    {/*Form Sidebar for Category*/}
                    <div className="sidebarFiltergroup">
                        <div className="sidebarTitle">
                           <span>Category</span>
                           <span className="trigger">
                              <FaCaretDown />
                           </span>
                        </div>
                        <form>
                            <div className="sidebarFilter">
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-popularity" />
                                    <label>Popularity</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-low-high"  />
                                    <label>Lowest to Highest</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-high-low"  />
                                    <label>Highest to Lowest</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-alphabetically" />
                                    <label>Alphabetically</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </aside>
                <main className="main">
                    <div className="brochuresItembox">
                     <Link href="/brochures/singleBrochure">
                        <a>
                           <Image src={BrochureImg1} alt="" />
                           <br/>
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/brochures/singleBrochure">
                        <a>
                           <Image src={BrochureImg2} alt="" />
                           <br/><button>

                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/brochures/singleBrochure">
                        <a>
                           <Image src={BrochureImg1} alt="" />
                           <br/>
                           <button>
                              Learn More
                           </button>
                        </a>
                     </Link>
                     <Link href="/brochures/singleBrochure">
                        <a>
                           <Image src={BrochureImg2} alt="" />
                           <br/>
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