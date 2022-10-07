import { Component, Input, OnInit } from '@angular/core';
import { FormDataService } from '../../../services/shared-data/form-data.service';
import{PatientFormsService} from '../../../services/patient/patient-forms.service'
import { AuthPatientService } from 'src/app/views/services/patient/auth-patient.service';
import { Options } from 'ng5-slider/options';
import {
  Router,
  ActivatedRoute,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { LoginService } from 'src/app/views/services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-forms-details',
  templateUrl: './forms-details.component.html',
  styleUrls: ['./forms-details.component.css']
})

export class FormsDetailsComponent implements  OnInit {
 
  @Input() item = '';
  disabledConfirme=false;
  public showOverlay = false;
  valueRange :number =0;
test1:any;
test2:any;
test3:any;
test4:any;
test5:any;
Nomberdej:any;
  idForm:any;
  form:any;
  index:any;
f:any;
  id:any;
  value: number = 100;
idForm2:any;
iddoctor:any;
idpatient:any;
FormScore=[

];
valD:any
tableCalcul=[]
scoreF=0
scoreS='';
tableReponse=[];
favoriteSeason: string;
seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
tableOptions =[
  {title: 'Test Final6'},
  {title: 'Test Final7'},
  {title: 'Test Final8'}
];
tablescoreS =[
  {title: true, j: true},
  {title:false, j: true},
  {title: true, j: true}
]
displayedColumns = ['selected', 'position', 'name', 'weight', 'symbol'];
dataSource =  [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
private defaultSelected = 0
private selection: number
selectedElement: PeriodicElement;
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
  numbers: number[] = [];
  sliderMakeOptions(slider): Options {
  // console.log(slider.dataRange) 
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
  constructor(private data:FormDataService, private authPat:AuthPatientService,private snackBar:MatSnackBar,private PatForms:PatientFormsService, private router: ActivatedRoute, private login :LoginService,private route:Router) {
    for (let index = 0; index < 10000; index++) {
      this.numbers.push(index);
    }
    this.data.currentindex.subscribe(index=>this.index =index)
    this.idForm2 = this.router.snapshot.paramMap.get('id');
    this.iddoctor= this.router.snapshot.paramMap.get('iddoctor');
    this.idpatient= this.router.snapshot.paramMap.get('idpatient');
/*    console.log(" this.idForm2", this.idForm2,"this.iddoctor",this.iddoctor,"this.idpatient",this.idpatient)   */
    this.data.currentMessage.subscribe(idForm=>this.idForm =idForm)
     /*   console.log(this.idForm) */

    

       this.PatForms.getFormsById(this.idForm2).subscribe(response=>{
      /*   console.log('heree tessst')
        console.log((this.idForm))
        console.log((response.sections[0].description))
        console.log(( response)) */
      /*   console.log(( response)) */
        this.form=response
      
      })

  }


  ngOnInit(): void {
    for(var i=0;i<1;i++){
 /*      console.log(i) */
    }
  /*   console.log(i) */
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
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.showOverlay = true;
    }
    if (event instanceof NavigationEnd) {
      this.showOverlay = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.showOverlay = false;
    }
    if (event instanceof NavigationError) {
      this.showOverlay = false;
    }
    setTimeout(() => {
      this.showOverlay = false;
    }, 5000);
  }
  filterItem(value) {
 /*    console.log("value",value) */
  }


  getdataCaseChoix(rep,data,q,o,event,s){
     /*  console.log(q,"cm",data,event.checked)  */ 
     let  indexQ = this.tableReponse.findIndex(x => 
       x.id===s+''+q
     );  
     data.optioncm[o].selected=event.checked
    // console.log(q,"cm","type",event.checked,"indexrep",o,"indexq",indexQ)
     if(indexQ===-1)
     this.tableReponse.push({title :data.title,type: data.type,options:data.optioncs,textReponse:'',id:s+''+q,optioncm:data.optioncm,score:0,scoreOptionRangeBarQuestion:data.dataRange,
     scoreOptionRangeBar:0,scoreOptioncm2:data.grille,minRange:"0", optionsSaint:null});
     else{
     this.tableReponse[indexQ].options=data.optioncm; }
  /*  console.log(this.tableReponse,q,o,indexQ)  */
/*   console.log(q," this.tableReponse[indexQ].options", this.tableReponse[indexQ])   */
   }
   getdataTextCour(rep,data,q,o,event,s){
/*    console.log('rep,data,q,o',rep,data,q,o,event.target.value);   */
   let  indexQ = this.tableReponse.findIndex(x => 
     x.id===s+''+q
   ); 
   if(indexQ===-1)
 this.tableReponse.push({title :data.title,type: data.type,options:data.numberJourCmnt,textReponse:event.target.value,id:s+''+q});
   else
   this.tableReponse[indexQ].textReponse=event.target.value; 
 /*  console.log(this.tableReponse,q,o,indexQ) */
  
   }
   getdataCaseCoher(rep,data,q,o,s){
/*       console.log(q,'cc',data)  */
     let  indexQ = this.tableReponse.findIndex(x => 
       x.id===s+''+q
     );  
    
  data.options.map((res)=>{
       if(res!=rep){
         res.selected=false
       }else{
         res.selected=true
       }
     })
     /* this.tableReponse.push(data) */
     if(indexQ===-1)
     this.tableReponse.push({title :data.title,type: data.type,options:data.options,textReponse:'',id:s+''+q,optioncm:data.optioncm,score:0,scoreOptionRangeBarQuestion:data.dataRange,
     scoreOptionRangeBar:0,scoreOptioncm2:data.grille,minRange:"0", optionsSaint:null});
     else
     this.tableReponse[indexQ].options=data.options;
    /*  console.log(this.tableReponse,q,o,indexQ) */
   }
  
   getdataRangeBar(rep,data,q,o,event,s){
 /*  console.log('rep,data,q,o,event,s',event.value,event,s)   */ 

let  indexQ = this.tableReponse.findIndex(x => 
  x.id===s+''+q
);  
if(indexQ===-1){
/*   console.log('rep,data,q,o,event,s',data[0].value)   */
   this.tableReponse.push({title :rep.title,type: rep.type,options:rep.options,textReponse:"event",id:s+''+q,optioncm:rep.optioncm,score:event.value,scoreOptionRangeBarQuestion:rep.dataRange,
   scoreOptionRangeBar:0,scoreOptioncm2:rep.grille,minRange:"0", optionsSaint:null});
/*    console.log('rep,data,q,o,this.tableReponse,s',this.tableReponse)  */
  }
   else{
 /*    console.log('event',event)   */
   this.tableReponse[indexQ].score=event.value}
   }

   getDataVisuelle(rep,type,q,o,event,s){
    
    let  indexQ = this.tableReponse.findIndex(x => 
      x.id===s+''+q
    );  
    if(indexQ===-1)
    this.tableReponse.push({title :rep.title,type: rep.type,options:rep.options,textReponse:'event.target.value',id:s+''+q,optioncm:rep.optioncm,score:Number(event.target.value),scoreOptionRangeBarQuestion:rep.dataRange,
    scoreOptionRangeBar:0,scoreOptioncm2:rep.grille,minRange:"0", optionsSaint:null});
    else{
    this.tableReponse[indexQ].textReponse=event.target.value;
    this.tableReponse[indexQ].score=event.target.value 
  }
  /*   console.log(type,q,o,event.target.value,s) */
   }
   getDataTextCourt(rep,event,s,q){
/*   console.log(rep,event.target.value,s,q)  */
   let  indexQ = this.tableReponse.findIndex(x => 
    x.id===s+''+q
  );  
  if(indexQ===-1)
  this.tableReponse.push({title :rep.title,type: rep.type,optioncm:rep.optioncm,options:rep.options,textReponse:event.target.value,id:s+''+q,score:0,scoreOptionRangeBarQuestion:rep.dataRange, minRange:"0", optionsSaint:null});
  else
  this.tableReponse[indexQ].textReponse=event.target.value 
   }
/*    cerateTabG(rep,event,q,o,k,s,question){
    let tabGrille =[];
    let a =0;
    let b= 0;
 
    let  indexQ = this.tableReponse.findIndex(x => 
      x.id===s+''+q
    );  
    rep.grille.scoreS.map((result)=>{
      a = a+1;
      rep.grille.options.map((resulttow)=>{
        if(b>=rep.grille.options.length){
          b=0
        }
        b=b+1;
        tabGrille.push({
          i:''+o+''+k,
          j:''+o+''+k
        })
      })
    })
       console.log("indexselect",o,k,tabGrille)
   } */
   tabGrille2=[];
   tabGrille23={};
   tabH:{};
   tabV=[]
   getDataGrilledecasescocher(rep:any,event,q,o,k,s,question){
    var obj = {i: false};
for(let i=0;i<rep.grille.scoreS.length;i++){
  let k= rep.grille.scoreS.length
  
  
  var pair = { i: false};
  obj = {...obj, ...pair};
  
}
/* console.log("hhh",obj); */
for(let j=0;j<rep.grille.options.length;j++){
  this.tabV.push(this.tabH);
}
/* console.log(this.tabV); */

    /*     console.log(rep.grille,event,q,o,k,s,question) */
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
  /*   console.log("FormScore",this.FormScore,this.tableReponse) */
  }
  radioChange(value,event,sections,question,type){
  /*  console.log(event.checked,value.text) */
   if(event.checked){
     let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
   
    let  index = this.FormScore.findIndex(x => 
      x.text===value.text
    );
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===type
    );
    if(event.checked&& indexQ == -1){
      this.FormScore.push({text:value.text,score:value.score,index:x+1,section:sections,indexQuestion:question,type:type})
    }else{
      this.FormScore[indexQ].score=Number(this.FormScore[indexQ].score)+Number(value.score)
    }
 /*    console.log( this.FormScore[indexQ].score) */
  }else{
    let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
   
    let  index = this.FormScore.findIndex(x => 
      x.text===value.text
    );
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===type
    );
    if(event.checked&& indexQ == -1){
      this.FormScore.push({text:value.text,score:value.score,index:x+1,section:sections,indexQuestion:question,type:type})
    }else{
      this.FormScore[indexQ].score=Number(this.FormScore[indexQ].score)-Number(value.score)
    }
  /*  *//*   console.log( this.FormScore[indexQ].score) */
  }
   
