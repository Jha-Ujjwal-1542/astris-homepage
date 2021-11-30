import Image from "next/image"
import styles from "../home.module.css";
import { GrDiamond } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { GiStrong } from "react-icons/gi";
import { TiSupport } from "react-icons/ti";

const Features = () => {
   return(
      <section className="heroSection">
         <div className="container">
            <div className="heroBox">
               <div className="heroItembox">
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <GrDiamond width={15} height={15} />
                     </div>
                     <div className="heroItemText">Equipment Trials</div>   
                  </div>
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <RiTeamLine />
                     </div>
                     <div className="heroItemText">Experienced Team</div>   
                  </div>
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <GiStrong />
                     </div>
                     <div className="heroItemText">Strong Relationships</div>   
                  </div>
                  <div className="heroItem">
                     <div className="heroItemicon">
                        <TiSupport />
                     </div>
                     <div className="heroItemText">Configured Care</div>   
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Features