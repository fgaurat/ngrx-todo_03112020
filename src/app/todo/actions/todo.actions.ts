import { createAction, props } from '@ngrx/store';
import { Todo } from '../core/todo';
import { TodoAction } from '../shared/actions.type';

export const loadTodo = createAction(TodoAction.LOAD_TODO);
export const loadTodoSuccess = createAction(TodoAction.LOAD_TODO_SUCCESS, props<{ todos }>());