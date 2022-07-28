import { Component, OnInit } from '@angular/core';
import{PatientFormsService} from '../../../services/patient/patient-forms.service'
import{AuthPatientService} from '../../../services/patient/auth-patient.service'
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';

@Component({
  selector: 'app-patient-forms',
  templateUrl: './patient-forms.component.html',
  styleUrls: ['./patient-forms.component.css']
})
export class PatientFormsComponent implements OnInit {
  ProfId="";
  forms:any
  profs: any;
  id:any
  constructor(public doctorsService: DoctorsService, private authPat:AuthPatientService,private PatForms:PatientFormsService ) {
    this.id = this.authPat.geid()

   this.doctorsService.myContacts(this.id).subscribe(response =>{
    console.log(response)      
    this.profs = response

   }

    )


   }

  ngOnInit(): void {
  }
  DoctorId(DocId:any){
    this.ProfId=DocId


  }

  GetForms(DocID){
    this.PatForms.getForms(this.id,DocID).subscribe(response=>{
      console.log(response.incompleted)
    this.forms=response.incompleted
    console.log(JSON.stringify(this.forms))

  })
  }
}
