import { Action, ActionReducer } from '@ngrx/store';
import { O } from './../../utils';

import { ITodoItem } from './../../models';

import { TodoItemActions } from './../../actions';

export type TodoItemState = ITodoItem;

export const TODO_ITEM_REDUCER: ActionReducer<TodoItemState> =
  (state: TodoItemState, action: Action): TodoItemState => {
    switch (action.type) {
      case TodoItemActions.ADD_TODO:
        return {
          id: action.payload.id,
          text: action.payload.text,
          completed: false,
        };

      case TodoItemActions.TOGGLE_TODO:
        if (state.id !== action.payload) {
          return state;
        }
        return O.assign<ITodoItem>(
          state,
          {
            completed: !state.completed,
          },
        );
      default:
        return state;
    }
  };
