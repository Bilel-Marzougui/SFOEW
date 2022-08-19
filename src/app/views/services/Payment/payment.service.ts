// import { Injectable } from '@angular/core';
// import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
// import { environment } from '../../../../environments/environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class PaymentService {
//   URL=environment.urlBackend
//   token:any=localStorage.getItem('token_Pro')
//   constructor(private http:HttpClient) { }

//   monthlyPrice(){
//     const token=localStorage.getItem('token_Pro')
//     const headers=new HttpHeaders().set('authorization','Bearer '+token)

//     return this.http.get<any>(`${this.URL}`+'prix')  
  
//   }
//   yearlyPrice(){
//     const token=localStorage.getItem('token_Pro')
//     const headers=new HttpHeaders().set('authorization','Bearer '+token)

//     return this.http.get<any>(`${this.URL}`+'prix/an')  
  
//   }
//   checkAchat(id:any){
//     const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7Il9pZCI6IjYwZjQ5ZDFiOGM4Yjg2YmFhNTM4ZTNlYyIsIm5hbWUiOiJTQ09SRVMiLCJsYXN0bmFtZSI6IkFQUCIsImVtYWlsIjoic2NvcmVhcHAyMDIxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJvOGRpeEF1by5SL3RudkRqMnd4RXUwa3hQUXA5Y2tBQU94SkgwaTRqeEFuZDVTNTRoLkdXIiwicGhvdG8iOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9tZWQtaW4tb3V0bG9vay9pbWFnZS91cGxvYWQvdjE2NDI0MzIzNjkvY2xkLXNhbXBsZS5qcGciLCJhY2NvdW50X3N0YXRlIjp0cnVlLCJhcmNoaXZlZCI6ZmFsc2UsImFkZGVkX2RhdGUiOiIyMDIxLTA3LTE4VDIxOjI4OjU5Ljk2NloiLCJfX3YiOjB9LCJpYXQiOjE2NDYxMjAzNTB9.YmTzJjmx4PDGZViA8Apg6rsbgmdkappNEbwnaPHf1MQ'
//     const headers=new HttpHeaders().set('authorization','Bearer '+token)

//     return this.http.get<any>(`${this.URL}`+'achat/'+id,{headers:headers})  
  
//   }

//   pay(id:any){
//     const token=localStorage.getItem('token_Pro')
//     const headers=new HttpHeaders().set('authorization','Bearer '+token)

//     return this.http.get<any>(`${this.URL}`+'paypal/pay'+id,{headers:headers})  
  
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  URL=environment.urlBackend
  token:any=localStorage.getItem('token_Pro')
  constructor(private http:HttpClient) { }

  monthlyPrice(){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'prix')  
  
  }
  yearlyPrice(){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'prix/an')  
  
  }
  checkAchat(id:any){
    const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijp7Il9pZCI6IjYwZjQ5ZDFiOGM4Yjg2YmFhNTM4ZTNlYyIsIm5hbWUiOiJTQ09SRVMiLCJsYXN0bmFtZSI6IkFQUCIsImVtYWlsIjoic2NvcmVhcHAyMDIxQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJDJvOGRpeEF1by5SL3RudkRqMnd4RXUwa3hQUXA5Y2tBQU94SkgwaTRqeEFuZDVTNTRoLkdXIiwicGhvdG8iOiJodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9tZWQtaW4tb3V0bG9vay9pbWFnZS91cGxvYWQvdjE2NDI0MzIzNjkvY2xkLXNhbXBsZS5qcGciLCJhY2NvdW50X3N0YXRlIjp0cnVlLCJhcmNoaXZlZCI6ZmFsc2UsImFkZGVkX2RhdGUiOiIyMDIxLTA3LTE4VDIxOjI4OjU5Ljk2NloiLCJfX3YiOjB9LCJpYXQiOjE2NDYxMjAzNTB9.YmTzJjmx4PDGZViA8Apg6rsbgmdkappNEbwnaPHf1MQ'
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.get<any>(`${this.URL}`+'achat/'+id,{headers:headers})  
  
  }

  pay(id:any,body:any){
    const token=localStorage.getItem('token_Pro')
    const headers=new HttpHeaders().set('authorization','Bearer '+token)

    return this.http.post<any>(`${this.URL}`+'paypal/pay',body,{headers:headers})  
  
  }
}
