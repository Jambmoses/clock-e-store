import React from 'react'
import "./css/gadgets.css";
import { DealsCard } from '../DealOfTheDay';

function Gadgets() {
  return (
    <section className='gadgets-container'>
      <section className='gadgets-categories'>
        <div className='gadgets-categories-main-banner'>
            {/* info */}
            <div className='gadgets-categories-main-banner-ads'>
              <span className='gadgets-categories-main-banner-ads-sub-title'>sale offer <span>black friday</span> this week</span>
              <span className='gadgets-categories-main-banner-ads-title'>
                work desk <br />
                surface studio 2018
              </span>
              <span className='gadgets-categories-main-banner-ads-price'>Starting at <span>$824.00</span></span>
              <a className='gadgets-categories-main-banner-ads-btn' href="">shop now</a>
              <span className='gadgets-categories-main-banner-ads-thumbnail'></span>
            </div>
        </div>

      {/* aside */}
        <div className='gadgets-categories-aside-banner-container'>
          <div className='gadgets-categories-aside-banner-top'>
              {/* info */}
              <div className='gadgets-categories-aside-banner-product-ads'>
                <span className='gadgets-categories-aside-banner-product-ads-sub-title'>full HD Display</span>
                <span className='gadgets-categories-aside-banner-product-ads-title'>smartphone meizu M5 new color green</span>
                <span className='gadgets-categories-aside-banner-product-ads-sale-off'>sale 20% off</span>
                <span className='gadgets-categories-aside-banner-product-ads-thumbnail'></span>
              </div>
          </div>
          <div className='gadgets-categories-aside-banner-bottom'>
              {/* info */}
              <div className='gadgets-categories-aside-banner-product-ads'>
                <span className='gadgets-categories-aside-banner-product-ads-sub-title'>sales 20% off all store</span>
                <span className='gadgets-categories-aside-banner-product-ads-title'>playstation VR plus network 2018</span>
                <span className='gadgets-categories-aside-banner-product-ads-sale-off'>sale 20% off</span>
                <span className='gadgets-categories-aside-banner-product-ads-thumbnail'></span>
              </div>
          </div>
        </div>
      </section>

      <div className='gadgets-categories-contain'>
        <div className='gadgets-categories-contain-box'>
          <aside className='gadgets-categories-contain-listing'>
            <div className='gadgets-categories-contain-listing-item'>
              <span className='gadgets-categories-contain-listing-item-title'>categories</span>
              <div className='gadgets-categories-contain-listing-item-drop-titles'>
                <i className="i fa fa-angle-right"></i> Accessories
                <div className='gadgets-categories-contain-listing-item-drop'>
                  <a href="">category list</a>
                  <a href="">category list</a>
                  <a href="">category list</a>
                </div>
              </div>

              {/* heading */}
              <div className='gadgets-categories-contain-listing-item-drop-titles'>
                <i className="i fa fa-angle-right"></i> clothes
                <div className='gadgets-categories-contain-listing-item-drop'>
                  <a href="">category list</a>
                  <a href="">category list</a>
                  <a href="">category list</a>
                </div>
              </div>

                            {/* heading */}
              <div className='gadgets-categories-contain-listing-item-drop-titles'>
                <i className="i fa fa-angle-right"></i> toys
                <div className='gadgets-categories-contain-listing-item-drop'>
                  <a href="">category list</a>
                  <a href="">category list</a>
                  <a href="">category list</a>
                </div>
              </div>

                            {/* heading */}
              <div className='gadgets-categories-contain-listing-item-drop-titles'>
                <i className="i fa fa-angle-right"></i> phones
                <div className='gadgets-categories-contain-listing-item-drop'>
                  <a href="">category list</a>
                  <a href="">category list</a>
                  <a href="">category list</a>
                </div>
              </div>
              
                            {/* heading */}
              <div className='gadgets-categories-contain-listing-item-drop-titles'>
                <i className="i fa fa-angle-right"></i> computers
                <div className='gadgets-categories-contain-listing-item-drop'>
                  <a href="">category list</a>
                  <a href="">category list</a>
                  <a href="">category list</a>
                </div>
              </div>
            </div>

            <div className='gadgets-categories-contain-listing-item'>
              <span className='gadgets-categories-contain-listing-item-title'>price</span>
              <input className='gadgets-categories-contain-listing-item-price-ranging' type="range" name="price-range" id="" maxLength={1000000} />
              <span className='gadgets-categories-contain-listing-item-price-ranging-title'>$0 - $754</span>
            </div>

            <div className='gadgets-categories-contain-listing-item'>
              <span className='gadgets-categories-contain-listing-item-title'>tags</span>
              <div className='gadgets-categories-contain-listing-item-tags'>
                <a href=''>iphone</a>
                <a href=''>tenco</a>
                <a href=''>infinix</a>
                <a href=''>lenovo i7</a>
                <a href=''>projector 2000mp</a>
                <a href=''>fans</a>
                <a href=''>lenovo computer</a>
                <a href=''>nokia</a>
              </div>
            </div>
          </aside>
        </div>

{/* main body */}
        <section className='gadgets-items-container'>
            <nav>
              <a href="">bestseller products</a>
              <a href="">new product</a>
              <a href="">sale products</a>
              <a href="">top rated products</a>
            </nav>

            <section className='gadgets-items-container-item-listing'>
                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-originalprice'>$128.00</span>
                  {/*   
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  */}
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-originalprice'>$128.00</span>
                  {/*   
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  */}
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-originalprice'>$128.00</span>
                  {/*   
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  */}
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-originalprice'>$128.00</span>
                  {/*   
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  */}
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-originalprice'>$128.00</span>
                  {/*   
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  */}
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>

                {/* item */}
                <div className='gadgets-items'>
                  <span className='gadgets-items-status'>new</span>
                  <span className='gadgets-items-image'></span>
                  
                  <span className='gadgets-items-category'>
                    <span className='gadgets-items-category-name'>
                      buxton
                    </span>
                    
                    <span className='gadgets-items-rating'>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "orange"}} className="fa fa-star"></i>
                      <i style={{fontSize: "12px", color: "white"}} className="fa fa-star"></i>
                    </span>
                  </span>
                  
                  <span className='gadgets-items-title'>iploy and bark eames style molded ...</span>
                  
                  <span className='gadgets-items-price'>
                    <span className='gadgets-items-price-after-discount'>$120.80<span className='gadgets-items-price-discount'>$131.60</span></span>
                    <span className='gadgets-items-price-off'>-8% OFF</span>
                  </span>
                </div>


            </section>
            
            <div style={{padding: "20px 5%",textAlign:"right"}}>
              <button style={{outline: "none",border:"none",padding: "5px 10px",borderRadius: "5px",textTransform:"capitalize",fontSize: "13px",fontWeight:"bold",fontFamily:"sans-serif",color:"grey"}}>see more</button>
            </div>
        </section>
      </div>

    </section>
  )
}

export default Gadgets