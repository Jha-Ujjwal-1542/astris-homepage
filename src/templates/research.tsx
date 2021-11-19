import Link from 'next/link'
import Image from 'next/image'
import articles from "../datas/articles.json"

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
      <>
         <section className="container">
            <div className="sectionBox">
               <div className="sectionTitle">
                  <div className="subTitle">NEWS AND RESEARCH PAPERS</div>
                  <div className="mainTitle">
                     <h3>Read The Latest From Astris PME</h3>
                  </div>
               </div>
               <div className="sectionMainbox">
                  {articles.map( article => (
                     <Link href="/blogs/singleBlog.tsx" key={article.id}>
                        <a className="links">
                           <div >
                              <Image src={article.image} width="350px" height="240px" alt ="" />
                              <br/>
                              <span>{ article.title }</span>
                              <br/>
                              <span>{ article.text }</span>
                              <button className="button">
                                 Continue Reading
                              </button>
                           </div>
                        </a>
                     </Link>
                  ))}
                              
               </div>
            </div>
         </section>  
      </>
   )
}

export default research
