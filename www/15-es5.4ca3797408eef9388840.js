!function(){function n(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function i(n,i){for(var o=0;o<i.length;o++){var t=i[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{lDoj:function(o,t,e){"use strict";e.r(t),e.d(t,"BooklistPageModule",(function(){return w}));var c=e("ofXK"),b=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),l=e("fXoL"),s=e("TWdy"),d=e("JqCM");function u(n,i){if(1&n){var o=l.Nb();l.Mb(0,"div",7),l.Mb(1,"div",8),l.Ub("click",(function(){l.fc(o);var n=i.$implicit;return l.Wb().opentNewTab(n.link)})),l.Kb(2,"img",9),l.Mb(3,"div",10),l.Mb(4,"h4"),l.lc(5),l.Lb(),l.Mb(6,"ion-badge",11),l.Mb(7,"i"),l.lc(8),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&n){var t=i.$implicit;l.yb(2),l.ac("src",t.icon,l.hc),l.ac("alt",t.title),l.yb(3),l.mc(t.title),l.yb(3),l.nc(" ",t.author,"")}}function f(n,i){if(1&n){var o=l.Nb();l.Mb(0,"ion-col",12),l.Ub("click",(function(){l.fc(o);var n=i.$implicit;return l.Wb().opentNewTab(n.link)})),l.Mb(1,"ion-card"),l.Mb(2,"ion-card-content"),l.Kb(3,"img",13),l.Lb(),l.Mb(4,"div"),l.lc(5),l.Lb(),l.Mb(6,"div",14),l.Mb(7,"div"),l.Mb(8,"ion-badge",11),l.Mb(9,"i"),l.lc(10),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb()}if(2&n){var t=i.$implicit;l.yb(3),l.ac("src",t.icon,l.hc),l.yb(2),l.nc(" ",t.title,""),l.yb(5),l.nc(" ",t.author,"")}}var p,g,h,m=[{path:"",component:(p=function(){function o(i,t){n(this,o),this.cs=i,this.spinner=t}var t,e,c;return t=o,(e=[{key:"getBookList",value:function(){var n=this;this.spinner.show(),this.cs.bookList().subscribe((function(i){i&&i.length>0?(n.bookList=i,n.spinner.hide()):(console.log("no record in array"),n.spinner.hide())}),(function(i){throw n.spinner.hide(),i}))}},{key:"opentNewTab",value:function(n){window.open(n,"_blank")}},{key:"ngOnInit",value:function(){this.getBookList()}}])&&i(t.prototype,e),c&&i(t,c),o}(),p.\u0275fac=function(n){return new(n||p)(l.Jb(s.a),l.Jb(d.c))},p.\u0275cmp=l.Db({type:p,selectors:[["app-booklist"]],decls:12,vars:3,consts:[[3,"translucent"],["slot","start"],[1,"mobile"],[1,"row","mobile"],["class"," col-md-12 mb-4",4,"ngFor","ngForOf"],[1,"web"],["size","2","class","card-background-page",3,"click",4,"ngFor","ngForOf"],[1,"col-md-12","mb-4"],[1,"card",3,"click"],[1,"card-img-top",3,"src","alt"],[1,"card-body","text-white","bg-info","text-center"],["color","warning",2,"color","white"],["size","2",1,"card-background-page",3,"click"],[1,"img-style",3,"src"],[1,"box"]],template:function(n,i){1&n&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-toolbar"),l.Mb(2,"ion-buttons",1),l.Kb(3,"ion-menu-button"),l.Lb(),l.Mb(4,"ion-title"),l.lc(5,"Books"),l.Lb(),l.Lb(),l.Lb(),l.Mb(6,"ion-content"),l.Mb(7,"div",2),l.Mb(8,"div",3),l.kc(9,u,9,4,"div",4),l.Lb(),l.Lb(),l.Mb(10,"ion-row",5),l.kc(11,f,11,3,"ion-col",6),l.Lb(),l.Lb()),2&n&&(l.Zb("translucent",!0),l.yb(9),l.Zb("ngForOf",i.bookList),l.yb(2),l.Zb("ngForOf",i.bookList))},directives:[r.k,r.z,r.d,r.s,r.y,r.j,c.i,r.w,r.b,r.i,r.e,r.f],styles:["ion-card[_ngcontent-%COMP%]{position:relative;text-align:center}.ion-f[_ngcontent-%COMP%]{--ion-background-color:#3171e0;--ion-text-color:#fff}.img-style[_ngcontent-%COMP%]{height:161px!important;width:75%!important}@media only screen and (max-width:768px){.web[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:768px){.mobile[_ngcontent-%COMP%]{display:none}}"]}),p)}],y=((h=function i(){n(this,i)}).\u0275mod=l.Hb({type:h}),h.\u0275inj=l.Gb({factory:function(n){return new(n||h)},imports:[[a.j.forChild(m)],a.j]}),h),w=((g=function i(){n(this,i)}).\u0275mod=l.Hb({type:g}),g.\u0275inj=l.Gb({factory:function(n){return new(n||g)},imports:[[c.b,b.b,r.A,y]]}),g)}}])}();