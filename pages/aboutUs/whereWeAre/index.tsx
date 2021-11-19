
import Image from "next/image";
import { FaHome, FaCaretRight } from "react-icons/fa";
import office1 from "../../../public/images/offices/head.png"
import office2 from "../../../public/images/offices/sydney.png"
import office3 from "../../../public/images/offices/young.png"
import office4 from "../../../public/images/offices/melbourne.png"
import office5 from "../../../public/images/offices/brisbane.png"
import office6 from "../../../public/images/offices/centralCoast.png"
import office7 from "../../../public/images/offices/canberra.png"
import { CCard, CCardBody, CCardImage, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import offices from '../../../src/datas/offices.json'
import Link from 'next/link';

export const getStaticProps = async () => {
   const res = "../src/datas/team.json"
   return{
      props: { offices : [] }
   }
}

const whereWeAre = () => {
   return (
      <section>
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a className="breadcrumbHome">
                        <FaHome />
                     </a>
                  </Link>
                  <span className="breadcrumbIcon">
                     <FaCaretRight />
                  </span>
                  <span className="breadcrumbText">
                     Where We Are
                  </span>
               </div>
            </div>
         </section>
         <section className="whoweareSection">
            <div className="container">
               <div className="aboutusTextbox">
                  <div className="sectionTitle">
                     <div className="subTitle">
                        <span>WHERE WE ARE</span>
                     </div>
                     <div className="mainTitle">
                        <span>Visit Astris PME</span>
                     </div>
                  </div>
                  <div className="description">
                     <p>Please contact us if you wish to visit one of our showrooms. To make the most of our personalised service, visits to our showrooms are by appointment only.</p>
                  </div>
               </div>
               <div className="officesDescription">
               {offices.map( office => (
                  <div key={office.id}>
                     <Image src={office1} alt="" />
                     <br/>
                     <span>{ office.name }</span>
                     <br/>
                     <span>{ office.location }</span>
                  </div>
               ))}
               </div>
            </div>
         </section>
      </section>
   )
}

export default whereWeAre
