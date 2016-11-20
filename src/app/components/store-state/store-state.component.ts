import { TodosState, VisibilityFilterState } from '../../reducers';
import { Observable } from 'rxjs/Rx';
import { IAppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'my-store-state',
  template: `
  <p>
  <md-card>
    <md-card-content>
      <pre> appState = {{ store$ | async | json }}  </pre>
    </md-card-content>
  </md-card>
  </p>
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
