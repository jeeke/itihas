(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"openFirst()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Sign Up</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"bg-color\">\n  <ion-card class=\"mrg-1\" >\n    <ion-card-header>\n        <ion-avatar>\n          <img  src=\"assets/images/user.jpg\">\n        </ion-avatar>\n      <!-- <ion-card-title>Login</ion-card-title> -->\n      <!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n  Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>\n    </ion-card-header>\n  <form #signUpForm=\"ngForm\" (ngSubmit)=\"signUpForm.valid && onSubmit(signUpForm)\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">      \n        Name</ion-label>\n      <ion-input type=\"text\" #name=\"ngModel\" [(ngModel)]=\"user.name\" name=\"name\" \n      required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !name.valid }\" ></ion-input>\n      <div *ngIf=\"signUpForm.submitted && !name.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n      </div>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Phone</ion-label>\n      <ion-input type=\"tel\" #phone=\"ngModel\" [(ngModel)]=\"user.phone\" name=\"phone\" \n      required  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !phone.valid }\" ></ion-input>\n      <div *ngIf=\"signUpForm.submitted && !phone.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n      </div>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" name=\"email\" \n      required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !email.valid }\" ></ion-input>\n      <div *ngIf=\"signUpForm.submitted && email.errors\">\n        <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n      </div>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\" name=\"password\" \n      required   [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !password.valid }\" ></ion-input>\n      <div *ngIf=\"signUpForm.submitted && password.errors\">\n        <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n        <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n      </div>\n    </ion-item>\n    <ion-item lines=\"full\">   \n      <ion-label position=\"floating\">Country</ion-label>\n      <ion-input type=\"text\" #country=\"ngModel\" [(ngModel)]=\"user.country\" name=\"country\" \n      required   [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !country.valid }\" ></ion-input>\n      <div *ngIf=\"signUpForm.submitted && !country.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n      </div>\n    </ion-item>\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">City</ion-label>\n      <ion-input type=\"text\" #city=\"ngModel\" [(ngModel)]=\"user.city\" name=\"city\" \n      required   [ngClass]=\"{'invalid-textbox' :signUpForm.submitted && !city.valid }\" ></ion-input>\n      <div *ngIf=\"signUpForm.submitted && !city.valid\">\n        <label class=\"validation-message\">This field is required.</label>\n      </div>\n    </ion-item>\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Sign Up</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n  </ion-card>\n  <ion-footer class=\"ion-f\">\n    <ion-toolbar>\n      <div class=\"ion-text-center\">Terms and condition | Privacy Policy | Refund Policy\n      </div>\n        <div class=\"ion-text-center\">\n        Copyright © Bharat Acharya Education 2020 All rights reserved.</div>\n    </ion-toolbar>\n  </ion-footer>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/signup/signup-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/signup/signup-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function() { return SignupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");




const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
    }
];
let SignupPageRoutingModule = class SignupPageRoutingModule {
};
SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignupPageRoutingModule);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup-routing.module */ "./src/app/signup/signup-routing.module.ts");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");







let SignupPageModule = class SignupPageModule {
};
SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-sp {\n  padding-left: 5px;\n}\n\n.mrg-1 {\n  margin: 2% 18% 2% 18%;\n  box-shadow: 0px 1px 5px 2px;\n  --ion-background-color:white;\n}\n\n.bg-color {\n  --ion-background-color:rgb(202, 235, 248);\n}\n\n.ion-f {\n  --ion-background-color:#3171e0;\n  --ion-text-color:white;\n}\n\nion-avatar {\n  margin: 0px 0px 0px 47%;\n}\n\ninput[type=text].invalid-textbox, input[type=password].invalid-textbox {\n  border-bottom: 2px solid #ed5558;\n}\n\nlabel.validation-message {\n  color: #ed5558;\n}\n\n.alert {\n  padding: 20px;\n  background-color: #f44336;\n  /* Red */\n  color: white;\n  margin-bottom: 15px;\n}\n\n.success {\n  padding: 20px;\n  background-color: #249424;\n  /* Green */\n  color: white;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQUNKOztBQUNBO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBRUo7O0FBQUk7RUFDSSx5Q0FBQTtBQUdSOztBQURJO0VBQ0ksOEJBQUE7RUFDQSxzQkFBQTtBQUlSOztBQUZNO0VBQ0UsdUJBQUE7QUFLUjs7QUFITTtFQUNFLGdDQUFBO0FBTVI7O0FBSFE7RUFDRSxjQUFBO0FBTVY7O0FBSlE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMkIsUUFBQTtFQUMzQixZQUFBO0VBQ0EsbUJBQUE7QUFRVjs7QUFMUTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUEwQixVQUFBO0VBQzFCLFlBQUE7RUFDQSxtQkFBQTtBQVNWIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3B7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG4ubXJnLTF7XHJcbiAgICBtYXJnaW46IDIlIDE4JSAyJSAxOCU7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAycHg7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gICAgfVxyXG4gICAgLmJnLWNvbG9ye1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmdiKDIwMiwgMjM1LCAyNDgpO1xyXG4gICAgfVxyXG4gICAgLmlvbi1me1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzMxNzFlMDtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yOndoaXRlO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1hdmF0YXJ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCA0NyU7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXRbdHlwZT10ZXh0XS5pbnZhbGlkLXRleHRib3gsaW5wdXRbdHlwZT1wYXNzd29yZF0uaW52YWxpZC10ZXh0Ym94e1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWQ1NTU4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsYWJlbC52YWxpZGF0aW9uLW1lc3NhZ2V7XHJcbiAgICAgICAgICBjb2xvcjojZWQ1NTU4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWxlcnQge1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7IC8qIFJlZCAqL1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLnN1Y2Nlc3N7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjQ5NDI0OyAvKiBHcmVlbiAqL1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB9Il19 */");

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_cs_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cs-service.service */ "./src/app/services/cs-service.service.ts");



let SignupPage = class SignupPage {
    constructor(cs) {
        this.cs = cs;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.user = {};
    }
    onSubmit(form) {
        this.cs.Signup(form.value).subscribe(res => {
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.resetForm(form);
        }, err => {
            if (err.status === 422) {
                this.serverErrorMessages = err.error.join('<br/>');
            }
            else
                this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        });
    }
    resetForm(form) {
        this.user = {};
        form.resetForm();
        this.serverErrorMessages = '';
    }
    ngOnInit() {
    }
};
SignupPage.ctorParameters = () => [
    { type: _services_cs_service_service__WEBPACK_IMPORTED_MODULE_2__["CsServiceService"] }
];
SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")).default]
    })
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map