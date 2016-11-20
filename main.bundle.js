var ac_main =
webpackJsonpac__name_([3],{

/***/ "./node_modules/@ngrx/core/compose.js":
/***/ function(module, exports) {

"use strict";
"use strict";
exports.compose = function () {
    var functions = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        functions[_i - 0] = arguments[_i];
    }
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        var last = functions[functions.length - 1];
        var rest = functions.slice(0, -1);
        return rest.reduceRight(function (composed, fn) { return fn(composed); }, last(arg));
    };
};


/***/ },

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js?outputStyle=compressed&sourceComments=false&!./src/app/components/layout/layout.component.scss":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "md-sidenav-layout{height:100%}md-sidenav{width:16em}\n", ""]);

// exports


/***/ },

/***/ "./node_modules/css-loader/index.js!./src/app/app.component.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ },

/***/ "./node_modules/css-loader/index.js!./src/app/pages/home/home.component.css":
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "/*styles for home content only*/", ""]);

// exports


/***/ },

/***/ "./node_modules/ngrx-store-logger/dist/index.js":
/***/ function(module, exports) {

"use strict";
"use strict";
var logger = console;
var INIT_ACTION = "@ngrx/store/init";
var repeat = function (str, times) { return (new Array(times + 1)).join(str); };
var pad = function (num, maxLength) { return repeat("0", maxLength - num.toString().length) + num; };
var formatTime = function (time) { return ("@ " + pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3)); };
var timer = typeof performance !== "undefined" && typeof performance.now === "function" ? performance : Date;
var getLogLevel = function (level, action, payload, type) {
    switch (typeof level) {
        case "object":
            return typeof level[type] === "function" ? level[type].apply(level, payload) : level[type];
        case "function":
            return level(action);
        default:
            return level;
    }
};
var printBuffer = function (options) { return function (logBuffer) {
    var actionTransformer = options.actionTransformer, collapsed = options.collapsed, colors = options.colors, timestamp = options.timestamp, duration = options.duration, level = options.level;
    logBuffer.forEach(function (logEntry, key) {
        var started = logEntry.started, startedTime = logEntry.startedTime, action = logEntry.action, error = logEntry.error;
        var prevState = logEntry.prevState.nextState ? logEntry.prevState.nextState : '(Empty)';
        var took = logEntry.took, nextState = logEntry.nextState;
        var nextEntry = logBuffer[key + 1];
        if (nextEntry) {
            nextState = nextEntry.prevState;
            took = nextEntry.started - started;
        }
        var formattedAction = actionTransformer(action);
        var isCollapsed = (typeof collapsed === "function") ? collapsed(function () { return nextState; }, action) : collapsed;
        var formattedTime = formatTime(startedTime);
        var titleCSS = colors.title ? "color: " + colors.title(formattedAction) + ";" : null;
        var title = "action " + (timestamp ? formattedTime : "") + " " + formattedAction.type + " " + (duration ? "(in " + took.toFixed(2) + " ms)" : "");
        try {
            if (isCollapsed) {
                if (colors.title)
                    logger.groupCollapsed("%c " + title, titleCSS);
                else
                    logger.groupCollapsed(title);
            }
            else {
                if (colors.title)
                    logger.group("%c " + title, titleCSS);
                else
                    logger.group(title);
            }
        }
        catch (e) {
            logger.log(title);
        }
        var prevStateLevel = getLogLevel(level, formattedAction, [prevState], "prevState");
        var actionLevel = getLogLevel(level, formattedAction, [formattedAction], "action");
        var errorLevel = getLogLevel(level, formattedAction, [error, prevState], "error");
        var nextStateLevel = getLogLevel(level, formattedAction, [nextState], "nextState");
        if (prevStateLevel) {
            if (colors.prevState)
                logger[prevStateLevel]("%c prev state", "color: " + colors.prevState(prevState) + "; font-weight: bold", prevState);
            else
                logger[prevStateLevel]("prev state", prevState);
        }
        if (actionLevel) {
            if (colors.action)
                logger[actionLevel]("%c action", "color: " + colors.action(formattedAction) + "; font-weight: bold", formattedAction);
            else
                logger[actionLevel]("action", formattedAction);
        }
        if (error && errorLevel) {
            if (colors.error)
                logger[errorLevel]("%c error", "color: " + colors.error(error, prevState) + "; font-weight: bold", error);
            else
                logger[errorLevel]("error", error);
        }
        if (nextStateLevel) {
            if (colors.nextState)
                logger[nextStateLevel]("%c next state", "color: " + colors.nextState(nextState) + "; font-weight: bold", nextState);
            else
                logger[nextStateLevel]("next state", nextState);
        }
        try {
            logger.groupEnd();
        }
        catch (e) {
            logger.log("\u2014\u2014 log end \u2014\u2014");
        }
    });
    logBuffer.length = 0;
}; };
exports.storeLogger = function (opts) {
    if (opts === void 0) { opts = {}; }
    return function (reducer) {
        var log = {};
        var ua = typeof window !== 'undefined' && window.navigator.userAgent ? window.navigator.userAgent : '';
        var ms_ie = false;
        //fix for action display in IE
        var old_ie = ua.indexOf('MSIE ');
        var new_ie = ua.indexOf('Trident/');
        if ((old_ie > -1) || (new_ie > -1)) {
            ms_ie = true;
        }
        var defaults = {
            level: "log",
            collapsed: false,
            duration: true,
            timestamp: true,
            stateTransformer: function (state) { return state; },
            actionTransformer: function (actn) { return actn; },
            colors: ms_ie ? {} : {
                title: function () { return "#000000"; },
                prevState: function () { return "#9E9E9E"; },
                action: function () { return "#03A9F4"; },
                nextState: function () { return "#4CAF50"; },
                error: function () { return "#F20404"; },
            }
        };
        var options = Object.assign({}, defaults, opts);
        var stateTransformer = options.stateTransformer;
        var buffer = printBuffer(options);
        return function (state, action) {
            var preLog = {
                started: timer.now(),
                startedTime: new Date(),
                prevState: stateTransformer(log),
                action: action
            };
            var nextState = reducer(state, action);
            var postLog = {
                took: timer.now() - preLog.started,
                nextState: stateTransformer(nextState)
            };
            log = Object.assign({}, preLog, postLog);
            //ignore init action fired by store and devtools
            if (action.type !== INIT_ACTION) {
                buffer([log]);
            }
            return nextState;
        };
    };
};


