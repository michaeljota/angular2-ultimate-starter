import { Action, ActionReducer } from '@ngrx/store';

import { VisibilityFilter } from './../../models';

import { VisibilityFilterActions } from './../../actions';

export type VisibilityFilterState = VisibilityFilter;

export const FILTER_REDUCER: ActionReducer<VisibilityFilter> =
  (state: VisibilityFilterState = VisibilityFilter.showAll, action: Action): VisibilityFilter => {
    state = isVisibilityFilter(state)
      ? state
      : VisibilityFilter.showAll;
    switch (action.type) {
      case VisibilityFilterActions.SET_FILTER:
        return action.payload;
      default:
        return state;
    }
  };

function isVisibilityFilter(filter: VisibilityFilter) {
  for (let enumMember in VisibilityFilter) {
    // tslint:disable-next-line
    if (parseInt(enumMember, 10) === filter) return true;
  }
  return false;
}
