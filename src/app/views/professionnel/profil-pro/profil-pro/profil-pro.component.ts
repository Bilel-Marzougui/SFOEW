import { Component, OnInit } from '@angular/core';
import{AuthProfessionnelService} from '../../../services/professionnel/auth-professionnel.service'
import{UpdProfilProServiceService} from '../../../services/professionnel/upd-profil-pro-service.service'
import{Professionnel} from '../../../interfaces/professionnel.interface'
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditProfilProComponent } from '../../edit-profil-pro/edit-profil-pro.component';
import { MatSnackBar } from '@angular/material/snack-bar';

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


  constructor(private snackBar:MatSnackBar,private updateservice:UpdProfilProServiceService,private authPro:AuthProfessionnelService,public dialog: MatDialog) {
    this.id=this.authPro.geid()

    this.updateservice.getProf(this.id).subscribe(response=>
      this.prof = response
      )
      //console.log(this.prof)
   }

  ngOnInit(): void {

  }
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
      console.log("result",result)
      const imageBlob = this.url;

  const file = new FormData();

  file.set('image', imageBlob);


      this.updateservice.updatePatientPhoto(this.id,file).subscribe((response=>{
      /*   console.log(response) */
      }))
console.log(result)
       this.urlPhotp= result 
       this.prof.photo=this.urlPhotp
     /*  console.log("reee", result) */

    })

  };

  reader.readAsDataURL(this.fileToUpload);

}


}
