import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { IAppState } from '../../app.reducer';
import { ITodoItem, VisibilityFilter } from '../../models';

@Component({
  selector: 'my-visible-todo-list',
  template: `
  <my-todo-list-widget
    [todoList]="todoList$ | async | myVisibility: (activeFilter$ | async)"
  >
  </my-todo-list-widget>
  `,
})
export class VisibleTodoListComponent {
  public todoList$: Observable<ITodoItem[]>;
  public activeFilter$: Observable<VisibilityFilter>;

  constructor(store: Store<IAppState>) {
    this.todoList$ = store.select<ITodoItem[]>('todos');
    this.activeFilter$ = store.select<VisibilityFilter>('visibilityFilter');
  }
}
