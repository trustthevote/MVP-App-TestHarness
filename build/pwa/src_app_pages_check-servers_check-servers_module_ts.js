(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_check-servers_check-servers_module_ts"],{

/***/ 63214:
/*!*********************************************************************!*\
  !*** ./src/app/pages/check-servers/check-servers-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckServersPageRoutingModule": () => (/* binding */ CheckServersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _check_servers_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-servers.page */ 96006);




const routes = [
    {
        path: '',
        component: _check_servers_page__WEBPACK_IMPORTED_MODULE_0__.CheckServersPage
    }
];
let CheckServersPageRoutingModule = class CheckServersPageRoutingModule {
};
CheckServersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckServersPageRoutingModule);



/***/ }),

/***/ 51458:
/*!*************************************************************!*\
  !*** ./src/app/pages/check-servers/check-servers.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckServersPageModule": () => (/* binding */ CheckServersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _check_servers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-servers-routing.module */ 63214);
/* harmony import */ var _check_servers_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-servers.page */ 96006);







let CheckServersPageModule = class CheckServersPageModule {
};
CheckServersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_servers_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckServersPageRoutingModule
        ],
        declarations: [_check_servers_page__WEBPACK_IMPORTED_MODULE_1__.CheckServersPage]
    })
], CheckServersPageModule);



/***/ }),

/***/ 96006:
/*!***********************************************************!*\
  !*** ./src/app/pages/check-servers/check-servers.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckServersPage": () => (/* binding */ CheckServersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_check_servers_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./check-servers.page.html */ 55223);
/* harmony import */ var _check_servers_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-servers.page.scss */ 34637);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let CheckServersPage = class CheckServersPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['check_server_page'];
        });
    }
    confirm() {
        this.route.navigate(['/check']);
    }
};
CheckServersPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CheckServersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-check-servers',
        template: _raw_loader_check_servers_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_check_servers_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CheckServersPage);



/***/ }),

/***/ 34637:
/*!*************************************************************!*\
  !*** ./src/app/pages/check-servers/check-servers.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding: 20px;\n}\n\nion-toolbar {\n  padding-left: 20px;\n  --padding-bottom: 20px;\n}\n\n.link {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrLXNlcnZlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdGIiwiZmlsZSI6ImNoZWNrLXNlcnZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlcXVpcmVkLWRpdiB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 55223:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check-servers/check-servers.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"Required-div\">\r\n    <p>\r\n      {{results.text}}\r\n      <br />\r\n      <br />\r\n      {{results.text1}}\r\n      <br />\r\n      <br />\r\n      {{results.text2}}\r\n      <br />\r\n    </p>\r\n  </div>\r\n  <p class=\"link\">{{results.link}}</p>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" (click)=\"confirm()\">\r\n      {{results.try_again}}\r\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check-servers_check-servers_module_ts.js.map