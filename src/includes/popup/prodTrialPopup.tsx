const prodTrialPopup = () => {
   return(
      <section className="popupSection">
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
                  <div className="buttonHolder">
                     <a href="/bookings/product trial request/productTrailPersonal" className="button" title="This is for me">This is for me</a>
                     <a href="/bookings/product trial request/productTrailClient" className="button buttonYellow" title="This is for client">This is for client</a>
                  </div>
               </div>
            </main>
         </div>
      </section>
   )
}

export default prodTrialPopup;