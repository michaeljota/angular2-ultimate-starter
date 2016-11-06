import { Component, OnInit } from '@angular/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.info('`About` component loaded asynchronously');

@Component({
  selector: 'my-about',
  template: `
    <h1>About</h1>
    <div>
      <h3>
        Made by: <a href="http://github.com/michaeljota/">@michaeljota</a>
      </h3>
        Largely based on the work done by angularclass. patrick@AngularClass.com
    </div>
    <pre>this.loadedData = {{ loadedData | json }}</pre>
  `,
})
export class AboutComponent implements OnInit {
  public loadedData: any;

  public ngOnInit(): void {
    console.info('hello `About` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.debug('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
  }
  private asyncDataWithWebpack(): void {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('./../../../assets/mock-data/mock-data.json')
        .then(json => {
          console.info('async mockData', json);
          this.loadedData = json;
        });

    });
  }

}
