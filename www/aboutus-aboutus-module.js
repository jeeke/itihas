(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["aboutus-aboutus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"openFirst()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>About Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <h4>About Us</h4>\n  </div>\n<ion-row>\n  <ion-col size=\"6\">\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle class=\"ion-text-center\">Company Address</ion-card-subtitle>\n    </ion-card-header>\n  \n    <ion-card-content>\n      <div>\n      <strong>Founder, Promoter:</strong>\n    </div>\n\n<div>\n                    <p>Bharat Acharya</p>\n                    </div>\n                    <div>\n\n                    <strong>A division of Bharat Academy Registered address:</strong>\n</div>\n<div>\n                    <p>1, Vagholkar Apts, RS Road, Chendani, Thane West. Pin: 400601.</p>\n                    </div>\n                    <div>\n\n                    <strong>Mobile:</strong>\n                    </div>\n                    <div>\n\n                    <p>9820408217</p>\n                    </div>\n                    <div>\n\n                    <strong>Landline</strong>\n                    </div>\n                    <div>\n\n                    <p>02225408086</p>\n                    </div>\n                    <div>\n                      <strong>Email</strong>\n\n                    </div>\n                    <div >\n                 <p>     <ion-icon name=\"send\"></ion-icon> &nbsp;\n\n                  <a href=\"mailto:bharatacharyaeducation@gmail.com\" target=\"_top\"\n                    class=\"frontend-enhanced-title\">bharatacharyaeducation@gmail.com</a></p>\n\n                    </div>\n    </ion-card-content>\n  </ion-card>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle class=\"ion-text-center\">Social links</ion-card-subtitle>\n      </ion-card-header>\n    \n      <ion-card-content>\n        <div>\n              <strong>Website:</strong>\n        </div>\n        <div>\n\n              <p>    <ion-icon name=\"browsers\"></ion-icon> &nbsp;\n\n                <a href=\"https://bharatacharyaeducation.com/\" target=\"_blank\"\n                    class=\"frontend-enhanced-title\">www.bharatacharyaeducation.com</a></p>\n        </div>\n\n   <div>\n              <strong>YouTube:</strong>\n            </div>\n            <div>\n              <p>  <ion-icon ios=\"logo-youtube\" md=\"logo-youtube\"></ion-icon>\n                <a\n                      href=\"https://www.youtube.com/c/bharatacharyaeducation\" target=\"_blank\"\n                      class=\"frontend-enhanced-title\"> &nbsp; Bharat Acharya Education</a></p>\n          </div>\n          <div>\n              <strong>Facebook:</strong>\n          </div>\n          <div>\n\n              <p>        <ion-icon ios=\"logo-facebook\" md=\"logo-facebook\"></ion-icon>\n                <a\n                      href=\"https://www.facebook.com/BharatAcharyaEducation\" target=\"_blank\"\n                      class=\"frontend-enhanced-title\"> &nbsp; Bharat Acharya Education</a></p>\n         </div>\n         <div>\n\n      <strong>Instagram:</strong>\n    </div>\n    <div>\n      <p>  <ion-icon ios=\"logo-instagram\" md=\"logo-instagram\"></ion-icon>\n        <a\n              href=\"https://www.instagram.com/bharatacharyaeducation\" target=\"_blank\"\n              class=\"frontend-enhanced-title\"> &nbsp; Bharat Acharya Education</a></p>\n            </div>\n            <div>\n      <strong>Developed By:</strong>\n    </div>\n    <div>\n      <p>   <ion-icon name=\"bug\"></ion-icon>\n\n        <a href=\"javascript:void()\"> <span class=\"frontend-enhanced-title\"> Shubham Gupta & Gyanesh Gupta</span></a>\n      </p>\n      </div>\n      </ion-card-content>\n    </ion-card>\n    </ion-col>\n</ion-row>\n\n \n\n</ion-content>\n<ion-footer class=\"ion-f\">\n  <ion-toolbar>\n    <div class=\"ion-text-center\">Terms and condition | Privacy Policy | Refund Policy\n    </div>\n      <div class=\"ion-text-center\">\n      Copyright © Bharat Acharya Education 2020 All rights reserved.</div>\n  </ion-toolbar>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/aboutus/aboutus-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/aboutus/aboutus-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AboutusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageRoutingModule", function() { return AboutusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");




const routes = [
    {
        path: '',
        component: _aboutus_page__WEBPACK_IMPORTED_MODULE_3__["AboutusPage"]
    }
];
let AboutusPageRoutingModule = class AboutusPageRoutingModule {
};
AboutusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AboutusPageRoutingModule);



/***/ }),

/***/ "./src/app/aboutus/aboutus.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.module.ts ***!
  \*******************************************/
/*! exports provided: AboutusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPageModule", function() { return AboutusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutus-routing.module */ "./src/app/aboutus/aboutus-routing.module.ts");
/* harmony import */ var _aboutus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./aboutus.page */ "./src/app/aboutus/aboutus.page.ts");







let AboutusPageModule = class AboutusPageModule {
};
AboutusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _aboutus_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutusPageRoutingModule"]
        ],
        declarations: [_aboutus_page__WEBPACK_IMPORTED_MODULE_6__["AboutusPage"]]
    })
], AboutusPageModule);



/***/ }),

/***/ "./src/app/aboutus/aboutus.page.scss":
/*!*******************************************!*\
  !*** ./src/app/aboutus/aboutus.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-f {\n  --ion-background-color:#3171e0;\n  --ion-text-color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0dXMvYWJvdXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWZ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzMTcxZTA7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOndoaXRlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/aboutus/aboutus.page.ts":
/*!*****************************************!*\
  !*** ./src/app/aboutus/aboutus.page.ts ***!
  \*****************************************/
/*! exports provided: AboutusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusPage", function() { return AboutusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutusPage = class AboutusPage {
    constructor() { }
    ngOnInit() {
    }
};
AboutusPage.ctorParameters = () => [];
AboutusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aboutus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aboutus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./aboutus.page.scss */ "./src/app/aboutus/aboutus.page.scss")).default]
    })
], AboutusPage);



/***/ })

}]);
//# sourceMappingURL=aboutus-aboutus-module.js.map