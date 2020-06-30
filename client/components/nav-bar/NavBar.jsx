import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'

export default ({ noOfTasksComplete, noOfTasksIncomplete, totalTaskCount }) => {
    return (
        <AppBar title="Task List">
            <div>
                <div>total: {totalTaskCount}</div>
                <div>incomplete: {noOfTasksIncomplete}</div>
                <div>complete: {noOfTasksComplete}</div>
            </div>
        </AppBar>
    );
};
