import { VscMail } from "react-icons/vsc";
import { FaLock } from "react-icons/fa";

const portalLogin = () => {
   return(
      <section className="popupSection">
         <div className="popupOverlay popupClose"></div>
         <div className="popupContainer">
            <main className="popupMain">
               <div className="popupClose"></div>
               <div className="popupBox">
                  <div className="sectionTitle">
                     <div className="mainTitle">
                           <h3>Client Portal Login</h3>
                     </div>
                     <div className="text">
                        Please login to continue. Click here if you are not registered.
                     </div>
                  </div>
                  <form action="" className="loginForm">
                     <div className="formGroup">
                           <VscMail className="formIcon"/>
                           <input type="text" className="formControl" placeholder="Email" />
                     </div>
                    <div className="formGroup">
                        <FaLock className="formIcon"/>
                        <input type="password" className="formControl" placeholder="Password" />
                    </div>
                    <div className="loginInline">
                        <div className="customGroup">
                            <input type="checkbox" name="keep-me-loggedin" />
                            <label>Keep Me Logged In</label>
                        </div>
                        <button className="fontBold colText">Forgot Your Password?</button>
                    </div>
                    <span className="loginNote">For security reasons, do not tick <strong>Keep me locked in</strong> if using a shared or public device</span>
                    <div className="buttonHolder">
                        <input type="submit" value="LOGIN TO PORTAL" className="button buttonYellow" />
                    </div>
                </form>
            </div>
         </main>
      </div>
   </section>
   )
}
export default portalLogin