/***/ },

/***/ "./src/app/actions/filter.actions.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 *
 *
 * @class VisibilityFilterActions
 */
var VisibilityFilterActions = (function () {
    function VisibilityFilterActions() {
    }
    /**
     *
     *
     * @param {VisibilityFilter} filter
     * @returns {Action}
     *
     * @memberOf VisibilityFilterActions
     */
    VisibilityFilterActions.prototype.setFilter = function (filter) {
        return {
            type: VisibilityFilterActions.SET_FILTER,
            payload: filter,
        };
    };
    /**
     *
     * @memberOf VisibilityFilterActions
     */
    VisibilityFilterActions.SET_FILTER = '[FILTER] SET FILTER';
    return VisibilityFilterActions;
}());
exports.VisibilityFilterActions = VisibilityFilterActions;


/***/ },

/***/ "./src/app/actions/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/actions/filter.actions.ts"));
__export(__webpack_require__("./src/app/actions/todo-item.actions.ts"));
__export(__webpack_require__("./src/app/actions/todo-list.actions.ts"));


/***/ },

/***/ "./src/app/actions/todo-item.actions.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var TodoItemActions = (function () {
    function TodoItemActions() {
    }
    /**
     *
     *
     * @param {TodoItem} item The todo to be added
     * @returns {Action} The action to be dispached
     *
     * @memberOf TodoItemActions
     */
    TodoItemActions.prototype.addTodo = function (item) {
        return {
            type: TodoItemActions.ADD_TODO,
            payload: item,
        };
    };
    /**
     *
     *
     * @param {number} todoId The id of the todo to be toggled
     * @returns {Action} The action to be dispached
     *
     * @memberOf TodoItemActions
     */
    TodoItemActions.prototype.toggleTodo = function (todoId) {
        return {
            type: TodoItemActions.TOGGLE_TODO,
            payload: todoId,
        };
    };
    /**
     *
     * @memberOf TodoItemActions
     */
    TodoItemActions.ADD_TODO = '[ITEM] ADD TODO';
    /**
     *
     * @memberOf TodoItemActions
     */
    TodoItemActions.TOGGLE_TODO = '[ITEM] TOGGLE TODO';
    return TodoItemActions;
}());
exports.TodoItemActions = TodoItemActions;


/***/ },

/***/ "./src/app/actions/todo-list.actions.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var TodoListActions = (function () {
    function TodoListActions() {
    }
    /**
     * Action to add a todo item.
     *
     * @param {TodoItem} item - The item to be added.
     *
     * @returns {Action} The action to be send to the store
     */
    TodoListActions.prototype.addTodo = function (item) {
        return {
            type: TodoListActions.ADD_TODO,
            payload: item,
        };
    };
    /**
     * Action to toggle the `completed` field in a todo item.
     *
     * @param {number} todoId - The id of the item to be toggle.
     *
     * @return {Action} The action to be send to the store
     */
    TodoListActions.prototype.toggleTodo = function (todoId) {
        return {
            type: TodoListActions.TOGGLE_TODO,
            payload: todoId,
        };
    };
    TodoListActions.ADD_TODO = '[TODO] ADD TODO';
    TodoListActions.TOGGLE_TODO = '[TODO] TOGGLE TODO';
    return TodoListActions;
}());
exports.TodoListActions = TodoListActions;
;


/***/ },

/***/ "./src/app/app.component.css":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/app.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/app/app.component.html":
/***/ function(module, exports) {

module.exports = "<my-layout></my-layout>\n"

/***/ },

