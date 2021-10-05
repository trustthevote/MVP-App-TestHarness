(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_howditgo_howditgo_module_ts"],{

/***/ 73386:
/*!***********************************************************!*\
  !*** ./src/app/pages/howditgo/howditgo-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowditgoPageRoutingModule": () => (/* binding */ HowditgoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _howditgo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howditgo.page */ 53587);




const routes = [
    {
        path: '',
        component: _howditgo_page__WEBPACK_IMPORTED_MODULE_0__.HowditgoPage
    }
];
let HowditgoPageRoutingModule = class HowditgoPageRoutingModule {
};
HowditgoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HowditgoPageRoutingModule);



/***/ }),

/***/ 1086:
/*!***************************************************!*\
  !*** ./src/app/pages/howditgo/howditgo.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowditgoPageModule": () => (/* binding */ HowditgoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _howditgo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./howditgo-routing.module */ 73386);
/* harmony import */ var _howditgo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howditgo.page */ 53587);







let HowditgoPageModule = class HowditgoPageModule {
};
HowditgoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _howditgo_routing_module__WEBPACK_IMPORTED_MODULE_0__.HowditgoPageRoutingModule
        ],
        declarations: [_howditgo_page__WEBPACK_IMPORTED_MODULE_1__.HowditgoPage]
    })
], HowditgoPageModule);



/***/ }),

/***/ 53587:
/*!*************************************************!*\
  !*** ./src/app/pages/howditgo/howditgo.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HowditgoPage": () => (/* binding */ HowditgoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_howditgo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./howditgo.page.html */ 83642);
/* harmony import */ var _howditgo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./howditgo.page.scss */ 61693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let HowditgoPage = class HowditgoPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['howitdo_page'];
        });
    }
    Continuebtn() {
        this.route.navigate(['/intro']);
    }
    backbtn() {
        this.route.navigate(['/ballot-fingerprint']);
    }
};
HowditgoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HowditgoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-howditgo',
        template: _raw_loader_howditgo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_howditgo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HowditgoPage);



/***/ }),

/***/ 61693:
/*!***************************************************!*\
  !*** ./src/app/pages/howditgo/howditgo.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  --padding-bottom: 20px;\n  --padding-start: 20px;\n  --padding-top: 20px;\n}\n\np {\n  font-size: 30px;\n  font-weight: 700;\n  border-bottom: 1px solid;\n  padding-bottom: 12px;\n  margin-bottom: 0px;\n  margin-top: 10px;\n  color: black;\n}\n\n.cir-icon {\n  font-size: 65px;\n  padding-top: 10%;\n}\n\nion-toolbar {\n  padding: 10px;\n}\n\n.para-center {\n  font-size: 23px;\n  text-align: start;\n  font-weight: 600;\n  padding-right: 20px;\n}\n\n.dov-div {\n  background: white;\n  border: 1px solid black;\n  width: 93%;\n  margin-top: 15px;\n  border-radius: 5px;\n  font-size: 14px;\n  color: #000000;\n}\n\n.sec-para {\n  text-align: start;\n  font-size: 23px;\n  font-weight: 600;\n  padding-top: 20px;\n}\n\n.link-last-para {\n  text-align: start;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n.thanks-sec {\n  text-align: start;\n  font-size: 23px;\n  padding-top: 20px;\n  font-weight: 600;\n}\n\n.mid {\n  font-size: 23px;\n  font-weight: 600;\n  text-align: start;\n  padding-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvd2RpdGdvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FBS0Y7O0FBSEE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFNRjs7QUFKQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPRjs7QUFMQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFRRiIsImZpbGUiOiJob3dkaXRnby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XHJcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4uY2lyLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogNjVweDtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcbi5wYXJhLWNlbnRlciB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uZG92LWRpdiB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgd2lkdGg6IDkzJTtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuLnNlYy1wYXJhIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBmb250LXNpemU6IDIzcHg7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuLmxpbmstbGFzdC1wYXJhIHtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4udGhhbmtzLXNlYyB7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLm1pZCB7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 83642:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/howditgo/howditgo.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content padding>\r\n  <p class=\"top-text\">{{results.heading}}</p>\r\n  <div style=\"text-align: center; padding-top: 25px\">\r\n    <div class=\"para-center\">{{results.para}}</div>\r\n    <div class=\"mid\">{{results.para_center}}</div>\r\n    <div class=\"sec-para\">{{results.heading_link}}<br />{{results.btr}}</div>\r\n    <div class=\"link-last-para\"><a href=\"\">{{results.link}}</a></div>\r\n    <div class=\"thanks-sec\">{{results.thanks}}</div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" style=\"text-align: start\">\r\n      </ion-col>\r\n      <ion-col size=\"6\" style=\"text-align: end\">\r\n        <ion-button color=\"dark\" (click)=\"Continuebtn()\">\r\n          {{results.next}}\r\n          <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_howditgo_howditgo_module_ts.js.map