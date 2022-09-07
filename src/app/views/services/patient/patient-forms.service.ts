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

// all forms
  getForms(id:any,body){
    console.log(1,id,body)
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)
  /* console.log(id,body,"headers",token) */
    return this.http.get<any>(`${this.URL}`+'affect/getallform/'+id+'/'+body,{headers: headers})  
  
  }
  getFormsDoctor(id:any,body){
    console.log(2)
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)
/*   console.log(id,body,"headers",token) */
    return this.http.get<any>(`${this.URL}`+'affect/getallform/'+id+'/'+body,{headers: headers})  
  
  }
addRep(data){
  const token=localStorage.getItem('token_Pat')
  const headers=new HttpHeaders().set('authorization','Bearer '+token)


  return this.http.post<any>(`${this.URL}`+'response/addresponse',data)  
}
getRepdoctor(idPatient:any,idDoc:any,idForm:any){
  const token=localStorage.getItem('token_Pro')
  const headers=new HttpHeaders().set('authorization','Bearer '+token)

console.log("eeee",`${this.URL}`+'response/getuserformresponse/'+idPatient+'/'+idDoc+'/'+idForm)
  return this.http.get<any>(`${this.URL}`+'response/getuserformresponse/'+idPatient+'/'+idDoc+'/'+idForm,{headers: headers})  
}
getRep(idPatient:any,idDoc:any,idForm:any){
  const token=localStorage.getItem('token_Pat')
  const headers=new HttpHeaders().set('authorization','Bearer '+token)

console.log("eeee",`${this.URL}`+'response/getuserformresponse/'+idPatient+'/'+idDoc+'/'+idForm)
  return this.http.get<any>(`${this.URL}`+'response/getuserformresponse/'+idPatient+'/'+idDoc+'/'+idForm,{headers: headers})  
}
  getFormsById(idForm:any){
 /*    console.log('here sis service')
    console.log(idForm) */
    const token=localStorage.getItem('token_Pat')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)


    return this.http.get<any>(`${this.URL}`+'forms/getformsbyid/'+idForm,{headers: headers})  
  
  }
  getFormsDoctById(idForm:any){
    /*    console.log('here sis service')
       console.log(idForm) */
       const token=localStorage.getItem('token_Pro')
       const headers=new HttpHeaders().set('authorization','Bearer '+token)
   
   
       return this.http.get<any>(`${this.URL}`+'forms/getformsbyid/'+idForm,{headers: headers})  
     
     }
}

