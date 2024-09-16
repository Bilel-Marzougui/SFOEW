import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../../src/environments/environment';
import { Observable,Subject, } from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  URL=environment.urlBackend
  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
  authToken:any=localStorage.getItem('token_Pat')

  header=new HttpHeaders().set('authorization',this.authToken)
  constructor(private http:HttpClient) { }

  getInvts(id:any){
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'invitation/getdemande/'+id,{headers: headers}).pipe(
      tap(() =>  {
        this._refreshNeeded$.next();
      })
    );   }
    
    acceptInvts(id:any ,body:any){
      const token=localStorage.getItem('token_Pat')
      const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
      return this.http.put<any>(`${this.URL}`+'invitation/updatedemande/'+body,id,{headers: headers})   }
  getDoctors(){
    const token=localStorage.getItem('token_Pat')
 const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'doctor/',{headers:headers})

  }
  myContacts(id:any){
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'demande/getmydoctor/'+id,{headers: headers})   }

    myContactsDoctor(id:any){
      const token=localStorage.getItem('token_Pat')
      const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
      return this.http.get<any>(`${this.URL}`+'invitation/getmydoctor/'+id,{headers: headers})   }
}

