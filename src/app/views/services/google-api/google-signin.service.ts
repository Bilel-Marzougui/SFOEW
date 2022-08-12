import { Injectable, OnInit } from '@angular/core';
// import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login'

declare const gapi : any;

@Injectable({
  providedIn: 'root'
})
export class GoogleSigninService implements OnInit {
// user!:SocialUser;

ngOnInit(): void {
  // this.SocialAuth.authState.subscribe((user)=>{
  //   this.user=user;
  // })
}
  constructor(    
    ) { 
  gapi.load('auth2',()=>{
    gapi.auth2.init({
      client_id:'749769172340-8ph7a2m8m9c9jmtbf39g070m8b4h0jsu.apps.googleusercontent.com'
    })
  })
}

googleLoginOptions = {
  scope: 'profile email'
}; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

  


// signWithGoogle():any{
//   this.SocialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);

// }
// signOut():any{
// this.SocialAuth.signOut();
// }
// signInWithGoogle(): void {
//   this.SocialAuth.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
//     console.log(data);
//   }).catch(data => {
//     this.SocialAuth.signOut();
//   });

// }
}
