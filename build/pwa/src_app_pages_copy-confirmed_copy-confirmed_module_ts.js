(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_copy-confirmed_copy-confirmed_module_ts"],{

/***/ 37604:
/*!***********************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyConfirmedPageRoutingModule": () => (/* binding */ CopyConfirmedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _copy_confirmed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-confirmed.page */ 58937);




const routes = [
    {
        path: '',
        component: _copy_confirmed_page__WEBPACK_IMPORTED_MODULE_0__.CopyConfirmedPage,
    },
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

/***/ 14581:
/*!***************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyConfirmedPageModule": () => (/* binding */ CopyConfirmedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _copy_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copy-confirmed-routing.module */ 37604);
/* harmony import */ var _copy_confirmed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-confirmed.page */ 58937);







let CopyConfirmedPageModule = class CopyConfirmedPageModule {
};
CopyConfirmedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _copy_confirmed_routing_module__WEBPACK_IMPORTED_MODULE_0__.CopyConfirmedPageRoutingModule],
        declarations: [_copy_confirmed_page__WEBPACK_IMPORTED_MODULE_1__.CopyConfirmedPage],
    })
], CopyConfirmedPageModule);



/***/ }),

/***/ 58937:
/*!*************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CopyConfirmedPage": () => (/* binding */ CopyConfirmedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_copy_confirmed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./copy-confirmed.page.html */ 55583);
/* harmony import */ var _copy_confirmed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./copy-confirmed.page.scss */ 54480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CopyConfirmedPage = class CopyConfirmedPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].copy_confirm;
        });
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

/***/ 54480:
/*!***************************************************************!*\
  !*** ./src/app/pages/copy-confirmed/copy-confirmed.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 20px;\n}\n\np {\n  padding-bottom: 25px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-left: 0px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcHktY29uZmlybWVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLG9CQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBSUYiLCJmaWxlIjoiY29weS1jb25maXJtZWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5saXN0LXF1ZXN0aW9uIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcbi5uZXh0LWJ0biB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxucCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuLlJlcXVpcmVkLWRpdiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 55583:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/copy-confirmed/copy-confirmed.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.copy_confirmed}}</p>\r\n  </div>\r\n  <div class=\"Required-div\">\r\n    <p>{{results.yccm}}</p>\r\n    <p>{{results.yccm1}}</p>\r\n    {{results.yccm2}}\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.back}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_copy-confirmed_copy-confirmed_module_ts.js.map