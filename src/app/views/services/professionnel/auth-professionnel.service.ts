import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthProfessionnelService {

  helper = new JwtHelperService();
  URL=environment.urlBackend

  constructor(private http: HttpClient, private router: Router) { }



  registerProf(body:any){
    return this.http.post(`${this.URL}`+'doctor/',body)
  }

  loginSPro(body: any) {
    return this.http.post(`${this.URL}`+'doctor/login', body)


  }

  saveDataPro(token: any) {

    let decodeToken = this.helper.decodeToken(token)

    localStorage.setItem('token_Pro', token)
    localStorage.setItem('role', decodeToken.subject.role)
    localStorage.setItem('id_Pro', decodeToken.subject._id)

    console.log(decodeToken)
  }
  geid(){
    let id =localStorage.getItem('id_Pro')



     return id

   }
  getNamePro() {
    let token: any = localStorage.getItem('token_Pro')
    let decodeToken = this.helper.decodeToken(token)
    return decodeToken.subject.name
  }
  getUsername(){
    let token:any=localStorage.getItem('token_Pro')
    console.log(token)

    let decodeToken= this.helper.decodeToken(token)



     return decodeToken.subject

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


}
