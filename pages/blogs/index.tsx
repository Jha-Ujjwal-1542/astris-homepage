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
            <section className={styles.breadcrumbSection}>
               <div className={styles.container}>
                  <div className={styles.breadcrumbBox}>
                     <Link href="/">
                        <FaHome width="25px" height="25px" />
                     </Link>
                     <IoMdArrowDroprightCircle width="" height="" />
                     <span className={styles.breadcrumbText}>Blogs</span>
                  </div>
               </div>
            </section> 
            
            <section className={styles.container}>
                  <div className={styles.sectionBox}>
                        <div className={styles.sectionTitle}>
                           <div className={styles.mainTitle}>
                              <h3>Latest Blogs</h3>
                           </div>
                           <div className={styles.sectionSearchbox}>
                              <BiSearch />
                              <input type="text" placeholder="Search Blogs" />
                           </div>
                        </div>
                        <div className={styles.sectionMainbox}>
                           <div className={styles.sectionsidebarFilter}>
                              <div className={styles.sectionsidebarFiltergroup}>
                                    <div className={styles.sectionsidebarFilter}>
                                       <ul>
                                          <li><a href="" title="Show All Blog">Show All Blog</a></li>
                                          <li><a href="" className={styles.active} title="February 2021">February 2021</a></li>
                                          <li><a href="" title="January 2021">January 2021</a></li>
                                          <li><a href="" title="December 2020">December 2020</a></li>
                                          <li><a href="" title="November 2020">November 2020</a></li>
                                          <li><a href="" title="October 2020">October 2020</a></li>
                                          <li><a href="" title="Septmeber 2020">Septmeber 2020</a></li>
                                       </ul>
                                       <div className={styles.buttonHolder}>
                                          <a href="" className={styles.button} title="Load More Dates">Load More Dates</a>
                                       </div>
                                    </div>
                              </div>
                           </div>
                           <main className={styles.sectionMain}>
                              <div className={styles.innerblogItembox}>
                                    <Link href="/singleBlog.tsx">
                                       <a>
                                          {blogs.map( blog => (
                                             <div key={blog.id}>
                                                <Image src={blogImage} width="350px" height="240px" />
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