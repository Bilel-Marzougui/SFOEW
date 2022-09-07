import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pro')
  constructor(private http:HttpClient) { }


  getVideo(){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'urlvideo',{headers: headers})  
  
  }
  // getVideo(){
  //   return this.http.get(`${this.URL}`+'urlvideo/')
  // }
}
