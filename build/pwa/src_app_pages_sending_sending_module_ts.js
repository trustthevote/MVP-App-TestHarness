(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_sending_sending_module_ts"],{

/***/ 706:
/*!*********************************************************!*\
  !*** ./src/app/pages/sending/sending-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingPageRoutingModule": () => (/* binding */ SendingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _sending_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending.page */ 5191);




const routes = [
    {
        path: '',
        component: _sending_page__WEBPACK_IMPORTED_MODULE_0__.SendingPage
    }
];
let SendingPageRoutingModule = class SendingPageRoutingModule {
};
SendingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SendingPageRoutingModule);



/***/ }),

/***/ 2410:
/*!*************************************************!*\
  !*** ./src/app/pages/sending/sending.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingPageModule": () => (/* binding */ SendingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _sending_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sending-routing.module */ 706);
/* harmony import */ var _sending_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending.page */ 5191);







let SendingPageModule = class SendingPageModule {
};
SendingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _sending_routing_module__WEBPACK_IMPORTED_MODULE_0__.SendingPageRoutingModule
        ],
        declarations: [_sending_page__WEBPACK_IMPORTED_MODULE_1__.SendingPage]
    })
], SendingPageModule);



/***/ }),

/***/ 5191:
/*!***********************************************!*\
  !*** ./src/app/pages/sending/sending.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingPage": () => (/* binding */ SendingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_sending_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./sending.page.html */ 1101);
/* harmony import */ var _sending_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sending.page.scss */ 6268);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let SendingPage = class SendingPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['sending_page'];
        });
    }
    confirm() {
        this.route.navigate(['/check']);
    }
    backbtn() {
        this.route.navigate(['/ballot-fingerprint']);
    }
};
SendingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SendingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sending',
        template: _raw_loader_sending_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_sending_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SendingPage);



/***/ }),

/***/ 6268:
/*!*************************************************!*\
  !*** ./src/app/pages/sending/sending.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".print-div {\n  text-align: center;\n  padding-top: 75%;\n}\n\np {\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.next-btn {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBRUo7O0FBRUU7RUFDRSxlQUFBO0FBQ0oiLCJmaWxlIjoic2VuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJpbnQtZGl2e1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDc1JTtcclxufVxyXG5we1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbiAgLm5leHQtYnRuIHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 1101:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sending/sending.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"print-div\">\r\n    <!-- <ion-icon name=\"rocket-outline\" (click)=\"confirm()\" style=\"  font-size: 70px;\"></ion-icon> -->\r\n    <ion-icon\r\n      name=\"navigate-outline\"\r\n      (click)=\"confirm()\"\r\n      style=\"font-size: 70px\"\r\n    ></ion-icon>\r\n    <p>{{results.sending}}</p>\r\n  </div>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\">\r\n        <ion-button color=\"dark\" (click)=\" backbtn()\">\r\n          {{results.back}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"confirm()\">\r\n          {{results.next}}\r\n\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sending_sending_module_ts.js.map