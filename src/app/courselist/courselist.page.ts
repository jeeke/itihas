import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CsServiceService } from '../services/cs-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { PlyrComponent } from 'ngx-plyr';

declare var Razorpay:any
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage implements OnInit {
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;
  player: Plyr;
public courseList:any={}
public show:any="courceList";
public title:any;
public poster:any;
public videoSources: Plyr.Source[]
public premiumVideoUrlLink:any;
  constructor(private cs:CsServiceService,private router:Router, private spinner: NgxSpinnerService) { }

  getCourceList(){
     this.courseList=this.cs.getListData();
     console.log(this.courseList)
     if(Object.keys(this.courseList).length==0 || JSON.stringify(this.courseList)=="{}"){
      this.router.navigate(['./Home'])
    }else{
      true;
     }
  }     

  razorPayOptions={
    "key":"",
    "ammount":"",
    "currency":"",
    "name":"",
    "description":"",
    "order_id":"",
    "handler":(res)=>{      
      console.log(res)
    },
  }
  subscribeCourse(id){
    let obj={}
    this.spinner.show();
    this.cs.subscribeCourse(id).subscribe(res=>{
      this.spinner.hide();
      console.log("abc",res['amount']);
      obj=res;  
     if(obj.hasOwnProperty('amount') && obj['amount'] > 0){
      this.razorPayOptions.key=environment.razorPayKey;
      this.razorPayOptions.ammount=res['amount'];
      this.razorPayOptions.currency =res['currency'];
      this.razorPayOptions.order_id=res['id'];
      this.razorPayOptions.handler=this.razorpayResponceHandler
      var rzp1=new Razorpay(this.razorPayOptions)
      rzp1.open()
      console.log('open')
     }        
    else{ 
      this.router.navigate(['./Home'])
    }       
    },err=>{   
      this.spinner.hide();   
      throw err
              
    })
  }  
  razorpayResponceHandler(res){   
    console.log(res)
    if(res['razorpay_payment_id']){    
      this.router.navigate(['./Home'])
    }  
  }

  openPremiumVideo(open, url, titles, image){
    console.log(open, url)
    this.show=open;
    this.premiumVideoUrlLink=url;
    this.title=titles;
    this.poster=image;
    this.checkUrlVideLink()

  }
  backLIst(open){
    this.show=open;

  }

  link(){
    return this.premiumVideoUrlLink
  }
 
 
  checkUrlVideLink(){
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        var match = this.premiumVideoUrlLink.match(regExp);
    
   console.log(match);
    
    if(match && match[2].length == 11){
      console.log('youtube');
      
    this.videoSources=[
        {
              src: `${this.premiumVideoUrlLink}`,
              provider: 'youtube',  
            },
          ]
          console.log(this.videoSources)
    }else{
      console.log('video');

      let data=[]
      let lopping=[576, 720, 1080, 1440];
      lopping.forEach(val=>{
        console.log(val)
        data.push(
        {
            src: `${this.premiumVideoUrlLink}`,
            type: 'video/mp4',
            size: val,
          }
        
        )
        
      })
      console.log(data)
      this.videoSources=data; 
      console.log(this.videoSources)
      console.log(this.premiumVideoUrlLink)


    }
  }
  tracks = [    
    {
      kind: 'captions', 
      label: 'English',
      srclang: 'en',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
      default: true,
    },
    {
      kind: 'captions',
      label: 'French',
      srclang: 'fr',
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
    }
  ];

  played(event: Plyr.PlyrEvent) {
    console.log('played', event);
  }

  play(): void {
    this.player.play(); // or this.plyr.player.play()
  }

  pause(): void {
    this.player.pause(); // or this.plyr.player.play()
  }

  stop(): void {
    this.player.stop(); // or this.plyr.player.stop()
  }

 

  ngOnInit() {
    console.log("lll")
    this.getCourceList()
  }

}
