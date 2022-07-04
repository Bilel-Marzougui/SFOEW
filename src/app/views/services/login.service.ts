import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  Prof={
    name:'',
    role:''
  }
  IsLoggedIn:boolean=false

  constructor(private http:HttpClient,private router:Router) { }

  login(body:any){
    return this.http.post('http://38.242.195.210:3000/login/',body)


  }
  saveData(token:any,name:any,role:any){
    localStorage.setItem('tokenprof',token)
    localStorage.setItem('role',role)

    this.Prof.name=name
  this.Prof.role=role
  this.IsLoggedIn=true

}
}

