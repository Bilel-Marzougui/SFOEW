import { Component, OnInit } from '@angular/core';
import { PatientFormsService } from 'src/app/views/services/patient/patient-forms.service';
import { FormDataService } from 'src/app/views/services/shared-data/form-data.service';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.css']
})
export class ShowFormsComponent implements OnInit {
  idForm:any
form:any

  constructor(private PatForms:PatientFormsService,private data:FormDataService) {
    this.data.currentMessage.subscribe(idForm=>{
      this.form =idForm
      // this.PatForms.getFormsById(this.idForm).subscribe(response=>{
      //   console.log("here aaaaaa")
      //   console.log(response)
  
      //   this.form=response
      //   console.log(this.form)

  
      // })

    }
      )

   
   }

  ngOnInit(): void {

  }

}
