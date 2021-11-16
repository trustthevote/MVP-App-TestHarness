(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_tobecontinue_tobecontinue_module_ts"],{

/***/ 78929:
/*!*******************************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobecontinuePageRoutingModule": () => (/* binding */ TobecontinuePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tobecontinue_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tobecontinue.page */ 23751);




const routes = [
    {
        path: '',
        component: _tobecontinue_page__WEBPACK_IMPORTED_MODULE_0__.TobecontinuePage,
    },
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

/***/ 27121:
/*!***********************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobecontinuePageModule": () => (/* binding */ TobecontinuePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tobecontinue_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tobecontinue-routing.module */ 78929);
/* harmony import */ var _tobecontinue_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tobecontinue.page */ 23751);







let TobecontinuePageModule = class TobecontinuePageModule {
};
TobecontinuePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tobecontinue_routing_module__WEBPACK_IMPORTED_MODULE_0__.TobecontinuePageRoutingModule,
        ],
        declarations: [_tobecontinue_page__WEBPACK_IMPORTED_MODULE_1__.TobecontinuePage],
    })
], TobecontinuePageModule);



/***/ }),

/***/ 23751:
/*!*********************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TobecontinuePage": () => (/* binding */ TobecontinuePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tobecontinue_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tobecontinue.page.html */ 58441);
/* harmony import */ var _tobecontinue_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tobecontinue.page.scss */ 38339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let TobecontinuePage = class TobecontinuePage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].tobe_continue_page;
        });
    }
    reloadCurrentPage() {
        localStorage.clear();
        this.route.navigate(['/intro']);
    }
    backbtn() {
        this.route.navigate(['/ballot-complete']);
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

/***/ 38339:
/*!***********************************************************!*\
  !*** ./src/app/pages/tobecontinue/tobecontinue.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\np {\n  font-size: 22px;\n  color: #1e2023;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvYmVjb250aW51ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFNRiIsImZpbGUiOiJ0b2JlY29udGludWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGlzdC1xdWVzdGlvbiB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mdHItdHAtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm5leHQtYnRuIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuYiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICMxZTIwMjM7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4iXX0= */");

/***/ }),

/***/ 58441:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tobecontinue/tobecontinue.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.tbc}}</p>\n  </div>\n  <p>{{results.ty_ta}}</p>\n  <p>{{results.detail}}</p>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\"> </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"reloadCurrentPage()\">\n          {{results.reset}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tobecontinue_tobecontinue_module_ts.js.map