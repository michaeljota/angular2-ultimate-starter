import { ITodoItem, VisibilityFilter } from './../../models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myVisibility',
})
export class VisibilityPipe implements PipeTransform {
  public transform(value: ITodoItem[], visibility: VisibilityFilter): any {
    return value.filter((item) => {
      switch (visibility) {
        case VisibilityFilter.showAll:
          return true;
        case VisibilityFilter.showCompleted:
          return item.completed;
        case VisibilityFilter.showPending:
          return !item.completed;
        default:
          return false;
      }
    });
  }
}
