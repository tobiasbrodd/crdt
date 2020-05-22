import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/styles';
import * as serviceWorker from './serviceWorker';
import App from './App';
import theme from './theme';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