/***/ "./src/app/app.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular 2 decorators and services
 */
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            styles: [
                __webpack_require__("./src/app/app.component.css"),
            ],
            template: __webpack_require__("./src/app/app.component.html"),
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */


/***/ },

/***/ "./src/app/app.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/* tslint:enable:member-ordering */
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/index.js");
var md2_1 = __webpack_require__("./node_modules/md2/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var ng2_responsive_1 = __webpack_require__("./node_modules/ng2-responsive/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
/*
 * Platform and Environment providers/directives/pipes
 */
var environment_1 = __webpack_require__("./src/app/environment.ts");
var app_routes_1 = __webpack_require__("./src/app/app.routes.ts");
var app_reducer_1 = __webpack_require__("./src/app/app.reducer.ts");
// App is our top level component
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var components_1 = __webpack_require__("./src/app/components/index.ts");
var directives_1 = __webpack_require__("./src/app/directives/index.ts");
var pages_1 = __webpack_require__("./src/app/pages/index.ts");
var pipes_1 = __webpack_require__("./src/app/pipes/index.ts");
var widgets_1 = __webpack_require__("./src/app/widgets/index.ts");
var services_1 = __webpack_require__("./src/app/services/index.ts");
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule.forRoot(),
                md2_1.Md2Module.forRoot(),
                ng2_responsive_1.ResponsiveModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES, { useHash: true }),
                store_1.StoreModule.provideStore(app_reducer_1.APP_REDUCER, app_reducer_1.APP_STATE),
            ],
            declarations: [
                app_component_1.AppComponent
            ].concat(components_1.COMPONENTS, directives_1.DIRECTIVES, pages_1.PAGES, pipes_1.PIPES, widgets_1.WIDGETS),
            providers: environment_1.ENV_PROVIDERS.concat(services_1.SERVICES),
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ },

/***/ "./src/app/app.reducer.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
var compose_1 = __webpack_require__("./node_modules/@ngrx/core/compose.js");
var ngrx_store_logger_1 = __webpack_require__("./node_modules/ngrx-store-logger/dist/index.js");
var models_1 = __webpack_require__("./src/app/models/index.ts");
var reducers_1 = __webpack_require__("./src/app/reducers/index.ts");
exports.APP_STATE = {
    todos: new Array(),
    visibilityFilter: models_1.VisibilityFilter.showAll,
};
var appReducers = {
    todos: reducers_1.TODOS_REDUCER,
    visibilityFilter: reducers_1.FILTER_REDUCER,
};
var DEV_REDUCER = compose_1.compose(ngrx_store_logger_1.storeLogger(), store_1.combineReducers)(appReducers);
var PROD_REDUCER = store_1.combineReducers(appReducers);
exports.APP_REDUCER =  false
    ? PROD_REDUCER
    : DEV_REDUCER;


/***/ },

/***/ "./src/app/app.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var pages_1 = __webpack_require__("./src/app/pages/index.ts");
exports.ROUTES = [
    {
        path: 'detail', loadChildren: function () { return __webpack_require__.e/* System.import */(0).then(__webpack_require__.bind(null, "./src/modules/detail/index.ts")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; }); },
    }
].concat(pages_1.PAGES_ROUTES);


/***/ },

