import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig, } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from '../../interfaces/patient.interface';
import { AuthPatientService } from '../../services/patient/auth-patient.service'
import { UpdProfilPatientService } from '../../services/patient/upd-profil-patient.service'
import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit, OnDestroy {
  id: any;
  patient: Patient;
  dataArray: any = [];
  obsGet: Subscription;
  obsUpd: Subscription

  dataPatient = {
    name: '',
    lastname: '',
    email: '',
    birthday: 0,
    tel: 0,
    id: '',
    adresse: '',
    ssn: '',
    gender: '',
    photo: '',
    archived: '',
    account_state: '',
    added_date: '',

  }
  messageSuccess = ''

  constructor(private formBuilder: FormBuilder, public updateservice: UpdProfilPatientService, private datePipe: DatePipe,
    public dialogRef: MatDialogRef<EditProfilComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel, public authPat: AuthPatientService) {
    this.id = this.authPat.geid()
    this.patient = this.authPat.getUsername()

    this.obsGet = this.updateservice.getPatient(this.id).subscribe(response =>
      this.dataPatient = response)
  }

  ngOnInit(): void {

  }

  getdata(name: any, lastname: any, account_state: any, tel: any, email: string, id: any, birthday: any, adresse: any, ssn: any, gender: any, photo: any, archived: any, added_date: any) {
    this.messageSuccess = ''
    this.dataPatient.name = name
    this.dataPatient.lastname = lastname
    this.dataPatient.account_state = account_state
    this.dataPatient.email = email
    this.dataPatient.tel = tel
    this.dataPatient.adresse = adresse
    this.dataPatient.added_date = added_date
    this.dataPatient.birthday = birthday
    this.dataPatient.ssn = ssn
    this.dataPatient.gender = gender
    this.dataPatient.photo = photo
    this.dataPatient.archived = archived
    this.dataPatient.id = id
    console.log(this.dataPatient)

  }

  updatenewstudent(f: any) {
    let data = f.value
    this.updateservice.updatePatient(this.dataPatient.id, data).subscribe(response => {
      console.log(response)
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.dataPatient.id)

      this.dataArray[indexId].name = data.name
      this.dataArray[indexId].lastname = data.lastname
      this.dataArray[indexId].account_state = data.account_state
      this.dataArray[indexId].tel = data.tel
      this.dataArray[indexId].email = data.email
      this.dataArray[indexId].adresse = data.adresse
      this.dataArray[indexId].added_date = data.added_date
      this.dataArray[indexId].birthday = data.birthday
      this.dataArray[indexId].ssn = data.ssn
      this.dataArray[indexId].gender = data.gender
      this.dataArray[indexId].photo = data.photo
      this.dataArray[indexId].archived = data.archived
      this.dataArray[indexId].id = data.id



      this.messageSuccess = `this student ${this.dataArray[indexId].firstname} is updated`


    }, (err: HttpErrorResponse) => {
      console.log(err.message)

    })
  }



  updProfil(f: any) {

    console.log(" form", f)
    let data = f.value
    this.obsUpd = this.updateservice.updatePatient(this.id, data).subscribe(response => {
      location.reload();

    })

  }
  exit() {
    location.reload();
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(false);
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }


  ngOnDestroy(): void {
    this.obsGet.unsubscribe
    this.obsUpd.unsubscribe


  }
}

export class DialogModel {
  constructor(public title: string, public message: string) {
  }



}





