import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import "./css/drop-downs.css";
import information from "./constants/information";

export default function Header(){

    var [userDop,setUserDop] = useState("user-dropdown-hide")
    var [dropIco,setdropIco] = useState("fa fa-angle-down");

    function dropProfile(){ 
        if (userDop == "user-dropdown") {
            //setdropIco("fa fa-angle-down");
            setUserDop("user-dropdown-hide");
        } else {
            //setdropIco("fa fa-angle-up");
            setUserDop("user-dropdown");
        }

/*         if (dropIco == "user-dropdown") {
            setdropIco("fa fa-angle-up");
        }else{
            setdropIco("fa fa-angle-down");
        } */
    }

    return (
        <>
            <nav>
                <div>
                    <div className="illustration-logo">
                        <span className="illustration-ico" style={{ backgroundImage: `url(${ require('./imgs/LogoMaker.jpg') })`}}></span>
                        <span className="illustration-top-name">pixorus</span>
                        <span className="illustration-bottom-name">customer satisfaction</span>
                    </div>
                </div>
                
                <div>
                    <form className="search">
                        <span>
                            <input type="text" placeholder="search product"/>
                            <button className="fa fa-search" style={{color: "grey"}}></button>
                        </span>
                    </form>
                </div>

                <div className="nav">
                    <span className="logo" style={{ backgroundImage: `url(${ require('./imgs/profile-img.jpg') })`}}></span>
                    <div className={userDop}>
                        {information.profileDropDown.map(function(data){
                            return(
                                <Link to={data.url} key={data.id} className="user-dropdown-link"><span>{data.title}</span></Link>
                            );
                        })}
                        <Link to="/" className="user-dropdown-link"><span className="logout">logout</span></Link>
                    </div>
                    <span className="user-name" onClick={dropProfile}>mercy gift<i className={dropIco} style={{paddingLeft: "5px", fontSize: "13px", fontWeight: "700"}}></i></span>
                    {/* <a><span className="active">Home</span></a> */}
                    <Link to="/cart" className="nav-link"><span>Cart<sup style={{fontSize: "11px",color: "orange",fontWeight: "500"}}>10</sup></span></Link>
                    <Link to="/orders" className="nav-link"><span>Orders</span></Link>
                </div>
            </nav>
        </>
    );
}