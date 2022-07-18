import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UpdProfilProServiceService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pro')
  header=new HttpHeaders().set('authorization',this.token)

  constructor(private http:HttpClient) { }

  updateprof(id:any,body:any){

 console.log(id,body)
 console.log(this.token)
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

       return this.http.put<any>(`${this.URL}`+'doctor/'+id,body,{headers:headers});

  }
  updPhotoPro(id:any,body:any){

    console.log(id,body)
    console.log(this.token)
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)


       return this.http.put<any>(`${this.URL}`+'doctor/updatephoto/'+id,body,{headers:headers});

     }

  getProf(id:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'doctor/'+id,{headers: headers})   }


}
