import PushWheelChair from '../../../../public/images/products/pushwheelchair.png'
import Image from 'next/image'
import Link from 'next/link';
const ProdArchive = () => {
   return (
      <div className="product-archiveItem">
         <Link href="/product-single">
            <a title="">
               <div className="product-archiveItemimg">
                  <figure>
                     <Image src={PushWheelChair} width={194} height={204} alt="Push Wheel Chair" />
                  </figure>
               </div>
               <div className="product-archiveItemtext">
                  <h6 className="price">$399.00</h6>
                  <span className="cate">Move Folding Wheechair</span>
               </div>
            </a>
         </Link>  
      </div>
   )
}

export default ProdArchive
