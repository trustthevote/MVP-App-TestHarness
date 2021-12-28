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
        component: _server_commit_network_error_access_page__WEBPACK_IMPORTED_MODULE_0__.ServerCommitNetworkErrorAccessPage,
    },
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
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _server_commit_network_error_access_routing_module__WEBPACK_IMPORTED_MODULE_0__.ServerCommitNetworkErrorAccessPageRoutingModule],
        declarations: [_server_commit_network_error_access_page__WEBPACK_IMPORTED_MODULE_1__.ServerCommitNetworkErrorAccessPage],
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
        fetch('./assets/inputFile/input.json')
            .then((res) => res.json())
            .then((json) => {
            this.results = json[0].check_server_spoil00011_error;
        });
    }
    tryBtn() {
        this.route.navigate(['/access-code']);
    }
    nextprint() {
        this.route.navigate(['/print-return']);
    }
    reportbtn() {
        this.route.navigate(['/tobecontinue']);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".Required-div {\n  font-size: 24px;\n  font-weight: 600;\n  padding: 40px 20px 20px 20px;\n}\n\nion-toolbar {\n  padding-left: 15px;\n  --padding-bottom: 20px;\n}\n\n.link {\n  font-size: 20px;\n  font-weight: 600;\n  padding: 20px;\n  margin: 0;\n}\n\np {\n  margin: 0;\n}\n\n.next-btn {\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1jb21taXQtbmV0d29yay1lcnJvci1hY2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxTQUFBO0FBR0Y7O0FBREE7RUFDRSxTQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0FBS0YiLCJmaWxlIjoic2VydmVyLWNvbW1pdC1uZXR3b3JrLWVycm9yLWFjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuUmVxdWlyZWQtZGl2IHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHggMjBweCAyMHB4O1xyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4ubGluayB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxucCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5uZXh0LWJ0biB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcbiJdfQ== */");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"Required-div\">\r\n    <p>\r\n      {{results.text}}<br /><br />\r\n      {{results.text1}}<br />\r\n      <br />\r\n      {{results.test_pr}}<br /><br />\r\n      {{results.text2}} <br />\r\n    </p>\r\n  </div>\r\n  <ion-button style=\"padding-left: 20px\" color=\"dark\" (click)=\"reportbtn()\">\r\n    {{results.report_prob}}\r\n    <ion-icon slot=\"end\" name=\"help-outline\"></ion-icon>\r\n  </ion-button>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"back-btn\" style=\"text-align: start\">\r\n        <ion-button color=\"dark\" (click)=\"tryBtn()\">\r\n          {{results.try_again}}\r\n          <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"next-btn\">\r\n        <ion-button color=\"dark\" (click)=\"nextprint()\">\r\n          {{results.print}}\r\n          <ion-icon slot=\"end\" name=\"print-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_check_server_spoil00011_error_server-commit-network-error-access_module_ts.js.map