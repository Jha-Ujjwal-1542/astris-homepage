import Image from "next/image"
import styles from '../../styles/blogs.module.css'
// import Testimonials from '../../pages/home/testimonials'
import blogImage from '../../public/images/blogs/blogImage.png'
import Link from 'next/link'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { FaHome, FaFacebook, FaLinkedin, FaTwitterSquare, FaTwitch } from "react-icons/fa";
import moreblogs from '../../src/datas/moreblogs.json'


export const getStaticProps = async () => {
   const res = "../src/datas/moreblogs.json"
   return{
      props: { moreblogs : [] }
   }

}

const SingleBlog = () => {
   return (
      <section>
         {/* Breadcrumb section */}
         <section className={styles.breadcrumbSection}>
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <Link href="/">
                     <FaHome width="25px" height="25px" />
                  </Link>
                  <IoMdArrowDroprightCircle width="" height="" />
                  <Link href="/pages/blogs">
                     <a className={styles.breadcrumbText}>Blogs</a>
                  </Link>
               </div>
            </div>
         </section>
         {/*Blog section */}
         <section className={styles.searchresultSection}>
            <div className={styles.container}>
               <div className={styles.sectionBox}>
                     <div className={styles.sectionTitle}>
                        <div className={styles.mainTitle}>
                           <span>Astris PME Guide for Choosing Wheelchairs</span>
                           <div className={styles.subTitle}>Published: 12 August 2020</div>
                        </div>
                        <div className={styles.sectionSharebox}>
                           <span>Share this Article On</span>
                           <ul>
                                 <li><a href="" title="Facebook" rel="norefferer"><FaFacebook /></a></li>
                                 <li><a href="" title="Linkedin" rel="norefferer"><FaLinkedin /></a></li>
                                 <li><a href="" title="Twitter" rel="norefferer"><FaTwitterSquare /></a></li>
                                 <li><a href="" title="Mail Us" rel="norefferer"><FaTwitch /></a></li>
                           </ul>
                        </div>
                     </div>
                     <section className="section--mainbox">
                        <div className="blog--single--box">
                           <div className="text--holder">
                                 <Image src={blogImage} />
                                 <p>Common considerations will require a fine balance between propulsion efficiency and stability of the wheelchair.</p>
                                 <p>Stability is desirable however increasing stability results in a reduction in propulsion efficiency of the wheelchair. Wheelchair stability is achieved by changing the horizontal position of the wheel axle. Moving the axle rearward, increases the wheelchair base length making the wheelchair base longer, requires the user to reach further back to grip the wheel for propulsion. A longer wheelbase means that increased turning space is required to manoeuvre a wheelchair and restrict use in tight spaces. Reaching further back to grip the wheel results in shorter push strokes and requires more frequent push strokes and increased strain on the upper limbs.</p>
                                 <p>Other factors which impact on the overall performance of the wheelchair is the weight and unique features of the selected wheelchair and seating components. Astris PME has a carefully selected range of wheelchairs to ensure that key features such as STRENGTH, STABILITY and INGENIOUS DESIGN delivers the optimum lifestyle outcomes for the user. Whether this means variable terrain access, portability to reduce manual handling, greater safety for new users of wheelchairs or changing mobility needs over time. The average wheelchair user performs multiple tasks each hour while seated in a wheelchair. This includes self-propulsion in varying environments, manual lifts for pressure relief and to manage transfers to and from surfaces.</p>
                                 <h5>One-piece unibody style frame</h5>
                                 <Image src={blogImage} />
                                 <p>Common considerations will require a fine balance between propulsion efficiency and stability of the wheelchair.</p>
                                 <p>Stability is desirable however increasing stability results in a reduction in propulsion efficiency of the wheelchair. Wheelchair stability is achieved by changing the horizontal position of the wheel axle. Moving the axle rearward, increases the wheelchair base length making the wheelchair base longer, requires the user to reach further back to grip the wheel for propulsion. A longer wheelbase means that increased turning space is required to manoeuvre a wheelchair and restrict use in tight spaces. Reaching further back to grip the wheel results in shorter push strokes and requires more frequent push strokes and increased strain on the upper limbs.</p>
                                 <p>Other factors which impact on the overall performance of the wheelchair is the weight and unique features of the selected wheelchair and seating components. Astris PME has a carefully selected range of wheelchairs to ensure that key features such as STRENGTH, STABILITY and INGENIOUS DESIGN delivers the optimum lifestyle outcomes for the user. Whether this means variable terrain access, portability to reduce manual handling, greater safety for new users of wheelchairs or changing mobility needs over time.</p>
                                 <p>The average wheelchair user performs multiple tasks each hour while seated in a wheelchair. This includes self-propulsion in varying environments, manual lifts for pressure relief and to manage transfers to and from surfaces.</p>
                                 <p>The stability of the cross brace when the wheelchair is in use ensures that forces applied through the frame is evenly distributed reducing any torsion to the wheelchair frame, thus contributing to the durability of the frame.</p>
                                 <p>When considering a suitable stable, safe robust frame for use over even and uneven surfaces with or without the addition of power assist options, the carbon fibre Helio C2 provides the desired vibration dampening.</p>
                           </div>
                        </div>
                        <div className="blog--single--more">
                           <div className="section--title space--between">
                                 <div className="main--title">
                                    <h3>More Blogs from Astris</h3>
                                 </div>
                                 <div className="btn--holder">
                                    <a href="blogs.php" className="btn caps" title="Browse All">Browse All</a>
                                 </div>
                           </div>
                           <div className="blog--itembox">
                              {moreblogs.map( moreblog => (
                                 <div key={moreblog.id}>
                                    <Image src={blogImage} width="350px" height="170px" />
                                    <a>
                                       <span>{ moreblog.title }</span>
                                    </a>
                                    <span>{ moreblog.text }</span>
                                    <button>
                                       Continue Reading
                                    </button>
                                 </div>
                              ))}  
                           </div>
                        </div>
                     </section>
               </div>
            </div>
         </section>
      </section>
   )
}

export default SingleBlog
