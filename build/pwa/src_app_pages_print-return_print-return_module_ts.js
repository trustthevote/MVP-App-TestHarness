(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_print-return_print-return_module_ts"],{

/***/ 40978:
/*!*******************************************************************!*\
  !*** ./src/app/pages/print-return/print-return-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReturnPageRoutingModule": () => (/* binding */ PrintReturnPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _print_return_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-return.page */ 72024);




const routes = [
    {
        path: '',
        component: _print_return_page__WEBPACK_IMPORTED_MODULE_0__.PrintReturnPage,
    },
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

/***/ 69249:
/*!***********************************************************!*\
  !*** ./src/app/pages/print-return/print-return.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReturnPageModule": () => (/* binding */ PrintReturnPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _print_return_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print-return-routing.module */ 40978);
/* harmony import */ var _print_return_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-return.page */ 72024);







let PrintReturnPageModule = class PrintReturnPageModule {
};
PrintReturnPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _print_return_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrintReturnPageRoutingModule,
        ],
        declarations: [_print_return_page__WEBPACK_IMPORTED_MODULE_1__.PrintReturnPage],
    })
], PrintReturnPageModule);



/***/ }),

/***/ 72024:
/*!*********************************************************!*\
  !*** ./src/app/pages/print-return/print-return.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintReturnPage": () => (/* binding */ PrintReturnPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_print_return_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./print-return.page.html */ 41290);
/* harmony import */ var _print_return_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print-return.page.scss */ 21795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 28427);
/* harmony import */ var src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api/voterartifacts.service */ 22130);







let PrintReturnPage = class PrintReturnPage {
    constructor(router, voterartifactsService) {
        this.router = router;
        this.voterartifactsService = voterartifactsService;
        this.results = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.paramData = this.router.getCurrentNavigation().extras.state.user;
        }
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].print_return_page;
        });
        if (this.userObject.lastname !== undefined) {
            const lastName = this.userObject.lastname.charAt(0).toUpperCase() +
                this.userObject.lastname.slice(1);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                console.log(precinctNum);
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1NjMf2sUwjTPH20jN4ajnWRZDvkobq9hR/view?usp=sharing ',
                });
            }
            else if (precinctNum === 2) {
                console.log(precinctNum);
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1FtiAIYsOdGoLSqXBEymGatkpR7heuSfI/view?usp=sharing  ',
                });
            }
            else if (precinctNum === 3) {
                console.log(precinctNum);
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1hKmtHmpJ2qP1atsDWfU2qtzDOn6kZ1ra/view?usp=sharing ',
                });
            }
            else {
                console.log(precinctNum);
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1KyESAe8iVuA61zEKhpN3DENtNOE6M8Lr/view?usp=sharing',
                });
            }
        });
    }
    openPDF2(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1A8v82etRnePtdF_IZDQmVb34Ss2tZu-f/view?usp=sharing',
                });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1Qbc4jLYFkDoljpR4g5NFJ4Wfc_S5--kc/view?usp=sharing',
                });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1j3wzbIfH8Sm4UAyij6N5pjHJVXTGWliJ/view?usp=sharing',
                });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1n3iNq1KVvr8YjKllMO6znArKtlDvvK-k/view?usp=sharing',
                });
            }
        });
    }
    backbtn() {
        this.router.navigate(['/ballot-complete']);
    }
};
PrintReturnPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_api_voterartifacts_service__WEBPACK_IMPORTED_MODULE_3__.VoterartifactsService }
];
PrintReturnPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-print-return',
        template: _raw_loader_print_return_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_print_return_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrintReturnPage);



/***/ }),

/***/ 21795:
/*!***********************************************************!*\
  !*** ./src/app/pages/print-return/print-return.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.next-btn {\n  text-align: end;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n}\n\n.Required-div {\n  padding-left: 0;\n}\n\n.Required-div ion-input {\n  border: 1px solid black;\n  width: 93%;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-top: 20px;\n  font-weight: 600;\n  color: #000000;\n  margin-top: 30px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.camera-div-upr {\n  height: 30%;\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n}\n\n.camera-div-upr .div1 {\n  height: 70%;\n  width: 30%;\n  margin: 3%;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n}\n\n.camera-div {\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n  height: 30%;\n}\n\n.camera-div .ic-crm-div {\n  font-size: 100px;\n  color: #00000085;\n}\n\n.bottom-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 70px;\n}\n\n.cen-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 70px;\n  padding-top: 60px;\n  padding-bottom: 40px;\n}\n\ni {\n  font-size: 13px;\n  font-weight: 100;\n  color: #0000007a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LXJldHVybi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQUZFO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtKOztBQURBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQUlGOztBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUdGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHRiIsImZpbGUiOiJwcmludC1yZXR1cm4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjBweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLmxpc3QtcXVlc3Rpb24ge1xuICBwIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG59XG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5mdHItdHAtdGV4dCB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuLm5leHQtYnRuIHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuYiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6IGJsYWNrO1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbmlvbi1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5wIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLlJlcXVpcmVkLWRpdiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgaW9uLWlucHV0IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogOTMlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufVxuLmljLWNvbCB7XG4gIHBhZGRpbmc6IDEwcHggMCAxcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbi5jYW1lcmEtZGl2LXVwciB7XG4gIGhlaWdodDogMzAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG5cbiAgLmRpdjEge1xuICAgIGhlaWdodDogNzAlO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luOiAzJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwNjk7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cbn1cblxuLmNhbWVyYS1kaXYge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcbiAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGhlaWdodDogMzAlO1xuXG4gIC5pYy1jcm0tZGl2IHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwODU7XG4gIH1cbn1cblxuLmJvdHRvbS1kaXYtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5jZW4tZGl2LXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbmkge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAjMDAwMDAwN2E7XG59XG4iXX0= */");

/***/ }),

/***/ 41290:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/print-return/print-return.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <div class=\"list-question\">\n    <p>{{results.print_return}}</p>\n  </div>\n  <div class=\"cen-div-text\" (click)=\"openPDF(precinctNum)\">\n    <p>{{results.bpp}}</p>\n    <ion-icon name=\"documents-outline\"></ion-icon>\n  </div>\n  <div class=\"bottom-div-text\" (click)=\"openPDF2(precinctNum)\">\n    <p>{{results.app}}</p>\n    <ion-icon name=\"document-outline\"></ion-icon>\n  </div>\n</ion-content>\n<ion-footer class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <ion-button color=\"dark\" (click)=\" backbtn()\">\n          {{results.back}}\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"goToFinish()\">\n          {{results.print}}\n\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_print-return_print-return_module_ts.js.map