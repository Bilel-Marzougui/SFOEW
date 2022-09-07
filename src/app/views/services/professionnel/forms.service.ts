import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FormsService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pro')
  constructor(private http:HttpClient) { }


  getForms(id:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'affectation/getmyform/'+id,{headers: headers})  
  
  }
  getAffectation(idUser:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'affectation/getaffectation/'+idUser,{headers: headers})  
  
  }
  affectForm(id:any,body:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.post<any>(`${this.URL}`+'affect/addaffectation',body,{headers: headers})  
  
  }
  

  
  }