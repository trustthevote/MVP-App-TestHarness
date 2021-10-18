(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_check-network-access00005-error_check-network-access00005-error_module_ts"],{

/***/ 52861:
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/check-network-access00005-error/check-network-access00005-error-routing.module.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkAccess00005ErrorPageRoutingModule": () => (/* binding */ CheckNetworkAccess00005ErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _check_network_access00005_error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-network-access00005-error.page */ 19697);




const routes = [
    {
        path: '',
        component: _check_network_access00005_error_page__WEBPACK_IMPORTED_MODULE_0__.CheckNetworkAccess00005ErrorPage,
    },
];
let CheckNetworkAccess00005ErrorPageRoutingModule = class CheckNetworkAccess00005ErrorPageRoutingModule {
};
CheckNetworkAccess00005ErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckNetworkAccess00005ErrorPageRoutingModule);



/***/ }),

/***/ 3083:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/check-network-access00005-error/check-network-access00005-error.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkAccess00005ErrorPageModule": () => (/* binding */ CheckNetworkAccess00005ErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _check_network_access00005_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-network-access00005-error-routing.module */ 52861);
/* harmony import */ var _check_network_access00005_error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-network-access00005-error.page */ 19697);







let CheckNetworkAccess00005ErrorPageModule = class CheckNetworkAccess00005ErrorPageModule {
};
CheckNetworkAccess00005ErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _check_network_access00005_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckNetworkAccess00005ErrorPageRoutingModule],
        declarations: [_check_network_access00005_error_page__WEBPACK_IMPORTED_MODULE_1__.CheckNetworkAccess00005ErrorPage],
    })
], CheckNetworkAccess00005ErrorPageModule);



/***/ }),

/***/ 19697:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/check-network-access00005-error/check-network-access00005-error.page.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkAccess00005ErrorPage": () => (/* binding */ CheckNetworkAccess00005ErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_check_network_access00005_error_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check-network-access00005-error.page.html */ 10731);
/* harmony import */ var _check_network_access00005_error_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-network-access00005-error.page.scss */ 2126);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CheckNetworkAccess00005ErrorPage = class CheckNetworkAccess00005ErrorPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].check_network_access00005_error;
        });
    }
    confirm() {
        this.route.navigate([
            '/access-code',
            {
                t: new Date().getTime(),
            },
        ]);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
CheckNetworkAccess00005ErrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckNetworkAccess00005ErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-check-network-access00005-error',
        template: _raw_loader_check_network_access00005_error_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_network_access00005_error_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckNetworkAccess00005ErrorPage);



/***/ }),

/***/ 2126:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/check-network-access00005-error/check-network-access00005-error.page.scss ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLW5ldHdvcmstYWNjZXNzMDAwMDUtZXJyb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFFRiIsImZpbGUiOiJjaGVjay1uZXR3b3JrLWFjY2VzczAwMDA1LWVycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubGlzdC1xdWVzdGlvbiB7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG4ubmV4dC1idG4ge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 10731:
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-network-access00005-error/check-network-access00005-error.page.html ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <p>{{results.first_para}}</p>\r\n\r\n  <p>{{results.sec_para}}</p>\r\n\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.rbtn}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"confirm()\">\r\n          {{results.try_again}}\r\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check-network-access00005-error_check-network-access00005-error_module_ts.js.map