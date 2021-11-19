import Image from 'next/image'
import Link from 'next/link'
import blogImage from '../../public/images/blogs/blogImage.png'
import { FaHome, FaSearch, FaCaretRight } from "react-icons/fa"
import blogs from "../../src/datas/blogs.json"

export const getStaticProps = async () => {
   const res = "../src/datas/blogs.json"
   // const data = await res.json()
   console.log(res)
   return{
      props: { blogs : [] }
   }

}

const Blogs = () => {
   return (
      <>
         <section>
            <section className="breadcrumbSection">
               <div className="container">
                  <div className="breadcrumbBox">
                     <Link href="/">
                        <a>
                        <FaHome width="25px" height="25px" />
                        </a>
                     </Link>
                     <FaCaretRight width="" height="" />
                     <span className="breadcrumbText">Blogs</span>
                  </div>
               </div>
            </section> 
            
            <section className="container">
                  <div className="sectionBox">
                        <div className="sectionTitle">
                           <div className="mainTitle">
                              <h3>Latest Blogs</h3>
                           </div>
                           <div className="sectionSearchbox">
                              <FaSearch />
                              <input type="text" placeholder="Search Blogs" />
                           </div>
                        </div>
                        <div className="sectionMainbox">
                           <div className="sectionsidebarFilter">
                              <div className="sectionsidebarFiltergroup">
                                    <div className="sectionsidebarFilter">
                                       <ul>
                                          <li>
                                             <Link href="">
                                                <a title="Show All Blog">Show All Blog</a>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="">
                                                <a className="active" title="February 2021">February 2021</a>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="">
                                                <a title="January 2021">January 2021</a>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="">
                                                <a title="December 2020">December 2020</a>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="">
                                                <a title="November 2020">November 2020</a>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="">
                                                <a title="October 2020">October 2020</a>
                                             </Link>
                                          </li>
                                          <li>
                                             <Link href="">
                                                <a title="Septmeber 2020">Septmeber 2020</a>
                                             </Link>
                                          </li>
                                       </ul>
                                       <div className="buttonHolder">
                                          <Link href="">
                                             <a  className="button" title="Load More Dates">Load More Dates</a>
                                          </Link>
                                       </div>
                                    </div>
                              </div>
                           </div>
                           <main className="sectionMain">
                              <div className="innerblogItembox">
                                    <Link href="/singleBlog.tsx">
                                       <a>
                                          {blogs.map( blog => (
                                             <div key={blog.id}>
                                                <Image src={blogImage} width="350px" height="240px" alt="" />
                                                <span>{ blog.title }</span>
                                                <span>{ blog.text }</span>
                                                <button>
                                                   Continue Reading
                                                </button>
                                             </div>
                                          ))}
                                          
                                       </a>
                                    </Link>
                                    
                              </div>
                           </main>
                        </div>
                  </div>
               </section>
         </section>
         
      </>
   )
}

export default Blogs