/***/ "./src/app/components/add-todo/add-todo.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
var actions_1 = __webpack_require__("./src/app/actions/index.ts");
var AddTodoComponent = (function () {
    function AddTodoComponent(_store) {
        this._store = _store;
        this.todoModel = {
            id: 0,
            text: null,
        };
    }
    AddTodoComponent.prototype.addTodo = function (todoForm) {
        this.todoModel.id++;
        this._store.dispatch(new actions_1.TodoListActions().addTodo(this.todoModel));
        todoForm.resetForm();
    };
    AddTodoComponent = __decorate([
        core_1.Component({
            selector: 'my-add-todo',
            template: "\n  <p>\n  <md-card>\n    <md-card-title>Input</md-card-title>\n    <form\n      (ngSubmit)=\"addTodo(todoForm)\"\n      autocomplete=\"off\"\n      #todoForm=\"ngForm\"\n    >\n      <md-card-content>\n        <md-input\n          type=\"text\"\n          name=\"todo-text\"\n          placeholder=\"insert todo\"\n          [(ngModel)]=\"todoModel.text\"\n          required\n          autofocus\n        >\n        </md-input>\n      </md-card-content>\n      <md-card-actions>\n        <button\n          type=\"submit\"\n          md-raised-button\n          color=\"primary\"\n          [disabled]=\"!todoForm.form.valid\"\n        >\n          Add Todo\n        </button>\n      </md-card-actions>\n    </form>\n  </md-card>\n  </p>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], AddTodoComponent);
    return AddTodoComponent;
    var _a;
}());
exports.AddTodoComponent = AddTodoComponent;


/***/ },

/***/ "./src/app/components/filter-button-array/filter-button-array.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var actions_1 = __webpack_require__("./src/app/actions/index.ts");
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var models_1 = __webpack_require__("./src/app/models/index.ts");
var FilterButtonArrayComponent = (function () {
    function FilterButtonArrayComponent(_store) {
        this._store = _store;
        this.filters = [
            {
                name: 'All',
                value: models_1.VisibilityFilter.showAll,
            },
            {
                name: 'Completed',
                value: models_1.VisibilityFilter.showCompleted,
            },
            {
                name: 'Pending',
                value: models_1.VisibilityFilter.showPending,
            },
        ];
        this.activeFilter$ = _store.select('visibilityFilter');
    }
    FilterButtonArrayComponent.prototype.setFilter = function (filter) {
        this._store.dispatch(new actions_1.VisibilityFilterActions().setFilter(filter));
    };
    FilterButtonArrayComponent = __decorate([
        core_1.Component({
            selector: 'my-filter-buttons-widget',
            template: "\n  <p>\n  <md-card>\n    <md-card-title>Show</md-card-title>\n    <md-card-content>\n      <md-button-toggle-group\n        name=\"filter\"\n        [value]=\"(activeFilter$ | async)\"\n      >\n        <md-button-toggle\n          md-button-primary\n          *ngFor=\"let filter of filters\"\n          [value]=\"filter.value\"\n          (click)=\"setFilter(filter.value)\"\n        >\n          {{filter.name}}\n        </md-button-toggle>\n      </md-button-toggle-group>\n    </md-card-content>\n  </md-card>\n  </p>\n  ",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], FilterButtonArrayComponent);
    return FilterButtonArrayComponent;
    var _a;
}());
exports.FilterButtonArrayComponent = FilterButtonArrayComponent;


/***/ },

/***/ "./src/app/components/footer/footer.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var FooterComponent = (function () {
    function FooterComponent() {
        this.url = 'http://github.com/michaeljota/';
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'my-footer',
            template: "\n  <footer>\n    <span>Angular 2 Ultimate Starter by <a [href]=\"url\">@michaeljota</a></span>\n  </footer>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ },

/***/ "./src/app/components/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var add_todo_component_1 = __webpack_require__("./src/app/components/add-todo/add-todo.component.ts");
var filter_button_array_component_1 = __webpack_require__("./src/app/components/filter-button-array/filter-button-array.component.ts");
var footer_component_1 = __webpack_require__("./src/app/components/footer/footer.component.ts");
var layout_component_1 = __webpack_require__("./src/app/components/layout/layout.component.ts");
var nav_list_component_1 = __webpack_require__("./src/app/components/nav-list/nav-list.component.ts");
var store_state_component_1 = __webpack_require__("./src/app/components/store-state/store-state.component.ts");
var todo_item_component_1 = __webpack_require__("./src/app/components/todo-item/todo-item.component.ts");
var visible_todo_list_component_1 = __webpack_require__("./src/app/components/visible-todo-list/visible-todo-list.component.ts");
exports.COMPONENTS = [
    add_todo_component_1.AddTodoComponent,
    filter_button_array_component_1.FilterButtonArrayComponent,
    footer_component_1.FooterComponent,
    layout_component_1.LayoutComponent,
    nav_list_component_1.NavListComponent,
    store_state_component_1.StoreStateComponent,
    todo_item_component_1.TodoItemComponent,
    visible_todo_list_component_1.VisibleTodoListComponent,
];


/***/ },

/***/ "./src/app/components/layout/layout.component.html":
/***/ function(module, exports) {

module.exports = "<md-sidenav-layout>\n  <md-sidenav #nav>\n    <md-toolbar color=\"primary\">\n      <span>My App</span>\n    </md-toolbar>\n    <my-navbar></my-navbar>\n  </md-sidenav>\n  <md-toolbar color=\"primary\">\n    <button\n      md-icon-button\n      (click)=\"nav.open()\"\n    >\n      <md-icon>menu</md-icon>\n    </button>\n    <span>Todo App Example</span>\n  </md-toolbar>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  <my-store-state></my-store-state>\n  <my-footer></my-footer>\n</md-sidenav-layout>\n"

/***/ },

/***/ "./src/app/components/layout/layout.component.scss":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/sass-loader/index.js?outputStyle=compressed&sourceComments=false&!./src/app/components/layout/layout.component.scss");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/app/components/layout/layout.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var LayoutComponent = (function () {
    function LayoutComponent() {
    }
    LayoutComponent = __decorate([
        core_1.Component({
            selector: 'my-layout',
            template: __webpack_require__("./src/app/components/layout/layout.component.html"),
            styles: [
                __webpack_require__("./src/app/components/layout/layout.component.scss"),
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutComponent);
    return LayoutComponent;
}());
exports.LayoutComponent = LayoutComponent;


/***/ },

/***/ "./src/app/components/nav-list/nav-list.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var NavListComponent = (function () {
    function NavListComponent() {
        this.navRoutes = [
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
    NavListComponent = __decorate([
        core_1.Component({
            selector: 'my-navbar',
            template: "\n  <md-nav-list>\n    <a\n      *ngFor=\"let route of navRoutes\"\n      md-list-item\n      [routerLink]=\" [ route.link ] \"\n    >\n      {{ route.title }}\n    </a>\n  </md-nav-list>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], NavListComponent);
    return NavListComponent;
}());
exports.NavListComponent = NavListComponent;


/***/ },

/***/ "./src/app/components/store-state/store-state.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var Rx_1 = __webpack_require__("./node_modules/rxjs/Rx.js");
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var StoreStateComponent = (function () {
    function StoreStateComponent(_store) {
        this.store$ = Rx_1.Observable.combineLatest(_store.select('todos'), _store.select('visibilityFilter'), function (todos, visibilityFilter) {
            return {
                todos: todos,
                visibilityFilter: visibilityFilter,
            };
        });
    }
    StoreStateComponent = __decorate([
        core_1.Component({
            selector: 'my-store-state',
            template: "\n  <p>\n  <md-card>\n    <md-card-content>\n      <pre> appState = {{ store$ | async | json }}  </pre>\n    </md-card-content>\n  </md-card>\n  </p>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], StoreStateComponent);
    return StoreStateComponent;
    var _a;
}());
exports.StoreStateComponent = StoreStateComponent;


/***/ },

/***/ "./src/app/components/todo-item/todo-item.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var actions_1 = __webpack_require__("./src/app/actions/index.ts");
var models_1 = __webpack_require__("./src/app/models/index.ts");
var TodoItemComponent = (function () {
    function TodoItemComponent(_store) {
        this._store = _store;
    }
    TodoItemComponent.prototype.toogleTodo = function () {
        this._store.dispatch(new actions_1.TodoListActions().toggleTodo(this.todo.id));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof models_1.ITodoItem !== 'undefined' && models_1.ITodoItem) === 'function' && _a) || Object)
    ], TodoItemComponent.prototype, "todo", void 0);
    TodoItemComponent = __decorate([
        core_1.Component({
            selector: 'my-todo',
            template: "\n  <md-list-item [myCompleted]=\"todo.completed\"\n    (click)=\"toogleTodo()\"\n    >\n    {{ todo.text }}\n  </md-list-item>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _b) || Object])
    ], TodoItemComponent);
    return TodoItemComponent;
    var _a, _b;
}());
exports.TodoItemComponent = TodoItemComponent;


/***/ },

/***/ "./src/app/components/visible-todo-list/visible-todo-list.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var store_1 = __webpack_require__("./node_modules/@ngrx/store/index.js");
var VisibleTodoListComponent = (function () {
    function VisibleTodoListComponent(store) {
        this.todoList$ = store.select('todos');
        this.activeFilter$ = store.select('visibilityFilter');
    }
    VisibleTodoListComponent = __decorate([
        core_1.Component({
            selector: 'my-visible-todo-list',
            template: "\n  <my-todo-list-widget\n    [todoList]=\"todoList$ | async | myVisibility: (activeFilter$ | async)\"\n  >\n  </my-todo-list-widget>\n  ",
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof store_1.Store !== 'undefined' && store_1.Store) === 'function' && _a) || Object])
    ], VisibleTodoListComponent);
    return VisibleTodoListComponent;
    var _a;
}());
exports.VisibleTodoListComponent = VisibleTodoListComponent;


/***/ },

/***/ "./src/app/directives/completed/completed.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var CompletedDirective = (function () {
    function CompletedDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    CompletedDirective.prototype.ngOnChanges = function () {
        this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', this.myCompleted ? 'line-through' : 'none');
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CompletedDirective.prototype, "myCompleted", void 0);
    CompletedDirective = __decorate([
        core_1.Directive({
            selector: '[myCompleted]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
    ], CompletedDirective);
    return CompletedDirective;
    var _a, _b;
}());
exports.CompletedDirective = CompletedDirective;


/***/ },

/***/ "./src/app/directives/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var completed_directive_1 = __webpack_require__("./src/app/directives/completed/completed.directive.ts");
var x_large_directive_1 = __webpack_require__("./src/app/directives/x-large/x-large.directive.ts");
exports.DIRECTIVES = [
    completed_directive_1.CompletedDirective,
    x_large_directive_1.XLargeDirective,
];


/***/ },

/***/ "./src/app/directives/x-large/x-large.directive.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/*
 * Directive
 * XLarge is a simple directive to show how one is made
 */
var XLargeDirective = (function () {
    function XLargeDirective(element, renderer) {
        // simple DOM manipulation to set font size to myXLarge
        // `nativeElement` is the direct reference to the DOM element
        // element.nativeElement.style.fontSize = 'myXLarge';
        // for server/webworker support use the renderer
        renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    }
    XLargeDirective = __decorate([
        core_1.Directive({
            selector: '[myXLarge]',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object, (typeof (_b = typeof core_1.Renderer !== 'undefined' && core_1.Renderer) === 'function' && _b) || Object])
    ], XLargeDirective);
    return XLargeDirective;
    var _a, _b;
}());
exports.XLargeDirective = XLargeDirective;


/***/ },

/***/ "./src/app/environment.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
// Angular 2
// rc2 workaround
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function identity(value) { return value; };
if (false) {
    // Production
    platform_browser_1.disableDebugTools();
    core_1.enableProdMode();
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(core_1.ApplicationRef);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        platform_browser_1.enableDebugTools(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();


/***/ },

/***/ "./src/app/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
__export(__webpack_require__("./src/app/app.module.ts"));


/***/ },

/***/ "./src/app/models/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/models/todo-item.ts"));
__export(__webpack_require__("./src/app/models/visibility-filter.ts"));


