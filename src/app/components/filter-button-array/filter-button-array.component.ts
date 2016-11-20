import { AsyncPipe } from '@angular/common/src/pipes/async_pipe';
import { Observable } from 'rxjs/Rx';
import { IAppState } from '../../app.reducer';
import { VisibilityFilterActions } from '../../actions';
import { Store } from '@ngrx/store';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

import { VisibilityFilter } from './../../models';

@Component({
  selector: 'my-filter-buttons-widget',
  template: `
  <p>
  <md-card>
    <md-card-title>Show</md-card-title>
    <md-card-content>
      <md-button-toggle-group
        name="filter"
        [value]="(activeFilter$ | async)"
      >
        <md-button-toggle
          md-button-primary
          *ngFor="let filter of filters"
          [value]="filter.value"
          (click)="setFilter(filter.value)"
        >
          {{filter.name}}
        </md-button-toggle>
      </md-button-toggle-group>
    </md-card-content>
  </md-card>
  </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterButtonArrayComponent {
  public filters = [
    {
      name: 'All',
      value: VisibilityFilter.showAll,
    },
    {
      name: 'Completed',
      value: VisibilityFilter.showCompleted,
    },
    {
      name: 'Pending',
      value: VisibilityFilter.showPending,
    },
  ];

  public activeFilter$: Observable<VisibilityFilter>;

  constructor(private _store: Store<IAppState>) {
    this.activeFilter$ = _store.select<VisibilityFilter>('visibilityFilter');
  }

  public setFilter(filter: VisibilityFilter): void {
    this._store.dispatch(new VisibilityFilterActions().setFilter(filter));
  }
}
