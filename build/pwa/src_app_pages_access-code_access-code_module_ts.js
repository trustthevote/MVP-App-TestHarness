(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_access-code_access-code_module_ts"],{

/***/ 4627:
/*!*****************************************************************!*\
  !*** ./src/app/pages/access-code/access-code-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodePageRoutingModule": () => (/* binding */ AccessCodePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _access_code_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-code.page */ 5299);




const routes = [
    {
        path: '',
        component: _access_code_page__WEBPACK_IMPORTED_MODULE_0__.AccessCodePage
    }
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

/***/ 1055:
/*!*********************************************************!*\
  !*** ./src/app/pages/access-code/access-code.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodePageModule": () => (/* binding */ AccessCodePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./access-code-routing.module */ 4627);
/* harmony import */ var _access_code_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code.page */ 5299);







let AccessCodePageModule = class AccessCodePageModule {
};
AccessCodePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _access_code_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccessCodePageRoutingModule
        ],
        declarations: [_access_code_page__WEBPACK_IMPORTED_MODULE_1__.AccessCodePage]
    })
], AccessCodePageModule);



/***/ }),

/***/ 5299:
/*!*******************************************************!*\
  !*** ./src/app/pages/access-code/access-code.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccessCodePage": () => (/* binding */ AccessCodePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./access-code.page.html */ 4800);
