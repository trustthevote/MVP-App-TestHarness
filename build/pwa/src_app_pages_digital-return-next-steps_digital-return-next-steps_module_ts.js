(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_digital-return-next-steps_digital-return-next-steps_module_ts"],{

/***/ 28114:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps-routing.module.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalReturnNextStepsPageRoutingModule": () => (/* binding */ DigitalReturnNextStepsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-return-next-steps.page */ 63755);




const routes = [
    {
        path: '',
        component: _digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_0__.DigitalReturnNextStepsPage,
    },
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

/***/ 61102:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalReturnNextStepsPageModule": () => (/* binding */ DigitalReturnNextStepsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _digital_return_next_steps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digital-return-next-steps-routing.module */ 28114);
/* harmony import */ var _digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digital-return-next-steps.page */ 63755);







let DigitalReturnNextStepsPageModule = class DigitalReturnNextStepsPageModule {
};
DigitalReturnNextStepsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _digital_return_next_steps_routing_module__WEBPACK_IMPORTED_MODULE_0__.DigitalReturnNextStepsPageRoutingModule],
        declarations: [_digital_return_next_steps_page__WEBPACK_IMPORTED_MODULE_1__.DigitalReturnNextStepsPage],
    })
], DigitalReturnNextStepsPageModule);



/***/ }),

/***/ 63755:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps.page.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DigitalReturnNextStepsPage": () => (/* binding */ DigitalReturnNextStepsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_digital_return_next_steps_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./digital-return-next-steps.page.html */ 67024);
/* harmony import */ var _digital_return_next_steps_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./digital-return-next-steps.page.scss */ 60783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let DigitalReturnNextStepsPage = class DigitalReturnNextStepsPage {
    constructor(router) {
        this.router = router;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].digital_return_next_step_page;
        });
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

/***/ 60783:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/digital-return-next-steps/digital-return-next-steps.page.scss ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.back-btn {\n  padding-left: 0px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-bottom: 30px;\n  padding-right: 20px;\n}\n\nion-toolbar {\n  padding-left: 20px;\n  --padding-bottom: 20px;\n}\n\nion-toolbar p {\n  font-size: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0YWwtcmV0dXJuLW5leHQtc3RlcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGtCQUFBO0VBRUEsc0JBQUE7QUFHRjs7QUFGRTtFQUNFLGVBQUE7QUFJSiIsImZpbGUiOiJkaWdpdGFsLXJldHVybi1uZXh0LXN0ZXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ubGlzdC1xdWVzdGlvbiB7XHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxufVxyXG4uYmFjay1idG4ge1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi5uZXh0LWJ0biB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxucCB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cclxuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ 67024:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/digital-return-next-steps/digital-return-next-steps.page.html ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.header}}</p>\r\n  </div>\r\n  <p>{{results.textD}}</p>\r\n  <p>{{results.link_www}}</p>\r\n  <ion-row><p>{{results.tyABC}}</p></ion-row>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col style=\"text-align: start\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"  goToFinish()\"> {{results.finish}} </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_digital-return-next-steps_digital-return-next-steps_module_ts.js.map