(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_test-results_test-results_module_ts"],{

/***/ 93:
/*!*******************************************************************!*\
  !*** ./src/app/pages/test-results/test-results-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPageRoutingModule": () => (/* binding */ TestResultsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-results.page */ 25739);




const routes = [
    {
        path: '',
        component: _test_results_page__WEBPACK_IMPORTED_MODULE_0__.TestResultsPage,
    },
];
let TestResultsPageRoutingModule = class TestResultsPageRoutingModule {
};
TestResultsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestResultsPageRoutingModule);



/***/ }),

/***/ 48530:
/*!***********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPageModule": () => (/* binding */ TestResultsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _test_results_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-results-routing.module */ 93);
/* harmony import */ var _test_results_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page */ 25739);







let TestResultsPageModule = class TestResultsPageModule {
};
TestResultsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestResultsPageRoutingModule,
        ],
        declarations: [_test_results_page__WEBPACK_IMPORTED_MODULE_1__.TestResultsPage],
    })
], TestResultsPageModule);



/***/ }),

/***/ 25739:
/*!*********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestResultsPage": () => (/* binding */ TestResultsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./test-results.page.html */ 25356);
/* harmony import */ var _test_results_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page.scss */ 60866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);
/* harmony import */ var src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/voterartifacts.service */ 22130);







let TestResultsPage = class TestResultsPage {
    constructor(route, avclientService, activatedRoute, voterartifactsService) {
        this.route = route;
        this.avclientService = avclientService;
        this.activatedRoute = activatedRoute;
        this.voterartifactsService = voterartifactsService;
        this.results = [];
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].test_result_page;
        });
    }
    passbtn() {
        this.cvr = this.voterartifactsService.cvr;
        this.avclientService
            .constructBallotCryptograms(this.cvr)
            .then(() => {
            this.route.navigate([
                '/ballot-resealed',
                {
                    code: this.getCode,
                },
            ]);
        })
            .catch((res) => {
            if (res.message === 'call out of order error') {
                this.route.navigate(['/calloutoforder_construct00006_error']);
            }
            else if (res.message === 'network code') {
                this.route.navigate(['/check_network_construct00007_error']);
            }
            else if (res.message === 'corrupt CVR') {
                this.route.navigate(['/corrupt_cv_construct00008_error']);
            }
        });
    }
    failbtn() {
        this.route.navigate(['/ballot-test-failed-test']);
    }
    backbtn() {
        this.route.navigate([
            '/ballot-fingerprint',
            {
                code: this.getCode,
            },
        ]);
    }
};
TestResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__.VoterartifactsService }
];
TestResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-test-results',
        template: _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_test_results_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TestResultsPage);



/***/ }),

/***/ 60866:
/*!***********************************************************!*\
  !*** ./src/app/pages/test-results/test-results.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  padding-bottom: 0px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-right: 20px;\n  padding-left: 0px;\n}\n\np {\n  font-size: 23px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-row {\n  text-align: start;\n  font-size: 23px;\n  color: gray;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.div-two {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.div-two .div-upr-text p {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-two .div-upr-text ion-icon {\n  font-size: 65px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\n.div-text-mid {\n  text-align: center;\n  padding-bottom: 20%;\n  font-size: 20px;\n}\n\n.div-text-mid ion-icon {\n  font-size: 11vh;\n}\n\nion-toolbar {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUlGOztBQURBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUlGOztBQURJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR047O0FBREk7RUFDRSxlQUFBO0FBR047O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFERTtFQUNFLGVBQUE7QUFHSjs7QUFBQTtFQUNFLGFBQUE7QUFHRiIsImZpbGUiOiJ0ZXN0LXJlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cbi5saXN0LXF1ZXN0aW9uIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4ubmV4dC1idG4ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5wIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi5SZXF1aXJlZC1kaXYge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDB2dztcbn1cbmlvbi1yb3cge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5kaXYtdHdvIHtcbiAgcGFkZGluZy10b3A6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAuZGl2LXVwci10ZXh0IHtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICB9XG4gIH1cbn1cblxuLmNlbi1kaXYtdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDcwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZGl2LXRleHQtbWlkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMjAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDExdmg7XG4gIH1cbn1cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 25356:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test-results/test-results.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.test_results}}</p>\n  </div>\n  <div class=\"cen-div-text\">\n    <ion-row>\n      {{results.bfp}}<br />\n      {{results.zyx098}}\n    </ion-row>\n    <p>{{results.ydn}}</p>\n    <p>{{results.tv2_fb}}\"{{results.str}}\"{{results.tv2_fb1}}</p>\n    <p>{{results.tv3}}</p>\n  </div>\n  <div class=\"Required-div\" style=\"text-align: center\">\n    <div style=\"text-align: center\">\n      <div class=\"div-two\">\n        <div class=\"div-text-mid\" (click)=\"passbtn()\">\n          <p>{{results.passed}}</p>\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"div-text-mid\" (click)=\"failbtn()\">\n      <p>{{results.failed}}</p>\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\n          {{results.back}}\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\"> </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-results_test-results_module_ts.js.map