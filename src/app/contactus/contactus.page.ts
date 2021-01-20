import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CsServiceService } from '../services/cs-service.service';
import swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  contact:any={}
  showSucessMessage: boolean;
  serverErrorMessages: string;
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
    this.spinner.show();
    console.log(form.value)
    this.cs.contactUs(form.value).subscribe(
      res => {
        console.log(res)
        this.showSucessMessage = true;
        this.contact={}
        setTimeout(() => 
        this.showSucessMessage = false
        , 4000);
        this.spinner.hide();
        this.customMessage("Saved successfully", "success")
      },
      err => {
        this.serverErrorMessages = err.error.message;
        this.spinner.hide();
        this.customMessage(err.error.message, "warning")
      }
    );
  }

  ngOnInit() {
  }

}
