(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_corrupt_cv_construct00008_error_ballot-oops-screen_module_ts"],{

/***/ 69496:
/*!********************************************************************************************!*\
  !*** ./src/app/pages/corrupt_cv_construct00008_error/ballot-oops-screen-routing.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotOopsScreenPageRoutingModule": () => (/* binding */ BallotOopsScreenPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_oops_screen_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-oops-screen.page */ 86828);




const routes = [
    {
        path: '',
        component: _ballot_oops_screen_page__WEBPACK_IMPORTED_MODULE_0__.BallotOopsScreenPage,
    },
];
let BallotOopsScreenPageRoutingModule = class BallotOopsScreenPageRoutingModule {
};
BallotOopsScreenPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotOopsScreenPageRoutingModule);



/***/ }),

/***/ 7048:
/*!************************************************************************************!*\
  !*** ./src/app/pages/corrupt_cv_construct00008_error/ballot-oops-screen.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotOopsScreenPageModule": () => (/* binding */ BallotOopsScreenPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_oops_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-oops-screen-routing.module */ 69496);
/* harmony import */ var _ballot_oops_screen_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-oops-screen.page */ 86828);







let BallotOopsScreenPageModule = class BallotOopsScreenPageModule {
};
BallotOopsScreenPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _ballot_oops_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotOopsScreenPageRoutingModule],
        declarations: [_ballot_oops_screen_page__WEBPACK_IMPORTED_MODULE_1__.BallotOopsScreenPage],
    })
], BallotOopsScreenPageModule);



/***/ }),

/***/ 86828:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/corrupt_cv_construct00008_error/ballot-oops-screen.page.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotOopsScreenPage": () => (/* binding */ BallotOopsScreenPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_oops_screen_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-oops-screen.page.html */ 73519);
/* harmony import */ var _ballot_oops_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-oops-screen.page.scss */ 64663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let BallotOopsScreenPage = class BallotOopsScreenPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].corrupt_cv_construct00008_error;
        });
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
    backbtn() {
        this.route.navigate([
            '/access-code',
            {
                t: new Date().getTime(),
            },
        ]);
    }
};
BallotOopsScreenPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotOopsScreenPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-oops-screen',
        template: _raw_loader_ballot_oops_screen_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_oops_screen_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotOopsScreenPage);



/***/ }),

/***/ 64663:
/*!************************************************************************************!*\
  !*** ./src/app/pages/corrupt_cv_construct00008_error/ballot-oops-screen.page.scss ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1vb3BzLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBV0Y7O0FBUkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVJBO0VBQ0UsbUJBQUE7QUFXRiIsImZpbGUiOiJiYWxsb3Qtb29wcy1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5saXN0LXF1ZXN0aW9uIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4uZnRyLXRwLXRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubmV4dC1idG4ge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi50ZXh0LXAge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzAwMDAwMDY2O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwdnc7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIGhlaWdodDogODVweDtcclxufVxyXG4uaWMtY29sIHtcclxuICBwYWRkaW5nOiAxMHB4IDAgMXB4O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG5cclxuLmJvdHRvbS1kaXYtdGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogNzBweDtcclxufVxyXG4uY2VuLWRpdi10ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG5pIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogIzAwMDAwMDdhO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODA7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxufVxyXG5pb24tcm93IHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogIzAwMDAwMDZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDV2dztcclxufVxyXG5cclxuLnVwci10ZXh0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTMlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 73519:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/corrupt_cv_construct00008_error/ballot-oops-screen.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"upr-text\">\r\n    <p>{{results.upr_para}}</p>\r\n    <a href=\"{{results.link}}\">{{results.link}}</a>\r\n  </div>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.back}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\"> </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_corrupt_cv_construct00008_error_ballot-oops-screen_module_ts.js.map