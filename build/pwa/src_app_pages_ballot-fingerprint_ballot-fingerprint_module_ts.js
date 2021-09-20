(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts"],{

/***/ 10223:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFingerprintPageRoutingModule": () => (/* binding */ BallotFingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-fingerprint.page */ 80282);




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

/***/ 32168:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFingerprintPageModule": () => (/* binding */ BallotFingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-fingerprint-routing.module */ 10223);
/* harmony import */ var _ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-fingerprint.page */ 80282);







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

/***/ 80282:
/*!*********************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFingerprintPage": () => (/* binding */ BallotFingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-fingerprint.page.html */ 66184);
/* harmony import */ var _ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-fingerprint.page.scss */ 66945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);






let BallotFingerprintPage = class BallotFingerprintPage {
    constructor(route, avclientService, activatedRoute) {
        this.route = route;
        this.avclientService = avclientService;
        this.activatedRoute = activatedRoute;
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
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot_fingerp'];
        });
    }
    sendbtn() {
        this.avclientService.submitBallotCryptograms(this.getCode).catch(res => {
            console.log("res", res);
        });
        if (this.getCode == '00012') {
            this.route.navigate(['/network-error-access12']);
        }
        else if (this.getCode == '00013') {
            this.route.navigate(['/ballot-access-error13']);
        }
        else {
            this.route.navigate(['/test-results']);
        }
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
};
BallotFingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
BallotFingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ballot-fingerprint',
        template: _raw_loader_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotFingerprintPage);



/***/ }),

/***/ 66945:
/*!***********************************************************************!*\
  !*** ./src/app/pages/ballot-fingerprint/ballot-fingerprint.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-toolbar {\n  height: 85px;\n  padding-top: 35px;\n  padding-right: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  padding-top: 20px;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0Usa0JBQUE7QUFjRjs7QUFiRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBWkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFlRiIsImZpbGUiOiJiYWxsb3QtZmluZ2VycHJpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5saXN0LXF1ZXN0aW9uIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uZnRyLXRwLXRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi5iYWNrLWJ0biB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcbi5uZXh0LWJ0biB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuYiB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG4udGV4dC1wIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA2NjtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwdnc7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIGhlaWdodDogODVweDtcclxuICBwYWRkaW5nLXRvcDogMzVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5pYy1jb2wge1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxcHg7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4uYm90dG9tLWRpdi10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbi5jZW4tZGl2LXRleHQge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbmkge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwN2E7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5pb24tcm93IHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBjb2xvcjogIzAwMDAwMDZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDV2dztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 66184:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-fingerprint/ballot-fingerprint.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.ybr}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\">\r\n    <ion-row>\r\n      {{results.bfp}}<br />\r\n      {{results.zyx098}}\r\n    </ion-row>\r\n    <p>{{results.ydn}}</p>\r\n    <ion-button color=\"dark\"(click)=\"copybtn()\" >\r\n      {{results.copy}}\r\n      <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon>\r\n    </ion-button>\r\n    <p>{{results.tv3_fb}}</p>\r\n    <p>{{results.link}}</p>\r\n  </div>\r\n  <div class=\"bottom-div-text\">\r\n    <p>{{results.tv_fp}}</p>\r\n    <ion-button color=\"dark\" (click)=\"sendbtn()\">\r\n      {{results.send}}\r\n      <ion-icon slot=\"end\" name=\"paper-plane-outline\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n  <!-- <div *ngIf=\"IsVisible == true\">\r\n    <p>{{results.tv1_fp}}</p>\r\n    <p>{{results.link}}</p>\r\n    <p>{{results.tv2_fb}}</p>\r\n \r\n  \r\n   \r\n  </div>\r\n  <div class=\"text-p\" *ngIf=\"fsticon\" (click)=\"PolicyDetails()\">\r\n    {{results.shmd}}\r\n    <ion-icon name=\"chevron-down-outline\" *ngIf=\"fsticon\"></ion-icon>\r\n  </div>\r\n  <div class=\"text-p\" *ngIf=\"scndicons\" (click)=\"PolicyDetailshide()\">\r\n    {{results.shmd}}\r\n\r\n    <ion-icon name=\"chevron-up-outline\" *ngIf=\"scndicons\"></ion-icon>\r\n  </div> -->\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <!-- <div class=\"text-p\" style=\"text-align: center;\">\r\n    {{results.mp}}  <ion-icon name=\"chevron-down-outline\"></ion-icon>\r\n        </div> -->\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts.js.map