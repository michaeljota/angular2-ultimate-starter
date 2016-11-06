import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailComponent } from './detail.component';
import { ROUTES } from './detail.routes';

console.info('`Detail` bundle loaded asynchronously');

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    DetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
  ],
})
export default class DetailModule {
  public static routes = ROUTES;
}
