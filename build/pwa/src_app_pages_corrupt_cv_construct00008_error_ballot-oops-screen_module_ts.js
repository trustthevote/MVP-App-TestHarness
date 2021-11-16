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
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_oops_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotOopsScreenPageRoutingModule,
        ],
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1vb3BzLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU9GOztBQUxBO0VBQ0UsWUFBQTtBQVFGOztBQU5BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBU0Y7O0FBTkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBV0Y7O0FBUkU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVdGOztBQVJBO0VBQ0UsbUJBQUE7QUFXRiIsImZpbGUiOiJiYWxsb3Qtb29wcy1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cbi5saXN0LXF1ZXN0aW9uIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mdHItdHAtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm5leHQtYnRuIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuYiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi50ZXh0LXAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjMDAwMDAwNjY7XG59XG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxucCB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwdnc7XG59XG5pb24tdG9vbGJhciB7XG4gIGhlaWdodDogODVweDtcbn1cbi5pYy1jb2wge1xuICBwYWRkaW5nOiAxMHB4IDAgMXB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbi5ib3R0b20tZGl2LXRleHQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDcwcHg7XG59XG4uY2VuLWRpdi10ZXh0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIGZvbnQtc2l6ZTogNzBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbmkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwN2E7XG59XG5pb24tdG9vbGJhciB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzAwMDAwMDgwO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIH1cbn1cbmlvbi1yb3cge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwNmU7XG4gIG1hcmdpbi1ib3R0b206IDV2dztcbn1cblxuLnVwci10ZXh0IHtcbiAgcGFkZGluZy1ib3R0b206IDEzJTtcbn1cbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"upr-text\">\n    <p>{{results.upr_para}}</p>\n    <a href=\"{{results.link}}\">{{results.link}}</a>\n  </div>\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.back}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\"> </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_corrupt_cv_construct00008_error_ballot-oops-screen_module_ts.js.map