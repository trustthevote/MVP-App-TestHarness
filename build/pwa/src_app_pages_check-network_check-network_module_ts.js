(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_check-network_check-network_module_ts"],{

/***/ 8435:
/*!*********************************************************************!*\
  !*** ./src/app/pages/check-network/check-network-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkPageRoutingModule": () => (/* binding */ CheckNetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _check_network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-network.page */ 8058);




const routes = [
    {
        path: '',
        component: _check_network_page__WEBPACK_IMPORTED_MODULE_0__.CheckNetworkPage
    }
];
let CheckNetworkPageRoutingModule = class CheckNetworkPageRoutingModule {
};
CheckNetworkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckNetworkPageRoutingModule);



/***/ }),

/***/ 5888:
/*!*************************************************************!*\
  !*** ./src/app/pages/check-network/check-network.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkPageModule": () => (/* binding */ CheckNetworkPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _check_network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-network-routing.module */ 8435);
/* harmony import */ var _check_network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-network.page */ 8058);







let CheckNetworkPageModule = class CheckNetworkPageModule {
};
CheckNetworkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_network_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckNetworkPageRoutingModule
        ],
        declarations: [_check_network_page__WEBPACK_IMPORTED_MODULE_1__.CheckNetworkPage]
    })
], CheckNetworkPageModule);



/***/ }),

/***/ 8058:
/*!***********************************************************!*\
  !*** ./src/app/pages/check-network/check-network.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkPage": () => (/* binding */ CheckNetworkPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_check_network_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check-network.page.html */ 6942);
/* harmony import */ var _check_network_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-network.page.scss */ 4280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let CheckNetworkPage = class CheckNetworkPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    confirm() {
        this.route.navigate(['/check']);
    }
};
CheckNetworkPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckNetworkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-check-network',
        template: _raw_loader_check_network_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_network_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckNetworkPage);



/***/ }),

/***/ 4280:
/*!*************************************************************!*\
  !*** ./src/app/pages/check-network/check-network.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding: 20px;\n}\n\nion-toolbar {\n  padding-left: 20px;\n  --padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLW5ldHdvcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQUVKIiwiZmlsZSI6ImNoZWNrLW5ldHdvcmsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlcXVpcmVkLWRpdntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ 6942:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-network/check-network.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\r\n\r\n<ion-content>\r\n  <div class=\"Required-div\">\r\n    <p>\r\n      Sorry, it seems there was a network error. Please check your connection and try again.\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" (click)=\"confirm()\">\r\n       Try again\r\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check-network_check-network_module_ts.js.map