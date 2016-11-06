import { Component } from '@angular/core';

import { VisibilityFilter } from './../../models';

@Component({
  selector: 'my-filter-buttons-widget',
  template: `
  <p>
    Show:
    <my-filter-button
      [filter]="filters.showAll"
    >
      All
    </my-filter-button>
    <my-filter-button
      [filter]="filters.showCompleted"
    >
      Completed
    </my-filter-button>
    <my-filter-button
      [filter]="filters.showPending"
    >
      Pending
    </my-filter-button>
  </p>
  `,
})
export class FilterButtonArrayComponent {
  public filters = VisibilityFilter;
}
