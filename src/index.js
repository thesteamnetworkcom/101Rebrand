import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MyTheme from './Components/Theme'

ReactDOM.render(
	<React.StrictMode>
		<MuiThemeProvider theme={MyTheme}>
			<CssBaseline>
    			<App />
			</CssBaseline>
		</MuiThemeProvider>
  	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
