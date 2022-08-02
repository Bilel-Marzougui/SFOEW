import { Component, Input, OnInit } from '@angular/core';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import{PatientFormsService} from '../../../services/patient/patient-forms.service'
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Options } from 'ng5-slider/options';

@Component({
  selector: 'app-forms-details',
  templateUrl: './forms-details.component.html',
  styleUrls: ['./forms-details.component.css']
})
export class FormsDetailsComponent implements OnInit {

  idForm:any
  form:any
  index:any
f:any
  id:any
  value: number = 100;

  options: Options = {
    floor: 0,
    ceil: 200
  };



  responses: any= {
   
  };
  constructor(private data:FormDataService, private authPat:AuthPatientService,private PatForms:PatientFormsService) {
    this.data.currentindex.subscribe(index=>this.index =index)

    this.data.currentMessage.subscribe(idForm=>this.idForm =idForm)
       console.log(this.idForm)

    

       this.PatForms.getFormsById(this.idForm).subscribe(response=>{
        console.log('heree tessst')
        console.log((this.idForm))
        console.log((response.sections[0].description))

        this.form=response
      })






  }


  ngOnInit(): void {
    // this.f=this.forms[0].form
    // console.log(this.index)

    // console.log(this.forms[this.index].form)
    // console.log(this.index)
  }




}
