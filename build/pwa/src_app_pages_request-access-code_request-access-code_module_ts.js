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
            _request_access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestAccessCodePageRoutingModule
        ],
        declarations: [_request_access_code_page__WEBPACK_IMPORTED_MODULE_1__.RequestAccessCodePage]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/statuscode.service */ 52413);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 92340);








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
            if (opaqueVoterId == 'OOOOO' || opaqueVoterId == 'T0000') {
                opaqueVoterId = '00000';
            }
            else if (opaqueVoterId == 'OOOO' || opaqueVoterId == 'T0001') {
                opaqueVoterId = '00001';
            }
            else {
                this.route.navigate(['/access-code', {
                        t: new Date().getTime()
                    }]);
            }
            this.avclientService.requestAccessCode(opaqueVoterId).catch(res => {
                console.log("res", res);
                if (res == 'Error: voter record not found') {
                    this.route.navigate(['/access-code-error']);
                }
                else if (res == 'Error: network code') {
                    this.route.navigate(['/check-network']);
                }
            });
        }
    }
    backbtn() {
        this.route.navigate(['/ballot-complete']);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QtYWNjZXNzLWNvZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFFQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdBO0VBRUMsYUFBQTtBQUREOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLGNBQUE7QUFESjs7QUFHRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFHRTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUFOOztBQUVFO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoicmVxdWVzdC1hY2Nlc3MtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgLy8gLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG5we1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi5jaXItaWNvbntcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBlbmQ7XHJcbiBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wYXJhLWNlbnRlcntcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmRvdi1kaXYge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgLnNlYy1wYXJhe1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxpbmstbGFzdC1wYXJhe1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAudGhhbmtzLXNlY3tcclxuICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5taWR7XHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n \r\n  <div style=\"text-align: center;padding-top: 25px;\">\r\n    <div class=\"para-center\">{{results.para}}</div>\r\n    <div class=\"mid\">{{results.para_center}}</div>\r\n    <div class=\"link-last-para\"> <a href=\"\">{{results.link}}</a></div>\r\n  \r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar style=\"text-align: end;\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.back}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"Continuebtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_request-access-code_request-access-code_module_ts.js.map