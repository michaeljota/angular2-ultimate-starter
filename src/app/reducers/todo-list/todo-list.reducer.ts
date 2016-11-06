import { Action, ActionReducer } from '@ngrx/store';

import { ITodoItem } from './../../models';
import { TODO_ITEM_REDUCER } from './../index';

import { TodoItemActions, TodoListActions } from './../../actions';

export type TodosState = ITodoItem[];

export const TODOS_REDUCER: ActionReducer<TodosState> =
  (state: TodosState = [], action: Action): TodosState => {
    switch (action.type) {
      case TodoListActions.ADD_TODO:
        return [
          ...state,
          TODO_ITEM_REDUCER(null, new TodoItemActions().addTodo(action.payload)),
        ];
      case TodoListActions.TOGGLE_TODO:
        return state.map(todo => {
          return TODO_ITEM_REDUCER(todo, new TodoItemActions().toggleTodo(action.payload));
        });
      default: {
        return state;
      }
    }
  };
