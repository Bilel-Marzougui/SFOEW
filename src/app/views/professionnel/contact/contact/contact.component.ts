import { Component, OnInit } from '@angular/core';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { AuthProfessionnelService } from '../../../services/professionnel/auth-professionnel.service';
import { PatientFormsService } from 'src/app/views/services/patient/patient-forms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  id: any;
  contacts:any
  p:number;
  y:number;
  i=1;
  formsCompleted:any;
  formsInCompleted:any;
  filtredContacts:any;
  idPatient:any;
  mesgEmpty: boolean=false;
  constructor(private invservice:InvitaionsService,private authPro: AuthProfessionnelService,private PatForms:PatientFormsService,private router:Router,) { 
    this.id = this.authPro.geid()

    this.invservice.myContacts(this.id).subscribe(response =>{
      this.mesgEmpty=false;

     /*  console.log(response) */
      this.contacts=response
      this.filtredContacts=response
      this.mesgEmpty=true;

    }
     
      )
  }

  ngOnInit(): void {
  }
  filterItem(value) {
    this.contacts = this.filtredContacts.filter(i => {
      return (
        i.patients.name.toLowerCase().includes(value.toLowerCase()) ||
        i.patients.lastname.toLowerCase().includes(value.toLowerCase()) 

      )
    })
 }
/*    GetForms(DocID){
    this.idDocter=DocID;
    this.PatForms.getForms(this.id,this.id).subscribe(response=>{

    this.forms=response.incompleted;
    this.formsCompleted=response.completed




  })
  } */
  getpatient(patient:any){
     /*    console.log(patient.patients._id) */
        this.idPatient=patient.patients._id;
        this.PatForms.getFormsDoctor(patient.patients._id,this.id).subscribe(response=>{
      /*   console.log(response) */
        this.formsInCompleted=response.completed.concat(response.incompleted);
   /*      this.formsCompleted=response.completed */
      
  /*       console.log( this.formsInCompleted) */
        }) 
  }
  async previewForm (form:any){
   
    await  this.router.navigate(['professionnel/preview-details',form,this.id,this.idPatient])
    window.location.reload()
    
    ;
   /*  console.log("hhh",form.form._id,this.idDocter,this.id) */
   }
}
