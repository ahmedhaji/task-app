import React, {Component} from 'react'
import { connect } from 'react-redux'
import NavBar from '../components/nav-bar/NavBar.jsx'
import TaskList from '../components/task/TaskList.jsx'
import { getFilteredTasksCount } from '../selectors/taskSelectors'

@connect((store) => {
    return {
        totalTaskCount: getFilteredTasksCount(store,{}),
        noOfTasksComplete: getFilteredTasksCount(store,{filtered:'COMPLETE'}),
        noOfTasksIncomplete: getFilteredTasksCount(store,{filtered:'INCOMPLETE'})
    }
})
export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { totalTaskCount, noOfTasksComplete, noOfTasksIncomplete } = this.props;
        return (
            <div>
                <NavBar totalTaskCount={totalTaskCount}
                        noOfTasksComplete={noOfTasksComplete}
                        noOfTasksIncomplete={noOfTasksIncomplete} />
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <TaskList />
                    </div>
                </div>
            </div>
        );
    }
}