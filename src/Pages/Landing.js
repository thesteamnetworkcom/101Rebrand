import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MyTheme from '../Components/Theme';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Menu from '../Components/Menu';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Services from '../Components/Services';

const styles = MyTheme => ({
	
})

function switchContent(content, changePage){
    switch(content){
        case 'Home':
            return <Home />;
		case 'Menu':
			return <Menu navigate={changePage}/>;
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
    const [page, setPage] = useState({
		previousPage:"Home",
		page:"Home"
	});
	
	const toggleMenu = () => {
		if(page.page == "Menu"){
			setPage({
				previousPage:page.page,
				page:page.previousPage
			})
		}else{
			setPage({
				previousPage:page.page,
				page:"Menu"
			})
		}
	}
	const changePage = (loc) => {
		setPage({
			previousPage:page.page,
			page:loc
		})
	}
	
    return (
        <div id="main-wrapper">
            <Header location={page.page} toggle={toggleMenu}/>
            {switchContent(page.page, changePage)}
        </div>
    )
}

export default withStyles(styles)(Landing);