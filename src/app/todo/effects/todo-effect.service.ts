import { Injectable } from '@angular/core';
import { createEffect,Actions, ofType } from '@ngrx/effects';
import { TodoService } from '../shared/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  loadTodos$ = createEffect( () =>this.actions$.pipe(
    ofType('[Movies Page] Load Movies'),
  ));

  constructor(private actions$: Actions, private todoService:TodoService) { }
}
