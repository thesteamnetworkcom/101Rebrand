import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Card, CardContent } from '@material-ui/core';
import CardThatOpens from './CardThatOpens';
import MyTheme from './Theme';

const styles = MyTheme => ({
	
})

const Services = (props) => {
	const { classes } = props;
	return(
		<>
			<Button variant="contained">Home</Button>
			<CardThatOpens 
				image={require("../Assets/Extinguishers.jpg")}
				titleText="On Site Fire Extinguishers Service"
				description="10-1 Life Safety is licensed in the State of Illinois to service and install all types of portable fire extinguishers."
			/>
			<CardThatOpens
				image={require("../Assets/ExitSigns.jpg")}
				titleText="Emergency Lighting"
				description="Keep your business or facility properly lit in the event of an emergency or power outage. Emergency lighting is often overlooked. "
			/>
			<CardThatOpens
				image={require("../Assets/FireAlarms.jpg")}
				titleText="Fire Alarms"
				description="We can install, design or maintain all of your fire alarm system needs."
			/>
			<CardThatOpens
				image={require("../Assets/Signs.jpg")}
				titleText="Safety Training/CPR & AED Training"
				description="From CPR/AED to fire extinguisher training, let 10-1 train and educate your establishment by veteran emergency services instructors."
			/>
			<CardThatOpens
				image={require("../Assets/AED.jpg")}
				titleText="AED Sales and Services"
				description="10-1 is a distributor of Defibtech AED's.  Nationally recognized as a leader in the life saving AED field.  "
			/>
			<CardThatOpens
				image={require("../Assets/Equipment.jpg")}
				titleText="Fire Extinguisher and Fire Equipment Sales"
				description="We offer a full line of safety equipment to compliment any business of safety program."
			/>
		</>
	)
}

export default withStyles(styles)(Services);