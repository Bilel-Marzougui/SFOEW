import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable,Subject, } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class InvitaionsService {
  URL=environment.urlBackend;
  token:any=localStorage.getItem('token_Pro');

  constructor(private http:HttpClient) { }
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
 
getInvts(id:any): Observable<any>{
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

  return this.http.get<any>(`${this.URL}`+'demande/getdemande/'+id,{headers: headers})   }
getInvt(id:any){
      let obj ={
        doctor :id
      }
      const token=localStorage.getItem('token_Pro')
      const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
  return this.http.post<any>(`${this.URL}`+'invitation/getInvitation/',obj,{headers: headers}).pipe(
    tap(() =>  {
      this._refreshNeeded$.next();
    })
  );   }
getListEnvoi(id:any){
        let obj ={
          doctor :id
        }
        const token=localStorage.getItem('token_Pro')
        const headers=new HttpHeaders().set('authorization','Bearer '+token)
    
  return this.http.post<any>(`${this.URL}`+'invitation/getInvitationdemande/',obj,{headers: headers}).pipe(
    tap(() =>  {
      this._refreshNeeded$.next();
    })
  );    }
acceptInvts(id:any ,body:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

  return this.http.put<any>(`${this.URL}`+'demande/updatedemande/'+body,id,{headers: headers})   }

myContacts(id:any){
      const token=localStorage.getItem('token_Pro')
      const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
  return this.http.get<any>(`${this.URL}`+'demande/getmypatient/'+id,{headers: headers})   }
myContactsPatient(id:any){
        const token=localStorage.getItem('token_Pro')
        const headers=new HttpHeaders().set('authorization','Bearer '+token)
    
  return this.http.get<any>(`${this.URL}`+'invitation/getmypatient/'+id,{headers: headers})   }

removeInvts(id:any): Observable<any>{
          const token=localStorage.getItem('token_Pro')
          const headers=new HttpHeaders().set('authorization','Bearer '+token)
      
  return this.http.delete<any>(`${this.URL}`+'invitation/deletedemande/'+id,{headers: headers})   }
}
