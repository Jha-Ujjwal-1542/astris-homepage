import Image from "next/image";
import styles from "../../home/home.module.css";
import Steve  from '../../../public/images/whoWeAre/Steve.png'
import Wes  from '../../../public/images/whoWeAre/Steve.png'
import Michael  from '../../../public/images/whoWeAre/Steve.png'
import Sam  from '../../../public/images/whoWeAre/Steve.png'
import Craig  from '../../../public/images/whoWeAre/Steve.png'
import John  from '../../../public/images/whoWeAre/Steve.png'
import Tim  from '../../../public/images/whoWeAre/Steve.png'
import Gareth  from '../../../public/images/whoWeAre/Steve.png'
import { FaHome, FaCaretRight, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { CCard, CCardBody, CCardImage, CCardText, CCardLink } from '@coreui/react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import teams from '../../../src/datas/teams.json'

export const getStaticProps = async () => {
    const res = "../src/datas/team.json"
    return{
       props: { teams : [] }
    }
}

const whoweare = () => {
   return(
    <section>
        <section className={styles.breadcrumbSection}>
            <div className={styles.container}>
               <div className={styles.breadcrumbBox}>
                  <a href="/" className={styles.breadcrumbHome}>
                     <FaHome />
                  </a>
                  <span className={styles.breadcrumbIcon}>
                     <FaCaretRight />
                  </span>
                  <span className={styles.breadcrumbText}>
                     Who We Are
                  </span>
               </div>
            </div>
         </section>
        <section className={styles.head}>
            <div className={styles.container}>
                <div  className={styles.sectionTitle}>
                    <div  className={styles.subTitle}>WHO WE ARE</div>
                    <div  className={styles.mainTitle}>
                        <span>Team Astris PME</span>
                        <div className={styles.aboutAstris}>
                            <p>Astris PME has an ongoing commitment to providing the highest level of service to therapists, equipment users and their families. In fact, we are even more determined to make a difference to the lives of people with a disability, because we have seen the positive effect that quality mobility equipment can make to individuals, their family and carers.</p>
                            <br />
                            <p>We have a dynamic and accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. We take great pride in working one-on-one with our clients to ensure optimal outcomes are achieved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="team">
            <CCard style={{ width: '250px', height:'320px' }}>
                <CCardBody>
                    {teams.map( team => (
                        <div key={team.id}>
                            <CCardText>
                                <span>{ team.name}</span>
                                <span>{ team.position }</span>
                            </CCardText>
                            <CCardLink href="#">
                                <FaPhone />
                            </CCardLink>
                            <CCardLink href="#">
                                <GrMail />
                            </CCardLink>
                        </div>
                    ))}
                </CCardBody>
            </CCard>
            
            {/* <Image src={Steve} width="" height="" />
            <Image src={Wes} width="" height="" />
            <Image src={Michael} width="" height="" />
            <Image src={Sam} width="" height="" />
            <Image src={Craig} width="" height="" />
            <Image src={John} width="" height="" />
            <Image src={Tim} width="" height="" />
            <Image src={Gareth} width="" height="" /> */}
        </section>
    </section>
   )
}

export default whoweare