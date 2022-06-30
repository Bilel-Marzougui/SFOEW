import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
 import { MustMatch } from '../../helper/MustMatch.validator';
import {Professionnel} from '../../interfaces/professionnel.interface'
import{RegisterService} from '../../services/register.service'
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']

})
export class AuthComponent implements OnInit{



  registerFormPro: FormGroup;
  registerFormPat:FormGroup;
    submitted = false;
    public selectedVal: string;
    myDate = new Date();




  constructor(private datePipe: DatePipe,public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,private formBuilder: FormBuilder, private regService:RegisterService ,private router:Router)  {
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
  ngOnInit() {


    console.log(this.selectedVal)
    this.registerFormPro = this.formBuilder.group({

      name: ['', Validators.required],
      lastname: ['', Validators.required],
      birthday: ['', Validators.required],
      tel: ['', Validators.required],
      fax: ['', Validators.required],
      adresse: ['', Validators.required],
      gender: ['', Validators.required],
      job: ['', Validators.required],
      adeli: ['', Validators.required],
      rpps: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['2',Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });


  this.registerFormPat = this.formBuilder.group({

    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    birthday: ['', Validators.required],
    phone: ['', Validators.required],
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





}


get f() { return this.registerFormPro.controls; }
get fPat() { return this.registerFormPat.controls; }


public onValChange(val: any) {
  this.selectedVal = val;
  console.log(this.selectedVal)

}
  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
    console.log(this.f.value)
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }
login(){}

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



  console.log("rrrr",this.doctor)
  console.log("info",info.value)
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





registerPat() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerFormPat.invalid) {
      return;
  }

  // display form values on success
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerFormPat.value, null, 4));
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



