import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTheme from '../Components/Theme';
import Header from '../Components/Header';
import Home from '../Components/Home';

const styles = MyTheme => ({
	
})

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

export default withStyles(styles)(Landing);