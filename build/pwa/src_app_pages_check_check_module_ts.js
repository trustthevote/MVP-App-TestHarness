(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_check_check_module_ts"],{

/***/ 52634:
/*!*****************************************************!*\
  !*** ./src/app/pages/check/check-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPageRoutingModule": () => (/* binding */ CheckPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check.page */ 46882);




const routes = [
    {
        path: '',
        component: _check_page__WEBPACK_IMPORTED_MODULE_0__.CheckPage
    }
];
let CheckPageRoutingModule = class CheckPageRoutingModule {
};
CheckPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckPageRoutingModule);



/***/ }),

/***/ 6260:
/*!*********************************************!*\
  !*** ./src/app/pages/check/check.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPageModule": () => (/* binding */ CheckPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _check_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-routing.module */ 52634);
/* harmony import */ var _check_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.page */ 46882);







let CheckPageModule = class CheckPageModule {
};
CheckPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckPageRoutingModule
        ],
        declarations: [_check_page__WEBPACK_IMPORTED_MODULE_1__.CheckPage]
    })
], CheckPageModule);



/***/ }),

/***/ 46882:
/*!*******************************************!*\
  !*** ./src/app/pages/check/check.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckPage": () => (/* binding */ CheckPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_check_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check.page.html */ 80746);
/* harmony import */ var _check_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.page.scss */ 10636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CheckPage = class CheckPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['check_page'];
        });
    }
    confirm() {
        this.route.navigate(['/sending-confirmation']);
    }
    failsbtn() {
        this.route.navigate(['/check-network']);
    }
    fail2btn() {
        this.route.navigate(['/check-servers']);
    }
};
CheckPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-check',
        template: _raw_loader_check_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckPage);



/***/ }),

/***/ 10636:
/*!*********************************************!*\
  !*** ./src/app/pages/check/check.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGVjay5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 80746:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check/check.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>{{results.header}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"6\" class=\"back-btn\">\r\n      <ion-button color=\"dark\" (click)=\" failsbtn()\">\r\n        {{results.fail_check_network}}\r\n        <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"back-btn\">\r\n      <ion-button color=\"dark\" (click)=\" fail2btn()\">\r\n        {{results.fail_check_server}}\r\n        <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col size=\"6\" class=\"next-btn\">\r\n      <ion-button color=\"dark\" (click)=\"confirm()\">\r\n        {{results.pass}}\r\n\r\n        <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar> </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check_check_module_ts.js.map