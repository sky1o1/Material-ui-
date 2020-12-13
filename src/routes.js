import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Addblog from "./components/Addblog";
import Tables from "./components/Table";
import Profile from "./components/Profile";

const Routes = () => (
    <div className='home'>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/add" component={Addblog}></Route>
        <Route exact path="/table" component={Tables}></Route>
        <Route exact path="/profile" component={Profile}></Route>
    </div>
);

export default Routes;