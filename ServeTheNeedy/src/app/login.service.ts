import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   API = "http://localhost:8082/api/v1";

  islogin=false;

  public formData: FormGroup;
  constructor(private http:HttpClient) { }
  login(needyid :number,password:string){
    return this.http.get('this.API + /login/auth/{name}');
  }
}
