(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_access-code_access-code_module_ts"],{

/***/ 24627:
/*!*****************************************************************!*\
  !*** ./src/app/pages/access-code/access-code-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodePageRoutingModule": () => (/* binding */ AccessCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _access_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-code.page */ 15299);




const routes = [
    {
        path: '',
        component: _access_code_page__WEBPACK_IMPORTED_MODULE_0__.AccessCodePage,
    },
];
let AccessCodePageRoutingModule = class AccessCodePageRoutingModule {
};
AccessCodePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccessCodePageRoutingModule);



/***/ }),

/***/ 81055:
/*!*********************************************************!*\
  !*** ./src/app/pages/access-code/access-code.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodePageModule": () => (/* binding */ AccessCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-code-routing.module */ 24627);
/* harmony import */ var _access_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code.page */ 15299);







let AccessCodePageModule = class AccessCodePageModule {
};
AccessCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessCodePageRoutingModule,
        ],
        declarations: [_access_code_page__WEBPACK_IMPORTED_MODULE_1__.AccessCodePage],
    })
], AccessCodePageModule);



/***/ }),

/***/ 15299:
/*!*******************************************************!*\
  !*** ./src/app/pages/access-code/access-code.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodePage": () => (/* binding */ AccessCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./access-code.page.html */ 64800);
/* harmony import */ var _access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code.page.scss */ 9745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/statuscode.service */ 52413);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/avclient.service */ 55913);









let AccessCodePage = class AccessCodePage {
    constructor(route, fb, toastctrl, alertctrl, loadingctrl, statuscodeService, avclientService) {
        this.route = route;
        this.fb = fb;
        this.toastctrl = toastctrl;
        this.alertctrl = alertctrl;
        this.loadingctrl = loadingctrl;
        this.statuscodeService = statuscodeService;
        this.avclientService = avclientService;
        this.OTP = '';
        this.otp = '';
        this.otpError = '';
        this.results = [];
        this.createOTPForm();
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].access_code;
        });
    }
    getOtpValue() {
        return (this.otpForm.controls.first.value +
            this.otpForm.controls.second.value +
            this.otpForm.controls.third.value +
            this.otpForm.controls.four.value +
            this.otpForm.controls.five.value);
    }
    createOTPForm() {
        this.otpForm = this.fb.group({
            first: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            second: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            third: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            four: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            five: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        });
    }
    focusNext(event, index) {
        if (index === 1) {
            console.log(event.which !== 8);
            if (event.which !== 8) {
                this.second.nativeElement.focus();
            }
            index = '';
        }
        else if (index === 2) {
            if (event.which !== 8) {
                this.third.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.first.nativeElement.focus();
            }
            index = '';
        }
        else if (index === 3) {
            if (event.which !== 8) {
                this.four.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.second.nativeElement.focus();
            }
            index = '';
        }
        else if (index === 4) {
            if (event.which !== 8) {
                this.five.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.third.nativeElement.focus();
                index = '';
            }
        }
        else {
            if (event.which === 8 && event.target.value.length <= 0) {
                this.four.nativeElement.focus();
            }
            index = '';
        }
    }
    nextbtn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let enteredOtp;
            enteredOtp = this.getOtpValue();
            this.data = enteredOtp;
            if (this.data == '') {
                this.presentAlertEmpty();
            }
            else {
                this.disabledbutton = true;
                const loading = yield this.loadingctrl.create({
                    message: 'Check Authorization....',
                });
                yield loading.present();
                return new Promise((resolve) => {
                    loading.dismiss();
                    this.avclientService
                        .validateAccessCode(this.data)
                        .then((res) => {
                        this.route.navigate([
                            '/before-you-finish',
                            {
                                code: this.data,
                            },
                        ]);
                        this.avclientService.registerVoter();
                    })
                        .catch((res) => {
                        console.log('res', res);
                        if (res == 'Error: call out of order error') {
                            this.route.navigate(['/calloutoforder-access00002-error']);
                        }
                        else if (res == 'Error: access code expired') {
                            this.route.navigate(['/code_expired_access00003_error']);
                        }
                        else if (res == 'Error: access code invalid') {
                            this.route.navigate(['/code_invalid_access00004_error']);
                        }
                        else if (res == 'Error: network code') {
                            this.route.navigate(['/check-network-access00005-error']);
                        }
                    });
                    (err) => {
                        loading.dismiss();
                        this.disabledbutton = false;
                        this.presentAlertConfirm('Timeout');
                    };
                });
            }
        });
    }
    presentAlertEmpty() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                message: this.results['alert_msg'],
                buttons: [
                    {
                        text: 'Retry',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { },
                    },
                ],
            });
            yield alert.present();
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastctrl.create({
                message: a,
                duration: 3000,
                position: 'middle',
            });
            toast.present();
        });
    }
    presentAlertConfirm(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: a,
                backdropDissmiss: false,
                buttons: [
                    {
                        text: 'Cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah', blah);
                        },
                    },
                    {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    backbtn() {
        this.route.navigate(['/request-access-code']);
    }
    numberOnlyValidation(event) {
        const pattern = /[0-9]/;
        const inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
};
AccessCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__.StatuscodeService },
    { type: src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__.AvclientService }
];
AccessCodePage.propDecorators = {
    first: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['first', {
                    static: false,
                },] }],
    second: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['second', {
                    static: false,
                },] }],
    third: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['third', {
                    static: false,
                },] }],
    four: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['four', {
                    static: false,
                },] }],
    five: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['five', {
                    static: false,
                },] }],
    singUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ['singUp', {
                    static: false,
                },] }]
};
AccessCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-access-code',
        template: _raw_loader_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccessCodePage);