   /*  if(!event.checked){
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
    }  */
  }
  getaData(question,m,k,s,q,data){
  /*   console.log(data.grille)  */
   /*  console.log(m,k) */
  /*   console.log(question.options)
    console.log(question.scoreS) */
    var table =[],row, cell,table2=[]
    let  indexQ = this.tableReponse.findIndex(x => 
      x.id===s+''+q
    ); 
  /*   console.log(indexQ) */
    if(indexQ==-1){
      for (row = 0; row < question.options.length; row++) {
        table =[]
          for (cell = 0; cell < question.scoreS.length; cell++) {
             table.push(false)
              
          }
          table2.push(table)
        
       }
         table2[m][k]=true
         this.tableReponse.push({title :data.title,type: data.type,options:data.options,textReponse:'',id:s+''+q,optioncm:data.optioncm,score:0,scoreOptionRangeBarQuestion:data.dataRange,
           scoreOptionRangeBar:0,scoreOptioncm2:table2,minRange:"0", optionsSaint:data.grille});
    }else{
      /* console.log("ee",    this.tableReponse[indexQ].scoreOptioncm2[m],m      ) */
   /*   this.tableReponse[indexQ].scoreOptioncm2[m].map((res)=>{
      console.log(res)
     }) */
    /*  console.log(this.tableReponse[indexQ].scoreOptioncm2,m) */
    for(let p =0;p<this.tableReponse[indexQ].scoreOptioncm2[m].length;p++){
      if(p==k){
        this.tableReponse[indexQ].scoreOptioncm2[m][p]=true
      }else{
        this.tableReponse[indexQ].scoreOptioncm2[m][p]=false
      }
     
     } 

    }
/* console.log(table) */
  }
  radioCheckedButton(value,event,hi,sections,question,type){
 /*   console.log(value,event,hi,sections,question,type)  */ 
    let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    } 
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===type
    );
 /*    console.log(indexQ) */
    if( indexQ == -1){
      let tab =[]
      tab.push({question:question,score:Number(event.score)})
      this.FormScore.push({text:value.text,score:event.score,index:x+1,section:sections,indexQuestion:tab,type:type})
    }else{
      let  indexF = this.FormScore[indexQ].indexQuestion.findIndex(x => 
        x.question===question
      );
      if(indexF !=-1){
      this.FormScore[indexQ].indexQuestion[indexF].score=Number(event.score)
      let y = 0
      this.FormScore[indexQ].indexQuestion.map((res)=>{
      /*   console.log(res) */
        y = y+ res.score
      })
     /*  console.log(y,"y") */
     this.FormScore[indexQ].score=y
    }
      else{
        this.FormScore[indexQ].indexQuestion.push({question:question,score:Number(event.score)
        }
        )
        let x = 0
        this.FormScore[indexQ].indexQuestion.map((res)=>{
       /*    console.log(res) */
          x = x+ res.score
        })
/*         console.log(x,"x") */
this.FormScore[indexQ].score=x
      }
   
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
      /*   console.log(1)  */

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
  /*   console.log(event.target.value) */
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
      this.FormScore.push({text:event.target.value,score:Number(event.target.value)*10,index:x+1,section:sections,indexQuestion:question,type:type})
    }else{
      /* console.log(this.test1) */
      this.FormScore.map((result)=>{
      
        if(result.type==type){
          result.text=event.target.value
          result.score=Number(event.target.value)*10
          result.section=value.sections
          result.indexQuestion=question
          result.type=type
        }
        
      })
   
    
    }
  }