/* harmony import */ var _access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code.page.scss */ 9745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/statuscode.service */ 2413);
/* harmony import */ var src_app_api_avclient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/avclient.service */ 5913);









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
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['access_code'];
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
        console.log(index);
        console.log(event);
        if (index === 1) {
            console.log(event.which !== 8);
            if (event.which !== 8) {
                console.log(this.second);
                this.second.nativeElement.focus();
            }
            index = "";
        }
        else if (index === 2) {
            if (event.which !== 8) {
                console.log(this.second);
                this.third.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.first.nativeElement.focus();
            }
            index = "";
        }
        else if (index === 3) {
            if (event.which !== 8) {
                console.log(this.second);
                this.four.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.second.nativeElement.focus();
            }
            index = "";
        }
        else if (index === 4) {
            if (event.which !== 8) {
                console.log(this.second);
                this.five.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.third.nativeElement.focus();
                index = "";
            }
        }
        else {
            if (event.which === 8 && event.target.value.length <= 0) {
                this.four.nativeElement.focus();
            }
            index = "";
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
                return new Promise(resolve => {
                    loading.dismiss();
                    this.avclientService.validateAccessCode(this.data, '').catch(res => {
                        console.log("res", res);
                    });
                    this.avclientService.constructBallotCryptograms(this.data).catch(res => {
                        console.log("res", res);
                    });
                    this.avclientService.spoilBallotCryptograms(this.data).catch(res => {
                        console.log("res", res);
                    });
                    this.avclientService.submitBallotCryptograms(this.data).catch(res => {
                        console.log("res", res);
                    });
                    if (this.data == '00002') {
                        this.route.navigate(['/ballot-prep-error']);
                    }
                    else if (this.data == '00003') {
                        this.route.navigate(['/expired-code']);
                    }
                    else if (this.data == '00004') {
                        this.route.navigate(['/failed-authorization']);
                    }
                    else if (this.data == '00005') {
                        this.route.navigate(['/check-network-access00005-error']);
                    }
                    else if (this.data == '00006') {
                        this.route.navigate(['/ballot-test-error']);
                    }
                    else if (this.data == '00007') {
                        this.route.navigate(['/network-error-access-code']);
                    }
                    else if (this.data == '00008') {
                        this.route.navigate(['/ballot-oops-screen']);
                    }
                    else if (this.data == '00009') {
                        this.route.navigate(['/ballot-test-fail-err']);
                    }
                    else if (this.data == '00010') {
                        this.route.navigate(['/network-error-access-ten']);
                    }
                    else if (this.data == '00011') {
                        this.route.navigate(['/server-commit-network-error-access']);
                    }
                    else if (this.data == '00012') {
                        this.route.navigate(['/network-error-access12']);
                    }
                    else if (this.data == '00013') {
                        this.route.navigate(['/ballot-access-error13']);
                    }
                    else {
                        this.route.navigate(['/before-you-finish']);
                    }
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
                buttons: [{
                        text: 'Retry',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }]
            });
            yield alert.present();
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastctrl.create({
                message: a,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    }
    presentAlertConfirm(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: a,
                backdropDissmiss: false,
                buttons: [{
                        text: 'Cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }]
            });
            yield alert.present();
        });
    }
    backbtn() {
        this.route.navigate(['/request-access-code']);
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
    first: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["first", {
                    static: false
                },] }],
    second: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["second", {
                    static: false
                },] }],
    third: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["third", {
                    static: false
                },] }],
    four: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["four", {
                    static: false
                },] }],
    five: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["five", {
                    static: false
                },] }],
    singUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: ["singUp", {
                    static: false
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\n.alert-button.sc-ion-alert-ios:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-ios,\n.alert-input-group.sc-ion-alert-ios {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\n.alert-button.sc-ion-alert-md:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md,\n.alert-input-group.alert-message.sc-ion-alert-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nion-toolbar {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n\n.x {\n  display: inline-block;\n  width: 47px;\n  border-bottom: 1.5px solid #000;\n  height: 43px;\n  margin: 6px;\n  --padding-start: 14px;\n}\n\nion-row {\n  padding-bottom: 20px;\n}\n\ninput {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: none;\n}\n\n.opt-box-area {\n  justify-content: left;\n  align-items: center;\n  margin-left: 0%;\n}\n\n.opt-box-area .nk-otp-box {\n  height: 50px;\n  width: 11vw;\n  margin: 9px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #040404;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box-first {\n  height: 50px;\n  width: 11vw;\n  margin: 9px 9px 9px 0px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #ffffff 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #111213d1;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box:focus {\n  border: 1px solid #8a6ddc;\n  outline: none;\n  box-shadow: 0px 1px 2px;\n}\n\n.incorrect-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #d92212;\n  opacity: 1;\n}\n\n.time {\n  margin-top: 5vh;\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n  font-size: 16px;\n  height: 20px;\n}\n\n.receive-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #8b94b4;\n  opacity: 1;\n  font-size: 16px;\n}\n\n.resend {\n  text-align: left;\n  text-decoration: underline;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #c4c4c4;\n  opacity: 1;\n  font-size: 16px;\n}\n\nion-toolbar {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsZ0JBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFRRjs7QUFOQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVNGOztBQVBBO0VBQ0Usb0JBQUE7QUFVRjs7QUFSQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBV0Y7O0FBVEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVlGOztBQVhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWFKOztBQVhFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFhSjs7QUFYRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBYUo7O0FBVkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBY0Y7O0FBWkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFlRjs7QUFiQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBZ0JGOztBQWRBO0VBQ0UsWUFBQTtBQWlCRiIsImZpbGUiOiJhY2Nlc3MtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5saXN0LXF1ZXN0aW9uIHtcclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB9XHJcbn1cclxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtaW9zLFxyXG4uYWxlcnQtaW5wdXQtZ3JvdXAuc2MtaW9uLWFsZXJ0LWlvcyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIxcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5hbGVydC1idXR0b24uc2MtaW9uLWFsZXJ0LW1kOmxhc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQsXHJcbi5hbGVydC1pbnB1dC1ncm91cC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIxcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4ubmV4dC1idG4ge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuLngge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNDdweDtcclxuICBib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCAjMDAwO1xyXG4gIGhlaWdodDogNDNweDtcclxuICBtYXJnaW46IDZweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE0cHg7XHJcbn1cclxuaW9uLXJvdyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4ub3B0LWJveC1hcmVhIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgLm5rLW90cC1ib3gge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDExdnc7XHJcbiAgICBtYXJnaW46IDlweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvIFJlZ3VsYXJcIjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwNDA0MDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAubmstb3RwLWJveC1maXJzdCB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogMTF2dztcclxuICAgIG1hcmdpbjogOXB4IDlweCA5cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzExMTIxM2QxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgLm5rLW90cC1ib3g6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhhNmRkYztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweDtcclxuICB9XHJcbn1cclxuLmluY29ycmVjdC1vdHAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICNkOTIyMTI7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4udGltZSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLnJlY2VpdmUtb3RwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICM4Yjk0YjQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLnJlc2VuZCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIjtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gIGNvbG9yOiAjYzRjNGM0O1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 4800:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/access-code/access-code.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.enter_access_code}}</p>\r\n  </div>\r\n  <div class=\"opt-box-area\" [formGroup]=\"otpForm\" style=\"text-align: center\">\r\n    <div>\r\n      <input\r\n        class=\"nk-otp-box-first\"\r\n        tabindex=\"1\"\r\n        (keyup)=\"focusNext($event,1)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"first\"\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n        #first\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"2\"\r\n        (keyup)=\"focusNext($event,2)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"second\"\r\n        #second\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"3\"\r\n        (keyup)=\"focusNext($event,3)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"third\"\r\n        #third\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"4\"\r\n        (keyup)=\"focusNext($event,4)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"four\"\r\n        #four\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"5\"\r\n        (keyup)=\"focusNext($event,5)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"five\"\r\n        #five\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.back}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_access-code_access-code_module_ts.js.map