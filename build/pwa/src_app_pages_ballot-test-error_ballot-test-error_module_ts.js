(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-test-error_ballot-test-error_module_ts"],{

/***/ 67524:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ballot-test-error/ballot-test-error-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestErrorPageRoutingModule": () => (/* binding */ BallotTestErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_test_error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-test-error.page */ 63943);




const routes = [
    {
        path: '',
        component: _ballot_test_error_page__WEBPACK_IMPORTED_MODULE_0__.BallotTestErrorPage
    }
];
let BallotTestErrorPageRoutingModule = class BallotTestErrorPageRoutingModule {
};
BallotTestErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotTestErrorPageRoutingModule);



/***/ }),

/***/ 67376:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ballot-test-error/ballot-test-error.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestErrorPageModule": () => (/* binding */ BallotTestErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_test_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-test-error-routing.module */ 67524);
/* harmony import */ var _ballot_test_error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-test-error.page */ 63943);







let BallotTestErrorPageModule = class BallotTestErrorPageModule {
};
BallotTestErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_test_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotTestErrorPageRoutingModule
        ],
        declarations: [_ballot_test_error_page__WEBPACK_IMPORTED_MODULE_1__.BallotTestErrorPage]
    })
], BallotTestErrorPageModule);



/***/ }),

/***/ 63943:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ballot-test-error/ballot-test-error.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotTestErrorPage": () => (/* binding */ BallotTestErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_test_error_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-test-error.page.html */ 19968);
/* harmony import */ var _ballot_test_error_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-test-error.page.scss */ 44765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let BallotTestErrorPage = class BallotTestErrorPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot_test_error_page'];
        });
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
    backbtn() {
        this.route.navigate(['/access-code', {
                t: new Date().getTime()
            }]);
    }
};
BallotTestErrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotTestErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-test-error',
        template: _raw_loader_ballot_test_error_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_test_error_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotTestErrorPage);



/***/ }),

/***/ 44765:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ballot-test-error/ballot-test-error.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC10ZXN0LWVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDTjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtBQUVKOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdKOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkU7RUFDRSxZQUFBO0FBS0o7O0FBREU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFERTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFGSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBS047O0FBRkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBS0o7O0FBRkU7RUFDRSxtQkFBQTtBQUtKIiwiZmlsZSI6ImJhbGxvdC10ZXN0LWVycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5mdHItdHAtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuYmFjay1idG4ge1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIH1cclxuICAubmV4dC1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLnRleHQtcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDY2O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTB2dztcclxuICB9XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgaGVpZ2h0OiA4NXB4O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDhweDtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5pYy1jb2wge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1kaXYtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcbiAgLmNlbi1kaXYtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1yb3cge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1dnc7XHJcbiAgfVxyXG4gIFxyXG4gIC51cHItdGV4dCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ 19968:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-test-error/ballot-test-error.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"upr-text\">\n    <p>{{results.upr_para}}</p>\n    <a href=\"{{results.link}}\">{{results.link}}</a>\n  </div>\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.back}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n    <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" >\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\n          {{results.try_again}}\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n          <!-- <ion-icon  name=\"chevron-back-outline\"></ion-icon> -->\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n          <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-test-error_ballot-test-error_module_ts.js.map