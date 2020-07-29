import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	
})

const Contact = (props) => {
	const { classes } = props;
	return(
		<>
			Contact
		</>
	)
}

export default withStyles(styles)(Contact);