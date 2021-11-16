(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_print_print_module_ts"],{

/***/ 66437:
/*!*****************************************************!*\
  !*** ./src/app/pages/print/print-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintPageRoutingModule": () => (/* binding */ PrintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _print_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print.page */ 3378);




const routes = [
    {
        path: '',
        component: _print_page__WEBPACK_IMPORTED_MODULE_0__.PrintPage,
    },
];
let PrintPageRoutingModule = class PrintPageRoutingModule {
};
PrintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrintPageRoutingModule);



/***/ }),

/***/ 16053:
/*!*********************************************!*\
  !*** ./src/app/pages/print/print.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintPageModule": () => (/* binding */ PrintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _print_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-routing.module */ 66437);
/* harmony import */ var _print_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.page */ 3378);







let PrintPageModule = class PrintPageModule {
};
PrintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _print_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrintPageRoutingModule],
        declarations: [_print_page__WEBPACK_IMPORTED_MODULE_1__.PrintPage],
    })
], PrintPageModule);



/***/ }),

/***/ 3378:
/*!*******************************************!*\
  !*** ./src/app/pages/print/print.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintPage": () => (/* binding */ PrintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_print_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./print.page.html */ 26765);
/* harmony import */ var _print_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print.page.scss */ 77874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let PrintPage = class PrintPage {
    constructor(router) {
        this.router = router;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].printing_page;
        });
    }
    goToRetry() {
        this.router.navigate(['ballot-complete']);
    }
    goToBallot() {
        this.router.navigate(['ballot']);
    }
};
PrintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PrintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-print',
        template: _raw_loader_print_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_print_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrintPage);



/***/ }),

/***/ 77874:
/*!*********************************************!*\
  !*** ./src/app/pages/print/print.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mt30 {\n  margin-top: 30px;\n}\n\n.mt60 {\n  margin-top: 60px;\n}\n\n.mt100 {\n  margin-top: 100px;\n}\n\n.sub-title {\n  font-size: 20px;\n}\n\nion-card-title,\np {\n  color: #464648;\n}\n\n.main-btn-style {\n  --border-radius: 0;\n  height: 50px;\n  width: 180px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTs7RUFFRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InByaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdDMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm10NjAge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4ubXQxMDAge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWNhcmQtdGl0bGUsXG5wIHtcbiAgY29sb3I6ICM0NjQ2NDg7XG59XG5cbi5tYWluLWJ0bi1zdHlsZSB7XG4gIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogMTgwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 26765:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/print/print.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <div class=\"ion-text-center mt60\">\n    <ion-card-title>{{results.printing}}</ion-card-title>\n  </div>\n  <div class=\"ion-text-center sub-title\">\n    <p>{{results.ydp}}</p>\n  </div>\n  <div class=\"mt60\">\n    <p>\n      {{results.dt}} <b>{{results.finish}}</b> {{results.btn}}\n      <b>{{results.re_try}}</b> {{results.pa}}\n    </p>\n  </div>\n  <ion-grid class=\"ion-no-padding mt60\">\n    <ion-row class=\"mt100 ion-text-center\">\n      <ion-col size=\"12\">\n        <ion-button\n          (click)=\"goToBallot()\"\n          class=\"main-btn-style\"\n          color=\"primary\"\n          >{{results.finish}}</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div class=\"mt30 ion-text-center\">\n    <ion-button\n      (click)=\"goToRetry()\"\n      class=\"main-btn-style\"\n      color=\"primary\"\n      fill=\"clear\"\n      >{{results.re_try}}\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_print_print_module_ts.js.map