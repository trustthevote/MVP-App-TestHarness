(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_new-ballot-fingerprint_new-ballot-fingerprint_module_ts"],{

/***/ 4847:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/new-ballot-fingerprint/new-ballot-fingerprint-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBallotFingerprintPageRoutingModule": () => (/* binding */ NewBallotFingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _new_ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-ballot-fingerprint.page */ 5490);




const routes = [
    {
        path: '',
        component: _new_ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.NewBallotFingerprintPage
    }
];
let NewBallotFingerprintPageRoutingModule = class NewBallotFingerprintPageRoutingModule {
};
NewBallotFingerprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewBallotFingerprintPageRoutingModule);



/***/ }),

/***/ 3451:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/new-ballot-fingerprint/new-ballot-fingerprint.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBallotFingerprintPageModule": () => (/* binding */ NewBallotFingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _new_ballot_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-ballot-fingerprint-routing.module */ 4847);
/* harmony import */ var _new_ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-ballot-fingerprint.page */ 5490);







let NewBallotFingerprintPageModule = class NewBallotFingerprintPageModule {
};
NewBallotFingerprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _new_ballot_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewBallotFingerprintPageRoutingModule
        ],
        declarations: [_new_ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.NewBallotFingerprintPage]
    })
], NewBallotFingerprintPageModule);



/***/ }),

/***/ 5490:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/new-ballot-fingerprint/new-ballot-fingerprint.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewBallotFingerprintPage": () => (/* binding */ NewBallotFingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_new_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./new-ballot-fingerprint.page.html */ 7582);
/* harmony import */ var _new_ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-ballot-fingerprint.page.scss */ 2831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let NewBallotFingerprintPage = class NewBallotFingerprintPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['new_ballot_finger_print'];
        });
    }
    sendbtn() {
        this.route.navigate(['/sending']);
    }
    copybtn() {
        this.route.navigate(['/copy-confirmed']);
    }
};
NewBallotFingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NewBallotFingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-new-ballot-fingerprint',
        template: _raw_loader_new_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_new_ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewBallotFingerprintPage);



/***/ }),

/***/ 2831:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/new-ballot-fingerprint/new-ballot-fingerprint.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 28px;\n  font-weight: 700;\n  color: #000000;\n  margin-bottom: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 13px;\n  color: #00000080;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1iYWxsb3QtZmluZ2VycHJpbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkU7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFPTjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQVFKOztBQUpFO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBT047O0FBSEU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUhFO0VBQ0UsaUJBQUE7RUFFQSxlQUFBO0FBS0o7O0FBRkU7RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxnQkFBQTtBQUtBOztBQUhBO0VBQ0ksa0JBQUE7QUFNSjs7QUFMSTtFQUNJLGVBQUE7RUFDSixnQkFBQTtFQUNBLGdCQUFBO0FBT0oiLCJmaWxlIjoibmV3LWJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxpc3QtcXVlc3Rpb24ge1xyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuZnRyLXRwLXRleHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbiAgLmJhY2stYnRuIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICB9XHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiBcclxuIFxyXG4gIC5pYy1jb2x7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAxcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiBcclxuIFxyXG4gIC5ib3R0b20tZGl2LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuIFxyXG4gIH1cclxuICAuY2VuLWRpdi10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgIFxyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gIFxyXG4gIH1cclxuICBpe1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5mb250LXdlaWdodDogMTAwO1xyXG5jb2xvcjogIzAwMDAwMDdhO1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDgwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufVxyXG4gICJdfQ== */");

/***/ }),

/***/ 7582:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-ballot-fingerprint/new-ballot-fingerprint.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.heading}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\">\r\n    <p>{{results.text}}</p>\r\n    <ion-button color=\"dark\" (click)=\"sendbtn()\">\r\n      {{results.send}}\r\n      <ion-icon slot=\"end\" name=\"paper-plane-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"bottom-div-text\">\r\n    <p>{{results.text_detail}}</p>\r\n    <ion-button color=\"dark\" (click)=\"copybtn()\">\r\n      {{results.copy}}\r\n      <ion-icon slot=\"end\" name=\"copy-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <p>\r\n        {{results.nbf}}<br />\r\n        {{results.tsr432}}\r\n      </p>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-ballot-fingerprint_new-ballot-fingerprint_module_ts.js.map