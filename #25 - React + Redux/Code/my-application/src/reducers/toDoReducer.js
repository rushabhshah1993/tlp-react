import * as actionTypes from './../store/action_types';

const initialState = {
    todos: []
};

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_TODO: {
            //Add code to add the todos
            let todoItems = {
                todos: [...state.todos]
            };
            todoItems.todos.push(action.items);
            return todoItems;
        }
        default: return state;
    }
}

export default reducer;
