import { FaHome, FaCaretRight, FaSearch, FaCaretDown } from 'react-icons/fa'
import Link  from 'next/link'
import Image from 'next/image'
import results from '../../src/datas/searchResult.json'

export const getStaticProps = async () => {
   const res = "../src/datas/searchResult.json"
   return{
      props: { results : [] }
   }
}  

const searchWebsite = () => {
   return (
      <section>
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                     <Link href="/">
                        <a className="breadcrumbHome"><FaHome /></a>
                     </Link>
                     <span className="breadcrumbIcon"><FaCaretRight /></span>
                     <Link href="">
                        <a href="">Search Result</a>
                     </Link>
                     <span className="breadcrumbIcon"><FaCaretRight /></span>
                     <span className="breadcrumbText">Proper Way to Push Wheelchair</span>
               </div>
            </div>
         </section>
         <section className="searchResultSection">
            <div className="container">
               <div className="sectionBox">
                     <div className="sectionTitleBordered">
                        <div className="mainTitle">
                           <h3>Search Result</h3>
                        </div>
                        <div className="sectionSearchbox">
                           <FaSearch />
                           <input type="text" placeholder="Enter Query Here" />
                        </div>
                     </div>
                     <div className="sectionMainbox">
                     <aside className="sectionSidebar filter">
                        <div className="sectionSidebarFiltergroup">
                           <div className="sectionSidebarTitle">
                              <span>Filter By</span>
                              <span className="trigger"><FaCaretDown /></span>
                           </div>
                           <form>
                              <div className="sectionSidebar-filter">
                                 <div className="customGroup">
                                    <input type="checkbox" name="search-filter" id="sf-products" />
                                    <label>Products</label>
                                 </div>
                                 <div className="customGroup">
                                    <input type="checkbox" name="search-filter" id="sf-blogs" />
                                    <label>Blogs</label>
                                 </div>
                                 <div className="customGroup">
                                    <input type="checkbox" name="search-filter" id="sf-news" />
                                    <label>News</label>
                                 </div>
                                 <div className="customGroup">
                                    <input type="checkbox" name="search-filter" id="sf-brochure" />
                                    <label>Brochure</label>
                                 </div>
                                 <div className="customGroup">
                                    <input type="checkbox" name="search-filter" id="sf-guides" />
                                    <label>Guides</label>
                                 </div>
                                 <div className="customGroup">
                                    <input type="checkbox" name="search-filter" id="sf-service" />
                                    <label>Service</label>
                                 </div>
                              </div>
                           </form>
                        </div>
                     </aside>
                <main className="sectionMain">
                    <div className="searchResultBox">
                        <div className="title">5 Results found for <strong>Proper Way to Push Wheelchair</strong></div>
                        <div className="searchResultItembox">
                           {results.map( result => (
                              <div key={result.id}>
                                 <div className="searchResultItem">
                                    <div className="searchResultItemimage">
                                       <Link href="#">
                                          <a title="">
                                             <figure>
                                                <Image src={result.image} width="138px" height="145px" alt="" />
                                             </figure>
                                          </a>
                                       </Link>
                                    </div>
                                    <div className="searchResultTextbox">
                                       <div className="title">
                                          <a href="#" title="">{ result.header }</a>
                                       </div>
                                       <span className="tag">{ result.filterName }</span>
                                       <span className="text">{ result.text }</span>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
</section>
      </section>
   )
}

export default searchWebsite
