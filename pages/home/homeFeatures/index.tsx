import Image from "next/image"
import styles from "../home.module.css";
import { GrDiamond } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import { GiStrong } from "react-icons/gi";
import { TiSupport } from "react-icons/ti";

const features = () => {
   return(
      <section>
         <div className={styles.features}>
         <div className={styles.featuregroup}>
            <GrDiamond />  Equipment Trials
            <RiTeamLine/>  Experienced Team
            <GiStrong />  Strong Relationships
            <TiSupport/>  Configured Care
         </div>
      </div>
      </section>
   )
}

export default features