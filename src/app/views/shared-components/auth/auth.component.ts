import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Validators} from '@angular/forms';
 import { MustMatch } from '../../helper/MustMatch.validator';
import{RegisterService} from '../../services/register.service'
import{LoginService} from '../../services/login.service'
import{AuthPatientService} from '../../services/patient/auth-patient.service'
import{AuthProfessionnelService} from '../../services/professionnel/auth-professionnel.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login"

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent implements OnInit{
  // user!:SocialUser;

  messageError:any;
  registerFormPro: FormGroup;
  registerFormPat:FormGroup;
  loginFormPro:FormGroup;
  loginFormPat:FormGroup;

    submitted = false;
    public selectedVal="Professionnel";
    public selectedVal2="Professionnel";



    myDate = new Date();
    datatoken:any;
    dataResponse:any;
    status:any;
    action:any;
    showDetails: boolean;

    hide : boolean = true;

    myFunction() {
      this.hide = !this.hide;
    }


  constructor(
    private authService: SocialAuthService,
 private snackBar:MatSnackBar,
    private datePipe: DatePipe,
    public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,
    private formBuilder: FormBuilder, private logService:LoginService ,
    private regService:RegisterService ,
    private AuthPatient:AuthPatientService ,
    private AuthProfessionnel:AuthProfessionnelService ,
    private router:Router)  {}

  doctor={
    photo: 'undefined',
    name: 'haj salah',
    lastname: 'karim',
    email: 'scoreapp2zzdddd021@gmail.com',
    birthday: '2022-06-22',
    adresse: 'Tunis',
    tel: '+21625295344',
    password: 'aqw741zsx852edc963',
    added_date: '',
    job: 'hjxgfhjklm',
    fax: '1111111111',
    gender: 'femme',
    adeli: '111111111',
    rpps: '11111111111',
    role: '2'
  }
  doctorLog={
    email: '',
    password: '',

  }
  patient={

      name: 'hanen',
      lastname: 'yassin',
      birthday: '12/12/2015',
      adresse: 'jj',
      tel: '+33333333333333',
      email: 'yassin1@gmail.com',
      password: 'yyyyyy',
      ssn: '77',
      gender: 'homme',
      photo: '',
      account_state: true,
      archived: false,
      added_date: '2022-05-26T09:50:18.419+00:00'

  }




  ngOnInit() {

    
    console.log(this.selectedVal)
    console.log(this.selectedVal2)

    this.registerFormPro = this.formBuilder.group({

      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      tel: ['', Validators.required],
      fax: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      adresse: ['', Validators.required],
      gender: ['', Validators.required],
      job: ['', Validators.required],
      adeli: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      rpps: ['', Validators.required,Validators.pattern("^[0-9]*$")],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['2',Validators.required],
      acceptTerms: [false, Validators.requiredTrue],

  }, {
      validator: MustMatch('password', 'confirmPassword')
  });


  this.registerFormPat = this.formBuilder.group({

    name: ['', Validators.required],
    lastname: ['', Validators.required],
    birthday: ['', Validators.required],
    tel: ['', Validators.required],
    adresse: ['', Validators.required],
    ssn: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
    acceptTerms: [false, Validators.requiredTrue]
}, {
    validator: MustMatch('password', 'confirmPassword')
});


this.loginFormPro = this.formBuilder.group({

  email: ['', Validators.required],
  password: ['', Validators.required],
},);

this.loginFormPat = this.formBuilder.group({

  email: ['', Validators.required],
  password: ['', Validators.required],
},);





}


onStrengthChanged(strength: number) {

}


get f() { return this.registerFormPro.controls; }
get fPat() { return this.registerFormPat.controls; }
get flogPro() { return this.loginFormPro.controls; }
get flogPat() { return this.loginFormPat.controls; }



public onValChange(val: any) {
  this.selectedVal = val;
  // console.log(this.selectedVal)
  this.status=(this.action+this.selectedVal)


}
public onValChange2(val: any) {
  this.selectedVal2 = val;
  // console.log(this.selectedVal2)
  this.status=(this.action+this.selectedVal2)


}

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(false);
    console.log(this.f.value)
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

// *********register professionnel****************//

registerPro(info:any) {
  this.doctor.name=info.value.name
  this.doctor.lastname=info.value.lastname
  this.doctor.email=info.value.email
  this.doctor.birthday=this.datePipe.transform(info.value.birthday, 'yyyy-MM-dd');
  this.doctor.adresse=info.value.adresse
  this.doctor.tel=info.value.tel
  this.doctor.password=info.value.password
  this.doctor.added_date=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  this.doctor.job=info.value.job
  this.doctor.fax=info.value.fax
  this.doctor.gender=info.value.gender
  this.doctor.adeli=info.value.adeli
  this.doctor.rpps=info.value.rpps
  this.doctor.role="2"


  console.log("doctor form",this.doctor)
 this.AuthProfessionnel.registerProf(this.doctor).subscribe(data=>{
  console.log(data)
  this.snackBar.open(" register successfully " ,"×", {

    duration: 5000,

    // here specify the position

    verticalPosition: 'top',
    panelClass:'success'

  });

 })
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerFormPro.invalid) {
      return;
  }
  // display form values on success

console.log('data is '+this.registerFormPro.value)
let data=info.value

}
// *********register patient****************//

registerPat(infopat:any) {
  console.log(" form",infopat)

  this.patient.name=infopat.value.name
  this.patient.lastname=infopat.value.lastname
  this.patient.email=infopat.value.email
  this.patient.birthday=this.datePipe.transform(infopat.value.birthday, 'yyyy-MM-dd');
  this.patient.adresse=infopat.value.adresse
  this.patient.tel=infopat.value.tel
  this.patient.password=infopat.value.password
  this.patient.added_date=this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  this.patient.gender=infopat.value.gender
  this.patient.archived=false
  this.patient.account_state=true
  this.patient.ssn=infopat.value.ssn

  console.log("patient form",this.patient)
  this.AuthPatient.registerPatient(this.patient).subscribe(data=>{
   console.log(data)
   this.snackBar.open(" register successfully " ,"×", {

    duration: 5000,

    // here specify the position

    verticalPosition: 'top',
    panelClass:'success'

  });
   this.router.navigate(['/'])

  })
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerFormPat.invalid) {
      return;
  }


}
// *********login professionnel****************//

loginPro(loginFormPro:any){
  let data=loginFormPro.value
  this.AuthProfessionnel.loginSPro(data).subscribe(data=>{
    this.datatoken=data
    this.AuthProfessionnel.saveDataPro(this.datatoken.token)
    this.router.navigate(['/professionnel/formulaires'])


  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}

// *********login patient****************//
loginPat(loginFormPat:any){
  let data=loginFormPat.value
  this.AuthPatient.loginSPat(data).subscribe(data=>{
    this.datatoken=data
    this.AuthPatient.saveDataPat(this.datatoken.token)
    this.router.navigate(['/patient/profil'])



  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}


onReset() {
  this.submitted = false;
  this.registerFormPro.reset();
  this.registerFormPat.reset();

}
signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}



signOut(): void {
  this.authService.signOut();
}

}

export class DialogModel {
  constructor(public title: string, public message: string) {
  }



}



