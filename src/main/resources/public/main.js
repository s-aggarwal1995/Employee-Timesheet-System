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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/timesheet', pathMatch: 'full' },
    { path: 'timesheet', component: _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetComponent"] }
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

module.exports = "<div *ngIf=\"ConstantService.displayLoader\" style=\"width:100%;height:100%;opacity:0.7;z-index:9999;background-color:gray;position:fixed;\">\r\n    <img src=\"../assets/imgs/loader.gif\" style=\"margin:auto;display:block;border-radius:7px;position:relative;top:43%;width:86px\">\r\n</div>\r\n<router-outlet></router-outlet>"

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
        this.title = 'app';
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/primeng */ "./node_modules/primeng/primeng.js");
/* harmony import */ var primeng_primeng__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primeng_primeng__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/timesheet/timesheet.service */ "./src/app/services/timesheet/timesheet.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                primeng_primeng__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
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
        this.displayLoader = false;
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

module.exports = ".wrapperpadding{\r\n    padding:15px 0px;\r\n}\r\n#weeklytimesheetheading{\r\n    color:red;\r\n}\r\n/* css for heading */\r\n/* If the screen size is 601px wide or more, set the font-size of <div> to 80px */\r\n@media screen and (min-width: 601px) {   /* medium and large screen is covered */\r\n\t.headingclass {\r\n\t  font-size: 30px;\r\n\t}\r\n\t.weeklyheadingclass {\r\n\t\tfont-size: 20px;\r\n\t}\r\n  }\r\n/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */\r\n@media screen and (max-width: 600px) {  /* small and extra small screen is covered */\r\n\t.headingclass {\r\n\t\tfont-size: 20px;\r\n\t  }\r\n\t  .weeklyheadingclass {\r\n\t\t  font-size: 10px;\r\n\t  }\r\n  }\r\n.buttoncontainer {\r\n\tpadding:50px;\r\n}\r\n.timesheettablediv{\r\n\toverflow: auto;\r\n\twidth:100%;\r\n\tmargin:5px;\r\n}\r\n/* for display view in a horizontal format */\r\n.wrapper{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n.col-centered{\r\n  float: none;\r\n  margin: 0 auto;\r\n  position: center;\r\n  margin-top: 30%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/timesheet/timesheet.component.html":
/*!****************************************************!*\
  !*** ./src/app/timesheet/timesheet.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapperpadding\">\r\n    <div class=\"container\">\r\n        <div *ngIf=\"!selectedResourceValue\" class=\"col-md-6 centered text-center col-centered\">\r\n            <p>\r\n                <select name=\"resource\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue\" (change)=\"getSelectedResourceValue()\">\r\n                    <option value=\"undefined\" selected disabled>Select the resource name</option>\r\n                    <option *ngFor=\"let resource of resources\" [ngValue]=\"resource\">{{resource.userName}}</option>\r\n                </select>\r\n            </p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"selectedResourceValue\">\r\n    <div class=\"wrapper\">\r\n        <!-- first column of row -->\r\n        <!-- second column of row -->\r\n        <div class=\"col-md-8\" style=\"background-color:#00303c; color:#ffffff\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <p>Resource Name\r\n                        <select name=\"resource\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue\" (change)=\"getSelectedResourceValue()\" >\r\n                            <option value=\"\" selected disabled>Select the resource name</option>\r\n                            <option *ngFor=\"let resource of resources\" [ngValue]=\"resource\">{{resource.userName}}</option>\r\n                        </select>\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <p>Name of the Project\r\n                        <input type=\"text\" class=\"form-control\" value=\"Teach For America\" readonly>\r\n                    </p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <p>Select Date:\r\n                        <p-calendar readonlyInput=\"true\" class=\"form-control\" [disabledDays]=\"[0,2,3,4,5,6]\" [(ngModel)]=\"startDate\"  (onSelect)=\"getWeekFromDate(startDate)\"></p-calendar>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"timesheettablediv\" style=\"width:100%\">\r\n                <table style=\"width:100%;\" class=\"taskstable\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th style=\"width:15%;text-align:center\">Task Name</th>\r\n                            <th style=\"width:15%;text-align:center\">Description</th>\r\n                            <th style=\"width:10%\" *ngFor=\"let date of dates\">{{date}}</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr *ngFor=\"let tasks of timesheetArray; let i = index\">\r\n                            <td>\r\n                                <select class=\"form-control\" [(ngModel)]=\"tasks.taskName\" [disabled]=\"isReadOnlyForTimesheetRow\">\r\n                                    <option value=\"\" selected disabled>Select the Task</option>\r\n                                    <option *ngFor=\"let task of tasksData\" [ngValue]=\"task.taskName\">{{task.taskName}}</option>\r\n                                </select>\r\n                            </td>\r\n                            <td>\r\n                                    <!-- (blur)=\"checkTaskValidation(tasks.taskDescription,'taskDescription',i)\" -->\r\n                                <input class=\"form-control\" placeholder=\"Description\" \r\n                                    type=\"text\" id=\"\" [(ngModel)]=\"tasks.taskDescription\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control firstDate\" id=\"firstDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" (blur)=\"checkHours($event,tasks.dayOneHours,'dayOneHours',i)\"\r\n                                    type=\"text\" [(ngModel)]=\"tasks.dayOneHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control secondDate\" id=\"secondDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\"\r\n                                    (blur)=\"checkHours($event,tasks.dayTwoHours,'dayTwoHours',i)\" type=\"text\" [(ngModel)]=\"tasks.dayTwoHours\"\r\n                                    name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control thirdDate\" id=\"thirdDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" placeholder=\"hours\"\r\n                                    (blur)=\"checkHours($event,tasks.dayThreeHours,'dayThreeHours',i)\" type=\"text\" [(ngModel)]=\"tasks.dayThreeHours\"\r\n                                    name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control fourthDate\" id=\"fourthDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\"\r\n                                    placeholder=\"hours\" placeholder=\"hours\" (blur)=\"checkHours($event,tasks.dayFourHours,'dayFourHours',i)\"\r\n                                    type=\"text\" id=\"\" [(ngModel)]=\"tasks.dayFourHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control fifthDate\" id=\"fifthDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" (blur)=\"checkHours($event,tasks.dayFiveHours,'dayFiveHours',i)\"\r\n                                    type=\"text\" id=\"\" [(ngModel)]=\"tasks.dayFiveHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\" />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control sixthDate\" id=\"sixthDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\" (keyup)=\"checkHours($event,tasks.daySixHours,'daySixHours',i)\"\r\n                                    type=\"text\" id=\"\" [(ngModel)]=\"tasks.daySixHours\" name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control seventhDate\" id=\"seventhDateHour\" (keypress)=checkNoOfDigitsInHours($event) placeholder=\"hours\"\r\n                                    (blur)=\"checkHours($event,tasks.daySevenHours,'daySevenHours',i)\" type=\"text\" id=\"\" [(ngModel)]=\"tasks.daySevenHours\"\r\n                                    name=\"\" [readonly]=\"isReadOnlyForTimesheetRow\"/>\r\n                            </td>\r\n                            <td>\r\n                                <button *ngIf=\"i==0\" class=\"btn btn-default btn-success\" type=\"button\" (click)=\"addRow()\"  [disabled]=\"addAndEditButtonDisable\">Add</button>\r\n                                <button *ngIf=\"i>0\" class=\"btn btn-default btn-danger\" type=\"button\" (click)=\"deleteFieldValue(i)\"  [disabled]=\"addAndEditButtonDisable\">Delete</button>\r\n                            </td>\r\n                        </tr>\r\n\r\n\r\n                        <tr>\r\n                            <td colspan=\"2\">\r\n                                Total Timesheet Hours\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"firstdatetotal\" type=\"text\" [(ngModel)]=\"firstDateTotal\" name=\"\" readonly\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"seconddatetotal\" type=\"text\" [(ngModel)]=\"secondDateTotal\" name=\"\" readonly\r\n                                />\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"thirdDatthirddatetotaleHour\" type=\"text\" [(ngModel)]=\"thirdDateTotal\"\r\n                                    name=\"\" readonly/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"fouthdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"fourthDateTotal\" name=\"\"\r\n                                    readonly/>\r\n\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"fifthdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"fifthDateTotal\" name=\"\"\r\n                                    readonly/>\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"sixthdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"sixthDateTotal\" name=\"\"\r\n                                    readonly/>\r\n\r\n                            </td>\r\n                            <td>\r\n                                <input class=\"form-control\" placeholder=\"Total\" id=\"seventhdatetotal\" type=\"text\" id=\"\" [(ngModel)]=\"seventhDateTotal\" name=\"\"\r\n                                    readonly/>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"row\" style=\"padding:50px 0px 0px 0px\">\r\n                <div class=\"col-md-6\">\r\n                    <p>Total Weekly Hours\r\n                        <input id=\"totalweeklyhours\" [value]=\"totalWeeklyHours\" class=\"form-control\" type=\"text\" readonly>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div>\r\n                <label style=\"color:red;\" *ngIf=\"mandatoryValidation\">Task Name is Mandatory</label>\r\n                <label style=\"color:red;\" *ngIf=\"hourValidation\">Hours Cannot be greater than 24</label>\r\n                <label style=\"color:red;\" *ngIf=\"message\">{{message}}</label>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <!-- third column of row -->\r\n        <div class=\"col-md-3\">\r\n\r\n            <div style=\"margin:10px 0px;\">\r\n                <label style=\"display:inline\">Project Manager Name</label>\r\n                <div class=\"input-group\">\r\n                    <div class=\"input-group\">\r\n                        <input id=\"managername\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.managerEmail\" [readonly]=\"isManagerReadOnly\"\r\n                        />\r\n                        <span class=\"input-group-btn\">\r\n                            <button *ngIf=\"managerEditButtonShowHide\" id=\"clientmanagereditbutton\" (click)=\"hideManagerEditButton()\" class=\"btn btn-default btn-warning edit-button\"\r\n                                type=\"button\">Edit</button>\r\n                            <button *ngIf=\"managerUpdateButtonShowHide\" id=\"clientmanagerupdatebutton\" (click)=\"hideManagerUpdateButton()\" class=\"btn btn-default btn-primary update-button\"\r\n                                type=\"button\">Update</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"margin:10px 0px;\">\r\n                <label style=\"display:inline\">Client Manager Name</label>\r\n                <div class=\"input-group\">\r\n                    <input id=\"clientmanagername\" type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedResourceValue.clientEmail\" [readonly]=\"isClientReadOnly\"\r\n                    />\r\n                    <span class=\"input-group-btn\">\r\n                        <button *ngIf=\"clientEditButtonShowHide\" id=\"clientmanagereditbutton\" (click)=\"hideClientEditButton()\" class=\"btn btn-default btn-warning edit-button\"\r\n                            type=\"button\">Edit</button>\r\n                        <button *ngIf=\"clientUpdateButtonShowHide\" id=\"clientmanagerupdatebutton\" (click)=\"hideClientUpdateButton()\" class=\"btn btn-default btn-primary update-button\"\r\n                            type=\"button\">Update</button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <table class=\"table\">\r\n                <tr>\r\n                    <th>StakeHolders Email</th>\r\n                </tr>\r\n                <tbody>\r\n                    <tr *ngFor=\"let stakeholderEmail of selectedResourceValue.stakeholdersEmail\">\r\n                        <td>{{stakeholderEmail}}</td>\r\n                        <button class=\"btn btn-default btn-danger\" type=\"button\" (click)=\"deleteStakeHolderEmail(stakeholderEmail)\">Delete</button>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <form (ngSubmit)=\"submit(userform)\" #userform=\"ngForm\">\r\n                <label>Add StakeHolder Email</label>\r\n                <div class=\"input-group\">\r\n                    <input required class=\"form-control\" id=\"stakeholderEmail\" name=\"emailaddress\" #emailaddress=\"ngModel\" pattern=\"^([\\w\\.\\-]+)@([\\w\\-]+)((\\.(\\w){2,3})+)$\"\r\n                        ngModel [(ngModel)]=\"stakeholderEmail\" type=\"text\">\r\n                    <span class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default btn-success add-stakeholder\" (click)=\"addEmail()\" [disabled]=\"!userform.valid\" type=\"submit\">Add</button>\r\n                    </span>\r\n                </div>\r\n                <div *ngIf=\"!emailaddress.valid && emailaddress.touched\">\r\n                    <p *ngIf=\"emailaddress?.errors?.pattern\" style=\"color:red\">Invalid Email Address</p>\r\n                </div>\r\n            </form>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"wrapper\" style=\"padding:15px 0px 0px 0px;\">\r\n        <div class=\"col-md-4\">\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n            <button *ngIf=\"saveButtonVisibility\" style=\"background-color: #00303c;color:white\" id=\"btnSave\" class=\"btn  btn-md center-block\" (click)=\"saveTimesheet()\">Save Timesheet</button>\r\n            <button *ngIf=\"editButtonVisibility\" (click)=\"toggleButton()\"  id=\"btnSave\" class=\"btn btn-warning\">Edit Timesheet</button>\r\n            <button class=\"btn btn-primary btn-md center-block\" (click)=\"exportToExcel()\">Generate Excel Sheet</button>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n        </div>\r\n    </div>\r\n   \r\n    \r\n</div>\r\n\r\n"

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
/* harmony import */ var _services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/timesheet/timesheet.service */ "./src/app/services/timesheet/timesheet.service.ts");
/* harmony import */ var _services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tasks/tasks.service */ "./src/app/services/tasks/tasks.service.ts");
/* harmony import */ var _models_weeklyTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/weeklyTask */ "./src/app/models/weeklyTask.ts");
/* harmony import */ var _services_constants_constants_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/constants/constants.service */ "./src/app/services/constants/constants.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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
    function TimesheetComponent(timesheetService, tasksService, constantService) {
        this.timesheetService = timesheetService;
        this.tasksService = tasksService;
        this.constantService = constantService;
        this.addAndEditButtonDisable = false;
        this.editButtonVisibility = false;
        this.saveButtonVisibility = true;
        this.isReadOnlyForTimesheetRow = false;
        this.hourValidation = false;
        this.mandatoryValidation = false;
        this.totalWeeklyHours = '';
        this.firstDateTotal = '';
        this.secondDateTotal = '';
        this.thirdDateTotal = '';
        this.fourthDateTotal = '';
        this.fifthDateTotal = '';
        this.sixthDateTotal = '';
        this.seventhDateTotal = '';
        this.resources = [];
        this.tasksData = [];
        this.timesheetArray = [];
        this.tasks = new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_3__["WeeklyTask"]('', '', '', '', '', '', '', '', '');
        this.exportToExcelTimesheet = [];
        this.dates = [];
        //defaultDate:Date;
        this.clientEditButtonShowHide = true;
        this.clientUpdateButtonShowHide = false;
        this.managerEditButtonShowHide = true;
        this.managerUpdateButtonShowHide = false;
        this.isManagerReadOnly = true;
        this.isClientReadOnly = true;
    }
    TimesheetComponent.prototype.ngOnInit = function () {
        // to get the resources name from the service
        this.getResources();
        // to get task in dropdown from the service
        this.getTasks();
        // get the current monday of the week
        this.startDate = this.getMonday();
        // get week from date 
        this.getWeekFromDate(this.startDate);
    };
    TimesheetComponent.prototype.getSelectedResourceValue = function () {
        console.log(this.selectedResourceValue);
        console.log(this.startDate);
        this.getExistingTimesheet();
    };
    TimesheetComponent.prototype.getMonday = function () {
        var d = new Date();
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff - 7));
    };
    TimesheetComponent.prototype.getExistingTimesheet = function () {
        var _this = this;
        this.constantService.showLoader();
        this.timesheetService.getTimesheetAccordingToWeekAndUser(this.startDate, this.selectedResourceValue).subscribe(function (timesheet) {
            console.log(timesheet);
            _this.constantService.hideLoader();
            //this.completeTimesheet = timesheet;
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
                // if existing timesheet is present then show previous manager and client manager if present
                //this.selectedResourceValue=timesheet.user;
            }
            else {
                _this.timesheetArray = [];
                _this.tasks = new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_3__["WeeklyTask"]('', '', '', '', '', '', '', '', '');
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
    TimesheetComponent.prototype.getResources = function () {
        var _this = this;
        this.timesheetService.getResources().subscribe(function (resources) { return _this.resources = resources; }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    TimesheetComponent.prototype.getTasks = function () {
        var _this = this;
        this.tasksService.getTasks().subscribe(function (tasks) { return _this.tasksData = tasks; }, function (error) {
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
            console.log(_this.responseForUpdatedClient.response);
            _this.clientUpdateButtonShowHide = false;
            _this.clientEditButtonShowHide = true;
            _this.isClientReadOnly = true;
        }, function (error) {
            _this.message = error;
            var self = _this;
            setTimeout(function () { self.message = ""; }, 2000);
        });
    };
    TimesheetComponent.prototype.addEmail = function () {
        var _this = this;
        //var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //this.stakeholderEmails.push(this.stakeholderEmail);
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
    };
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
    TimesheetComponent.prototype.getWeekFromDate = function (selectedDate) {
        console.log(selectedDate);
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
        this.timesheetArray.push(new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_3__["WeeklyTask"]('', '', '', '', '', '', '', '', ''));
        console.log(this.timesheetArray);
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
    // checkTaskValidation(taskDesp, id, i) {
    //   console.log(i);
    //   console.log(this.timesheetArray[i]);
    //   console.log(this.timesheetArray[i].taskDescription);
    //   if (taskDesp.length > 20) {
    //     alert("task length should not be greater than 20");
    //     this.timesheetArray[i][id] = "";
    //     return;
    //   }
    // }
    TimesheetComponent.prototype.checkHours = function (event, hours, key, index) {
        //Total Weekly Hours
        this.sumOfWeeklyHours();
        if (event.target.classList[1] == "firstDate") {
            var sumOfFirstDate = 0;
            for (var i = 0; i < this.timesheetArray.length; i++) {
                sumOfFirstDate += parseInt(this.timesheetArray[i].dayOneHours || 0);
                if (sumOfFirstDate > 24) {
                    this.timesheetArray[index][key] = '';
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
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
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
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
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
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
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
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
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
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
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
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
                    this.hourValidation = true;
                    var self = this;
                    setTimeout(function () { self.hourValidation = false; }, 2000);
                }
                else
                    this.seventhDateTotal = sumOfSeventhDate;
            }
        }
    };
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
    TimesheetComponent.prototype.saveTimesheet = function () {
        var _this = this;
        var valueIsEmptyOrNot = this.checkForEmptyData();
        if (valueIsEmptyOrNot) {
            this.totalHoursOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
            this.timesheetService.postTimesheet(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursOfEachDate)
                .subscribe(function (message) {
                _this.message = message.response;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
                _this.isReadOnlyForTimesheetRow = true;
                _this.editButtonVisibility = true;
                _this.saveButtonVisibility = false;
                _this.addAndEditButtonDisable = true;
                //this.setTimesheetArrayToDefault();
            }, function (error) {
                _this.message = error;
                var self = _this;
                setTimeout(function () { self.message = ""; }, 2000);
            });
        }
    };
    TimesheetComponent.prototype.exportToExcel = function () {
        var _this = this;
        var valueIsEmptyOrNot = this.checkForEmptyData();
        if (valueIsEmptyOrNot) {
            this.totalHoursOfEachDate = [this.firstDateTotal, this.secondDateTotal, this.thirdDateTotal, this.fourthDateTotal, this.fifthDateTotal, this.sixthDateTotal, this.seventhDateTotal];
            //this.checkForEmptyData();
            //this.constantService.showLoader();
            this.timesheetService.exportToExcel(this.timesheetArray, this.selectedResourceValue, this.startDate, this.endDate, this.dates, this.totalWeeklyHours, this.totalHoursOfEachDate)
                .subscribe(function (message) {
                _this.message = message.response;
                var self = _this;
                setTimeout(function () {
                    self.message = "";
                    // self.constantService.hideLoader();
                }, 2000);
                try {
                    window.open("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + "downloadexcelsheet");
                    window.close();
                }
                catch (e) {
                    _this.message = e;
                    var self = _this;
                    setTimeout(function () { self.message = ""; }, 2000);
                }
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
    TimesheetComponent.prototype.setTimesheetArrayToDefault = function () {
        this.firstDateTotal = '';
        this.secondDateTotal = '';
        this.thirdDateTotal = '';
        this.fourthDateTotal = '';
        this.fifthDateTotal = '';
        this.sixthDateTotal = '';
        this.seventhDateTotal = '';
        this.timesheetArray = [];
        this.tasks = new _models_weeklyTask__WEBPACK_IMPORTED_MODULE_3__["WeeklyTask"]('', '', '', '', '', '', '', '', '');
        this.timesheetArray.push(this.tasks);
        this.totalWeeklyHours = '';
    };
    TimesheetComponent.prototype.checkNoOfDigitsInHours = function (event) {
        if (event.target.value > 2 || !(event.keyCode >= 48 && event.keyCode <= 57))
            event.preventDefault();
    };
    TimesheetComponent.prototype.checkForEmptyData = function () {
        for (var i = 0; i < this.timesheetArray.length; i++) {
            for (var objectKey in this.timesheetArray[i]) {
                if (this.timesheetArray[i].hasOwnProperty(objectKey)) {
                    if (this.timesheetArray[i]["taskName"] == '') {
                        //$("#validationlabel").show();
                        this.mandatoryValidation = true;
                        var self = this;
                        setTimeout(function () {
                            self.mandatoryValidation = false;
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
        // if user get timesheet
        this.addAndEditButtonDisable = false;
    };
    TimesheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timesheet',
            template: __webpack_require__(/*! ./timesheet.component.html */ "./src/app/timesheet/timesheet.component.html"),
            styles: [__webpack_require__(/*! ./timesheet.component.css */ "./src/app/timesheet/timesheet.component.css")]
        }),
        __metadata("design:paramtypes", [_services_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_1__["TimesheetService"], _services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_2__["TasksService"], _services_constants_constants_service__WEBPACK_IMPORTED_MODULE_4__["ConstantService"]])
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