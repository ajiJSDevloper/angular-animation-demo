(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content\">\n  <app-header></app-header>\n  <div class=\"list-container style-scroll\">\n    <app-poster-list></app-poster-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-content {\n  background: #171717;\n  height: 100%;\n  overflow: hidden; }\n\n.list-container {\n  height: 100%;\n  overflow: hidden; }\n\n.list-container app-poster-list {\n    width: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componnets_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componnets/header/header.component */ "./src/app/componnets/header/header.component.ts");
/* harmony import */ var _componnets_poster_list_poster_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componnets/poster-list/poster-list.component */ "./src/app/componnets/poster-list/poster-list.component.ts");
/* harmony import */ var _componnets_poster_list_items_poster_list_items_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componnets/poster-list-items/poster-list-items.component */ "./src/app/componnets/poster-list-items/poster-list-items.component.ts");
/* harmony import */ var _componnets_search_list_search_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componnets/search-list/search-list.component */ "./src/app/componnets/search-list/search-list.component.ts");
/* harmony import */ var _componnets_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componnets/loader/loader.component */ "./src/app/componnets/loader/loader.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'home', component: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _componnets_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _componnets_poster_list_poster_list_component__WEBPACK_IMPORTED_MODULE_9__["PosterListComponent"],
                _componnets_poster_list_items_poster_list_items_component__WEBPACK_IMPORTED_MODULE_10__["PosterListItemsComponent"],
                _componnets_search_list_search_list_component__WEBPACK_IMPORTED_MODULE_11__["SearchListComponent"],
                _componnets_loader_loader_component__WEBPACK_IMPORTED_MODULE_12__["LoaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_4__["InfiniteScrollModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes, {
                    useHash: true
                })
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componnets/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/componnets/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header flex-align\">\n  <div class=\"flex-align\">\n    <button type=\"button\" class=\"icon-btn\">\n      <img src=\"assets/icons/back.png\">\n    </button>\n  </div>\n  <div class=\"flex-align-end w-100\">\n    <!-- <form class=\"w-100 search-form\" (submit)=\"searchOpt($event)\" [formGroup]=\"searchForm\"> -->\n      <span class=\"title\" [@searchBoxAnimation]=\"searchState\">Romantic comedy</span>\n      <input [formControl]=\"searchText\" (focus)=\"focusText()\" (focusout)=\"focusOutText()\" placeholder=\"Search for shows, movies, sports etc..\"\n        [@searchTextAnimation]=\"searchState\" class=\"search\" type=\"text\">\n    <!-- </form> -->\n  </div>\n  <button type=\"button\" class=\"icon-btn\" (click)=\"toggleSearch()\">\n    <img src=\"assets/icons/search.png\">\n  </button>\n</header>\n<app-search-list [loading]=\"_loading\" [data]=\"results\" [searched]=\"searched\" [@searchListAnimation]=\"searchListToggler\" class=\"searchWrapper\"></app-search-list>\n"

/***/ }),

/***/ "./src/app/componnets/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/componnets/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header {\n  height: 70px;\n  overflow: hidden;\n  padding: 0px 15px;\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAACoCAYAAAAFOV7fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFpJREFUeNrs28EJwCAUBUFN0n/DCRgtY2EGbMDj8v4cY6wBAAAAEHb5AgAAAKBO4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAg79lv+QYAAACg7ASOzzcAAAAAZQIHAAAAkHcCx+sbAAAAgDILDgAAACDPggMAAADIs+AAAAAA8gQOAAAAIM+JCgAAAJBnwQEAAADkWXAAAAAAeRYcAAAAQJ7AAQAAAOQ5UQEAAADyLDgAAACAPAsOAAAAIM+CAwAAAMiz4AAAAADyLDgAAACAPIEDAAAAyHOiAgAAAORZcAAAAAB5FhwAAABAngUHAAAAkCdwAAAAAHlOVAAAAIA8Cw4AAAAgz4IDAAAAyLPgAAAAAPIEDgAAACDPiQoAAACQZ8EBAAAA5FlwAAAAAHkWHAAAAECeBQcAAACQZ8EBAAAA5AkcAAAAQJ4TFQAAACDPggMAAADIs+AAAAAA8iw4AAAAgDyBAwAAAMhzogIAAADkWXAAAAAAeRYcAAAAQJ4FBwAAAJAncAAAAAB5TlQAAACAPAsOAAAAIM+CAwAAAMiz4AAAAADyBA4AAAAgz4kKAAAAkGfBAQAAAORZcAAAAAB5FhwAAABAngUHAAAAkDf3u30DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFD0CzAAJFo6q4ZAlCMAAAAASUVORK5CYII=\");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  position: absolute;\n  width: calc(100% - 30px); }\n  .app-header .title {\n    font-size: 20px;\n    padding-left: 15px;\n    width: 100%;\n    text-align: 'left'; }\n  .app-header .search {\n    width: 100%;\n    margin: 0px 5px;\n    border-radius: 8px;\n    border: none;\n    outline: none;\n    padding: 8px;\n    position: relative;\n    z-index: 100; }\n  .search-form {\n  height: 0;\n  background: transparent; }\n  .searchWrapper {\n  position: absolute;\n  top: 70px;\n  width: 100%;\n  overflow: hidden; }\n"

