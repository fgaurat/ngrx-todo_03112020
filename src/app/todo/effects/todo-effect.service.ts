import { Injectable } from '@angular/core';
import { switchMap,map } from 'rxjs/operators';
import { createEffect,Actions, ofType } from '@ngrx/effects';
import { TodoAction } from '../shared/actions.type';
import { TodoService } from '../shared/todo.service';
import { loadTodoSuccess } from '../actions/todo.actions';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  loadTodos$ = createEffect( () =>this.actions$.pipe(
    ofType(TodoAction.LOAD_TODO),
    switchMap(action => this.todoService.findAll()),
    map(todos => loadTodoSuccess({todos}))
  ));

  constructor(private actions$: Actions, private todoService:TodoService) { }
}
