import Link from 'next/link';

const ProductTrial = () => {
   return (
      <section className="popupSection" id="product-trail-popup">
         <div className="popupOverlay popupClose"></div>
         <div className="popupContainer">
            <main className="popupMain">
               <div className="popupClose popupClose"></div>
               <div className="popupBox">
                  <div className="sectionTitle">
                     <div className="mainTitle">
                        <h3>Welcome To Product Trial!</h3>
                     </div>
                     <div className="text">
                        <p>Is this trial request for you or a client?</p>
                     </div>
                  </div>
                  <div className="buttonHolder column">
                     <Link href="/productTrailPersonal">
                        <a className="button caps w-100" title="This is for me">This is for me</a>
                     </Link>
                     <Link href="/productTrailClient">
                        <a className="button caps w-100 buttonYellow" title="This is for client">This is for client</a>
                     </Link>
                  </div>
               </div>
            </main>
         </div>
      </section>
   )
}
export default ProductTrial
