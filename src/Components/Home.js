import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	yellowtail:{
		'font-family':"'yellowtail', cursive",
		'text-align':'center'
	},
	tagline:{
		
		'font-size':'3em',
		[MyTheme.breakpoints.down('sm')]:{
			'font-size':'2em'
		}
	},
	'mobileonly':{
		display:'none',
		[MyTheme.breakpoints.down('sm')]:{
			display:'block'
		}
	},
	'desktopOnly':{
		display:'block',
		[MyTheme.breakpoints.down('sm')]:{
			display:'none'
		}
	},
	truckimg:{
		'max-width':400,
		[MyTheme.breakpoints.down('sm')]:{
			'width':'100%',
		}
		
	},
	textCenter:{
		'text-align':'center'
	},
	inline:{
		display:'inline'
	},
	noMargin:{
		margin:0
	},
	twoCol:{
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
	},
	flexGrow:{
		'flex-grow':1
	}
})

const Home = (props) => {
	const { classes } = props;
    return(
        <div id="content-wrapper">
            <div id="tag-line" className={classes.mobileonly}>
				<h1 className={classes.yellowtail + ' ' + classes.tagline}>RESPONDING TO THE RESPONSIBLE</h1>
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
            <div className={classes.twoCol}>
                <img className={classes.truckimg} src={require("../Assets/truck.png")} alt="truck"/>
                <div className={classes.tagline + ' ' + classes.desktopOnly + ' ' + classes.flexGrow}>
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
            </div>
			<Typography className={classes.textCenter}>10-1 LIFE SAFETY PROUDLY OFFERS FIRE EXTINGUISHER SERVICE AND MANY  OTHER LIFE SAFETY NEEDS</Typography>
        </div>
    )
}

export default withStyles(styles)(Home);