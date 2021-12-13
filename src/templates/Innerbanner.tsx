import BannerBG from '../../public/images/bannerBG.png'
import Image from 'next/image'

const Innerbanner = () => {
   return (
      <section className="bannerInnerSection">
         <Image src={BannerBG} width={1349} height={70} alt="InnerBanner" />
         <h1 className="dNone">Products-Astris</h1>
   </section>
   )
}

export default Innerbanner
