webpackJsonpac__name_([0],{

/***/ "./src/modules/detail/detail.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var DetailComponent = (function () {
    function DetailComponent() {
    }
    DetailComponent.prototype.ngOnInit = function () {
        console.info('hello `Detail` component');
    };
    DetailComponent = __decorate([
        core_1.Component({
            selector: 'my-detail',
            template: "\n    <h1>Hello from Detail</h1>\n    <router-outlet></router-outlet>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;


/***/ },

/***/ "./src/modules/detail/detail.routes.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var detail_component_1 = __webpack_require__("./src/modules/detail/detail.component.ts");
// async components must be named routes for WebpackAsyncRoute
exports.ROUTES = [
    { path: '', component: detail_component_1.DetailComponent, pathMatch: 'full' },
];


/***/ },

/***/ "./src/modules/detail/index.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var detail_component_1 = __webpack_require__("./src/modules/detail/detail.component.ts");
var detail_routes_1 = __webpack_require__("./src/modules/detail/detail.routes.ts");
console.info('`Detail` bundle loaded asynchronously');
var DetailModule = (function () {
    function DetailModule() {
    }
    DetailModule.routes = detail_routes_1.ROUTES;
    DetailModule = __decorate([
        core_1.NgModule({
            declarations: [
                // Components / Directives/ Pipes
                detail_component_1.DetailComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(detail_routes_1.ROUTES),
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], DetailModule);
    return DetailModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailModule;


/***/ }

});
//# sourceMappingURL=0.map