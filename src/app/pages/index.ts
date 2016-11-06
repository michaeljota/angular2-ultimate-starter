import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NoContentComponent } from './no-content/no-content.component';

export const PAGES = [
  AboutComponent,
  HomeComponent,
  NoContentComponent,
];

export const PAGES_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: NoContentComponent,
  },
];
