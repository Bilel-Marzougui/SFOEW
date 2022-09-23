import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientFormsService } from 'src/app/views/services/patient/patient-forms.service';
import { Options } from 'ng5-slider/options';
@Component({
  selector: 'app-priview-form-doctor',
  templateUrl: './priview-form-doctor.component.html',
  styleUrls: ['./priview-form-doctor.component.css']
})
export class PriviewFormDoctorComponent implements OnInit {
  idForm:any;
  idDoctor:any;
  idPatient:any;
  tabRep :any;
  tabScore:any;
  favoriteSeason: string;
  numbers: number[] = [];
  constructor( private router: ActivatedRoute,private PatForms:PatientFormsService) {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
    this.idForm=this.router.snapshot.paramMap.get('id');
    this.idDoctor=this.router.snapshot.paramMap.get('iddoctor');
    this.idPatient=this.router.snapshot.paramMap.get('idpatient');
   }
   sliderMakeOptions(slider): Options {
    /* console.log("llllll",slider) */
    return {
      floor: 10,
      ceil: 100,
      step: 10,
      showTicks: true,
 stepsArray:slider,  

}
   }
  ngOnInit(): void {
   //  console.log('hhh',this.idForm,this.idDoctor,this.idPatient) 
    this.PatForms.getRepdoctor(this.idPatient,this.idDoctor,this.idForm).subscribe((res)=>{
     
      this.tabRep=res
   /*     console.log('resss',this.tabRep)   */ 
    })
    this.PatForms.getFormsDoctById(this.idForm).subscribe(response=>{
    
 
     this.tabScore=response.formMuti
       
 console.log(this.tabScore)
 
     })
  }

}
