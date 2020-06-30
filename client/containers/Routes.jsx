import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin';

import Home from './Home.jsx'

import * as taskActions from '../actions/taskActions.js'

@connect((store) => ({}))
export default class Routes extends Component {
    constructor(props) {
        super(props);
    }

    getChildContext() {
        injectTapEventPlugin();
    }

    onHomeEnter() {
        this.props.dispatch(taskActions.fetchTaskList());
    }

    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home} onEnter={this.onHomeEnter.bind(this)}/>
                <Route path="/home" component={Home} onEnter={this.onHomeEnter.bind(this)}/>
            </Router>

        );
    }
}
