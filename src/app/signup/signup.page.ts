import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CsServiceService } from '../services/cs-service.service';
import swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
 emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  user:any={
    
  }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private cs:CsServiceService, private spinner: NgxSpinnerService) {

   }
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
     this.cs.Signup(form.value).subscribe(res => {
      this.showSucessMessage = true;
      setTimeout(() => this.showSucessMessage = false, 4000);
      this.spinner.hide();
      this.customMessage("Saved successfully", "success")
      this.resetForm(form);

    },
    err => {
      if (err.status === 422) {
        this.serverErrorMessages = err.error.join('<br/>');
        this.spinner.hide();
        this.customMessage(err.error.join('<br/>'), "warning")
      }
      else
        this.serverErrorMessages = 'Something went wrong.Please contact admin.';
        this.spinner.hide();
        this.customMessage('Something went wrong.Please contact admin.', "success")
    }
  );
   }
   resetForm(form: NgForm) {
    this.user = {
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  ngOnInit() {
  }

}
 