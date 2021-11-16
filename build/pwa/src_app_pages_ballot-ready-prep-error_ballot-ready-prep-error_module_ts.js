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
        component: _ballot_ready_prep_error_page__WEBPACK_IMPORTED_MODULE_0__.BallotReadyPrepErrorPage,
    },
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
            _ballot_ready_prep_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotReadyPrepErrorPageRoutingModule,
        ],
        declarations: [_ballot_ready_prep_error_page__WEBPACK_IMPORTED_MODULE_1__.BallotReadyPrepErrorPage],
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
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].ballotballotpreperror;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1yZWFkeS1wcmVwLWVycm9yLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBT0Y7O0FBTEE7RUFDRSxZQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFOQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBUEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFSRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBV0o7O0FBUkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBUkE7RUFDRSxtQkFBQTtBQVdGIiwiZmlsZSI6ImJhbGxvdC1yZWFkeS1wcmVwLWVycm9yLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGlzdC1xdWVzdGlvbiB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uZnRyLXRwLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5cbi5uZXh0LWJ0biB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbmIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiBibGFjaztcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG4udGV4dC1wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzAwMDAwMDY2O1xufVxuaW9uLWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbnAge1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMHZ3O1xufVxuaW9uLXRvb2xiYXIge1xuICBoZWlnaHQ6IDg1cHg7XG59XG4uaWMtY29sIHtcbiAgcGFkZGluZzogMTBweCAwIDFweDtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuXG4uYm90dG9tLWRpdi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxuLmNlbi1kaXYtdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDcwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5pIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzAwMDAwMDdhO1xufVxuaW9uLXRvb2xiYXIge1xuICBwIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgY29sb3I6ICMwMDAwMDA4MDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG59XG5pb24tcm93IHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogIzAwMDAwMDZlO1xuICBtYXJnaW4tYm90dG9tOiA1dnc7XG59XG5cbi51cHItdGV4dCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMyU7XG59XG4iXX0= */");

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