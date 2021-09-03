(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-test-failed_ballot-test-failed_module_ts"],{

/***/ 278:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed/ballot-test-failed-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestFailedPageRoutingModule": () => (/* binding */ BallotTestFailedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ballot_test_failed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-test-failed.page */ 5440);




const routes = [
    {
        path: '',
        component: _ballot_test_failed_page__WEBPACK_IMPORTED_MODULE_0__.BallotTestFailedPage
    }
];
let BallotTestFailedPageRoutingModule = class BallotTestFailedPageRoutingModule {
};
BallotTestFailedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotTestFailedPageRoutingModule);



/***/ }),

/***/ 4927:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed/ballot-test-failed.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestFailedPageModule": () => (/* binding */ BallotTestFailedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ballot_test_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-test-failed-routing.module */ 278);
/* harmony import */ var _ballot_test_failed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-test-failed.page */ 5440);







let BallotTestFailedPageModule = class BallotTestFailedPageModule {
};
BallotTestFailedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_test_failed_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotTestFailedPageRoutingModule
        ],
        declarations: [_ballot_test_failed_page__WEBPACK_IMPORTED_MODULE_1__.BallotTestFailedPage]
    })
], BallotTestFailedPageModule);



/***/ }),

/***/ 5440:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed/ballot-test-failed.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestFailedPage": () => (/* binding */ BallotTestFailedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ballot_test_failed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-test-failed.page.html */ 6564);
/* harmony import */ var _ballot_test_failed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-test-failed.page.scss */ 4214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





// import { Router } from '@angular/router';
let BallotTestFailedPage = class BallotTestFailedPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['BallotTestFailedPage'];
        });
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
BallotTestFailedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotTestFailedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-test-failed',
        template: _raw_loader_ballot_test_failed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_test_failed_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotTestFailedPage);



/***/ }),

/***/ 4214:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ballot-test-failed/ballot-test-failed.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n  padding-top: 8px;\n  padding-right: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC10ZXN0LWZhaWxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUU47O0FBTkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVNKOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFQRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQVVOOztBQVBFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFVSjs7QUFQRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkU7RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxnQkFBQTtBQVdBOztBQVRBO0VBQ0ksa0JBQUE7QUFZSjs7QUFYSTtFQUNJLGVBQUE7RUFDSixnQkFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYUY7O0FBVkE7RUFDSSxtQkFBQTtBQWFKIiwiZmlsZSI6ImJhbGxvdC10ZXN0LWZhaWxlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxpc3QtcXVlc3Rpb24ge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuZnRyLXRwLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgLmJhY2stYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICB9XHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC50ZXh0LXB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDY2O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHZ3O1xyXG4gIFxyXG4gIH1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgaGVpZ2h0OiA4NXB4O1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4gIC5pYy1jb2x7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAxcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcblxyXG4gIC5ib3R0b20tZGl2LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuIFxyXG4gIH1cclxuICAuY2VuLWRpdi10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBpe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5mb250LXdlaWdodDogMTAwO1xyXG5jb2xvcjogIzAwMDAwMDdhO1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDgwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufVxyXG5pb24tcm93e1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwNmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xyXG59XHJcblxyXG4udXByLXRleHR7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG59Il19 */");

/***/ }),

/***/ 6564:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-test-failed/ballot-test-failed.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"upr-text\">\r\n    <p>\r\n      {{results.upr_para}}\r\n    </p>\r\n    <a href=\"{{results.link}}\">{{results.link}}</a>\r\n  </div>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n {{results.back}}\r\n <ion-icon  slot=\"end\" name=\"help-outline\"></ion-icon>\r\n    <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" slot=\"end\" (click)=\"printbtn()\">\r\n     {{results.print}}\r\n      <ion-icon  slot=\"end\" name=\"print-outline\"></ion-icon>\r\n         <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\r\n       </ion-button>\r\n  </ion-toolbar>\r\n  </ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-test-failed_ballot-test-failed_module_ts.js.map