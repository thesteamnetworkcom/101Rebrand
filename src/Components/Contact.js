import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Divider, TextField, Button } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	textCenter:{
		'text-align':'center'
	},
	noMargin:{
		margin:0
	},
	mapWrapper:{
		display:'flex',
		'justify-content':'center',
		'align-items':'center',
		'padding':10,
	},
	form:{
		
	},
	fullWidth:{
		width:'100%',
	}
})

const Contact = (props) => {
	const { classes } = props;
	const [state, setState] = useState({});
	return(
		<>
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
			<div className={classes.mapWrapper}>
				<img src={require('../Assets/MapImage.png')} />
			</div>
			<Divider/>
			<form className={classes.form} noValidate autoComplete="off">
				<TextField fullWidth id="outlined-basic" label="Name" variant="outlined" />
				<TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
				<TextField fullWidth id="outlined-basic" label="Subject" variant="outlined" />
				<TextField fullWidth multiline id="outlined-basic" label="Message" variant="outlined" />
				<Button variant="contained" fullWidth color="primary">
  					Submit
				</Button>
			</form>
		</>
	)
}

export default withStyles(styles)(Contact);