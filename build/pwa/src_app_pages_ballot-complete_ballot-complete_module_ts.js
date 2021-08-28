(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_ballot-complete_ballot-complete_module_ts"],{

/***/ 1658:
/*!*************************************************************************!*\
  !*** ./src/app/pages/ballot-complete/ballot-complete-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotCompletePageRoutingModule": () => (/* binding */ BallotCompletePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ballot_complete_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-complete.page */ 9808);




const routes = [
    {
        path: '',
        component: _ballot_complete_page__WEBPACK_IMPORTED_MODULE_0__.BallotCompletePage
    }
];
let BallotCompletePageRoutingModule = class BallotCompletePageRoutingModule {
};
BallotCompletePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], BallotCompletePageRoutingModule);



/***/ }),

/***/ 5919:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ballot-complete/ballot-complete.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotCompletePageModule": () => (/* binding */ BallotCompletePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ballot_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ballot-complete-routing.module */ 1658);
/* harmony import */ var _ballot_complete_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-complete.page */ 9808);







let BallotCompletePageModule = class BallotCompletePageModule {
};
BallotCompletePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ballot_complete_routing_module__WEBPACK_IMPORTED_MODULE_0__.BallotCompletePageRoutingModule
        ],
        declarations: [_ballot_complete_page__WEBPACK_IMPORTED_MODULE_1__.BallotCompletePage]
    })
], BallotCompletePageModule);



/***/ }),

/***/ 9808:
/*!***************************************************************!*\
  !*** ./src/app/pages/ballot-complete/ballot-complete.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BallotCompletePage": () => (/* binding */ BallotCompletePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_ballot_complete_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./ballot-complete.page.html */ 6418);
/* harmony import */ var _ballot_complete_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ballot-complete.page.scss */ 2415);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/browser */ 8427);






let BallotCompletePage = class BallotCompletePage {
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
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            // console.log("json", json);
            this.results = json[0]['ballot_comp'];
            // console.log("results: ", this.results); 
        });
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
        this.router.navigate(['print']);
    }
    openPDF(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1Wrk9xhJkMFVEqtBBJgw2qZOTS9nqFxwk/view?usp=sharing'
                });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1cV-4autG5EmSzThK82-0WWbFRv2RnkuR/view?usp=sharing'
                });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/16A2tzWcmvLQzXBdHordJ0OZbT2li2I8j/view?usp=sharing'
                });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1C6TO44gUkkljSyNLXdV_e1X7wPvEc3eA/view?usp=sharing'
                });
            }
        });
    }
    openPDF2(precinctNum) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (precinctNum === 1) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1kn2xt5WxYzTn-NsbPc1X3BMqI47rjHDP/view?usp=sharing'
                });
            }
            else if (precinctNum === 2) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1BSmmTchFQ3X8MD4wEmsIStA2hV97nRS1/view?usp=sharing'
                });
            }
            else if (precinctNum === 3) {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/1oB_xaVUPwK6oE_9Np_iTymAU-lV2urJT/view?usp=sharing'
                });
            }
            else {
                yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_2__.Browser.open({
                    url: 'https://drive.google.com/file/d/160p-8lKOlIWXffnXZGR3Pf1gXf6mQYQW/view?usp=sharing'
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
    Physicalret() {
        this.router.navigate(['/print-return']);
    }
    Digitalret() {
        this.router.navigate(['/access-code', {
                t: new Date().getTime()
            }]);
    }
};
BallotCompletePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
BallotCompletePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-ballot-complete',
        template: _raw_loader_ballot_complete_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_ballot_complete_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BallotCompletePage);



/***/ }),

