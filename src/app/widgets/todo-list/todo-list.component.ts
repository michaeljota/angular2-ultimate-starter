import { Component, Input } from '@angular/core';

import { ITodoItem } from './../../models';

@Component({
  selector: 'my-todo-list-widget',
  template: `
  <p>
  <md-card>
  <md-card-title>Todos</md-card-title>
    <md-card-content>
      <md-list>
        <my-todo *ngFor="let todo of todoList;trackBy:todo?.id"
          [todo]="todo"
        ></my-todo>
      </md-list>
    </md-card-content>
  </md-card>
  </p>
  `,
})
export class TodoListComponent {
  @Input() public todoList: ITodoItem[];
}
