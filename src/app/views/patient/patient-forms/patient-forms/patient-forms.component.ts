import { Component, OnInit } from '@angular/core';
import{PatientFormsService} from '../../../services/patient/patient-forms.service'
import{AuthPatientService} from '../../../services/patient/auth-patient.service'
import { DoctorsService } from 'src/app/views/services/patient/doctors.service';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-patient-forms',
  templateUrl: './patient-forms.component.html',
  styleUrls: ['./patient-forms.component.css']
})
export class PatientFormsComponent implements OnInit {
  ProfId="";
  forms:any;
  formsCompleted:any;
  profs: any;
  id:any
  idForm:any;
  idDocter:any;
  searchDoctor:string
  index:any
  filtredprofs:any
  i:1;
  mesgEmpty: boolean=false;

  constructor( private router:Router, private data:FormDataService,public doctorsService: DoctorsService, private authPat:AuthPatientService,private PatForms:PatientFormsService ) {
    this.mesgEmpty=false;

    this.id = this.authPat.geid()

   this.doctorsService.myContacts(this.id).subscribe(response =>{

    /* console.log(response)  */     
    this.profs = response
    this.filtredprofs=response
    this.mesgEmpty=true;



 

   }

    )


   }


  //  sending forms with index 
  ngOnInit(): void {
    this.data.currentMessage.subscribe(idForm=>this.idForm =idForm)
    this.data.currentindex.subscribe(index=>this.index =index)

  }

  DoctorId(DocId:any){
    this.ProfId=DocId


  }

  filterItem(value) {
    this.profs = this.filtredprofs.filter(i => {
      return (
        i.doctors.name.toLowerCase().includes(value.toLowerCase()) ||
        i.doctors.lastname.toLowerCase().includes(value.toLowerCase()) 

      )
    })
 }

  GetForms(DocID){
    this.idDocter=DocID;
    this.PatForms.getForms(this.id,DocID).subscribe(response=>{
     /*  console.log(response) */
    this.forms=response.incompleted;
    this.formsCompleted=response.completed
   /*  console.log(response) */



  })
  }

  openFormDetails(idF:any,idd){
    console.log(idF,idd,this.id)
  this.idForm=idF
    this.router.navigate(['patient/forms-details',idF,idd,this.id])
    this.data.GetId(idF) 
    
  }
 async previewForm(form:any){
 await this.router.navigate(['patient/preview-details',form.form._id,this.idDocter,this.id])
  window.location.reload()
 }
}
