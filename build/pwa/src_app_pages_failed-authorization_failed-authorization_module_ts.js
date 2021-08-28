(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_failed-authorization_failed-authorization_module_ts"],{

/***/ 8416:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/failed-authorization/failed-authorization-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailedAuthorizationPageRoutingModule": () => (/* binding */ FailedAuthorizationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _failed_authorization_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./failed-authorization.page */ 2959);




const routes = [
    {
        path: '',
        component: _failed_authorization_page__WEBPACK_IMPORTED_MODULE_0__.FailedAuthorizationPage
    }
];
let FailedAuthorizationPageRoutingModule = class FailedAuthorizationPageRoutingModule {
};
FailedAuthorizationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FailedAuthorizationPageRoutingModule);



/***/ }),

/***/ 7434:
/*!***************************************************************************!*\
  !*** ./src/app/pages/failed-authorization/failed-authorization.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailedAuthorizationPageModule": () => (/* binding */ FailedAuthorizationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _failed_authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./failed-authorization-routing.module */ 8416);
/* harmony import */ var _failed_authorization_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./failed-authorization.page */ 2959);







let FailedAuthorizationPageModule = class FailedAuthorizationPageModule {
};
FailedAuthorizationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _failed_authorization_routing_module__WEBPACK_IMPORTED_MODULE_0__.FailedAuthorizationPageRoutingModule
        ],
        declarations: [_failed_authorization_page__WEBPACK_IMPORTED_MODULE_1__.FailedAuthorizationPage]
    })
], FailedAuthorizationPageModule);



/***/ }),

/***/ 2959:
/*!*************************************************************************!*\
  !*** ./src/app/pages/failed-authorization/failed-authorization.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FailedAuthorizationPage": () => (/* binding */ FailedAuthorizationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_failed_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./failed-authorization.page.html */ 6753);
/* harmony import */ var _failed_authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./failed-authorization.page.scss */ 7363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let FailedAuthorizationPage = class FailedAuthorizationPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['failed_auth'];
        });
    }
    backbtn() {
        this.route.navigate(['/access-code', {
                t: new Date().getTime()
            }]);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
FailedAuthorizationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FailedAuthorizationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-failed-authorization',
        template: _raw_loader_failed_authorization_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_failed_authorization_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FailedAuthorizationPage);



/***/ }),

/***/ 7363:
/*!***************************************************************************!*\
  !*** ./src/app/pages/failed-authorization/failed-authorization.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.back-btn {\n  padding-left: 15px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 15px;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhaWxlZC1hdXRob3JpemF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBR0oiLCJmaWxlIjoiZmFpbGVkLWF1dGhvcml6YXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9uIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmFjay1idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIH1cclxuICAubmV4dC1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICJdfQ== */");

/***/ }),

/***/ 6753:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/failed-authorization/failed-authorization.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <p>{{results.auth_p_1}}</p>\r\n  <p>{{results.auth_p_2}}</p>\r\n  <p>{{results.www_link}}</p>\r\n  \r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.btn_report}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.try_again}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_failed-authorization_failed-authorization_module_ts.js.map