(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts"],{

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
        this.results = [];
        this.IsVisible = false;
        this.Ishowmore = false;
        this.Ishowmoredetails = false;
        this.icon = true;
        this.scndicons = false;
        this.fsticon = true;
    }
    PolicyDetails() {
        this.IsVisible = true;
        this.fsticon = false;
        this.scndicons = true;
    }
    PolicyDetailshide() {
        this.IsVisible = false;
        this.scndicons = false;
        this.fsticon = true;
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot_fingerp'];
            console.log("results: ", this.results);
        });
    }
    copybtn() {
        this.route.navigate(['/test-results']);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 5vw;\n}\n\nion-toolbar {\n  height: 85px;\n  padding-top: 35px;\n  padding-right: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU9KOztBQUxFO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUU47O0FBTkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNKOztBQU5BO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFQRTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQVVOOztBQVBFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFVSjs7QUFQRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkU7RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSxnQkFBQTtBQVdBOztBQVRBO0VBQ0ksa0JBQUE7QUFZSjs7QUFYSTtFQUNJLGVBQUE7RUFDSixnQkFBQTtFQUNBLGdCQUFBO0FBYUo7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBYUYiLCJmaWxlIjoiYmFsbG90LWZpbmdlcnByaW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5mdHItdHAtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuYmFjay1idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIH1cclxuICAubmV4dC1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLnRleHQtcHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwNjY7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2dztcclxuICBcclxuICB9XHJcbmlvbi10b29sYmFye1xyXG4gIGhlaWdodDogODVweDtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiAgLmljLWNvbHtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1kaXYtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gXHJcbiAgfVxyXG4gIC5jZW4tZGl2LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmZvbnQtd2VpZ2h0OiAxMDA7XHJcbmNvbG9yOiAjMDAwMDAwN2E7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG59XHJcbmlvbi1yb3d7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgY29sb3I6ICMwMDAwMDA2ZTtcclxuICBtYXJnaW4tYm90dG9tOiA1dnc7XHJcbn1cclxuICAiXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.ybr}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\">\r\n    <p>{{results.ydn}}</p>\r\n    <ion-button color=\"dark\" (click)=\"sendbtn()\">\r\n      {{results.send}}\r\n      <ion-icon slot=\"end\" name=\"paper-plane-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <div class=\"bottom-div-text\">\r\n    <p>{{results.tv_fp}}</p>\r\n  </div>\r\n  <div *ngIf=\"IsVisible == true\">\r\n    <p>{{results.tv1_fp}}</p>\r\n    <p>{{results.link}}</p>\r\n    <p>{{results.tv2_fb}}</p>\r\n    <ion-row>\r\n      {{results.bfp}}<br />\r\n      {{results.zyx098}}\r\n    </ion-row>\r\n    <ion-button color=\"dark\" (click)=\"copybtn()\">\r\n      {{results.copy}}\r\n      <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon>\r\n    </ion-button>\r\n    <p>{{results.tv3_fb}}</p>\r\n    <p>{{results.link}}</p>\r\n  </div>\r\n  <div class=\"text-p\"  *ngIf=\"fsticon\" (click)=\"PolicyDetails()\">\r\n    {{results.shmd}}\r\n    <ion-icon\r\n      name=\"chevron-down-outline\"\r\n      *ngIf=\"fsticon\"\r\n     \r\n    ></ion-icon>\r\n    <!-- <ion-icon\r\n      name=\"chevron-up-outline\"\r\n      *ngIf=\"scndicons\"\r\n      (click)=\"PolicyDetailshide()\"\r\n    ></ion-icon> -->\r\n  </div>\r\n  <div class=\"text-p\"  *ngIf=\"scndicons\"  (click)=\"PolicyDetailshide()\">\r\n    {{results.shmd}}\r\n    <!-- <ion-icon\r\n      name=\"chevron-down-outline\"\r\n      *ngIf=\"fsticon\"\r\n      (click)=\"PolicyDetails()\"\r\n    ></ion-icon> -->\r\n    <ion-icon  name=\"chevron-up-outline\"  *ngIf=\"scndicons\"  ></ion-icon>\r\n  </div>\r\n</ion-content>\r\n<ion-footer >\r\n  <ion-toolbar >\r\n\r\n      <!-- <div class=\"text-p\" style=\"text-align: center;\">\r\n    {{results.mp}}  <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div> -->\r\n\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts.js.map