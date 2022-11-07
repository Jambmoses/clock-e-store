import React from "react";
import { Link } from "react-router-dom";
import "./css/SideBar.css";

export default function SideBar(){
    return (
        <>
            <aside className="side-nav">
                <div className="side-nav-menu"><i className="fa fa-bars" style={{color: "grey",fontSize: "20px"}}></i></div>
                <Link to="/myprofile"><div><i className="fa fa-user" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/home"><div className="active-side-bar"><i className="fa fa-user-secret" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/health"><div><i className="fa fa-user-md" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/gadgets"><div><i className="fa fa-tv" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/households"><div><i className="fa fa-chair" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/games"><div><i className="fa fa-gamepad" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/delieveries"><div><i className="fa fa-map" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
                <Link to="/giftcards"><div><i className="fa fa-gift" style={{color: "grey",fontSize: "20px"}}></i></div></Link>
            </aside>
        </>
    );
}