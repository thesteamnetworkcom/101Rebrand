import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import { Link } from "react-router-dom";
import MyTheme from './Theme';

const styles = MyTheme => ({
	card:{
		margin:5
	}
})

const Menu = (props) => {
	const { classes } = props;
	return(
		<>
			<Link to="/">
				<Card className={classes.card} >
					<CardContent>
						Home
					</CardContent>
				</Card>
			</Link>
			<Link to="/services">
				<Card className={classes.card}>
					<CardContent>
						Services
					</CardContent>
				</Card>
			</Link>
			<Link to="/about">
				<Card className={classes.card}>
					<CardContent>
						About
					</CardContent>
				</Card>
			</Link>
			<Link to="contact">
				<Card className={classes.card}>
					<CardContent>
						Contact
					</CardContent>
				</Card>
			</Link>
		</>
	)
}

export default withStyles(styles)(Menu);