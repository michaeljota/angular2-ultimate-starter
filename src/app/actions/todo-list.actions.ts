import { Action } from '@ngrx/store';

import { ITodoItem } from './../models';

export class TodoListActions {
  public static ADD_TODO = '[TODO] ADD TODO';
  public static TOGGLE_TODO = '[TODO] TOGGLE TODO';

  /**
   * Action to add a todo item.
   *
   * @param {TodoItem} item - The item to be added.
   *
   * @returns {Action} The action to be send to the store
   */
  public addTodo(item: ITodoItem): Action {
    return {
      type: TodoListActions.ADD_TODO,
      payload: item,
    };
  }

  /**
   * Action to toggle the `completed` field in a todo item.
   *
   * @param {number} todoId - The id of the item to be toggle.
   *
   * @return {Action} The action to be send to the store
   */
  public toggleTodo(todoId: number): Action {
    return {
      type: TodoListActions.TOGGLE_TODO,
      payload: todoId,
    };
  }
};
