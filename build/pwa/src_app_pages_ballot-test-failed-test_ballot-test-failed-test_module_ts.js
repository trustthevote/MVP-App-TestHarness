(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-test-failed-test_ballot-test-failed-test_module_ts"],{

/***/ 74569:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed-test/ballot-test-failed-test-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestFailedTestPageRoutingModule": () => (/* binding */ BallotTestFailedTestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_test_failed_test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-test-failed-test.page */ 13277);




const routes = [
    {
        path: '',
        component: _ballot_test_failed_test_page__WEBPACK_IMPORTED_MODULE_0__.BallotTestFailedTestPage
    }
];
let BallotTestFailedTestPageRoutingModule = class BallotTestFailedTestPageRoutingModule {
};
BallotTestFailedTestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotTestFailedTestPageRoutingModule);



/***/ }),

/***/ 9436:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed-test/ballot-test-failed-test.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestFailedTestPageModule": () => (/* binding */ BallotTestFailedTestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_test_failed_test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-test-failed-test-routing.module */ 74569);
/* harmony import */ var _ballot_test_failed_test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-test-failed-test.page */ 13277);







let BallotTestFailedTestPageModule = class BallotTestFailedTestPageModule {
};
BallotTestFailedTestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_test_failed_test_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotTestFailedTestPageRoutingModule
        ],
        declarations: [_ballot_test_failed_test_page__WEBPACK_IMPORTED_MODULE_1__.BallotTestFailedTestPage]
    })
], BallotTestFailedTestPageModule);



/***/ }),

/***/ 13277:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed-test/ballot-test-failed-test.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestFailedTestPage": () => (/* binding */ BallotTestFailedTestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_test_failed_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-test-failed-test.page.html */ 28879);
/* harmony import */ var _ballot_test_failed_test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-test-failed-test.page.scss */ 48634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let BallotTestFailedTestPage = class BallotTestFailedTestPage {
    constructor() { }
    ngOnInit() {
    }
};
BallotTestFailedTestPage.ctorParameters = () => [];
BallotTestFailedTestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ballot-test-failed-test',
        template: _raw_loader_ballot_test_failed_test_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_test_failed_test_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotTestFailedTestPage);



/***/ }),

/***/ 48634:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed-test/ballot-test-failed-test.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 50px;\n}\n\n.upr-text {\n  font-size: 23px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC10ZXN0LWZhaWxlZC10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFSiIsImZpbGUiOiJiYWxsb3QtdGVzdC1mYWlsZWQtdGVzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIC51cHItdGV4dHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 28879:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-test-failed-test/ballot-test-failed-test.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n<div class=\"upr-text\">\n  Sorry to hear that. Your \n  ballot will be discarded. \n</div>\n<br><br>\n<div class=\"upr-text\">\n  Would you like to mark a \nnew ballot or request a \nballot be mailed to you?\n\n</div>\n<br><br><br>\n<ion-button color=\"dark\" (click)=\"passbtn()\">\n  Mark a new ballot <ion-icon slot=\"end\" name=\"reader-outline\"></ion-icon>\n  </ion-button><br><br><br>\n  <ion-button color=\"dark\" (click)=\"passbtn()\">\n    request new ballot\n    <ion-icon slot=\"end\" name=\"mail-outline\"></ion-icon>\n    </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-test-failed-test_ballot-test-failed-test_module_ts.js.map