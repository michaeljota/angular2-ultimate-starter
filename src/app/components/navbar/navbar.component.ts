import { Component } from '@angular/core';

import { INavRoute } from './models/nav-route';

@Component({
  selector: 'my-navbar',
  template: `
  <my-navbar-widget
    [routes]="navRoutes"
  ></my-navbar-widget>
  `,
})
export class NavbarComponent {
  public navRoutes: INavRoute[] = [
    {
      link: './',
      title: 'Index',
    },
    {
      link: './home',
      title: 'Home',
    },
    {
      link: './detail',
      title: 'Detail',
    },
    {
      link: './about',
      title: 'About',
    },
  ];
}