/***/ },

/***/ "./src/app/models/todo-item.ts":
/***/ function(module, exports) {

"use strict";
"use strict";


/***/ },

/***/ "./src/app/models/visibility-filter.ts":
/***/ function(module, exports) {

"use strict";
// tslint:disable no-bitwise
"use strict";
(function (VisibilityFilter) {
    VisibilityFilter[VisibilityFilter["showCompleted"] = 1] = "showCompleted";
    VisibilityFilter[VisibilityFilter["showPending"] = 2] = "showPending";
    VisibilityFilter[VisibilityFilter["showAll"] = 3] = "showAll";
})(exports.VisibilityFilter || (exports.VisibilityFilter = {}));
var VisibilityFilter = exports.VisibilityFilter;
;


/***/ },

/***/ "./src/app/pages/about/about.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */
console.info('`About` component loaded asynchronously');
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        console.info('hello `About` component');
        // static data that is bundled
        // var mockData = require('assets/mock-data/mock-data.json');
        // console.debug('mockData', mockData);
        // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
        this.asyncDataWithWebpack();
    };
    AboutComponent.prototype.asyncDataWithWebpack = function () {
        var _this = this;
        // you can also async load mock data with 'es6-promise-loader'
        // you would do this if you don't want the mock-data bundled
        // remember that 'es6-promise-loader' is a promise
        setTimeout(function () {
            __webpack_require__.e/* System.import */(1).then(__webpack_require__.bind(null, "./src/assets/mock-data/mock-data.json")).then(function (mod) { return (mod.__esModule && mod.default) ? mod.default : mod; })
                .then(function (json) {
                console.info('async mockData', json);
                _this.loadedData = json;
            });
        });
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'my-about',
            template: "\n  <p>\n  <md-card>\n    <md-card-title>\n      About\n    </md-card-title>\n    <md-card-content>\n      <h3>\n        Made by: <a href=\"http://github.com/michaeljota/\">@michaeljota</a>\n      </h3>\n        Largely based on the work done by angularclass. patrick@AngularClass.com\n    </md-card-content>\n  </md-card>\n  </p>\n  <p>\n  <md-card>\n    <md-card-content>\n      <pre>this.loadedData = {{ loadedData | json }}</pre>\n    </md-card-content>\n  </md-card>\n  </p>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;


/***/ },

