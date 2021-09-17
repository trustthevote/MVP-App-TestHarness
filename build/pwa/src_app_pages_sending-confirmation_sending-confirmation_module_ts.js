(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_sending-confirmation_sending-confirmation_module_ts"],{

/***/ 72345:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingConfirmationPageRoutingModule": () => (/* binding */ SendingConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _sending_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending-confirmation.page */ 25957);




const routes = [
    {
        path: '',
        component: _sending_confirmation_page__WEBPACK_IMPORTED_MODULE_0__.SendingConfirmationPage
    }
];
let SendingConfirmationPageRoutingModule = class SendingConfirmationPageRoutingModule {
};
SendingConfirmationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendingConfirmationPageRoutingModule);



/***/ }),

/***/ 30403:
/*!***************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingConfirmationPageModule": () => (/* binding */ SendingConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _sending_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending-confirmation-routing.module */ 72345);
/* harmony import */ var _sending_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending-confirmation.page */ 25957);







let SendingConfirmationPageModule = class SendingConfirmationPageModule {
};
SendingConfirmationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sending_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendingConfirmationPageRoutingModule
        ],
        declarations: [_sending_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.SendingConfirmationPage]
    })
], SendingConfirmationPageModule);



/***/ }),

/***/ 25957:
/*!*************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingConfirmationPage": () => (/* binding */ SendingConfirmationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_sending_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sending-confirmation.page.html */ 28940);
/* harmony import */ var _sending_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending-confirmation.page.scss */ 93026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let SendingConfirmationPage = class SendingConfirmationPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['sending_confirmation_page'];
        });
    }
    Continuebtn() {
        this.route.navigate(['/howditgo']);
    }
};
SendingConfirmationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SendingConfirmationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sending-confirmation',
        template: _raw_loader_sending_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sending_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SendingConfirmationPage);



/***/ }),

/***/ 93026:
/*!***************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n}\n\nion-button {\n  margin-top: 20px;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n  padding-bottom: 30px;\n}\n\nion-toolbar {\n  text-align: center;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  color: gray;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\nion-bitton {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRpbmctY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBRUEscUJBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFJSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBRUEsY0FBQTtBQUtKOztBQUhFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQU9OOztBQUxFO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQVFOOztBQU5FO0VBQ0UsZUFBQTtBQVNKIiwiZmlsZSI6InNlbmRpbmctY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAvLyAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICB9IFxyXG5we1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ubWlke1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5pb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY2lyLWljb257XHJcbiAgICBmb250LXNpemU6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnBhcmEtY2VudGVye1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uZG92LWRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IDkzJTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gIH1cclxuICAuc2VjLXBhcmF7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGluay1sYXN0LXBhcmF7XHJcbiAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC50aGFua3Mtc2Vje1xyXG4gICAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbiAgaW9uLWJpdHRvbntcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9Il19 */");

/***/ }),

/***/ 28940:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sending-confirmation/sending-confirmation.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n  <p class=\"top-text\">What's Next</p>\r\n  <div style=\"text-align: center\">\r\n    <ion-icon name=\"checkmark-circle-outline\" class=\"cir-icon\"></ion-icon>\r\n    <div class=\"para-center\">{{results.heading}}</div>\r\n    <div class=\"mid\">{{results.para_center}}</div>\r\n    <div class=\"sec-para\">{{results.heading_link}}<br />{{results.btr}}</div>\r\n    <div class=\"link-last-para\"><a href=\"\">{{results.link}}</a></div>\r\n    <div class=\"thanks-sec\">{{results.thanks}}</div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" (click)=\"Continuebtn()\">\r\n      {{results.next}}\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sending-confirmation_sending-confirmation_module_ts.js.map