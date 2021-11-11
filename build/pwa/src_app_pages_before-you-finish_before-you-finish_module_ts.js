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
        component: _before_you_finish_page__WEBPACK_IMPORTED_MODULE_0__.BeforeYouFinishPage,
    },
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
            _before_you_finish_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeforeYouFinishPageRoutingModule,
        ],
        declarations: [_before_you_finish_page__WEBPACK_IMPORTED_MODULE_1__.BeforeYouFinishPage],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_before_you_finish_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./before-you-finish.page.html */ 24193);
/* harmony import */ var _before_you_finish_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./before-you-finish.page.scss */ 97844);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);
/* harmony import */ var src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/voterartifacts.service */ 22130);







let BeforeYouFinishPage = class BeforeYouFinishPage {
    constructor(route, activatedRoute, avclientService, voterartifactsService) {
        this.route = route;
        this.activatedRoute = activatedRoute;
        this.avclientService = avclientService;
        this.voterartifactsService = voterartifactsService;
        this.results = [];
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].beforeyoufinish_page;
        });
    }
    nextbtn() {
        this.cvr = this.voterartifactsService.cvr;
        this.avclientService
            .constructBallotCryptograms(this.cvr)
            .then(() => {
            this.route.navigate([
                '/ballot-fingerprint',
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
};
BeforeYouFinishPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__.VoterartifactsService }
];
BeforeYouFinishPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZm9yZS15b3UtZmluaXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVFGIiwiZmlsZSI6ImJlZm9yZS15b3UtZmluaXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4ubGlzdC1xdWVzdGlvbiBwIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jaXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgcGFkZGluZy10b3A6IDEwJTtcbn1cbmlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5wYXJhLWNlbnRlciB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4uZG92LWRpdiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgd2lkdGg6IDkzJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xufVxuLnNlYy1wYXJhIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjNweDtcblxuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cbi5saW5rLWxhc3QtcGFyYSB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4udGhhbmtzLXNlYyB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLm1pZCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <div class=\"list-question\">\n    <p>{{results.beforeyoufinish}}</p>\n  </div>\n  <div style=\"text-align: center; padding-top: 25px\">\n    <div class=\"para-center\">{{results.para}}</div>\n    <div class=\"mid\">\n      {{results.para_center}}\"{{results.btc}}\" {{results.bck}}\n    </div>\n    <div class=\"mid\">{{results.link}}</div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style=\"text-align: end\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\"> </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\n          {{results.next}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_before-you-finish_before-you-finish_module_ts.js.map