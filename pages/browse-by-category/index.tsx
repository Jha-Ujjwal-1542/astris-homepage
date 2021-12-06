import Image from "next/image"
import Link from "next/link" 
import BrandLogo from '../../public/images/brands/brandsLogo.png'
import { FaCaretRight, FaHome, FaCaretDown, FaSearch } from 'react-icons/fa';
import Innerbanner from "../../src/templates/Innerbanner";
import productNames from '../../src/datas/products.json'

export const getStaticProps = async () => {
   const res = "../src/datas/products.json"
   // const data = await res.json()
   console.log(res)
   return{
      props: { productsNames : [] }
   }
}

const BrowseByCategory = () => {
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
                     <span className="breadcrumbText">Browse by Equipment Category</span>
               </div>
            </div>
         </section>
         <section className="browseSection">
            <div className="container">
               <div className="sectionBox">
                  <div className="sectionTitleBordered spaceBetween listArrow">
                     <div className="mainTitle">
                        <h3>Browse by Equipment Category</h3>
                        <span className="dataIcon"><FaCaretDown /></span>
                        <ul>
                           <li>
                              <Link href="/browse-by-category">
                                 <a className="active" title="Browse By Category">Browse By Category</a>
                              </Link></li>
                           <li>
                           <Link href="/browse-by-brands">
                              <a title="Browse By Brands">Browse By Brands</a>
                           </Link></li>
                        </ul>
                     </div>
                     <div className="sectionSearchbox">
                        <FaSearch />
                        <input type="text" placeholder="Search Brands" />
                     </div>
                     </div>
                     <div className="browseBox">
                     <div className="productsItembox" id="products--itembox">
                        {productNames.map( prod => (
                           <div className="productsItem" key={prod.id}>
                              <Link href="#">
                                 <a title="Item Title" className="links">
                                    <div className="productsItemimg">
                                       <figure>
                                          <Image src={prod.image} width={prod.wd} height={prod.ht} alt ="product" />
                                       </figure>
                                    </div>
                                    <div className="productsItemtitle">
                                       <div className="title">{ prod.title }</div>
                                    </div>
                                 </a>
                              </Link>                                
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

export default BrowseByCategory
