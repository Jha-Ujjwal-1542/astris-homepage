import Link from 'next/link'
import Image from 'next/image'
const EquipmentItem = () => {
   return (
      <div className="myEquipmentsGriditem">
         <Link href="/myEqpSummary" passHref>
            <a title="">
               <div className="myEquipmentsGridimg">
                  <div className="brandLogo">
                     <Image src="img/prodcut--brand--logo.svg" alt="" />
                  </div>
                  <figure>
                     <Image src="img/push-wheel-chair.png" alt="" />
                  </figure>
               </div>
               <div className="myEquipmentsGridtext">
                  <div className="title fontBold">Swifty Rehab Pushchair</div>
                  <p>Last Service <span className="colGreen fontBold">Less Than 6 Months</span></p>
               </div>
            </a>
         </Link>
      </div>
   )
}

export default EquipmentItem
