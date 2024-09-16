import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthPatientService {
  helper = new JwtHelperService();
  URL=environment.urlBackend

  constructor(private http:HttpClient, private router: Router) { }

    // *****************start register Service**************************************//

  registerPatient(body:any){
    return this.http.post(`${this.URL}`+'patient',body)
  }
  emailIsExist(body:any){
 
    return this.http.post(`${this.URL}`+'patient/isExist',body)
  }

    // *****************start login Service**************************************//

    loginSPat(body: any) {
      return this.http.post(`${this.URL}`+'patient/login', body)


    }

    saveDataPat(token: any) {
 /*      console.log(token) */
      let decodeToken = this.helper.decodeToken(token)
      localStorage.setItem('token_Pat', token)
      localStorage.setItem('name', decodeToken.subject.name)
      localStorage.setItem('id', decodeToken.subject._id)

    /*   console.log(decodeToken) */
    }


    getUsername(){
      let token:any=localStorage.getItem('token_Pat')
    /*   console.log(token) */

      let decodeToken= this.helper.decodeToken(token)



       return decodeToken.subject

     }
     geid(){
      let id =localStorage.getItem('id')



       return id

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


  }

