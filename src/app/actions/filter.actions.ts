import { Action } from '@ngrx/store';

import { VisibilityFilter } from './../models';

/**
 *
 *
 * @class VisibilityFilterActions
 */
export class VisibilityFilterActions {
  /**
   *
   * @memberOf VisibilityFilterActions
   */
  public static SET_FILTER = '[FILTER] SET FILTER';

  /**
   *
   *
   * @param {VisibilityFilter} filter
   * @returns {Action}
   *
   * @memberOf VisibilityFilterActions
   */
  public setFilter(filter: VisibilityFilter): Action {
    return {
      type: VisibilityFilterActions.SET_FILTER,
      payload: filter,
    };
  }
}
