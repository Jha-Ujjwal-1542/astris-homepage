import Timo from "../../public/images/brands/brand1.png"
import Thomas from "../../public/images/brands/brand2.png"
import Columbia from "../../public/images/brands/brand3.png"
import Spex from "../../public/images/brands/brand4.png"
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from 'react-icons/fa';

const brands = () => {

   return (
      <section className="brandsSection">
         <div className="container">
            <div className="sectionBox">
               <div className="sectionTitle center">
                  <div className="subTitle caps">BROWSE VIA OUR TRUSTED BRANDS</div>
                  <div className="mainTitle">
                     <h3>A Wide Array Of Highest Reputed Brands</h3>
                  </div>
               </div>
               <div className="brandsSearchbox">
                  <FaSearch />
                  <input type="text" placeholder="Type and Find Your Preferred Brand" />
               </div>
               <div className="brandsSliderbox">
                  <div className="brandsSlider" id="brandsSlider">
                     <div className="brandsItem">
                        <Link href="#">
                           <a title="">
                              <figure>
                                 <Image className="brandsImage" src={Timo} alt="" />
                              </figure>
                              <figure>
                                 <Image className="brandsImage" src={Thomas} alt="" />
                              </figure>
                              <figure>
                                 <Image className="brandsImage" src={Columbia} alt="" />
                              </figure>
                              <figure>
                                 <Image className="brandsImage" src={Spex} alt="" />
                              </figure>
                           </a>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
        
      
}

export default brands
