import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import ClearIcon from 'react-icons/lib/md/clear'
import './task-item.scss'

const TaskItem = ({ task, onDelete, onSave }) => {

    function toggleComplete(complete) {
        onSave({
            ...task,
            complete: !complete
        });
    }

    function save(e) {
        onSave({
            ...task,
            title: e.target.value
        });
    }

    return (
        <div className="row">
            <div className="col-lg-1 col-md-1 col-sm-1 col-xs-1">
                <Checkbox defaultChecked={task.complete} onCheck={()=>toggleComplete(task.complete)} />
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                <TextField name="textField"
                           fullWidth={true}
                           defaultValue={task.title}
                           onBlur={(e)=>save(e)}
                           disabled={task.complete}
                           inputStyle={task.complete ? {textDecoration: 'line-through', color: 'lightgray'} : null} />
            </div>
            <span className="actions col-lg-2 col-md-2 col-sm-2 col-xs-2">
                <ClearIcon onClick={(e)=>onDelete(task.id)} />
            </span>
        </div>
    );
}

export default TaskItem;