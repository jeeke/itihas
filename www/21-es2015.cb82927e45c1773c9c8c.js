(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{T9iC:function(e,n,t){"use strict";t.r(n),t.d(n,"SignupPageModule",(function(){return P}));var i=t("ofXK"),s=t("3Pt+"),o=t("TEn/"),r=t("tyNb"),b=t("PSD3"),c=t.n(b),a=t("fXoL"),l=t("TWdy"),d=t("JqCM");function u(e,n){1&e&&(a.Mb(0,"div",25),a.lc(1," Saved successfully\n"),a.Lb())}function g(e,n){if(1&e&&(a.Mb(0,"div",26),a.lc(1),a.Lb()),2&e){const e=a.Wb();a.yb(1),a.nc(" ",e.serverErrorMessages,"\n")}}function M(e,n){1&e&&(a.Mb(0,"div"),a.Mb(1,"label",27),a.lc(2,"This field is required."),a.Lb(),a.Lb())}function m(e,n){1&e&&(a.Mb(0,"div"),a.Mb(1,"label",27),a.lc(2,"This field is required."),a.Lb(),a.Lb())}function f(e,n){1&e&&(a.Mb(0,"label",27),a.lc(1,"This field is required."),a.Lb())}function p(e,n){1&e&&(a.Mb(0,"label",27),a.lc(1,"Invalid email address."),a.Lb())}function h(e,n){if(1&e&&(a.Mb(0,"div"),a.kc(1,f,2,0,"label",28),a.kc(2,p,2,0,"label",28),a.Lb()),2&e){a.Wb();const e=a.ec(31);a.yb(1),a.Zb("ngIf",e.errors.required),a.yb(1),a.Zb("ngIf",e.errors.pattern)}}function y(e,n){1&e&&(a.Mb(0,"label",27),a.lc(1,"This field is required."),a.Lb())}function v(e,n){1&e&&(a.Mb(0,"label",27),a.lc(1,"Enter atleast 4 characters."),a.Lb())}function L(e,n){if(1&e&&(a.Mb(0,"div"),a.kc(1,y,2,0,"label",28),a.kc(2,v,2,0,"label",28),a.Lb()),2&e){a.Wb();const e=a.ec(37);a.yb(1),a.Zb("ngIf",e.errors.required),a.yb(1),a.Zb("ngIf",e.errors.minlength)}}function C(e,n){1&e&&(a.Mb(0,"div"),a.Mb(1,"label",27),a.lc(2,"This field is required."),a.Lb(),a.Lb())}function w(e,n){1&e&&(a.Mb(0,"div"),a.Mb(1,"label",27),a.lc(2,"This field is required."),a.Lb(),a.Lb())}const x=function(e){return{"invalid-textbox":e}},k=[{path:"",component:(()=>{class e{constructor(e,n){this.cs=e,this.spinner=n,this.emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,this.user={}}customMessage(e,n){c()({type:n,title:e,showConfirmButton:!1,timer:3500})}onSubmit(e){this.spinner.show(),this.cs.Signup(e.value).subscribe(n=>{this.showSucessMessage=!0,setTimeout(()=>this.showSucessMessage=!1,4e3),this.spinner.hide(),this.customMessage("Saved successfully","success"),this.resetForm(e)},e=>{422===e.status?(this.serverErrorMessages=e.error.join("<br/>"),this.spinner.hide(),this.customMessage(e.error.join("<br/>"),"warning")):this.serverErrorMessages="Something went wrong.Please contact admin.",this.spinner.hide(),this.customMessage("Something went wrong.Please contact admin.","success")})}resetForm(e){this.user={},e.resetForm(),this.serverErrorMessages=""}ngOnInit(){}}return e.\u0275fac=function(n){return new(n||e)(a.Jb(l.a),a.Jb(d.c))},e.\u0275cmp=a.Db({type:e,selectors:[["app-signup"]],decls:55,vars:34,consts:[[3,"translucent"],["slot","start"],[1,"bg-color"],[1,"mrg-1"],["src","assets/images/user.jpg"],["class","success",4,"ngIf"],["class","alert",4,"ngIf"],[3,"ngSubmit"],["signUpForm","ngForm"],["lines","full"],["position","floating"],["type","text","name","name","required","",3,"ngModel","ngClass","ngModelChange"],["name","ngModel"],[4,"ngIf"],["type","tel","name","phone","required","",3,"ngModel","ngClass","ngModelChange"],["phone","ngModel"],["type","email","name","email","required","",3,"ngModel","pattern","ngClass","ngModelChange"],["email","ngModel"],["type","password","name","password","required","",3,"ngModel","ngClass","ngModelChange"],["password","ngModel"],["type","text","name","country","required","",3,"ngModel","ngClass","ngModelChange"],["country","ngModel"],["type","text","name","city","required","",3,"ngModel","ngClass","ngModelChange"],["city","ngModel"],["type","submit","color","danger","expand","block"],[1,"success"],[1,"alert"],[1,"validation-message"],["class","validation-message",4,"ngIf"]],template:function(e,n){if(1&e){const e=a.Nb();a.Mb(0,"ion-header",0),a.Mb(1,"ion-toolbar"),a.Mb(2,"ion-buttons",1),a.Kb(3,"ion-menu-button"),a.Lb(),a.Mb(4,"ion-title"),a.lc(5,"Sign Up"),a.Lb(),a.Lb(),a.Lb(),a.Mb(6,"ion-content",2),a.Mb(7,"ion-card",3),a.Mb(8,"ion-card-header"),a.Mb(9,"ion-avatar"),a.Kb(10,"img",4),a.Lb(),a.kc(11,u,2,0,"div",5),a.kc(12,g,2,1,"div",6),a.Lb(),a.Mb(13,"form",7,8),a.Ub("ngSubmit",(function(){a.fc(e);const t=a.ec(14);return t.valid&&n.onSubmit(t)})),a.Mb(15,"ion-item",9),a.Mb(16,"ion-label",10),a.lc(17," Name"),a.Lb(),a.Mb(18,"ion-input",11,12),a.Ub("ngModelChange",(function(e){return n.user.name=e})),a.Lb(),a.kc(20,M,3,0,"div",13),a.Lb(),a.Mb(21,"ion-item",9),a.Mb(22,"ion-label",10),a.lc(23,"Phone"),a.Lb(),a.Mb(24,"ion-input",14,15),a.Ub("ngModelChange",(function(e){return n.user.phone=e})),a.Lb(),a.kc(26,m,3,0,"div",13),a.Lb(),a.Mb(27,"ion-item",9),a.Mb(28,"ion-label",10),a.lc(29,"Email"),a.Lb(),a.Mb(30,"ion-input",16,17),a.Ub("ngModelChange",(function(e){return n.user.email=e})),a.Lb(),a.kc(32,h,3,2,"div",13),a.Lb(),a.Mb(33,"ion-item",9),a.Mb(34,"ion-label",10),a.lc(35,"Password"),a.Lb(),a.Mb(36,"ion-input",18,19),a.Ub("ngModelChange",(function(e){return n.user.password=e})),a.Lb(),a.kc(38,L,3,2,"div",13),a.Lb(),a.Mb(39,"ion-item",9),a.Mb(40,"ion-label",10),a.lc(41,"Country"),a.Lb(),a.Mb(42,"ion-input",20,21),a.Ub("ngModelChange",(function(e){return n.user.country=e})),a.Lb(),a.kc(44,C,3,0,"div",13),a.Lb(),a.Mb(45,"ion-item",9),a.Mb(46,"ion-label",10),a.lc(47,"City"),a.Lb(),a.Mb(48,"ion-input",22,23),a.Ub("ngModelChange",(function(e){return n.user.city=e})),a.Lb(),a.kc(50,w,3,0,"div",13),a.Lb(),a.Mb(51,"ion-row"),a.Mb(52,"ion-col"),a.Mb(53,"ion-button",24),a.lc(54,"Sign Up"),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb(),a.Lb()}if(2&e){const e=a.ec(14),t=a.ec(19),i=a.ec(25),s=a.ec(31),o=a.ec(37),r=a.ec(43),b=a.ec(49);a.Zb("translucent",!0),a.yb(11),a.Zb("ngIf",n.showSucessMessage),a.yb(1),a.Zb("ngIf",n.serverErrorMessages),a.yb(6),a.Zb("ngModel",n.user.name)("ngClass",a.cc(22,x,e.submitted&&!t.valid)),a.yb(2),a.Zb("ngIf",e.submitted&&!t.valid),a.yb(4),a.Zb("ngModel",n.user.phone)("ngClass",a.cc(24,x,e.submitted&&!i.valid)),a.yb(2),a.Zb("ngIf",e.submitted&&!i.valid),a.yb(4),a.Zb("ngModel",n.user.email)("pattern",n.emailRegex)("ngClass",a.cc(26,x,e.submitted&&!s.valid)),a.yb(2),a.Zb("ngIf",e.submitted&&s.errors),a.yb(4),a.Zb("ngModel",n.user.password)("ngClass",a.cc(28,x,e.submitted&&!o.valid)),a.yb(2),a.Zb("ngIf",e.submitted&&o.errors),a.yb(4),a.Zb("ngModel",n.user.country)("ngClass",a.cc(30,x,e.submitted&&!r.valid)),a.yb(2),a.Zb("ngIf",e.submitted&&!r.valid),a.yb(4),a.Zb("ngModel",n.user.city)("ngClass",a.cc(32,x,e.submitted&&!b.valid)),a.yb(2),a.Zb("ngIf",e.submitted&&!b.valid)}},directives:[o.k,o.z,o.d,o.s,o.y,o.j,o.e,o.g,o.a,i.j,s.l,s.f,s.g,o.n,o.o,o.m,o.F,s.k,s.e,s.h,i.h,s.i,o.w,o.i,o.c],styles:[".label-sp[_ngcontent-%COMP%]{padding-left:5px}.bg-color[_ngcontent-%COMP%]{--ion-background-color:#caebf8}.ion-f[_ngcontent-%COMP%]{--ion-background-color:#3171e0;--ion-text-color:#fff}ion-avatar[_ngcontent-%COMP%]{margin:0 0 0 47%}input[type=password].invalid-textbox[_ngcontent-%COMP%], input[type=text].invalid-textbox[_ngcontent-%COMP%]{border-bottom:2px solid #ed5558}label.validation-message[_ngcontent-%COMP%]{color:#ed5558}.alert[_ngcontent-%COMP%]{background-color:#f44336}.alert[_ngcontent-%COMP%], .success[_ngcontent-%COMP%]{padding:20px;color:#fff;margin-bottom:15px}.success[_ngcontent-%COMP%]{background-color:#249424}@media only screen and (max-width:768px){.mrg-1[_ngcontent-%COMP%]{margin:5px;box-shadow:none;--ion-background-color:#fff}}@media only screen and (min-width:768px){.mrg-1[_ngcontent-%COMP%]{margin:2% 18%;box-shadow:0 1px 5px 2px;--ion-background-color:#fff}}"]}),e})()}];let Z=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(n){return new(n||e)},imports:[[r.j.forChild(k)],r.j]}),e})(),P=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(n){return new(n||e)},imports:[[i.b,s.b,o.A,Z]]}),e})()}}]);