scorSend=[];
calcul(){
  this.disabledConfirme=true;
  this.showOverlay = true;
  this.route.events.subscribe((event: RouterEvent) => {
    this.navigationInterceptor(event)
  })
    for(let fm=0;fm<this.form.formMuti.length;fm++){
      for(let k=0;k<this.form.formMuti[fm].indexScoreForm.length;k++){
        if(this.form.formMuti[fm].indexScoreForm[k].type==="index"){
          this.tableCalcul.push({val:'Q '+'('+ this.form.formMuti[fm].indexScoreForm[k].i +',' + this.form.formMuti[fm].indexScoreForm[k].j+')'})
        }
        if(this.form.formMuti[fm].indexScoreForm[k].type==="operation"){
          this.tableCalcul.push({val:this.form.formMuti[fm].indexScoreForm[k].desc})
        }
        if(this.form.formMuti[fm].indexScoreForm[k].type==="number"){
          this.tableCalcul.push({val:this.form.formMuti[fm].indexScoreForm[k].desc =='' ?this.form.formMuti[fm].indexScoreForm[k].k : this.form.formMuti[fm].indexScoreForm[k].desc })
        }
        if(this.form.formMuti[fm].indexScoreForm[k].type==="autre"){
          this.tableCalcul.push({val:this.form.formMuti[fm].indexScoreForm[k].desc})
        }
      }
    this.tableCalcul .map((result)=>{
      if(result.val[0]=='Q'){
        var indexC = this.FormScore.findIndex(s => s.type === result.val);
        if(this.FormScore[indexC])
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
     /*   console.log( this.form.formMuti[fm]," this.form.formMuti[fm]")
    console.log(this.scoreS,"this.scoreS")  */ 
 /*    console.log(this.tableReponse,"this.tableReponse")
    console.log(this.scoreS,"this.scoreS") */
       console.log(this.scoreS,"this.scoreS")    
    let scoreCalcul =  eval(this.scoreS) ; 
    /*  console.log(scoreCalcul,"scoreCalcul")   */
    this.scorSend.push(scoreCalcul)  
 
    this.tableCalcul=[];
  this.scoreS=""
    }
 /*   console.log("this.form.formMuti[0]",this.form.formMuti[0]) */

 /*  console.log("user", this.idpatient,
  "doctor", this.iddoctor,
  "responses", this.tableReponse,)   */
      setTimeout(() => {
  this.PatForms.addRep(  {form: this.idForm2,
    user: this.idpatient,
    doctor: this.iddoctor,
    responses: this.tableReponse,
    score:this.scorSend
  }).subscribe((res)=>{
 
      if(res){
        this.route.navigate(['/patient/contacts'])
        this.snackBar.open("Formulaire calculer " ,"×", {
      
          duration: 5000,
      
       
      
          verticalPosition: 'top',
          panelClass:'success'
      
        })
      }else{
        location.reload()
      }
    })
}, 4000); 
 

setTimeout(() => {
  location.reload() 
}, 6000);     
/* console.log(this.FormScore,this.tableCalcul,this.tableReponse) */
}
Range(value,score,sections,question,type,data){
    let x =0
    if(this.FormScore.length===1&&this.FormScore[0]==0){
      this.FormScore= []
    }
    let  indexQ = this.FormScore.findIndex(x => 
      x.type===type
    );
    if( indexQ == -1){
      this.FormScore.push({score:data.value,index:x+1,section:sections,indexQuestion:question,type:type})
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
   /*  console.log('e', e); */
}
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


