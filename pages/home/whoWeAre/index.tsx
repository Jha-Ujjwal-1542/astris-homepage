import Image from "next/image";
import styles from "../home.module.css";
import aboutUsImage from "../../img/aboutUsImage.png"

const whoweare = () => {
   return(
    <section>
        <div className={styles.container}>
            <Image src={aboutUsImage} />
            <div  className={styles.sectionTitle}>
                <div  className={styles.subTitle}>WHO WE ARE</div>
                    <div  className={styles.mainTitle}>
                        <h3>The Astris PME Story</h3>
                    </div>
                </div>
                <div  className={styles.description}>
                    <p>Astris PME is a combination of family businesses that have a very long heritage spanning nearly five decades. Our humble roots start in the 1950’s with walking sticks, to the current day with some of the most technologically advanced products in the world.</p>
                    <p>Because our range is mostly prescriptive, we have an accomplished team of people who are skilled at customising and adapting products to suit individual needs and requirements. This attention to detail is a fundamental part of the service we provide because it can make a significant difference to the wellbeing of all people with a disability.</p>
                </div>
                <div className={styles.buttonnHolder}>
                    <a href="./whatWeDo"  className={styles.LearnMoreButton}>Learn More About Us</a>
                </div>
            </div>
    </section>
   )
}

export default whoweare