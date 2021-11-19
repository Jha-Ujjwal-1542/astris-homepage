import { FaHome, FaCaretRight, FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css'
import teams from '../../../src/datas/teams.json'
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
    const res = "../src/datas/teams.json"
    return{
       props: { teams : [] }
    }
}

const whoweare = () => {
//    console.log(teams.image)
    return(
    <section>
        <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/" passHref>
                    <a className="breadcrumbHome">
                        <FaHome />
                    </a>
                  </Link>
                  <span className="breadcrumbIcon">
                     <FaCaretRight />
                  </span>
                  <span className="breadcrumbText">
                     Who We Are
                  </span>
               </div>
            </div>
         </section>
        <section className="head">
            <div className="container">
                <div  className="sectionTitle">
                    <div  className="subTitle">WHO WE ARE</div>
                    <div  className="mainTitle">
                        <span>Team Astris PME</span>
                        <div className="aboutAstris">
                            <p>Astris PME has an ongoing commitment to providing the highest level of service to therapists, equipment users and their families. In fact, we are even more determined to make a difference to the lives of people with a disability, because we have seen the positive effect that quality mobility equipment can make to individuals, their family and carers.</p>
                            <br />
                            <p>We have a dynamic and accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. We take great pride in working one-on-one with our clients to ensure optimal outcomes are achieved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="team">
            <div>
                <div>
                    {teams.map( team => (
                        <div key={team.id}>
                            <Image src={team.image} alt="" width="250px" height="250px" />
                            <span>{ team.name}</span>
                            <span>{ team.position }</span>
                            <Link href="#">
                                <a><FaPhone /></a>
                            </Link>
                            <Link href="#">
                                <a><GrMail /></a>
                            </Link>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </section>
   )
}

export default whoweare