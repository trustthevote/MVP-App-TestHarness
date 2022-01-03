(self["webpackChunkMVP_Test_Harness"] = self["webpackChunkMVP_Test_Harness"] || []).push([["src_app_pages_test_test_module_ts"],{

/***/ 52413:
/*!*******************************************!*\
  !*** ./src/app/api/statuscode.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatuscodeService": () => (/* binding */ StatuscodeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let StatuscodeService = class StatuscodeService {
    constructor() { }
    statusCode(statusCode) {
        if (statusCode === 'VoterRecordNotFound') {
            return 'voter record not found';
        }
        else if (statusCode === 'NetworkError') {
            return 'network code';
        }
        else if (statusCode === 'CallOutOfOrderError') {
            return 'call out of order error';
        }
        else if (statusCode === 'AccessCodeExpired') {
            return 'access code expired';
        }
        else if (statusCode === 'AccessCodeInvalid') {
            return 'access code invalid';
        }
        else if (statusCode === 'CorruptCVRError') {
            return 'corrupt CVR';
        }
        else if (statusCode === 'ServerCommitmentError') {
            return 'server commitment error';
        }
        else if (statusCode === 'Initialized') {
            return 'initialized';
        }
        else if (statusCode === 'Uninitialized') {
            return 'uninitialized';
        }
        else if (statusCode === 'OK') {
            return 'ok';
        }
    }
};
StatuscodeService.ctorParameters = () => [];
StatuscodeService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root',
    })
], StatuscodeService);



/***/ }),

/***/ 44385:
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": () => (/* binding */ TestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 62941);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage,
    },
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestPageRoutingModule);



/***/ }),

/***/ 95011:
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": () => (/* binding */ TestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 44385);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 62941);







let TestPageModule = class TestPageModule {
};
TestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage],
    })
], TestPageModule);



/***/ }),

/***/ 62941:
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./test.page.html */ 2360);
/* harmony import */ var _test_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page.scss */ 66512);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/api/statuscode.service */ 52413);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);








let TestPage = class TestPage {
    constructor(alertctrl, router, statuscodeService) {
        this.alertctrl = alertctrl;
        this.router = router;
        this.statuscodeService = statuscodeService;
        this.results = [];
    }
    ngOnInit() {
        this.autoCall();
    }
    backbtn() {
        this.router.navigate(['tobecontinue']);
    }
    autoCall() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.initServerURL(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url);
            yield this.requestAccessCodeStatic();
            yield this.requestAccessCodeStaticT1();
            yield this.validateAccessCodeStatic();
            yield this.validateAccessCodeStatic3();
            yield this.validateAccessCodeStatic4();
            yield this.validateAccessCodeStatic5();
        });
    }
    initServerURL(bulletinBoardURL) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.serverURL = bulletinBoardURL;
            this.presentAlertEmpty('bulletinBoardURL', bulletinBoardURL);
        });
    }
    requestAccessCodeStatic() {
        return new Promise((resolve) => {
            const code = '00000';
            this.presentAlertEmpty(code, this.statuscodeService.statusCode('VoterRecordNotFound'));
            resolve(true);
        });
    }
    requestAccessCodeStaticT1() {
        return new Promise((resolve) => {
            const code = '00001';
            this.presentAlertEmpty(code, this.statuscodeService.statusCode('NetworkError'));
            resolve(true);
        });
    }
    validateAccessCodeStatic() {
        return new Promise((resolve) => {
            const code = '00002';
            this.presentAlertEmpty(code, this.statuscodeService.statusCode('CallOutOfOrderError'));
            resolve(true);
        });
    }
    validateAccessCodeStatic3() {
        return new Promise((resolve) => {
            const code = '00003';
            this.presentAlertEmpty(code, this.statuscodeService.statusCode('AccessCodeExpired'));
            resolve(true);
        });
    }
    validateAccessCodeStatic4() {
        return new Promise((resolve) => {
            const code = '00004';
            this.presentAlertEmpty(code, this.statuscodeService.statusCode('AccessCodeInvalid'));
            resolve(true);
        });
    }
    validateAccessCodeStatic5() {
        return new Promise((resolve) => {
            const code = '00005';
            this.presentAlertEmpty(code, this.statuscodeService.statusCode('NetworkError'));
            resolve(true);
        });
    }
    presentAlertEmpty(code, error) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertctrl.create({
                header: code,
                message: error,
                buttons: [
                    {
                        text: 'Okay',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => { },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
TestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_api_statuscode_service__WEBPACK_IMPORTED_MODULE_2__.StatuscodeService }
];
TestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-test',
        template: _raw_loader_test_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_test_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TestPage);



/***/ }),

/***/ 66512:
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 2360:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <ion-row>\r\n    <ion-col size=\"4\" class=\"back-btn\">\r\n      <ion-button color=\"dark\" (click)=\"backbtn()\">\r\n        Back\r\n        <ion-icon slot=\"start\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test_test_module_ts.js.map