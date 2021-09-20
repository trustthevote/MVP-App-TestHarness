(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_test-results_test-results_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-results.page */ 25739);




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

/***/ 48530:
/*!***********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPageModule": () => (/* binding */ TestResultsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _test_results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-results-routing.module */ 93);
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page */ 25739);







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

/***/ 25739:
/*!*********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPage": () => (/* binding */ TestResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./test-results.page.html */ 25356);
/* harmony import */ var _test_results_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page.scss */ 60866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





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
    passbtn() {
        this.route.navigate(['/ballot-resealed']);
    }
    failbtn() {
        this.route.navigate(['/ballot-test-failed-test']);
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

/***/ 60866:
/*!***********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  padding-bottom: 0px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-right: 20px;\n  padding-left: 0px;\n}\n\np {\n  font-size: 23px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  padding-top: 20px;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.div-two {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.div-two .div-upr-text p {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-two .div-upr-text ion-icon {\n  font-size: 65px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\n.div-text-mid {\n  text-align: center;\n  padding-bottom: 20%;\n  font-size: 20px;\n}\n\n.div-text-mid ion-icon {\n  font-size: 11vh;\n}\n\nion-toolbar {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFNUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUpaOztBQU1RO0VBQ0ksZUFBQTtBQUpaOztBQVNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFOSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTEo7O0FBTUc7RUFDQyxlQUFBO0FBSko7O0FBUUE7RUFDSSxhQUFBO0FBTEoiLCJmaWxlIjoidGVzdC1yZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4ubmV4dC1idG57XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBcclxufVxyXG5we1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIFxyXG59XHJcbi5SZXF1aXJlZC1kaXZ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwdnc7XHJcbiAgfVxyXG5pb24tcm93IHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dnc7XHJcbiAgfVxyXG4gIFxyXG4uZGl2LXR3b3tcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIC5kaXYtdXByLXRleHR7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgICAgICAvLyBtYXJnaW46IDAgMzUlIDAgMzUlO1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jZW4tZGl2LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuLmRpdi10ZXh0LW1pZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMCU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGlvbi1pY29ue1xyXG4gICAgZm9udC1zaXplOiAxMXZoO1xyXG4gICB9XHJcblxyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 25356:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test-results/test-results.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.test_results}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\">\r\n    <ion-row>\r\n      {{results.bfp}}<br />\r\n      {{results.zyx098}}\r\n    </ion-row>\r\n    <p>{{results.ydn}}</p>\r\n   \r\n    <p>{{results.tv2_fb}}\"{{results.str}}\"{{results.tv2_fb1}}</p>\r\n    <p>{{results.tv3}}</p>\r\n  </div>\r\n  <div class=\"Required-div\" style=\"text-align: center\">\r\n    <!-- <p style=\"text-align: start;\">{{results.dbf}}</p> -->\r\n    <div style=\"text-align: center\">\r\n      <div class=\"div-two\">\r\n        <div class=\"div-text-mid\" (click)=\"passbtn()\">\r\n          <p>{{results.passed}}</p>\r\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"div-text-mid\" (click)=\"failbtn()\">\r\n      <p>{{results.failed}}</p>\r\n      <ion-icon name=\"close-circle-outline\" ></ion-icon>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer >\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"passbtn()\">\r\n          {{results.back}}\r\n          <ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>\r\n        \r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <!-- <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-results_test-results_module_ts.js.map