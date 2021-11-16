(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot_ballot_module_ts"],{

/***/ 90433:
/*!*******************************************************!*\
  !*** ./src/app/pages/ballot/ballot-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPageRoutingModule": () => (/* binding */ BallotPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot.page */ 66221);





const routes = [
    {
        path: '',
        component: _ballot_page__WEBPACK_IMPORTED_MODULE_0__.BallotPage,
    },
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

/***/ 15366:
/*!***********************************************!*\
  !*** ./src/app/pages/ballot/ballot.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPageModule": () => (/* binding */ BallotPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ballot_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-routing.module */ 90433);
/* harmony import */ var _ballot_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page */ 66221);







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
        declarations: [_ballot_page__WEBPACK_IMPORTED_MODULE_1__.BallotPage],
    })
], BallotPageModule);



/***/ }),

/***/ 66221:
/*!*********************************************!*\
  !*** ./src/app/pages/ballot/ballot.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotPage": () => (/* binding */ BallotPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_ballot_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot.page.html */ 70245);
/* harmony import */ var _ballot_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot.page.scss */ 78933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);







let BallotPage = class BallotPage {
    constructor(formBuilder, toastController, router, alertctrl) {
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.router = router;
        this.alertctrl = alertctrl;
        this.isSubmitted = false;
        this.results = [];
        this.signupForm = this.formBuilder.group({
            firstname: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$'), // allow only letters, spaces, hyphens and PrintableASCII chars
                ],
            ],
            lastname: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[a-zA-Z-( )][\x20-\x7F]+$'), // allow only letters, spaces, hyphens and PrintableASCII chars
                ],
            ],
        });
    }
    ngOnInit() {
        localStorage.clear();
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].ballot;
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
                duration: 2000,
            });
            toast.present();
        });
    }
    presentAlertEmpty(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                message: msg,
                buttons: [
                    {
                        text: this.results.try_again,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { },
                    },
                ],
            });
            yield alert.present();
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.signupForm.valid) {
            this.presentAlertEmpty(this.results.alert_msg);
            return false;
        }
        else {
            const naviExtras = {
                state: {
                    user: this.signupForm.value,
                },
            };
            localStorage.setItem('userNameInfo', JSON.stringify(this.signupForm.value));
            this.router.navigate(['ballot-form', { t: new Date().getTime() }], naviExtras);
            this.signupForm.reset();
        }
    }
};
BallotPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
BallotPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-ballot',
        template: _raw_loader_ballot_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotPage);



/***/ }),

/***/ 78933:
/*!***********************************************!*\
  !*** ./src/app/pages/ballot/ballot.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mt30 {\n  margin-top: 30px;\n}\n\n.mt60 {\n  margin-top: 60px;\n}\n\n.mt100 {\n  margin-top: 100px;\n}\n\np {\n  font-size: 20px;\n}\n\nion-card-title,\np {\n  color: #464648;\n}\n\nion-input {\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  --padding-start: 10px !important;\n  margin-top: 8px;\n}\n\n.main-btn-style {\n  --border-radius: 0;\n  height: 50px;\n  width: 180px;\n  font-size: 20px;\n}\n\n.err-messages {\n  margin-left: 20px;\n}\n\n.err-messages .error {\n  color: var(--ion-color-danger);\n  padding: 0;\n  font-size: 13px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImJhbGxvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQzMCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tdDYwIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLm10MTAwIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbmlvbi1jYXJkLXRpdGxlLFxucCB7XG4gIGNvbG9yOiAjNDY0NjQ4O1xufVxuXG5pb24taW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLm1haW4tYnRuLXN0eWxlIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZXJyLW1lc3NhZ2VzIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgLmVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLXRvcDogNHB4O1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 70245:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot/ballot.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <div class=\"ion-text-center mt60\">\n    <ion-card-title>{{results.welcome_to_jetsons_ballot}}</ion-card-title>\n  </div>\n  <div class=\"ion-text-center\">\n    <p>{{results.to_get_started}}</p>\n  </div>\n  <ion-grid class=\"ion-no-padding mt60\">\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">{{results.first_name}}</ion-label>\n            <ion-input\n              formControlName=\"firstname\"\n              type=\"text\"\n              placeholder=\"{{results.first_name}}\"\n              required\n              clearInput\n            >\n            </ion-input>\n          </ion-item>\n\n          <div class=\"err-messages\">\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.firstname.errors?.required\"\n            >\n            </ng-container>\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.firstname.errors?.minlength\"\n            >\n            </ng-container>\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.firstname.errors?.maxlength\"\n            >\n            </ng-container>\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.firstname.errors?.pattern\"\n            >\n            </ng-container>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-item lines=\"none\">\n            <ion-label position=\"stacked\">{{results.last_name}}</ion-label>\n            <ion-input\n              formControlName=\"lastname\"\n              type=\"text\"\n              placeholder=\"{{results.last_name}}\"\n              required\n              clearInput\n            >\n            </ion-input>\n          </ion-item>\n\n          <div class=\"err-messages\">\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.lastname.errors?.required\"\n            >\n            </ng-container>\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.lastname.errors?.minlength\"\n            >\n            </ng-container>\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.lastname.errors?.maxlength\"\n            >\n            </ng-container>\n            <ng-container\n              *ngIf=\"isSubmitted && errorControl.lastname.errors?.pattern\"\n            >\n            </ng-container>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"mt100 ion-text-center\">\n        <ion-col size=\"12\">\n          <ion-button type=\"submit\" class=\"main-btn-style\" color=\"primary\">\n            {{results.next}}</ion-button\n          >\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n  <div class=\"mt30 ion-text-center\">\n    <ion-button\n      href=\"https://trustthevote.org/about_abc/\"\n      color=\"primary\"\n      fill=\"clear\"\n      >{{results.about_this_app}}\n    </ion-button>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot_ballot_module_ts.js.map