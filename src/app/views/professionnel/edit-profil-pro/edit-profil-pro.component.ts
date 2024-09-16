import { Component, OnDestroy, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Professionnel } from '../../interfaces/professionnel.interface';
import { AuthProfessionnelService } from '../../services/professionnel/auth-professionnel.service'
import { UpdProfilProServiceService } from '../../services/professionnel/upd-profil-pro-service.service'
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-edit-profil-pro',
  templateUrl: './edit-profil-pro.component.html',
  styleUrls: ['./edit-profil-pro.component.css']
})
export class EditProfilProComponent implements OnInit, OnDestroy {
  professionnel: Professionnel;
  id: any;
  dataArray: any = [];
  messageSuccess = '';
  obsGet: Subscription;
  obsUpd: Subscription
  dataProf = {
    name: '',
    lastname: '',
    email: '',
    birthday: 0,
    tel: 0,
    id: '',
    adresse: '',
    fax: '',
    gender: '',
    photo: '',
    job: '',
    rpps: '',
    added_date: '',
    adeli: '',


  }
  constructor(private snackBar:MatSnackBar,private formBuilder: FormBuilder, public updateservice: UpdProfilProServiceService, private router: Router,
    public dialogRef: MatDialogRef<EditProfilProComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogModel, public authPro: AuthProfessionnelService) {

    this.id = this.authPro.geid()
    this.professionnel = this.authPro.getUsername()

    this.updateservice.getProf(this.id).subscribe(response =>
      this.dataProf = response)

  }
  ngOnInit(): void {


  }

  getdata(name: any, lastname: any, id: any, job: any, tel: any, email: string, rpps: any, birthday: any, adresse: any, fax: any, gender: any, photo: any, adeli: any, added_date: any) {
    this.messageSuccess = ''
    this.dataProf.name = name
    this.dataProf.lastname = lastname
    this.dataProf.email = email
    this.dataProf.tel = tel
    this.dataProf.adresse = adresse
    this.dataProf.added_date = added_date
    this.dataProf.birthday = birthday
    this.dataProf.adeli = adeli
    this.dataProf.job = job
    this.dataProf.fax = fax
    this.dataProf.gender = gender
    this.dataProf.photo = photo
    this.dataProf.rpps = rpps
    this.dataProf.id = id

/*     console.log(this.dataProf) */

  }
  updatenewPro(f: any) {
    let data = f.value
    this.updateservice.updateprof(this.professionnel._id, data).subscribe(response => {
    /*   console.log(response) */
      let indexId = this.dataArray.findIndex((obj: any) => obj._id == this.dataProf.id)

      this.dataArray[indexId].name = data.name
      this.dataArray[indexId].lastname = data.lastname
      this.dataArray[indexId].fax = data.fax
      this.dataArray[indexId].tel = data.tel
      this.dataArray[indexId].email = data.email
      this.dataArray[indexId].adresse = data.adresse
      this.dataArray[indexId].added_date = data.added_date
      this.dataArray[indexId].birthday = data.birthday
      this.dataArray[indexId].job = data.job
      this.dataArray[indexId].gender = data.gender
      this.dataArray[indexId].photo = data.photo
      this.dataArray[indexId].adeli = data.adeli
      this.dataArray[indexId].id = data.id
      this.dataArray[indexId].rpps = data.rpps



      this.messageSuccess = `this Pro ${this.dataArray[indexId].firstname} is updated`
      location.reload();

    }, (err: HttpErrorResponse) => {
      console.log(err.message)

    })

  }


  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(false);
  }
  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  updProfil(f: any) {

   /*  console.log(" form", f) */
    let data = f.value
    this.updateservice.updateprof(this.id, data).subscribe(response => {
      location.reload();
      this.snackBar.open(" profile updated " ,"×", {

        duration: 5000,

        // here specify the position

        verticalPosition: 'top',
        panelClass:'success'

      });

    })

  }
  exit() {
    location.reload();
  }
  ngOnDestroy(): void {
    this.obsGet.unsubscribe


  }
}
export class DialogModel {
  constructor(public title: string, public message: string) {
  }
}
