import { Injectable } from '@angular/core';

import { ITitle } from './title.service.model';

@Injectable()
export class TitleServiceMock implements ITitle {
  private value = 'AngularClass';

  public getData(): {value} {
    // It is almost the same, cause we are not quering http in the original service.
    return {
      value: this.value,
    };
  }

}
