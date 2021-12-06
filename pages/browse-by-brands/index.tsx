import Image from "next/image"
import Link from "next/link" 
import BrandLogo from '../../public/images/brands/brandsLogo.png'
import { FaCaretRight, FaHome, FaCaretDown, FaSearch } from 'react-icons/fa';
import Innerbanner from "../../src/templates/Innerbanner";

export const BrandImages = () => {
   for (var i = 1; i <= 12; i++) { 
      <div className="browseBrandItem">
            <a href="product-brands.php" title="">
               <figure><Image src={BrandLogo} width={216} height={218} alt="" /></figure>
            </a>
      </div>
     }
}
const BrowseByBrands = () => {
   return (
      <div>
         <Innerbanner />
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                     <a href="/" className="breadcrumbHome"><FaHome /></a>
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
                    {BrandImages}
                     
                </div>
            </div>
        </div>
    </div>
         </section>
      </div>



   )
}

export default BrowseByBrands
