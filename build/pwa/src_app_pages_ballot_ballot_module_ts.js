(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_ballot_ballot_module_ts"],{

/***/ 433:
/*!*******************************************************!*\
  !*** ./src/app/pages/ballot/ballot-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPageRoutingModule": () => (/* binding */ BallotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot.page */ 6221);





const routes = [
    {
        path: '',
        component: _ballot_page__WEBPACK_IMPORTED_MODULE_0__.BallotPage
    }
];
let BallotPageRoutingModule = class BallotPageRoutingModule {
};
BallotPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotPageRoutingModule);



/***/ }),

/***/ 5366:
/*!***********************************************!*\
  !*** ./src/app/pages/ballot/ballot.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPageModule": () => (/* binding */ BallotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-routing.module */ 433);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page */ 6221);







let BallotPageModule = class BallotPageModule {
};
BallotPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotPageRoutingModule,
        ],
        declarations: [_ballot_page__WEBPACK_IMPORTED_MODULE_1__.BallotPage]
    })
], BallotPageModule);



/***/ }),

/***/ 6221:
/*!*********************************************!*\
  !*** ./src/app/pages/ballot/ballot.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPage": () => (/* binding */ BallotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ballot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot.page.html */ 245);
/* harmony import */ var _ballot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page.scss */ 8933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);



/* eslint-disable max-len */




let BallotPage = class BallotPage {
    constructor(formBuilder, toastController, router) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.router = router;
        this.isSubmitted = false;
        this.signupForm = this.formBuilder.group({
            firstname: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$') // allow only letters, spaces, hyphens and PrintableASCII chars
                ]
            ],
            lastname: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$') // allow only letters, spaces, hyphens and PrintableASCII chars
                ]
            ],
        });
    }
    get errorControl() {
        return this.signupForm.controls;
    }
    presentToast(mess) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                cssClass: 'toast',
                message: mess,
                position: 'top',
                duration: 2000
            });
            toast.present();
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.signupForm.valid) {
            this.presentToast('Please provide all the required values!');
            return false;
        }
        else {
            const naviExtras = {
                state: { user: this.signupForm.value }
            };
            this.router.navigate(['ballot-form'], naviExtras);
            this.signupForm.reset();
        }
    }
};
BallotPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
BallotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ballot',
        template: _raw_loader_ballot_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotPage);



/***/ }),

/***/ 8933:
/*!***********************************************!*\
  !*** ./src/app/pages/ballot/ballot.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mt30 {\n  margin-top: 30px;\n}\n\n.mt60 {\n  margin-top: 60px;\n}\n\n.mt100 {\n  margin-top: 100px;\n}\n\np {\n  font-size: 20px;\n}\n\nion-card-title, p {\n  color: #464648;\n}\n\nion-input {\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  --padding-start: 10px !important;\n  margin-top: 8px;\n}\n\n.main-btn-style {\n  --border-radius: 0;\n  height: 50px;\n  width: 180px;\n  font-size: 20px;\n}\n\n.err-messages {\n  margin-left: 20px;\n}\n\n.err-messages .error {\n  color: var(--ion-color-danger);\n  padding: 0;\n  font-size: 13px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLDhCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoiYmFsbG90LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdDMwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4ubXQ2MCB7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxufVxyXG5cclxuLm10MTAwIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pb24tY2FyZC10aXRsZSwgcCB7XHJcbiAgY29sb3I6ICM0NjQ2NDg7XHJcbn1cclxuXHJcbmlvbi1pbnB1dCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYWluLWJ0bi1zdHlsZSB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZXJyLW1lc3NhZ2VzIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuXHJcbiAgLmVycm9yIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 245:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot/ballot.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n  <div class=\"ion-text-center mt60\">\r\n    <ion-card-title>Welcome to Jetsons Ballot</ion-card-title>\r\n  </div>\r\n  <div class=\"ion-text-center\">\r\n    <p>To get started, please provide your name.</p>\r\n  </div>\r\n\r\n  <ion-grid class=\"ion-no-padding mt60\">\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">First Name</ion-label>\r\n            <ion-input formControlName=\"firstname\" type=\"text\" placeholder=\"First Name\" required clearInput></ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <div class=\"err-messages\">\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.required\">\r\n              <p class=\"error\">\r\n                First Name is required.\r\n              </p>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.minlength\">\r\n              <p class=\"error\">\r\n                Name should be a minimum of 2 characters long.\r\n              </p>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.maxlength\">\r\n              <p class=\"error\">\r\n                Name should be a minimum of 50 characters long.\r\n              </p>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.pattern\">\r\n              <p class=\"error\">\r\n                Please provide: Name that consists of letters, space and hyphen.\r\n              </p>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">Last Name</ion-label>\r\n            <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"Last Name\" required clearInput></ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <div class=\"err-messages\">\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.required\">\r\n              <p class=\"error\">\r\n                Last Name is required.\r\n              </p>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.minlength\">\r\n              <p class=\"error\">\r\n                Name should be a minimum of 2 characters long.\r\n              </p>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.maxlength\">\r\n              <p class=\"error\">\r\n                Name should be a minimum of 50 characters long.\r\n              </p>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.pattern\">\r\n              <p class=\"error\">\r\n                Please provide: Name that consists of letters, space and hyphen.\r\n              </p>\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt100 ion-text-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-button type=\"submit\" class=\"main-btn-style\" color=\"primary\">Next</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n\r\n  <div class=\"mt30 ion-text-center\">\r\n    <ion-button href=\"https://trustthevote.org/about_abc/\" color=\"primary\" fill=\"clear\">About This App</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot_ballot_module_ts.js.map