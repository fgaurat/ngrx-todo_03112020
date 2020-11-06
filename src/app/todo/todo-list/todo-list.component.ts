import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList$:Observable<any>

  constructor(private store: Store<any>) { 
    this.todoList$ = store.select('todos');
  }

  ngOnInit(): void {
  }

}