/***/ }),

/***/ 9745:
/*!*********************************************************!*\
  !*** ./src/app/pages/access-code/access-code.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\n.alert-button.sc-ion-alert-ios:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-ios,\n.alert-input-group.sc-ion-alert-ios {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\n.alert-button.sc-ion-alert-md:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md,\n.alert-input-group.alert-message.sc-ion-alert-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nion-toolbar {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.x {\n  display: inline-block;\n  width: 47px;\n  border-bottom: 1.5px solid #000;\n  height: 43px;\n  margin: 6px;\n  --padding-start: 14px;\n}\n\nion-row {\n  padding-bottom: 20px;\n}\n\ninput {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: none;\n}\n\n.opt-box-area {\n  justify-content: left;\n  align-items: center;\n  margin-left: 0%;\n}\n\n.opt-box-area .nk-otp-box {\n  height: 50px;\n  width: 11vw;\n  margin: 9px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #040404;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box-first {\n  height: 50px;\n  width: 11vw;\n  margin: 9px 9px 9px 0px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #111213d1;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box:focus {\n  border: 1px solid #8a6ddc;\n  outline: none;\n  box-shadow: 0px 1px 2px;\n}\n\n.incorrect-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #d92212;\n  opacity: 1;\n}\n\n.time {\n  margin-top: 5vh;\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n  font-size: 16px;\n  height: 20px;\n}\n\n.receive-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #8b94b4;\n  opacity: 1;\n  font-size: 16px;\n}\n\n.resend {\n  text-align: left;\n  text-decoration: underline;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #c4c4c4;\n  opacity: 1;\n  font-size: 16px;\n}\n\nion-toolbar {\n  height: 100%;\n}\n\np {\n  font-size: 25px;\n  font-weight: 700;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 30px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVNGOztBQVBBO0VBQ0Usb0JBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWFKOztBQVhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFhSjs7QUFYRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBYUo7O0FBVkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBY0Y7O0FBWEE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFjRjs7QUFYQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBY0Y7O0FBWEE7RUFDRSxZQUFBO0FBY0Y7O0FBWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBY0YiLCJmaWxlIjoiYWNjZXNzLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGlzdC1xdWVzdGlvbiB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgfVxufVxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3MsXG4uYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kOmxhc3QtY2hpbGQge1xuICBjb2xvcjogIzMzMztcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCxcbi5hbGVydC1pbnB1dC1ncm91cC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG4ubmV4dC1idG4ge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG59XG5pb24tdG9vbGJhciB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi54IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNDdweDtcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDtcbiAgaGVpZ2h0OiA0M3B4O1xuICBtYXJnaW46IDZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xufVxuaW9uLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuaW5wdXQge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xufVxuLm9wdC1ib3gtYXJlYSB7XG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDAlO1xuICAubmstb3RwLWJveCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMXZ3O1xuICAgIG1hcmdpbjogOXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA0MDQwNDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAubmstb3RwLWJveC1maXJzdCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxMXZ3O1xuICAgIG1hcmdpbjogOXB4IDlweCA5cHggMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzExMTIxM2QxO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIC5uay1vdHAtYm94OmZvY3VzIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOGE2ZGRjO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAycHg7XG4gIH1cbn1cbi5pbmNvcnJlY3Qtb3RwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcbiAgY29sb3I6ICNkOTIyMTI7XG4gIG9wYWNpdHk6IDE7XG59XG4udGltZSB7XG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnJlY2VpdmUtb3RwIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjOGI5NGI0O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yZXNlbmQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIGNvbG9yOiAjYzRjNGM0O1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */");