/***/ "./src/app/pages/home/home.component.css":
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__("./node_modules/css-loader/index.js!./src/app/pages/home/home.component.css");

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ "./src/app/pages/home/home.component.html":
/***/ function(module, exports) {

module.exports = "<my-add-todo></my-add-todo>\n<my-visible-todo-list></my-visible-todo-list>\n<my-filter-buttons-widget></my-filter-buttons-widget>\n"

/***/ },

/***/ "./src/app/pages/home/home.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var services_1 = __webpack_require__("./src/app/services/index.ts");
var HomeComponent = (function () {
    // TypeScript public modifiers
    function HomeComponent(title) {
        this.title = title;
        // Set our default values
        this.localState = { value: '' };
    }
    HomeComponent.prototype.ngOnInit = function () {
        console.info('hello `Home` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    HomeComponent = __decorate([
        core_1.Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'my-home'
            selector: 'my-home',
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof services_1.TitleService !== 'undefined' && services_1.TitleService) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
exports.HomeComponent = HomeComponent;


/***/ },

/***/ "./src/app/pages/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var about_component_1 = __webpack_require__("./src/app/pages/about/about.component.ts");
var home_component_1 = __webpack_require__("./src/app/pages/home/home.component.ts");
var no_content_component_1 = __webpack_require__("./src/app/pages/no-content/no-content.component.ts");
exports.PAGES = [
    about_component_1.AboutComponent,
    home_component_1.HomeComponent,
    no_content_component_1.NoContentComponent,
];
exports.PAGES_ROUTES = [
    {
        path: '',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent,
    },
    {
        path: '**',
        component: no_content_component_1.NoContentComponent,
    },
];


/***/ },

/***/ "./src/app/pages/no-content/no-content.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    NoContentComponent = __decorate([
        core_1.Component({
            selector: 'my-no-content',
            template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], NoContentComponent);
    return NoContentComponent;
}());
exports.NoContentComponent = NoContentComponent;


/***/ },

/***/ "./src/app/pipes/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var visibility_pipe_1 = __webpack_require__("./src/app/pipes/visibility/visibility.pipe.ts");
exports.PIPES = [
    visibility_pipe_1.VisibilityPipe,
];


