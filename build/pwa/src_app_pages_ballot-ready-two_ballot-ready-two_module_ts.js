(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-ready-two_ballot-ready-two_module_ts"],{

/***/ 87118:
/*!***************************************************************************!*\
  !*** ./src/app/pages/ballot-ready-two/ballot-ready-two-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotReadyTwoPageRoutingModule": () => (/* binding */ BallotReadyTwoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_ready_two_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-ready-two.page */ 48344);




const routes = [
    {
        path: '',
        component: _ballot_ready_two_page__WEBPACK_IMPORTED_MODULE_0__.BallotReadyTwoPage
    }
];
let BallotReadyTwoPageRoutingModule = class BallotReadyTwoPageRoutingModule {
};
BallotReadyTwoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotReadyTwoPageRoutingModule);



/***/ }),

/***/ 65411:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ballot-ready-two/ballot-ready-two.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotReadyTwoPageModule": () => (/* binding */ BallotReadyTwoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_ready_two_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-ready-two-routing.module */ 87118);
/* harmony import */ var _ballot_ready_two_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-ready-two.page */ 48344);







let BallotReadyTwoPageModule = class BallotReadyTwoPageModule {
};
BallotReadyTwoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_ready_two_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotReadyTwoPageRoutingModule
        ],
        declarations: [_ballot_ready_two_page__WEBPACK_IMPORTED_MODULE_1__.BallotReadyTwoPage]
    })
], BallotReadyTwoPageModule);



/***/ }),

/***/ 48344:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ballot-ready-two/ballot-ready-two.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotReadyTwoPage": () => (/* binding */ BallotReadyTwoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_ready_two_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-ready-two.page.html */ 60264);
/* harmony import */ var _ballot_ready_two_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-ready-two.page.scss */ 68260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);






let BallotReadyTwoPage = class BallotReadyTwoPage {
    constructor(route, avclientService, activatedRoute) {
        this.route = route;
        this.avclientService = avclientService;
        this.activatedRoute = activatedRoute;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot_fingerp'];
        });
    }
    copybtn() {
        this.avclientService.spoilBallotCryptograms(this.getCode).catch(res => {
            console.log("res", res);
        });
        if (this.getCode == '00009') {
            this.route.navigate(['/ballot-test-fail-err']);
        }
        else if (this.getCode == '00010') {
            this.route.navigate(['/network-error-access-ten']);
        }
        else if (this.getCode == '00011') {
            this.route.navigate(['/server-commit-network-error-access']);
        }
        else {
            this.route.navigate(['/access-code-error']);
        }
    }
    sendbtn() {
        this.route.navigate(['/sending']);
    }
};
BallotReadyTwoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
BallotReadyTwoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ballot-ready-two',
        template: _raw_loader_ballot_ready_two_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_ready_two_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotReadyTwoPage);



/***/ }),

/***/ 68260:
/*!*******************************************************************!*\
  !*** ./src/app/pages/ballot-ready-two/ballot-ready-two.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-toolbar {\n  height: 85px;\n  padding-top: 35px;\n  padding-right: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  text-align: start;\n  font-size: 23px;\n  color: gray;\n  font-weight: 600;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1yZWFkeS10d28ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFDRTtFQUNFLGdCQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR0o7O0FBREU7RUFDRSxrQkFBQTtBQUlKOztBQUZFO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBTUo7O0FBSkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVFKOztBQU5FO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFTSjs7QUFQRTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBVUo7O0FBUkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFXSjs7QUFSRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBV0o7O0FBVEU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQVlKOztBQVZFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFhSjs7QUFYRTtFQUNFLGtCQUFBO0FBY0o7O0FBYkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWVOOztBQVpFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFlSiIsImZpbGUiOiJiYWxsb3QtcmVhZHktdHdvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG4gIGlvbi1pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5mdHItdHAtdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuYmFjay1idG4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIH1cclxuICAubmV4dC1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgYiB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLnRleHQtcCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDY2O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHZ3O1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMzVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5pYy1jb2wge1xyXG4gICAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgXHJcbiAgLmJvdHRvbS1kaXYtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcbiAgLmNlbi1kaXYtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ 60264:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-ready-two/ballot-ready-two.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.ybr}}</p>\n  </div>\n  <div class=\"cen-div-text\">\n    <ion-row>\n      {{results.bfp}}<br />\n      {{results.zyx098}}\n    </ion-row>\n    <p>{{results.ydn}}</p>\n    <ion-button color=\"dark\"(click)=\"copybtn()\" >\n      {{results.copy}}\n      <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon>\n    </ion-button>\n    <p>{{results.tv3_fb}}</p>\n    <p>{{results.link}}</p>\n  </div>\n  <div class=\"bottom-div-text\">\n    <p>{{results.tv_fp}}</p>\n    <ion-button color=\"dark\" (click)=\"sendbtn()\">\n      {{results.send}}\n      <ion-icon slot=\"end\" name=\"paper-plane-outline\"></ion-icon>\n    </ion-button>\n  </div>\n  <!-- <div *ngIf=\"IsVisible == true\">\n    <p>{{results.tv1_fp}}</p>\n    <p>{{results.link}}</p>\n    <p>{{results.tv2_fb}}</p>\n \n  \n   \n  </div>\n  <div class=\"text-p\" *ngIf=\"fsticon\" (click)=\"PolicyDetails()\">\n    {{results.shmd}}\n    <ion-icon name=\"chevron-down-outline\" *ngIf=\"fsticon\"></ion-icon>\n  </div>\n  <div class=\"text-p\" *ngIf=\"scndicons\" (click)=\"PolicyDetailshide()\">\n    {{results.shmd}}\n\n    <ion-icon name=\"chevron-up-outline\" *ngIf=\"scndicons\"></ion-icon>\n  </div> -->\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <!-- <div class=\"text-p\" style=\"text-align: center;\">\n    {{results.mp}}  <ion-icon name=\"chevron-down-outline\"></ion-icon>\n        </div> -->\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-ready-two_ballot-ready-two_module_ts.js.map