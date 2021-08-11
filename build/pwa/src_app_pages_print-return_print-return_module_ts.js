(self["webpackChunkabc_prototype"] = self["webpackChunkabc_prototype"] || []).push([["src_app_pages_print-return_print-return_module_ts"],{

/***/ 978:
/*!*******************************************************************!*\
  !*** ./src/app/pages/print-return/print-return-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReturnPageRoutingModule": () => (/* binding */ PrintReturnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _print_return_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-return.page */ 2024);




const routes = [
    {
        path: '',
        component: _print_return_page__WEBPACK_IMPORTED_MODULE_0__.PrintReturnPage
    }
];
let PrintReturnPageRoutingModule = class PrintReturnPageRoutingModule {
};
PrintReturnPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrintReturnPageRoutingModule);



/***/ }),

/***/ 9249:
/*!***********************************************************!*\
  !*** ./src/app/pages/print-return/print-return.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReturnPageModule": () => (/* binding */ PrintReturnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _print_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-return-routing.module */ 978);
/* harmony import */ var _print_return_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-return.page */ 2024);







let PrintReturnPageModule = class PrintReturnPageModule {
};
PrintReturnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _print_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrintReturnPageRoutingModule
        ],
        declarations: [_print_return_page__WEBPACK_IMPORTED_MODULE_1__.PrintReturnPage]
    })
], PrintReturnPageModule);



/***/ }),

/***/ 2024:
/*!*********************************************************!*\
  !*** ./src/app/pages/print-return/print-return.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReturnPage": () => (/* binding */ PrintReturnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_print_return_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./print-return.page.html */ 1290);
/* harmony import */ var _print_return_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-return.page.scss */ 1795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 8427);






let PrintReturnPage = class PrintReturnPage {
    // P1 ballot - https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing
    // P1 aff - https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing
    // P2 ballot - https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing
    // P2 aff - https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing
    // P3 ballot - https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing
    // P3 aff - https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing
    // P4 ballot - https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing
    // P4 aff - https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing
    constructor(router) {
        this.router = router;
        if (this.router.getCurrentNavigation().extras.state) {
            this.paramData = this.router.getCurrentNavigation().extras.state.user;
            console.log(this.paramData);
        }
    }
    ngOnInit() {
        // const lastName = this.paramData.lastname.charAt(0).toUpperCase() + this.paramData.lastname.slice(1);
        // if (lastName.includes('A', 0)) {
        //   this.precinctNum = 1;
        // } else if(lastName.includes('B', 0)) {
        //   this.precinctNum = 2;
        // } else if (lastName.includes('C', 0)) {
        //   this.precinctNum = 3;
        // } else {
        //   this.precinctNum = 4;
        // }
    }
    goToFinish() {
        this.router.navigate(['tobecontinue']);
    }
    openPDF(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1Wrk9xhJkMFVEqtBBJgw2qZOTS9nqFxwk/view?usp=sharing' });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing' });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/16A2tzWcmvLQzXBdHordJ0OZbT2li2I8j/view?usp=sharing' });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1C6TO44gUkkljSyNLXdV_e1X7wPvEc3eA/view?usp=sharing' });
            }
        });
    }
    openPDF2(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1kn2xt5WxYzTn-NsbPc1X3BMqI47rjHDP/view?usp=sharing' });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1BSmmTchFQ3X8MD4wEmsIStA2hV97nRS1/view?usp=sharing' });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1oB_xaVUPwK6oE_9Np_iTymAU-lV2urJT/view?usp=sharing' });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/160p-8lKOlIWXffnXZGR3Pf1gXf6mQYQW/view?usp=sharing' });
            }
        });
    }
    openXML(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1pIe31DRlAtmcdsTeCc1HrAHKQ82N6wYL/view?usp=sharing' });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1WUl5lTFPDYB8FJYdxq5FKhJGPaQgyy1Y/view?usp=sharing' });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1A_NWcXXqOLzr8OHnzmEEnCNcrYyBiViz/view?usp=sharing' });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({ url: 'https://drive.google.com/file/d/1FBLU2ZGeVOO71zwqnPiWtOH_ibgCosId/view?usp=sharing' });
            }
        });
    }
};
PrintReturnPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
PrintReturnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-print-return',
        template: _raw_loader_print_return_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_print_return_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrintReturnPage);



