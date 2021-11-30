const VerifyMobile = () => {
   return (
      <section className="popupSection" id="verify-mobile-number">
         <div className="popupOverlay popupClose"></div>
         <div className="popupContainer">
            <main className="popupMain">
                  <div className="popupClose popupClose"></div>
                  <div className="popupBox">
                     <div className="verifyNumberForm">
                        <form action="">
                              <label htmlFor="enter-code">
                                 Enter the 6 Digit Code sent to <strong>01 1234 23145 19</strong>
                              </label>
                              <div className="inputHolder">
                                 <input type="text" className="inputControl" name="enter-code" id="enter-code" placeholder="Enter the 6 Digit Code" />
                              </div>
                              <div className="buttonHolder">
                                 <input type="submit" value="Verify Mobile Number" className="button buttonYellow w-100" />
                              </div>
                        </form>
                     </div>
                  </div>
            </main>
         </div>
      </section>
   )
}

export default VerifyMobile
