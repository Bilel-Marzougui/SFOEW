import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }



  registerProf(body:any){
    return this.http.post('http://38.242.195.210:3000/doctor/',body)
/*     console.log('service called') */

  }

  registerPatient(body:any){
    return this.http.post('http://38.242.195.210:3000/patient',body)
  }


}



