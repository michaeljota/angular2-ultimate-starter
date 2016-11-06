import { Routes } from '@angular/router';
import { PAGES_ROUTES } from './pages';

export const ROUTES: Routes = [
  {
    path: 'detail', loadChildren: () => System.import('./../modules/detail'),
  },
  ...PAGES_ROUTES,
];
