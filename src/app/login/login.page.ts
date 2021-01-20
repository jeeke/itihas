import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CsServiceService } from '../services/cs-service.service';
import swal from "sweetalert2";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  login:any={
    
  }
  showSucessMessage: boolean;
  serverErrorMessages: string;
  constructor(private cs:CsServiceService, private router:Router, private spinner: NgxSpinnerService) {

   }

   customMessage(title, type) {
    swal({
      type: type,
      title: title,
      showConfirmButton: false,
      timer: 3500,
    });
  }

   onSubmit(form : NgForm, ){
    this.spinner.show();
    this.cs.login(form.value).subscribe(
      res => {
        console.log(res)
        this.showSucessMessage = true;
        this.spinner.hide();
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.customMessage("Saved successfully", "success")
        this.cs.setToken(res['token'], res['user_type']);
        this.router.navigate(['/Home']);
        location.reload();
      },
      err => {
        this.serverErrorMessages = err.error.message;
        this.spinner.hide();
        this.customMessage(err.error.message, "warning")

      }       
    );
  }
   resetForm(form: NgForm) {    
    this.login = {
    };
    form.resetForm();
    this.serverErrorMessages = '';
  }

  ngOnInit() {
  }     

}
