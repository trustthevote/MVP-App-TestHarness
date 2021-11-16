(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_check_network_request00001_error_check-network_module_ts"],{

/***/ 97860:
/*!****************************************************************************************!*\
  !*** ./src/app/pages/check_network_request00001_error/check-network-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkPageRoutingModule": () => (/* binding */ CheckNetworkPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _check_network_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-network.page */ 37921);




const routes = [
    {
        path: '',
        component: _check_network_page__WEBPACK_IMPORTED_MODULE_0__.CheckNetworkPage,
    },
];
let CheckNetworkPageRoutingModule = class CheckNetworkPageRoutingModule {
};
CheckNetworkPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckNetworkPageRoutingModule);



/***/ }),

/***/ 6316:
/*!********************************************************************************!*\
  !*** ./src/app/pages/check_network_request00001_error/check-network.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkPageModule": () => (/* binding */ CheckNetworkPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _check_network_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-network-routing.module */ 97860);
/* harmony import */ var _check_network_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-network.page */ 37921);







let CheckNetworkPageModule = class CheckNetworkPageModule {
};
CheckNetworkPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_network_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckNetworkPageRoutingModule,
        ],
        declarations: [_check_network_page__WEBPACK_IMPORTED_MODULE_1__.CheckNetworkPage],
    })
], CheckNetworkPageModule);



/***/ }),

/***/ 37921:
/*!******************************************************************************!*\
  !*** ./src/app/pages/check_network_request00001_error/check-network.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckNetworkPage": () => (/* binding */ CheckNetworkPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_check_network_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check-network.page.html */ 44294);
/* harmony import */ var _check_network_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-network.page.scss */ 78368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CheckNetworkPage = class CheckNetworkPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        this.userObject = JSON.parse(localStorage.getItem('userNameInfo'));
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].check_network_request00001_error;
        });
        if (this.userObject.lastname !== undefined) {
            const lastName = this.userObject.lastname.charAt(0).toUpperCase() +
                this.userObject.lastname.slice(1);
            if (lastName === 'OOOO') {
            }
        }
    }
    confirm() {
        this.route.navigate(['/request-access-code']);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
CheckNetworkPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckNetworkPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-check-network',
        template: _raw_loader_check_network_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_network_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckNetworkPage);



/***/ }),

/***/ 78368:
/*!********************************************************************************!*\
  !*** ./src/app/pages/check_network_request00001_error/check-network.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLW5ldHdvcmsucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFFRiIsImZpbGUiOiJjaGVjay1uZXR3b3JrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG59XG4ubGlzdC1xdWVzdGlvbiB7XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbi5uZXh0LWJ0biB7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbnAge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 44294:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check_network_request00001_error/check-network.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <p>{{results.first_para}}</p>\n\n  <p>{{results.sec_para}}</p>\n\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.rbtn}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <ion-button color=\"dark\" (click)=\"confirm()\">\n          {{results.try_again}}\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn   ()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check_network_request00001_error_check-network_module_ts.js.map