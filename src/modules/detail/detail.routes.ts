import { Routes } from '@angular/router';
import { DetailComponent } from './detail.component';

// async components must be named routes for WebpackAsyncRoute
export const ROUTES: Routes = [
  { path: '', component: DetailComponent, pathMatch: 'full' },
];
