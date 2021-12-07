import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Innerbanner from '../../src/templates/Innerbanner';
import { FaHome, FaCaretRight, FaSearch, FaCaretDown } from 'react-icons/fa';
import ProdArchive from '../../src/includes/components/product-archive';
export const Included = () => {
   for (var i = 1; i <= 9; i++) {
      <ProdArchive />
  }
}

const SingleProduct = () => {
   return (
      <div>
         <Innerbanner />
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                     <Link href="/">
                        <a className="breadcrumbHome"><FaHome /></a>
                     </Link>
                     <span className="breadcrumbIcon"><FaCaretRight /></span>
                     <Link href="/browse-by-category">
                        <a>Products</a>
                     </Link>
                     <span className="breadcrumbIcon"><FaCaretRight /></span>
                     <span className="breadcrumbText">Special Needs Pushchairs</span>
               </div>
            </div>
         </section>
         <section className="searchResultSection">
    <div className="container">
        <div className="sectionBox">
            <div className="sectionTitleBordered spaceBetween">
                <div className="mainTitle">
                    <h3>Special Needs Pushchairs</h3>
                </div>
                <div className="sectionSearchbox">
                    <FaSearch />
                    <input type="text" placeholder="Search products" />
                </div>
            </div>
            <div className="sectionMainbox">
                <aside className="sectionSidebar filter">
                    <div className="sectionSidebarFiltergroup">
                        <div className="sectionSidebarTitle">
                            <span>Brand</span>
                            <span className="trigger"><FaCaretDown /></span>
                        </div>
                        <form>
                            <div className="sectionSidebarFilter">
                                <div className="customGroup">
                                    <input type="checkbox" name="brand-filter" id="bfilter-able-life" />
                                    <label htmlFor="bfilter-able-life">Able Life</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="brand-filter" id="bfilter-timo" />
                                    <label htmlFor="bfilter-timo">TIMO</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="brand-filter" id="bfilter-trust-care" />
                                    <label htmlFor="bfilter-trust-care">Trust Care</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="brand-filter" id="bfilter-columbia-medical" />
                                    <label htmlFor="bfilter-columbia-medical">Columbia Medical</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="brand-filter" id="bfilter-shoprider" />
                                    <label htmlFor="bfilter-shoprider">Shoprider</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="brand-filter" id="bfilter-spex" />
                                    <label htmlFor="bfilter-spex">Spex</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sectionSidebarFiltergroup">
                        <div className="sectionSidebarTitle">
                            <span>Price</span>
                            <span className="trigger"><FaCaretDown /></span>
                        </div>
                        <div className="sectionSidebarFilter">
                            <div className="customPriceRange"></div>
                        </div>
                    </div>
                    <div className="sectionSidebarFiltergroup">
                        <div className="sectionSidebarTitle">
                            <span>Condition</span>
                            <span className="trigger"><FaCaretDown /></span>
                        </div>
                        <form>
                            <div className="sectionSidebarFilter">
                                <div className="customGroup">
                                    <input type="checkbox" name="condition-filter" id="cf-amputations" />
                                    <label htmlFor="cf-amputations">Amputations</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="condition-filter" id="cf-cerebral-plasy" />
                                    <label htmlFor="cf-cerebral-plasy">Cerebral Palsy</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="condition-filter" id="cf-arthritis" />
                                    <label htmlFor="cf-arthritis">Arthritis</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="condition-filter" id="cf-spinal-cord-injury" />
                                    <label htmlFor="cf-spinal-cord-injury">Spinal Cord Injury</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sectionSidebarFiltergroup">
                        <div className="sectionSidebarTitle">
                            <span>Sort By</span>
                            <span className="trigger"><FaCaretDown /></span>
                        </div>
                        <form>
                            <div className="sectionSidebarFilter">
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-popularity" />
                                    <label htmlFor="sbfilter-popularity">Popularity</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-low-high" />
                                    <label htmlFor="sbfilter-low-high">Lowest to Highest</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-high-low" />
                                    <label htmlFor="sbfilter-high-low">Highest to Lowest</label>
                                </div>
                                <div className="customGroup">
                                    <input type="checkbox" name="sort-by-filter" id="sbfilter-alphabetically" />
                                    <label htmlFor="sbfilter-alphabetically">Alphabetically</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </aside>
                <main className="sectionMain">
                    <div className="productArchiveBox">
                        <div className="productArchiveItembox">
                           {Included}
                            <div className="loadMoreButton">
                                <button className="button buttonBordered caps" title="Load More Products">Load More Products</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</section>
      </div>
   )
}

export default SingleProduct
