import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTheme from './Theme';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import HeaderListItem from './HeaderListItem'

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
		'flex-grow':0,
		[MyTheme.breakpoints.down('sm')]:{
			'flex-grow':1
		}
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
		height:100,
		[MyTheme.breakpoints.down('sm')]: {
			height:80
		}
	},
	selections:{
		display:'flex',
		margin:0,
		padding:0,
		'list-style':'none',
		'flex-grow':1,
		'border-bottom-style':'solid',
		'border-width':1,
		'border-color':'darkgrey',
		height:'100%',
		'justify-content':'center',
		'align-items':'center',
		[MyTheme.breakpoints.down('sm')]:{
			display:'none'
		}
	},
	navItem:{
		'flex-grow':1,
		'text-align':'center',
	}
})

const Header = (props) => {
	const { classes } = props;
	const location = useLocation();
    return(
        <div className={classes.navBar}>
			{console.log(location)}
            <div className={classes.logoWrapper}>
				<img className={classes.logo} src={require("../Assets/101logo.png")} alt="logo"/>
			</div>
            <ul className={classes.selections}>
				<HeaderListItem
					loc={location.pathname}
					match="/"
					exact="True"
					locationName="Home"
				/>
				<HeaderListItem
					loc={location.pathname}
					match="/services"
					exact="False"
					locationName="Services"
				/>
                <HeaderListItem
					loc={location.pathname}
					match="/about"
					exact="False"
					locationName="About"
				/>
             	<HeaderListItem
					loc={location.pathname}
					match="/contact"
					exact="False"
					locationName="Contact"
				/>
            </ul>
			<Link to="/menu" className={classes.mobileMenu}>
				<img className={classes.mobileMenu} src={require("../Assets/menu.svg")} alt="menu"/>
			</Link>
        </div>
    )
}

export default withStyles(styles)(Header);