import Image from "next/image";
import Link from "next/link";
import { IoBagHandleSharp } from "react-icons/io5";
import bannerimage from "../../public/images/bannerimage.png"

export const handleClick = () => {
   console.log("hello")
}

const Banner = () => {
   return(
      <section className="bannerSection">
         <div className="bannerSectionImageBG">
            <Image 
                  src={bannerimage} 
                  width="1366px" 
                  height="520px" 
                  alt=""
            />
         </div>
         <div className="container">
         <div className="bannerBox">
            <div className="bannerTextbox">
               <div className="title">
                  <h1>
                     <span>Welcome to Astris PME</span>
                     <span className="colYellow">Improving lives</span>
                  </h1>
               </div>
               <div className="buttonHolder center">
                  <button className="button" onClick={handleClick} title="REQUEST PRODUCT TRIAL">
                     REQUEST PRODUCT TRIAL
                  </button>
                  <Link href="#">
                     <a className="button buttonYellow">
                        <IoBagHandleSharp className="buttonIcon" />
                        <span className="dataText">START BROWSING PRODUCTS</span>
                     </a>   
                  </Link>
               </div>
            </div>
         </div> 
         </div>
           
      </section>
   )
}

export default Banner