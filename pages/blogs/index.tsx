import Image from 'next/image'
import styles from '../../styles/blogs.module.css'
import Link from 'next/link'
import blogImage from '../../public/images/blogs/blogImage.png'
import { FaHome } from "react-icons/fa"
import { BiSearch } from "react-icons/bi"
import { IoMdArrowDroprightCircle } from 'react-icons/io'
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
                     <IoMdArrowDroprightCircle width="" height="" />
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
                              <BiSearch />
                              <input type="text" placeholder="Search Blogs" />
                           </div>
                        </div>
                        <div className="sectionMainbox">
                           <div className="sectionsidebarFilter">
                              <div className="sectionsidebarFiltergroup">
                                    <div className="sectionsidebarFilter">
                                       <ul>
                                          <li><Link href="#" passHref><a title="Show All Blog">Show All Blog</a></Link></li>
                                          <li><Link href="#" passHref><a className="active" title="February 2021">February 2021</a></Link></li>
                                          <li><Link href="#" passHref><a title="January 2021">January 2021</a></Link></li>
                                          <li><Link href="#" passHref><a title="December 2020">December 2020</a></Link></li>
                                          <li><Link href="#" passHref><a title="November 2020">November 2020</a></Link></li>
                                          <li><Link href="#" passHref><a title="October 2020">October 2020</a></Link></li>
                                          <li><Link href="#" passHref><a title="Septmeber 2020">Septmeber 2020</a></Link></li>
                                       </ul>
                                    </div>
                              </div>
                           </div>
                           <main className="sectionMain">
                              <div className="innerblogItembox">
                                    <Link href="/blogs/singleBlog">
                                       <a>
                                          {blogs.map( blog => (
                                             <div key={blog.id}>
                                                <Image src={blogImage} width="350px" height="240px" alt ="" />
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