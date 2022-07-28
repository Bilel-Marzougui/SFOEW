import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Patient } from 'src/app/views/interfaces/patient.interface';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import{UpdProfilPatientService} from '../../views/services/patient/upd-profil-patient.service'

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent implements OnInit {
fullname:Patient
id:any
patient:Patient
dataPatient={
  name:'',
  lastname:'',
  email:'',
  birthday:0,
  tel:0,
  id:'',
  adresse:'',
  ssn:'',
  gender:'',
  photo:'',
  archived:'',
  account_state:'',
  added_date:'',

}
  constructor(public  updateservice:UpdProfilPatientService,private router:Router,private  authPat:AuthPatientService,) {

    this.id=this.authPat.geid()
    this.patient=this.authPat.getUsername()

    this.updateservice.getPatient(this.id).subscribe(response=>
      this.dataPatient = response)
  }

  ngOnInit(): void {
    this.fullname=this.authPat.getUsername()
  }

  logout(){
    localStorage.removeItem('token_Pat')
    this.router.navigate(['/'])
  }




}
