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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n  padding-top: 8px;\n  padding-right: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC10ZXN0LWZhaWxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0Usa0JBQUE7QUFjRjs7QUFiRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZUY7O0FBWkE7RUFDRSxtQkFBQTtBQWVGIiwiZmlsZSI6ImJhbGxvdC10ZXN0LWZhaWxlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmxpc3QtcXVlc3Rpb24ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5mdHItdHAtdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmJhY2stYnRuIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuLm5leHQtYnRuIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi50ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAwMDAwMDY2O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwdnc7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIGhlaWdodDogODVweDtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmljLWNvbCB7XHJcbiAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5ib3R0b20tZGl2LXRleHQge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuLmNlbi1kaXYtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuaSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA3YTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcbmlvbi1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwNmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xyXG59XHJcblxyXG4udXByLXRleHQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"upr-text\">\r\n    <p>{{results.upr_para}}</p>\r\n    <a href=\"{{results.link}}\">{{results.link}}</a>\r\n  </div>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.back}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n    <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" slot=\"end\" (click)=\"printbtn()\">\r\n      {{results.print}}\r\n      <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n      <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-test-failed_ballot-test-failed_module_ts.js.map