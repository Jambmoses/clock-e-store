import React from "react";
import { Link } from "react-router-dom";
import information from "./constants/information";
import "./css/DealOfTheDay.css";


export function DealsCard({info}){
    return(
        <div className="deals-product">
        <Link to="/" className="deals-product-link">
        <div className="deals-product-image">
            <div className="deals-product-image-real" style={{ backgroundImage: `url(${ require(`${info.src}`) })`}}></div>
        </div>
        <div className="deals-product-info">
            <span className="deals-product-title">{info.title}</span>
            <div className="deals-product-price">
                <span className="deals-product-real-price">{info.price} Bdt</span>
                <span className="deals-product-discount-price">{info.discount} Bdt</span>
            </div>
        </div>
        </Link>
        </div>
    
    );
}


export default function DealOfTheDay(){
    return (
    <>
        <section className="deals-container">
            <div className="deals-head-section">
                <div>
                    <span className="deals-head-heading">Deals of the Day</span>
                    <span className="deals-head-time">20:45:12 <span>Left</span></span>
                </div>
                <div className="deals-head-view-all"><Link to="/" className="deals-head-view-all-link">View All Deals</Link></div>
            </div>

            <div className="deals-product-section">

                    {information.dealsOfDay.map(function(data){
                        return(
                            <DealsCard key={data.id} info={data}/>
                        );
                    })}
            </div>
        </section>
    </>
    );
}