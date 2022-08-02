import { Injectable } from '@angular/core';
declare const gapi : any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService {



  constructor() { 
  gapi.load('auth2',()=>{
    gapi.auth2.init({
      client_id:'749769172340-8ph7a2m8m9c9jmtbf39g070m8b4h0jsu.apps.googleusercontent.com'
    })
  })
}
}