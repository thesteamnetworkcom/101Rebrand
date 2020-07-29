import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	yellowtail:{
		'font-family':"'yellowtail', cursive",
		'text-align':'center'
	}
})

const Home = (props) => {
	const { classes } = props;
    return(
        <div id="content-wrapper">
            <div id="tag-line">
				<h1 className={classes.yellowtail}>RESPONDING TO THE RESPONSIBLE</h1>
                <Typography>10-1 Life Safety, LLC.<br/>

9449 S. Kedzie Ave. Suite 202<br/>

Evergreen Park, IL. 60805</Typography>
                <Typography>Phone: </Typography>
                <Typography>(773) 401-4500</Typography>
                <Typography>Email: </Typography>
                <Typography>mike@10-1lifesafety.com</Typography>
            </div>
            <div id="logo-wrapper">
                <img src={require("../Assets/truck.png")} alt="truck"/>
                <Typography>10-1 LIFE SAFETY PROUDLY OFFERS FIRE EXTINGUISHER SERVICE AND MANY  OTHER LIFE SAFETY NEEDS</Typography>
            </div>
        </div>
    )
}

export default withStyles(styles)(Home);