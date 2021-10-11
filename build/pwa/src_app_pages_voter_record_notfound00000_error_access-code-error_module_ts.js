(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_voter_record_notfound00000_error_access-code-error_module_ts"],{

/***/ 56726:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/voter_record_notfound00000_error/access-code-error-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodeErrorPageRoutingModule": () => (/* binding */ AccessCodeErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _access_code_error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-code-error.page */ 75236);




const routes = [
    {
        path: '',
        component: _access_code_error_page__WEBPACK_IMPORTED_MODULE_0__.AccessCodeErrorPage
    }
];
let AccessCodeErrorPageRoutingModule = class AccessCodeErrorPageRoutingModule {
};
AccessCodeErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccessCodeErrorPageRoutingModule);



/***/ }),

/***/ 90691:
/*!************************************************************************************!*\
  !*** ./src/app/pages/voter_record_notfound00000_error/access-code-error.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodeErrorPageModule": () => (/* binding */ AccessCodeErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _access_code_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-code-error-routing.module */ 56726);
/* harmony import */ var _access_code_error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code-error.page */ 75236);







let AccessCodeErrorPageModule = class AccessCodeErrorPageModule {
};
AccessCodeErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _access_code_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessCodeErrorPageRoutingModule
        ],
        declarations: [_access_code_error_page__WEBPACK_IMPORTED_MODULE_1__.AccessCodeErrorPage]
    })
], AccessCodeErrorPageModule);



/***/ }),

/***/ 75236:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/voter_record_notfound00000_error/access-code-error.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodeErrorPage": () => (/* binding */ AccessCodeErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_access_code_error_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./access-code-error.page.html */ 37962);
/* harmony import */ var _access_code_error_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code-error.page.scss */ 26207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let AccessCodeErrorPage = class AccessCodeErrorPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['voter_record_notfound00000_error'];
        });
        if (this.userObject.lastname != undefined) {
            const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
            if (lastName == 'OOOOO') {
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
AccessCodeErrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AccessCodeErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-access-code-error',
        template: _raw_loader_access_code_error_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_access_code_error_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccessCodeErrorPage);



/***/ }),

/***/ 26207:
/*!************************************************************************************!*\
  !*** ./src/app/pages/voter_record_notfound00000_error/access-code-error.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb2RlLWVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQUoiLCJmaWxlIjoiYWNjZXNzLWNvZGUtZXJyb3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9uIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIC5uZXh0LWJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgIFxyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 37962:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/voter_record_notfound00000_error/access-code-error.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <p>{{results.first_para}}</p>\r\n  <p>{{results.sec_para}}</p>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.rbtn}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_voter_record_notfound00000_error_access-code-error_module_ts.js.map