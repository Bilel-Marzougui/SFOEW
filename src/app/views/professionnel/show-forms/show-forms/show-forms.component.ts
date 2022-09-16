import { Component, OnInit } from '@angular/core';
import { PatientFormsService } from 'src/app/views/services/patient/patient-forms.service';
import { FormDataService } from 'src/app/views/services/shared-data/form-data.service';
import { Options } from 'ng5-slider';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-forms',
  templateUrl: './show-forms.component.html',
  styleUrls: ['./show-forms.component.css']
})
export class ShowFormsComponent implements OnInit {
  idForm:any
form:any
idForm2:any;
favoriteSeason:string;
  constructor(private PatForms:PatientFormsService,private data:FormDataService, private router: ActivatedRoute,) {
    this.idForm2 = this.router.snapshot.paramMap.get('id');
     
    this.PatForms.getFormsDoctById(this.idForm2).subscribe(response=>{
    
 
      this.form=response
       
//console.log(this.form)
 
     })

   
   }
   sliderMakeOptions(slider): Options {
       /*  console.log(slider.dataRange)   */
        return {
          floor: 10,
          ceil: 100,
          step: 10,
          showTicks: true,
     stepsArray:slider.dataRange,  
    
    }
      }
  ngOnInit(): void {

  }

}
