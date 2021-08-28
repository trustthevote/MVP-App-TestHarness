(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_sending-confirmation_sending-confirmation_module_ts"],{

/***/ 2345:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingConfirmationPageRoutingModule": () => (/* binding */ SendingConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sending_confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending-confirmation.page */ 5957);




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

/***/ 403:
/*!***************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingConfirmationPageModule": () => (/* binding */ SendingConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sending_confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending-confirmation-routing.module */ 2345);
/* harmony import */ var _sending_confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending-confirmation.page */ 5957);







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

/***/ 5957:
/*!*************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingConfirmationPage": () => (/* binding */ SendingConfirmationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sending_confirmation_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sending-confirmation.page.html */ 8940);
/* harmony import */ var _sending_confirmation_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending-confirmation.page.scss */ 3026);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





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
        this.route.navigate(['/digital-return-next-steps']);
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

/***/ 3026:
/*!***************************************************************************!*\
  !*** ./src/app/pages/sending-confirmation/sending-confirmation.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\np {\n  padding-left: 14px;\n  padding-right: 14px;\n  font-size: 27px;\n  font-weight: 700;\n  padding-top: 10px;\n  text-align: start;\n  margin-top: 0;\n}\n\nion-button {\n  margin-right: 25px;\n  margin-bottom: 25px;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 50%;\n}\n\nion-toolbar {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRpbmctY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFFSjs7QUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtBQUlKIiwiZmlsZSI6InNlbmRpbmctY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbnB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNHB4O1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcbmlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5jaXItaWNvbntcclxuICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn0iXX0= */");

/***/ }),

/***/ 8940:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sending-confirmation/sending-confirmation.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n  <div style=\"text-align: center\">\r\n    <ion-icon name=\"checkmark-circle-outline\" class=\"cir-icon\"></ion-icon>\r\n    <p>{{results.heading}}</p>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" (click)=\"Continuebtn()\">\r\n      {{results.next}}\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sending-confirmation_sending-confirmation_module_ts.js.map