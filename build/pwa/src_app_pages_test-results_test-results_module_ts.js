(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_test-results_test-results_module_ts"],{

/***/ 93:
/*!*******************************************************************!*\
  !*** ./src/app/pages/test-results/test-results-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPageRoutingModule": () => (/* binding */ TestResultsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-results.page */ 5739);




const routes = [
    {
        path: '',
        component: _test_results_page__WEBPACK_IMPORTED_MODULE_0__.TestResultsPage
    }
];
let TestResultsPageRoutingModule = class TestResultsPageRoutingModule {
};
TestResultsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestResultsPageRoutingModule);



/***/ }),

/***/ 8530:
/*!***********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPageModule": () => (/* binding */ TestResultsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _test_results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-results-routing.module */ 93);
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page */ 5739);







let TestResultsPageModule = class TestResultsPageModule {
};
TestResultsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestResultsPageRoutingModule
        ],
        declarations: [_test_results_page__WEBPACK_IMPORTED_MODULE_1__.TestResultsPage]
    })
], TestResultsPageModule);



/***/ }),

/***/ 5739:
/*!*********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPage": () => (/* binding */ TestResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./test-results.page.html */ 5356);
/* harmony import */ var _test_results_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page.scss */ 866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let TestResultsPage = class TestResultsPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['test_result_page'];
        });
    }
    nextbtn() {
        this.route.navigate(['/new-ballot-fingerprint']);
    }
    passbtn() {
        this.route.navigate(['/copy-confirmed']);
    }
};
TestResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TestResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-test-results',
        template: _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_test_results_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TestResultsPage);



/***/ }),

/***/ 866:
/*!***********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\np {\n  padding-bottom: 0px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-right: 20px;\n  padding-left: 0px;\n}\n\n.div-two {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.div-two .div-upr-text {\n  border: 2px solid #000;\n  margin: 0 35% 0 35%;\n  border-radius: 5px;\n}\n\n.div-two .div-upr-text p {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-two .div-upr-text ion-icon {\n  font-size: 57px;\n}\n\n.div-text-mid {\n  text-align: center;\n  padding-top: 20%;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBRUU7RUFDRSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUE7RUFDSSxtQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUtKOztBQUhJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUVBLGtCQUFBO0FBSVI7O0FBSFE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFLWjs7QUFIUTtFQUNJLGVBQUE7QUFLWjs7QUFEQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSUoiLCJmaWxlIjoidGVzdC1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLmJhY2stYnRue1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcbi5uZXh0LWJ0bntcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxucHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLlJlcXVpcmVkLWRpdntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi5kaXYtdHdve1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmRpdi11cHItdGV4dHtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAzNSUgMCAzNSU7XHJcbiAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1N3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uZGl2LXRleHQtbWlke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgXHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 5356:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test-results/test-results.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.test_results}}</p>\r\n  </div>\r\n  <div class=\"Required-div\" style=\"text-align: center;\">\r\n    <p>{{results.dbf}}</p>\r\n    <div style=\"text-align: center;\">\r\n      <div class=\"div-two\">\r\n        <div class=\"div-upr-text\">\r\n          <p>{{results.passed}}</p>\r\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"div-text-mid\">\r\n\r\n      <p>{{results.failed}}</p>\r\n      <ion-icon name=\"close-circle-outline\" style=\"font-size: 65px;\"></ion-icon>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"passbtn()\">\r\n          {{results.back}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-results_test-results_module_ts.js.map