import { Component, Input, OnInit } from '@angular/core';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import{PatientFormsService} from '../../../services/patient/patient-forms.service'
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Options } from 'ng5-slider/options';
import { ActivatedRoute } from '@angular/router';

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
idForm2:any;
FormScore=[

]
  // options: Options = {
  //   showTicksValues: true,
  //   stepsArray: [
  //     {value: 1, legend: 'Very poor'},
  //     {value: 2},
  //     {value: 3, legend: 'Fair'},
  //     {value: 4},
  //     {value: 5, legend: 'Average'},
  //     {value: 6},
  //     {value: 7, legend: 'Good'},
  //     {value: 8},
  //     {value: 9, legend: 'Excellent'}
  //   ]
  // };

  sliderMakeOptions(slider): Options {
    return {
      floor: 10,
      ceil: 100,
      step: 10,
      showTicks: true,
 stepsArray:slider.dataRange,  

}
  }

  responses: any= {
   
  };
  constructor(private data:FormDataService, private authPat:AuthPatientService,private PatForms:PatientFormsService, private router: ActivatedRoute, ) {
    this.data.currentindex.subscribe(index=>this.index =index)
    this.idForm2 = this.router.snapshot.paramMap.get('id');
    console.log(" this.idForm2", this.idForm2)
    this.data.currentMessage.subscribe(idForm=>this.idForm =idForm)
       console.log(this.idForm)

    

       this.PatForms.getFormsById(this.idForm2).subscribe(response=>{
        console.log('heree tessst')
        console.log((this.idForm))
        console.log((response.sections[0].description))
        console.log(( response))

        this.form=response
      })






  }


  ngOnInit(): void {
   
    // this.f=this.forms[0].form
    // console.log(this.index)

    // console.log(this.forms[this.index].form)
    // console.log(this.index)
  }

  filterItem(value) {
    console.log("value",value)
  }

  radioChange(value,event){
    console.log("value",value.score)
    this.FormScore.push(value.score)
    console.log("this.FormScore",this.FormScore)
  }
  radioChecked(value,event){
    let x =0
  let  index = this.FormScore.findIndex(x => 
    x.title ===event.title,
    event.status=!event.status
  );
  console.log("this.index",index)
  
if(index == -1){
      event.status=true
      this.FormScore.push(event)}
      console.log("this.FormScore",this.FormScore)
/*     if(this.FormScore.length>0){
 
       }else{
      event.status=true
      this.FormScore.push(event)
    } */
  /*   console.log("valueee",value,event)
  
    console.log("this.FormScore",this.FormScore) */
  }
  rangeChange(question,event){
    console.log("event",question,event)
    this.FormScore.push(event)
    console.log("this.FormScore",this.FormScore)
  }
}