/***/ }),

/***/ 1795:
/*!***********************************************************!*\
  !*** ./src/app/pages/print-return/print-return.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 20px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n}\n\n.Required-div {\n  padding-left: 0;\n}\n\n.Required-div ion-input {\n  border: 1px solid black;\n  width: 93%;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-top: 20px;\n  font-weight: 600;\n  color: #000000;\n  margin-top: 30px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.camera-div-upr {\n  height: 30%;\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n}\n\n.camera-div-upr .div1 {\n  height: 70%;\n  width: 30%;\n  margin: 3%;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n}\n\n.camera-div {\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n  height: 30%;\n}\n\n.camera-div .ic-crm-div {\n  font-size: 100px;\n  color: #00000085;\n}\n\n.bottom-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 70px;\n  padding-top: 75px;\n  padding-bottom: 40px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXJldHVybi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ047O0FBRUU7RUFDRSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFBRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHSjs7QUFERTtFQUNFLGtCQUFBO0FBSUo7O0FBRkU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFLSjs7QUFIRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFNSjs7QUFKRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU9OOztBQUxFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVFKOztBQUhFO0VBQ0UsZUFBQTtBQU1KOztBQUxJO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBT047O0FBSkU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFPTjs7QUFMRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFQSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVNOOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVNKOztBQVBJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQVNOOztBQU5FO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFTSjs7QUFORTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQVNKOztBQVBFO0VBQ0UsZUFBQTtFQUNKLGdCQUFBO0VBQ0EsZ0JBQUE7QUFVQSIsImZpbGUiOiJwcmludC1yZXR1cm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5saXN0LXF1ZXN0aW9uIHtcclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICB9XHJcbiAgLmZ0ci10cC10ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG4gIC5iYWNrLWJ0biB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgfVxyXG4gIC5uZXh0LWJ0biB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuICBiIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcbiAgaW9uLWljb24ge1xyXG4gICAgLy8gY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICAuUmVxdWlyZWQtZGl2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICB3aWR0aDogOTMlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pYy1jb2x7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMCAxcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcbiAgLmNhbWVyYS1kaXYtdXByIHtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIC5kaXYxIHtcclxuICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIG1hcmdpbjogMyU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuY2FtZXJhLWRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgXHJcbiAgICAuaWMtY3JtLWRpdiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwMDAwODU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ib3R0b20tZGl2LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiBcclxuICB9XHJcbiAgLmNlbi1kaXYtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgIHBhZGRpbmctdG9wOiA3NXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG4gIGl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbmZvbnQtd2VpZ2h0OiAxMDA7XHJcbmNvbG9yOiAjMDAwMDAwN2E7XHJcbn1cclxuICAiXX0= */");

/***/ }),

/***/ 1290:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/print-return/print-return.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  \r\n  <!-- <ion-grid class=\"ion-no-padding mt60\">\r\n    <ion-row class=\"mt100 ion-text-center\">\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"openPDF(precinctNum)\" class=\"main-btn-style\" color=\"primary\">Print Ballot</ion-button>\r\n        <ion-button (click)=\"openPDF2(precinctNum)\" class=\"main-btn-style\" color=\"primary\">Print Affidavit</ion-button>\r\n        <ion-button (click)=\"openXML(precinctNum)\" class=\"main-btn-style\" color=\"secondary\">Print Xml</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div class=\"list-question\">\r\n    <p>Print Return</p>\r\n  </div>\r\n  <div class=\"cen-div-text\" (click)=\"openPDF(precinctNum)\">\r\n    <p>Ballot Print Preview</p>\r\n\r\n    <ion-icon name=\"documents-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"bottom-div-text\" (click)=\"openPDF2(precinctNum)\">\r\n    <p>Affidavit Print Preview</p>\r\n    <ion-icon name=\"document-outline\"></ion-icon>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\" backbtn()\">\r\n          Back\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"chevron-back-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"goToFinish()\">\r\n          Print\r\n        \r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n          </ion-button \r\n      ></ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_print-return_print-return_module_ts.js.map