import React from 'react';
//import "./css/households.css";

function Households() {
  return (
<section className="product-dash">
{/* <!-- aside --> */}
<section className="product-dash-aside">
    <section className="product-dash-aside-display">
        <div className="product-dash-aside-display-heading">shop by</div>
        <div className="product-dash-aside-display-content">
            {/* <!-- items --> */}
            <div className="product-dash-aside-display-content-item">
                <span className="product-dash-aside-display-content-item-subtitle">category</span>
                <span className="product-dash-aside-display-content-item-subcontent">
                    {/* <!-- category --> */}
                    <span className="product-dash-aside-display-content-item-category">
                        <input className="product-dash-aside-display-content-item-category-checkbox" type="checkbox" name="" id="" />
                        <span className="product-dash-aside-display-content-item-category-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-category">
                        <input className="product-dash-aside-display-content-item-category-checkbox" type="checkbox" name="" id=""/>
                        <span className="product-dash-aside-display-content-item-category-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-category">
                        <input className="product-dash-aside-display-content-item-category-checkbox" type="checkbox" name="" id=""/>
                        <span className="product-dash-aside-display-content-item-category-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-category">
                        <input className="product-dash-aside-display-content-item-category-checkbox" type="checkbox" name="" id=""/>
                        <span className="product-dash-aside-display-content-item-category-name">naming</span>
                    </span>
                </span>
            </div>

            <div className="product-dash-aside-display-content-item">
                <span className="product-dash-aside-display-content-item-subtitle">pricing</span>
                <span className="product-dash-aside-display-content-item-subcontent">
                    <div className="all-items">
                        {/* <!-- <span className="product-dash-aside-display-content-item-price-min-price">$0</span> --> */}
                        <input className="product-dash-aside-display-content-item-price-min-price" type="text" placeholder="$0" name="" id="" />
                        {/* <!-- <span className="product-dash-aside-display-content-item-price-max-price">$999</span> --> */}
                        <input className="product-dash-aside-display-content-item-price-max-price" type="text" name="" placeholder="$999" id="" />
                        <span className="product-dash-aside-display-content-item-price-search-btn" style={{paddingTop: "5px"}}>filter</span>
                        <span className="product-dash-aside-display-content-item-price-range product-dash-aside-display-content-item-range">
                      
                          <input className="product-dash-aside-display-content-item-range-input" style={{marginTeft: "15px",marginTop: "20px", width: "80%", height: "15px"}} type="range" name="" id="" value="0" maxlength="100"/>
                      </span>
                    </div>
                </span>
            </div>

            <div className="product-dash-aside-display-content-item">
                <span className="product-dash-aside-display-content-item-subtitle">manufacturer</span>
                <span className="product-dash-aside-display-content-item-subcontent">
                    <span className="product-dash-aside-display-content-item-manufacturer">
                        <input type="checkbox" name="" id="" className="product-dash-aside-display-content-item-manufacturer-checkbox"/>
                        <span className="product-dash-aside-display-content-item-manufacturer-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-manufacturer">
                        <input type="checkbox" name="" id="" className="product-dash-aside-display-content-item-manufacturer-checkbox"/>
                        <span className="product-dash-aside-display-content-item-manufacturer-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-manufacturer">
                        <input type="checkbox" name="" id="" className="product-dash-aside-display-content-item-manufacturer-checkbox"/>
                        <span className="product-dash-aside-display-content-item-manufacturer-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-manufacturer">
                        <input type="checkbox" name="" id="" className="product-dash-aside-display-content-item-manufacturer-checkbox"/>
                        <span className="product-dash-aside-display-content-item-manufacturer-name">naming</span>
                    </span>
                    <span className="product-dash-aside-display-content-item-manufacturer">
                        <input type="checkbox" name="" id="" className="product-dash-aside-display-content-item-manufacturer-checkbox"/>
                        <span className="product-dash-aside-display-content-item-manufacturer-name">naming</span>
                    </span>
                </span>
            </div>

            <div className="product-dash-aside-display-content-item">
                <span className="product-dash-aside-display-content-item-subtitle">color</span>
                <span className="product-dash-aside-display-content-item-subcontent">
                    <div className="product-dash-aside-display-content-item-color-container">
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "black"}}></span> <span className="product-dash-aside-display-content-item-color-title">black</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "red"}}></span> <span className="product-dash-aside-display-content-item-color-title">red</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "green"}}></span> <span className="product-dash-aside-display-content-item-color-title">green</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "yellow"}}></span> <span className="product-dash-aside-display-content-item-color-title">yellow</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "blue"}}></span> <span className="product-dash-aside-display-content-item-color-title">blue</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "silver"}}></span> <span className="product-dash-aside-display-content-item-color-title">silver</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "pink"}}></span> <span className="product-dash-aside-display-content-item-color-title">pink</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "purple"}}></span> <span className="product-dash-aside-display-content-item-color-title">purple</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "lightgrey"}}></span> <span className="product-dash-aside-display-content-item-color-title">lightgrey</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "skyblue"}}></span> <span className="product-dash-aside-display-content-item-color-title">skyblue</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "grey"}}></span> <span className="product-dash-aside-display-content-item-color-title">grey</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "lightgreen"}}></span> <span className="product-dash-aside-display-content-item-color-title">lightgreen</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "wheat"}}></span> <span className="product-dash-aside-display-content-item-color-title">wheat</span></span>
                        <span className="product-dash-aside-display-content-item-color"><span className="product-dash-aside-display-content-item-color-box" style={{backgroundColor: "orange"}}></span> <span className="product-dash-aside-display-content-item-color-title">orange</span></span>

                    </div>
                </span>
            </div>
        </div> {/* <!-- end content --> */}
    </section>

    <section className="product-dash-aside-display" style="background-color: transparent;">
        <div className="product-dash-aside-display-heading">best sellers</div>
        <div className="product-dash-aside-display-content">
            {/* <!-- item --> */}
            <div className="product-dash-aside-display-item">
                <div className="product-dash-aside-display-item-thumbnail" style={{background: "url()",backgroundPosition: "center",backgroundSize: "contain",backgroundRepeat: "no-repeat"}}></div>
                <div className="product-dash-aside-display-item-content">
                    <span className="product-dash-aside-display-item-content-name">donec vel venenatis mauris</span>
                    <span className="product-dash-aside-display-item-content-rating">
                        <i className="fa fa-star" style={{color: "orange"}}></i>
                        <i className="fa fa-star" style={{color: "orange"}}></i>
                        <i className="fa fa-star" style={{color: "orange"}}></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span>
                    <span className="product-dash-aside-display-item-content-price">$115.00 <span>$142.00</span></span>
                </div>
            </div>





        </div>
        <div style={{marginTop: "50px", textAlign: "center", cursor: "pointer"}}>
            <a style={{textDecoration: "none", display: "inline-block", border: "1px solid silver",padding: "5px 10px",borderRadius: "5px", backgroundColor: "white",color: "grey",textTransform: "lowercase",fontSize: "13px", fontFamily: "sans-serif"}}>see more</a>
        </div>
    </section>
