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
                        // this.presentToast(this.results['tm_ev']);
                        this.route.navigate(['/expired-code']);
                        // this.otpError = "";
                    }
                    else if (this.data === '00002') {
                        loading.dismiss();
                        // this.presentToast(this.results['tm_ev']);
                        this.route.navigate(['/check-network']);
                        // this.otpError = "";
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\n.alert-button.sc-ion-alert-ios:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-ios,\n.alert-input-group.sc-ion-alert-ios {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\n.alert-button.sc-ion-alert-md:last-child {\n  color: #333;\n  border-right: 0;\n  font-weight: bold;\n}\n\n.alert-message.sc-ion-alert-md,\n.alert-input-group.alert-message.sc-ion-alert-md {\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 0;\n  padding-bottom: 21px;\n  color: var(--ion-text-color, #000);\n  font-size: 14px;\n  text-align: center;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\n.x {\n  display: inline-block;\n  width: 47px;\n  border-bottom: 1.5px solid #000;\n  height: 43px;\n  margin: 6px;\n  --padding-start: 14px;\n}\n\nion-row {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-right: 20px;\n  padding-left: 20px;\n}\n\ninput {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: none;\n}\n\n.opt-box-area {\n  justify-content: left;\n  align-items: center;\n  margin-left: 0%;\n}\n\n.opt-box-area .nk-otp-box {\n  height: 50px;\n  width: 11vw;\n  margin: 9px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #040404;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box-first {\n  height: 50px;\n  width: 11vw;\n  margin: 9px 9px 9px 0px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #111213d1;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box:focus {\n  border: 1px solid #8a6ddc;\n  outline: none;\n  box-shadow: 0px 1px 2px;\n}\n\n.incorrect-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #D92212;\n  opacity: 1;\n}\n\n.time {\n  margin-top: 5vh;\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n  font-size: 16px;\n  height: 20px;\n}\n\n.receive-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #8B94B4;\n  opacity: 1;\n  font-size: 16px;\n}\n\n.resend {\n  text-align: left;\n  text-decoration: underline;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #C4C4C4;\n  opacity: 1;\n  font-size: 16px;\n}\n\nion-toolbar {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBTUE7RUFFRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFVQTtFQUNFLGVBQUE7QUFQRjs7QUFVQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQVBGOztBQVNBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVFFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQU5KOztBQVNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFQSjs7QUFVRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBUko7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFURjs7QUFZQTtFQUNFLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBVEY7O0FBV0E7RUFDRSxZQUFBO0FBUkYiLCJmaWxlIjoiYWNjZXNzLWNvZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxpc3QtcXVlc3Rpb24ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtaW9zOmxhc3QtY2hpbGQge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJvcmRlci1yaWdodDogMDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmFsZXJ0LW1lc3NhZ2Uuc2MtaW9uLWFsZXJ0LWlvcyxcclxuLmFsZXJ0LWlucHV0LWdyb3VwLnNjLWlvbi1hbGVydC1pb3Mge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvciwgIzAwMCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLmFsZXJ0LWJ1dHRvbi5zYy1pb24tYWxlcnQtbWQ6bGFzdC1jaGlsZCB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWxlcnQtbWVzc2FnZS5zYy1pb24tYWxlcnQtbWQsXHJcbi5hbGVydC1pbnB1dC1ncm91cC5hbGVydC1tZXNzYWdlLnNjLWlvbi1hbGVydC1tZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDIxcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG5cclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLy8gICAuYmFjay1idG57XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbi8vIH1cclxuLm5leHQtYnRuIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn1cclxuXHJcbi54IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDQ3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgIzAwMDtcclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgbWFyZ2luOiA2cHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNHB4O1xyXG59XHJcbmlvbi1yb3cge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4ub3B0LWJveC1hcmVhIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcblxyXG4gIC5uay1vdHAtYm94IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMXZ3O1xyXG4gICAgbWFyZ2luOiA5cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBSZWd1bGFyXCI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDQwNDA0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5uay1vdHAtYm94LWZpcnN0IHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMXZ3O1xyXG4gICAgbWFyZ2luOiA5cHggOXB4IDlweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBSZWd1bGFyXCI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTExMjEzZDE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgLm5rLW90cC1ib3g6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhhNmRkYztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi5pbmNvcnJlY3Qtb3RwIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBjb2xvcjogI0Q5MjIxMjtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGltZSB7XHJcbiAgbWFyZ2luLXRvcDogNXZoO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmVjZWl2ZS1vdHAge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICM4Qjk0QjQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXNlbmQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgY29sb3I6ICNDNEM0QzQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>{{results.enter_access_code}}</p>\r\n  </div>\r\n\r\n \r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <div class=\"opt-box-area\" [formGroup]=\"otpForm\" style=\"text-align: center\">\r\n      <div>\r\n        <input class=\"nk-otp-box-first\" tabindex=\"1\" (keyup)=\"focusNext($event,1)\" maxlength=\"1\" formControlName=\"first\"\r\n          type=\"tel\" placeholder=\"\" #first />\r\n        <input class=\"nk-otp-box\" tabindex=\"2\" (keyup)=\"focusNext($event,2)\" maxlength=\"1\" formControlName=\"second\"\r\n          #second type=\"tel\" placeholder=\"\" />\r\n        <input class=\"nk-otp-box\" tabindex=\"3\" (keyup)=\"focusNext($event,3)\" maxlength=\"1\" formControlName=\"third\" #third\r\n          type=\"tel\" placeholder=\"\" />\r\n        <input class=\"nk-otp-box\" tabindex=\"4\" (keyup)=\"focusNext($event,4)\" maxlength=\"1\" formControlName=\"four\" #four\r\n          type=\"tel\" placeholder=\"\" />\r\n        <input class=\"nk-otp-box\" tabindex=\"5\" (keyup)=\"focusNext($event,5)\" maxlength=\"1\" formControlName=\"five\" #five\r\n          type=\"tel\" placeholder=\"\" />\r\n      </div>\r\n      <ion-row style=\"padding-top: 50vh\">\r\n        <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\r\n          <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n            {{results.back}}\r\n            <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"next-btn\">\r\n          <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n            {{results.next}}\r\n            <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_access-code_access-code_module_ts.js.map