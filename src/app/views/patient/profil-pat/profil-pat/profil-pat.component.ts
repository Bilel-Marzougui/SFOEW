import { Component, OnChanges, OnInit } from '@angular/core';
import{AuthPatientService} from '../../../services/patient/auth-patient.service'
import{Patient} from '../../../interfaces/patient.interface'
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditProfilComponent } from '../../edit-profil/edit-profil.component';
import { UpdProfilPatientService } from 'src/app/views/services/patient/upd-profil-patient.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  animal: string;
  name: string;
  
}
@Component({
  selector: 'app-profil-pat',
  templateUrl: './profil-pat.component.html',
  styleUrls: ['./profil-pat.component.css']
})
export class ProfilPatComponent implements OnInit {
name:any
id:any
photo:any;
files: any[];
fileName = '';
url : any;

  fileToUpload: any;
  
  imageUrl: any;
  urlPhotp:any
test={

  name: 'hanen',
  lastname: 'yassin',
  birthday: '12/12/2015',
  adresse: 'jj',
  tel: '+33333333333333',
  email: 'yassin1@gmail.com',
  password: 'yyyyyy',
  ssn: '77',
  gender: 'homme',
  photo: '1653558618111.png',
  account_state: true,
  archived: false,
  added_date: '2022-05-26T09:50:18.419+00:00',
  _id:""

}
  constructor(private snackBar:MatSnackBar,public  updateservice:UpdProfilPatientService ,public  authPat:AuthPatientService,public dialog: MatDialog) {

      this.id=this.authPat.geid()

    this.updateservice.getPatient(this.id).subscribe(response=>
      this.test = response
      )


    }

  ngOnInit(): void {

  }
  handleFileInput(file: FileList) {

    this.fileToUpload = file.item(0);
  
   
  
    //Show image preview
  
    let reader = new FileReader();
  
    reader.onload = (event: any) => {
  
      this.imageUrl = event.target.result;
  
    /*   console.log('hhh', this.imageUrl); */
  
      this.updateservice.uploadImage(this.imageUrl).subscribe((result)=>{
  
       
        console.log(result)

        this.url =result
        console.log("result",result)
        const imageBlob = this.url;
  
    const file = new FormData();
  
    file.set('image', imageBlob);
  
  
        this.updateservice.updateDoctorPhoto(this.id,file).subscribe((response=>{
          console.log(response)
        }))
  console.log(result)
         this.urlPhotp= result 
         this.test.photo=this.urlPhotp
       /*  console.log("reee", result) */
  
      })
  
    };
  
    reader.readAsDataURL(this.fileToUpload);
  
  }

//   onFileSelected(event) {

//     const file:File = event.target.files[0];

//     if (file) {

//         this.fileName = file.name;

//         const formData = new FormData();

//         formData.append("thumbnail", file);

//         this.updateservice.updPhotoPat( this.id,formData).subscribe(response=>{
//           this.snackBar.open(" photo updated successfully " ,"×", {

//             duration: 5000,
    
//             // here specify the position
    
//             verticalPosition: 'top',
//             panelClass:'success'
    
//           });
//         },error=> this.snackBar.open(" photo not updated" ,"×", {

//           duration: 5000,
    
//           // here specify the position
    
//           verticalPosition: 'top',
//           panelClass:'error'
    
//         })
//           )
//     }
// }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(EditProfilComponent, dialogConfig);
}




logout() {
  const dialogConfig = new MatDialogConfig();

}


  }
