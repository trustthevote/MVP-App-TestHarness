(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-form_ballot-form_module_ts"],{

/***/ 73238:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ballot-form/ballot-form-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFormPageRoutingModule": () => (/* binding */ BallotFormPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-form.page */ 77856);




const routes = [
    {
        path: '',
        component: _ballot_form_page__WEBPACK_IMPORTED_MODULE_0__.BallotFormPage,
    },
];
let BallotFormPageRoutingModule = class BallotFormPageRoutingModule {
};
BallotFormPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotFormPageRoutingModule);



/***/ }),

/***/ 5826:
/*!*********************************************************!*\
  !*** ./src/app/pages/ballot-form/ballot-form.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFormPageModule": () => (/* binding */ BallotFormPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_form_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-form-routing.module */ 73238);
/* harmony import */ var _ballot_form_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-form.page */ 77856);







let BallotFormPageModule = class BallotFormPageModule {
};
BallotFormPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_form_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotFormPageRoutingModule,
        ],
        declarations: [_ballot_form_page__WEBPACK_IMPORTED_MODULE_1__.BallotFormPage],
    })
], BallotFormPageModule);



/***/ }),

/***/ 77856:
/*!*******************************************************!*\
  !*** ./src/app/pages/ballot-form/ballot-form.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotFormPage": () => (/* binding */ BallotFormPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_form_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-form.page.html */ 71624);
/* harmony import */ var _ballot_form_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-form.page.scss */ 13414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let BallotFormPage = class BallotFormPage {
    constructor(router) {
        this.router = router;
        this.results = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.paramData = this.router.getCurrentNavigation().extras.state.user;
        }
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].ballot_form;
        });
        if (this.userObject.lastname !== undefined) {
            const lastName = this.userObject.lastname.charAt(0).toUpperCase() +
                this.userObject.lastname.slice(1);
            if (lastName.includes('A', 0)) {
                this.precinctNum = 1;
            }
            else if (lastName.includes('B', 0)) {
                this.precinctNum = 2;
            }
            else if (lastName.includes('C', 0)) {
                this.precinctNum = 3;
            }
            else {
                this.precinctNum = 4;
            }
        }
    }
    goToComplete() {
        const naviExtras = {
            state: {
                user: this.paramData,
            },
        };
        this.router.navigate(['ballot-complete'], naviExtras);
    }
    goBack() {
        this.router.navigate(['ballot']);
    }
};
BallotFormPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BallotFormPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-ballot-form',
        template: _raw_loader_ballot_form_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_form_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotFormPage);



/***/ }),

/***/ 13414:
/*!*********************************************************!*\
  !*** ./src/app/pages/ballot-form/ballot-form.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mt30 {\n  margin-top: 30px;\n}\n\n.mt60 {\n  margin-top: 60px;\n}\n\n.mt100 {\n  margin-top: 100px;\n}\n\n.sub-title {\n  font-size: 20px;\n}\n\nion-card-title,\np {\n  color: #464648;\n}\n\n.main-btn-style {\n  --border-radius: 0;\n  height: 50px;\n  width: 180px;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLGVBQUE7QUFHRjs7QUFEQTs7RUFFRSxjQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUtGIiwiZmlsZSI6ImJhbGxvdC1mb3JtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdDMwIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5tdDYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5tdDEwMCB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWNhcmQtdGl0bGUsXG5wIHtcbiAgY29sb3I6ICM0NjQ2NDg7XG59XG4ubWFpbi1idG4tc3R5bGUge1xuICAtLWJvcmRlci1yYWRpdXM6IDA7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ 71624:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-form/ballot-form.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <div class=\"ion-text-center mt60\">\n    <ion-card-title\n      >{{results.welcome}} {{ paramData?.firstname }}!</ion-card-title\n    >\n  </div>\n  <div class=\"ion-text-center sub-title\">\n    <p>{{ precinct }}</p>\n  </div>\n  <div class=\"ion-text-center mt60\">\n    <p>\n      {{results.precinct_no}}{{precinctNum}}<br />{{results.please}}<b\n        >{{results.start}}</b\n      >\n      {{results.your_ballot_marking}}\n    </p>\n  </div>\n  <ion-grid class=\"ion-no-padding mt60\">\n    <ion-row class=\"mt100 ion-text-center\">\n      <ion-col size=\"12\">\n        <ion-button\n          (click)=\"goToComplete()\"\n          class=\"main-btn-style\"\n          color=\"primary\"\n          >{{results.start}}</ion-button\n        >\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"mt30 ion-text-center\">\n    <ion-button\n      (click)=\"goBack()\"\n      class=\"main-btn-style\"\n      color=\"primary\"\n      fill=\"clear\"\n    >\n      {{results.cancel}}</ion-button\n    >\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-form_ballot-form_module_ts.js.map