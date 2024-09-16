import { Component, OnInit } from '@angular/core';
import{AuthProfessionnelService} from '../../../services/professionnel/auth-professionnel.service'
import{UpdProfilProServiceService} from '../../../services/professionnel/upd-profil-pro-service.service'
import{Professionnel} from '../../../interfaces/professionnel.interface'
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditProfilProComponent } from '../../edit-profil-pro/edit-profil-pro.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {TranslateService} from '@ngx-translate/core';
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';
@Component({
  selector: 'app-profil-pro',
  templateUrl: './profil-pro.component.html',
  styleUrls: ['./profil-pro.component.css']
})
export class ProfilProComponent implements OnInit {
  name:any

  url : any;

  fileToUpload: any;
  
  imageUrl: any;
  urlPhotp:any
 
  
id:any
// prof:Professionnel
fileName = '';

prof={
  id:"",
  photo:"",
  name:"",
  lastname:'',
  birthday:'',
  adresse:'',
  tel:'',
  email:'',
  password:'',
  added_date:'',
  fax:'',
  job:'',
  adeli:'',
  gender:'',
  rpps:'',
  role:'',
}
lang:any;
data:any;
  constructor(private snackBar:MatSnackBar,private updateservice:UpdProfilProServiceService,private authPro:AuthProfessionnelService,public dialog: MatDialog,public translate: TranslateService,
    private _patient:UpdProfilPatientService) {
     /*  console.log(1) */
 /*      this.lang = localStorage.getItem('lang') || 'en'
      console.log(this.lang,"lllllllllllllllll")
   
      this._patient.changeLang( this.lang).subscribe((res)=>{
        console.log(res)
        this.data=res.HOME
        console.log(this.data)
       }) */
    this.id=this.authPro.geid()
/*     translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en'); */
    this.updateservice.getProf(this.id).subscribe(response=>
      this.prof = response
      )
      //console.log(this.prof)
   }

  ngOnInit(): void {
   /*  console.log(2) */
  }
  getDataprof(){
    this.updateservice.getProf(this.id).subscribe(response=>
      this.prof = response
      )
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
  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

          this.updateservice.updPhotoPro(this.id,formData).subscribe(response=>{
       /*      console.log(formData)
            console.log("testtme")
            console.log(response) */
            this.snackBar.open(" photo updated successfully " ,"×", {

              duration: 5000,
          
              // here specify the position
          
              verticalPosition: 'top',
              panelClass:'success'
          
            });
          },error=> this.snackBar.open(" photo not updated " ,"×", {

            duration: 5000,
      
            // here specify the position
      
            verticalPosition: 'top',
            panelClass:'error'
      
          })
            )

    }}
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(EditProfilProComponent, dialogConfig);


}
logout() {
  const dialogConfig = new MatDialogConfig();

}

handleFileInput(file: FileList) {

  this.fileToUpload = file.item(0);

 

  //Show image preview

  let reader = new FileReader();

  reader.onload = (event: any) => {

    this.imageUrl = event.target.result;

  /*   console.log('hhh', this.imageUrl); */

    this.updateservice.uploadImage(this.imageUrl).subscribe((result)=>{

     

      this.url =result
/*       console.log("result",result) */
      const imageBlob = this.url;

  const file = new FormData();

  file.set('image', imageBlob);


      this.updateservice.updatePatientPhoto(this.id,file).subscribe((response=>{
      /*   console.log(response) */
      }))
/* console.log(result) */
       this.urlPhotp= result 
       this.prof.photo=this.urlPhotp
     /*  console.log("reee", result) */

    })

  };

  reader.readAsDataURL(this.fileToUpload);

}


}
