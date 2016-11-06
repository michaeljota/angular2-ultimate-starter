import { Component, Input } from '@angular/core';

import { ITodoItem } from './../../models';

@Component({
  selector: 'my-todo-list-widget',
  template: `
  <ul>
    <my-todo *ngFor="let todo of todoList;trackBy:todo?.id"
      [todo]="todo"
    ></my-todo>
  </ul>
  `,
})
export class TodoListComponent {
  @Input() public todoList: ITodoItem[];
}
