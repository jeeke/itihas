(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{X3zk:function(n,e,o){"use strict";o.r(e),o.d(e,"LoginPageModule",(function(){return K}));var t=o("ofXK"),i=o("3Pt+"),s=o("TEn/"),r=o("tyNb"),b=o("fXoL"),c=o("TWdy");function a(n,e){1&n&&(b.Kb(0,"div",21),b.kc(1," Saved successfully\n"),b.Jb())}function l(n,e){if(1&n&&(b.Kb(0,"div",22),b.kc(1),b.Jb()),2&n){const n=b.Ub();b.xb(1),b.mc(" ",n.serverErrorMessages,"\n")}}function g(n,e){1&n&&(b.Kb(0,"label",24),b.kc(1,"This field is required."),b.Jb())}function d(n,e){1&n&&(b.Kb(0,"label",24),b.kc(1,"Invalid email address."),b.Jb())}function u(n,e){if(1&n&&(b.Kb(0,"div"),b.jc(1,g,2,0,"label",23),b.jc(2,d,2,0,"label",23),b.Jb()),2&n){b.Ub();const n=b.ec(19);b.xb(1),b.Zb("ngIf",n.errors.required),b.xb(1),b.Zb("ngIf",n.errors.pattern)}}function f(n,e){1&n&&(b.Kb(0,"label",24),b.kc(1,"This field is required."),b.Jb())}function m(n,e){1&n&&(b.Kb(0,"label",24),b.kc(1,"Enter atleast 4 characters."),b.Jb())}function p(n,e){if(1&n&&(b.Kb(0,"div"),b.jc(1,f,2,0,"label",23),b.jc(2,m,2,0,"label",23),b.Jb()),2&n){b.Ub();const n=b.ec(25);b.xb(1),b.Zb("ngIf",n.errors.required),b.xb(1),b.Zb("ngIf",n.errors.minlength)}}const h=function(n){return{"invalid-textbox":n}},x=function(){return["/forget-pass"]},v=[{path:"",component:(()=>{class n{constructor(n,e){this.cs=n,this.router=e,this.emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,this.login={}}onSubmit(n){this.cs.login(n.value).subscribe(n=>{console.log(n),this.showSucessMessage=!0,setTimeout(()=>this.showSucessMessage=!1,4e3),this.cs.setToken(n.token,n.user_type),this.router.navigateByUrl("/Home")},n=>{this.serverErrorMessages=n.error.message})}resetForm(n){this.login={},n.resetForm(),this.serverErrorMessages=""}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(b.Hb(c.a),b.Hb(r.g))},n.\u0275cmp=b.Bb({type:n,selectors:[["app-login"]],decls:39,vars:16,consts:[[3,"translucent"],["slot","start"],[1,"bg-color"],[1,"mrg-1"],["src","assets/images/user.jpg"],["class","success",4,"ngIf"],["class","alert",4,"ngIf"],[3,"ngSubmit"],["loginForm","ngForm"],["lines","full"],["position","floating"],["type","email","name","email","required","",3,"ngModel","pattern","ngClass","ngModelChange"],["email","ngModel"],[4,"ngIf"],["type","password","name","password","required","",3,"ngModel","ngClass","ngModelChange"],["password","ngModel"],["size","3",1,"ion-text-center"],["type","submit","color","danger","expand","block"],[1,"small-text",3,"routerLink"],[1,"ion-f"],[1,"ion-text-center"],[1,"success"],[1,"alert"],["class","validation-message",4,"ngIf"],[1,"validation-message"]],template:function(n,e){if(1&n){const n=b.Lb();b.Kb(0,"ion-header",0),b.Kb(1,"ion-toolbar"),b.Kb(2,"ion-buttons",1),b.Ib(3,"ion-menu-button"),b.Jb(),b.Kb(4,"ion-title"),b.kc(5,"Login"),b.Jb(),b.Jb(),b.Jb(),b.Kb(6,"ion-content",2),b.Kb(7,"ion-card",3),b.Kb(8,"ion-card-header"),b.Kb(9,"ion-avatar"),b.Ib(10,"img",4),b.Jb(),b.jc(11,a,2,0,"div",5),b.jc(12,l,2,1,"div",6),b.Jb(),b.Kb(13,"form",7,8),b.Sb("ngSubmit",(function(){b.fc(n);const o=b.ec(14);return o.valid&&e.onSubmit(o)})),b.Kb(15,"ion-item",9),b.Kb(16,"ion-label",10),b.kc(17,"Email"),b.Jb(),b.Kb(18,"ion-input",11,12),b.Sb("ngModelChange",(function(n){return e.login.email=n})),b.Jb(),b.jc(20,u,3,2,"div",13),b.Jb(),b.Kb(21,"ion-item",9),b.Kb(22,"ion-label",10),b.kc(23,"Password"),b.Jb(),b.Kb(24,"ion-input",14,15),b.Sb("ngModelChange",(function(n){return e.login.password=n})),b.Jb(),b.jc(26,p,3,2,"div",13),b.Jb(),b.Kb(27,"ion-row",16),b.Kb(28,"ion-col"),b.Kb(29,"ion-button",17),b.kc(30,"Sign In"),b.Jb(),b.Kb(31,"a",18),b.kc(32,"Forgot Password?"),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Kb(33,"ion-footer",19),b.Kb(34,"ion-toolbar"),b.Kb(35,"div",20),b.kc(36,"Terms and condition | Privacy Policy | Refund Policy "),b.Jb(),b.Kb(37,"div",20),b.kc(38," Copyright \xa9 Bharat Acharya Education 2020 All rights reserved."),b.Jb(),b.Jb(),b.Jb()}if(2&n){const n=b.ec(14),o=b.ec(19),t=b.ec(25);b.Zb("translucent",!0),b.xb(11),b.Zb("ngIf",e.showSucessMessage),b.xb(1),b.Zb("ngIf",e.serverErrorMessages),b.xb(6),b.Zb("ngModel",e.login.email)("pattern",e.emailRegex)("ngClass",b.cc(11,h,n.submitted&&!o.valid)),b.xb(2),b.Zb("ngIf",n.submitted&&o.errors),b.xb(4),b.Zb("ngModel",e.login.password)("ngClass",b.cc(13,h,n.submitted&&!t.valid)),b.xb(2),b.Zb("ngIf",n.submitted&&t.errors),b.xb(5),b.Zb("routerLink",b.bc(15,x))}},directives:[s.l,s.C,s.d,s.t,s.B,s.j,s.e,s.g,s.a,t.j,i.l,i.f,i.g,s.o,s.p,s.n,s.I,i.k,i.e,i.h,i.i,t.h,s.x,s.i,s.c,r.i,s.H,s.k],styles:[".label-sp[_ngcontent-%COMP%]{padding-left:5px}.mrg-1[_ngcontent-%COMP%]{margin:2% 18%;box-shadow:0 1px 5px 2px;--ion-background-color:#fff}.bg-color[_ngcontent-%COMP%]{--ion-background-color:#caebf8}.ion-f[_ngcontent-%COMP%]{--ion-background-color:#3171e0;--ion-text-color:#fff}ion-avatar[_ngcontent-%COMP%]{margin:0 0 0 47%}input[type=password].invalid-textbox[_ngcontent-%COMP%], input[type=text].invalid-textbox[_ngcontent-%COMP%]{border-bottom:2px solid #ed5558}label.validation-message[_ngcontent-%COMP%]{color:#ed5558}.alert[_ngcontent-%COMP%]{background-color:#f44336}.alert[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]{padding:20px;color:#fff;margin-bottom:15px}.success[_ngcontent-%COMP%]{background-color:#249424}"]}),n})()}];let J=(()=>{class n{}return n.\u0275mod=b.Fb({type:n}),n.\u0275inj=b.Eb({factory:function(e){return new(e||n)},imports:[[r.j.forChild(v)],r.j]}),n})(),K=(()=>{class n{}return n.\u0275mod=b.Fb({type:n}),n.\u0275inj=b.Eb({factory:function(e){return new(e||n)},imports:[[t.b,i.b,s.D,J]]}),n})()}}]);