import { createReducer } from '@ngrx/store';

export const initialState = [
    {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true,
        "dueDate": 1582620058000
      },
      {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false,
        "dueDate": 1582620058000
      },
      {
        "userId": 1,
        "id": 14,
        "title": "repellendus sunt dolores architecto voluptatum",
        "completed": true,
        "dueDate": 1582620058000
      }
];


const _todoReducer = createReducer(initialState)

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}