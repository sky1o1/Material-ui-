import React from 'react';
import { Link } from "react-router-dom";

function Panel(){
    return(
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/add">Addblog</Link></li>
                    <li><Link to="/table">Table</Link></li>
                </ul>
            </div>
    )
}

export default Panel;

