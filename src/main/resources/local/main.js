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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { ReportsComponent } from './reports/reports.component';
var routes = [
    { path: 'timesheet', component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetComponent"] },
    // { path: 'reports', component: ReportsComponent },
    { path: '', redirectTo: '/timesheet', pathMatch: 'full' },
    { path: '**', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"ConstantService.displayLoader\" style=\"width:100%;height:100%;opacity:0.7;z-index:9999;background-color:gray;position:fixed;\">\r\n    <img src=\"../assets/imgs/loader.gif\" style=\"margin:auto;display:block;border-radius:7px;position:relative;top:43%;width:86px\">\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _services_constants_constants_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/constants/constants.service */ "./src/app/services/constants/constants.service.ts");
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
    function AppComponent(ConstantService) {
        this.ConstantService = ConstantService;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_constants_constants_service__WEBPACK_IMPORTED_MODULE_1__["ConstantService"]])
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./timesheet/timesheet.component */ "./src/app/timesheet/timesheet.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/timesheet/timesheet.service */ "./src/app/services/timesheet/timesheet.service.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reports/reports.component */ "./src/app/reports/reports.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// // Import angular2-fusioncharts
// import { FusionChartsModule } from 'angular2-fusioncharts';
// // Import FusionCharts library
// import * as FusionCharts from 'fusioncharts';
// // Import FusionCharts Charts module
// import * as Charts from 'fusioncharts/fusioncharts.charts';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_11__["PagenotfoundComponent"],
                _reports_reports_component__WEBPACK_IMPORTED_MODULE_12__["ReportsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            providers: [_services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_10__["TimesheetService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/weeklyTask.ts":
/*!**************************************!*\
  !*** ./src/app/models/weeklyTask.ts ***!
  \**************************************/
/*! exports provided: WeeklyTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyTask", function() { return WeeklyTask; });
var WeeklyTask = /** @class */ (function () {
    function WeeklyTask(taskName, taskDescription, dayOneHours, dayTwoHours, dayThreeHours, dayFourHours, dayFiveHours, daySixHours, daySevenHours) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.dayOneHours = dayOneHours;
        this.dayTwoHours = dayTwoHours;
        this.dayThreeHours = dayThreeHours;
        this.dayFourHours = dayFourHours;
        this.dayFiveHours = dayFiveHours;
        this.daySixHours = daySixHours;
        this.daySevenHours = daySevenHours;
    }
    return WeeklyTask;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Wrong Url</p>\r\n  \r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
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

var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/reports/reports.component.css":
/*!***********************************************!*\
  !*** ./src/app/reports/reports.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/reports/reports.component.html":
/*!************************************************!*\
  !*** ./src/app/reports/reports.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  reports works!\n</p>\n\n<p>wjdwj</p> -->\n\n\n\n\n"

/***/ }),

/***/ "./src/app/reports/reports.component.ts":
/*!**********************************************!*\
  !*** ./src/app/reports/reports.component.ts ***!
  \**********************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportsComponent = /** @class */ (function () {
    function ReportsComponent() {
    }
    //LineChart = [];
    // barChart = [];
    // chart = []; // This will hold our chart info
    // chart = [];
    // dataSource = {};
    // values: number[] = [102, 115, 130, 137];
    // constructor(private _report: ReportService) {
    //   this.dataSource = {
    //     chart: {
    //       "caption": "Quarterly expenditure",
    //       "xAxisname": "Quarter",
    //       "yAxisName": "Expenditure (In USD)",
    //       "numberPrefix": "$",
    //       "baseFont": "Roboto",
    //       "baseFontSize": "14",
    //       "labelFontSize": "15",
    //       "captionFontSize": "20",
    //       "subCaptionFontSize": "16",
    //       "paletteColors": "#2c7fb2,#6cc184,#fed466",
    //       "bgColor": "#ffffff",
    //       "legendShadow": "0",
    //       "valueFontColor": "#ffffff",
    //       "showXAxisLine": "1",
    //       "xAxisLineColor": "#999999",
    //       "divlineColor": "#999999",
    //       "divLineIsDashed": "1",
    //       "showAlternateHGridColor": "0",
    //       "subcaptionFontBold": "0",
    //       "subcaptionFontSize": "14",
    //       "showHoverEffect": "1"
    //     },
    //     "categories": [{
    //       "category": [{
    //         "label": "Q1"
    //       }, {
    //         "label": "Q2"
    //       }, {
    //         "label": "Q3"
    //       }, {
    //         "label": "Q4"
    //       }]
    //     }],
    //     "dataset": [{
    //       "seriesname": "Marketing",
    //       "data": [{
    //         "value": "121000"
    //       }, {
    //         "value": "135000"
    //       }, {
    //         "value": "123500"
    //       }, {
    //         "value": "145000"
    //       }]
    //     }, {
    //       "seriesname": "Management",
    //       "data": [{
    //         "value": "190000"
    //       }, {
    //         "value": "195000"
    //       }, {
    //         "value": "187000"
    //       }, {
    //         "value": "190000"
    //       }]
    //     }, {
    //       "seriesname": "Operations",
    //       "data": [{
    //         "value": "225000"
    //       }, {
    //         "value": "260000"
    //       }, {
    //         "value": "245000"
    //       }, {
    //         "value": "250000"
    //       }]
    //     }]
    //   };
    // }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/reports/reports.component.css")]
        })
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/services/constants/constants.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/constants/constants.service.ts ***!
  \*********************************************************/
/*! exports provided: ConstantService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConstantService", function() { return ConstantService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConstantService = /** @class */ (function () {
    function ConstantService(http) {
        this.http = http;
    }
    ConstantService.prototype.hideLoader = function () {
        this.displayLoader = false;
    };
    ConstantService.prototype.showLoader = function () {
        this.displayLoader = true;
    };
    ConstantService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ConstantService);
    return ConstantService;
}());



/***/ }),

/***/ "./src/app/services/email/email.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/email/email.service.ts ***!
  \*************************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'responseType': 'text' })
};
var options = { responseType: 'text' };
var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.emailUrl = this.baseUrl + "getemailtemplate";
        this.emailSentUrl = this.baseUrl + "email";
    }
    EmailService.prototype.getEmailTemplate = function () {
        return this.http.get(this.emailUrl, options);
    };
    EmailService.prototype.postEmail = function (username, password, receiver, stakeholders, subject, mailbody) {
        var postedData = { username: username, password: password, receiver: receiver, stakeholders: stakeholders, subject: subject, mailbody: mailbody };
        return this.http.post(this.emailSentUrl, postedData, httpOptions);
    };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/services/otp/otp.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/otp/otp.service.ts ***!
  \*********************************************/
/*! exports provided: OtpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpService", function() { return OtpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var options = { responseType: 'text' };
var OtpService = /** @class */ (function () {
    function OtpService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.sentOtpUrl = this.baseUrl + "sentotp";
        this.verifyOtpUrl = this.baseUrl + "verifyotp";
    }
    OtpService.prototype.sendOtp = function (email) {
        var postedData = email;
        return this.http.post(this.sentOtpUrl, postedData, httpOptions);
    };
    OtpService.prototype.validateOtp = function (userEmail, otp) {
        var postedData = { userEmail: userEmail, otp: otp, expiryTime: "" };
        return this.http.post(this.verifyOtpUrl, postedData, httpOptions);
    };
    OtpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OtpService);
    return OtpService;
}());



/***/ }),

/***/ "./src/app/services/tasks/tasks.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/tasks/tasks.service.ts ***!
  \*************************************************/
