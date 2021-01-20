import { Component, OnInit } from '@angular/core';
import { CsServiceService } from '../services/cs-service.service';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.page.html',
  styleUrls: ['./booklist.page.scss'],
})
export class BooklistPage implements OnInit {
public bookList:any[]
  constructor(private cs:CsServiceService, private spinner: NgxSpinnerService) { } 

  getBookList(){
    this.spinner.show();
    this.cs.bookList().subscribe(res=>{ 
      if(res && res.length>0){
        this.bookList=res
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
  opentNewTab(link){
    window.open( 
      link, "_blank"); 

  }

  ngOnInit() {
    this.getBookList()
  }

}