/***/ 2415:
/*!*****************************************************************!*\
  !*** ./src/app/pages/ballot-complete/ballot-complete.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 24px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 15px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n  text-align: center;\n  color: black;\n  padding-right: 20px;\n}\n\nion-label {\n  font-weight: 500;\n}\n\nion-item {\n  margin-top: 15px;\n}\n\n.ftr-tp-text {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.back-btn {\n  padding-left: 24px;\n}\n\n.next-btn {\n  text-align: end;\n  padding-right: 10px;\n}\n\nb {\n  font-size: 22px;\n  color: black;\n  line-height: 50px;\n}\n\nion-label {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  margin-bottom: 10px;\n  margin-top: 0;\n}\n\n.Required-div {\n  padding-left: 0;\n}\n\n.Required-div ion-input {\n  border: 1px solid black;\n  width: 93%;\n  margin-bottom: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  margin-top: 20px;\n  font-weight: 600;\n  color: #000000;\n  margin-top: 30px;\n}\n\n.ic-col {\n  padding: 10px 0 1px;\n  font-size: 26px;\n}\n\n.camera-div-upr {\n  height: 30%;\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n}\n\n.camera-div-upr .div1 {\n  height: 70%;\n  width: 30%;\n  margin: 3%;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n}\n\n.camera-div {\n  text-align: center;\n  border: 1px solid #00000069;\n  margin-right: 22px;\n  border-radius: 10px;\n  margin-top: 0px;\n  height: 30%;\n}\n\n.camera-div .ic-crm-div {\n  font-size: 100px;\n  color: #00000085;\n}\n\n.bottom-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 85px;\n}\n\n.upr-text {\n  font-size: 29px;\n  font-weight: 700;\n  text-align: center;\n  padding-right: 20px;\n  padding-bottom: 9px;\n}\n\n.cen-div {\n  font-size: 21px;\n  text-align: center;\n  padding-right: 20px;\n  padding-bottom: 9px;\n}\n\n.cen-div-text {\n  text-align: center;\n  margin-right: 20px;\n  font-size: 85px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\n\ni {\n  font-size: 16px;\n  color: gray;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbGxvdC1jb21wbGV0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBQUo7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGtCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQU1KOztBQUpBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU9GOztBQUpBO0VBQ0UsZUFBQTtBQU9GOztBQU5FO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBUUo7O0FBTEE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFRSjs7QUFOQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFTRjs7QUFSRTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQVVGOztBQVJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQVVKOztBQVBBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFVRjs7QUFQQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVVGOztBQVJBO0VBQ0UsZUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQVdKOztBQVRBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBWUY7O0FBVkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBYUYiLCJmaWxlIjoiYmFsbG90LWNvbXBsZXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmxpc3QtcXVlc3Rpb24ge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbmlvbi1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbi5mdHItdHAtdGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmJhY2stYnRuIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbn1cclxuLm5leHQtYnRuIHtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5iIHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLlJlcXVpcmVkLWRpdiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGlvbi1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHdpZHRoOiA5MyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG59XHJcbi5pYy1jb2x7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMXB4O1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcbi5jYW1lcmEtZGl2LXVwciB7XHJcbiAgaGVpZ2h0OiAzMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcclxuICBtYXJnaW4tcmlnaHQ6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgLmRpdjEge1xyXG4gICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAzJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA2OTtcclxuICAgIG1hcmdpbi1yaWdodDogMjJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5jYW1lcmEtZGl2IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDY5O1xyXG4gIG1hcmdpbi1yaWdodDogMjJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBoZWlnaHQ6IDMwJTtcclxuXHJcbiAgLmljLWNybS1kaXYge1xyXG4gICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwODU7XHJcbiAgfVxyXG59XHJcbi5ib3R0b20tZGl2LXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDg1cHg7XHJcblxyXG59XHJcbi51cHItdGV4dHtcclxuICBmb250LXNpemU6IDI5cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG59XHJcbi5jZW4tZGl2e1xyXG4gIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG59XHJcbi5jZW4tZGl2LXRleHR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBmb250LXNpemU6IDg1cHg7XHJcbiAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbn1cclxuaXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 6418:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ballot-complete/ballot-complete.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-content class=\"ion-padding\">\r\n  <div class=\"ion-text-center mt60\">\r\n    <ion-card-title>Thank you {{ paramData?.firstname }}</ion-card-title>\r\n  </div>\r\n\r\n  <div class=\"ion-text-center sub-title\">\r\n    <p>Your Ballot is Complete</p>\r\n  </div>\r\n\r\n  <div class=\"ion-text-center mt60\">\r\n    <p>Your absentee ballot and voter statement documents are ready\r\n      for printing.</p>\r\n  </div>\r\n\r\n  <ion-grid class=\"ion-no-padding mt60\">\r\n    <ion-row class=\"mt100 ion-text-center\">\r\n      <ion-col size=\"12\">\r\n        <ion-button (click)=\"openPDF(precinctNum)\" class=\"main-btn-style\" color=\"primary\">Print Ballot</ion-button>\r\n        <ion-button (click)=\"openPDF2(precinctNum)\" class=\"main-btn-style\" color=\"primary\">Print Affidavit</ion-button>\r\n        <ion-button (click)=\"openXML(precinctNum)\" class=\"main-btn-style\" color=\"secondary\">Print Xml</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"mt30 ion-text-center\">\r\n    <ion-button (click)=\"goToFinish()\" class=\"main-btn-style\" color=\"primary\" fill=\"clear\">Next</ion-button>\r\n  </div>\r\n</ion-content> -->\r\n<ion-content>\r\n  <div class=\"list-question\">\r\n    <div class=\"upr-text\">{{results.thank_you}} {{ paramData?.firstname }}</div>\r\n    <div class=\"cen-div\">{{results.your_ballot_is_complete}}</div>\r\n    <p>{{results.choose_a_return}}</p>\r\n  </div>\r\n  <div class=\"cen-div-text\" (click)=\"Physicalret()\">\r\n    <p>\r\n      {{results.physical_return}} <br />\r\n      <i>{{results.requires_printer}}</i>\r\n    </p>\r\n\r\n    <ion-icon name=\"archive-outline\"></ion-icon>\r\n  </div>\r\n  <div class=\"bottom-div-text\" (click)=\"Digitalret()\">\r\n    <p>{{results.online_ballot_return}}</p>\r\n    <ion-icon name=\"tv-outline\"></ion-icon>\r\n  </div>\r\n</ion-content>\r\n<!-- <ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\">\r\n          Back\r\n          <ion-icon\r\n            slot=\"start\"\r\n            name=\"chevron-back-outline\"\r\n          ></ion-icon> </ion-button\r\n      ></ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" >\r\n          Next\r\n \r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon> </ion-button\r\n      ></ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer> -->\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_ballot-complete_ballot-complete_module_ts.js.map