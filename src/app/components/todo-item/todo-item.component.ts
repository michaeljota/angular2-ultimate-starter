import { IAppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

import { TodoListActions } from './../../actions';
import { ITodoItem } from './../../models';

@Component({
  selector: 'my-todo',
  template: `
  <md-list-item [myCompleted]="todo.completed"
    (click)="toogleTodo()"
    >
    {{ todo.text }}
  </md-list-item>
  `,
})
export class TodoItemComponent {
  @Input() public todo: ITodoItem;

  constructor(private _store: Store<IAppState>) {}

  public toogleTodo() {
    this._store.dispatch(new TodoListActions().toggleTodo(this.todo.id));
  }
}
