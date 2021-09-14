(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_request-access-code_request-access-code_module_ts"],{

/***/ 4491:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccessCodePageRoutingModule": () => (/* binding */ RequestAccessCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _request_access_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-access-code.page */ 6506);




const routes = [
    {
        path: '',
        component: _request_access_code_page__WEBPACK_IMPORTED_MODULE_0__.RequestAccessCodePage
    }
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

/***/ 8554:
/*!*************************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccessCodePageModule": () => (/* binding */ RequestAccessCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _request_access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-access-code-routing.module */ 4491);
/* harmony import */ var _request_access_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-access-code.page */ 6506);







let RequestAccessCodePageModule = class RequestAccessCodePageModule {
};
RequestAccessCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _request_access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestAccessCodePageRoutingModule
        ],
        declarations: [_request_access_code_page__WEBPACK_IMPORTED_MODULE_1__.RequestAccessCodePage]
    })
], RequestAccessCodePageModule);



/***/ }),

/***/ 6506:
/*!***********************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestAccessCodePage": () => (/* binding */ RequestAccessCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_request_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./request-access-code.page.html */ 3205);
/* harmony import */ var _request_access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request-access-code.page.scss */ 7069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/statuscode.service */ 2413);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/avclient.service */ 5913);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);








let RequestAccessCodePage = class RequestAccessCodePage {
    constructor(route, statuscodeService, avclientService) {
        this.route = route;
        this.statuscodeService = statuscodeService;
        this.avclientService = avclientService;
        this.results = [];
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['rap_page'];
        });
    }
    Continuebtn() {
        this.avclientService.assignServerUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url);
        if (this.userObject.lastname != undefined) {
            let opaqueVoterId = this.userObject.lastname;
            if (opaqueVoterId == 'OOOOO') {
                opaqueVoterId = 'T0000';
            }
            else if (opaqueVoterId == 'OOOO') {
                opaqueVoterId = 'T0001';
            }
            this.avclientService.requestAccessCode(opaqueVoterId);
        }
    }
};
RequestAccessCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__.StatuscodeService },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__.AvclientService }
];
RequestAccessCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-request-access-code',
        template: _raw_loader_request_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_request_access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RequestAccessCodePage);



/***/ }),

/***/ 7069:
/*!*************************************************************************!*\
  !*** ./src/app/pages/request-access-code/request-access-code.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtYWNjZXNzLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBRUMsYUFBQTtBQUREOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUFOOztBQUVFO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVKIiwiZmlsZSI6InJlcXVlc3QtYWNjZXNzLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIC8vIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxucHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uY2lyLWljb257XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgLy8gdGV4dC1hbGlnbjogZW5kO1xyXG4gcGFkZGluZzogMTBweDtcclxufVxyXG4ucGFyYS1jZW50ZXJ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi5kb3YtZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICB3aWR0aDogOTMlO1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG4gIC5zZWMtcGFyYXtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgXHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saW5rLWxhc3QtcGFyYXtcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLnRoYW5rcy1zZWN7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICAubWlke1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ 3205:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/request-access-code/request-access-code.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n \r\n  <div style=\"text-align: center;padding-top: 25px;\">\r\n    <div class=\"para-center\">{{results.para}}</div>\r\n    <div class=\"mid\">{{results.para_center}}</div>\r\n    <div class=\"link-last-para\"> <a href=\"\">{{results.link}}</a></div>\r\n  \r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar style=\"text-align: end;\">\r\n    \r\n   \r\n   \r\n        <ion-button color=\"dark\" (click)=\"Continuebtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n  \r\n \r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_request-access-code_request-access-code_module_ts.js.map