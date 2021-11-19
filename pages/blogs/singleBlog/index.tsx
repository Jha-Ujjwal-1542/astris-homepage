import Image from "next/image"
import Link from 'next/link'
import blogImage from '../../../public/images/blogs/blogImage.png'

import { IoMdArrowDroprightCircle } from 'react-icons/io'
import { FaHome, FaFacebook, FaLinkedin, FaTwitterSquare, FaTwitch } from "react-icons/fa";
import moreblogs from '../../../src/datas/moreblogs.json'


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
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a>
                     <FaHome width="25px" height="25px" />
                     </a>
                  </Link>
                  <IoMdArrowDroprightCircle width="" height="" />
                  <Link href="/pages/blogs">
                     <a className="breadcrumbText">Blogs</a>
                  </Link>
               </div>
            </div>
         </section>
         {/*Blog section */}
         <section className="searchresultSection">
            <div className="container">
               <div className="sectionBox">
                     <div className="sectionTitle">
                        <div className="mainTitle">
                           <span>Astris PME Guide for Choosing Wheelchairs</span>
                           <div className="subTitle">Published: 12 August 2020</div>
                        </div>
                        <div className="sectionSharebox">
                           <span>Share this Article On</span>
                           <ul>
                                 <li><Link href="#" passHref><a title="Facebook" rel="norefferer"><FaFacebook /></a></Link></li>
                                 <li><Link href="#" passHref><a title="Linkedin" rel="norefferer"><FaLinkedin /></a></Link></li>
                                 <li><Link href="#" passHref><a title="Twitter" rel="norefferer"><FaLinkedin /></a></Link></li>
                                 <li><Link href="#" passHref><a title="Mail" rel="norefferer"><FaTwitch /></a></Link></li>
                           </ul>
                        </div>
                     </div>
                     <section className="sectionMainbox">
                        <div className="blogSingleBox">
                           <div className="textHolder">
                                 <Image src={blogImage}  alt="" />
                                 <p>Common considerations will require a fine balance between propulsion efficiency and stability of the wheelchair.</p>
                                 <p>Stability is desirable however increasing stability results in a reduction in propulsion efficiency of the wheelchair. Wheelchair stability is achieved by changing the horizontal position of the wheel axle. Moving the axle rearward, increases the wheelchair base length making the wheelchair base longer, requires the user to reach further back to grip the wheel for propulsion. A longer wheelbase means that increased turning space is required to manoeuvre a wheelchair and restrict use in tight spaces. Reaching further back to grip the wheel results in shorter push strokes and requires more frequent push strokes and increased strain on the upper limbs.</p>
                                 <p>Other factors which impact on the overall performance of the wheelchair is the weight and unique features of the selected wheelchair and seating components. Astris PME has a carefully selected range of wheelchairs to ensure that key features such as STRENGTH, STABILITY and INGENIOUS DESIGN delivers the optimum lifestyle outcomes for the user. Whether this means variable terrain access, portability to reduce manual handling, greater safety for new users of wheelchairs or changing mobility needs over time. The average wheelchair user performs multiple tasks each hour while seated in a wheelchair. This includes self-propulsion in varying environments, manual lifts for pressure relief and to manage transfers to and from surfaces.</p>
                                 <h5>One-piece unibody style frame</h5>
                                 <Image src={blogImage}  alt="" />
                                 <p>Common considerations will require a fine balance between propulsion efficiency and stability of the wheelchair.</p>
                                 <p>Stability is desirable however increasing stability results in a reduction in propulsion efficiency of the wheelchair. Wheelchair stability is achieved by changing the horizontal position of the wheel axle. Moving the axle rearward, increases the wheelchair base length making the wheelchair base longer, requires the user to reach further back to grip the wheel for propulsion. A longer wheelbase means that increased turning space is required to manoeuvre a wheelchair and restrict use in tight spaces. Reaching further back to grip the wheel results in shorter push strokes and requires more frequent push strokes and increased strain on the upper limbs.</p>
                                 <p>Other factors which impact on the overall performance of the wheelchair is the weight and unique features of the selected wheelchair and seating components. Astris PME has a carefully selected range of wheelchairs to ensure that key features such as STRENGTH, STABILITY and INGENIOUS DESIGN delivers the optimum lifestyle outcomes for the user. Whether this means variable terrain access, portability to reduce manual handling, greater safety for new users of wheelchairs or changing mobility needs over time.</p>
                                 <p>The average wheelchair user performs multiple tasks each hour while seated in a wheelchair. This includes self-propulsion in varying environments, manual lifts for pressure relief and to manage transfers to and from surfaces.</p>
                                 <p>The stability of the cross brace when the wheelchair is in use ensures that forces applied through the frame is evenly distributed reducing any torsion to the wheelchair frame, thus contributing to the durability of the frame.</p>
                                 <p>When considering a suitable stable, safe robust frame for use over even and uneven surfaces with or without the addition of power assist options, the carbon fibre Helio C2 provides the desired vibration dampening.</p>
                           </div>
                        </div>
                        <div className="blogSingleMore">
                           <div className="sectionTitle spaceBetween">
                                 <div className="mainTitle">
                                    <h3>More Blogs from Astris</h3>
                                 </div>
                                 <div className="buttonHolder">
                                    <Link href="/blogs" passHref>
                                       <a  className="buttonCaps" title="Browse All">Browse All</a>
                                    </Link>
                                 </div>
                           </div>
                           <div className="blogItembox">
                              {moreblogs.map( moreblog => (
                                 <div key={moreblog.id}>
                                    <Image src={blogImage} width="350px" height="170px" alt="" />
                                    <span>{ moreblog.title }</span>
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
