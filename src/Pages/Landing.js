import React, { useState } from 'react';
import './Landing.css';
import Header from '../Components/Header';
import Home from '../Components/Home';

function switchContent(content){
    switch(content){
        case 'Home':
            return <Home />;
        default:
            return null;
    }
}

const Landing = (props) => {
    const [page, setPage] = useState("Home");
    return (
        <div id="main-wrapper">
            <Header location={page}/>
            {switchContent(page)}
        </div>
    )
}

export default Landing;