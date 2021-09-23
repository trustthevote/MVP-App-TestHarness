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
        component: _ballot_resealed_page__WEBPACK_IMPORTED_MODULE_0__.BallotResealedPage
    }
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
            _ballot_resealed_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotResealedPageRoutingModule
        ],
        declarations: [_ballot_resealed_page__WEBPACK_IMPORTED_MODULE_1__.BallotResealedPage]
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
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot_resealed_page'];
        });
    }
    nextbtn() {
        this.route.navigate(['/ballot-fingerprint', {
                code: this.getCode
            }]);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  padding-bottom: 0px;\n}\n\n.Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding-right: 20px;\n  padding-left: 0px;\n}\n\np {\n  font-size: 23px;\n  font-weight: 600;\n  color: #000000;\n  margin-bottom: 0vw;\n}\n\nion-row {\n  font-size: 23px;\n  font-weight: 100;\n  padding-top: 20px;\n  color: #0000006e;\n  margin-bottom: 5vw;\n}\n\n.div-two {\n  padding-top: 25px;\n  text-align: center;\n}\n\n.div-two .div-upr-text p {\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.div-two .div-upr-text ion-icon {\n  font-size: 65px;\n}\n\n.cen-div-text {\n  text-align: start;\n  font-size: 70px;\n  padding-right: 20px;\n}\n\n.div-text-mid {\n  text-align: center;\n  padding-bottom: 20%;\n  font-size: 20px;\n}\n\n.div-text-mid ion-icon {\n  font-size: 11vh;\n}\n\nion-toolbar {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1yZXNlYWxlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFLUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQUhaOztBQUtRO0VBQ0ksZUFBQTtBQUhaOztBQVFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFPQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSko7O0FBS0c7RUFDQyxlQUFBO0FBSEo7O0FBT0E7RUFDSSxhQUFBO0FBSkoiLCJmaWxlIjoiYmFsbG90LXJlc2VhbGVkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcblxyXG4ubmV4dC1idG57XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBcclxufVxyXG5we1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIFxyXG59XHJcbi5SZXF1aXJlZC1kaXZ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMjNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2dztcclxuICB9XHJcbmlvbi1yb3cge1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2dztcclxuICB9XHJcbiAgXHJcbi5kaXYtdHdve1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmRpdi11cHItdGV4dHtcclxuICAgICAgICAvLyBib3JkZXI6IDJweCBzb2xpZCAjMDAwO1xyXG4gICAgICAgIC8vIG1hcmdpbjogMCAzNSUgMCAzNSU7XHJcbiAgICAgICBcclxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiA2NXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNlbi1kaXYtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgfVxyXG4uZGl2LXRleHQtbWlke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDExdmg7XHJcbiAgIH1cclxuXHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.test_results}}</p>\n  </div>\n  <div class=\"cen-div-text\">\n  \n    <p>{{results.ydn}}</p>\n  \n  \n  </div>\n  <div class=\"Required-div\" style=\"text-align: center\">\n    <!-- <p style=\"text-align: start;\">{{results.dbf}}</p> -->\n   \n  </div>\n</ion-content>\n<ion-footer >\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <!-- <ion-button color=\"dark\" (click)=\"passbtn()\">\n          {{results.back}}\n          <ion-icon slot=\"start\" name=\"refresh-outline\"></ion-icon>\n        \n        </ion-button> -->\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\n          {{results.next}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-resealed_ballot-resealed_module_ts.js.map