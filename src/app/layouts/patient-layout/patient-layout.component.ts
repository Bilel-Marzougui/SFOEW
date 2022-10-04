import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Patient } from 'src/app/views/interfaces/patient.interface';
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import{UpdProfilPatientService} from '../../views/services/patient/upd-profil-patient.service'
import { LoaderService } from 'src/app/views/services/loader/loader.service';
import {TranslationService} from '../../translation.service';
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';
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
languageSelect:any;
currentLang = 'fr';
languages=[
  {key :'fr',displayValue:'Français'},
  {key :'en',displayValue:'English'},


]
invts:any;
  constructor( public loaderService: LoaderService,public  updateservice:UpdProfilPatientService,private router:Router,private  authPat:AuthPatientService,public doctorsService: DoctorsService,public translationService: TranslationService) {

    this.id= localStorage.getItem('id')
    this.patient=this.authPat.getUsername()
   
    this.updateservice.getPatient(this.id).subscribe((response=>{
     this.dataPatient.name=response.name;
     this.dataPatient.lastname=response.lastname;
     this.dataPatient.email=response.email;
     this.dataPatient.photo=response.photo;
      
      this.dataPatient = response}))
      this.languageSelect=localStorage.getItem('langauage')
  }

  ngOnInit(): void {
    this.fullname=this.authPat.getUsername();
    this.doctorsService.getInvts(this.id).subscribe((response)=>{
 console.log(response,11)
 this.invts=response
  
    })
  }
  onLangChange(currentLang: string) {
    localStorage.setItem('langauage',currentLang)
    this.translationService.useLang(currentLang);
  }
  logout(){
    localStorage.removeItem('token_Pat')
    this.router.navigate(['/'])
  }

  numberInvts(){
    //    let keys = Object.keys(this.invts);
    // let len = this.keys.length;
    // return len
    
    if (this.invts) {
      let keys = Object.keys(this.invts);
      let len = keys.length;
      return len
    } 
    
    
    
      }


}
