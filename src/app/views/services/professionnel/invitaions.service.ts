import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvitaionsService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pro')
  constructor(private http:HttpClient) { }
  // demande/getmypatient/

  getInvts(id:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'demande/getdemande/'+id,{headers: headers})   }
 
    
  acceptInvts(id:any ,body:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.put<any>(`${this.URL}`+'demande/updatedemande/'+body,id,{headers: headers})   }

    myContacts(id:any){
      const token=localStorage.getItem('token_Pro')
      const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
      return this.http.get<any>(`${this.URL}`+'demande/getmypatient/'+id,{headers: headers})   }
    
}
