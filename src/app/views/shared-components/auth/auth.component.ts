import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit{
  registerForm: FormGroup;
    submitted = false;
  title: string;
  message: string;
  constructor(public dialogRef: MatDialogRef<AuthComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel,private formBuilder: FormBuilder)  {
    // Update view with given values
    this.title = data.title;
    this.message = data.message;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        title: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
    }, {
        // validator: MustMatch('password', 'confirmPassword')
    });
}



  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }






}
export class DialogModel {
  constructor(public title: string, public message: string) {
  }



}



