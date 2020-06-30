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
                        title: 'Use redux thunks to make an async call to get tasks',
                        complete: false
                    },
                    4: {
                        id: 4,
                        title: 'Use react selectors',
                        complete: false
                    },
                    5: {
                        id: 5,
                        title: 'Use html5 local storage',
                        complete: false
                    },
                    6: {
                        id: 6,
                        title: 'Use scss',
                        complete: false
                    },
                    7: {
                        id: 7,
                        title: 'Add \'Add task\' capability',
                        complete: false
                    },
                    8: {
                        id: 8,
                        title: 'Use d3.js to draw a pie chart',
                        complete: false
                    }
                }
            })
    };
};