/***/ }),

/***/ "./src/app/componnets/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/componnets/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
        this.searchState = 'hide';
        this.searchListToggler = 'hide';
        this.searchText = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null);
        this.results = [];
        this._loading = false;
        this.searched = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            searchText: this.searchText
        });
        this.searchText.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (inputVal) { return _this.doSearch(inputVal); }))
            .subscribe(function (_d) {
            _this.results = [];
            if (_d.length > 0) {
                (_a = _this.results).push.apply(_a, _d);
            }
            else
                _this.results = [];
            _this._loading = false;
            var _a;
        }, function (_err) {
            _this.results = [];
            _this._loading = false;
        });
    };
    HeaderComponent.prototype.doSearch = function (term) {
        this.searchListToggler = 'show';
        this._loading = true;
        this.searched = true;
        // if (term === '') this.searchListToggler = 'hide'
        return this.dataService.search(term);
    };
    HeaderComponent.prototype.toggleSearch = function () {
        this.searchListToggler = 'hide';
        this.searchState = (this.searchState === 'show' ? 'hide' : 'show');
        if (this.searchState == 'show' && this.results.length > 0) {
            this.searchListToggler = 'show';
        }
    };
    HeaderComponent.prototype.focusText = function () {
        // this.searchListToggler = 'show'
    };
    HeaderComponent.prototype.focusOutText = function () {
        // this.searchListToggler = 'hide'
    };
    HeaderComponent.prototype.searchOpt = function (ev) {
        ev.preventDefault();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/componnets/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/componnets/header/header.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('searchBoxAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '100%',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                        width: '0',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show => hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0, }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, width: '50%', offset: 0.5 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, width: '100%', offset: 1 }),
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hide => show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, offset: 0 })
                        ]))
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('searchTextAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '100%',
                        display: 'block'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        width: '0',
                        display: 'none',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show <=> hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ])
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('searchListAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '100%',
                        display: 'block'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        height: '0%',
                        display: 'none',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('show <=> hide', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/componnets/loader/loader.component.html":
/*!*********************************************************!*\
  !*** ./src/app/componnets/loader/loader.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-loader\">\n  <!-- <div class=\"spinner\"></div> -->\n  <svg version=\"1.1\" id=\"loader-1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n    width=\"25px\" height=\"25px\" viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\">\n    <path fill=\"#000\" d=\"M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z\">\n      <animateTransform attributeType=\"xml\" attributeName=\"transform\" type=\"rotate\" from=\"0 25 25\" to=\"360 25 25\" dur=\"0.5s\" repeatCount=\"indefinite\"\n      />\n    </path>\n  </svg>\n</div>"

/***/ }),

/***/ "./src/app/componnets/loader/loader.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/componnets/loader/loader.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-loader {\n  text-align: center;\n  display: block;\n  margin: 0px auto; }\n  #app-loader svg path,\n  #app-loader svg rect {\n    fill: #53bc76; }\n"

/***/ }),

