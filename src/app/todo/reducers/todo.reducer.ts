import { createReducer, on } from '@ngrx/store';
import { loadTodoSuccess } from '../actions/todo.actions';

export const initialState = [];


const _todoReducer = createReducer(initialState,
    on(loadTodoSuccess, (state, action) => {
        let newState = action.todos
        return newState
    }),
    )

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}