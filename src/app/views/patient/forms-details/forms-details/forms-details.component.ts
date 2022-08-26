import { Component, Input, OnInit } from '@angular/core';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import{PatientFormsService} from '../../../services/patient/patient-forms.service'
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Options } from 'ng5-slider/options';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/views/services/login.service';

@Component({
  selector: 'app-forms-details',
  templateUrl: './forms-details.component.html',
  styleUrls: ['./forms-details.component.css']
})
export class FormsDetailsComponent implements  OnInit {
test1:any
test2:any
test3:any
test4:any
test5:any
Nomberdej:any
  idForm:any
  form:any
  index:any
f:any
  id:any
  value: number = 100;
idForm2:any;
FormScore=[

];
valD:any
tableCalcul=[]
scoreF=0
scoreS='';
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
  constructor(private data:FormDataService, private authPat:AuthPatientService,private PatForms:PatientFormsService, private router: ActivatedRoute, private login :LoginService) {
    this.data.currentindex.subscribe(index=>this.index =index)
    this.idForm2 = this.router.snapshot.paramMap.get('id');
 /*    console.log(" this.idForm2", this.idForm2) */
    this.data.currentMessage.subscribe(idForm=>this.idForm =idForm)
     /*   console.log(this.idForm) */

    

       this.PatForms.getFormsById(this.idForm2).subscribe(response=>{
      /*   console.log('heree tessst')
        console.log((this.idForm))
        console.log((response.sections[0].description))
        console.log(( response)) */

        this.form=response
      
      })

  }


  ngOnInit(): void {
   this.FormScore=[]
setTimeout(() => {

}, 3000);
   /* console.log("this.FormScore",this.FormScore) */
    // this.f=this.forms[0].form
    // console.log(this.index)

    // console.log(this.forms[this.index].form)
    // console.log(this.index)
  }
  pelviennes:any
  filterItem(value) {
    console.log("value",value)
  }
  VISUELLE(e,a,b,visuelleanalogique){
    let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===b
    );
   if(indexQ == -1){
      this.FormScore.push({text:visuelleanalogique,score:e.target.value,index:x+1,section:a,indexQuestion:a,type:b})
    } 
    else{
            this.FormScore.map((result)=>{
               if(result.type===b){
                result.score=e.target.value
              }

            })
            /* this.FormScore=Table */
          
    }
  }
  expression(){
    console.log("FormScore",this.FormScore)
  }
  radioChange(value,event,sections,question,type){
     let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
   
    let  index = this.FormScore.findIndex(x => 
      x.text===value.text
    );
    let  indexQ = this.FormScore.findIndex(x => 
      x.indexQuestion===question
    );
    if(event.checked&& indexQ == -1){
      this.FormScore.push({text:value.text,score:value.score,index:x+1,section:sections,indexQuestion:question,type:type})
    }
    if(!event.checked){
  let Table =[]
      this.FormScore.map((result)=>{
        if(result.indexQuestion!=question&&result.section==sections){
          Table.push(result)
        }
        if(result.section!=sections){
          Table.push(result)
        }
      })
      this.FormScore=Table
    } 
  }




  caseCoher(value,event,sections,question,type){
        let x =0
        if(this.FormScore.length===1&&this.FormScore[0]==0){
          this.FormScore= []
        }
        let  indexQ = this.FormScore.findIndex(x => 
          x.type===type
        );
        if( indexQ == -1){
          this.FormScore.push({text:value.text,score:value.score,index:x+1,section:sections,indexQuestion:question,type:type})
        }else{
          this.FormScore.map((result)=>{
          
            if(result.type==type){
              result.text=value.text
              result.score=value.score
              result.section=value.sections
              result.indexQuestion=question
              result.type=type
            }
          })
       
        
        }
      }
  radioChecked(value,event,hi,sections,question,type){
 let x =0
if(this.FormScore.length===1&&this.FormScore[0]==0){
  this.FormScore= []
}
let  indexQ = this.FormScore.findIndex(x => 
  x.indexChoixm===hi.source.id
);
if(hi.checked&& indexQ == -1){
  this.FormScore.push({text:event.title,score:event.score,index:x+1,section:sections,indexQuestion:question,type:type,indexChoixm:hi.source.id})
} 
if(!hi.checked){
  let Table =[]
      this.FormScore.map((result)=>{
        console.log(1) 

        if(result.indexChoixm){
        if(result.indexChoixm!=hi.source.id&&result.section==sections){
          Table.push(result)
        }
        if(result.section!=sections){
           Table.push(result) 
        } }else
        {
          Table.push(result) 
        }
      })
       this.FormScore=Table
    }
  }


  Nomberdejours(value,event,sections,question,type){
   this.test1=value
   this.test2=event.target.value
   this.test3=sections
   this.test4=question
   this.test5=type




    let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===type
    );
    if( indexQ == -1){
      this.FormScore.push({text:event.target.value,score:Number(event.target.value),index:x+1,section:sections,indexQuestion:question,type:type})
    }else{
      
      this.FormScore.map((result)=>{
      
        if(result.type==type){
          result.text=event.target.value
          result.score=this.test1
          result.section=value.sections
          result.indexQuestion=question
          result.type=type
        }
        
      })
   
    
    }
  }

  // Range(value,event,sections,question,type){
 
 
 
 
 
  //    let x =0
  //    if(this.FormScore.length===1&&this.FormScore[0]==0){
  //      this.FormScore= []
  //    }
  //    let  indexQ = this.FormScore.findIndex(x => 
  //      x.type===type
  //    );
  //    if( indexQ == -1){
  //      this.FormScore.push({text:event,score:value,index:x+1,section:sections,indexQuestion:question,type:type})
  //    }else{
  //      this.FormScore.map((result)=>{
       
  //        if(result.type==type){
  //          result.text=value.text
  //          result.score=value.score
  //          result.section=value.sections
  //          result.indexQuestion=question
  //          result.type=type
  //        }
  //      })
    
     
  //    }
  //  }
