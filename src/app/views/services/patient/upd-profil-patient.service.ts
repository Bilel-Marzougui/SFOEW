import { Injectable } from '@angular/core';
import { HttpClient,  HttpEvent,  HttpHandler,  HttpHeaders, HttpParams, HttpRequest  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable,Subject, } from 'rxjs';
import {tap} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class UpdProfilPatientService {
URL=environment.urlBackend
_uploadImage:any

token:any=localStorage.getItem('token_Pat')

header=new HttpHeaders().set('authorization',this.token)

  constructor(private http:HttpClient,private translate: TranslateService) {

  }

  private _refreshNeeded$ = new Subject<void>();
  get refreshNeeded$() {
    return this._refreshNeeded$;
  }
 
changeLang(lang){
  this.translate.addLangs(['en', 'fr']);
  this.translate.setDefaultLang('en');

  const browserLang = lang;
 return this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
}
  updatePatient(id:any,body:any){

 console.log(id,body)
/*  console.log(this.token) */
 const token=localStorage.getItem('token_Pat')
 const headers=new HttpHeaders().set('authorization','Bearer '+token)


    return this.http.put<any>(`${this.URL}`+'patient/'+id,body,{headers:headers});
  }

  updPhotoPat(id:any,body:any){
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)
       return this.http.put<any>(`${this.URL}`+'patient/updatephoto/'+id,body,{headers:headers});
        }


    getPatient(id:any){
      const token=localStorage.getItem('token_Pat')
    
      const headers=new HttpHeaders().set('authorization','Bearer '+token)
/*       console.log(headers) */
      return this.http.get<any>(`${this.URL}`+'patient/'+id,{headers: headers})   }

      getAllPatient(){
        const token=localStorage.getItem('token_Pro')
        const headers=new HttpHeaders().set('authorization','Bearer '+token)
  
        return this.http.get<any>(`${this.URL}`+'patient/',{headers: headers}).pipe(
          tap(() =>  {
       /*      console.log(111) */
            this._refreshNeeded$.next();
          })
        );  
        }

      uploadImage(image){

        /*   console.log("iiii",image) */
      
          return this.http.post(`${this.URL}`+"uploadApi/", {image :image} );
      
        }
          
  
  
        updateDoctorPhoto(id:any, photo:any){
     /*      console.log('serviceee update')
  
        console.log(id,photo) */
        
            return this.http.put(`${this.URL}`+'patient/updatephoto/' +id , photo);
        
          }

}