/***/ "./src/app/componnets/loader/loader.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/componnets/loader/loader.component.ts ***!
  \*******************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoaderComponent = /** @class */ (function () {
    function LoaderComponent() {
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__(/*! ./loader.component.html */ "./src/app/componnets/loader/loader.component.html"),
            styles: [__webpack_require__(/*! ./loader.component.scss */ "./src/app/componnets/loader/loader.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/componnets/poster-list-items/poster-list-items.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/componnets/poster-list-items/poster-list-items.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"poster-list-item\" [@onEnterItem]>\n  <div class=\"poster\">\n    <img src=\"assets/poster/{{data['poster-image']}}\" (error)=\"updateUrl($event)\" alt=\"{{data['poster-image']}}\">\n  </div>\n  <div class=\"label\">\n    <p>{{data.name}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/componnets/poster-list-items/poster-list-items.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/componnets/poster-list-items/poster-list-items.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componnets/poster-list-items/poster-list-items.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/componnets/poster-list-items/poster-list-items.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PosterListItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterListItemsComponent", function() { return PosterListItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosterListItemsComponent = /** @class */ (function () {
    function PosterListItemsComponent() {
        this.data = {};
    }
    PosterListItemsComponent.prototype.ngOnInit = function () {
    };
    PosterListItemsComponent.prototype.updateUrl = function (ev) {
        ev.target.src = ev.target.baseURI + 'assets/poster/404.png';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PosterListItemsComponent.prototype, "data", void 0);
    PosterListItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'poster-list-item',
            template: __webpack_require__(/*! ./poster-list-items.component.html */ "./src/app/componnets/poster-list-items/poster-list-items.component.html"),
            styles: [__webpack_require__(/*! ./poster-list-items.component.scss */ "./src/app/componnets/poster-list-items/poster-list-items.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('onEnterItem', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateY(100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(360px)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], PosterListItemsComponent);
    return PosterListItemsComponent;
}());



/***/ }),

/***/ "./src/app/componnets/poster-list/poster-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/componnets/poster-list/poster-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"poster-list style-scroll\"\n    infiniteScroll \n    [infiniteScrollDistance]=\"1\" \n    [infiniteScrollThrottle]=\"300\"\n    [scrollWindow]=\"false\"\n    (scrolled)=\"onScroll()\">\n <poster-list-item *ngFor=\"let data of posters\" [data]=\"data\"></poster-list-item>\n</div>\n"

/***/ }),

/***/ "./src/app/componnets/poster-list/poster-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/componnets/poster-list/poster-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".poster-list {\n  height: calc(100% - 70px);\n  overflow-y: scroll;\n  padding-top: 70px; }\n"

/***/ }),

/***/ "./src/app/componnets/poster-list/poster-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componnets/poster-list/poster-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PosterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterListComponent", function() { return PosterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PosterListComponent = /** @class */ (function () {
    function PosterListComponent(dataService) {
        this.dataService = dataService;
        this.posters = [];
        this.pageConfig = {};
    }
    PosterListComponent.prototype.ngOnInit = function () {
        this.dataService.config.page = 1;
        this.getData();
    };
    PosterListComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getData().subscribe(function (_d) {
            if (!_this.pageConfig['total-content-items']) {
                _this.pageConfig['total-content-items'] = parseInt(_d.page['total-content-items']);
                if (_d.page['page-size-returned'])
                    _this.pageConfig['remaining'] = _this.pageConfig['total-content-items'] - parseInt(_d.page['page-size-returned']);
            }
            else
                _this.pageConfig['remaining'] -= parseInt(_d.page['page-size-returned']);
            (_a = _this.posters).push.apply(_a, _d.page['content-items'].content);
            var _a;
        }, function (_err) {
            console.error(_err);
        });
    };
    PosterListComponent.prototype.onScroll = function () {
        if (this.pageConfig['remaining'] > 0) {
            this.dataService.config.page++;
            this.getData();
        }
    };
    PosterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-poster-list',
            template: __webpack_require__(/*! ./poster-list.component.html */ "./src/app/componnets/poster-list/poster-list.component.html"),
            styles: [__webpack_require__(/*! ./poster-list.component.scss */ "./src/app/componnets/poster-list/poster-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], PosterListComponent);
    return PosterListComponent;
}());



/***/ }),

/***/ "./src/app/componnets/search-list/search-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/componnets/search-list/search-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search-container style-scroll\">\n  <app-loader *ngIf=\"loading\"></app-loader>\n  <ul>\n    <li *ngFor=\"let d of data; let i = index\" class=\"card-item\">\n      <div class=\"poster\">\n        <img src=\"assets/poster/{{d['poster-image']}}\" (error)=\"updateUrl($event)\">\n      </div>\n      <div class=\"title\">\n        <span>{{d.name}}</span>\n      </div>\n    </li>\n    <li *ngIf=\"data.length == 0 && searched == true && loading==false\" class=\"card-item no-result\">\n      <p>Sorry! No result found</p>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/componnets/search-list/search-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/componnets/search-list/search-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-container {\n  width: calc(100% - 30px);\n  margin: 0 15px 15px 15px;\n  background: rgba(238, 238, 238, 0.85);\n  min-height: 100px;\n  max-height: calc(100% - 115px);\n  overflow: auto; }\n  .search-container ul {\n    padding: 0;\n    margin: 0; }\n  .search-container li.card-item {\n    background: #fff;\n    padding: 10px;\n    margin: 10px;\n    box-shadow: 1px 5px 2px #ccc;\n    color: #000;\n    list-style-type: none;\n    display: flex;\n    flex-direction: row;\n    border-radius: 5px;\n    cursor: pointer; }\n  .search-container li.card-item .poster {\n      width: 80px; }\n  .search-container li.card-item .poster img {\n        width: 100%; }\n  .search-container li.card-item .title {\n      padding: 10px;\n      width: calc(100% - 80px); }\n"

/***/ }),

