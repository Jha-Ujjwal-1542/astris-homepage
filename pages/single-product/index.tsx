import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import Timo from '../../public/images/brands/brand1.png'
import { FaHome, FaCaretRight, FaFileAlt, FaTools, FaFilePdf, FaWheelchair } from 'react-icons/fa';
import PushWheelChair from '../../public/images/products/pushwheelchair.png'

export const thumbnailSlider = () => {
   for (var j = 1; j < 7; j++) {
      <div className="productsSingleThumbnail">
         <figure>
            <Image src={PushWheelChair} width={78} height={82} alt="" />
         </figure>
      </div>
   }
}
export const imageSlider = () => {
   for (var i = 1; i < 7; i++) { 
      <div className="productsSingleImage">
         <figure>
            <Image src={PushWheelChair} width={78} height={82} alt="" />
            </figure>
      </div>
   } 
}

const SingleProduct = () => {
   
   return (
      <div>
         <Head>
            <title>Products - Astris PME</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head> 
         <section className="breadcrumbSection">
            <div className="container">
               <div className="breadcrumbBox">
                  <Link href="/">
                     <a className="breadcrumbHome"><FaHome /></a>
                  </Link>
                  <span className="breadcrumbIcon"><FaCaretRight /></span>
                  <Link href="/browse-by-category">
                     <a title="Products">Products</a>
                  </Link>
                  <span className="breadcrumbIcon"><FaCaretRight /></span>
                  <Link href="/product-archive">
                     <a title="Special Needs Pushchairs">Special Needs Pushchairs</a>
                  </Link>
                  <span className="breadcrumbIcon"><FaCaretRight /></span>
                  <span className="breadcrumbText">Move Folding Wheechair</span>
               </div>
            </div>
         </section>
         <section className="productsSingleSection">
            <div className="container">
               <div className="productsSingleBox">
                  <div className="productsSingleImagebox">
                     <div className="brandLogo"><Image src={Timo} width={127} height={43} alt="" /></div>
                     <div className="sliderbox">
                        <div className="mainImageSlider owl-carousel owl-theme" id="main-imgSlider">
                           {imageSlider}
                        </div>
                        <div className="thumbnailImageSlider owl-carousel owl-theme" id="thumbnail-imgSlider">
                           {thumbnailSlider} 
                        </div>
                     </div>
                  </div>
                  <div className="productsSingleDetailbox">
                     <div className="title">
                        <h3>Move Folding Wheechair</h3>
                     </div>
                     <span className="productCode"><strong>Product Code: </strong>GRC-1013</span>
                     <div className="text">
                        <h6>Product Summary</h6>
                        <br/>
                        <p>The MOVE wheelchair meets all Motion Composites’ lightness and quality objectives while remaining the most accessible folding wheelchair in our product line. The latest technologies are applied to offer a standard wheelchair that will enhance your day-to-day life with superior-quality parts for unrivalled toughness and performance.</p>
                     </div>
                     <form action="">
                        <div className="productsSingleForm">
                           <div className="inputGroup">
                              <label htmlFor="">Color</label>
                              <div className="inputGroupholder">
                                 <div className="customGroup">
                                       <input type="radio" name="color" id="color-red"  />
                                       <label htmlFor="color-red">Red</label>
                                 </div>
                                 <div className="customGroup">
                                       <input type="radio" name="color" id="color-green" />
                                       <label htmlFor="color-green">Green</label>
                                 </div>
                                 <div className="customGroup">
                                       <input type="radio" name="color" id="color-blue" />
                                       <label htmlFor="color-blue">Blue</label>
                                 </div>
                              </div>
                           </div>
                           <div className="inputGroup">
                              <label htmlFor="">Weight</label>
                              <div className="inputGroupholder">
                                 <div className="customGroup">
                                       <input type="radio" name="weight" id="weight-50" />
                                       <label htmlFor="weight-50">50 Kg</label>
                                 </div>
                                 <div className="customGroup">
                                       <input type="radio" name="weight" id="weight-15" />
                                       <label htmlFor="weight-15">15 Kg</label>
                                 </div>
                              </div>
                           </div>
                           <div className="inputGroup">
                              <label htmlFor="">Quantity</label>
                              <div className="inputNumbergroup">
                                 <div>
                                       <input type="number" className="inputControl" value="2" />
                                       <div className="buttonHolder w-100">
                                          <Link href="/submit-quote">
                                             <a className="button caps w-100" title="Submit for Quote">Submit for Quote</a>
                                          </Link>
                                       </div>
                                 </div>
                                 <div className="buttonHolder">
                                       <div className="button caps buttonYellow w-100" title="Submit for Product Trail">Submit for Product Trail</div>
                                       {/*onclick="evtPopup(event,'product-trail-popup')" */}
                                 </div>
                                 <div className="buttonHolder">
                                       <Link href="/hire-request">
                                          <a className="button caps buttonGrey w-100" title="Submit for Hire">Submit for Hire</a>
                                       </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="productsSingleTabbox" id="productTabs">
                  <div className="productsSingleTablist">
                     <ul>
                        <li>
                           <button className="tablinks active">
                           {/* onclick="detailTabs(event, 'Overview')"  */}
                              <span className="dataIcon">
                                 <FaFileAlt />
                              </span>
                              <span className="dataText">Overview</span>
                           </button>
                        </li>
                        <li>
                           <button className="tablinks">
                           {/* onclick="detailTabs(event, 'Specification')" */}
                              <span className="dataIcon">
                                 <FaTools />
                              </span>
                              <span className="dataText">Specification</span>
                           </button>
                        </li>
                        <li>
                           <button className="tablinks">
                           {/* onclick="detailTabs(event, 'Features')" */}
                              <span className="dataIcon">
                                 <FaWheelchair />
                              </span>
                              <span className="dataText">Features</span>
                           </button>
                        </li>
                        <li>
                           <button className="tablinks">
                           {/* onclick="detailTabs(event, 'Resources')" */}
                              <span className="dataIcon">
                                 <FaFilePdf />
                              </span>
                              <span className="dataText">Resources</span>
                           </button>
                        </li>
                     </ul>
                  </div>
                  <div className="productsSingleContentbox">
                     <div className="productsSingleTabcontent tabcontent" id="Overview">
                        <div className="text">
                           <h6>Product Summary</h6>
                           <br/>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida facilisis justo. Mauris nec elit ut tortor finibus pulvinar. Curabitur euismod convallis porta. Maecenas in velit in augue bibendum blandit. Curabitur mattis purus eget massa consectetur ultricies. Pellentesque aliquet nisl ultricies, interdum nisi at, aliquet lorem. Proin eu sagittis dolor. Suspendisse dignissim, ligula a maximus sagittis, ex augue finibus orci, vel cursus tellus est id dui. Nunc efficitur augue sit amet ornare tincidunt. Phasellus placerat quis nisi eget accumsan. Vivamus molestie sagittis turpis eget tincidunt. Fusce non dictum justo. In erat lacus, imperdiet at convallis quis, molestie mollis nisl.</p> 
                           <br/><br/>
                           <p>Suspendisse at vehicula lectus. Curabitur libero urna, ultrices quis nunc quis, mattis condimentum dolor. Sed eu arcu at leo elementum sodales. Nunc at lorem sed libero maximus convallis. Morbi tempor bibendum ultricies. Nunc vitae ornare tellus. Nam non tempus purus, eget laoreet libero. Integer egestas dapibus diam a lobortis. Nunc eget rhoncus felis, non iaculis purus. Nam efficitur mi ac justo elementum, sed scelerisque sapien ultricies.</p>
                        </div>
                     </div>
                     <div className="productsSingleTabcontent tabcontent" id="Specification">
                        <div className="center">
                              <h5>Specification</h5>
                        </div>
                     </div>
                     <div className="productsSingleTabcontent tabcontent" id="Features">
                        <div className="center">
                              <h5>Features</h5>
                        </div>
                     </div>
                     <div className="productsSingleTabcontent tabcontent" id="Resources">
                        <div className="center">
                              <h5>Resources</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}

export default SingleProduct