/***/ },

/***/ "./src/app/pipes/visibility/visibility.pipe.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var models_1 = __webpack_require__("./src/app/models/index.ts");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var VisibilityPipe = (function () {
    function VisibilityPipe() {
    }
    VisibilityPipe.prototype.transform = function (value, visibility) {
        return value.filter(function (item) {
            switch (visibility) {
                case models_1.VisibilityFilter.showAll:
                    return true;
                case models_1.VisibilityFilter.showCompleted:
                    return item.completed;
                case models_1.VisibilityFilter.showPending:
                    return !item.completed;
                default:
                    return false;
            }
        });
    };
    VisibilityPipe = __decorate([
        core_1.Pipe({
            name: 'myVisibility',
        }), 
        __metadata('design:paramtypes', [])
    ], VisibilityPipe);
    return VisibilityPipe;
}());
exports.VisibilityPipe = VisibilityPipe;


/***/ },

/***/ "./src/app/reducers/filter/filter.reducer.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var models_1 = __webpack_require__("./src/app/models/index.ts");
var actions_1 = __webpack_require__("./src/app/actions/index.ts");
exports.FILTER_REDUCER = function (state, action) {
    if (state === void 0) { state = models_1.VisibilityFilter.showAll; }
    state = isVisibilityFilter(state)
        ? state
        : models_1.VisibilityFilter.showAll;
    switch (action.type) {
        case actions_1.VisibilityFilterActions.SET_FILTER:
            return action.payload;
        default:
            return state;
    }
};
function isVisibilityFilter(filter) {
    for (var enumMember in models_1.VisibilityFilter) {
        // tslint:disable-next-line
        if (parseInt(enumMember, 10) === filter)
            return true;
    }
    return false;
}


/***/ },

/***/ "./src/app/reducers/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/reducers/filter/filter.reducer.ts"));
__export(__webpack_require__("./src/app/reducers/todo-item/todo-item.reducer.ts"));
__export(__webpack_require__("./src/app/reducers/todo-list/todo-list.reducer.ts"));


/***/ },

/***/ "./src/app/reducers/todo-item/todo-item.reducer.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var utils_1 = __webpack_require__("./src/app/utils/index.ts");
var actions_1 = __webpack_require__("./src/app/actions/index.ts");
exports.TODO_ITEM_REDUCER = function (state, action) {
    switch (action.type) {
        case actions_1.TodoItemActions.ADD_TODO:
            return {
                id: action.payload.id,
                text: action.payload.text,
                completed: false,
            };
        case actions_1.TodoItemActions.TOGGLE_TODO:
            if (state.id !== action.payload) {
                return state;
            }
            return utils_1.O.assign(state, {
                completed: !state.completed,
            });
        default:
            return state;
    }
};


/***/ },

/***/ "./src/app/reducers/todo-list/todo-list.reducer.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var index_1 = __webpack_require__("./src/app/reducers/index.ts");
var actions_1 = __webpack_require__("./src/app/actions/index.ts");
exports.TODOS_REDUCER = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case actions_1.TodoListActions.ADD_TODO:
            return state.concat([
                index_1.TODO_ITEM_REDUCER(null, new actions_1.TodoItemActions().addTodo(action.payload)),
            ]);
        case actions_1.TodoListActions.TOGGLE_TODO:
            return state.map(function (todo) {
                return index_1.TODO_ITEM_REDUCER(todo, new actions_1.TodoItemActions().toggleTodo(action.payload));
            });
        default: {
            return state;
        }
    }
};


/***/ },

/***/ "./src/app/services/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/services/title/title.service.ts"));
var title_service_2 = __webpack_require__("./src/app/services/title/title.service.ts");
exports.SERVICES = [
    title_service_2.TitleService,
];


/***/ },

/***/ "./src/app/services/title/title.service.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
var TitleService = (function () {
    function TitleService(http) {
        this.http = http;
        this.value = 'AngularClass';
    }
    TitleService.prototype.getData = function () {
        console.info('Title#getData(): Get Data');
        // return this.http.get('/assets/data.json')
        // .map(res => res.json());
        return {
            value: this.value,
        };
    };
    TitleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], TitleService);
    return TitleService;
    var _a;
}());
exports.TitleService = TitleService;


/***/ },

/***/ "./src/app/utils/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__("./src/app/utils/o/o.ts"));


/***/ },

/***/ "./src/app/utils/o/o.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
/**
 *
 *
 * @class O
 * @author: @michaeljota
 */
