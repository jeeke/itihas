import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CsServiceService } from './services/cs-service.service';
import { Router } from '@angular/router';
import swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public is_login:any;
  public appPages = [
    {
      title: 'Home',
      url: '/Home',
      icon: 'home'
    },
    {
      title: 'Videos',
      url: '/free-video',
      icon: 'videocam'
    },
    {
      title: 'Books',
      url: '/booklist',
      icon: 'book'    
    },
    {
      title: 'Blogs',
      url: '/blogs',
      icon: 'archive'
    },
    // {
    //   title: 'Login',
    //   url: '/login',
    //   icon: 'log-in'
    // },
    {
      title: 'SignUp',
      url: '/signup',
      icon: 'trail-sign'
    },
    {
      title: 'About Us',
      url: '/aboutus',
      icon: 'telescope'
    },
    {
      title: 'Contact Us',
      url: '/contactus',
      icon: 'send'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cs:CsServiceService,
    private route:Router,
    private spinner: NgxSpinnerService
  ) {
    this.initializeApp();
  }
  customMessage(title, type) {
    swal({
      type: type,
      title: title,
      showConfirmButton: false,
      timer: 3500,
    });
  }
 

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  logout(){
    this.spinner.show();
    let cs=confirm("Are you sure want to logout")
    if(cs){
      this.cs.deleteToken();
      this.spinner.hide();
      this.customMessage("logout successfully", "success")
      this.route.navigate(['./Home'])
      location.reload();
    }else{
      this.spinner.hide();
      console.log("not logout")
    }

  }
  login(){
    this.route.navigate(['./login'])
  }
 
  ngOnInit() {
    this.is_login= this.cs.getToken();
    console.log('ss',this.is_login)
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
