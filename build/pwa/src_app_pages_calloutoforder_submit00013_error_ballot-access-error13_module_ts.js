(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_calloutoforder_submit00013_error_ballot-access-error13_module_ts"],{

/***/ 37307:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder_submit00013_error/ballot-access-error13-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotAccessError13PageRoutingModule": () => (/* binding */ BallotAccessError13PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_access_error13_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-access-error13.page */ 1955);




const routes = [
    {
        path: '',
        component: _ballot_access_error13_page__WEBPACK_IMPORTED_MODULE_0__.BallotAccessError13Page,
    },
];
let BallotAccessError13PageRoutingModule = class BallotAccessError13PageRoutingModule {
};
BallotAccessError13PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotAccessError13PageRoutingModule);



/***/ }),

/***/ 65481:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder_submit00013_error/ballot-access-error13.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotAccessError13PageModule": () => (/* binding */ BallotAccessError13PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_access_error13_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-access-error13-routing.module */ 37307);
/* harmony import */ var _ballot_access_error13_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-access-error13.page */ 1955);







let BallotAccessError13PageModule = class BallotAccessError13PageModule {
};
BallotAccessError13PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_access_error13_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotAccessError13PageRoutingModule,
        ],
        declarations: [_ballot_access_error13_page__WEBPACK_IMPORTED_MODULE_1__.BallotAccessError13Page],
    })
], BallotAccessError13PageModule);



/***/ }),

/***/ 1955:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder_submit00013_error/ballot-access-error13.page.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotAccessError13Page": () => (/* binding */ BallotAccessError13Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_access_error13_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-access-error13.page.html */ 38833);
/* harmony import */ var _ballot_access_error13_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-access-error13.page.scss */ 62478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let BallotAccessError13Page = class BallotAccessError13Page {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].calloutoforder_submit00013_error;
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
BallotAccessError13Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotAccessError13Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-access-error13',
        template: _raw_loader_ballot_access_error13_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_access_error13_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotAccessError13Page);



/***/ }),

/***/ 62478:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/calloutoforder_submit00013_error/ballot-access-error13.page.scss ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\n.text-p {\n  font-size: 18px;\n  color: #00000066;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 23px;\n  padding-right: 12px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 10vw;\n}\n\nion-toolbar {\n  height: 85px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.bottom-div-text {\n  text-align: start;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n\nion-toolbar p {\n  font-size: 15px;\n  color: #00000080;\n  font-weight: 700;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.upr-text {\n  padding-bottom: 13%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1hY2Nlc3MtZXJyb3IxMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQU1GOztBQUpBO0VBQ0UsWUFBQTtBQU9GOztBQUxBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBUUY7O0FBTEE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVFGOztBQU5BO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFTRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBVUY7O0FBUEU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVBBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVVGOztBQVBBO0VBQ0UsbUJBQUE7QUFVRiIsImZpbGUiOiJiYWxsb3QtYWNjZXNzLWVycm9yMTMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cbi5saXN0LXF1ZXN0aW9uIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5mdHItdHAtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cbi5iYWNrLWJ0biB7XG59XG4ubmV4dC1idG4ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5iIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuLnRleHQtcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICMwMDAwMDA2Njtcbn1cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5wIHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTB2dztcbn1cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiA4NXB4O1xufVxuLmljLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggMCAxcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmJvdHRvbS1kaXYtdGV4dCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cbi5jZW4tZGl2LXRleHQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuaSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbn1cbmlvbi10b29sYmFyIHtcbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjMDAwMDAwODA7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufVxuaW9uLXJvdyB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICMwMDAwMDA2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xufVxuXG4udXByLXRleHQge1xuICBwYWRkaW5nLWJvdHRvbTogMTMlO1xufVxuIl19 */");

/***/ }),

/***/ 38833:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/calloutoforder_submit00013_error/ballot-access-error13.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"upr-text\">\n    <p>{{results.upr_para}}</p>\n    <p>{{results.mid_para}}</p>\n    <a href=\"{{results.link}}\">{{results.link}}</a>\n  </div>\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.back}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\"> </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_calloutoforder_submit00013_error_ballot-access-error13_module_ts.js.map