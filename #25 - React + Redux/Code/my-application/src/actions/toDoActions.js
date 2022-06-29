import * as actionTypes from './../store/action_types';

export const addItemsToDo = data => {
    return {
        type: actionTypes.ADD_TODO,
        items: data
    }
}