/***/ }),

/***/ 64800:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/access-code/access-code.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.enter_access_code}}</p>\n  </div>\n  <p>{{results.text_ac}}</p>\n  <div class=\"opt-box-area\" [formGroup]=\"otpForm\" style=\"text-align: center\">\n    <div>\n      <input\n        class=\"nk-otp-box-first\"\n        tabindex=\"1\"\n        (keyup)=\"focusNext($event,1)\"\n        maxlength=\"1\"\n        formControlName=\"first\"\n        pattern=\"[0-9]*\"\n        inputmode=\"numeric\"\n        type=\"tel\"\n        (keypress)=\"numberOnlyValidation($event)\"\n        digitOnly\n        #first\n      />\n      <input\n        class=\"nk-otp-box\"\n        tabindex=\"2\"\n        (keyup)=\"focusNext($event,2)\"\n        maxlength=\"1\"\n        formControlName=\"second\"\n        #second\n        pattern=\"[0-9]*\"\n        inputmode=\"numeric\"\n        type=\"tel\"\n        (keypress)=\"numberOnlyValidation($event)\"\n        digitOnly\n      />\n      <input\n        class=\"nk-otp-box\"\n        tabindex=\"3\"\n        (keyup)=\"focusNext($event,3)\"\n        maxlength=\"1\"\n        formControlName=\"third\"\n        #third\n        pattern=\"[0-9]*\"\n        inputmode=\"numeric\"\n        type=\"tel\"\n        (keypress)=\"numberOnlyValidation($event)\"\n        digitOnly\n      />\n      <input\n        class=\"nk-otp-box\"\n        tabindex=\"4\"\n        (keyup)=\"focusNext($event,4)\"\n        maxlength=\"1\"\n        formControlName=\"four\"\n        #four\n        pattern=\"[0-9]*\"\n        inputmode=\"numeric\"\n        type=\"tel\"\n        (keypress)=\"numberOnlyValidation($event)\"\n        digitOnly\n      />\n      <input\n        class=\"nk-otp-box\"\n        tabindex=\"5\"\n        (keyup)=\"focusNext($event,5)\"\n        maxlength=\"1\"\n        formControlName=\"five\"\n        #five\n        pattern=\"[0-9]*\"\n        inputmode=\"numeric\"\n        type=\"tel\"\n        (keypress)=\"numberOnlyValidation($event)\"\n        digitOnly\n      />\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\n          {{results.back}}\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button\n          color=\"dark\"\n          (click)=\"nextbtn()\"\n          [disabled]=\"!otpForm.valid\"\n        >\n          {{results.next}}\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_access-code_access-code_module_ts.js.map