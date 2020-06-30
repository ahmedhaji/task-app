import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import Routes from './containers/Routes.jsx'

import store from './store.js'

import './assets/sass/main.scss'

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Routes />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('react-starter')
);

