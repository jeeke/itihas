(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{AufG:function(i,e,o){"use strict";o.r(e),o.d(e,"FreeVideoPageModule",(function(){return v}));var t=o("ofXK"),n=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),s=o("pr9R"),b=o("fXoL"),l=o("TWdy"),d=o("JqCM");function a(i,e){1&i&&(b.Mb(0,"h2",7),b.lc(1,"Courses List"),b.Lb())}function u(i,e){if(1&i){const i=b.Nb();b.Mb(0,"a",22),b.Ub("click",(function(){b.fc(i);const e=b.Wb().$implicit;return b.Wb(2).openPremiumVideo("premiumVideo",e.video_url,e.title,e.image)})),b.lc(1,"Play"),b.Lb()}}function p(i,e){if(1&i&&(b.Mb(0,"div",11),b.Mb(1,"div",12),b.Mb(2,"div",13),b.Mb(3,"div",14),b.Kb(4,"img",15),b.Lb(),b.Mb(5,"div",16),b.Mb(6,"div",17),b.Mb(7,"h5",18),b.lc(8),b.Lb(),b.Mb(9,"p",19),b.Mb(10,"small",20),b.lc(11),b.Lb(),b.Lb(),b.Mb(12,"p",19),b.Mb(13,"small",20),b.lc(14,"Last updated 3 mins ago"),b.Lb(),b.Lb(),b.kc(15,u,2,0,"a",21),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&i){const i=e.$implicit;b.yb(4),b.ac("src",i.image,b.hc),b.yb(4),b.mc(i.title),b.yb(3),b.nc("Duration: ",i.duration,""),b.yb(4),b.Zb("ngIf",i.video_url)}}function m(i,e){if(1&i){const i=b.Nb();b.Mb(0,"a",22),b.Ub("click",(function(){b.fc(i);const e=b.Wb().$implicit;return b.Wb(2).openPremiumVideo("premiumVideo",e.video_url,e.title,e.image)})),b.lc(1,"Play"),b.Lb()}}function h(i,e){if(1&i&&(b.Mb(0,"div",23),b.Mb(1,"div",12),b.Mb(2,"div",13),b.Mb(3,"div",14),b.Kb(4,"img",15),b.Lb(),b.Mb(5,"div",16),b.Mb(6,"div",17),b.Mb(7,"h5",18),b.lc(8),b.Lb(),b.Mb(9,"p",19),b.Mb(10,"small",20),b.lc(11),b.Lb(),b.Lb(),b.Mb(12,"p",19),b.Mb(13,"small",20),b.lc(14,"Last updated 3 mins ago"),b.Lb(),b.Lb(),b.kc(15,m,2,0,"a",21),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&i){const i=e.$implicit;b.yb(4),b.ac("src",i.image,b.hc),b.yb(4),b.mc(i.title),b.yb(3),b.nc("Duration: ",i.duration,""),b.yb(4),b.Zb("ngIf",i.video_url)}}function y(i,e){if(1&i&&(b.Mb(0,"div",8),b.kc(1,p,16,4,"div",9),b.kc(2,h,16,4,"div",10),b.Lb()),2&i){const i=b.Wb();b.yb(1),b.Zb("ngForOf",i.courseList),b.yb(1),b.Zb("ngForOf",i.courseList)}}function f(i,e){if(1&i){const i=b.Nb();b.Mb(0,"div",24),b.Mb(1,"div",25),b.Mb(2,"div",26),b.Mb(3,"div",8),b.Mb(4,"div",27),b.Mb(5,"h4"),b.lc(6),b.Lb(),b.Lb(),b.Mb(7,"div",28),b.Mb(8,"a",29),b.Ub("click",(function(){return b.fc(i),b.Wb().backLIst("courceList")})),b.lc(9,"Back"),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Mb(10,"div",17),b.Mb(11,"div",30),b.Ub("plyrInit",(function(e){return b.fc(i),b.Wb().player=e}))("plyrPlay",(function(e){return b.fc(i),b.Wb().played(e)})),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&i){const i=b.Wb();b.yb(6),b.mc(i.title),b.yb(5),b.Zb("plyrPlaysInline",!0)("plyrCrossOrigin",!0)("plyrPoster",i.poster)("plyrSources",i.videoSources)("plyrTracks",i.tracks)}}const L=[{path:"",component:(()=>{class i{constructor(i,e,o,t){this.cs=i,this.router=e,this.route=o,this.spinner=t,this.show="courceList",this.tracks=[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",default:!0},{kind:"captions",label:"French",srclang:"fr",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"}]}freeVideos(){this.spinner.show(),this.cs.freeVideos().subscribe(i=>{i&&i.length>0?(this.courseList=i,console.log(i),this.spinner.hide()):(console.log("no dta"),this.spinner.hide())},i=>{throw this.spinner.hide(),i})}openPremiumVideo(i,e,o,t){console.log(i,e),this.show=i,this.premiumVideoUrlLink=e,this.title=o,this.poster=t,this.checkUrlVideLink()}backLIst(i){this.show=i}link(){return this.premiumVideoUrlLink}checkUrlVideLink(){var i=this.premiumVideoUrlLink.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);if(console.log(i),i&&11==i[2].length)console.log("youtube"),this.videoSources=[{src:""+this.premiumVideoUrlLink,provider:"youtube"}],console.log(this.videoSources);else{console.log("video");let i=[];[576,720,1080,1440].forEach(e=>{console.log(e),i.push({src:""+this.premiumVideoUrlLink,type:"video/mp4",size:e})}),console.log(i),this.videoSources=i,console.log(this.videoSources),console.log(this.premiumVideoUrlLink)}}played(i){console.log("played",i)}play(){this.player.play()}pause(){this.player.pause()}stop(){this.player.stop()}ngOnInit(){this.freeVideos()}}return i.\u0275fac=function(e){return new(e||i)(b.Jb(l.a),b.Jb(c.g),b.Jb(c.a),b.Jb(d.c))},i.\u0275cmp=b.Db({type:i,selectors:[["app-free-video"]],viewQuery:function(i,e){var o;1&i&&b.oc(s.a,!0),2&i&&b.dc(o=b.Vb())&&(e.plyr=o.first)},decls:16,vars:4,consts:[[3,"translucent"],["slot","start"],[1,"menu-a"],["class","ion-text-center",4,"ngIf"],["class","row",4,"ngIf"],["class","",4,"ngIf"],[1,"ion-f"],[1,"ion-text-center"],[1,"row"],["class"," mobile",4,"ngFor","ngForOf"],["class","col-md-4 web",4,"ngFor","ngForOf"],[1,"mobile"],[1,"card","mb-3"],[1,"row","no-gutters"],[1,"col-md-4"],["alt","...",1,"card-img",3,"src"],[1,"col-md-8"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"text-muted"],["class","btn btn-warning ion-text-center",3,"click",4,"ngIf"],[1,"btn","btn-warning","ion-text-center",3,"click"],[1,"col-md-4","web"],[1,""],[1,"card"],[1,"card-header"],[1,"col-md-6","text-left"],[1,"col-md-6","text-right"],[1,"btn","btn-danger","ion-text-center",3,"click"],["plyr","","plyrTitle","Custom video",3,"plyrPlaysInline","plyrCrossOrigin","plyrPoster","plyrSources","plyrTracks","plyrInit","plyrPlay"]],template:function(i,e){1&i&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-buttons",1),b.Kb(3,"ion-menu-button",2),b.Lb(),b.Mb(4,"ion-title"),b.lc(5,"Free Video"),b.Lb(),b.Lb(),b.Lb(),b.Mb(6,"ion-content"),b.kc(7,a,2,0,"h2",3),b.kc(8,y,3,2,"div",4),b.kc(9,f,12,6,"div",5),b.Mb(10,"ion-footer",6),b.Mb(11,"ion-toolbar"),b.Mb(12,"div",7),b.lc(13,"Terms and condition | Privacy Policy | Refund Policy "),b.Lb(),b.Mb(14,"div",7),b.lc(15," Copyright \xa9 Bharat Acharya Education 2020 All rights reserved."),b.Lb(),b.Lb(),b.Lb(),b.Lb()),2&i&&(b.Zb("translucent",!0),b.yb(7),b.Zb("ngIf","courceList"==e.show),b.yb(1),b.Zb("ngIf","courceList"==e.show),b.yb(1),b.Zb("ngIf","premiumVideo"==e.show))},directives:[r.l,r.A,r.d,r.t,r.z,r.j,t.j,r.k,t.i,s.a],styles:[".ion-f[_ngcontent-%COMP%]{--ion-background-color:#3171e0;--ion-text-color:#fff}@media only screen and (max-width:768px){.web[_ngcontent-%COMP%]{display:none}}@media only screen and (min-width:768px){.mobile[_ngcontent-%COMP%]{display:none}}"]}),i})()}];let g=(()=>{class i{}return i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(e){return new(e||i)},imports:[[c.j.forChild(L)],c.j]}),i})(),v=(()=>{class i{}return i.\u0275mod=b.Hb({type:i}),i.\u0275inj=b.Gb({factory:function(e){return new(e||i)},imports:[[t.b,n.b,r.B,g,s.b]]}),i})()}}]);