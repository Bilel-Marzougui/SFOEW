import { Component, OnInit } from '@angular/core';
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';

@Component({
  selector: 'app-dossier',
  templateUrl: './dossier.component.html',
  styleUrls: ['./dossier.component.css']
})
export class DossierComponent implements OnInit {
  dossiers: any;
  page:number=1;
  totalLength:any;
  allDossier:any;
  allDosssier=[];
  listIdAffection;
  spinerLoading:boolean=true;
  p:number;
  constructor(private _patient:UpdProfilPatientService,) { }

  ngOnInit(): void {
    this._patient.getAlldossier().subscribe((res)=>{
      let i=0;

       res.map((result)=>{
        if(result.status)
        i=i+1 
        else
        this.allDosssier.push(result)
      })  

        })
  }
  openModal(id) {
  
 
    }
  filterItem(value) {
      this.allDosssier = this.dossiers.filter(p => {
        return (
          p.name.toLowerCase().includes(value.toLowerCase()) ||
          p.name.toLowerCase().includes(value.toLowerCase()) ||
          p.name.toLowerCase().includes(value)
        )
      }) 
    }
    getIdDossier(id){
  /*     console.log(id)
      this._dossierData.getMyForm(id).subscribe(
        res=>{
  console.log("cc",res) 

    
    },
    err=>{
    
    }
    );
      this._dossierData.getdossierById(id).subscribe(
        res=>{
       console.log(res)
        
        },
        err=>{
        
        }
        ); */
    }
}
