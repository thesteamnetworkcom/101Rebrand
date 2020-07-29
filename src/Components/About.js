import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	
})

const About = (props) => {
	const { classes } = props;
	return(
		<>
			About
		</>
	)
}

export default withStyles(styles)(About);