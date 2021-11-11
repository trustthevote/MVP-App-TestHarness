(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_request-access-code_request-access-code_module_ts"],{

/***/ 33282:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccessCodePageRoutingModule": () => (/* binding */ RequestAccessCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _request_access_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-access-code.page */ 46506);




const routes = [
    {
        path: '',
        component: _request_access_code_page__WEBPACK_IMPORTED_MODULE_0__.RequestAccessCodePage,
    },
];
let RequestAccessCodePageRoutingModule = class RequestAccessCodePageRoutingModule {
};
RequestAccessCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RequestAccessCodePageRoutingModule);



/***/ }),

/***/ 28554:
/*!*************************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccessCodePageModule": () => (/* binding */ RequestAccessCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _request_access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-access-code-routing.module */ 33282);
/* harmony import */ var _request_access_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-access-code.page */ 46506);







let RequestAccessCodePageModule = class RequestAccessCodePageModule {
};
RequestAccessCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _request_access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestAccessCodePageRoutingModule,
        ],
        declarations: [_request_access_code_page__WEBPACK_IMPORTED_MODULE_1__.RequestAccessCodePage],
    })
], RequestAccessCodePageModule);



/***/ }),

/***/ 46506:
/*!***********************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccessCodePage": () => (/* binding */ RequestAccessCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_request_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./request-access-code.page.html */ 33205);
/* harmony import */ var _request_access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-access-code.page.scss */ 37069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/statuscode.service */ 52413);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/api/voterartifacts.service */ 22130);









let RequestAccessCodePage = class RequestAccessCodePage {
    constructor(route, statuscodeService, avclientService, voterartifactsService) {
        this.route = route;
        this.statuscodeService = statuscodeService;
        this.avclientService = avclientService;
        this.voterartifactsService = voterartifactsService;
        this.results = [];
        this.avclientService.initServerURL(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url);
        this.avclientService.initialize();
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        this.voterartifactsService.initialize(this.userObject.lastname);
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].rap_page;
        });
    }
    continuebtn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.userObject.lastname !== undefined) {
                const opaqueVoterId = this.userObject.lastname;
                yield this.avclientService
                    .requestAccessCode(opaqueVoterId)
                    .then(() => {
                    this.route.navigate([
                        '/access-code',
                        {
                            t: new Date().getTime(),
                        },
                    ]);
                })
                    .catch((res) => {
                    if (res.message === 'voter record not found') {
                        this.route.navigate(['/voter_record_notfound00000_error']);
                    }
                    else if (res.message === 'network code') {
                        this.route.navigate(['/check_network_request00001_error']);
                    }
                });
            }
        });
    }
    backbtn() {
        this.route.navigate(['/ballot-complete']);
    }
};
RequestAccessCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__.StatuscodeService },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__.AvclientService },
    { type: src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_5__.VoterartifactsService }
];
RequestAccessCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-request-access-code',
        template: _raw_loader_request_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_request_access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RequestAccessCodePage);



/***/ }),

/***/ 37069:
/*!*************************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtYWNjZXNzLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUtGOztBQUhBO0VBQ0UsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQU9GOztBQUxBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBU0YiLCJmaWxlIjoicmVxdWVzdC1hY2Nlc3MtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cbnAge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmNpci1pY29uIHtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnBhcmEtY2VudGVyIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5kb3YtZGl2IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICB3aWR0aDogOTMlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG4uc2VjLXBhcmEge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiAyM3B4O1xuXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmxpbmstbGFzdC1wYXJhIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi50aGFua3Mtc2VjIHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubWlkIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 33205:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-access-code/request-access-code.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\n  <div style=\"text-align: center; padding-top: 25px\">\n    <div class=\"para-center\">{{results.para}}</div>\n    <div class=\"mid\">{{results.para_center}}</div>\n    <div class=\"link-last-para\"><a href=\"\">{{results.link}}</a></div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar style=\"text-align: end\">\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\n          {{results.back}}\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"continuebtn()\">\n          {{results.next}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_request-access-code_request-access-code_module_ts.js.map