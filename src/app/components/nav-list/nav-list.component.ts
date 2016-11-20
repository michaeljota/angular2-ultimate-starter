import { Component } from '@angular/core';

import { INavRoute } from './models/nav-route';

@Component({
  selector: 'my-navbar',
  template: `
  <md-nav-list>
    <a
      *ngFor="let route of navRoutes"
      md-list-item
      [routerLink]=" [ route.link ] "
    >
      {{ route.title }}
    </a>
  </md-nav-list>
  `,
})
export class NavListComponent {
  public navRoutes: INavRoute[] = [
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
