(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_access-code_access-code_module_ts"],{

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_access_code_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./access-code.page.html */ 4800);
/* harmony import */ var _access_code_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./access-code.page.scss */ 9745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 3679);







let AccessCodePage = class AccessCodePage {
    constructor(route, fb, toastctrl, alertctrl, loadingctrl) {
        this.route = route;
        this.fb = fb;
        this.toastctrl = toastctrl;
        this.alertctrl = alertctrl;
        this.loadingctrl = loadingctrl;
        this.OTP = '';
        this.otp = '';
        this.otpError = '';
        this.results = [];
        this.createOTPForm();
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            // console.log("json", json);
            this.results = json[0]['access_code'];
            // console.log("results: ", this.results); 
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
            first: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            second: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            third: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            four: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            five: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
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
        }
        else if (index === 2) {
            if (event.which !== 8) {
                console.log(this.second);
                this.third.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.first.nativeElement.focus();
            }
        }
        else if (index === 3) {
            if (event.which !== 8) {
                console.log(this.second);
                this.four.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.second.nativeElement.focus();
            }
        }
        else if (index === 4) {
            if (event.which !== 8) {
                console.log(this.second);
                this.five.nativeElement.focus();
            }
            else if (event.target.value.length <= 0) {
                this.third.nativeElement.focus();
            }
        }
        else {
            if (event.which === 8 && event.target.value.length <= 0) {
                this.four.nativeElement.focus();
            }
        }
    }
    nextbtn() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let enteredOtp;
            enteredOtp = this.getOtpValue();
            this.data = enteredOtp;
            if (this.data == '') {
                // this.presentToast(this.results['tm_ee']);
                this.presentAlertEmpty();
            }
            else {
                this.disabledbutton = true;
                const loading = yield this.loadingctrl.create({
                    message: 'Check Authorization....',
                });
                yield loading.present();
                return new Promise(resolve => {
                    if (this.data === '00000') {
                        loading.dismiss();
                        this.route.navigate(['/failed-authorization']);
                    }
                    else if (this.data === '00001') {
                        loading.dismiss();
                        this.presentToast(this.results['tm_ev']);
                        this.route.navigate(['/ballot-fingerprint']);
                        this.otpError = "";
                    }
                    else {
                        loading.dismiss();
                        this.route.navigate(['/ballot-fingerprint']);
                        this.otpError = "";
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                // header: 'Confirm!',
                message: this.results['alert_msg'],
                buttons: [{
                        text: 'Retry',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }
                    // , {
                    // 	text: 'Close App',
                    // 	handler: () => {
                    // 	}
                    // }
                ]
            });
            yield alert.present();
        });
    }
    presentToast(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastctrl.create({
                message: a,
                duration: 3000,
                position: 'middle'
            });
            toast.present();
        });
    }
    presentAlertConfirm(a) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
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
        this.route.navigate(['/ballot-complete']);
    }
};
AccessCodePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
AccessCodePage.propDecorators = {
    first: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["first", {
                    static: false
                },] }],
    second: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["second", {
                    static: false
                },] }],
    third: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["third", {
                    static: false
                },] }],
    four: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["four", {
                    static: false
                },] }],
    five: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["five", {
                    static: false
                },] }],
    singUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["singUp", {
                    static: false
                },] }]
};
AccessCodePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\n.alert-button.sc-ion-alert-ios:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-ios, .alert-input-group.sc-ion-alert-ios {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\n.alert-button.sc-ion-alert-md:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md, .alert-input-group.alert-message.sc-ion-alert-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\n.x {\n  display: inline-block;\n  width: 47px;\n  border-bottom: 1.5px solid #000;\n  height: 43px;\n  margin: 6px;\n  --padding-start: 14px;\n}\n\nion-row {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-right: 0;\n}\n\ninput {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: none;\n}\n\n.opt-box-area {\n  justify-content: left;\n  align-items: center;\n  margin-left: 0%;\n}\n\n.opt-box-area .nk-otp-box {\n  height: 50px;\n  width: 11vw;\n  margin: 9px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #040404;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box-first {\n  height: 50px;\n  width: 11vw;\n  margin: 9px 9px 9px 0px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #111213d1;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box:focus {\n  border: 1px solid #8a6ddc;\n  outline: none;\n  box-shadow: 0px 1px 2px;\n}\n\n.incorrect-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #D92212;\n  opacity: 1;\n}\n\n.time {\n  margin-top: 5vh;\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n  font-size: 16px;\n  height: 20px;\n}\n\n.receive-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #8B94B4;\n  opacity: 1;\n  font-size: 16px;\n}\n\n.resend {\n  text-align: left;\n  text-decoration: underline;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #C4C4C4;\n  opacity: 1;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRU07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUdBOztBQUFFO0VBRUUsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGdCQUFBO0FBR0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7RUFDRSxxQkFBQTtFQUNFLFdBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDRCxnQkFBQTtBQUVIOztBQUFFO0VBRUQsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFFRDs7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR047O0FBREk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUdOOztBQURHO0VBQ0sseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFHUjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFNSiIsImZpbGUiOiJhY2Nlc3MtY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9ue1xyXG4gICAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgICAgfVxyXG4gIH1cclxuICAuYWxlcnQtYnV0dG9uLnNjLWlvbi1hbGVydC1pb3M6bGFzdC1jaGlsZCB7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1pb3MsIC5hbGVydC1pbnB1dC1ncm91cC5zYy1pb24tYWxlcnQtaW9zIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjFweDtcclxuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICMwMDApO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQ6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCwgLmFsZXJ0LWlucHV0LWdyb3VwLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LW1kIHtcclxucGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5wYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5wYWRkaW5nLXRvcDogMDtcclxucGFkZGluZy1ib3R0b206IDIxcHg7XHJcbmNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuLy8gICAuYmFjay1idG57XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbi8vIH1cclxuLm5leHQtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4ueHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICMwMDA7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTRweDtcclxuICB9XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbiAgaW5wdXQgXHJcbnsgXHJcbiBiYWNrZ3JvdW5kOm5vbmU7IFxyXG4gb3V0bGluZTogbm9uZTsgXHJcbiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBcclxuIGJvcmRlcjogbm9uZTsgXHJcbn1cclxuICAub3B0LWJveC1hcmVhIHtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgICBcclxuICAgIC5uay1vdHAtYm94IHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDogMTF2dztcclxuICAgICAgbWFyZ2luOiA5cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBSZWd1bGFyXCI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDQwNDA0O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAubmstb3RwLWJveC1maXJzdCB7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgd2lkdGg6IDExdnc7XHJcbiAgICAgIG1hcmdpbjogOXB4IDlweCA5cHggMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzExMTIxM2QxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgIC5uay1vdHAtYm94OmZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOGE2ZGRjO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAycHg7XHJcbiAgICB9XHJcbn1cclxuLmluY29ycmVjdC1vdHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjRDkyMjEyO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG4udGltZXtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5yZWNlaXZlLW90cHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICM4Qjk0QjQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5yZXNlbmR7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNDNEM0QzQ7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59Il19 */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.enter_access_code}}</p>\r\n  </div>\r\n\r\n  <div class=\"opt-box-area\" [formGroup]=\"otpForm\" style=\"text-align: center\">\r\n    <div>\r\n      <input\r\n        class=\"nk-otp-box-first\"\r\n        tabindex=\"1\"\r\n        (keyup)=\"focusNext($event,1)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"first\"\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n        #first\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"2\"\r\n        (keyup)=\"focusNext($event,2)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"second\"\r\n        #second\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"3\"\r\n        (keyup)=\"focusNext($event,3)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"third\"\r\n        #third\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"4\"\r\n        (keyup)=\"focusNext($event,4)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"four\"\r\n        #four\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"5\"\r\n        (keyup)=\"focusNext($event,5)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"five\"\r\n        #five\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n    </div>\r\n    <ion-row style=\"padding-top: 56vh\">\r\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          {{results.back}}\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"chevron-back-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          {{results.next}}\r\n          <ion-icon\r\n            slot=\"end\"\r\n            name=\"chevron-forward-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_access-code_access-code_module_ts.js.map