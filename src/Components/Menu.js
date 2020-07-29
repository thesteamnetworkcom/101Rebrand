import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
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
			<Card className={classes.card} onClick={()=>props.navigate("Home")}>
				<CardContent>
					Home
				</CardContent>
			</Card>
			<Card className={classes.card} onClick={()=>props.navigate("Services")}>
				<CardContent>
					Services
				</CardContent>
			</Card>
			<Card className={classes.card} onClick={()=>props.navigate("About")}>
				<CardContent>
					About
				</CardContent>
			</Card>
			<Card className={classes.card} onClick={()=>props.navigate("Contact")}>
				<CardContent>
					Contact
				</CardContent>
			</Card>
		
		</>
	)
}

export default withStyles(styles)(Menu);