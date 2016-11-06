import { Component, Input } from '@angular/core';

import { INavRoute } from './../../models/nav-route';

@Component({
  selector: 'my-navbar-widget',
  template:
  `
  <nav>
    <span *ngFor="let route of routes; let last = last">
      <a [routerLink]=" [ route.link ] ">
        {{ route.title }}
      </a>
      <span *ngIf="!last"> | </span>
    </span>
  </nav>
  `,
})
export class NavbarWidgetComponent {
  @Input() public routes: INavRoute[] = [];
}
