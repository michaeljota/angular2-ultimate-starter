import {
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http,
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { TitleService } from './title.service';

describe('Title', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BaseRequestOptions,
      MockBackend,
      {
        provide: Http,
        useFactory: function(
          backend: ConnectionBackend,
          defaultOptions: BaseRequestOptions,
        ): Http {
          return new Http(backend, defaultOptions);
        },
        deps: [MockBackend, BaseRequestOptions],
      },
      TitleService,
    ]}));

  it('should have http', inject([ TitleService ], (title: TitleService) => {
    expect(!!title.http).toEqual(true);
  }));

  it('should get data from the server', inject([ TitleService ], (title: TitleService) => {
    spyOn(console, 'info');
    expect(console.info).not.toHaveBeenCalled();

    title.getData();
    expect(console.info).toHaveBeenCalled();
    expect(title.getData()).toEqual({ value: 'AngularClass' });
  }));

});
