(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_check_server_spoil00011_error_server-commit-network-error-access_module_ts"],{

/***/ 22479:
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/check_server_spoil00011_error/server-commit-network-error-access-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerCommitNetworkErrorAccessPageRoutingModule": () => (/* binding */ ServerCommitNetworkErrorAccessPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _server_commit_network_error_access_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-commit-network-error-access.page */ 39295);




const routes = [
    {
        path: '',
        component: _server_commit_network_error_access_page__WEBPACK_IMPORTED_MODULE_0__.ServerCommitNetworkErrorAccessPage
    }
];
let ServerCommitNetworkErrorAccessPageRoutingModule = class ServerCommitNetworkErrorAccessPageRoutingModule {
};
ServerCommitNetworkErrorAccessPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ServerCommitNetworkErrorAccessPageRoutingModule);



/***/ }),

/***/ 80234:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/check_server_spoil00011_error/server-commit-network-error-access.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerCommitNetworkErrorAccessPageModule": () => (/* binding */ ServerCommitNetworkErrorAccessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _server_commit_network_error_access_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./server-commit-network-error-access-routing.module */ 22479);
/* harmony import */ var _server_commit_network_error_access_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-commit-network-error-access.page */ 39295);







let ServerCommitNetworkErrorAccessPageModule = class ServerCommitNetworkErrorAccessPageModule {
};
ServerCommitNetworkErrorAccessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _server_commit_network_error_access_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServerCommitNetworkErrorAccessPageRoutingModule
        ],
        declarations: [_server_commit_network_error_access_page__WEBPACK_IMPORTED_MODULE_1__.ServerCommitNetworkErrorAccessPage]
    })
], ServerCommitNetworkErrorAccessPageModule);



/***/ }),

/***/ 39295:
/*!************************************************************************************************!*\
  !*** ./src/app/pages/check_server_spoil00011_error/server-commit-network-error-access.page.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerCommitNetworkErrorAccessPage": () => (/* binding */ ServerCommitNetworkErrorAccessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_server_commit_network_error_access_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./server-commit-network-error-access.page.html */ 73570);
/* harmony import */ var _server_commit_network_error_access_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-commit-network-error-access.page.scss */ 18956);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);





let ServerCommitNetworkErrorAccessPage = class ServerCommitNetworkErrorAccessPage {
    constructor(route) {
        this.route = route;
        this.results = [];
    }
    ngOnInit() {
        fetch('./assets/inputFile/input.json').then(res => res.json()).then(json => {
            this.results = json[0]['server_commit_network_error_access_page'];
        });
    }
    tryBtn() {
        this.route.navigate(['/access-code']);
    }
};
ServerCommitNetworkErrorAccessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ServerCommitNetworkErrorAccessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-server-commit-network-error-access',
        template: _raw_loader_server_commit_network_error_access_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_server_commit_network_error_access_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ServerCommitNetworkErrorAccessPage);



/***/ }),

/***/ 18956:
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/check_server_spoil00011_error/server-commit-network-error-access.page.scss ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding: 20px;\n}\n\nion-toolbar {\n  padding-left: 20px;\n  --padding-bottom: 20px;\n}\n\n.link {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1jb21taXQtbmV0d29yay1lcnJvci1hY2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtBQUVKOztBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUdKIiwiZmlsZSI6InNlcnZlci1jb21taXQtbmV0d29yay1lcnJvci1hY2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlJlcXVpcmVkLWRpdiB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgaW9uLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmxpbmsge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ 73570:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/check_server_spoil00011_error/server-commit-network-error-access.page.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n<div class=\"Required-div\">\r\n    <p>{{results.text}}<br/><br/>\r\n      {{results.text1}}<br/> <br/>\r\n      {{results.test_pr}}<br><br>\r\n      {{results.text2}} <br/></p>\r\n</div>\r\n<p class=\"link\">{{results.link}}</p>\r\n</ion-content>\r\n<ion-footer class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-button color=\"dark\" (click)=\"tryBtn()\">\r\n      {{results.try_again}}\r\n      <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n    </ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check_server_spoil00011_error_server-commit-network-error-access_module_ts.js.map