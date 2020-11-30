import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Addblog from "./components/Addblog";
import Table from "./components/Table";

const Routes = () => (
    <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/add" component={Addblog}></Route>
        <Route exact path="/table" component={Table}></Route>
    </div>
);

export default Routes;