import { ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';
import { ITodoItem, VisibilityFilter } from './models';

import {
  FILTER_REDUCER,
  TODOS_REDUCER,
  TodosState,
  VisibilityFilterState,
} from './reducers';

export interface IAppState {
  todos: TodosState;
  visibilityFilter: VisibilityFilterState;
}

export const APP_STATE: IAppState = {
  todos: new Array<ITodoItem>(),
  visibilityFilter: VisibilityFilter.showAll,
};

const appReducers = {
  todos: TODOS_REDUCER,
  visibilityFilter: FILTER_REDUCER,
};

const DEV_REDUCER = compose(storeLogger(), combineReducers)(appReducers);
const PROD_REDUCER = combineReducers(appReducers);

export const APP_REDUCER: ActionReducer<IAppState> =
  ENV === 'production'
  ? PROD_REDUCER
  : DEV_REDUCER;
