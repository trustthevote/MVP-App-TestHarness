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
        component: _test_results_page__WEBPACK_IMPORTED_MODULE_0__.TestResultsPage
    }
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
            _test_results_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestResultsPageRoutingModule
        ],
        declarations: [_test_results_page__WEBPACK_IMPORTED_MODULE_1__.TestResultsPage]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_test_results_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./test-results.page.html */ 25356);
/* harmony import */ var _test_results_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-results.page.scss */ 60866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);






let TestResultsPage = class TestResultsPage {
    constructor(route, avclientService, activatedRoute) {
        this.route = route;
        this.avclientService = avclientService;
        this.activatedRoute = activatedRoute;
        this.results = [];
    }
    ngOnInit() {
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['test_result_page'];
        });
    }
    passbtn() {
        this.route.navigate(['/ballot-fingerprint', {
                code: this.getCode
            }]);
    }
    failbtn() {
        this.route.navigate(['/ballot-test-failed-test']);
    }
};
TestResultsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
TestResultsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  padding-bottom: 0px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-right: 20px;\n  padding-left: 0px;\n}\n\np {\n  font-size: 23px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-row {\n  text-align: start;\n  font-size: 23px;\n  color: gray;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.div-two {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.div-two .div-upr-text p {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-two .div-upr-text ion-icon {\n  font-size: 65px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\n.div-text-mid {\n  text-align: center;\n  padding-bottom: 20%;\n  font-size: 20px;\n}\n\n.div-text-mid ion-icon {\n  font-size: 11vh;\n}\n\nion-toolbar {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtcmVzdWx0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUVBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQUo7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQU1RO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBSlo7O0FBTVE7RUFDSSxlQUFBO0FBSlo7O0FBU0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFNRztFQUNDLGVBQUE7QUFKSjs7QUFRQTtFQUNJLGFBQUE7QUFMSiIsImZpbGUiOiJ0ZXN0LXJlc3VsdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9uIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5uZXh0LWJ0bntcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIFxyXG59XHJcbnB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgXHJcbn1cclxuLlJlcXVpcmVkLWRpdntcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IFxyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbnAge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2dztcclxuICB9XHJcbmlvbi1yb3cge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuLmRpdi10d297XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuZGl2LXVwci10ZXh0e1xyXG4gICAgICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkICMwMDA7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAwIDM1JSAwIDM1JTtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2VuLWRpdi10ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbi5kaXYtdGV4dC1taWR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMTF2aDtcclxuICAgfVxyXG5cclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.test_results}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\">\r\n    <ion-row>\r\n      {{results.bfp}}<br />\r\n      {{results.zyx098}}\r\n    </ion-row>\r\n    <p>{{results.ydn}}</p>\r\n    <p>{{results.tv2_fb}}\"{{results.str}}\"{{results.tv2_fb1}}</p>\r\n    <p>{{results.tv3}}</p>\r\n  </div>\r\n  <div class=\"Required-div\" style=\"text-align: center\">\r\n    <!-- <p style=\"text-align: start;\">{{results.dbf}}</p> -->\r\n    <div style=\"text-align: center\">\r\n      <div class=\"div-two\">\r\n        <div class=\"div-text-mid\" (click)=\"passbtn()\">\r\n          <p>{{results.passed}}</p>\r\n          <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"div-text-mid\" (click)=\"failbtn()\">\r\n      <p>{{results.failed}}</p>\r\n      <ion-icon name=\"close-circle-outline\"></ion-icon>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"passbtn()\">\r\n          {{results.back}}\r\n          <!-- <ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon> -->\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <!-- <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button> -->\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test-results_test-results_module_ts.js.map