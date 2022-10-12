import { Component, OnInit,Inject  } from '@angular/core';
import { Router } from '@angular/router';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
import { InvitaionsService } from 'src/app/views/services/professionnel/invitaions.service';
import { UpdProfilProServiceService } from 'src/app/views/services/professionnel/upd-profil-pro-service.service';
import { LoaderService } from 'src/app/views/services/loader/loader.service';

import { MatSnackBar } from '@angular/material/snack-bar';
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';
import {TranslateService} from '@ngx-translate/core';
import {TranslationService} from '../../translation.service';
import { DOCUMENT } from "@angular/common";
@Component({
  selector: 'app-professionnel-layout',
  templateUrl: './professionnel-layout.component.html',
  styleUrls: ['./professionnel-layout.component.css']
})
export class ProfessionnelLayoutComponent implements OnInit {
  [x: string]: any;
  professionnel:Professionnel
  updPatient:Professionnel
  submitted = false;
  hide : boolean = true;
  test:Professionnel
  id:any
  invts!:any
  index=0
  dataProf={
    name:'',
    lastname:'',
    email:'',
    birthday:0,
    tel:0,
    id:'',
    adresse:'',
    fax:'',
    gender:'',
    photo:'',
    job:'',
    rpps:'',
    added_date:'',
    adeli:'',


  }
  lang="fr";
  data:any;
  languagreB=false;
  currentLang = 'fr';
  languageSelect:any;
  languages=[
    {key :'fr',displayValue:'Français'},
    {key :'en',displayValue:'English'},


  ]
  constructor( public loaderService: LoaderService,private snackBar:MatSnackBar,private invservice:InvitaionsService,private router:Router,@Inject(DOCUMENT) private document: Document,
    private _patient:UpdProfilPatientService,private updateservice:UpdProfilProServiceService, private authPro:AuthProfessionnelService,public translationService: TranslationService) {
    
    this.id=this.authPro.geid()
    this.professionnel=this.authPro.getUsername()
    this.invservice.getInvt(this.id).subscribe()
     this.updateservice.getProf(this.id).subscribe(response=>
      this.dataProf = response)
 /*      this.invservice.getInvts(this.id).subscribe(response =>
        this.invts = response,
        )  */ 
        if(localStorage.getItem('langauage')==null){
          this.languageSelect='fr'
        }else{
          this.languageSelect=localStorage.getItem('langauage')}
      
 
  }

  ngOnInit(): void {
    this.invservice.refreshNeeded$.subscribe((res)=>{
      this.listInvit()
    })

  }
  onLangChange(currentLang: string) {
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('langauage',currentLang)
    this.translationService.useLang(currentLang);
  }
/*   changeLang(lang){
    console.log(lang)
 this._patient.changeLang(lang).subscribe((res)=>{
  console.log(res)
  this.data=res.HOME
  console.log(this.data)
 })
     
    localStorage.setItem('lang',lang);
 
  } */
  listInvit(){
    this.invservice.getListEnvoi(this.id).subscribe((res)=>{
      if(res){
        this.invts=res.res
      }
    })
    
  }
  logout(){
    localStorage.removeItem('token_Pro')
    this.router.navigate(['/'])
  }

  removetInvt(body:any){
     this.invservice.removeInvts(body).subscribe((res)=>{
     
      if(res){
        var indexC = this.invts.findIndex(s => s._id === body);

        this.invts.splice (indexC, 1);
        this._patient.getAllPatient().subscribe((res)=>{
          if(res){
           
           
             this.invservice.getInvt(this.id).subscribe(response =>{
               response.res.map((res)=>{
             
               }) 
         
           })
           }
            })
      }
     }
      )  

  }
  trackByIndex(index: any): any {
this.index=index
    return index;
  }
  numberInvts(){
//    let keys = Object.keys(this.invts);
// let len = this.keys.length;
// return len

if (this.invts) {
  let keys = Object.keys(this.invts);
  let len = keys.length;
  return len
} 



  }

}
