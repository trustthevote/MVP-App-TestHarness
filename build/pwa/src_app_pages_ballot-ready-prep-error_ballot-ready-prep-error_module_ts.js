(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-ready-prep-error_ballot-ready-prep-error_module_ts"],{

/***/ 12240:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/ballot-ready-prep-error/ballot-ready-prep-error-routing.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotReadyPrepErrorPageRoutingModule": () => (/* binding */ BallotReadyPrepErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_ready_prep_error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-ready-prep-error.page */ 73828);




const routes = [
    {
        path: '',
        component: _ballot_ready_prep_error_page__WEBPACK_IMPORTED_MODULE_0__.BallotReadyPrepErrorPage
    }
];
let BallotReadyPrepErrorPageRoutingModule = class BallotReadyPrepErrorPageRoutingModule {
};
BallotReadyPrepErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotReadyPrepErrorPageRoutingModule);



/***/ }),

/***/ 2311:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ballot-ready-prep-error/ballot-ready-prep-error.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotReadyPrepErrorPageModule": () => (/* binding */ BallotReadyPrepErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_ready_prep_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-ready-prep-error-routing.module */ 12240);
/* harmony import */ var _ballot_ready_prep_error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-ready-prep-error.page */ 73828);







let BallotReadyPrepErrorPageModule = class BallotReadyPrepErrorPageModule {
};
BallotReadyPrepErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_ready_prep_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotReadyPrepErrorPageRoutingModule
        ],
        declarations: [_ballot_ready_prep_error_page__WEBPACK_IMPORTED_MODULE_1__.BallotReadyPrepErrorPage]
    })
], BallotReadyPrepErrorPageModule);



/***/ }),

/***/ 73828:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ballot-ready-prep-error/ballot-ready-prep-error.page.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotReadyPrepErrorPage": () => (/* binding */ BallotReadyPrepErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_ready_prep_error_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-ready-prep-error.page.html */ 31664);
/* harmony import */ var _ballot_ready_prep_error_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-ready-prep-error.page.scss */ 46512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let BallotReadyPrepErrorPage = class BallotReadyPrepErrorPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballotballotpreperror'];
        });
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
    backbtn() {
        this.route.navigate(['/test-results']);
    }
};
BallotReadyPrepErrorPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotReadyPrepErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-ready-prep-error',
        template: _raw_loader_ballot_ready_prep_error_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_ready_prep_error_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotReadyPrepErrorPage);



/***/ }),

/***/ 46512:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ballot-ready-prep-error/ballot-ready-prep-error.page.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1yZWFkeS1wcmVwLWVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBTUY7O0FBSkE7RUFDRSxZQUFBO0FBT0Y7O0FBSEE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFNRjs7QUFIQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFRRjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBT0o7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBT0Y7O0FBSkE7RUFDRSxtQkFBQTtBQU9GIiwiZmlsZSI6ImJhbGxvdC1yZWFkeS1wcmVwLWVycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubGlzdC1xdWVzdGlvbiB7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmZ0ci10cC10ZXh0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm5leHQtYnRuIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi50ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAwMDAwMDY2O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwdnc7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIGhlaWdodDogODVweDtcclxuICAvLyBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmljLWNvbCB7XHJcbiAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICBmb250LXNpemU6IDI2cHg7XHJcbn1cclxuXHJcbi5ib3R0b20tZGl2LXRleHQge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuLmNlbi1kaXYtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuaSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA3YTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA4MDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG59XHJcbmlvbi1yb3cge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwNmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xyXG59XHJcblxyXG4udXByLXRleHQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMyU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 31664:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-ready-prep-error/ballot-ready-prep-error.page.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"upr-text\">\n    <p>{{results.upr_para}}</p>\n    <p>{{results.mid_para}}</p>\n    <a href=\"{{results.link}}\">{{results.link}}</a>\n  </div>\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.back}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\n          {{results.try_again}}\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-ready-prep-error_ballot-ready-prep-error_module_ts.js.map