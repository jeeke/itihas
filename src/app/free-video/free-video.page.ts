import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CsServiceService } from '../services/cs-service.service';
import { NgxSpinnerService } from "ngx-spinner";
import { PlyrComponent } from 'ngx-plyr';
@Component({
  selector: 'app-free-video',
  templateUrl: './free-video.page.html',
  styleUrls: ['./free-video.page.scss'],
})
export class FreeVideoPage implements OnInit {
  @ViewChild(PlyrComponent)
  plyr: PlyrComponent;
  player: Plyr;
  public courseList:any[];
  public show:any="courceList";
  public title:any;
  public poster:any;
  public videoSources: Plyr.Source[]
  public premiumVideoUrlLink:any;
  constructor(private cs:CsServiceService,private router:Router, private route:ActivatedRoute, private spinner: NgxSpinnerService) { }

  freeVideos(){
    this.spinner.show();
   this.cs.freeVideos().subscribe(res=>{
     if(res && res.length>0){
      this.courseList=res;
      console.log(res)
      this.spinner.hide();
     }else{
       console.log("no dta")
       this.spinner.hide();
     }
   }, err=>{
    this.spinner.hide();
     throw err;
   })
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
 
  //      

  // [
            
  //   {
  //     src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
  //     type: 'video/mp4',
  //     size: 720,
  //   },
  //   {
  //     src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
  //     type: 'video/mp4',
  //     size: 1080,
  //   },
  //   {
  //     src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
  //     type: 'video/mp4',
  //     size: 1440,
  //   },
  // ];

  // youtubeSources = [
  //   {
  //     src: 'https://youtube.com/watch?v=bTqVqk7FSmY',
  //     provider: 'youtube',
  //   },
  // ];
  // videoSources: Plyr.Source[] = [
  //   {
  //         src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
  //         type: 'video/mp4',
  //         size: 720,    
  //       },
  // ]
  // poster = this.imageLink();

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
// 



  ngOnInit() {
    this.freeVideos()      
  }

}
