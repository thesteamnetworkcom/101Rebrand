import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	wrapper:{
		display:'flex',
	},
	image:{
		'flex-grow':1,
		'max-width':100
	},
	text:{
		'flex-grow':1,
		'text-align':'center'
	}
})

const CardThatOpens = (props) => {
	const [state, setState] = useState({
		open:false
	})
	
	const toggleDisp = () => {
		setState({
			open:!state.open
		})
	}
	
	const { classes } = props;
	return(
		<div onClick={()=>toggleDisp()}>
			<Card className={props.passClass}>
				<CardContent>
					<div  className={classes.wrapper}>
						<img className={classes.image} src={props.image} />
						<h2 className={classes.text}>
							{props.titleText}
						</h2>
					</div>
					{state.open &&
						<div className={state.open + " " + classes.display} >
							{props.description}
						</div>
					}
				</CardContent>
			</Card>
		</div>
	)
}

export default withStyles(styles)(CardThatOpens);