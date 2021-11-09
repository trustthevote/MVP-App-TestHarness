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
        component: _ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.BallotFingerprintPage,
    },
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
            _ballot_fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotFingerprintPageRoutingModule,
        ],
        declarations: [_ballot_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.BallotFingerprintPage],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_fingerprint_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-fingerprint.page.html */ 66184);
/* harmony import */ var _ballot_fingerprint_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-fingerprint.page.scss */ 66945);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);
/* harmony import */ var src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/voterartifacts.service */ 22130);







let BallotFingerprintPage = class BallotFingerprintPage {
    constructor(route, avclientService, activatedRoute, voterartifactsService) {
        this.route = route;
        this.avclientService = avclientService;
        this.activatedRoute = activatedRoute;
        this.voterartifactsService = voterartifactsService;
        this.results = [];
        this.isVisible = false;
        this.icon = true;
        this.scndicons = false;
        this.fsticon = true;
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
    }
    policyDetails() {
        this.isVisible = true;
        this.fsticon = false;
        this.scndicons = true;
    }
    policyDetailsHide() {
        this.isVisible = false;
        this.scndicons = false;
        this.fsticon = true;
    }
    ngOnInit() {
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].ballot_fingerp;
        });
    }
    sendbtn() {
        this.affidavit = this.voterartifactsService.affidavit;
        this.avclientService
            .submitBallotCryptograms(this.affidavit)
            .then(() => {
            this.route.navigate([
                '/sending-confirmation',
                {
                    code: this.getCode,
                },
            ]);
        })
            .catch((res) => {
            if (res.message === 'network code') {
                this.route.navigate(['/check_network_submit00012_error']);
            }
            else if (res.message === 'call out of order error') {
                this.route.navigate(['/calloutoforder_submit00013_error']);
            }
        });
    }
    copybtn() {
        this.avclientService
            .spoilBallotCryptograms()
            .then(() => {
            this.route.navigate([
                '/test-results',
                {
                    code: this.getCode,
                },
            ]);
        })
            .catch((res) => {
            if (res.message === 'call out of order error') {
                this.route.navigate(['/calloutoforder_spoil00009_error']);
            }
            else if (res.message === 'network code') {
                this.route.navigate(['/check_network_spoil00010_error']);
            }
            else if (res.message === 'server commitment error') {
                this.route.navigate(['/check_server_spoil00011_error']);
            }
        });
    }
};
BallotFingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__.VoterartifactsService }
];
BallotFingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-toolbar {\n  height: 85px;\n  padding-top: 35px;\n  padding-right: 20px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar {\n  padding-left: 20px;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  text-align: start;\n  font-size: 23px;\n  color: gray;\n  font-weight: 600;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU9GOztBQUxBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNGOztBQVBBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQVdGOztBQVJBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFXRjs7QUFUQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0Usa0JBQUE7QUFjRjs7QUFiRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBZUo7O0FBWkE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWVGIiwiZmlsZSI6ImJhbGxvdC1maW5nZXJwcmludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmxpc3QtcXVlc3Rpb24ge1xuICBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuaW9uLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuLmZ0ci10cC10ZXh0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuLmJhY2stYnRuIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xufVxuLm5leHQtYnRuIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuYiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwMDAwNjY7XG59XG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDB2dztcbn1cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiA4NXB4O1xuICBwYWRkaW5nLXRvcDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5pYy1jb2wge1xuICBwYWRkaW5nOiAxMHB4IDAgMXB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5ib3R0b20tZGl2LXRleHQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDcwcHg7XG59XG4uY2VuLWRpdi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbmkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwN2E7XG59XG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwODA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuaW9uLXJvdyB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDIzcHg7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.ybr}}</p>\n  </div>\n  <div class=\"cen-div-text\">\n    <ion-row>\n      {{results.bfp}}<br />\n      {{results.zyx098}}\n    </ion-row>\n    <p>{{results.ydn}}</p>\n    <ion-button color=\"dark\" (click)=\"copybtn()\">\n      {{results.copy}}\n      <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon>\n    </ion-button>\n    <p>{{results.tv3_fb}}</p>\n    <p>{{results.link}}</p>\n  </div>\n  <div class=\"bottom-div-text\">\n    <p>{{results.tv_fp}}</p>\n    <ion-button color=\"dark\" (click)=\"sendbtn()\">\n      {{results.send}}\n      <ion-icon slot=\"end\" name=\"paper-plane-outline\"></ion-icon>\n    </ion-button>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar> </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-fingerprint_ballot-fingerprint_module_ts.js.map