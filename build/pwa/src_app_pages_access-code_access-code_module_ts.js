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
        this.createOTPForm();
    }
    ngOnInit() {
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
                this.presentToast('Enter your Election code');
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
                        this.presentToast('your Access code valid but expired');
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
                buttons: [
                    {
                        text: 'Cancel',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                        }
                    }
                ]
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
    first: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["first", { static: false },] }],
    second: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["second", { static: false },] }],
    third: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["third", { static: false },] }],
    four: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["four", { static: false },] }],
    five: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["five", { static: false },] }],
    singUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ["singUp", { static: false },] }]
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\n.x {\n  display: inline-block;\n  width: 47px;\n  border-bottom: 1.5px solid #000;\n  height: 43px;\n  margin: 6px;\n  --padding-start: 14px;\n}\n\nion-row {\n  padding-top: 10px;\n  padding-bottom: 20px;\n  padding-right: 0;\n}\n\ninput {\n  background: none;\n  outline: none;\n  -webkit-appearance: none;\n  box-shadow: none !important;\n  border: none;\n}\n\n.opt-box-area {\n  justify-content: left;\n  align-items: center;\n  margin-left: 0%;\n}\n\n.opt-box-area .nk-otp-box {\n  height: 50px;\n  width: 11vw;\n  margin: 9px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #040404;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box-first {\n  height: 50px;\n  width: 11vw;\n  margin: 9px 9px 9px 0px;\n  font-size: 18px;\n  color: #000000;\n  font-family: \"Roboto Regular\";\n  text-align: center;\n  background: #FFFFFF 0% 0% no-repeat padding-box;\n  border-bottom: 1px solid #111213d1;\n  border-radius: 0px;\n  opacity: 1;\n}\n\n.opt-box-area .nk-otp-box:focus {\n  border: 1px solid #8a6ddc;\n  outline: none;\n  box-shadow: 0px 1px 2px;\n}\n\n.incorrect-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  font-size: 14px;\n  letter-spacing: 0px;\n  color: #D92212;\n  opacity: 1;\n}\n\n.time {\n  margin-top: 5vh;\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #000000;\n  opacity: 1;\n  font-size: 16px;\n  height: 20px;\n}\n\n.receive-otp {\n  text-align: left;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #8B94B4;\n  opacity: 1;\n  font-size: 16px;\n}\n\n.resend {\n  text-align: left;\n  text-decoration: underline;\n  font-family: \"Roboto\";\n  letter-spacing: 0px;\n  color: #C4C4C4;\n  opacity: 1;\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY2Vzcy1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRU07RUFDRSxlQUFBO0VBQ0osZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUU7RUFFRSxnQkFBQTtBQUFKOztBQUVFO0VBQ0UsZ0JBQUE7QUFDSjs7QUFJQTtFQUNJLGVBQUE7QUFESjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0UsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQURKOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNELGdCQUFBO0FBQUg7O0FBRUU7RUFFRCxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQUFEOztBQUVFO0VBRUUscUJBQUE7RUFDQSxtQkFBQTtFQUVBLGVBQUE7QUFESjs7QUFJSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGTjs7QUFLSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBSE47O0FBTUk7RUFDSSx5QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUpSOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBTEo7O0FBUUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUxKIiwiZmlsZSI6ImFjY2Vzcy1jb2RlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmxpc3QtcXVlc3Rpb257XHJcbiAgICAgIHB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgfVxyXG4gIGlvbi1sYWJlbHtcclxuICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW9uLWl0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuLy8gICAuYmFjay1idG57XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbi8vIH1cclxuLm5leHQtYnRue1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG4ueHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNDdweDtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkICMwMDA7XHJcbiAgICBoZWlnaHQ6IDQzcHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMTRweDtcclxuICB9XHJcbiAgaW9uLXJvdyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcbiAgaW5wdXQgXHJcbnsgXHJcbiBiYWNrZ3JvdW5kOm5vbmU7IFxyXG4gb3V0bGluZTogbm9uZTsgXHJcbiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IFxyXG4gYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50OyBcclxuIGJvcmRlcjogbm9uZTsgXHJcbn1cclxuICAub3B0LWJveC1hcmVhIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjR2dztcclxuICAgIG1hcmdpbi1sZWZ0OiAwJTtcclxuICAgIC8vIG1hcmdpbi10b3A6IDI1JTtcclxuXHJcbiAgICAubmstb3RwLWJveCB7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgd2lkdGg6IDExdnc7XHJcbiAgICAgIG1hcmdpbjogOXB4O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICBmb250LWZhbWlseTogXCJSb2JvdG8gUmVndWxhclwiO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzA0MDQwNDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5uay1vdHAtYm94LWZpcnN0IHtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDogMTF2dztcclxuICAgICAgbWFyZ2luOiA5cHggOXB4IDlweCAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90byBSZWd1bGFyXCI7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRiAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTExMjEzZDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAubmstb3RwLWJveDpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzhhNmRkYztcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaW5jb3JyZWN0LW90cHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICNEOTIyMTI7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4udGltZXtcclxuICAgIG1hcmdpbi10b3A6IDV2aDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ucmVjZWl2ZS1vdHB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgIGNvbG9yOiAjOEI5NEI0O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlc2VuZHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICBjb2xvcjogI0M0QzRDNDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn0iXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"list-question\">\r\n    <p>Enter Access Code</p>\r\n  </div>\r\n\r\n  <div class=\"opt-box-area\" [formGroup]=\"otpForm\" style=\"text-align: center\">\r\n    <div>\r\n      <input\r\n        class=\"nk-otp-box-first\"\r\n        tabindex=\"1\"\r\n        (keyup)=\"focusNext($event,1)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"first\"\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n        #first\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"2\"\r\n        (keyup)=\"focusNext($event,2)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"second\"\r\n        #second\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"3\"\r\n        (keyup)=\"focusNext($event,3)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"third\"\r\n        #third\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"4\"\r\n        (keyup)=\"focusNext($event,4)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"four\"\r\n        #four\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n      <input\r\n        class=\"nk-otp-box\"\r\n        tabindex=\"5\"\r\n        (keyup)=\"focusNext($event,5)\"\r\n        maxlength=\"1\"\r\n        formControlName=\"five\"\r\n        #five\r\n        type=\"tel\"\r\n        placeholder=\"\"\r\n      />\r\n    </div>\r\n    <ion-row style=\"padding-top: 58vh\">\r\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\r\n        <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n          Back\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"chevron-back-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextbtn()\">\r\n          Next\r\n          <ion-icon\r\n            slot=\"end\"\r\n            name=\"chevron-forward-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_access-code_access-code_module_ts.js.map