import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import SideBar from "./components/SideBar";

/* Header Components */
import Cart from "./components/Cart";
import Orders from "./components/Orders";

/* SideBar Components */
import Gadgets from "./components/sideBar_components/Gadgets";
import Games from "./components/sideBar_components/Games";
import Health from "./components/sideBar_components/Health";
import Households from "./components/sideBar_components/Households";
import Juwellery from "./components/sideBar_components/Juwellery";
import Men_fashion from "./components/sideBar_components/Men_fashion";
import Women_fashion from "./components/sideBar_components/Women_fashion";
import Giftcards from "./components/sideBar_components/Giftcards";
import Delieveries from "./components/sideBar_components/Delieveries";

function App(){
    return (
    <>
        <Router>
            <Header/>
            <SideBar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home} />
                <Route path="/cart" component={Cart} />
                <Route path="/orders" component={Orders} />
                {/* Sidebar information */}
                <Route path="/gadgets" component={Gadgets} />
                <Route path="/games" component={Games} />
                <Route path="/health" component={Health} />
                <Route path="/households" component={Households} />
                <Route path="/juwellery" component={Juwellery} />
                <Route path="/menfashion" component={Men_fashion} />
                <Route path="/womenfashion" component={Women_fashion} />
                <Route path="/delieveries" component={Delieveries} />
                <Route path="/giftcards" component={Giftcards} />
            </Switch>
        </Router>
    </>
    );
}

export default App;