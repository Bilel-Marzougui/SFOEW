import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Validators} from '@angular/forms';
 import { MustMatch } from '../../helper/MustMatch.validator';
import{RegisterService} from '../../services/register.service'
import{LoginService} from '../../services/login.service'

import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent implements OnInit{


  messageError:any
  registerFormPro: FormGroup;
  registerFormPat:FormGroup;
  loginFormPro:FormGroup;
  loginFormPat:FormGroup;

    submitted = false;
    public selectedVal="Professionnel";
    myDate = new Date();
    datatoken:any
    dataResponse:any
    status:any
    action:any
    showDetails: boolean;

    hide : boolean = true;

    myFunction() {
      this.hide = !this.hide;
    }


  constructor(private datePipe: DatePipe,public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,private formBuilder: FormBuilder, private logService:LoginService ,private regService:RegisterService ,private router:Router)  {
    // Update view with given values



  }

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
      photo: '1653558618111.png',
      account_state: true,
      archived: false,
      added_date: '2022-05-26T09:50:18.419+00:00'

  }




  ngOnInit() {

    console.log(this.selectedVal)

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
  console.log(this.selectedVal)
  this.status=(this.action+this.selectedVal)


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
 this.regService.registerProf(this.doctor).subscribe(data=>{
  console.log(data)

 })
  this.submitted = true;
  // stop here if form is invalid
  if (this.registerFormPro.invalid) {
      return;
  }
  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormPro.value, null, 4));

console.log('data is '+this.registerFormPro.value)
let data=info.value




}





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
  this.regService.registerPatient(this.patient).subscribe(data=>{
   console.log(data)
  })
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerFormPat.invalid) {
      return;
  }

  // display form values on success
  // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormPat.value, null, 4));
}




// loginPro(loginFormPro:any){

//   this.doctorLog.email=loginFormPro.value.email
//   this.doctorLog.password=loginFormPro.value.password
//   console.log(this.doctorLog)

//   this.logService.loginSPro(this.doctorLog).subscribe((response)=>

//     {this.dataResponse=response
//       this.logService.saveDataPro=(this.dataResponse)
//       console.log(this.dataResponse)


//   },err=>console.log(err))
// }
loginPro(loginFormPro:any){
  let data=loginFormPro.value
  this.logService.loginSPro(data).subscribe(data=>{
    this.datatoken=data
    console.log('loginpro typescript'+this.datatoken)
    this.logService.saveDataPro(this.datatoken.token)


  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}


loginPat(loginFormPat:any){
  let data=loginFormPat.value
  this.logService.loginSPat(data).subscribe(data=>{
    this.datatoken=data
    console.log('loginpat typescript'+this.datatoken)
    this.logService.saveDataPro(this.datatoken.token)


  },(err:HttpErrorResponse)=>this.messageError=err.error.error)
}


onReset() {
  this.submitted = false;
  this.registerFormPro.reset();
  this.registerFormPat.reset();

}





}




export class DialogModel {
  constructor(public title: string, public message: string) {
  }



}



