(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_copy-confirmed_copy-confirmed_module_ts"],{

/***/ 7604:
/*!***********************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyConfirmedPageRoutingModule": () => (/* binding */ CopyConfirmedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _copy_confirmed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-confirmed.page */ 8937);




const routes = [
    {
        path: '',
        component: _copy_confirmed_page__WEBPACK_IMPORTED_MODULE_0__.CopyConfirmedPage
    }
];
let CopyConfirmedPageRoutingModule = class CopyConfirmedPageRoutingModule {
};
CopyConfirmedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CopyConfirmedPageRoutingModule);



/***/ }),

/***/ 4581:
/*!***************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyConfirmedPageModule": () => (/* binding */ CopyConfirmedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _copy_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-confirmed-routing.module */ 7604);
/* harmony import */ var _copy_confirmed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-confirmed.page */ 8937);







let CopyConfirmedPageModule = class CopyConfirmedPageModule {
};
CopyConfirmedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _copy_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__.CopyConfirmedPageRoutingModule
        ],
        declarations: [_copy_confirmed_page__WEBPACK_IMPORTED_MODULE_1__.CopyConfirmedPage]
    })
], CopyConfirmedPageModule);



/***/ }),

/***/ 8937:
/*!*************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyConfirmedPage": () => (/* binding */ CopyConfirmedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_copy_confirmed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./copy-confirmed.page.html */ 5583);
/* harmony import */ var _copy_confirmed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-confirmed.page.scss */ 4480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let CopyConfirmedPage = class CopyConfirmedPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    nextbtn() {
        this.route.navigate(['/test-results']);
    }
    backbtn() {
        this.route.navigate(['/ballot-fingerprint']);
    }
};
CopyConfirmedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CopyConfirmedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-copy-confirmed',
        template: _raw_loader_copy_confirmed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_copy_confirmed_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CopyConfirmedPage);



/***/ }),

/***/ 4480:
/*!***************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 20px;\n}\n\np {\n  padding-bottom: 25px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-left: 0px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcHktY29uZmlybWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFFRTtFQUNFLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFFQTtFQUNJLG9CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoiY29weS1jb25maXJtZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9uIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmFjay1idG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuLm5leHQtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG4uUmVxdWlyZWQtZGl2e1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 5583:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/copy-confirmed/copy-confirmed.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>Copy-Confirmed</p>\r\n  </div>\r\n  <div class=\"Required-div\">\r\n    <p>Your code has been copied to memory. </p><p>Leave the ABC App open.</p> Go to your test\r\n    site, paste your code, get your result and return.\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\" >\r\n          Back\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"chevron-back-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          Next\r\n          <ion-icon\r\n            slot=\"end\"\r\n            name=\"chevron-forward-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_copy-confirmed_copy-confirmed_module_ts.js.map