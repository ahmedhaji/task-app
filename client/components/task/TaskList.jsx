import map from 'lodash/map.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
//actions
import * as taskActions from '../../actions/taskActions'
//components
import AddTask from './AddTask.jsx'
import TaskItem from './TaskItem.jsx'

class TaskList extends Component {
    constructor(props) {
        super(props);
        this.dispatch = this.props.dispatch;
    }

    onSave = (task) => {
        if (!task.title) return;
        this.props.updateTask(task);
    };

    onAdd = (title) => {
        if (!title) return;
        this.props.addTask(title);
    };

    onDelete = (id) => {
        this.props.removeTask(id);
    };

    render = () => {
        const { tasks, isLoading } = this.props;
        return(
            <div className="todo-list" style={isLoading?{display:'none'}:null}>
                { map(tasks, task => (
                    <TaskItem key={task.id}
                              task={task}
                              onDelete={this.onDelete}
                              onSave={this.onSave} />
                ))}
                <AddTask onAdd={this.onAdd} />
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        tasks: store.task.tasks,
        isLoading: store.task.isLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addTask: (title) => dispatch(taskActions.addTask(title)),
        removeTask: (id) => dispatch(taskActions.removeTask(id)),
        updateTask: (task) => dispatch(taskActions.updateTask(task))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);