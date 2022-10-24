import React,{useState} from "react";
import { Link } from "react-router-dom";
import information from "./constants/information";
import "./css/content.css";
import "./css/drop-downs.css";



export default function Content(){

    var [dropDown,ChangeDropDown] = useState(false)
    //var Dropheading = document.getElementById("dropdown-heading");
    
    function DropCategories(){
      if (dropDown) {
        ChangeDropDown(false);
      } else {
        ChangeDropDown(true)
      }
    }

    function Categories({data}){
        return(
            <span className="categories-item">
                <span onClick={DropCategories}>{data.heading}</span> <span className="dropright"><i className="fa fa-angle-right"></i></span>
                <div className={(dropDown)?"categories-item-drop-down-show":"categories-item-drop-down"}>
                    <div className="categories-item-drop-down-heading">drop heading</div>
                    <div className="categories-item-drop-down-list">
                        {data.subHeading.map(function(list){
                            return(
                                <Link to="/" key={list.id} className="categories-item-drop-down-list-link"><span>{list.title}</span></Link>
                            );
                        })}
                        
                        <Link to="/" className="categories-item-drop-down-list-link"><span>item 2</span></Link>
                        <Link to="/" className="categories-item-drop-down-list-link"><span>item 3</span></Link>
                        <Link to="/" className="categories-item-drop-down-list-link"><span>item 4</span></Link>
                        <Link to="/" className="categories-item-drop-down-list-link"><span>item 5</span></Link>
                        <Link to="/" className="categories-item-drop-down-list-link"><span>item 6</span></Link>
                        <Link to="/" className="categories-item-drop-down-list-link"><span>item 7</span></Link>
                    </div>
                </div>
            </span>
        
        );
    }
    
    return (
    <>
        <section className="content-container">
    
            <div className="categories">
            {information.categories.map(function(categoryLists){
                return(
                    <Categories key={categoryLists.id} data={categoryLists}/>
                );
            })}
            </div>

            <div className="main-content">
                <div className="main-content-main">
                    <div className="main-content-main-top">
                        <div className="off-heading">
                            <h4>Biggest offer Revealed</h4>
                            <h1>MORE DEALS INSIDE UP TO 50% OFF</h1>
                            <Link to="/">
                                <span style={{cursor: "pointer"}}>wishhlist <i className="fa fa-angle-right" style={{fontSize: "12px"}}></i><i className="fa fa-angle-right" style={{fontSize: "12px"}}></i></span>
                            </Link>
                        </div>
                        <div className="off-image" style={{ backgroundImage: `url(${ require('./imgs/kelly-sikkema-Pvse_0mSm6Y-unsplash.png') })`}}></div>
                    </div>

                    <div className="main-content-main-bottom">
                        <Link to="/" className="main-content-main-bottom-item pink">
                            <div className="main-content-main-bottom-item-content">
                                <span>UP TO 30% OFF <small>For all hand purses</small></span>
                                <span>AVAKEN</span>
                            </div>
                            <div className="main-content-main-bottom-item-image" style={{ backgroundImage: `url(${ require('./imgs/handbag1.png') })`}}></div>
                        </Link>

                        <Link to="/" className="main-content-main-bottom-item gray">
                            <div className="main-content-main-bottom-item-content">
                                <span>EXPLORE THE BIGGEST DISCOUNT <small>Time Zone</small></span>
                                <span>ICONIC</span>
                            </div>
                            <div className="main-content-main-bottom-item-image" style={{ backgroundImage: `url(${ require('./imgs/watch.png') })`}}></div>
                        </Link>

                        <Link to="/" className="main-content-main-bottom-item lightgreen">
                            <div className="main-content-main-bottom-item-content">
                                <span></span>
                                <span>DON'T MISS THE YEAR END SELL <small>7 days left</small></span>
                            </div>
                            <div className="main-content-main-bottom-item-image" style={{ backgroundImage: `url(${ require('./imgs/light.png') })`, backgroundSize: "300px", backgroundPosition: "center"}}></div>
                        </Link>
                    </div>
                </div>

                <div className="main-content-aside">
                    <section className="main-content-aside-item">
                        <h3 className="main-content-aside-h3">recently viewed</h3>
                        <div className="main-content-aside-cont">
                            <span className="main-content-aside-item-image" style={{ backgroundImage: `url(${ require('./imgs/irene-kredenets-tcVH_BwHtrc-unsplash.png') })`,  transform: "scale(1.2)"}}></span>{/* image */}
                                <Link className="main-content-aside-item-link">see you browsing history</Link>
                        </div>
                    </section>

                    <section className="main-content-aside-item">
                        <h3 className="main-content-aside-h3">recently viewed</h3>
                        <div className="main-content-aside-cont">
                            <span className="main-content-aside-item-image" style={{ backgroundImage: `url(${ require('./imgs/earphones.png') })`, backgroundPosition: "30px 5px", transform: "scale(1.2)"}}></span>
                            <span className="main-content-aside-item-link">see you browsing history</span>
                        </div>
                    </section>
                </div>
            </div>

        </section>
    </>
    );
}