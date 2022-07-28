import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PatientFormsService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pat')
  constructor(private http:HttpClient) { }


  getForms(id:any,body){
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
    return this.http.get<any>(`${this.URL}`+'affect/getallform/'+id+'/'+body,{headers: headers})  
  
  }
  
}