/***/ "./src/app/componnets/search-list/search-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/componnets/search-list/search-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchListComponent", function() { return SearchListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchListComponent = /** @class */ (function () {
    function SearchListComponent() {
        this.data = [];
        this.searched = false;
        this.loading = false;
    }
    SearchListComponent.prototype.ngOnInit = function () {
    };
    SearchListComponent.prototype.updateUrl = function (ev) {
        ev.target.src = ev.target.baseURI + 'assets/poster/404.png';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchListComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SearchListComponent.prototype, "searched", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SearchListComponent.prototype, "loading", void 0);
    SearchListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-list',
            template: __webpack_require__(/*! ./search-list.component.html */ "./src/app/componnets/search-list/search-list.component.html"),
            styles: [__webpack_require__(/*! ./search-list.component.scss */ "./src/app/componnets/search-list/search-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchListComponent);
    return SearchListComponent;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: PosterModal, DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterModal", function() { return PosterModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PosterModal = /** @class */ (function () {
    function PosterModal() {
        this.page = {
            'content-items': {
                'content': []
            },
            "title": "",
            "total-content-items": "",
            "page-num-requested": "",
            "page-size-requested": "",
            "page-size-returned": "",
        };
    }
    return PosterModal;
}());

var configUrl = {
    1: 'assets/data/page1.json',
    2: 'assets/data/page2.json',
    3: 'assets/data/page3.json'
};
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.config = {
            page: 1,
        };
    }
    DataService.prototype.getData = function (page) {
        if (page === void 0) { page = 0; }
        if (page === 0)
            page = this.config.page;
        return this.http.get(configUrl[page]);
    };
    DataService.prototype.search = function (term) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            if (term === '') {
                observer.next([]);
                observer.complete();
                return;
            }
            var keys = Object.keys(configUrl);
            _this._recurCall(term, keys, [], function (_result) {
                observer.next(_result.slice());
                observer.complete();
            });
        });
    };
    DataService.prototype._recurCall = function (term, keys, result, cb) {
        var _this = this;
        if (keys.length > 0) {
            var k = keys.shift();
            this.getData(k).subscribe(function (_d1) {
                var result = [];
                var data = _d1.page['content-items'].content;
                data = data.filter(function (_d) {
                    var name = _d.name.toUpperCase();
                    if (name.indexOf(term.toUpperCase()) != -1)
                        return _d;
                });
                if (data.length > 0)
                    result.push.apply(result, data);
                _this._recurCall(term, keys, result, cb);
            });
        }
        else
            cb(result);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/aji/A2080FDF080FB0F9/DEVLOPER/Projects/Workshops/angular-animation-demo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map