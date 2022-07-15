import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  URL=environment.urlBackend

  authToken:any=localStorage.getItem('token_Pat')

  header=new HttpHeaders().set('authorization',this.authToken)
  constructor(private http:HttpClient) { }



  getDoctors(){
    const token=localStorage.getItem('token_Pat')
 const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'doctor/',{headers:headers})

  }
}
