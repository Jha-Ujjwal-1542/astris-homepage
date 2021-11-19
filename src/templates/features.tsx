import Image from "next/image"
import styles from "../home.module.css";
import { GrDiamond } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { GiStrong } from "react-icons/gi";
import { TiSupport } from "react-icons/ti";

const features = () => {
   return(
      <section className="heroSection">
         <div className="container">
            <div className="heroBox">
               <div className="heroItembox">
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <GrDiamond />
                     </div>
                     <div className="heroItemText">
                        <span>Equipment Trials</span>
                     </div>   
                  </div>
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <RiTeamLine />
                     </div>
                     <div className="heroItemText">
                        <span>Experienced Team</span>
                     </div>   
                  </div>
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <GiStrong />
                     </div>
                     <div className="heroItemText">
                        <span>Strong Relationships</span>
                     </div>   
                  </div>
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <TiSupport />
                     </div>
                     <div className="heroItemText">
                        <span>Configured Care</span>
                     </div>   
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default features