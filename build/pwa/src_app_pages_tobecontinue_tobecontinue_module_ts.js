(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_tobecontinue_tobecontinue_module_ts"],{

/***/ 8929:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobecontinuePageRoutingModule": () => (/* binding */ TobecontinuePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tobecontinue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tobecontinue.page */ 3751);




const routes = [
    {
        path: '',
        component: _tobecontinue_page__WEBPACK_IMPORTED_MODULE_0__.TobecontinuePage
    }
];
let TobecontinuePageRoutingModule = class TobecontinuePageRoutingModule {
};
TobecontinuePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TobecontinuePageRoutingModule);



/***/ }),

/***/ 7121:
/*!***********************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobecontinuePageModule": () => (/* binding */ TobecontinuePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tobecontinue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tobecontinue-routing.module */ 8929);
/* harmony import */ var _tobecontinue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tobecontinue.page */ 3751);







let TobecontinuePageModule = class TobecontinuePageModule {
};
TobecontinuePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tobecontinue_routing_module__WEBPACK_IMPORTED_MODULE_0__.TobecontinuePageRoutingModule
        ],
        declarations: [_tobecontinue_page__WEBPACK_IMPORTED_MODULE_1__.TobecontinuePage]
    })
], TobecontinuePageModule);



/***/ }),

/***/ 3751:
/*!*********************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobecontinuePage": () => (/* binding */ TobecontinuePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tobecontinue_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tobecontinue.page.html */ 8441);
/* harmony import */ var _tobecontinue_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tobecontinue.page.scss */ 8339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let TobecontinuePage = class TobecontinuePage {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
    }
    reloadCurrentPage() {
        this.route.navigate(['/intro']);
    }
    backbtn() {
        this.route.navigate(['/print-return']);
    }
};
TobecontinuePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TobecontinuePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-tobecontinue',
        template: _raw_loader_tobecontinue_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tobecontinue_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TobecontinuePage);



/***/ }),

/***/ 8339:
/*!***********************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 20px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\np {\n  font-size: 22px;\n  color: #1e2023;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYmVjb250aW51ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVNO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBRUUsZ0JBQUE7QUFBSjs7QUFFRTtFQUNFLGdCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBRUo7O0FBQUU7RUFDRSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBSUo7O0FBRkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUFNSjs7QUFKQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSiIsImZpbGUiOiJ0b2JlY29udGludWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbntcclxuICAgICAgcHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuZnRyLXRwLXRleHR7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuICAuYmFjay1idG57XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuLm5leHQtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5ie1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5pb24tbGFiZWx7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMWUyMDIzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ 8441:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tobecontinue/tobecontinue.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>To Be Continued..</p>\r\n  </div>\r\n<p>Thank you for testing the app!</p>\r\n<p>You have reached the end of the app's current development. Reset to begin a new test,</p>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          Back\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n          <!-- <ion-icon  name=\"pencil-outline\"></ion-icon>  -->\r\n          </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"reloadCurrentPage()\">\r\n          Reset\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          <!-- <ion-icon slot=\"end\" name=\"checkmark-outline\"></ion-icon> -->\r\n           </ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tobecontinue_tobecontinue_module_ts.js.map