import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import { VisibilityFilter } from './../../models';
import { VisibilityFilterActions } from './../../actions';
import { IAppState } from './../../app.reducer';

@Component({
  selector: 'my-filter-button',
  template: `
    <button
      (click)="setFilter()"
      [disabled]="isFilterActive((activeFilter$ | async))"
    >
      <ng-content></ng-content>
    </button>
    `,
})
export class FilterButtonComponent {
  @Input() public filter: VisibilityFilter;
  private activeFilter$: Observable<VisibilityFilter>;

  constructor(private _store: Store<IAppState>) {
    this.activeFilter$ = _store.select<VisibilityFilter>('visibilityFilter');
  }

  public setFilter(): void {
    this._store.dispatch(new VisibilityFilterActions().setFilter(this.filter));
  }

  public isFilterActive(activeFilter: VisibilityFilter): boolean {
    return this.filter === activeFilter;
  }
}
