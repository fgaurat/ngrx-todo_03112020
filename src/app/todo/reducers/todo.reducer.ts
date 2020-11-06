import { createReducer } from '@ngrx/store';

export const initialState = [];


const _todoReducer = createReducer(initialState)

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}