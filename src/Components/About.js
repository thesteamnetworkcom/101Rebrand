import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import MyTheme from './Theme';

const styles = MyTheme => ({
	ownerDetails:{},
	ownerPic:{},
	ownerDesc:{},
	underline:{},
	clients:{},
	content:{
		padding:5,
		'text-align':'center',
		'& $ownerDetails':{
			'display':'flex',
			'justify-content':'center',
			'align-items':'center',
			'& $ownerPic':{
				'flex-grow':0
			},
			'& $ownerDesc':{
				'flex-grow':1,
				'text-align':'center',
				'& $underline':{
					'margin-bottom':5,
					display:'block',
				}
			}
		},
		'& $clients':{
			'list-style-type':'none',
			'padding':0
		}
	},
})

const About = (props) => {
	const { classes } = props;
	return(
		<div className={classes.content}>
			<div className={classes.ownerDetails}>
				<img className={classes.ownerPic} src={require("../Assets/BigMike.png")} />
				<div className={classes.ownerDesc}>
					<h3 className={classes.underline}>
						Michael O'Boyle<br/>Owner<br/>
					</h3>
					<Divider/>
					<span className={classes.underline}>
						Illinois Licenses:<br/>
							#1912-1<br/>
							6152-A<br/>
					</span>
					<Divider/>
					<span className={classes.underline}>
						22 years fire service experience<br/>
					</span>
					<Divider/>
					<span className={classes.underline}>
						M.B.A. Saint Xavier University<br/>
					</span>
				</div>
			</div>
			<Divider/>
			<p>
				10-1 Life Safety offers a range of safety services, all designed to help your keep your establishment as safe as possible. Whether you're looking for training, fire extinguisher service, or a complete fire alarm system, we have you covered. Our services are available a la carte so you can get precisely what you need.
			</p>
			<Divider/>
			<h2>OUR APPROACH...WORKING WITH YOUR NEEDS</h2>
			<Divider/>
			<h3>
				WE BELIEVE IN A UNIQUE AND CUSTOMIZED LIFE SAFETY EXPERIENCE FOR EACH AND EVERY CLIENT.
			</h3>
			<Divider/>
			<p>
				Each company is unique. One-size-fits-all approaches will never help your establishment reach its full safety potential. We deliver custom solutions, tailored to you--your industry, your culture, your one-of-a-kind safety challenges.
			</p>
			<Divider/>
			<h2>
				A FEW OF OUR CLIENTS
			</h2>
			<ul className={classes.clients}>
				<li>Chicago Fire Protection</li>
				<li>CME Group</li>
				<li>Glenstar Properties</li>
				<li>Chicago Board of Trade</li>
				<li>Downers Grove High School District</li>
				<li>Anchor Mechanical</li>
				<li>Tishman Speyer</li>
				<li>UPS Stores</li>
				<li>Draper & Kramer</li>
				<li>CBRE Group</li>
				<li>CMI Logistics</li>
				<li>Wells Fargo</li>
				<li>Infinite Chicago</li>
				<li>Arc at Old Colony</li>
				<li>Sterling Bay Properties</li>
				<li>Pathways in Education</li>
				<li>Triton Manufacturing</li>
				<li>Terry Plumbing Co.</li>
				<li>St. Cajetan School</li>
				<li>Marist High School</li>
				<li>Reilly's Daughter - Oak Lawn</li>
			</ul>
		</div>
	)
}

export default withStyles(styles)(About);