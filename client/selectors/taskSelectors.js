import { createSelector } from 'reselect'
import { size, filter } from 'lodash'

const getFilteredTasks = (state, props) => {
    const { tasks } =  state.task;
    switch(props.filtered) {
        case 'COMPLETE':
            return filter(tasks, {complete:true});
        case 'INCOMPLETE':
            return filter(tasks, {complete:false});
        default:
            return tasks;
    }
};

export const getFilteredTasksCount = createSelector(
    getFilteredTasks,
    (taskList) => size(taskList)
);
