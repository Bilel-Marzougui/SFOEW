import { Component, OnInit } from '@angular/core';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
import { FormsService } from '../../../services/professionnel/forms.service';
import { InvitaionsService } from '../../../services/professionnel/invitaions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import{PaymentService} from '../../../services/Payment/payment.service'
@Component({
  selector: 'app-mon-formulaire',
  templateUrl: './mon-formulaire.component.html',
  styleUrls: ['./mon-formulaire.component.css']
})
export class MonFormulaireComponent implements OnInit {
  id: any;
  forms:any;
  formId:any;
  contacts:any;
  p:number;
  p2:number;
  checked:false;
  filtredForms:any
  nb=1
  i=1;
  item:"test"
  constructor( private PaymentService:PaymentService,private data:FormDataService,private router:Router,private snackBar:MatSnackBar,private invservice:InvitaionsService,private formsService:FormsService,private authPro: AuthProfessionnelService) { 
    this.id = this.authPro.geid()
    this.formsService.getForms(this.id).subscribe(response=>{
        // console.log(JSON.stringify(response))
      this.forms=response
      this.filtredForms=response
         console.log((response))

    })
 this.invservice.myContacts(this.id).subscribe(response =>{
  // console.log(response)
  this.contacts=response
})
  }

  affect = {
    doctor: '',
    user: '',
    form: '',

  }
  ngOnInit(): void {
    this.PaymentService.checkAchat(this.id).subscribe(checked=>{
this.checked=checked
console.log(this.checked)
    })
  }
  affectForm(id:any){
this.affect.user=id
this.affect.doctor=this.id
this.affect.form=this.formId
// console.log('this is add'+this.affect.user)
// console.log('this is add'+this.affect.doctor)
// console.log('this is add'+this.affect.form)

    this.formsService.affectForm(this.id,this.affect).subscribe(response=>{
      // console.log('this is add'+response)
      this.snackBar.open(" form affected successfully " ,"×", {

        duration: 5000,
    
        // here specify the position
    
        verticalPosition: 'top',
        panelClass:'success'
    
      });

  },error=> this.snackBar.open(" form affection failed " ,"×", {

    duration: 5000,

    // here specify the position

    verticalPosition: 'top',
    panelClass:'error'

  }))
    }
    getFormId(formId){
      this.formId=formId
      // console.log(formId)


    }

    showForm(formId,form){
      this.formId=formId
      // console.log('show')
      this.data.GetId(formId)

      // console.log(formId)
    this.router.navigate(['/professionnel/show-forms'])



    }

    filterItem(value) {
      this.forms = this.filtredForms.filter(i => {
        return (
          i.title.toLowerCase().includes(value.toLowerCase()) 
          
        )
      })
   }
    async retour(){

     await this.router.navigate(['professionnel/profil'])
      window.location.reload();

    }
   
}