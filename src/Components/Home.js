import React, { useState } from 'react';
import './Home.css';

const Home = (props) => {
    return(
        <div id="content-wrapper">
            <div id="tag-line">
                <h1 id="tag">RESPONDING TO THE RESPONSIBLE</h1>
                <h1 id="address">10-1 Life Safety, LLC.<br/>

9449 S. Kedzie Ave. Suite 202<br/>

Evergreen Park, IL. 60805</h1>
                <h2>Phone: </h2>
                <h1>(773) 401-4500</h1>
                <h2>Email: </h2>
                <h1>mike@10-1lifesafety.com</h1>
            </div>
            <div id="logo-wrapper">
                <img src={require("../Assets/truck.png")} alt="truck"/>
                <h2>10-1 LIFE SAFETY PROUDLY OFFERS FIRE EXTINGUISHER SERVICE AND MANY  OTHER LIFE SAFETY NEEDS</h2>
            </div>
        </div>
    )
}

export default Home;