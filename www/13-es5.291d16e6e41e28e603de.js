!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{V6Zc:function(o,e,i){"use strict";i.r(e),i.d(e,"BlogsDetailsPageModule",(function(){return y}));var r=i("ofXK"),c=i("3Pt+"),a=i("TEn/"),g=i("tyNb"),b=i("PSD3"),s=i.n(b),d=i("fXoL"),l=i("TWdy"),m=i("JqCM");function p(t,n){if(1&t){var o=d.Nb();d.Mb(0,"div",32),d.Mb(1,"ion-button",33),d.Ub("click",(function(){return d.fc(o),d.Wb().redirectEditBlog()})),d.lc(2,"Edit Blog"),d.Lb(),d.Lb()}}function u(t,n){if(1&t&&(d.Mb(0,"span",34),d.Mb(1,"a"),d.lc(2),d.Lb(),d.Lb()),2&t){var o=n.$implicit;d.yb(2),d.mc(o.title)}}function f(t,n){if(1&t&&(d.Mb(0,"div"),d.Mb(1,"div",35),d.Mb(2,"div",36),d.Kb(3,"img",37),d.Lb(),d.Mb(4,"div",38),d.Mb(5,"div"),d.Mb(6,"small"),d.Mb(7,"i"),d.lc(8),d.Lb(),d.Lb(),d.Lb(),d.Mb(9,"div"),d.lc(10),d.Lb(),d.Lb(),d.Lb(),d.Lb()),2&t){var o=n.$implicit;d.yb(8),d.nc(" ",o.name," "),d.yb(2),d.nc(" ",o.body," ")}}function _(t,n){1&t&&(d.Mb(0,"div"),d.Mb(1,"label",39),d.lc(2,"This field is required."),d.Lb(),d.Lb())}var M,h,x,C=function(t){return{"invalid-textbox":t}},O=[{path:"",component:(M=function(){function o(n,e,i){t(this,o),this.cs=n,this.router=e,this.spinner=i,this.blog={},this.comment={}}var e,i,r;return e=o,(i=[{key:"customMessage",value:function(t,n){s()({type:n,title:t,showConfirmButton:!1,timer:3500})}},{key:"getBlogObj",value:function(){this.blog=this.cs.getObjLatestBlog(),0==Object.keys(this.blog).length&&this.router.navigate(["./Home"])}},{key:"redirectEditBlog",value:function(){this.router.navigate(["./blogs-create"])}},{key:"onSubmit",value:function(t){var n=this;this.spinner.show(),console.log(t.value),this.cs.addComment(this.blog.id,t.value).subscribe((function(o){console.log(o),n.getComment(),t.resetForm(),n.comment={},n.spinner.hide(),n.customMessage("Save successfully","success")}),(function(t){throw n.spinner.hide(),n.customMessage(t,"warning"),t}))}},{key:"getComment",value:function(){var t=this;console.log(this.blog.id),this.cs.getComment(this.blog.id).subscribe((function(n){n&&n.length>0?(t.comments=n,console.log(n)):console.log("blank")}),(function(t){throw t}))}},{key:"ngOnInit",value:function(){this.getBlogObj(),this.getComment(),this.type=this.cs.getUserType(),console.log(this.type)}}])&&n(e.prototype,i),r&&n(e,r),o}(),M.\u0275fac=function(t){return new(t||M)(d.Jb(l.a),d.Jb(g.g),d.Jb(m.c))},M.\u0275cmp=d.Db({type:M,selectors:[["app-blogs-details"]],decls:48,vars:13,consts:[[3,"translucent"],["slot","start"],[1,"container-fluid"],[1,"col-md-10","offset-md-1"],["style","text-align: end;",4,"ngIf"],[1,"card","mb-3"],["alt","Responsive image",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"blockquote-footer"],["title","Source Title"],["class","badge badge-warning","style","margin-right:4px ;",4,"ngFor","ngForOf"],[1,"card-text",3,"innerHtml"],[1,"text-center"],[1,"card","cards"],[1,"card-header","bg-primary","msg_head"],[1,"d-flex","bd-highlight"],[1,"img_cont"],["src","assets/images/user.jpg",1,"rounded-circle","user_img"],[1,"online_icon"],[1,"user_info"],[1,"text-black"],[1,"card-body","msg_card_body"],[4,"ngFor","ngForOf"],[3,"ngSubmit"],["myMessage","ngForm"],[1,"form-group","col-md-12"],["placeholder","Comment here ....","cols","10","rows","5","name","comment_body","required","",1,"form-control",3,"ngModel","ngClass","ngModelChange"],["comment_body","ngModel"],[4,"ngIf"],[1,"form-group","offset-md-4","col-md-3"],["type","submit","color","danger"],[2,"text-align","end"],["type","submit","color","primary",3,"click"],[1,"badge","badge-warning",2,"margin-right","4px"],[1,"d-flex","justify-content-start","mb-4"],[1,"img_cont_msg"],["src","assets/images/user.jpg",1,"rounded-circle","user_img_msg"],[1,"msg_cotainer"],[1,"validation-message"]],template:function(t,n){if(1&t){var o=d.Nb();d.Mb(0,"ion-header",0),d.Mb(1,"ion-toolbar"),d.Mb(2,"ion-buttons",1),d.Kb(3,"ion-menu-button"),d.Lb(),d.Mb(4,"ion-title"),d.lc(5,"Blog Details"),d.Lb(),d.Lb(),d.Lb(),d.Mb(6,"ion-content"),d.Mb(7,"div",2),d.Mb(8,"div",3),d.kc(9,p,3,0,"div",4),d.Mb(10,"div",5),d.Kb(11,"img",6),d.Mb(12,"div",7),d.Mb(13,"h5",8),d.lc(14),d.Lb(),d.Mb(15,"footer",9),d.lc(16,"Author is "),d.Mb(17,"cite",10),d.lc(18),d.Lb(),d.Lb(),d.kc(19,u,3,1,"span",11),d.lc(20," \xa0 "),d.Kb(21,"div",12),d.Mb(22,"h2",13),d.lc(23,"Comment Section"),d.Lb(),d.Mb(24,"div",14),d.Mb(25,"div",15),d.Mb(26,"div",16),d.Mb(27,"div",17),d.Kb(28,"img",18),d.Kb(29,"span",19),d.Lb(),d.Mb(30,"div",20),d.Mb(31,"span",21),d.lc(32,"Chat history"),d.Lb(),d.Mb(33,"p",21),d.lc(34," Messages"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Mb(35,"div",22),d.kc(36,f,11,2,"div",23),d.Lb(),d.Lb(),d.Kb(37,"br"),d.Mb(38,"form",24,25),d.Ub("ngSubmit",(function(){d.fc(o);var t=d.ec(39);return t.valid&&n.onSubmit(t)})),d.Mb(40,"div",26),d.Mb(41,"textarea",27,28),d.Ub("ngModelChange",(function(t){return n.comment.comment_body=t})),d.lc(43,"              "),d.Lb(),d.kc(44,_,3,0,"div",29),d.Lb(),d.Mb(45,"div",30),d.Mb(46,"ion-button",31),d.lc(47,"Send Message"),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb(),d.Lb()}if(2&t){var e=d.ec(39),i=d.ec(42);d.Zb("translucent",!0),d.yb(9),d.Zb("ngIf","admin"==n.type),d.yb(2),d.ac("src",n.blog.image,d.hc),d.yb(3),d.mc(n.blog.title),d.yb(4),d.mc(n.blog.author?n.blog.author:"Null"),d.yb(1),d.Zb("ngForOf",n.blog.tags),d.yb(2),d.ac("innerHtml",n.blog.body,d.gc),d.yb(15),d.Zb("ngForOf",n.comments),d.yb(5),d.Zb("ngModel",n.comment.comment_body)("ngClass",d.cc(11,C,e.submitted&&!i.valid)),d.yb(3),d.Zb("ngIf",e.submitted&&!i.valid)}},directives:[a.k,a.z,a.d,a.s,a.y,a.j,r.j,r.i,c.l,c.f,c.g,c.a,c.k,c.e,c.h,r.h,a.c],styles:[".ion-f[_ngcontent-%COMP%]{--ion-background-color:#3171e0;--ion-text-color:#fff}input[type=text].invalid-textbox[_ngcontent-%COMP%], textarea.invalid-textbox[_ngcontent-%COMP%]{border:2px solid #ed5558}label.validation-message[_ngcontent-%COMP%]{color:#ed5558}.chat[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto}.cards[_ngcontent-%COMP%]{border-radius:15px!important}.contacts_body[_ngcontent-%COMP%]{padding:.75rem 0!important;overflow-y:auto;white-space:nowrap}.msg_card_body[_ngcontent-%COMP%]{overflow-y:auto;overflow-x:hidden}.card-header[_ngcontent-%COMP%]{border-radius:15px 15px 0 0!important;border-bottom:0!important}.card-footer[_ngcontent-%COMP%]{border-radius:0 0 15px 15px!important;border-top:0!important}.container[_ngcontent-%COMP%]{align-content:center}.search[_ngcontent-%COMP%]{border-radius:15px 0 0 15px!important;background-color:rgba(0,0,0,.3)!important;border:0!important;color:#fff!important}.search[_ngcontent-%COMP%]:focus{box-shadow:none!important;outline:0!important}.type_msg[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.3)!important;border:0!important;color:#fff!important;height:60px!important;overflow-y:auto}.type_msg[_ngcontent-%COMP%]:focus{box-shadow:none!important;outline:0!important}.attach_btn[_ngcontent-%COMP%]{border-radius:15px 0 0 15px!important;background-color:rgba(0,0,0,.3)!important;border:0!important;color:#fff!important;cursor:pointer}.search_btn[_ngcontent-%COMP%], .send_btn[_ngcontent-%COMP%]{border-radius:0 15px 15px 0!important;background-color:rgba(0,0,0,.3)!important;border:0!important;color:#fff!important;cursor:pointer}.contacts[_ngcontent-%COMP%]{list-style:none;padding:0}.contacts[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%!important;padding:5px 10px;margin-bottom:15px!important}.active[_ngcontent-%COMP%]{background-color:rgba(0,0,0,.3)}.user_img[_ngcontent-%COMP%]{height:70px;width:70px}.user_img[_ngcontent-%COMP%], .user_img_msg[_ngcontent-%COMP%]{border:1.5px solid #f5f6fa}.user_img_msg[_ngcontent-%COMP%]{height:40px;width:40px}.img_cont[_ngcontent-%COMP%]{position:relative;height:70px;width:70px}.img_cont_msg[_ngcontent-%COMP%]{height:40px;width:40px}.online_icon[_ngcontent-%COMP%]{position:absolute;height:15px;width:15px;background-color:#4cd137;border-radius:50%;bottom:.2em;right:.4em;border:1.5px solid #fff}.offline[_ngcontent-%COMP%]{background-color:#c23616!important}.user_info[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;margin-left:15px}.user_info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;color:#fff}.user_info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:10px;color:hsla(0,0%,100%,.6)}.video_cam[_ngcontent-%COMP%]{margin-left:50px;margin-top:5px}.video_cam[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff;font-size:20px;cursor:pointer;margin-right:20px}.msg_cotainer[_ngcontent-%COMP%]{margin-left:10px;border-radius:5px;background-color:#82ccdd}.msg_cotainer[_ngcontent-%COMP%], .msg_cotainer_send[_ngcontent-%COMP%]{margin-top:auto;margin-bottom:auto;padding:10px;position:relative}.msg_cotainer_send[_ngcontent-%COMP%]{margin-right:10px;border-radius:25px;background-color:#78e08f}.msg_time[_ngcontent-%COMP%]{left:0}.msg_time[_ngcontent-%COMP%], .msg_time_send[_ngcontent-%COMP%]{position:absolute;bottom:-15px;color:hsla(0,0%,100%,.5);font-size:10px}.msg_time_send[_ngcontent-%COMP%]{right:0}.msg_head[_ngcontent-%COMP%]{position:relative}#action_menu_btn[_ngcontent-%COMP%]{position:absolute;right:10px;top:10px;color:#fff;cursor:pointer;font-size:20px}.action_menu[_ngcontent-%COMP%]{z-index:1;position:absolute;padding:15px 0;background-color:rgba(0,0,0,.5);color:#fff;border-radius:15px;top:30px;right:15px;display:none}.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{width:100%;padding:10px 15px;margin-bottom:5px}.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{padding-right:10px}.action_menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{cursor:pointer;background-color:rgba(0,0,0,.2)}.radius[_ngcontent-%COMP%]{border-radius:14px}@media (max-width:576px){.contacts_card[_ngcontent-%COMP%]{margin-bottom:15px!important}}"]}),M)}],v=((x=function n(){t(this,n)}).\u0275mod=d.Hb({type:x}),x.\u0275inj=d.Gb({factory:function(t){return new(t||x)},imports:[[g.j.forChild(O)],g.j]}),x),y=((h=function n(){t(this,n)}).\u0275mod=d.Hb({type:h}),h.\u0275inj=d.Gb({factory:function(t){return new(t||h)},imports:[[r.b,c.b,a.A,v]]}),h)}}])}();