import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
import { FormsService } from 'src/app/views/services/professionnel/forms.service';
import { InvitaionsService } from 'src/app/views/services/professionnel/invitaions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-detail-dossier',
  templateUrl: './detail-dossier.component.html',
  styleUrls: ['./detail-dossier.component.css']
})
export class DetailDossierComponent implements OnInit {
test=true;
id:any;
items=[1,2];
contacts:any;
idD:any;
formId:any;
p:number;
p2:number;
filtredForms:any;
affect = {
  doctor: '',
  user: '',
  form: '',

}
  constructor(private route: ActivatedRoute,private _patient:UpdProfilPatientService,private invservice:InvitaionsService,private authPro: AuthProfessionnelService
    ,private formsService:FormsService,private snackBar:MatSnackBar, ) { 
    this.id = this.route.snapshot.paramMap.get('id');
    this.idD = this.authPro.geid()
  }
  allForms : any;
  ngOnInit(): void {

    this._patient.getdossierById(this.id).subscribe((res)=>{
      this.allForms = res;
      this.filtredForms=res
    })
    this.invservice.myContactsPatient(this.idD).subscribe(response =>{
       /*  console.log("response",response) */
      this.contacts=response
    })
  }
  filterItem(value) {
    this.allForms = this.filtredForms.filter(i => {
      return (
        i.title.toLowerCase().includes(value.toLowerCase()) 
        
      )
    })
 }
  getFormId(formId){
    this.formId=formId
    // console.log(formId)


  }
  affectForm(id:any){
  this.affect.user=id
this.affect.doctor=this.idD
this.affect.form=this.formId
  
    // console.log('this is add'+this.affect.user)
    // console.log('this is add'+this.affect.doctor)
    // console.log('this is add'+this.affect.form)
 
         this.formsService.affectForm(this.idD,this.affect).subscribe(response=>{
             
             if(localStorage.getItem("langauage")=='fr'){
          this.snackBar.open(" Formulaire affecté avec succès" ,"×", {
    
            duration: 5000,
        
           
        
            verticalPosition: 'top',
            panelClass:'success'
        
          })}else{
            this.snackBar.open(" Form affected successfully" ,"×", {
    
              duration: 5000,
          
              // here specify the position
          
              verticalPosition: 'top',
              panelClass:'success'
          
            })
          }
       
      },error=> this.snackBar.open(" form affection failed " ,"×", {
    
        duration: 5000,
    
        // here specify the position
    
        verticalPosition: 'top',
        panelClass:'error'
    
      })) 
        }
        getPage(p:any) {
          /*  console.log(p*6,this.listPatient.length,p*6-6,p)
           console.log(this.listPatient[p*6-6].name,this.listPatient[p*6-1].name) */
           //console.log(p*5-5,p*5-1,p)
            
         
            // console.log(p)
           /*     for(let i =p*6-6;i<p*6-1;i++){
               console.log(this.listPatient[i])
             }  */ 
       
       
         }
}
