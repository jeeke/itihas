import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';
import { CsServiceService } from '../services/cs-service.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public sliderOne:any={}
  public courses:any[];
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  //Configuration for each Slider

  constructor(private activatedRoute: ActivatedRoute, private router:Router, private menu: MenuController, private cs:CsServiceService, private spinner: NgxSpinnerService) { }
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  
    
  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
  getCourses(){
    this.spinner.show();
    this.cs.getCourses().subscribe(res=>{
      console.log("res",res)
      if(res && res.length>0){

      this.courses=res;
      this.spinner.hide();
      }else{
        console.log("no data")
        this.spinner.hide();
      }
    }, err=>{
      this.spinner.hide();
      throw err;
    })
  }
  redirectCourceList(data){
    this.cs.getCourseIdBasedCourseList(data).subscribe(res=>{
      if(res){
      console.log(res)
      this.cs.postListData(res);
      this.router.navigate(['./courselist'])
      }else{
        console.log("no res")
      }
    });
  }

  ngOnInit() {
    this.getCourses()
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1,
          img:`https://www.push10.com/wp-content/uploads/genji-sushi-branding.jpg`
        },
        {
          id: 2,
          img:`https://www.push10.com/wp-content/uploads/technology-website-photography-2-1.jpg`
        },
        {   
          id: 3,    
          img:`https://www.push10.com/wp-content/uploads/architecture-website-photography.jpg`
        },
      ]
    }
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
}