</section>

{/* <!-- main --> */}
<section className="product-dash-content">
    {/* <!-- products --> */}
    <section className="product-dash-content-products">
        {/* <!-- item --> */}
        <div className="product-dash-product">
            <div className="product-dash-product-current">
                <div className="product-dash-product-current-sold">sold</div>
                {/* <!-- <div className="product-dash-product-current-new">new</div> --> */}
            </div>
            <div className="dash-product-thumbnail" style={{background: "url()", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
            <div className="product-dash-product-name">donec vel venenatis mauris</div>
            <div className="product-dash-product-price">$115.00 <span>$142.00</span></div>
            <div className="product-dash-product-rating">
                <i className="fa fa-star" style={{color: "orange"}}></i>
                <i className="fa fa-star" style={{color: "orange"}}></i>
                <i className="fa fa-star" style={{color: "orange"}}></i>
                <i className="fa fa-star" style={{color: "orange"}}></i>
                <i className="fa fa-star"></i>
            </div>
            <div className="product-dash-product-cart-contain">
                <span className="product-dash-product-cart-wishlist"><i className="fa fa-bars"></i></span>
                <span className="product-dash-product-cart-addcart">add to cart</span>
                <span className="product-dash-product-cart-heart"><i className="fa fa-heart"></i></span>
            </div>
        </div>



                        {/* <!-- item --> */}
                        <div className="product-dash-product">
                            <div className="product-dash-product-current">
                                {/* <!-- <div className="product-dash-product-current-sold">sold</div> --> */}
                                <div className="product-dash-product-current-new">new</div>
                            </div>
                            <div className="dash-product-thumbnail" style={{background: "url()", backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat"}}></div>
                            <div className="product-dash-product-name">donec vel venenatis mauris</div>
                            <div className="product-dash-product-price">$115.00 <span>$142.00</span></div>
                            <div className="product-dash-product-rating">
                                <i className="fa fa-star" style={{color: "orange"}}></i>
                                <i className="fa fa-star" style={{color: "orange"}}></i>
                                <i className="fa fa-star" style={{color: "orange"}}></i>
                                <i className="fa fa-star" style={{color: "orange"}}></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <div className="product-dash-product-cart-contain">
                                <span className="product-dash-product-cart-wishlist"><i className="fa fa-heart"></i></span>
                                <span className="product-dash-product-cart-addcart">add to cart</span>
                                <span className="product-dash-product-cart-heart"><i className="fa fa-heart"></i></span>
                            </div>
                        </div>


    </section>
    {/* <!-- more btn --> */}
    <div style={{marginTop: "50px", textAlign: "right", paddingRight: "5px", cursor: "pointer"}}>
        <a style={{textDecoration: "none", display: "inline-block", border: "1px solid silver", padding: "5px 10px", borderRadius: "5px", backgroundColor: "white", color: "grey", textTransform: "lowercase", fontSize: "13px", fontFamily: "sans-serif"}}>see more</a>
    </div>

</section>
</section>
  );
};

export default Households;