cc(){


  console.log("valu"+this.test1)
  console.log(this.test2)
  console.log("sect"+this.test3)
  console.log("ques"+this.test4)
  console.log("type"+this.test5)

 
}
calcul(){
  this.tableCalcul=[]
  for(let k=0;k<this.form.formMuti[0].indexScoreForm.length;k++){
    if(this.form.formMuti[0].indexScoreForm[k].type==="index"){
      this.tableCalcul.push({val:'Q '+'('+ this.form.formMuti[0].indexScoreForm[k].i +',' + this.form.formMuti[0].indexScoreForm[k].j+')'})
    }
    if(this.form.formMuti[0].indexScoreForm[k].type==="operation"){
      this.tableCalcul.push({val:this.form.formMuti[0].indexScoreForm[k].desc})
    }
    if(this.form.formMuti[0].indexScoreForm[k].type==="number"){
      this.tableCalcul.push({val:this.form.formMuti[0].indexScoreForm[k].desc =='' ?this.form.formMuti[0].indexScoreForm[k].k : this.form.formMuti[0].indexScoreForm[k].desc })
    }
    if(this.form.formMuti[0].indexScoreForm[k].type==="autre"){
      this.tableCalcul.push({val:this.form.formMuti[0].indexScoreForm[k].desc})
    }
  }
this.tableCalcul .map((result)=>{
  if(result.val[0]=='Q'){
    var indexC = this.FormScore.findIndex(s => s.type === result.val);
     this.scoreS=this.scoreS.concat(this.FormScore[indexC].score.toString()) 
  }
  else{
    if(result.val=="×"){
      this.scoreS=this.scoreS.concat('*')
    }else{
      if(result.val==","){
        this.scoreS=this.scoreS.concat('.')
      }else
   { this.scoreS=this.scoreS.concat(result.val.toString())}
   }
  }
})
console.log(this.scoreS,'rrrr')
console.log(eval(this.scoreS),'rrrr')
}
  Range(value,score,sections,question,type){
    let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===type
    );
    if( indexQ == -1){
      this.FormScore.push({score:score.score,index:x+1,section:sections,indexQuestion:question,type:type})
    }else{
      this.FormScore.map((result)=>{
      
        if(result.type==type){
          result.score=score
          result.section=value.sections
          result.indexQuestion=question
          result.type=type
        }
      })
   
    
    }
  }



  TextCourt(value,event,sections,question,type){
    this.test1=value
    this.test2=event.target.value
    this.test3=sections
    this.test4=question
    this.test5=type
 
 
 
 
     let x =0
     if(this.FormScore.length===1&&this.FormScore[0]==0){
       this.FormScore= []
     }
     let  indexQ = this.FormScore.findIndex(x => 
       x.type===type
     );
     if( indexQ == -1){
       this.FormScore.push({text:event.target.value,score:value,index:x+1,section:sections,indexQuestion:question,type:type})
     }else{
       
       this.FormScore.map((result)=>{
       
         if(result.type==type){
           result.text=event.target.value
           result.score=this.test1
           result.section=value.sections
           result.indexQuestion=question
           result.type=type
         }
         
       })
    
     
     }
   }

  valueChanged(e) {
    console.log('e', e);
}
}


