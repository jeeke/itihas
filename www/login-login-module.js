(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button (click)=\"openFirst()\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"bg-color\">\n    <ion-card class=\"mrg-1\" >\n      <ion-card-header>\n        <ion-avatar>\n          <img  src=\"assets/images/user.jpg\">\n        </ion-avatar>\n                <!-- <ion-card-subtitle>Login</ion-card-subtitle> -->\n                     <!-- Success message -->\n<div class=\"success\" *ngIf=\"showSucessMessage\">\n  Saved successfully\n</div>\n\n<!-- Error message -->\n<div class=\"alert\" *ngIf=\"serverErrorMessages\">\n  {{serverErrorMessages}}\n</div>\n      </ion-card-header>\n      <form #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onSubmit(loginForm)\">\n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" #email=\"ngModel\" [(ngModel)]=\"login.email\" name=\"email\" \n          required [pattern]=\"emailRegex\"  [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !email.valid }\" ></ion-input>\n          <div *ngIf=\"loginForm.submitted && email.errors\">\n            <label *ngIf=\"email.errors.required\" class=\"validation-message\">This field is required.</label>\n            <label *ngIf=\"email.errors.pattern\" class=\"validation-message\">Invalid email address.</label>\n          </div>\n        </ion-item>\n     \n        <ion-item lines=\"full\">\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" #password=\"ngModel\" [(ngModel)]=\"login.password\" name=\"password\" \n          required   [ngClass]=\"{'invalid-textbox' :loginForm.submitted && !password.valid }\" ></ion-input>\n          <div *ngIf=\"loginForm.submitted && password.errors\">\n            <label *ngIf=\"password.errors.required\" class=\"validation-message\">This field is required.</label>\n            <label *ngIf=\"password.errors.minlength\" class=\"validation-message\">Enter atleast 4 characters.</label>\n          </div>\n        </ion-item>\n      \n        <ion-row size=\"3\" class=\"ion-text-center\">\n          <ion-col >\n            <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Sign In</ion-button>\n            <a [routerLink]=\"['/forget-pass']\" class=\"small-text\">Forgot Password?</a>\n          </ion-col>\n        </ion-row>\n      </form> \n      </ion-card>\n     \n\n\n</ion-content>\n<ion-footer class=\"ion-f\">\n  <ion-toolbar>\n    <div class=\"ion-text-center\">Terms and condition | Privacy Policy | Refund Policy\n    </div>\n      <div class=\"ion-text-center\">\n      Copyright © Bharat Acharya Education 2020 All rights reserved.</div>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".label-sp {\n  padding-left: 5px;\n}\n\n.mrg-1 {\n  margin: 2% 18% 2% 18%;\n  box-shadow: 0px 1px 5px 2px;\n  --ion-background-color:white;\n}\n\n.bg-color {\n  --ion-background-color:rgb(202, 235, 248);\n}\n\n.ion-f {\n  --ion-background-color:#3171e0;\n  --ion-text-color:white;\n}\n\nion-avatar {\n  margin: 0px 0px 0px 47%;\n}\n\ninput[type=text].invalid-textbox, input[type=password].invalid-textbox {\n  border-bottom: 2px solid #ed5558;\n}\n\nlabel.validation-message {\n  color: #ed5558;\n}\n\n.alert {\n  padding: 20px;\n  background-color: #f44336;\n  /* Red */\n  color: white;\n  margin-bottom: 15px;\n}\n\n.success {\n  padding: 20px;\n  background-color: #249424;\n  /* Green */\n  color: white;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSjs7QUFDQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDSiw0QkFBQTtBQUVBOztBQUNBO0VBQ0kseUNBQUE7QUFFSjs7QUFBQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFERTtFQUNFLHVCQUFBO0FBSUo7O0FBRkU7RUFDTSxnQ0FBQTtBQUtSOztBQUZRO0VBQ0UsY0FBQTtBQUtWOztBQUhRO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQTJCLFFBQUE7RUFDM0IsWUFBQTtFQUNBLG1CQUFBO0FBT1Y7O0FBSlE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFBMEIsVUFBQTtFQUMxQixZQUFBO0VBQ0EsbUJBQUE7QUFRViIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1zcHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbi5tcmctMXtcclxuICAgIG1hcmdpbjogMiUgMTglIDIlIDE4JTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDJweDtcclxuLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLmJnLWNvbG9ye1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjAyLCAyMzUsIDI0OCk7XHJcbn1cclxuLmlvbi1me1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMzE3MWUwO1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjp3aGl0ZTtcclxuICB9XHJcbiAgaW9uLWF2YXRhcntcclxuICAgIG1hcmdpbjogMHB4IDBweCAwcHggNDclO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRdLmludmFsaWQtdGV4dGJveCxpbnB1dFt0eXBlPXBhc3N3b3JkXS5pbnZhbGlkLXRleHRib3h7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlZDU1NTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxhYmVsLnZhbGlkYXRpb24tbWVzc2FnZXtcclxuICAgICAgICAgIGNvbG9yOiNlZDU1NTg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hbGVydCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjsgLyogUmVkICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuc3VjY2Vzc3tcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyNDk0MjQ7IC8qIEdyZWVuICovXHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_cs_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cs-service.service */ "./src/app/services/cs-service.service.ts");




let LoginPage = class LoginPage {
    constructor(cs, router) {
        this.cs = cs;
        this.router = router;
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.login = {};
    }
    onSubmit(form) {
        this.cs.login(form.value).subscribe(res => {
            console.log(res);
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.cs.setToken(res['token']);
            this.router.navigateByUrl('/Home');
        }, err => {
            this.serverErrorMessages = err.error.message;
        });
    }
    resetForm(form) {
        this.login = {};
        form.resetForm();
        this.serverErrorMessages = '';
    }
    ngOnInit() {
    }
};
LoginPage.ctorParameters = () => [
    { type: _services_cs_service_service__WEBPACK_IMPORTED_MODULE_3__["CsServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map