(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_calloutoforder-access00002-error_calloutoforder-access00002-error_module_ts"],{

/***/ 77973:
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder-access00002-error/calloutoforder-access00002-error-routing.module.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalloutoforderAccess00002ErrorPageRoutingModule": () => (/* binding */ CalloutoforderAccess00002ErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _calloutoforder_access00002_error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calloutoforder-access00002-error.page */ 86054);




const routes = [
    {
        path: '',
        component: _calloutoforder_access00002_error_page__WEBPACK_IMPORTED_MODULE_0__.CalloutoforderAccess00002ErrorPage,
    },
];
let CalloutoforderAccess00002ErrorPageRoutingModule = class CalloutoforderAccess00002ErrorPageRoutingModule {
};
CalloutoforderAccess00002ErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CalloutoforderAccess00002ErrorPageRoutingModule);



/***/ }),

/***/ 77433:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder-access00002-error/calloutoforder-access00002-error.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalloutoforderAccess00002ErrorPageModule": () => (/* binding */ CalloutoforderAccess00002ErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _calloutoforder_access00002_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calloutoforder-access00002-error-routing.module */ 77973);
/* harmony import */ var _calloutoforder_access00002_error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calloutoforder-access00002-error.page */ 86054);







let CalloutoforderAccess00002ErrorPageModule = class CalloutoforderAccess00002ErrorPageModule {
};
CalloutoforderAccess00002ErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _calloutoforder_access00002_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.CalloutoforderAccess00002ErrorPageRoutingModule],
        declarations: [_calloutoforder_access00002_error_page__WEBPACK_IMPORTED_MODULE_1__.CalloutoforderAccess00002ErrorPage],
    })
], CalloutoforderAccess00002ErrorPageModule);



/***/ }),

/***/ 86054:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder-access00002-error/calloutoforder-access00002-error.page.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalloutoforderAccess00002ErrorPage": () => (/* binding */ CalloutoforderAccess00002ErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_calloutoforder_access00002_error_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./calloutoforder-access00002-error.page.html */ 95372);
/* harmony import */ var _calloutoforder_access00002_error_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calloutoforder-access00002-error.page.scss */ 24739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CalloutoforderAccess00002ErrorPage = class CalloutoforderAccess00002ErrorPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].calloutoforder_access00002_error;
        });
        if (this.userObject.lastname !== undefined) {
            const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
            if (lastName === 'OOOOO') {
            }
        }
    }
    confirm() {
        this.route.navigate(['/request-access-code']);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
CalloutoforderAccess00002ErrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CalloutoforderAccess00002ErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-calloutoforder-access00002-error',
        template: _raw_loader_calloutoforder_access00002_error_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_calloutoforder_access00002_error_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CalloutoforderAccess00002ErrorPage);



/***/ }),

/***/ 24739:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder-access00002-error/calloutoforder-access00002-error.page.scss ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGxvdXRvZm9yZGVyLWFjY2VzczAwMDAyLWVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0YiLCJmaWxlIjoiY2FsbG91dG9mb3JkZXItYWNjZXNzMDAwMDItZXJyb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5saXN0LXF1ZXN0aW9uIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcblxyXG4ubmV4dC1idG4ge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 95372:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calloutoforder-access00002-error/calloutoforder-access00002-error.page.html ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <p>{{results.first_para}}</p>\r\n  <p>{{results.sec_para}}</p>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.rbtn}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\"> </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"printbtn   ()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calloutoforder-access00002-error_calloutoforder-access00002-error_module_ts.js.map