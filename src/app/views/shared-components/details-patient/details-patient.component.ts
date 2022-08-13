import { Component, OnInit } from '@angular/core';
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';
import { FormDataService } from '../../services/shared-data/form-data.service';

@Component({
  selector: 'app-details-patient',
  templateUrl: './details-patient.component.html',
  styleUrls: ['./details-patient.component.css']
})
export class DetailsPatientComponent implements OnInit {
  PatientID:any
  Patient={

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
    added_date: '2022-05-26T09:50:18.419+00:00',
    _id:""
  
  }
  constructor( private updateservice:UpdProfilPatientService,private data:FormDataService,) {
    this.data.currentdetailsPatient.subscribe(PatientID=>this.PatientID =PatientID)

   }

  ngOnInit(): void {

    this.updateservice.getPatient(this.PatientID).subscribe(response=>
      this.Patient = response
      )
  }

}
