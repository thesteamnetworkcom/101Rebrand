import React, { useState } from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div id="nav-bar">
            <img src={require("../Assets/101logo.png")} alt="logo"/>
            <ul id="selections">
                <li className={`${props.location == 'Home' ? 'active' : '' }`}>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Header;