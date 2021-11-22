import Link from 'next/link'
import Image from 'next/image'
import articles from "../datas/articles.json"
import TestimonialBG from '../../public/images/testimonial/testimonialBg.png'

export const getStaticProps = async () => {
   const res = "../src/datas/articles.json"
   // const data = await res.json()
   console.log(res)
   return{
      props: { articles : [] }
   }
}

const research = () => {
   return (
      <section className="blogSection">
         <div className="testimonialBgoverlay">
            <Image src={TestimonialBG} alt="" />
         </div>
         <div className="container">
            <div className="sectionBox">
               <div className="sectionTitle center">
                  <div className="subTitle caps colYellow">NEWS AND RESEARCH PAPERS</div>
                  <div className="mainTitle">
                     <h3 className="colWhite">Read The Latest From Astris PME</h3>
                  </div>
               </div>
               <div className="blogItembox">
                  {articles.map( article => (
                     <div className="blogItemholder" key={article.id}>
                        <div className="blogItem">
                           <div className="blogItemimage">
                              <Link href="/blogs/singleBlog" passHref>
                                 <a title="">
                                    <figure>
                                       <Image src={article.image} width="350px" height="240px" alt ="" />
                                    </figure>
                                 </a>
                              </Link>
                           </div>
                           <div className="blogTextbox">
                              <div className="title">
                                 <Link href="/blogs/singleBlog">
                                    <a className="links"><span>{ article.title }</span></a>
                                 </Link>
                              </div>
                              <div className="text">
                                 <p>{ article.text }</p>
                              </div>
                              <div className="buttonHolder">
                                 <Link href="/blogs/singleBlog">
                                    <a className="button caps w-100" title="Continue Reading">Continue Reading</a>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
                              
               </div>
            </div>
         </div>
      </section>
   )
}

export default research
