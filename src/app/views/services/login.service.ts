import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  helper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) { }



  // ***************** start Professionnel Service**************************************//

  loginSPro(body: any) {
    return this.http.post('http://38.242.195.210:3000/doctor/login', body)


  }

  saveDataPro(token: any) {

    let decodeToken = this.helper.decodeToken(token)

    localStorage.setItem('token_Pro', token)
    localStorage.setItem('role', decodeToken.subject.role)
    localStorage.setItem('name_Pro', decodeToken.subject.name)

    console.log(decodeToken)
  }

  getNamePro() {
    let token: any = localStorage.getItem('token_Pro')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.subject.name
  }
  functionOne(i,tab){
 
    var index = tab.findIndex(s => s.type === i);
  /*   console.log('ggggggggggggggggg',i,tab[index],index) */
    return tab[index]
  }  
  LoggedInPro(){
    let token:any=localStorage.getItem('token_Pro')
    if(!token){
     return false
    }
    let decodeToken=this.helper.decodeToken(token)


    if(decodeToken.subject.role!==2){
      return false
    }

    if(this.helper.isTokenExpired(token)){
      return false
    }

    return true
 }


  // ***************** end Professionnel Service**************************************//





  // *****************start Patient Service**************************************//

  loginSPat(body: any) {
    return this.http.post('http://38.242.195.210:3000/patient/login', body)


  }

  saveDataPat(token: any) {
    console.log(token)
    let decodeToken = this.helper.decodeToken(token)
    localStorage.setItem('token_Pat', token)
    console.log(decodeToken)
  }


  getNamePat() {
    let token: any = localStorage.getItem('token_Pat')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.subject.name
  }
  LoggedInPat(){
    let token:any=localStorage.getItem('token_Pat')
    if(!token){
     return false
    }

    if(this.helper.isTokenExpired(token)){
      return false
    }

    return true
 }

  // *****************end Patient Service**************************************//







}

