import { NgForm } from '@angular/forms/src/directives';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAppState } from '../../app.reducer';

import { TodoListActions } from '../../actions';
import { ITodoItem } from '../../models';

@Component({
  selector: 'my-add-todo',
  template: `
  <form
    (ngSubmit)="addTodo(todoForm)"
    autocomplete="off"
    #todoForm="ngForm"
  >

    <input
      type="text"
      name="todo-text"
      placeholder="insert todo"
      [(ngModel)]="todoModel.text"
      required
      autofocus
    />
    <button type="submit" [disabled]="!todoForm.form.valid">Add Todo</button>
  </form>
  `,
})
export class AddTodoComponent {
  public todoModel: ITodoItem = {
    id: 0,
    text: null,
  };

  constructor(
    private _store: Store<IAppState>,
  ) { }

  public addTodo(todoForm: NgForm) {
    this.todoModel.id++;
    this._store.dispatch(new TodoListActions().addTodo(this.todoModel));
    todoForm.resetForm();
  }
}
