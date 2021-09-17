(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_network-error-access12_network-error-access12_module_ts"],{

/***/ 98122:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/network-error-access12/network-error-access12-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorAccess12PageRoutingModule": () => (/* binding */ NetworkErrorAccess12PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _network_error_access12_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-error-access12.page */ 95741);




const routes = [
    {
        path: '',
        component: _network_error_access12_page__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorAccess12Page
    }
];
let NetworkErrorAccess12PageRoutingModule = class NetworkErrorAccess12PageRoutingModule {
};
NetworkErrorAccess12PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NetworkErrorAccess12PageRoutingModule);



/***/ }),

/***/ 43554:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/network-error-access12/network-error-access12.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorAccess12PageModule": () => (/* binding */ NetworkErrorAccess12PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _network_error_access12_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./network-error-access12-routing.module */ 98122);
/* harmony import */ var _network_error_access12_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-access12.page */ 95741);







let NetworkErrorAccess12PageModule = class NetworkErrorAccess12PageModule {
};
NetworkErrorAccess12PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _network_error_access12_routing_module__WEBPACK_IMPORTED_MODULE_0__.NetworkErrorAccess12PageRoutingModule
        ],
        declarations: [_network_error_access12_page__WEBPACK_IMPORTED_MODULE_1__.NetworkErrorAccess12Page]
    })
], NetworkErrorAccess12PageModule);



/***/ }),

/***/ 95741:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/network-error-access12/network-error-access12.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkErrorAccess12Page": () => (/* binding */ NetworkErrorAccess12Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_network_error_access12_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./network-error-access12.page.html */ 21849);
/* harmony import */ var _network_error_access12_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./network-error-access12.page.scss */ 72251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let NetworkErrorAccess12Page = class NetworkErrorAccess12Page {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['network_error_access_12_page'];
        });
    }
    confirm() {
        this.route.navigate(['/access-code', {
                t: new Date().getTime()
            }]);
    }
    rpbtn() {
        this.route.navigate(['/tobecontinue']);
    }
    printbtn() {
        this.route.navigate(['/print-return']);
    }
};
NetworkErrorAccess12Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NetworkErrorAccess12Page = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-network-error-access12',
        template: _raw_loader_network_error_access12_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_network_error_access12_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NetworkErrorAccess12Page);



/***/ }),

/***/ 72251:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/network-error-access12/network-error-access12.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 10px;\n  --padding-end: 0px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\n.list-question p {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.next-btn {\n  text-align: end;\n}\n\np {\n  font-size: 24px;\n  font-weight: 700;\n  color: #000000;\n  padding-right: 20px;\n  padding-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldHdvcmstZXJyb3ItYWNjZXNzMTIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNOOztBQUVFO0VBQ0UsZUFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFDSiIsImZpbGUiOiJuZXR3b3JrLWVycm9yLWFjY2VzczEyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIH1cclxuICAubGlzdC1xdWVzdGlvbiB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuXHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ 21849:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/network-error-access12/network-error-access12.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n  <p>{{results.first_para}}</p>\n\n  <p>{{results.sec_para}}</p>\n\n  <ion-button color=\"dark\" (click)=\"rpbtn()\">\n    {{results.rbtn}}\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\n  </ion-button>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col size=\"6\" class=\"back-btn\">\n        <ion-button color=\"dark\" (click)=\"confirm()\">\n          {{results.try_again}}\n          <ion-icon slot=\"end\" name=\"sync-outline\"></ion-icon>\n          <!-- <ion-icon  name=\"chevron-back-outline\"></ion-icon> -->\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"6\" class=\"next-btn\">\n        <ion-button color=\"dark\" (click)=\"printbtn   ()\">\n          {{results.print}}\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_network-error-access12_network-error-access12_module_ts.js.map