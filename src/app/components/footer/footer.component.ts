import { Component } from '@angular/core';

@Component({
  selector: 'my-footer',
  template: `
  <footer>
    <span>Angular 2 Ultimate Starter by <a [href]="url">@michaeljota</a></span>
  </footer>
  `,
})
export class FooterComponent {
  public url: string = 'http://github.com/michaeljota/';
}
