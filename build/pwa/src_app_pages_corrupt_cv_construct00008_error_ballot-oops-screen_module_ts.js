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
        component: _ballot_oops_screen_page__WEBPACK_IMPORTED_MODULE_0__.BallotOopsScreenPage
    }
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
            _ballot_oops_screen_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotOopsScreenPageRoutingModule
        ],
        declarations: [_ballot_oops_screen_page__WEBPACK_IMPORTED_MODULE_1__.BallotOopsScreenPage]
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
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot_oops_screen_page'];
        });
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
    backbtn() {
        this.route.navigate(['/access-code', {
                t: new Date().getTime()
            }]);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1vb3BzLXNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFBRTtFQUNFLGVBQUE7QUFHSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFERTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQ0UsWUFBQTtBQU9KOztBQUhFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBTUo7O0FBSEU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBUUo7O0FBSkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU9OOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU9KOztBQUpFO0VBQ0UsbUJBQUE7QUFPSiIsImZpbGUiOiJiYWxsb3Qtb29wcy1zY3JlZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9uIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmZ0ci10cC10ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gXHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgXHJcbiAgfVxyXG4gIGIge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC50ZXh0LXAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA2NjtcclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwdnc7XHJcbiAgfVxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIGhlaWdodDogODVweDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICAuaWMtY29sIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAxcHg7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3R0b20tZGl2LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgfVxyXG4gIC5jZW4tZGl2LXRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDdhO1xyXG4gIH1cclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDgwO1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tcm93IHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXZ3O1xyXG4gIH1cclxuICBcclxuICAudXByLXRleHQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEzJTtcclxuICB9XHJcbiAgIl19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"upr-text\">\r\n    <p>{{results.upr_para}}</p>\r\n    <a href=\"{{results.link}}\">{{results.link}}</a>\r\n  </div>\r\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\r\n    {{results.back}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n    <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.try_again}}\r\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\r\n          <!-- <ion-icon  name=\"chevron-back-outline\"></ion-icon> -->\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n          <!-- <ion-icon slot=\"end\" name=\"settings-outline\"></ion-icon> -->\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_corrupt_cv_construct00008_error_ballot-oops-screen_module_ts.js.map