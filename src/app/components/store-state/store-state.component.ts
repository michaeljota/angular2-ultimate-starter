import { TodosState, VisibilityFilterState } from '../../reducers';
import { Observable } from 'rxjs/Rx';
import { IAppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'my-store-state',
  template: `
    <pre> appState = {{ store$ | async | json }}  </pre>
  `,
})
export class StoreStateComponent {
  public store$: Observable<IAppState>;

  constructor(_store: Store<IAppState>) {
    this.store$ = Observable.combineLatest(
      _store.select('todos'),
      _store.select('visibilityFilter'),
      (todos: TodosState, visibilityFilter: VisibilityFilterState): IAppState => {
        return {
          todos,
          visibilityFilter,
        }
    });
  }
}
