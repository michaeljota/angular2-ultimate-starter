import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ITitle } from './title.service.model';

@Injectable()
export class TitleService implements ITitle {
  private value = 'AngularClass';

  constructor(public http: Http) {
  }

  public getData(): {value} {
    console.info('Title#getData(): Get Data');
    // return this.http.get('/assets/data.json')
    // .map(res => res.json());
    return {
      value: this.value,
    };
  }

}
