## File Structure
We use the component approach in our starter. This is the new standard for developing Angular apps and a great way to ensure maintainable code by encapsulation of our behavior logic. A component is basically a self contained app usually in a single file or a folder with each concern as a file: style, template, specs, e2e, and component class. Here's how it looks:
```
angular2-webpack-starter/
 ├── config/                              * our configuration
 │    ├── helpers.js                      * helper functions for our configuration files
 │    ├── spec-bundle.js                  * ignore this magic that sets up our angular 2 testing environment
 │    ├── karma.conf.js                   * karma config for our unit tests
 │    ├── protractor.conf.js              * protractor config for our end-to-end tests
 │    ├── webpack.dev.js                  * our development webpack config
 │    ├── webpack.prod.js                 * our production webpack config
 │    └── webpack.test.js                 * our testing webpack config
 │
 ├── src/                                 * our source files that will be compiled to javascript
 │    ├── main.browser.ts                 * our entry file for our browser environment
 │    │
 │    ├── index.html                      * Index.html: where we generate our index page
 │    │
 │    ├── polyfills.ts                    * our polyfills file
 │    │
 │    ├── vendor.ts                       * our vendor file
 │    │
 │    ├── app/                            * WebApp: folder
 │    │   ├── app.component.ts            * AppComponent: a simple version of our App component components
 │    │   ├── app.component.spec.ts       * a simple test of components in app.ts
 │    │   ├── app.component.e2e.ts        * a simple end-to-end test for /
 │    │   ├── app.constants.ts            * All the aplication constants
 │    │   ├── app.module.ts               * AppModule: The main module of the aplicaction
 │    │   ├── app.reducer.ts              * The main reducer for the aplication, and the initial state
 │    │   ├── app.reducer.spec.ts         * The tests for the aplication reducer
 │    │   ├── app.routes.ts               * The routes of the aplication
 │    │   ├── environment.ts              * The app environment variables and modules
 │    │   │
 │    │   ├── actions                     * All the aplications actions dispatchables
 │    │   ├── components                  * All the aplications components
 │    │   ├── directives                  * All the aplications directives
 │    │   ├── models                      * All the aplications models
 │    │   ├── pages                       * All the aplications pages components
 │    │   ├── pipes                       * All the aplications pipes
 │    │   ├── presentationals             * All the aplications presentationals components
 │    │   ├── reducers                    * All the aplications reducers
 │    │   ├── services                    * All the aplications services
 │    │   └── utils                       * All the aplications utilities, or functions that does not fit anywhere else
 │    │
 │    └── assets/                         * static assets are served here
 │         ├──icon/                       * our list of icons from www.favicon-generator.org
 │         ├──service-worker.js           * ignore this. Web App service worker that's not complete yet
 │         ├──robots.txt                  * for search engines to crawl your website
 │         └──humans.txt                  * for humans to know who the developers are
 │
 │
 ├── tslint.json                          * typescript lint config
 ├── typedoc.json                         * typescript documentation generator
 ├── tsconfig.json                        * config that webpack uses for typescript
 ├── package.json                         * what npm uses to manage it's dependencies
 └── webpack.config.js                    * webpack main configuration file

```

### Actions
The actions that should be dispatched to the store.
Should be classes with statics enum-like strings, and non-static functions

```
actions/
 ├── <name>.action.ts                     * The action with constants and funtions
 └── index.ts                             * Single barrel file for all the actions
```

### Components
The containers components of the aplication. They should handle all the logic
and handle all the users inputs. Note that there is not need for a separate template

```
components/
 ├── <name>/
 │    ├── <name>.component.ts             * The component controller.
 │    ├── <name>.component.spec.ts        * The unit tests of the component.
 │    ├── <name>.component.html           * The component template. [Optional]
 │    └── <name>.component.scss           * The component styles. [Optional]
 └── index.ts                             * Single barrel file for all the components.
```

### Directives
The directives, both attributte and structural. 

```
directives/
 ├── <name>/
 │    ├── <name>.directive.ts             * The directive controller.
 │    └── <name>.directive.spec.ts        * The unit tests of the directive.
 └── index.ts                             * Single barrel file for all the components.
```

### Models
All the aplication models, except for `reducers states`. They should be an 'Interface' or an 'Enum'.

```
models/
 ├── <name>.ts                            * The model file.
 └── index.ts                             * Single barrel file for all the actions
```

### Pages
All the actual pages of the application. They should handle no logic, and
their behavior should be the same as a presentational component. However, 
e2e test must be placed here, and every page should test the behavior of
the containers components of its own.

```
pages/
 ├── <name>/
 │    ├── <name>.component.ts             * The pages component controller.
 │    ├── <name>.component.spec.ts        * The unit tests of the page component.
 │    ├── <name>.component.e2e-spec.ts    * The e2e tests of the page component.
 │    ├── <name>.component.html           * The pages component template.
 │    └── <name>.component.scss           * The pages component styles.
 └── index.ts                             * Single barrel file for all the pages.
```

### Pipes
The pipes of the application. 

```
pipes/
 ├── <name>/
 │    ├── <name>.pipe.ts                  * The pipe controller.
 │    └── <name>.pipe.spec.ts             * The unit tests of the pipe.
 └── index.ts                             * Single barrel file for all the pipes.
```

### Presentationals
All the presentationals components. They should handle no logic. Because of this
there is not need for unit testing.

```
presentationals/
 ├── <name>/
 │    ├── <name>.component.ts             * The presentationals component controller.
 │    ├── <name>.component.html           * The component template. [Optional]
 │    └── <name>.component.scss           * The component styles. [Optional]
 └── index.ts                             * Single barrel file for all the components.
```

### Reducers
The reducers. They should be export as constants.

```
reducers/
 ├── <name>/
 │    ├── <name>.reducer.ts               * The reducer controller.
 │    └── <name>.reducer.spec.ts          * The unit tests of the reducer.
 └── index.ts                             * Single barrel file for all the reducers.
```

### Services


```
services/
 ├── <name>/
 │    ├── <name>.services.ts              * The service controller.
 │    └── <name>.services.spec.ts         * The unit tests of the service.
 └── index.ts                             * Single barrel file for all the service.
```