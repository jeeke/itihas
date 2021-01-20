import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CsServiceService } from '../services/cs-service.service';
import swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-blogs-details',
  templateUrl: './blogs-details.page.html',
  styleUrls: ['./blogs-details.page.scss'],
})
export class BlogsDetailsPage implements OnInit {
public blog:any={}
public type:any;
public comment:any={}
public comments:any[]
  constructor(private cs:CsServiceService, private router:Router, private spinner: NgxSpinnerService) { }

  customMessage(title, type) {
    swal({
      type: type,
      title: title,
      showConfirmButton: false,
      timer: 3500,
    });
  }

getBlogObj(){
    this.blog=this.cs.getObjLatestBlog()
    if(Object.keys(this.blog).length==0){
      this.router.navigate(['./Home'])
    }else{
      true;
     }
}
redirectEditBlog(){
  this.router.navigate(['./blogs-create'])

}
onSubmit(form:NgForm){
  this.spinner.show();
  console.log(form.value)
  this.cs.addComment(this.blog.id, form.value).subscribe(res=>{
    console.log(res)
    this.getComment()
    form.resetForm();
    this.comment={}
    this.spinner.hide();
    this.customMessage("Save successfully", "success")
  }, err=>{
    this.spinner.hide();
    this.customMessage(err, "warning")
    throw err;
  })
}
getComment(){
  console.log(this.blog.id)
  this.cs.getComment(this.blog.id).subscribe(res=>{
    if(res && res.length>0){
      this.comments=res;
      console.log(res); 
    }
    else{
      console.log('blank')
    }
     
  }, err=>{
    throw err;
  })
}

  ngOnInit() {
    this.getBlogObj()
    this.getComment()
    this.type=this.cs.getUserType();
    console.log(this.type)
  }

}
