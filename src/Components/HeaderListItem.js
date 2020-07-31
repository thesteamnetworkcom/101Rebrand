import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTheme from './Theme';
import { Link } from "react-router-dom";

const styles = MyTheme => ({
	navItem:{
		'flex-grow':1,
		'text-align':'center',
		'height':'100%',
		'display':'flex',
		'justify-content':'center',
		'align-items':'center',
	},
	active:{
		'background-color':'rgba(0,0,0,.2)',
	}
})

const HeaderListItem = (props) => {
	const { classes } = props;
	
	const checkActive = ()=>{
		if(props.exact == 'True'){
				if(props.loc == props.match){
					return(
						<Link to={props.match} className={classes.navItem}>
							<li className={classes.active + ' ' + classes.navItem}>
								<span>{props.locationName}</span>
							</li>
						</Link>
					)
				}else{
					return(
						<Link to={props.match} className={classes.navItem}>
							<li className={classes.navItem}>
								<span>{props.locationName}</span>
							</li>
						</Link>
					)
				}
			}else{
				if(props.loc.includes(props.match)){
					return(
						<Link to={props.match} className={classes.navItem}>
							<li className={classes.active + ' ' + classes.navItem}>
								<span>{props.locationName}</span>
							</li>
						</Link>
					)
				}else{
					return(
						<Link to={props.match} className={classes.navItem}>
							<li className={classes.navItem}>
								<span>{props.locationName}</span>
							</li>
						</Link>
					)
				}
			}
	
	}
	return(
		<>
			{checkActive()}
		</>
	)
}

export default withStyles(styles)(HeaderListItem);