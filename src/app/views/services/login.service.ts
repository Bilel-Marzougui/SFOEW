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

   

    console.log('gbal decode  '+token)

let decodeToken=this.helper.decodeToken(token)
console.log('baad decoe '+decodeToken)

localStorage.setItem('token',token)
localStorage.setItem('token2',decodeToken.values)

localStorage.setItem('email',decodeToken.email)
localStorage.setItem("test", JSON.stringify(decodeToken));
   
console.log(decodeToken)
  }


  loginSPat(body:any ){
    return this.http.post('http://38.242.195.210:3000/patient/login',body)


  }

  saveDataPat(token:any ){
    console.log(token)
    let decodeToken=this.helper.decodeToken(token)
    localStorage.setItem('token',token)
localStorage.setItem('name',decodeToken.name)
    console.log(decodeToken)
      }

}

