import Image from "next/image";
import Link from "next/link";
import aboutUs from '../../public/images/aboutUsImage.png'

const Story = () => {
   return(
      <section className="aboutusSection">
         <div className="container">
            <div className="aboutusBox">
               <div className="aboutusImage">
                  <figure>
                     <Image src={aboutUs} width="530px" height="500px" alt="" />
                  </figure>
               </div>
               <div className="aboutusTextbox">
                  <div className="sectionTitle">
                     <div className="subTitle">WHO WE ARE</div>
                     <div className="mainTitle">
                        <h3>The Astris PME Story</h3>
                     </div>
                  </div>
                  <div className="description">
                     <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                     <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                  </div>
                  <div className="buttonHolder">
                     <Link href="/aboutUs/whatWeDo" passHref>
                        <a className="button buttonBordered caps large" title="Learn More About Us">
                           Learn More About Us</a>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
         
      </section>
   )
}

export default Story;