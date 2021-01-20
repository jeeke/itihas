import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CsServiceService } from '../services/cs-service.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.page.html',
  styleUrls: ['./blogs-list.page.scss'],
})
export class BlogsListPage implements OnInit {
public blogs:any[]
public type:any
  constructor(private cs:CsServiceService, private router:Router, private spinner: NgxSpinnerService) { }

  getBlogs(){
    this.spinner.show();
    this.cs.getBlogsList().subscribe(res=>{
      if(res && res.length>0){
        this.blogs=res
        console.log(res)
        this.spinner.hide();
      }else{
        console.log("no record in array")
        this.spinner.hide();
      }      
    },err=>{
      this.spinner.hide();
      throw err; 
    })
  }
  openDetailsPage(data){
    console.log(data)
    this.router.navigate(['./blogdetails', data.title])
    this.cs.setObjLatestBlog(data)
  }
  redirectCreateBlog(){
    this.router.navigate(['./blogs-create'])
  }
  ngOnInit() {
    this.getBlogs()
    this.type=this.cs.getUserType();
    console.log(this.type)
  }

}
