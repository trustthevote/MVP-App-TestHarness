(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts"],{

/***/ 223:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFingerprintPageRoutingModule": () => (/* binding */ BallotFingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-fingerprint.page */ 282);




const routes = [
    {
        path: '',
        component: _ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.BallotFingerprintPage
    }
];
let BallotFingerprintPageRoutingModule = class BallotFingerprintPageRoutingModule {
};
BallotFingerprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotFingerprintPageRoutingModule);



/***/ }),

/***/ 2168:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFingerprintPageModule": () => (/* binding */ BallotFingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ballot_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-fingerprint-routing.module */ 223);
/* harmony import */ var _ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-fingerprint.page */ 282);







let BallotFingerprintPageModule = class BallotFingerprintPageModule {
};
BallotFingerprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotFingerprintPageRoutingModule
        ],
        declarations: [_ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.BallotFingerprintPage]
    })
], BallotFingerprintPageModule);



/***/ }),

/***/ 282:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFingerprintPage": () => (/* binding */ BallotFingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-fingerprint.page.html */ 6184);
/* harmony import */ var _ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-fingerprint.page.scss */ 6945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let BallotFingerprintPage = class BallotFingerprintPage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    copybtn() {
        this.route.navigate(['/copy-confirmed']);
    }
    sendbtn() {
        this.route.navigate(['/sending']);
    }
};
BallotFingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotFingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-fingerprint',
        template: _raw_loader_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotFingerprintPage);



/***/ }),

/***/ 6945:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  margin-bottom: 5vw;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU9OOztBQUxFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBUUo7O0FBSEU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFNTjs7QUFGRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBS0o7O0FBRkU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhFO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EsZ0JBQUE7QUFNQTs7QUFKQTtFQUNJLGtCQUFBO0FBT0o7O0FBTkk7RUFDSSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxnQkFBQTtBQVFKIiwiZmlsZSI6ImJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxpc3QtcXVlc3Rpb24ge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuZnRyLXRwLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgLmJhY2stYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICB9XHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xyXG4gIFxyXG4gIH1cclxuIFxyXG4gXHJcbiAgLmljLWNvbHtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuIFxyXG4gXHJcbiAgLmJvdHRvbS1kaXYtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gXHJcbiAgfVxyXG4gIC5jZW4tZGl2LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmZvbnQtd2VpZ2h0OiAxMDA7XHJcbmNvbG9yOiAjMDAwMDAwN2E7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG59XHJcbiAgIl19 */");

/***/ }),

/***/ 6184:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-fingerprint/ballot-fingerprint.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>Your Ballot Is Ready</p>\r\n  </div>\r\n  <div class=\"cen-div-text\">\r\n    <p>You can send it digitally now.</p>\r\n    <ion-button color=\"dark\" (click)=\"sendbtn()\">\r\n      send\r\n      <ion-icon slot=\"end\" name=\"paper-plane-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"bottom-div-text\">\r\n    <p>\r\n      Or if you like, you may perform a technical test to verify your ballot\r\n      fingerprint. To do so, copy the ballot fingerprint below, and paste into\r\n      your external validator of choice.\r\n    </p>\r\n    <ion-button color=\"dark\" (click)=\"copybtn()\">\r\n      Copy\r\n\r\n      <ion-icon slot=\"end\" name=\"copy-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <p>Ballot Fingerprint:<br> zyx098-wvu765-tsr432-1234</p>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts.js.map