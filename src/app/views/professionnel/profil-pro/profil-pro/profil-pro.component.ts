import { Component, OnInit } from '@angular/core';
import{AuthProfessionnelService} from '../../../services/professionnel/auth-professionnel.service'
import{UpdProfilProServiceService} from '../../../services/professionnel/upd-profil-pro-service.service'
import{Professionnel} from '../../../interfaces/professionnel.interface'
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { EditProfilProComponent } from '../../edit-profil-pro/edit-profil-pro.component';

@Component({
  selector: 'app-profil-pro',
  templateUrl: './profil-pro.component.html',
  styleUrls: ['./profil-pro.component.css']
})
export class ProfilProComponent implements OnInit {
  name:any


id:any
prof:Professionnel
fileName = '';
  constructor(private updateservice:UpdProfilProServiceService,private authPro:AuthProfessionnelService,public dialog: MatDialog) {
    this.id=this.authPro.geid()

    this.updateservice.getProf(this.id).subscribe(response=>
      this.prof = response
      )
      console.log(this.prof)
   }

  ngOnInit(): void {

  }
  onFileSelected(event) {

    const file:File = event.target.files[0];

    if (file) {

        this.fileName = file.name;

        const formData = new FormData();

        formData.append("thumbnail", file);

          this.updateservice.updPhotoPro(this.id,formData).subscribe(response=>
            console.log('updated photo response'+response.photo)
            )

    }}
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(EditProfilProComponent, dialogConfig);


}
logout() {
  const dialogConfig = new MatDialogConfig();

}


}
