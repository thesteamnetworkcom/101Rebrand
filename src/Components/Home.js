import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	yellowtail:{
		'font-family':"'yellowtail', cursive",
		'text-align':'center'
	},
	truckimg:{
		'width':'100%',
	},
	textCenter:{
		'text-align':'center'
	},
	inline:{
		display:'inline'
	},
	noMargin:{
		margin:0
	}
})

const Home = (props) => {
	const { classes } = props;
    return(
        <div id="content-wrapper">
            <div id="tag-line">
				<h1 className={classes.yellowtail}>RESPONDING TO THE RESPONSIBLE</h1>
				<Divider/>
                <Typography className={classes.textCenter}>
					<h2 className={classes.noMargin}>10-1 Life Safety, LLC.</h2>
					<h4 className={classes.noMargin}>9449 S. Kedzie Ave. Suite 202</h4>
					<h4 className={classes.noMargin}>Evergreen Park, IL. 60805</h4>
				</Typography>
				<Divider/>
				<Typography className={classes.textCenter}>
					<h5 className={classes.inline + ' ' + classes.noMargin}>Phone: </h5><h4 className={classes.inline  + ' ' + classes.noMargin}>(773) 401-4500</h4>
				</Typography>
				<Divider/>
				<Typography className={classes.textCenter}>
					<h5 className={classes.inline  + ' ' + classes.noMargin}>Email: </h5><h4 className={classes.inline  + ' ' + classes.noMargin}>mike@10-1lifesafety.com</h4>
				</Typography>
				<Divider/>
            </div>
            <div>
                <img className={classes.truckimg} src={require("../Assets/truck.png")} alt="truck"/>
                <Typography className={classes.textCenter}>10-1 LIFE SAFETY PROUDLY OFFERS FIRE EXTINGUISHER SERVICE AND MANY  OTHER LIFE SAFETY NEEDS</Typography>
            </div>
        </div>
    )
}

export default withStyles(styles)(Home);