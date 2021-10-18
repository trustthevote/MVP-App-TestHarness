(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_user-time-out_user-time-out_module_ts"],{

/***/ 85292:
/*!*********************************************************************!*\
  !*** ./src/app/pages/user-time-out/user-time-out-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTimeOutPageRoutingModule": () => (/* binding */ UserTimeOutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _user_time_out_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-time-out.page */ 4087);




const routes = [
    {
        path: '',
        component: _user_time_out_page__WEBPACK_IMPORTED_MODULE_0__.UserTimeOutPage,
    },
];
let UserTimeOutPageRoutingModule = class UserTimeOutPageRoutingModule {
};
UserTimeOutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UserTimeOutPageRoutingModule);



/***/ }),

/***/ 19728:
/*!*************************************************************!*\
  !*** ./src/app/pages/user-time-out/user-time-out.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTimeOutPageModule": () => (/* binding */ UserTimeOutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _user_time_out_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-time-out-routing.module */ 85292);
/* harmony import */ var _user_time_out_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-time-out.page */ 4087);







let UserTimeOutPageModule = class UserTimeOutPageModule {
};
UserTimeOutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _user_time_out_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserTimeOutPageRoutingModule],
        declarations: [_user_time_out_page__WEBPACK_IMPORTED_MODULE_1__.UserTimeOutPage],
    })
], UserTimeOutPageModule);



/***/ }),

/***/ 4087:
/*!***********************************************************!*\
  !*** ./src/app/pages/user-time-out/user-time-out.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTimeOutPage": () => (/* binding */ UserTimeOutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_user_time_out_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./user-time-out.page.html */ 61985);
/* harmony import */ var _user_time_out_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-time-out.page.scss */ 24511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let UserTimeOutPage = class UserTimeOutPage {
    constructor(router) {
        this.router = router;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].user_time_out_page;
        });
    }
    backbtn() {
        this.router.navigate(['/ballot']);
    }
};
UserTimeOutPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
UserTimeOutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-user-time-out',
        template: _raw_loader_user_time_out_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_user_time_out_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UserTimeOutPage);



/***/ }),

/***/ 24511:
/*!*************************************************************!*\
  !*** ./src/app/pages/user-time-out/user-time-out.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding: 20px;\n}\n\nion-toolbar {\n  padding-left: 20px;\n  --padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItdGltZS1vdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUVGIiwiZmlsZSI6InVzZXItdGltZS1vdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlcXVpcmVkLWRpdiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 61985:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-time-out/user-time-out.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"Required-div\">\r\n    <p>{{results.d_text}}</p>\r\n    <p>{{results.d_text1}}</p>\r\n\r\n    <p>{{results.link}}</p>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n      {{results.back}}\r\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user-time-out_user-time-out_module_ts.js.map