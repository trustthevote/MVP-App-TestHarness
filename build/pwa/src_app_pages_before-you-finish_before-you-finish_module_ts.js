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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _before_you_finish_routing_module__WEBPACK_IMPORTED_MODULE_0__.BeforeYouFinishPageRoutingModule],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlZm9yZS15b3UtZmluaXNoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVFGIiwiZmlsZSI6ImJlZm9yZS15b3UtZmluaXNoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubGlzdC1xdWVzdGlvbiBwIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNpci1pY29uIHtcclxuICBmb250LXNpemU6IDY1cHg7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucGFyYS1jZW50ZXIge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmRvdi1kaXYge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiA5MyU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbi5zZWMtcGFyYSB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG5cclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5saW5rLWxhc3QtcGFyYSB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLnRoYW5rcy1zZWMge1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi5taWQge1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n  <div class=\"list-question\">\r\n    <p>{{results.beforeyoufinish}}</p>\r\n  </div>\r\n  <div style=\"text-align: center; padding-top: 25px\">\r\n    <div class=\"para-center\">{{results.para}}</div>\r\n    <div class=\"mid\">{{results.para_center}}\"{{results.btc}}\" {{results.bck}}</div>\r\n    <div class=\"mid\">{{results.link}}</div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar style=\"text-align: end\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\"> </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_before-you-finish_before-you-finish_module_ts.js.map