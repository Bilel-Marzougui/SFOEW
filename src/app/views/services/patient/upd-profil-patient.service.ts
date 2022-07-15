import { Injectable } from '@angular/core';
import { HttpClient,  HttpEvent,  HttpHandler,  HttpHeaders, HttpParams, HttpRequest  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UpdProfilPatientService {
URL=environment.urlBackend

token:any=localStorage.getItem('token_Pat')

header=new HttpHeaders().set('authorization',this.token)

  constructor(private http:HttpClient) {
  }



  updatePatient(id:any,body:any){

 console.log(id,body)
 console.log(this.token)
 const token=localStorage.getItem('token_Pat')
 const headers=new HttpHeaders().set('authorization','Bearer '+token)


    return this.http.put<any>(`${this.URL}`+'patient/'+id,body,{headers:headers});

    // return  this.http.put<any>("http://38.242.195.210:3000/patient/"+id,body);
  }

    getPatient(id:any){
      const token=localStorage.getItem('token_Pat')
      const headers=new HttpHeaders().set('authorization','Bearer '+token)

      return this.http.get<any>(`${this.URL}`+'patient/'+id,{headers: headers})   }

  


}

