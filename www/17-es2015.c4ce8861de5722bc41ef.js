(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{a1xt:function(i,o,t){"use strict";t.r(o),t.d(o,"CourselistPageModule",(function(){return g}));var e=t("ofXK"),r=t("3Pt+"),s=t("TEn/"),n=t("tyNb"),c=t("AytR"),l=t("pr9R"),b=t("fXoL"),a=t("TWdy"),d=t("JqCM");function u(i,o){if(1&i){const i=b.Nb();b.Mb(0,"div",16),b.Mb(1,"a",17),b.Ub("click",(function(){b.fc(i);const o=b.Wb(2);return o.subscribeCourse(o.courseList.id)})),b.lc(2,"Enrolled Now"),b.Lb(),b.Lb()}}function p(i,o){if(1&i){const i=b.Nb();b.Mb(0,"a",28),b.Ub("click",(function(){b.fc(i);const o=b.Wb().$implicit;return b.Wb(2).openPremiumVideo("premiumVideo",o.video_url,o.title,o.image)})),b.lc(1,"Play"),b.Lb()}}function y(i,o){if(1&i&&(b.Mb(0,"div",18),b.Mb(1,"div",19),b.Mb(2,"div",20),b.Mb(3,"div",21),b.Kb(4,"img",22),b.Lb(),b.Mb(5,"div",23),b.Mb(6,"div",13),b.Mb(7,"h5",24),b.lc(8),b.Lb(),b.Mb(9,"p",25),b.lc(10),b.Lb(),b.Mb(11,"p",25),b.Mb(12,"small",26),b.lc(13),b.Lb(),b.Lb(),b.Mb(14,"p",25),b.Mb(15,"small",26),b.lc(16,"Last updated 3 mins ago"),b.Lb(),b.Lb(),b.kc(17,p,2,0,"a",27),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&i){const i=o.$implicit,t=b.Wb(2);b.yb(4),b.ac("src",i.image,b.hc),b.yb(4),b.mc(i.title),b.yb(2),b.mc(t.courseList.des),b.yb(3),b.nc("Duration: ",i.duration,""),b.yb(4),b.Zb("ngIf",i.video_url)}}function h(i,o){if(1&i&&(b.Mb(0,"div",7),b.Mb(1,"div",8),b.Mb(2,"div",9),b.Mb(3,"div",10),b.Mb(4,"div",11),b.Mb(5,"h4"),b.lc(6),b.Lb(),b.Lb(),b.kc(7,u,3,0,"div",12),b.Lb(),b.Lb(),b.Mb(8,"div",13),b.Kb(9,"img",14),b.Lb(),b.Lb(),b.Mb(10,"h2",6),b.lc(11,"Courses List"),b.Lb(),b.Mb(12,"div",10),b.kc(13,y,18,5,"div",15),b.Lb(),b.Lb()),2&i){const i=b.Wb();b.yb(6),b.mc(i.courseList.title),b.yb(1),b.Zb("ngIf",1!=i.courseList.is_enrolled),b.yb(2),b.ac("src",i.courseList.image,b.hc),b.yb(4),b.Zb("ngForOf",i.courseList.videos)}}function L(i,o){if(1&i){const i=b.Nb();b.Mb(0,"div",29),b.Mb(1,"div",8),b.Mb(2,"div",9),b.Mb(3,"div",10),b.Mb(4,"div",11),b.Mb(5,"h4"),b.lc(6),b.Lb(),b.Lb(),b.Mb(7,"div",16),b.Mb(8,"a",17),b.Ub("click",(function(){return b.fc(i),b.Wb().backLIst("courceList")})),b.lc(9,"Back"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(10,"div",13),b.Mb(11,"div",30),b.Ub("plyrInit",(function(o){return b.fc(i),b.Wb().player=o}))("plyrPlay",(function(o){return b.fc(i),b.Wb().played(o)})),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&i){const i=b.Wb();b.yb(6),b.mc(i.title),b.yb(5),b.Zb("plyrPlaysInline",!0)("plyrCrossOrigin",!0)("plyrPoster",i.poster)("plyrSources",i.videoSources)("plyrTracks",i.tracks)}}const m=[{path:"",component:(()=>{class i{constructor(i,o,t){this.cs=i,this.router=o,this.spinner=t,this.courseList={},this.show="courceList",this.razorPayOptions={key:"",ammount:"",currency:"",name:"",description:"",order_id:"",handler:i=>{console.log(i)}},this.tracks=[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",default:!0},{kind:"captions",label:"French",srclang:"fr",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"}]}getCourceList(){this.courseList=this.cs.getListData(),console.log(this.courseList),0!=Object.keys(this.courseList).length&&"{}"!=JSON.stringify(this.courseList)||this.router.navigate(["./Home"])}subscribeCourse(i){this.spinner.show(),this.cs.subscribeCourse(i).subscribe(i=>{this.spinner.hide(),console.log(i),this.razorPayOptions.key=c.a.razorPayKey,this.razorPayOptions.ammount=i.ammount,this.razorPayOptions.currency=i.currency,this.razorPayOptions.order_id=i.id,this.razorPayOptions.handler=this.razorpayResponceHandler,new Razorpay(this.razorPayOptions).open(),console.log("open")},i=>{throw this.spinner.hide(),i})}razorpayResponceHandler(i){console.log(i),i.razorpay_payment_id&&this.router.navigate(["./Home"])}openPremiumVideo(i,o,t,e){console.log(i,o),this.show=i,this.premiumVideoUrlLink=o,this.title=t,this.poster=e,this.checkUrlVideLink()}backLIst(i){this.show=i}link(){return this.premiumVideoUrlLink}checkUrlVideLink(){var i=this.premiumVideoUrlLink.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);if(console.log(i),i&&11==i[2].length)console.log("youtube"),this.videoSources=[{src:""+this.premiumVideoUrlLink,provider:"youtube"}],console.log(this.videoSources);else{console.log("video");let i=[];[576,720,1080,1440].forEach(o=>{console.log(o),i.push({src:""+this.premiumVideoUrlLink,type:"video/mp4",size:o})}),console.log(i),this.videoSources=i,console.log(this.videoSources),console.log(this.premiumVideoUrlLink)}}played(i){console.log("played",i)}play(){this.player.play()}pause(){this.player.pause()}stop(){this.player.stop()}ngOnInit(){console.log("lll"),this.getCourceList()}}return i.\u0275fac=function(o){return new(o||i)(b.Jb(a.a),b.Jb(n.g),b.Jb(d.c))},i.\u0275cmp=b.Db({type:i,selectors:[["app-courselist"]],viewQuery:function(i,o){var t;1&i&&b.oc(l.a,!0),2&i&&b.dc(t=b.Vb())&&(o.plyr=t.first)},decls:15,vars:3,consts:[[3,"translucent"],["slot","start"],[1,"menu-a"],["class","container-fluid",4,"ngIf"],["class","",4,"ngIf"],[1,"ion-f"],[1,"ion-text-center"],[1,"container-fluid"],[1,"card"],[1,"card-header"],[1,"row"],[1,"col-md-6","text-left"],["class","col-md-6 text-right",4,"ngIf"],[1,"card-body"],["alt","no showing",3,"src"],["class","col-md-6",4,"ngFor","ngForOf"],[1,"col-md-6","text-right"],[1,"btn","btn-danger","ion-text-center",3,"click"],[1,"col-md-6"],[1,"card","mb-3"],[1,"row","no-gutters"],[1,"col-md-4"],["alt","...",1,"card-img",3,"src"],[1,"col-md-8"],[1,"card-title"],[1,"card-text"],[1,"text-muted"],["class","btn btn-warning ion-text-center",3,"click",4,"ngIf"],[1,"btn","btn-warning","ion-text-center",3,"click"],[1,""],["plyr","","plyrTitle","Custom video",3,"plyrPlaysInline","plyrCrossOrigin","plyrPoster","plyrSources","plyrTracks","plyrInit","plyrPlay"]],template:function(i,o){1&i&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",1),b.Kb(3,"ion-menu-button",2),b.Lb(),b.Mb(4,"ion-title"),b.lc(5,"Course List"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content"),b.kc(7,h,14,4,"div",3),b.kc(8,L,12,6,"div",4),b.Mb(9,"ion-footer",5),b.Mb(10,"ion-toolbar"),b.Mb(11,"div",6),b.lc(12,"Terms and condition | Privacy Policy | Refund Policy "),b.Lb(),b.Mb(13,"div",6),b.lc(14," Copyright \xa9 Bharat Acharya Education 2020 All rights reserved."),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&i&&(b.Zb("translucent",!0),b.yb(7),b.Zb("ngIf","courceList"==o.show),b.yb(1),b.Zb("ngIf","premiumVideo"==o.show))},directives:[s.l,s.A,s.d,s.t,s.z,s.j,e.j,s.k,e.i,l.a],styles:[".ion-f[_ngcontent-%COMP%]{--ion-background-color:#3171e0;--ion-text-color:#fff}"]}),i})()}];let f=(()=>{class i{}return i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(o){return new(o||i)},imports:[[n.j.forChild(m)],n.j]}),i})(),g=(()=>{class i{}return i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(o){return new(o||i)},imports:[[e.b,r.b,s.B,f,l.b]]}),i})()}}]);