/*! exports provided: TasksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksService", function() { return TasksService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TasksService = /** @class */ (function () {
    function TasksService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.tasksUrl = this.baseUrl + "gettasksdata";
    }
    TasksService.prototype.getTasks = function () {
        return this.http.get(this.tasksUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
    };
    TasksService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TasksService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TasksService);
    return TasksService;
}());



/***/ }),

/***/ "./src/app/services/timesheet/timesheet.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/timesheet/timesheet.service.ts ***!
  \*********************************************************/
/*! exports provided: TimesheetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetService", function() { return TimesheetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var TimesheetService = /** @class */ (function () {
    function TimesheetService(http) {
        this.http = http;
        this.baseUrl = "" + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.resourcesUrl = this.baseUrl + 'getusers';
        this.timesheetPostURL = this.baseUrl + 'posttimesheetdata';
        this.exportToExcelURL = this.baseUrl + 'exporttoexcel';
        this.updateManagerURL = this.baseUrl + 'updateprojectmanagername';
        this.clientManagerURL = this.baseUrl + 'updateclientmanagername';
        this.clientManagerEmailURL = this.baseUrl + 'updateclientemail';
        this.userEmailURL = this.baseUrl + 'updateuseremail';
        this.addStakeholderEmailURL = this.baseUrl + 'addstakeholderemail';
        this.deleteStakeholderEmailURL = this.baseUrl + 'deletestakeholderemail';
        this.conditionalTimesheetURL = this.baseUrl + 'gettimesheetifpresent';
    }
    TimesheetService.prototype.getResources = function () {
        return this.http.get(this.resourcesUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getHeroes', [])));
    };
    TimesheetService.prototype.postTimesheet = function (timesheetArray, selectedResourceVlaue, startDate, endDate, dates, sumOfWeeklyHours, totalHoursOfEachDate) {
        var postedData = { startDate: startDate.toLocaleDateString(), endDate: endDate.toLocaleDateString(), totalHoursForEachDate: totalHoursOfEachDate, dates: dates, totalWeeklyHours: sumOfWeeklyHours, user: selectedResourceVlaue, tasks: timesheetArray };
        return this.http.post(this.timesheetPostURL, postedData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postTimesheet', [])));
    };
    TimesheetService.prototype.exportToExcel = function (timesheetArray, selectedResourceVlaue, startDate, endDate, dates, sumOfWeeklyHours, totalHoursOfEachDate) {
        var postedData = { startDate: startDate.toLocaleDateString(), endDate: endDate.toLocaleDateString(), totalHoursForEachDate: totalHoursOfEachDate, dates: dates, totalWeeklyHours: sumOfWeeklyHours, user: selectedResourceVlaue, tasks: timesheetArray };
        return this.http.post(this.exportToExcelURL, postedData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('export Excel', [])));
    };
    TimesheetService.prototype.updateProjectManagerName = function (Resource) {
        return this.http.post(this.updateManagerURL, Resource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateProjectManagerName', [])));
    };
    TimesheetService.prototype.updateClientManagerName = function (Resource) {
        return this.http.post(this.clientManagerURL, Resource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateClientManagerName', [])));
    };
    TimesheetService.prototype.updateClientManagerEmail = function (Resource) {
        return this.http.post(this.clientManagerEmailURL, Resource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateClientManagerEmail', [])));
    };
    TimesheetService.prototype.updateUserEmail = function (Resource) {
        return this.http.post(this.userEmailURL, Resource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateUserEmail', [])));
    };
    TimesheetService.prototype.addStakeholderEmail = function (Resource) {
        return this.http.post(this.addStakeholderEmailURL, Resource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('addStakeholderEmail', [])));
    };
    TimesheetService.prototype.deleteStakeholderEmail = function (Resource) {
        return this.http.post(this.deleteStakeholderEmailURL, Resource, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteStakeholderEmail', [])));
    };
    TimesheetService.prototype.getTimesheetAccordingToWeekAndUser = function (startDate, user) {
        var postedData = { startDate: startDate.toLocaleDateString(), user: user };
        return this.http.post(this.conditionalTimesheetURL, postedData, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('conditional', [])));
    };
    TimesheetService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TimesheetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TimesheetService);
    return TimesheetService;
}());



/***/ }),

/***/ "./src/app/timesheet/timesheet.component.css":
/*!***************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapperpadding{\r\n\t\tmargin-top: 60px;\r\n    /* padding:15px 0px; */\r\n}\r\n#weeklytimesheetheading{\r\n    color:red;\r\n}\r\n/* css for heading */\r\n/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */\r\n@media screen and (min-width: 601px) {   /* medium and large screen is covered */\r\n\t.headingclass {\r\n\t  font-size: 30px;\r\n\t}\r\n\t.weeklyheadingclass {\r\n\t\tfont-size: 20px;\r\n\t}\r\n  }\r\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\r\n@media screen and (max-width: 600px) {  /* small and extra small screen is covered */\r\n\t.headingclass {\r\n\t\tfont-size: 20px;\r\n\t  }\r\n\t  .weeklyheadingclass {\r\n\t\t  font-size: 10px;\r\n\t  }\r\n  }\r\n.buttoncontainer {\r\n\tpadding:50px;\r\n}\r\n.timesheettablediv{\r\n\toverflow: auto;\r\n\twidth:100%;\r\n\tmargin:5px;\r\n}\r\n/* for display view in a horizontal format */\r\n.wrapper{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.col-centered{\r\n  float: none;\r\n  margin: 0 auto;\r\n  position: center;\r\n  margin-top: 30%;\r\n}\r\n/* for stakeholder table */\r\n.table th, .table td{\r\n\t padding: 0.75rem 0 0.75rem 0.75rem;\r\n }\r\n/* header css */\r\n.header img {\r\n\tfloat: left;\r\n\tbackground: #555;\r\n  }\r\n.header h6 {\r\n\tposition: relative;\r\n\ttop: 18px;\r\n\tleft: 10px;\r\n\tfont-size: 40px;\r\n\ttext-align: right;\r\n\tmargin-right: 30px;\r\n}\r\n.responsive{\r\n\twidth: 100%;\r\n\tmax-width:400px;\r\n\tmargin-top: 10px;\r\n\theight:auto;\r\n}\r\n.footer{\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\tbackground-color: #00303c;\r\n\tcolor: white;\r\n\ttext-align: center;\r\n}\r\n.col-centered\r\n{\r\n\tmargin-top: 20% !important\r\n}"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- svam image header-->\r\n<div class=\"header\">\r\n    <img src=\"../assets/imgs/svam.png\" alt=\"SVAM INC\" class=\"responsive\" width=\"800\" height=\"400\">\r\n\r\n    <h6>WEEKLY TIMESHEET </h6>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"wrapper wrapperpadding\">\r\n    <div class=\"container\">\r\n        <div *ngIf=\"!showTimesheetOfSelectedUser\" class=\"col-md-6 centered text-center col-centered\">\r\n            <p>\r\n                <select name=\"resource\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue\" (change)=\"getSelectedResourceValue()\">\r\n                    <option value=\"undefined\" selected disabled>Select the resource name</option>\r\n                    <option *ngFor=\"let resource of resources\" [ngValue]=\"resource\">{{resource.userName}}</option>\r\n                </select>\r\n            </p>\r\n\r\n            <div>\r\n                <input #otp *ngIf=\"showOtpInput\" class=\"form-control\" [(ngModel)]=\"otpValue\" (keydown)=\"checkForOtpLength(otp,$event)\" placeholder=\"Enter OTP Sent To Your Teach For America Mail Id\">\r\n               \r\n                <div style=\"padding:15px;\">\r\n                    <button  class=\"btn btn-success\" *ngIf=\"showOtpInput\"  style=\"cursor:pointer;margin:5px;\" (click)=\"validateOtp($event)\">Validate Otp</button>\r\n                    <button  class=\"btn btn-danger\" *ngIf=\"showOtpInput\"  style=\"cursor:pointer;margin:5px;\" (click)=\"getSelectedResourceValue()\">Resend Otp</button>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div>\r\n                <label style=\"color:green;\" *ngIf=\"otpSuccessMessage\">{{otpSuccessMessage}}</label>\r\n                <label style=\"color:red;\" *ngIf=\"otpFailMessage\">{{otpFailMessage}}</label>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n<div id=\"timesheetouterdiv\" *ngIf=\"showTimesheetOfSelectedUser\">\r\n    <div class=\"wrapper\">\r\n        <!-- first column of row -->\r\n        <!-- second column of row -->\r\n        <div class=\"col-md-9\" style=\"background-color:#00303c; color:#ffffff\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <p>Resource Name\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.userName\" readonly>\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <p>Name of the Project\r\n                        <input type=\"text\" class=\"form-control\" value=\"Teach For America\" readonly>\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <p>Select Date:\r\n                        <p-calendar readonlyInput=\"true\" class=\"form-control\" [disabledDays]=\"[0,2,3,4,5,6]\" [(ngModel)]=\"startDate\" (onSelect)=\"getWeekFromDate(startDate)\"></p-calendar>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"timesheettablediv\" style=\"width:100%\">\r\n                <table style=\"width:100%;\" class=\"taskstable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width:15%;text-align:center\">Task Name</th>\r\n                            <th style=\"width:15%;text-align:center\">Description</th>\r\n                            <th style=\"width:10%\" *ngFor=\"let date of dates\">{{date}}</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let tasks of timesheetArray; let i = index\">\r\n                            <td>\r\n                                <!-- <select class=\"form-control\" [(ngModel)]=\"tasks.taskName\" [disabled]=\"isReadOnlyForTimesheetRow\">\r\n                                    <option value=\"\" selected disabled>Select the Task</option>\r\n                                    <option *ngFor=\"let task of tasksData\" [ngValue]=\"task.taskName\">{{task.taskName}}</option>\r\n                                </select> -->\r\n                                <input id=\"typeahead-basic\" placeholder=\"Task Name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"tasks.taskName\" [ngbTypeahead]=\"searchForTaskName\"\r\n                                    [disabled]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <!-- (blur)=\"checkTaskValidation(tasks.taskDescription,'taskDescription',i)\" -->\r\n\r\n                                <input class=\"form-control\" placeholder=\"Description\" type=\"text\" [(ngModel)]=\"tasks.taskDescription\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"\r\n                                    (focus)=\"expandDescriptionOnFocus($event)\" (blur)=descriptionBoxBackToNormal($event) />\r\n\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control firstDate\" id=\"firstDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" (keyup)=\"checkHours($event,tasks.dayOneHours,'dayOneHours',i)\"\r\n                                    type=\"text\" [(ngModel)]=\"tasks.dayOneHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control secondDate\" id=\"secondDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\"\r\n                                    (keyup)=\"checkHours($event,tasks.dayTwoHours,'dayTwoHours',i)\" type=\"text\" [(ngModel)]=\"tasks.dayTwoHours\"\r\n                                    name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control thirdDate\" id=\"thirdDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" placeholder=\"hours\"\r\n                                    (keyup)=\"checkHours($event,tasks.dayThreeHours,'dayThreeHours',i)\" type=\"text\" [(ngModel)]=\"tasks.dayThreeHours\"\r\n                                    name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control fourthDate\" id=\"fourthDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\"\r\n                                    placeholder=\"hours\" placeholder=\"hours\" (keyup)=\"checkHours($event,tasks.dayFourHours,'dayFourHours',i)\"\r\n                                    type=\"text\" [(ngModel)]=\"tasks.dayFourHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control fifthDate\" id=\"fifthDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" (keyup)=\"checkHours($event,tasks.dayFiveHours,'dayFiveHours',i)\"\r\n                                    type=\"text\" [(ngModel)]=\"tasks.dayFiveHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control sixthDate\" id=\"sixthDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" (keyup)=\"checkHours($event,tasks.daySixHours,'daySixHours',i)\"\r\n                                    type=\"text\" [(ngModel)]=\"tasks.daySixHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control seventhDate\" id=\"seventhDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\"\r\n                                    (keyup)=\"checkHours($event,tasks.daySevenHours,'daySevenHours',i)\" type=\"text\" id=\"\" [(ngModel)]=\"tasks.daySevenHours\"\r\n                                    name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <button id=\"addrowbuttonid\" style=\"box-shadow: none;background-color:#00303c;border-color:#00303c;\" *ngIf=\"i==0\" class=\"btn btn-default btn-success\"\r\n                                    type=\"button\" (click)=\"addRow()\" [disabled]=\"addAndEditButtonDisable\">\r\n                                    <i style=\"color:green;\" class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n\r\n\r\n                                <button style=\"background-color:#00303c;border-color:#00303c;\" *ngIf=\"i>0\" class=\"btn btn-default btn-danger\" type=\"button\"\r\n                                    (click)=\"deleteFieldValue(i)\" [disabled]=\"addAndEditButtonDisable\">\r\n                                    <i style=\"color:red;\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                </button>\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                Total Timesheet Hours\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"firstdatetotal\" type=\"text\" [(ngModel)]=\"firstDateTotal\" name=\"\" readonly\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"seconddatetotal\" type=\"text\" [(ngModel)]=\"secondDateTotal\" name=\"\" readonly\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"thirddatetotaleHour\" type=\"text\" [(ngModel)]=\"thirdDateTotal\" name=\"\"\r\n                                    readonly/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"fouthdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"fourthDateTotal\" name=\"\"\r\n                                    readonly/>\r\n\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"fifthdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"fifthDateTotal\" name=\"\"\r\n                                    readonly/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"sixthdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"sixthDateTotal\" name=\"\"\r\n                                    readonly/>\r\n\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"seventhdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"seventhDateTotal\" name=\"\"\r\n                                    readonly/>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"row\" style=\"padding:50px 0px 0px 0px\">\r\n                <div class=\"col-md-6\">\r\n                    <p>Total Weekly Hours\r\n                        <input id=\"totalweeklyhours\" [value]=\"totalWeeklyHours\" class=\"form-control\" type=\"text\" readonly>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <label style=\"color:red;\" *ngIf=\"validationMessageForMandatoryTaskName\">Task Name is Mandatory</label>\r\n                <label style=\"color:red;\" *ngIf=\"hourValidationMessage\">Hours Cannot be greater than 24</label>\r\n                <label style=\"color:red;\" *ngIf=\"EmailIdExistMessage\">Email Id Aready Exist</label>\r\n                <label style=\"color:red;\" *ngIf=\"emailAddressNotValidated\">{{emailAddressNotValidated}}</label>\r\n                <!-- <label style=\"color:green;\" *ngIf=\"message\">{{message}}</label> -->\r\n                <label style=\"padding:0px;\" *ngIf=\"message\" class=\"alert alert-success\">{{message}}</label>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- third column of row -->\r\n        <div class=\"col-md-3\">\r\n\r\n            <div style=\"margin:10px 0px;\">\r\n                <label style=\"display:inline\">Project Manager Name</label>\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group\">\r\n                        <input id=\"managername\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.managerEmail\" [readonly]=\"isManagerReadOnly\"\r\n                        />\r\n                        <span class=\"input-group-btn\" style=\"padding:10px;\">\r\n                            <span style=\"cursor:pointer;\" *ngIf=\"managerEditButtonShowHide\" id=\"clientmanagereditbutton\" (click)=\"hideManagerEditButton()\"\r\n                                class=\"edit-button\">{{editIcon}}</span>\r\n                            <span style=\"cursor:pointer;\" *ngIf=\"managerUpdateButtonShowHide\" id=\"clientmanagerupdatebutton\" (click)=\"hideManagerUpdateButton()\"\r\n                                class=\"update-button\">{{check}}</span>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin:10px 0px;\">\r\n                <label style=\"display:inline\">Client Manager Name</label>\r\n                <div class=\"input-group\">\r\n                    <input id=\"clientmanagername\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.clientEmail\" [readonly]=\"isClientReadOnly\"\r\n                    />\r\n                    <span class=\"input-group-btn\" style=\"padding:10px;\">\r\n\r\n                        <span style=\"cursor:pointer;\" *ngIf=\"clientEditButtonShowHide\" id=\"clientmanagereditbutton\" (click)=\"hideClientEditButton()\"\r\n                            class=\"edit-button\">{{editIcon}}</span>\r\n\r\n\r\n                        <span style=\"cursor:pointer;\" *ngIf=\"clientUpdateButtonShowHide\" id=\"clientmanagerupdatebutton\" (click)=\"hideClientUpdateButton()\"\r\n                            class=\"update-button\">{{check}}</span>\r\n\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin:10px 0px;\">\r\n                <label style=\"display:inline\">Client Manager Email</label>\r\n                <div class=\"input-group\">\r\n                    <input id=\"clientmailid\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.clientMailAdd\" [readonly]=\"isClientEmailReadOnly\"\r\n                    />\r\n                    <span class=\"input-group-btn\" style=\"padding:10px;\">\r\n\r\n                        <span style=\"cursor:pointer;\" *ngIf=\"clientEmailEditButtonShowHide\" (click)=\"hideClientEmailEditButton()\" class=\"edit-button\">{{editIcon}}</span>\r\n\r\n\r\n                        <span style=\"cursor:pointer;\" *ngIf=\"clientEmailUpdateButtonShowHide\" (click)=\"hideClientEmailUpdateButton($event)\" class=\"update-button\">{{check}}</span>\r\n\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin:10px 0px;\">\r\n                <label style=\"display:inline\">User Email</label>\r\n                <div class=\"input-group\">\r\n                    <input id=\"usermailid\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.userMailAdd\" [readonly]=\"isUserEmailReadOnly\"\r\n                    />\r\n                    <span class=\"input-group-btn\" style=\"padding:10px;\">\r\n\r\n                        <span style=\"cursor:pointer;\" *ngIf=\"userEmailEditButtonShowHide\" (click)=\"hideUserEmailEditButton()\" class=\"edit-button\">{{editIcon}}</span>\r\n\r\n\r\n                        <span style=\"cursor:pointer;\" *ngIf=\"userEmailUpdateButtonShowHide\" (click)=\"hideUserEmailUpdateButton($event)\" class=\"update-button\">{{check}}</span>\r\n\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <table class=\"table\">\r\n                <tr>\r\n                    <th>StakeHolders Email</th>\r\n                </tr>\r\n                <tbody>\r\n                    <tr *ngFor=\"let stakeholderEmail of selectedResourceValue.stakeholdersEmail\">\r\n                        <td>{{stakeholderEmail}}</td>\r\n                        <!-- <button class=\"btn btn-default btn-danger\" type=\"button\" (click)=\"deleteStakeHolderEmail(stakeholderEmail)\">Delete</button> -->\r\n                        <td>\r\n                            <span style=\"cursor:pointer;color:red;\" (click)=\"deleteStakeHolderEmail(stakeholderEmail)\">\r\n                                <i style=\"color:red;\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <form (ngSubmit)=\"submit(userform)\" #userform=\"ngForm\">\r\n                <label>Add StakeHolder Email</label>\r\n                <div class=\"input-group\">\r\n                    <input required class=\"form-control\" id=\"stakeholderEmail\" name=\"emailaddress\" #emailaddress=\"ngModel\" pattern=\"^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$\"\r\n                        ngModel [(ngModel)]=\"stakeholderEmail\" type=\"text\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button style=\"background-color: white;border:none;\" class=\"btn btn-default btn-success add-stakeholder\" (click)=\"addEmail()\"\r\n                            [disabled]=\"!userform.valid\" type=\"submit\">\r\n                            <i style=\"color:green;\" class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!emailaddress.valid && emailaddress.touched\">\r\n                    <p *ngIf=\"emailaddress?.errors?.pattern\" style=\"color:red\">Invalid Email Address</p>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"wrapper\" style=\"padding:15px 0px 0px 0px;\">\r\n        <div class=\"col-md-3\">\r\n\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <button *ngIf=\"saveButtonVisibility\" style=\"background-color: #00303c;color:white;margin:10px;\" id=\"btnSave\" class=\"btn btn-md center-block\"\r\n                (click)=\"saveTimesheet()\">\r\n                <i class=\"fa fa-cloud\" aria-hidden=\"true\"></i> Save Timesheet</button>\r\n            <button *ngIf=\"editButtonVisibility\" style=\"margin:10px;\" (click)=\"toggleButton()\" id=\"btnSave\" class=\"btn btn-warning\">\r\n                <span class=\"glyphicon glyphicon-pencil\"></span>{{editIcon}} Edit Timesheet</button>\r\n            <button class=\"btn btn-primary btn-md center-block\" style=\"margin:10px;\" (click)=\"exportToExcel()\">\r\n                <i class=\"fa fa-download\" aria-hidden=\"true\"></i> Generate Excel Sheet</button>\r\n            <button class=\"btn btn-primary btn-md center-block btn-danger\" style=\"margin:10px;\" (click)=\"sendMail(content)\">\r\n                <span class=\"glyphicon glyphicon-envelope\"></span>{{mailIcon}} Send In Mail</button>\r\n            <!-- <button class=\"btn btn-primary btn-md center-block btn-danger\" style=\"margin:10px;\" (click)=\"redirectToReports()\">Generate Reports</button> -->\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <br>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"wrapper footer\">\r\n    <div class=\"col-md-12\">\r\n        <p style=\"margin:0px;\">Developed by Sanchit Aggarwal / Innovation By Tanuj Kathuria</p>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<ng-template id=\"hideDiv\" #content let-c=\"close\" let-d=\"dismiss\">\r\n\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Send Email</h4>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n\r\n\r\n    <div class=\"modal-body\">\r\n        <form>\r\n            <div class=\"form-group\">\r\n                <label for=\"useremail\">User Email</label>\r\n                <div class=\"input-group\">\r\n                    <!-- <input id=\"to\" class=\"form-control\" placeholder=\"To\" name=\"clientmailid\" #clientmailid=\"ngModel\" [(ngModel)]=\"clientMailId\"> -->\r\n                    <input id=\"useremail\" #useremail name=\"useremail\" class=\"form-control\" placeholder=\"from\" [(ngModel)]=\"userMailId\" readonly>\r\n                </div>\r\n                <!-- <div>\r\n                    <span *ngIf=\"invalidEmailMessageForUser\">Invalid Email Address</span>\r\n                </div> -->\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"userpassword\">User Password</label>\r\n                <div class=\"input-group\">\r\n                    <!-- <input id=\"to\" class=\"form-control\" placeholder=\"To\" name=\"clientmailid\" #clientmailid=\"ngModel\" [(ngModel)]=\"clientMailId\"> -->\r\n                    <input id=\"userpassword\" type=\"password\" #userpassword name=\"userpassword\" class=\"form-control\" placeholder=\"password\" (blur)=\"showPasswordValidationMessageIfEmpty($event)\"\r\n                        [(ngModel)]=\"userPasswordForEmail\" (keyup)=\"checkPasswordLength($event)\">\r\n                </div>\r\n                <div>\r\n                    <span *ngIf=\"emptyPasswordMessage\">Password Should not be Empty</span>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label for=\"clientemail\">Client Email</label>\r\n                <div class=\"input-group\">\r\n                    <!-- <input id=\"to\" class=\"form-control\" placeholder=\"To\" name=\"clientmailid\" #clientmailid=\"ngModel\" [(ngModel)]=\"clientMailId\"> -->\r\n                    <input id=\"clientemail\" #clientemail name=\"clientemail\" class=\"form-control\" placeholder=\"To\" [(ngModel)]=\"clientMailId\"\r\n                        readonly>\r\n                </div>\r\n                <!-- <div>\r\n                    <span *ngIf=\"emailValidationMessageForClient\">Invalid Email Address</span>\r\n                </div> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"cc\">Stakeholders Email (Cc)</label>\r\n                <div class=\"input-group\">\r\n\r\n                    <input id=\"cc\" class=\"form-control\" placeholder=\"Cc\" name=\"ccemailaddress\" #ccemailaddress=\"ngModel\" [(ngModel)]=\"ccEmailAddresses\"\r\n                        readonly>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"subject\">Subject</label>\r\n                <div class=\"input-group\">\r\n\r\n                    <input id=\"subject\" class=\"form-control\" placeholder=\"subject\" name=\"subject\" #subject=\"ngModel\" [(ngModel)]=\"mailSubject\"\r\n                        readonly>\r\n                    <!-- <div class=\"input-group-append\">\r\n                            <button class=\"btn btn-outline-secondary\" (click)=\"dp.toggle()\" type=\"button\">\r\n                              <img src=\"img/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\"/>\r\n                            </button>\r\n                          </div> -->\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label for=\"mailbody\">Mail Body</label>\r\n                <div class=\"input-group\">\r\n                    <div readonly [innerHTML]=\"emailTemplate\"></div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"mailSent()\" [disabled]=\"invalidMailAddress\">Send</button>\r\n    </div>\r\n\r\n</ng-template>"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.ts":
/*!**************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.ts ***!
  \**************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/timesheet/timesheet.service */ "./src/app/services/timesheet/timesheet.service.ts");
