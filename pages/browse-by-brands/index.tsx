import Image from "next/image"
import Link from "next/link" 
import BrandLogo from '../../public/images/brands/brandsLogo.png'
import { FaCaretRight, FaHome, FaCaretDown, FaSearch } from 'react-icons/fa';
import Innerbanner from "../../src/templates/Innerbanner";
import brandimages from '../../src/datas/brands.json'

export const getStaticProps = async () => {
   const res = "../src/datas/brands.json"
   return{
      props: { brandimages : [] }
   }
}

const BrowseByBrands = () => {
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
                     <span className="breadcrumbText">Browse by Brands</span>
               </div>
            </div>
         </section>
         <section className="browseSection">
            <div className="container">
               <div className="sectionBox">
                  <div className="sectionTitleBordered spaceBetween listArrow">
                     <div className="mainTitle">
                        <h3>Browse By Brands</h3>
                        <span className="dataIcon"><FaCaretDown /></span>
                        <ul>
                           <li>
                              <Link href="/browse-by-category">
                                 <a title="Browse By Category">Browse By Category</a>
                              </Link>
                           </li>
                           <li>
                              <Link href="/browse-by-brands">
                                 <a className="active" title="Browse By Brands">Browse By Brands</a>
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <div className="sectionSearchbox">
                        <FaSearch />
                        <input type="text" placeholder="Search Brands" />
                     </div>
                  </div>
                  <div className="browseBox">
                     <div className="browseBrandItembox">
                        {brandimages.map( brandimage => (
                           <div key={brandimage.id} className="browseBrandItem">
                              <a href="product-brands.php" title="">
                                 <figure>
                                    <Image src={brandimage.brandimg} width={220} height={220} alt={brandimage.name} />
                                 </figure>
                              </a>
                           </div>
                        ))}   
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>



   )
}

export default BrowseByBrands
