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
        declarations: [_ballot_page__WEBPACK_IMPORTED_MODULE_1__.BallotPage]
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



/* eslint-disable max-len */




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
    ngOnInit() {
        localStorage.clear();
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['ballot'];
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
    presentAlertEmpty(msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                message: msg,
                buttons: [{
                        text: this.results['try_again'],
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }
                ]
            });
            yield alert.present();
        });
    }
    submitForm() {
        this.isSubmitted = true;
        if (!this.signupForm.valid) {
            this.presentAlertEmpty(this.results['alert_msg']);
            return false;
        }
        else {
            const naviExtras = {
                state: {
                    user: this.signupForm.value
                }
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".mt30 {\n  margin-top: 30px;\n}\n\n.mt60 {\n  margin-top: 60px;\n}\n\n.mt100 {\n  margin-top: 100px;\n}\n\np {\n  font-size: 20px;\n}\n\nion-card-title,\np {\n  color: #464648;\n}\n\nion-input {\n  border: 1px solid lightgray;\n  border-radius: 4px;\n  --padding-start: 10px !important;\n  margin-top: 8px;\n}\n\n.main-btn-style {\n  --border-radius: 0;\n  height: 50px;\n  width: 180px;\n  font-size: 20px;\n}\n\n.err-messages {\n  margin-left: 20px;\n}\n\n.err-messages .error {\n  color: var(--ion-color-danger);\n  padding: 0;\n  font-size: 13px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsY0FBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSw4QkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUNKIiwiZmlsZSI6ImJhbGxvdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXQzMCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLm10NjAge1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbn1cclxuXHJcbi5tdDEwMCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW9uLWNhcmQtdGl0bGUsXHJcbnAge1xyXG4gIGNvbG9yOiAjNDY0NjQ4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG59XHJcblxyXG4ubWFpbi1idG4tc3R5bGUge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmVyci1tZXNzYWdlcyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG4gIC5lcnJvciB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\r\n  <div class=\"ion-text-center mt60\">\r\n    <ion-card-title>{{results.welcome_to_jetsons_ballot}}</ion-card-title>\r\n  </div>\r\n  <div class=\"ion-text-center\">\r\n    <p>{{results.to_get_started}}</p>\r\n  </div>\r\n  <ion-grid class=\"ion-no-padding mt60\">\r\n    <form [formGroup]=\"signupForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">{{results.first_name}}</ion-label>\r\n            <ion-input formControlName=\"firstname\" type=\"text\" placeholder=\"{{results.first_name}}\" required clearInput>\r\n            </ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <div class=\"err-messages\">\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.required\">\r\n              <!-- <p class=\"error\">{{results.firstname_errors}}</p> -->\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.minlength\" >\r\n              <!-- <p class=\"error\">{{results.firstname_errors1}}</p> -->\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.maxlength\">\r\n              <!-- <p class=\"error\">{{results.firstname_errors2}}</p> -->\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.firstname.errors?.pattern\">\r\n              <!-- <p class=\"error\">{{results.firstname_errors3}}</p> -->\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"stacked\">{{results.last_name}}</ion-label>\r\n            <ion-input formControlName=\"lastname\" type=\"text\" placeholder=\"{{results.last_name}}\" required clearInput>\r\n            </ion-input>\r\n          </ion-item>\r\n          <!-- Error messages -->\r\n          <div class=\"err-messages\">\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.required\">\r\n              <!-- <p class=\"error\">{{results.last_name_errors}}</p> -->\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.minlength\">\r\n              <!-- <p class=\"error\">{{results.last_name_errors1}}</p> -->\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.maxlength\">\r\n              <!-- <p class=\"error\">{{results.last_name_errors2}}</p> -->\r\n            </ng-container>\r\n            <ng-container *ngIf=\"isSubmitted && errorControl.lastname.errors?.pattern\" >\r\n              <!-- <p class=\"error\">{{results.please_provide}}</p> -->\r\n            </ng-container>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"mt100 ion-text-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-button type=\"submit\" class=\"main-btn-style\" color=\"primary\">\r\n            {{results.next}}</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-grid>\r\n  <div class=\"mt30 ion-text-center\">\r\n    <ion-button href=\"https://trustthevote.org/about_abc/\" color=\"primary\" fill=\"clear\">{{results.about_this_app}}\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot_ballot_module_ts.js.map