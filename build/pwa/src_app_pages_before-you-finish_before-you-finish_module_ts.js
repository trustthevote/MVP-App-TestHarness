(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_before-you-finish_before-you-finish_module_ts"],{

/***/ 49949:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/before-you-finish/before-you-finish-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeYouFinishPageRoutingModule": () => (/* binding */ BeforeYouFinishPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _before_you_finish_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./before-you-finish.page */ 96268);




const routes = [
    {
        path: '',
        component: _before_you_finish_page__WEBPACK_IMPORTED_MODULE_0__.BeforeYouFinishPage
    }
];
let BeforeYouFinishPageRoutingModule = class BeforeYouFinishPageRoutingModule {
};
BeforeYouFinishPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BeforeYouFinishPageRoutingModule);



/***/ }),

/***/ 66362:
/*!*********************************************************************!*\
  !*** ./src/app/pages/before-you-finish/before-you-finish.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeYouFinishPageModule": () => (/* binding */ BeforeYouFinishPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _before_you_finish_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./before-you-finish-routing.module */ 49949);
/* harmony import */ var _before_you_finish_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before-you-finish.page */ 96268);







let BeforeYouFinishPageModule = class BeforeYouFinishPageModule {
};
BeforeYouFinishPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _before_you_finish_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeforeYouFinishPageRoutingModule
        ],
        declarations: [_before_you_finish_page__WEBPACK_IMPORTED_MODULE_1__.BeforeYouFinishPage]
    })
], BeforeYouFinishPageModule);



/***/ }),

/***/ 96268:
/*!*******************************************************************!*\
  !*** ./src/app/pages/before-you-finish/before-you-finish.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeforeYouFinishPage": () => (/* binding */ BeforeYouFinishPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_before_you_finish_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./before-you-finish.page.html */ 24193);
/* harmony import */ var _before_you_finish_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before-you-finish.page.scss */ 97844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);






let BeforeYouFinishPage = class BeforeYouFinishPage {
    constructor(route, activatedRoute, avclientService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.avclientService = avclientService;
        this.results = [];
    }
    ngOnInit() {
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['beforeyoufinish_page'];
        });
    }
    nextbtn() {
        if (this.getCode != null) {
            this.avclientService.constructBallotCryptograms(this.getCode).catch(res => {
                console.log("res", res);
            });
        }
        if (this.getCode == '00006') {
            this.route.navigate(['/calloutoforder_construct00006_error']);
        }
        else if (this.getCode == '00007') {
            this.route.navigate(['/check_network_construct00007_error']);
        }
        else if (this.getCode == '00008') {
            this.route.navigate(['/corrupt_cv_construct00008_error']);
        }
        else {
            this.route.navigate(['/ballot-fingerprint', {
                    code: this.getCode
                }]);
        }
    }
};
BeforeYouFinishPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService }
];
BeforeYouFinishPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-before-you-finish',
        template: _raw_loader_before_you_finish_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_before_you_finish_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BeforeYouFinishPage);



/***/ }),

/***/ 97844:
/*!*********************************************************************!*\
  !*** ./src/app/pages/before-you-finish/before-you-finish.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZm9yZS15b3UtZmluaXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUFGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFDQTtFQUVFLGFBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUlGIiwiZmlsZSI6ImJlZm9yZS15b3UtZmluaXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIC8vIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5saXN0LXF1ZXN0aW9uIHAge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY2lyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNjVweDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAvLyB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucGFyYS1jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmRvdi1kaXYge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiA5MyU7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG4uc2VjLXBhcmEge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubGluay1sYXN0LXBhcmEge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi50aGFua3Mtc2VjIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4ubWlkIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 24193:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/before-you-finish/before-you-finish.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <div class=\"list-question\">\n    <p>{{results.beforeyoufinish}}</p>\n  </div>\n  <div style=\"text-align: center; padding-top: 25px\">\n    <div class=\"para-center\">{{results.para}}</div>\n    <div class=\"mid\">\n      {{results.para_center}}\"{{results.btc}}\" {{results.bck}}\n    </div>\n    <div class=\"mid\">{{results.link}}</div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style=\"text-align: end\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\n        <!-- <ion-button color=\"dark\" (click)=\"backbtn()\">\n          {{results.back}}\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-button> -->\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\n          {{results.next}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_before-you-finish_before-you-finish_module_ts.js.map