var O = (function () {
    function O() {
    }
    /**
     *
     * Freeze recursively objects and functions with `Object.freeze()`.
     *
     * Based on the original work of `@substack`,
     * [deep-freeze](https://github.com/substack/deep-freeze).
     *
     * @static
     * @template T
     * @param {T} o
     * @returns {T}
     *
     * @memberOf O
     */
    O.deepFreeze = function (o) {
        Object.freeze(o);
        var oIsFunction = typeof (o) === 'function';
        Object.getOwnPropertyNames(o).forEach(function (prop) {
            var propIsFreezable = oIsFunction
                ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
                : true;
            var propIsNull = prop === null;
            var propIsObjectOrFunction = typeof o[prop] === 'object' || typeof o[prop] === 'function';
            var propIsFrozen = Object.isFrozen(o[prop]);
            if (propIsFreezable && !propIsNull && propIsObjectOrFunction && !propIsFrozen) {
                O.deepFreeze(o[prop]);
            }
        });
        return o;
    };
    /**
     *
     * Seal recursively objects and functions with `Object.seal()`.
     *
     * @static
     * @template T The type of the param.
     * @param {T} o The object which should be sealed.
     * @returns {T} The object being sealed.
     *
     * @memberOf O
     */
    O.deepSeal = function (o) {
        Object.seal(o);
        var oIsFunction = typeof o === 'function';
        Object.getOwnPropertyNames(o).forEach(function (prop) {
            var propIsSealable = oIsFunction
                ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
                : true;
            var propIsNull = prop === null;
            var propIsObjectOrFunction = typeof o[prop] === 'object' || typeof o[prop] === 'function';
            var propIsSealed = Object.isSealed(o[prop]);
            if (propIsSealable && !propIsNull && propIsObjectOrFunction && !propIsSealed) {
                O.deepSeal(o[prop]);
            }
        });
        return o;
    };
    /**
     *
     * Prevent extensions recursively objects and functions with `Object.preventExtensions()`
     *
     * @static
     * @template T The type of the param.
     * @param {T} o The object which should be made non-extensible.
     * @returns {T} The object being made non-extensible.
     *
     * @memberOf O
     */
    O.deepPreventExtensions = function (o) {
        Object.preventExtensions(o);
        var oIsFunction = typeof o === 'function';
        Object.getOwnPropertyNames(o).forEach(function (prop) {
            var propIsModeable = oIsFunction
                ? prop !== 'caller' && prop !== 'callee' && prop !== 'arguments'
                : true;
            var propIsNull = prop === null;
            var propIsObjectOrFunction = typeof o[prop] === 'object' || typeof o[prop] === 'function';
            var isExtensible = Object.isExtensible(o[prop]);
            if (propIsModeable && !propIsNull && propIsObjectOrFunction && isExtensible) {
                O.deepPreventExtensions(o[prop]);
            }
        });
        return o;
    };
    /**
     * Assign objects and functions with `Object.assign()`.
     *
     * @static
     * @template T
     * @param {T} o The item to be merged
     * @param {...any[]} sources The new values to the item
     * @returns {T} A new object with the same properties that target had, but with sources values.
     *
     * @memberOf Obj
     */
    O.assign = function (o) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        sources = sources.filter(function (source) { return source !== {} || source === null || source === undefined; });
        var newO = sources
            .map(function (source) {
            var obj = {};
            Object.keys(o).forEach(function (key) {
                if (source.hasOwnProperty(key)) {
                    obj[key] = source[key];
                }
            });
            return obj;
        })
            .reduce(function (previous, current) {
            return Object.assign(previous, current);
        });
        return [o, newO]
            .reduce(function (previous, current) {
            return Object.assign(previous, current);
        }, {});
    };
    return O;
}());
exports.O = O;
;


/***/ },

/***/ "./src/app/widgets/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var todo_list_component_1 = __webpack_require__("./src/app/widgets/todo-list/todo-list.component.ts");
exports.WIDGETS = [
    todo_list_component_1.TodoListComponent,
];


/***/ },

/***/ "./src/app/widgets/todo-list/todo-list.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var TodoListComponent = (function () {
    function TodoListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TodoListComponent.prototype, "todoList", void 0);
    TodoListComponent = __decorate([
        core_1.Component({
            selector: 'my-todo-list-widget',
            template: "\n  <p>\n  <md-card>\n  <md-card-title>Todos</md-card-title>\n    <md-card-content>\n      <md-list>\n        <my-todo *ngFor=\"let todo of todoList;trackBy:todo?.id\"\n          [todo]=\"todo\"\n        ></my-todo>\n      </md-list>\n    </md-card-content>\n  </md-card>\n  </p>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;


/***/ },

/***/ "./src/main.browser.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
/*
 * Angular bootstraping
 */
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/index.js");
var environment_1 = __webpack_require__("./src/app/environment.ts");
var hmr_1 = __webpack_require__("./node_modules/@angularclass/hmr/dist/index.js");
/*
 * App Module
 * our top level module that holds all of our components
 */
var app_1 = __webpack_require__("./src/app/index.ts");
/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return platform_browser_dynamic_1.platformBrowserDynamic()
        .bootstrapModule(app_1.AppModule).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(environment_1.decorateModuleRef)
        .catch(function (err) { return console.error(err); });
}
exports.main = main;
// needed for hmr
// in prod this is replace for document ready
hmr_1.bootloader(main);


/***/ }

},["./src/main.browser.ts"]);
//# sourceMappingURL=main.map