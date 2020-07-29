import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTheme from './Theme';

const styles = MyTheme => ({
	root:{
		
	},
	logo:{
		'flex-grow':0,
		'padding-right':5,
		height:'100%'
	},
	logoWrapper:{
		height:'100%',
		'flex-grow':1
	},
	mobileMenu:{
		display:'none',
		height:'100%',
		[MyTheme.breakpoints.down('sm')]: {
			display:'block'
		}
	},
	navBar:{
		padding:5,
		display:'flex',
		'box-shadow':'0px 3px 9px -4px rgba(0,0,0,0.75)',
		'align-items':'center',
		height:200,
		[MyTheme.breakpoints.down('sm')]: {
			height:80
		}
	},
	selections:{
		display:'flex',
		'list-style':'none',
		'flex-grow':1,
		'border-bottom-style':'solid',
		'border-width':1,
		'border-color':'darkgrey',
		[MyTheme.breakpoints.down('sm')]:{
			display:'none'
		}
	}
})

const Header = (props) => {
	const { classes } = props;
    return(
        <div className={classes.navBar}>
            <div className={classes.logoWrapper}>
				<img className={classes.logo} src={require("../Assets/101logo.png")} alt="logo"/>
			</div>
            <ul className={classes.selections}>
                <li className={`${props.location == 'Home' ? 'active' : '' }`}>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
			<img className={classes.mobileMenu} src={require("../Assets/menu.svg")} alt="menu"/>
        </div>
    )
}

export default withStyles(styles)(Header);