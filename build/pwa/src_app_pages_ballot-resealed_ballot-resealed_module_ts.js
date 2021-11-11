(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-resealed_ballot-resealed_module_ts"],{

/***/ 32618:
/*!*************************************************************************!*\
  !*** ./src/app/pages/ballot-resealed/ballot-resealed-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotResealedPageRoutingModule": () => (/* binding */ BallotResealedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_resealed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-resealed.page */ 30265);




const routes = [
    {
        path: '',
        component: _ballot_resealed_page__WEBPACK_IMPORTED_MODULE_0__.BallotResealedPage,
    },
];
let BallotResealedPageRoutingModule = class BallotResealedPageRoutingModule {
};
BallotResealedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotResealedPageRoutingModule);



/***/ }),

/***/ 41857:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ballot-resealed/ballot-resealed.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotResealedPageModule": () => (/* binding */ BallotResealedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_resealed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-resealed-routing.module */ 32618);
/* harmony import */ var _ballot_resealed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-resealed.page */ 30265);







let BallotResealedPageModule = class BallotResealedPageModule {
};
BallotResealedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_resealed_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotResealedPageRoutingModule,
        ],
        declarations: [_ballot_resealed_page__WEBPACK_IMPORTED_MODULE_1__.BallotResealedPage],
    })
], BallotResealedPageModule);



/***/ }),

/***/ 30265:
/*!***************************************************************!*\
  !*** ./src/app/pages/ballot-resealed/ballot-resealed.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotResealedPage": () => (/* binding */ BallotResealedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_resealed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-resealed.page.html */ 4905);
/* harmony import */ var _ballot_resealed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-resealed.page.scss */ 82873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);






let BallotResealedPage = class BallotResealedPage {
    constructor(route, avclientService, activatedRoute) {
        this.route = route;
        this.avclientService = avclientService;
        this.activatedRoute = activatedRoute;
        this.results = [];
    }
    ngOnInit() {
        this.getCode = this.activatedRoute.snapshot.paramMap.get('code');
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].ballot_resealed_page;
        });
    }
    nextbtn() {
        this.route.navigate([
            '/ballot-fingerprint',
            {
                code: this.getCode,
            },
        ]);
    }
};
BallotResealedPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_2__.AvclientService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
BallotResealedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ballot-resealed',
        template: _raw_loader_ballot_resealed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_resealed_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotResealedPage);



/***/ }),

/***/ 82873:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ballot-resealed/ballot-resealed.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  padding-bottom: 0px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-right: 20px;\n  padding-left: 0px;\n}\n\np {\n  font-size: 23px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  padding-top: 20px;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.div-two {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.div-two .div-upr-text p {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-two .div-upr-text ion-icon {\n  font-size: 65px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\n.div-text-mid {\n  text-align: center;\n  padding-bottom: 20%;\n  font-size: 20px;\n}\n\n.div-text-mid ion-icon {\n  font-size: 11vh;\n}\n\nion-toolbar {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1yZXNlYWxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFEQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFJRjs7QUFESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUdOOztBQURJO0VBQ0UsZUFBQTtBQUdOOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBREU7RUFDRSxlQUFBO0FBR0o7O0FBQUE7RUFDRSxhQUFBO0FBR0YiLCJmaWxlIjoiYmFsbG90LXJlc2VhbGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGlzdC1xdWVzdGlvbiB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cblxuLm5leHQtYnRuIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxucCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4uUmVxdWlyZWQtZGl2IHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbnAge1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAwdnc7XG59XG5pb24tcm93IHtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xufVxuXG4uZGl2LXR3byB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmRpdi11cHItdGV4dCB7XG4gICAgcCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDY1cHg7XG4gICAgfVxuICB9XG59XG5cbi5jZW4tZGl2LXRleHQge1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmRpdi10ZXh0LW1pZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxMXZoO1xuICB9XG59XG5pb24tdG9vbGJhciB7XG4gIGhlaWdodDogMTAwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 4905:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-resealed/ballot-resealed.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.test_results}}</p>\n  </div>\n  <div class=\"cen-div-text\">\n    <p>{{results.ydn}}</p>\n  </div>\n  <div class=\"Required-div\" style=\"text-align: center\"></div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\"> </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\n          {{results.next}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-resealed_ballot-resealed_module_ts.js.map