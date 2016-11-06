import { Action } from '@ngrx/store';

import { ITodoItem } from './../models';

export class TodoItemActions {
  /**
   *
   * @memberOf TodoItemActions
   */
  public static ADD_TODO = '[ITEM] ADD TODO';
  /**
   *
   * @memberOf TodoItemActions
   */
  public static TOGGLE_TODO = '[ITEM] TOGGLE TODO';
  /**
   *
   *
   * @param {TodoItem} item The todo to be added
   * @returns {Action} The action to be dispached
   *
   * @memberOf TodoItemActions
   */
  public addTodo(item: ITodoItem): Action {
    return {
      type: TodoItemActions.ADD_TODO,
      payload: item,
    };
  }
  /**
   *
   *
   * @param {number} todoId The id of the todo to be toggled
   * @returns {Action} The action to be dispached
   *
   * @memberOf TodoItemActions
   */
  public toggleTodo(todoId: number): Action {
    return {
      type: TodoItemActions.TOGGLE_TODO,
      payload: todoId,
    };
  }
}
