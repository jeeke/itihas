(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contactus-contactus-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"openFirst()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Contact Us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"ion-text-center\">\n    <!-- <h4>Contact Us</h4> -->\n    <ion-avatar>\n      <img  src=\"assets/images/forms.png\">\n    </ion-avatar>\n  </div>\n \n  <div>\n    <ion-card>\n      <!-- <ion-card-header>\n        <ion-card-subtitle class=\"ion-text-center\">Contact Form</ion-card-subtitle>\n      </ion-card-header> -->\n    \n      <ion-card-content>\n        <form>\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Name</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input type=\"email\" required></ion-input>\n          </ion-item>\n      \n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Mobile</ion-label>\n            <ion-input type= tel></ion-input>\n          \n          </ion-item>\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Subject</ion-label>\n            <ion-input type=\"text\" required></ion-input>\n          </ion-item>\n          <ion-item lines=\"full\">\n            <ion-label position=\"floating\">Body</ion-label>\n            <ion-textarea type=\"text\" required></ion-textarea>\n          </ion-item>\n         \n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Submit</ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n  <div>\n    <ion-card>\n      <ion-card-content>\n        <p>For any assistance write us on\n           <a href=\"bharatsir@hotmail.com\" target=\"_top\"\n                 class=\"frontend-enhanced-title\">bharatsir@hotmail.com</a>  or contact us on <strong>+91 9820408217</strong></p>\n\n\n         <p> Alternate Payment options:</p>\n         <p> 1. Paytm / UPI-BHIM / Google Pay / PhonePe Make a payment using any of the above towards my mobile number +919820408217.\n        </p>\n         <p> 2. Bank transfer towards this account:</p>\n         <p> A/c Name: BHARAT ACADEMY. <strong> A/c No: 003805007099. IFSC: ICIC0000038. </strong>Bank: ICICI. A/c Type: Current Account.\n          International Students can make the payment on this link:\n               <a href=\"https://www.paypal.me/BharatAcharya\" target=\"_top\"\n                 class=\"frontend-enhanced-title\">https://www.paypal.me/BharatAcharya</a></p>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <ion-footer class=\"ion-f\">\n    <ion-toolbar>\n      <div class=\"ion-text-center\">Terms and condition | Privacy Policy | Refund Policy\n      </div>\n        <div class=\"ion-text-center\">\n        Copyright © Bharat Acharya Education 2020 All rights reserved.</div>\n    </ion-toolbar>\n  </ion-footer>\n\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/contactus/contactus-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/contactus/contactus-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ContactusPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageRoutingModule", function() { return ContactusPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");




const routes = [
    {
        path: '',
        component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactusPage"]
    }
];
let ContactusPageRoutingModule = class ContactusPageRoutingModule {
};
ContactusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactusPageRoutingModule);



/***/ }),

/***/ "./src/app/contactus/contactus.module.ts":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.module.ts ***!
  \***********************************************/
/*! exports provided: ContactusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPageModule", function() { return ContactusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contactus-routing.module */ "./src/app/contactus/contactus-routing.module.ts");
/* harmony import */ var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contactus.page */ "./src/app/contactus/contactus.page.ts");







let ContactusPageModule = class ContactusPageModule {
};
ContactusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactusPageRoutingModule"]
        ],
        declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactusPage"]]
    })
], ContactusPageModule);



/***/ }),

/***/ "./src/app/contactus/contactus.page.scss":
/*!***********************************************!*\
  !*** ./src/app/contactus/contactus.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ion-f {\n  --ion-background-color:#3171e0;\n  --ion-text-color:white;\n}\n\nion-avatar {\n  margin: 0px 0px 0px 47%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtBQUVKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWZ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiMzMTcxZTA7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOndoaXRlO1xyXG59XHJcbmlvbi1hdmF0YXJ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDQ3JTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contactus/contactus.page.ts":
/*!*********************************************!*\
  !*** ./src/app/contactus/contactus.page.ts ***!
  \*********************************************/
/*! exports provided: ContactusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusPage", function() { return ContactusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ContactusPage = class ContactusPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactusPage.ctorParameters = () => [];
ContactusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contactus.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contactus.page.scss */ "./src/app/contactus/contactus.page.scss")).default]
    })
], ContactusPage);



/***/ })

}]);
//# sourceMappingURL=contactus-contactus-module.js.map