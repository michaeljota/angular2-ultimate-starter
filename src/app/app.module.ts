/* tslint:enable:member-ordering */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { Md2Module }  from 'md2';
import { NgModule } from '@angular/core';
import { ResponsiveModule } from 'ng2-responsive';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
import { APP_REDUCER, APP_STATE } from './app.reducer';

// App is our top level component
import { AppComponent } from './app.component';

import { COMPONENTS } from './components';
import { DIRECTIVES } from './directives';
import { PAGES } from './pages';
import { PIPES } from './pipes';
import { WIDGETS } from './widgets';
import { SERVICES } from './services';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Md2Module.forRoot(),
    ResponsiveModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    StoreModule.provideStore(APP_REDUCER, APP_STATE),
  ],
  declarations: [
    AppComponent,
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PAGES,
    ...PIPES,
    ...WIDGETS,
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ...ENV_PROVIDERS,
    ...SERVICES,
  ],
})
export class AppModule { }
