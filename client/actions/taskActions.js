import axios from 'axios'
import { createAction } from 'redux-actions'
import cuid from 'cuid'

export const addTask = (title) => {
    return {
        type: 'TASK_ADD',
        payload: {
            title: title,
            complete: false,
            id: cuid()
        }
    };
};
export const updateTask = createAction('TASK_UPDATE');
export const removeTask = createAction('TASK_REMOVE');
export const fetchTaskList = () => {
    return {
        //TODO make valid request
        type: 'TASK_LIST_FETCH',
        payload: axios.get('http://rest.learncode.academy/api/learncode/friends')
            .then((resp) => {
                return {
                    1: {
                        id: 1,
                        title: 'Play with the parrot',
                        complete: false
                    },
                    2: {
                        id: 2,
                        title: 'Feed the fish',
                        complete: false
                    },
                    3: {
                        id: 3,
                        title: 'Update api calls to get tasks from graphql server',
                        complete: false
                    },
                };
            })
    };
};