/* harmony import */ var _services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/tasks/tasks.service */ "./src/app/services/tasks/tasks.service.ts");
/* harmony import */ var _models_weeklyTask__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/weeklyTask */ "./src/app/models/weeklyTask.ts");
/* harmony import */ var _services_constants_constants_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/constants/constants.service */ "./src/app/services/constants/constants.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var glyphicons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! glyphicons */ "./node_modules/glyphicons/glyphicons.js");
/* harmony import */ var glyphicons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(glyphicons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _services_email_email_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/email/email.service */ "./src/app/services/email/email.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_otp_otp_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/otp/otp.service */ "./src/app/services/otp/otp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var TimesheetComponent = /** @class */ (function () {
    function TimesheetComponent(otpService, router, email, timesheetService, tasksService, constantService, modalService) {
        var _this = this;
        this.otpService = otpService;
        this.router = router;
        this.email = email;
        this.timesheetService = timesheetService;
        this.tasksService = tasksService;
        this.constantService = constantService;
        this.modalService = modalService;
        // icons of glyphions used in the application using glyphicons package
        this.editIcon = glyphicons__WEBPACK_IMPORTED_MODULE_7___default.a.pencil;
        this.crossIcon = glyphicons__WEBPACK_IMPORTED_MODULE_7___default.a.crossHeavy;
        this.mailIcon = glyphicons__WEBPACK_IMPORTED_MODULE_7___default.a.email;
        this.plus = glyphicons__WEBPACK_IMPORTED_MODULE_7___default.a.plus;
        this.check = glyphicons__WEBPACK_IMPORTED_MODULE_7___default.a.checkHeavy;
        this.refresh = glyphicons__WEBPACK_IMPORTED_MODULE_7___default.a.arrowCircleFull;
        // to disable the add and edit button in the timesheet table according to whether timesheet exist or not
        this.addAndEditButtonDisable = false;
        // toggle edita nd save timesheet button visibility according to whether timesheet exist or not
        this.editButtonVisibility = false;
        this.saveButtonVisibility = true;
        this.isReadOnlyForTimesheetRow = false;
        // validation message show variable for hour validation and Validation message for hour Task.
        this.hourValidationMessage = false;
        this.validationMessageForMandatoryTaskName = false;
        // sum of total weekly hour
        this.totalWeeklyHours = '';
        // each date sum of hours
        this.firstDateTotal = '';
        this.secondDateTotal = '';
        this.thirdDateTotal = '';
        this.fourthDateTotal = '';
        this.fifthDateTotal = '';
        this.sixthDateTotal = '';
        this.seventhDateTotal = '';
        // get resources and tasks coming from the apis
        this.resources = [];
        // timesheet array contains all teh timesheet of a single users
        this.timesheetArray = [];
        this.tasks = new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_4__["WeeklyTask"]('', '', '', '', '', '', '', '', '');
        this.exportToExcelTimesheet = [];
        this.dates = [];
        // properties for client name button show hide
        this.clientEditButtonShowHide = true;
        this.clientUpdateButtonShowHide = false;
        //properties for manger name button show hide
        this.managerEditButtonShowHide = true;
        this.managerUpdateButtonShowHide = false;
        //properties for client email button show hide
        this.clientEmailEditButtonShowHide = true;
        this.clientEmailUpdateButtonShowHide = false;
        //properties for user email button show hide
        this.userEmailEditButtonShowHide = true;
        this.userEmailUpdateButtonShowHide = false;
        // make all the inout boxes of client and user credentials readonly
        this.isManagerReadOnly = true;
        this.isClientReadOnly = true;
        this.isClientEmailReadOnly = true;
        this.isUserEmailReadOnly = true;
        // to enable send button if password is having at least one character
        this.invalidMailAddress = true;
        this.tasksName = [];
        this.showOtpInput = false;
        this.showTimesheetOfSelectedUser = false;
        this.searchForTaskName = function (text$) {
            return text$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (term) { return term.length < 1 ? []
                : _this.tasksName.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
        // to get task in dropdown from the service
        this.getTasks();
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        // to get the resources name from the service
        this.getResources();
        // get the current monday of the week
        this.startDate = this.getMonday();
        // get week from date 
        this.getWeekFromDate(this.startDate);
    };
    TimesheetComponent.prototype.checkForOtpLength = function (otp, event) {
        console.log(otp.value);
        // if (otp.value.length >= 4 || !(event.keyCode >= 48 && event.keyCode <= 57))
        if (otp.value.length >= 4)
            if (!(event.keyCode == 8 || event.keyCode == 46))
                event.preventDefault();
    };
    TimesheetComponent.prototype.validateOtp = function (event) {
        var _this = this;
        this.constantService.showLoader();
        this.otpService.validateOtp(this.selectedResourceValue.userMailAdd, this.otpValue).subscribe(function (message) {
            _this.constantService.hideLoader();
            console.log(message.response);
            if (message.response == "OTP is verified successfullly") {
                _this.showTimesheetOfSelectedUser = true;
                _this.getExistingTimesheet();
            }
        }, function (error) {
            _this.constantService.hideLoader();
            _this.otpFailMessage = error.error.response;
            var self = _this;
            setTimeout(function () { self.otpFailMessage = ""; }, 3000);
        });
    };
    // call when new resource/user is selected from the drop down box
    TimesheetComponent.prototype.getSelectedResourceValue = function () {
        var _this = this;
        this.otpValue = "";
        this.constantService.showLoader();
        this.otpService.sendOtp(this.selectedResourceValue.userMailAdd).subscribe(function (message) {
            if (message != null) {
                _this.constantService.hideLoader();
                console.log(message.response);
                _this.showOtpInput = true;
                _this.otpSuccessMessage = message.response;
                var self = _this;
                setTimeout(function () { self.otpSuccessMessage = ""; }, 2000);
            }
        }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
        //this.getExistingTimesheet();
    };
    // get Monday From Present Date
    TimesheetComponent.prototype.getMonday = function () {
        var d = new Date();
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff - 7));
    };
    // for getting existing timesheet accoring to user and week
    TimesheetComponent.prototype.getExistingTimesheet = function () {
        var _this = this;
        this.constantService.showLoader();
        this.timesheetService.getTimesheetAccordingToWeekAndUser(this.startDate, this.selectedResourceValue).subscribe(function (timesheet) {
            _this.constantService.hideLoader();
            if (timesheet != null) {
                _this.timesheetArray = [];
                for (var i = 0; i < timesheet.tasks.length; i++) {
                    _this.timesheetArray.push(timesheet.tasks[i]);
                }
                _this.firstDateTotal = timesheet.totalHoursForEachDate[0];
                _this.secondDateTotal = timesheet.totalHoursForEachDate[1];
                _this.thirdDateTotal = timesheet.totalHoursForEachDate[2];
                _this.fourthDateTotal = timesheet.totalHoursForEachDate[3];
                _this.fifthDateTotal = timesheet.totalHoursForEachDate[4];
                _this.sixthDateTotal = timesheet.totalHoursForEachDate[5];
                _this.seventhDateTotal = timesheet.totalHoursForEachDate[6];
                _this.totalWeeklyHours = timesheet.totalWeeklyHours;
                _this.isReadOnlyForTimesheetRow = true;
                _this.editButtonVisibility = true;
                _this.saveButtonVisibility = false;
                // if user get timesheet
                _this.addAndEditButtonDisable = true;
            }
            else {
                _this.timesheetArray = [];
                _this.tasks = new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_4__["WeeklyTask"]('', '', '', '', '', '', '', '', '');
                _this.timesheetArray.push(_this.tasks);
                _this.addAndEditButtonDisable = false;
                _this.firstDateTotal = "";
                _this.secondDateTotal = "";
                _this.thirdDateTotal = "";
                _this.fourthDateTotal = "";
                _this.fifthDateTotal = "";
                _this.sixthDateTotal = "";
                _this.seventhDateTotal = "";
                _this.totalWeeklyHours = "";
                _this.isReadOnlyForTimesheetRow = false;
                _this.editButtonVisibility = false;
                _this.saveButtonVisibility = true;
            }
        }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    // get resources from the apis
    TimesheetComponent.prototype.getResources = function () {
        var _this = this;
        this.constantService.showLoader();
        this.timesheetService.getResources().subscribe(function (resources) {
            _this.constantService.hideLoader();
            _this.resources = resources;
        }, function (error) {
            _this.constantService.hideLoader();
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    TimesheetComponent.prototype.hideManagerEditButton = function () {
        this.managerUpdateButtonShowHide = true;
        this.managerEditButtonShowHide = false;
        this.isManagerReadOnly = false;
    };
    TimesheetComponent.prototype.hideManagerUpdateButton = function () {
        var _this = this;
        this.timesheetService.updateProjectManagerName(this.selectedResourceValue).subscribe(function (Message) {
            _this.responseForUpdatedManager = Message;
            console.log(_this.responseForUpdatedManager.response);
            _this.managerUpdateButtonShowHide = false;
            _this.managerEditButtonShowHide = true;
            _this.isManagerReadOnly = true;
        }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    TimesheetComponent.prototype.hideClientEditButton = function () {
        this.clientUpdateButtonShowHide = true;
        this.clientEditButtonShowHide = false;
        this.isClientReadOnly = false;
    };
    TimesheetComponent.prototype.hideClientUpdateButton = function () {
        var _this = this;
        this.timesheetService.updateProjectManagerName(this.selectedResourceValue).subscribe(function (Message) {
            _this.responseForUpdatedClient = Message;
            _this.clientUpdateButtonShowHide = false;
            _this.clientEditButtonShowHide = true;
            _this.isClientReadOnly = true;
        }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    TimesheetComponent.prototype.hideClientEmailEditButton = function () {
        this.clientEmailUpdateButtonShowHide = true;
        this.clientEmailEditButtonShowHide = false;
        this.isClientEmailReadOnly = false;
    };
    TimesheetComponent.prototype.hideClientEmailUpdateButton = function (event) {
        var _this = this;
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(event.path[2].childNodes[0].value)) {
            this.timesheetService.updateClientManagerEmail(this.selectedResourceValue).subscribe(function (Message) {
                _this.responseForUpdatedClientEmail = Message;
                _this.clientEmailUpdateButtonShowHide = false;
                _this.clientEmailEditButtonShowHide = true;
                _this.isClientEmailReadOnly = true;
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
        else {
            this.emailAddressNotValidated = "Please enter the Correct EmailAddress";
            var self = this;
            setTimeout(function () { self.emailAddressNotValidated = ""; }, 2000);
        }
    };
    TimesheetComponent.prototype.hideUserEmailEditButton = function () {
        this.userEmailUpdateButtonShowHide = true;
        this.userEmailEditButtonShowHide = false;
        this.isUserEmailReadOnly = false;
    };
    TimesheetComponent.prototype.hideUserEmailUpdateButton = function (event) {
        var _this = this;
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(pattern.test(event.path[2].childNodes[0].value));
        if (pattern.test(event.path[2].childNodes[0].value)) {
            this.timesheetService.updateUserEmail(this.selectedResourceValue).subscribe(function (Message) {
                _this.responseForUpdatedUserEmail = Message;
                _this.userEmailUpdateButtonShowHide = false;
                _this.userEmailEditButtonShowHide = true;
                _this.isUserEmailReadOnly = true;
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
        else {
            this.emailAddressNotValidated = "Please enter the Correct EmailAddress";
            var self = this;
            setTimeout(function () { self.emailAddressNotValidated = ""; }, 2000);
        }
    };
    // add stakeholder email in the stakeholders email list
    TimesheetComponent.prototype.addEmail = function () {
        var _this = this;
        var index = this.selectedResourceValue.stakeholdersEmail.indexOf(this.stakeholderEmail);
        if (index > -1) {
            this.EmailIdExistMessage = true;
            var self = this;
            setTimeout(function () { self.EmailIdExistMessage = false; }, 2000);
        }
        else {
            this.selectedResourceValue.stakeholdersEmail.push(this.stakeholderEmail);
            this.timesheetService.addStakeholderEmail(this.selectedResourceValue).subscribe(function (Message) {
                _this.responseForAddedStakeholder = Message;
                console.log(_this.responseForAddedStakeholder.response);
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
            this.stakeholderEmail = "";
        }
    };
    // delete stakholder emails from list
    TimesheetComponent.prototype.deleteStakeHolderEmail = function (stakeholderEmail) {
        var _this = this;
        for (var i = this.selectedResourceValue.stakeholdersEmail.length - 1; i >= 0; i--) {
            if (this.selectedResourceValue.stakeholdersEmail[i] === stakeholderEmail)
                this.selectedResourceValue.stakeholdersEmail.splice(i, 1);
            this.timesheetService.deleteStakeholderEmail(this.selectedResourceValue).subscribe(function (Message) {
                _this.responseForDeletedStakeholder = Message;
                console.log(_this.responseForDeletedStakeholder.response);
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
    };
    // get week from date
    TimesheetComponent.prototype.getWeekFromDate = function (selectedDate) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var startingDate = selectedDate.getDate();
        for (var i = 0; i < 7; i++) {
            var dateObj = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
            //var month = dateObj.getUTCMonth() + 1;
            var month = dateObj.getMonth(); //months from 1-12
            var day = dateObj.getDate();
            var year = dateObj.getFullYear();
            var newdate = day + "-" + months[month];
            this.dates[i] = newdate;
            if (i == 0)
                this.startDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
            if (i == 6) {
                var lastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
                var dateObj = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), startingDate);
                //var month = dateObj.getUTCMonth() + 1;
                var month_1 = dateObj.getMonth(); //months from 1-12
                var day_1 = dateObj.getDate();
                var year_1 = dateObj.getFullYear();
                var newdate_1 = day_1 + "-" + months[month_1];
                this.dates[i] = newdate_1;
                this.endDate = lastDate;
            }
            startingDate++;
        }
        if (this.selectedResourceValue != undefined && this.startDate != undefined)
            this.getExistingTimesheet();
    };
    TimesheetComponent.prototype.addRow = function () {
        this.timesheetArray.push(new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_4__["WeeklyTask"]('', '', '', '', '', '', '', '', ''));
    };
    TimesheetComponent.prototype.deleteFieldValue = function (index) {
        this.timesheetArray.splice(index, 1);
        // total weekly hours
        this.sumOfWeeklyHours();
        var sumOfFirstDate = 0;
        var sumOfSecondDate = 0;
        var sumOfThirdDate = 0;
        var sumOfFourthDate = 0;
        var sumOfFifthDate = 0;
        var sumOfSixthDate = 0;
        var sumOfSeventhDate = 0;
        for (var i = 0; i < this.timesheetArray.length; i++) {
            sumOfFirstDate += parseInt(this.timesheetArray[i].dayOneHours || 0);
            sumOfSecondDate += parseInt(this.timesheetArray[i].dayTwoHours || 0);
            sumOfThirdDate += parseInt(this.timesheetArray[i].dayThreeHours || 0);
            sumOfFourthDate += parseInt(this.timesheetArray[i].dayFourHours || 0);
            sumOfFifthDate += parseInt(this.timesheetArray[i].dayFiveHours || 0);
            sumOfSixthDate += parseInt(this.timesheetArray[i].daySixHours || 0);
            sumOfSeventhDate += parseInt(this.timesheetArray[i].daySevenHours || 0);
            this.firstDateTotal = sumOfFirstDate;
            this.secondDateTotal = sumOfSecondDate;
            this.thirdDateTotal = sumOfThirdDate;
            this.fourthDateTotal = sumOfFourthDate;
            this.fifthDateTotal = sumOfFifthDate;
            this.sixthDateTotal = sumOfSixthDate;
            this.seventhDateTotal = sumOfSeventhDate;
        }
    };
    //chcek hours for validation
    TimesheetComponent.prototype.checkHours = function (event, hours, key, index) {
        //Total Weekly Hours
        this.sumOfWeeklyHours();
        if (event.target.classList[1] == "firstDate") {
            var sumOfFirstDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfFirstDate += parseInt(this.timesheetArray[i].dayOneHours || 0);
                if (sumOfFirstDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.firstDateTotal = sumOfFirstDate;
                this.sumOfWeeklyHours();
            }
        }
        if (event.target.classList[1] == "secondDate") {
            var sumOfSecondDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfSecondDate += parseInt(this.timesheetArray[i].dayTwoHours || 0);
                if (sumOfSecondDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.secondDateTotal = sumOfSecondDate;
            }
        }
        if (event.target.classList[1] == "thirdDate") {
            var sumOfThirdDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfThirdDate += parseInt(this.timesheetArray[i].dayThreeHours || 0);
                if (sumOfThirdDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.thirdDateTotal = sumOfThirdDate;
            }
        }
        if (event.target.classList[1] == "fourthDate") {
            var sumOfFourthDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfFourthDate += parseInt(this.timesheetArray[i].dayFourHours || 0);
                if (sumOfFourthDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.fourthDateTotal = sumOfFourthDate;
            }
        }
        if (event.target.classList[1] == "fifthDate") {
            var sumOfFifthDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfFifthDate += parseInt(this.timesheetArray[i].dayFiveHours || 0);
                if (sumOfFifthDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.fifthDateTotal = sumOfFifthDate;
            }
        }
        if (event.target.classList[1] == "sixthDate") {
            var sumOfSixthDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfSixthDate += parseInt(this.timesheetArray[i].daySixHours || 0);
                if (sumOfSixthDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.sixthDateTotal = sumOfSixthDate;
            }
        }
        if (event.target.classList[1] == "seventhDate") {
            var sumOfSeventhDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfSeventhDate += parseInt(this.timesheetArray[i].daySevenHours || 0);
                if (sumOfSeventhDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidationMessage = true;
                    var self = this;
                    setTimeout(function () { self.hourValidationMessage = false; }, 2000);
                }
                else
                    this.seventhDateTotal = sumOfSeventhDate;
            }
        }
    };
    // sum of weekly hours
    TimesheetComponent.prototype.sumOfWeeklyHours = function () {
        var totalWeekSum = 0;
        for (var i = 0; i < this.timesheetArray.length; i++) {
            for (var objectKey in this.timesheetArray[i]) {
                if (this.timesheetArray[i].hasOwnProperty(objectKey)) {
                    if (objectKey !== "taskName") {
                        if (objectKey !== "taskDescription") {
                            totalWeekSum += parseInt(this.timesheetArray[i][objectKey] || 0);
                            this.totalWeeklyHours = totalWeekSum;
                        }
                    }
                }
            }
        }
    };
    // save timesheet
    TimesheetComponent.prototype.saveTimesheet = function () {
        var _this = this;
        var valueIsEmptyOrNot = this.checkForEmptyData();
        if (valueIsEmptyOrNot) {
            this.totalHoursArrayOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
            this.timesheetService.postTimesheet(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursArrayOfEachDate)
                .subscribe(function (message) {
                _this.message = message.response;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
                _this.isReadOnlyForTimesheetRow = true;
                _this.editButtonVisibility = true;
                _this.saveButtonVisibility = false;
                _this.addAndEditButtonDisable = true;
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
    };
    // export to excel timesheet
    TimesheetComponent.prototype.exportToExcel = function () {
        var _this = this;
        var valueIsEmptyOrNot = this.checkForEmptyData();
        if (valueIsEmptyOrNot) {
            this.totalHoursArrayOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
            //this.checkForEmptyData();
            this.constantService.showLoader();
            this.timesheetService.exportToExcel(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursArrayOfEachDate)
                .subscribe(function (message) {
                try {
                    window.open("" + _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + "downloadexcelsheet", "_parent");
                    window.close();
                }
                catch (e) {
                    _this.message = e;
                    var self = _this;
                    setTimeout(function () { self.message = ""; }, 2000);
                }
                _this.message = message.response;
                var self = _this;
                setTimeout(function () {
                    self.message = "";
                    self.constantService.hideLoader();
                }, 2000);
                _this.isReadOnlyForTimesheetRow = true;
                _this.addAndEditButtonDisable = true;
                _this.editButtonVisibility = true;
                _this.saveButtonVisibility = false;
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
    };
    // hours should not be greater than two
    TimesheetComponent.prototype.checkNoOfDigitsInHours = function (event) {
        if (event.target.value > 2 || !(event.keyCode >= 48 && event.keyCode <= 57))
            event.preventDefault();
    };
    // check whether the selected task should not be empty
    TimesheetComponent.prototype.checkForEmptyData = function () {
        for (var i = 0; i < this.timesheetArray.length; i++) {
            for (var objectKey in this.timesheetArray[i]) {
                if (this.timesheetArray[i].hasOwnProperty(objectKey)) {
                    if (this.timesheetArray[i]["taskName"] == '') {
                        //$("#validationlabel").show();
                        this.validationMessageForMandatoryTaskName = true;
                        var self = this;
                        setTimeout(function () {
                            self.validationMessageForMandatoryTaskName = false;
                        }, 2000);
                        return false;
                    }
                }
            }
        }
        return true;
    };
    TimesheetComponent.prototype.toggleButton = function () {
        this.isReadOnlyForTimesheetRow = false;
        this.editButtonVisibility = false;
        this.saveButtonVisibility = true;
        this.addAndEditButtonDisable = false;
    };
    // set mail subject in the model
    TimesheetComponent.prototype.setMailSubject = function () {
        this.mailSubject = "Timesheet for approval from" + " " + this.startDate.toLocaleDateString() + "-" + this.endDate.toLocaleDateString();
    };
    // on key press check that both the email addresss is correct and password is not empty (called on keydown)
    TimesheetComponent.prototype.checkPasswordLength = function (event) {
        if (this.userPasswordForEmail != "") {
            this.invalidMailAddress = false;
        }
        else {
            this.invalidMailAddress = true;
        }
    };
    // show validation messages (called on blur)
    TimesheetComponent.prototype.showPasswordValidationMessageIfEmpty = function (event) {
        //let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (event.target.value == "") {
            this.emptyPasswordMessage = true;
        }
        else {
            this.emptyPasswordMessage = false;
        }
    };
    TimesheetComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    TimesheetComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    TimesheetComponent.prototype.sendMail = function (content) {
        var _this = this;
        this.clientMailId = "";
        this.ccEmailAddresses = "";
        this.userMailId = "";
        this.userPasswordForEmail = "";
        this.invalidMailAddress = true;
        var valueIsEmptyOrNot = this.checkForEmptyData();
        if (valueIsEmptyOrNot) {
            this.totalHoursArrayOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
            //this.checkForEmptyData();
            this.constantService.showLoader();
            this.timesheetService.exportToExcel(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursArrayOfEachDate)
                .subscribe(function (message) {
                _this.message = message.response;
                var self = _this;
                var con = content;
                setTimeout(function () {
                    self.message = "";
                    self.constantService.hideLoader();
                }, 2000);
                //mail functionality
                _this.email.getEmailTemplate().subscribe(function (emailTemplate) {
                    _this.userMailId = _this.selectedResourceValue.userMailAdd;
                    _this.clientMailId = _this.selectedResourceValue.clientMailAdd;
                    _this.setMailSubject();
                    _this.emailTemplate = emailTemplate;
                    var arrayLength = _this.selectedResourceValue.stakeholdersEmail.length;
                    for (var i = 0; i < arrayLength; i++) {
                        _this.ccEmailAddresses += _this.selectedResourceValue.stakeholdersEmail[i] + ";";
                    }
                    _this.ccEmailAddresses = _this.ccEmailAddresses.slice(0, _this.ccEmailAddresses.length - 1);
                    _this.open(con);
                }, function (error) {
                    _this.message = error;
                    var self = _this;
                    setTimeout(function () { self.message = ""; }, 2000);
                });
                _this.isReadOnlyForTimesheetRow = true;
                _this.addAndEditButtonDisable = true;
                _this.editButtonVisibility = true;
                _this.saveButtonVisibility = false;
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
    };
    // hide the modal
    TimesheetComponent.prototype.mailSent = function () {
        var _this = this;
        //$(".modal").remove(); 
        jquery__WEBPACK_IMPORTED_MODULE_1__(".modal-dialog").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_1__(".modal-backdrop.show").css("opacity", "0");
        this.constantService.showLoader();
        this.email.postEmail(this.userMailId, this.userPasswordForEmail, this.clientMailId, this.selectedResourceValue.stakeholdersEmail, this.mailSubject, this.emailTemplate).subscribe(function (message) {
            _this.constantService.hideLoader();
            _this.message = message.response;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        }, function (error) { return function (error) {
            _this.message = error.response;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        }; });
    };
    TimesheetComponent.prototype.expandDescriptionOnFocus = function (event) {
        if (!this.editButtonVisibility) {
            //event.srcElement.parentNode.style.opacity = "0.9";
            //event.srcElement.parentNode.style.zIndex = "9999";
            event.srcElement.parentNode.style.position = "relative";
            event.target.style.position = "absolute";
            event.target.style.zIndex = "9999";
            event.target.style.opacity = "0.9";
            event.target.style.width = "480px";
        }
    };
    TimesheetComponent.prototype.descriptionBoxBackToNormal = function (event) {
        event.srcElement.parentNode.style.width = "";
        event.srcElement.parentNode.style.height = "";
        event.srcElement.parentNode.style.opacity = "";
        event.srcElement.parentNode.style.width = "";
        event.srcElement.parentNode.style.background = "";
        event.srcElement.parentNode.style.position = "";
        event.target.style.width = "100%";
        event.target.style.height = "";
        event.target.style.opacity = "";
        event.target.style.position = "";
        event.target.style.zIndex = 1;
    };
    // get tasks from the apis
    TimesheetComponent.prototype.getTasks = function () {
        var _this = this;
        this.tasksService.getTasks().subscribe(function (tasks) {
            _this.tasksData = tasks;
            //changes to be checked in
            if (_this.tasksData != []) {
                for (var i = 0; i < _this.tasksData.length; i++) {
                    _this.tasksName.push(_this.tasksData[i].taskName);
                }
            }
        }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    TimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! ./timesheet.component.html */ "./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.css */ "./src/app/timesheet/timesheet.component.css")]
        }),
        __metadata("design:paramtypes", [_services_otp_otp_service__WEBPACK_IMPORTED_MODULE_12__["OtpService"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"], _services_email_email_service__WEBPACK_IMPORTED_MODULE_9__["EmailService"], _services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"], _services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_3__["TasksService"], _services_constants_constants_service__WEBPACK_IMPORTED_MODULE_5__["ConstantService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"]])
    ], TimesheetComponent);
    return TimesheetComponent;
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
    production: false,
    baseUrl: 'http://localhost:8030/'
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

module.exports = __webpack_require__(/*! D:\Employee-Timesheet-System\static-resources\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map