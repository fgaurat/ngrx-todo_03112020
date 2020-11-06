import { createAction } from '@ngrx/store';
import { TodoAction } from '../shared/actions.type';

export const loadTodo = createAction(TodoAction.LOAD_TODO);
export const loadTodoSuccess = createAction(TodoAction.LOAD_TODO_SUCCESS);