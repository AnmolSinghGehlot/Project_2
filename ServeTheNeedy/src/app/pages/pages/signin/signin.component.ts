import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

import {ToastrService}from'ngx-toastr';
import { LoginService } from 'src/app/login.service';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  needy: any={};
  errorMessage:string;
  name: string;
  loginForm: FormGroup;

  constructor(private router:Router, private loginService : LoginService,
    public toastr: ToastrService,public fb: FormBuilder){}

    ngOnInit(){
      this.loginService.islogin=false;
      
      this.loginForm=this.fb.group({
        'username': [null, Validators.required],
        'password':[null,Validators.required]
      });
    }
    login(){
      const val = this.loginForm.value;
      this.loginService.login(val.username,val.password).subscribe(
        res=> {
          this.needy=res;
         if( this.needy.password == val.password){
           localStorage.setItem("name",this.needy.username);
           this.loginService.islogin=true;
           this.router.navigate(['./needy']);
         }
         else{
           this.toastr.warning('incorrect password')
         }
        },
        error =>
        this.toastr.warning('Login Incorrent')
      );
     
    }

 
}
