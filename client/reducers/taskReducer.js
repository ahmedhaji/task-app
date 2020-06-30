import { handleActions } from 'redux-actions'
import { omit } from 'lodash'

const DEFAULT_STATE = {
    tasks: {},
    isLoading: false
};

export default handleActions({
    TASK_LIST_FETCH_PENDING: (state, action) => {
        return {
            ...state,
            isLoading: true
        };
    },
    TASK_LIST_FETCH_FULFILLED: (state, action) => {
        return {
            ...state,
            tasks: action.payload,
            isLoading: false
        };
    },
    TASK_LIST_FETCH_REJECTED: (state, action) => {
        return {
            ...state,
            isLoading: false
        };
    },
    TASK_ADD: ( state, action ) => {
        const task = action.payload;
        const tasks = state.tasks;
        return {
            ...state,
            tasks: {
                ...tasks,
                [task.id]: task
            }
        }
    },
    TASK_UPDATE: ( state, action ) => {
        const task = action.payload;
        const tasks = state.tasks;
        return {
            ...state,
            tasks: {
                ...tasks,
                [task.id]: task
            }
        }
    },
    TASK_REMOVE: ( state, action ) => {
        const id = action.payload;
        const tasks = state.tasks;
        let newState = {...state};
        delete newState[id];
        return {
            ...state,
            tasks: omit(tasks,id)
        };
    }
}, DEFAULT_STATE)