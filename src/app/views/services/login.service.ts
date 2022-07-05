import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  Prof={
    name:'',
    role:''
  }
  IsLoggedIn:boolean=false

   helper = new JwtHelperService();

  constructor(private http:HttpClient,private router:Router) { }

  loginSPro(body:any){
    return this.http.post('http://38.242.195.210:3000/doctor/login',body)


  }
  saveDataPro(token:any ){

let decodeToken=this.helper.decodeToken(token)
console.log(decodeToken)

localStorage.setItem('token',decodeToken)
localStorage.setItem('role',decodeToken.role)



console.log(decodeToken)
  }


  loginSPat(email:string, password:string ){
    return this.http.post('http://38.242.195.210:3000/patient/login',{email, password})


  }

  saveDataPat(token:any ){
    let decodeToken=this.helper.decodeToken(token)
    localStorage.setItem('token',token)

    console.log(decodeToken)
      }

}

