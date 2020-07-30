import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTheme from '../Components/Theme';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Menu from '../Components/Menu';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Services from '../Components/Services';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const styles = MyTheme => ({
	
})

function switchContent(content, changePage){
    switch(content){
        case 'Home':
            return <Home />;
		case 'Menu':
			return <Menu/ >;
		case 'About':
			return <About />;
		case 'Services':
			return <Services />;
		case 'Contact':
			return <Contact />;
        default:
            return null;
    }
}

const Landing = (props) => {	
    return (
		<Router>
        	<div id="main-wrapper">
            	<Header />
				<Switch>
					<Route path="/menu">
						<Menu />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
        	</div>
		</Router>
    )
}

export default withStyles(styles)(Landing);