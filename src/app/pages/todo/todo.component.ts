import { Component } from '@angular/core';

@Component({
  selector: 'my-todo-app',
  template: `
  <div>
    <my-add-todo></my-add-todo>
    <my-visible-todo-list></my-visible-todo-list>
    <my-filter-buttons-widget></my-filter-buttons-widget>
  </div>
  `,
})
export class TodoAppComponent {}
