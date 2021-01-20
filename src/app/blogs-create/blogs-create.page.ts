import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CsServiceService } from '../services/cs-service.service';
import {UploadAdapter} from "../ckEditor"
import swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-blogs-create',
  templateUrl: './blogs-create.page.html',   
  styleUrls: ['./blogs-create.page.scss'],           
})
export class BlogsCreatePage implements OnInit { 
  public myBlogs:NgForm;   
  public Editor = ClassicEditor;
  public tags = []; 
  public message:any;
  showSucessMessage: boolean;
  serverErrorMessages: string;
  public newblog:any={
    tags:this.tags,   
    body:""
  }

  // this.spinner.show(); 
  // this.spinner.hide();
 
  // customMessage(title, type) {
  //   swal({
  //     type: type,
  //     title: title,
  //     showConfirmButton: false,
  //     timer: 2000,
  //   });
  // }
  constructor(private cs:CsServiceService, private spinner: NgxSpinnerService) { }

  customMessage(title, type) {
    swal({
      type: type,
      title: title,
      showConfirmButton: false,
      timer: 3500,
    });
  }
 
  onSubmit(form:NgForm){
    if( this.newblog && this.newblog.id){
      this.spinner.show();
      console.log("call update")
      this.newblog.tags=this.tags.toString();
      console.log(this.newblog)
      this.cs.updateBlogs(this.newblog).subscribe(res=>{
        console.log(res)
          this.showSucessMessage = true;
          this.message="Update successfully";
          this.tags=[];
          this.newblog={tags:this.tags,
            body:""}
          setTimeout(() => 
          this.showSucessMessage = false
          , 4000);
          this.spinner.hide();
          this.customMessage("Update successfully", "success")
      },err=>{
        this.serverErrorMessages = err.error.message;
        this.customMessage(err.error.message, "warning")
        this.spinner.hide();
        throw err;
        
      })
    }else{
      console.log('call add')
      this.spinner.show();
    this.newblog.tags=this.tags.toString();
    console.log(this.newblog)
    this.cs.createBlogs(this.newblog).subscribe(res=>{
      console.log(res)
        this.showSucessMessage = true;
        this.message="Saved successfully";
        this.tags=[];
        this.newblog={tags:this.tags,
          body:""}
        setTimeout(() => 
        this.showSucessMessage = false
        , 4000);
        this.spinner.hide();
        this.customMessage("Saved successfully", "success")
    },err=>{
      this.serverErrorMessages = err.error.message;
      this.customMessage(err.error.message, "warning")
      this.spinner.hide();
      throw err;
      
    })   
  }
  }
  onChange(val){
    console.log(val)
    console.log(this.tags) 
    if(this.newblog && this.newblog['id']){
      console.log("edit tag");
    this.tags=val;   
    console.log(this.tags)  
    }
  }
  
  
  onReady(eventData) {
    eventData.plugins.get('FileRepository').createUploadAdapter = function (loader) {
      console.log(btoa(loader.file));
      return new UploadAdapter(loader);
    };
  }

  ngOnInit() {
    let tagArr=[]
    let data=this.cs.getObjLatestBlog()
    if(data && data['id']){
      data['tags'].forEach(val => {
        tagArr.push(val.title);
      });
      this.tags=tagArr;   
    this.newblog={
        id:data['id'],
        tags:tagArr,
        body:data['body'],
        image:data['image'],
        title:data['title'],
        author:data['author']
    }
    console.log(data)   
  }

}
}