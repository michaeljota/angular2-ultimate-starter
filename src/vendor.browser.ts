// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module

// TODO(gdi2290): switch to DLLs

// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/compiler';
import '@angular/forms';
import '@angular/http';
import '@angular/router';

// ngrx
import '@ngrx/core'
import '@ngrx/store';

// Material Design
import '@angular/material';
import 'md2';
import './material.theme.scss';
import './material.icons.scss';

// Extra Angular2 modules
import 'ng2-responsive';

// AngularClass
import '@angularclass/hmr';

// RxJS
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

if ('production' === ENV) {
  // Production

} else {
  // Development

}
