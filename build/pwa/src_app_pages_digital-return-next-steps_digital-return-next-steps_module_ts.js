(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_digital-return-next-steps_digital-return-next-steps_module_ts"],{

/***/ 8114:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalReturnNextStepsPageRoutingModule": () => (/* binding */ DigitalReturnNextStepsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-return-next-steps.page */ 3755);




const routes = [
    {
        path: '',
        component: _digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_0__.DigitalReturnNextStepsPage
    }
];
let DigitalReturnNextStepsPageRoutingModule = class DigitalReturnNextStepsPageRoutingModule {
};
DigitalReturnNextStepsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DigitalReturnNextStepsPageRoutingModule);



/***/ }),

/***/ 1102:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalReturnNextStepsPageModule": () => (/* binding */ DigitalReturnNextStepsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _digital_return_next_steps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-return-next-steps-routing.module */ 8114);
/* harmony import */ var _digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digital-return-next-steps.page */ 3755);







let DigitalReturnNextStepsPageModule = class DigitalReturnNextStepsPageModule {
};
DigitalReturnNextStepsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _digital_return_next_steps_routing_module__WEBPACK_IMPORTED_MODULE_0__.DigitalReturnNextStepsPageRoutingModule
        ],
        declarations: [_digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_1__.DigitalReturnNextStepsPage]
    })
], DigitalReturnNextStepsPageModule);



/***/ }),

/***/ 3755:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalReturnNextStepsPage": () => (/* binding */ DigitalReturnNextStepsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_digital_return_next_steps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./digital-return-next-steps.page.html */ 7024);
/* harmony import */ var _digital_return_next_steps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digital-return-next-steps.page.scss */ 783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let DigitalReturnNextStepsPage = class DigitalReturnNextStepsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToFinish() {
        this.router.navigate(['tobecontinue']);
    }
};
DigitalReturnNextStepsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
DigitalReturnNextStepsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-digital-return-next-steps',
        template: _raw_loader_digital_return_next_steps_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_digital_return_next_steps_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DigitalReturnNextStepsPage);



/***/ }),

/***/ 783:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.back-btn {\n  padding-left: 0px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-bottom: 30px;\n  padding-right: 20px;\n}\n\nion-toolbar {\n  padding-left: 20px;\n  --padding-bottom: 20px;\n}\n\nion-toolbar p {\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0YWwtcmV0dXJuLW5leHQtc3RlcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUtFO0VBQ0MsaUJBQUE7QUFGSDs7QUFJRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHRTtFQUNFLGtCQUFBO0VBRUEsc0JBQUE7QUFESjs7QUFFSTtFQUNJLGVBQUE7QUFBUiIsImZpbGUiOiJkaWdpdGFsLXJldHVybi1uZXh0LXN0ZXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gXHJcbiAgLmJhY2stYnRuIHtcclxuICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC5uZXh0LWJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuIFxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBpb24tdG9vbGJhcntcclxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgXHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDIzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gXHJcbiAgIl19 */");

/***/ }),

/***/ 7024:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/digital-return-next-steps/digital-return-next-steps.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>Urgent Next Steps!</p>\r\n  </div>\r\n  <p>\r\n    Congrats on finishing your ballot! There are still a few more important\r\n    steps that you need to complete. Please click the link below to begin.\r\n  </p>\r\n  <p>www.linktosite.gov</p>\r\n \r\n\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <p>Thank you for using ABC!</p>\r\n    <ion-col style=\"text-align: end;\" class=\"back-btn\"><ion-button color=\"dark\" (click)=\"  goToFinish()\">\r\n        Finish\r\n       </ion-button></ion-col>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_digital-return-next-steps_digital-return-next-steps_module_ts.js.map