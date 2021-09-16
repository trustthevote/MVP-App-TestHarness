(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_print-return_print-return_module_ts"],{

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
        this.results = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.paramData = this.router.getCurrentNavigation().extras.state.user;
        }
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['print_return_page'];
        });
        if (this.userObject.lastname != undefined) {
            // const lastName = this.paramData.lastname.charAt(0).toUpperCase() + this.paramData.lastname.slice(1);
            const lastName = this.userObject.lastname.charAt(0).toUpperCase() + this.userObject.lastname.slice(1);
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
    goToFinish() {
        this.router.navigate(['tobecontinue']);
    }
    openPDF(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/1Wrk9xhJkMFVEqtBBJgw2qZOTS9nqFxwk/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing '
                });
            }
            else if (precinctNum === 2) {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing  '
                });
            }
            else if (precinctNum === 3) {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/16A2tzWcmvLQzXBdHordJ0OZbT2li2I8j/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/16A2tzWcmvLQzXBdHordJ0OZbT2li2I8j/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing '
                });
            }
            else {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/1C6TO44gUkkljSyNLXdV_e1X7wPvEc3eA/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1C6TO44gUkkljSyNLXdV_e1X7wPvEc3eA/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing'
                });
            }
        });
    }
    openPDF2(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/1kn2xt5WxYzTn-NsbPc1X3BMqI47rjHDP/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing'
                });
            }
            else if (precinctNum === 2) {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/1BSmmTchFQ3X8MD4wEmsIStA2hV97nRS1/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing'
                });
            }
            else if (precinctNum === 3) {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/1oB_xaVUPwK6oE_9Np_iTymAU-lV2urJT/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing'
                });
            }
            else {
                console.log(precinctNum);
                // await Browser.open({ url: 'https://drive.google.com/file/d/160p-8lKOlIWXffnXZGR3Pf1gXf6mQYQW/view?usp=sharing' });
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    // url: 'https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing'
                    url: 'https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing'
                });
            }
        });
    }
    openXML(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1pIe31DRlAtmcdsTeCc1HrAHKQ82N6wYL/view?usp=sharing'
                });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1WUl5lTFPDYB8FJYdxq5FKhJGPaQgyy1Y/view?usp=sharing'
                });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1A_NWcXXqOLzr8OHnzmEEnCNcrYyBiViz/view?usp=sharing'
                });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1FBLU2ZGeVOO71zwqnPiWtOH_ibgCosId/view?usp=sharing'
                });
            }
        });
    }
    backbtn() {
        this.router.navigate(['/ballot-complete']);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n}\n\n.Required-div {\n  padding-left: 0;\n}\n\n.Required-div ion-input {\n  border: 1px solid black;\n  width: 93%;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-top: 20px;\n  font-weight: 600;\n  color: #000000;\n  margin-top: 30px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.camera-div-upr {\n  height: 30%;\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n}\n\n.camera-div-upr .div1 {\n  height: 70%;\n  width: 30%;\n  margin: 3%;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n}\n\n.camera-div {\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n  height: 30%;\n}\n\n.camera-div .ic-crm-div {\n  font-size: 100px;\n  color: #00000085;\n}\n\n.bottom-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 70px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXJldHVybi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0U7RUFDRSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFFRTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNOOztBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUNFO0VBQ0UsZUFBQTtBQUVKOztBQURJO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBR047O0FBQUU7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFHTjs7QUFERTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGSTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUlOOztBQUFFO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUdKOztBQURJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUdOOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUVKOztBQUNDO0VBQ0QsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFQSIsImZpbGUiOiJwcmludC1yZXR1cm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcclxuICAgIC0tcGFkZGluZy1zdGFydDogMjBweDtcclxuICAgIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZ0ci10cC10ZXh0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAubmV4dC1idG4ge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIFxyXG4gIH1cclxuICBiIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICBpb24tbGFiZWwge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICB9XHJcblxyXG4gIC5SZXF1aXJlZC1kaXYge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgaW9uLWlucHV0IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgIHdpZHRoOiA5MyU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmljLWNvbHtcclxuICAgICAgcGFkZGluZzogMTBweCAwIDFweDtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuICAuY2FtZXJhLWRpdi11cHIge1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG5cclxuICAgIC5kaXYxIHtcclxuICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgIG1hcmdpbjogMyU7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhbWVyYS1kaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIGhlaWdodDogMzAlO1xyXG4gIFxyXG4gICAgLmljLWNybS1kaXYge1xyXG4gICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICBjb2xvcjogIzAwMDAwMDg1O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJvdHRvbS1kaXYtdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcblxyXG4gIC5jZW4tZGl2LXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuXHJcbiBpe1xyXG5mb250LXNpemU6IDEzcHg7XHJcbmZvbnQtd2VpZ2h0OiAxMDA7XHJcbmNvbG9yOiAjMDAwMDAwN2E7XHJcbn1cclxuICAiXX0= */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <!-- <ion-grid class=\"ion-no-padding mt60\">\r\n    <ion-row class=\"mt100 ion-text-center\">\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"openPDF(precinctNum)\" class=\"main-btn-style\" color=\"primary\">Print Ballot</ion-button>\r\n        <ion-button (click)=\"openPDF2(precinctNum)\" class=\"main-btn-style\" color=\"primary\">Print Affidavit</ion-button>\r\n        <ion-button (click)=\"openXML(precinctNum)\" class=\"main-btn-style\" color=\"secondary\">Print Xml</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid> -->\r\n  <div class=\"list-question\">\r\n    <p>{{results.print_return}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\" (click)=\"openPDF(precinctNum)\">\r\n    <p>{{results.bpp}}</p>\r\n    <ion-icon name=\"documents-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"bottom-div-text\" (click)=\"openPDF2(precinctNum)\">\r\n    <p>{{results.app}}</p>\r\n    <ion-icon name=\"document-outline\"></ion-icon>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\" backbtn()\">\r\n          {{results.back}}\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"chevron-back-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"goToFinish()\">\r\n          {{results.print}}\r\n\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon> </ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_print-return_print-return_module_ts.js.map