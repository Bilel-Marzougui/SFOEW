import { Component, OnDestroy, OnInit,NgZone } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModel, AuthComponent } from '../../views/shared-components/auth/auth.component';
import { AuthProfessionnelService } from '../../views/services/professionnel/auth-professionnel.service'

@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit, OnDestroy {
  result: any;

  status = false
  whois: boolean
  guser

  token: any = localStorage.getItem('token_Pro')
  tokenPat: any = localStorage.getItem('token_Pat')
  constructor(private authPro: AuthProfessionnelService, public dialog: MatDialog,  ngZone :NgZone,) {
    this.isLoggidIn();
    window['onSignIn']= user => ngZone.run(
      () =>{
        this.afterSignUp(user)
      }
)
  }
  ngOnInit(): void {

  }
  afterSignUp(googleUser){
    this.guser=googleUser;
    console.log(this.guser)
     }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(AuthComponent, dialogConfig);


  }
  scrollWin() {
    window.scrollTo(0, 500);
  }



  // confirmDialog(): void {
  //   const message = `Are you sure you want to delete?`;
  //   const resDialog = new DialogModel("Confirm Action", message);
  //   const dialogRef = this.dialog.open(AuthComponent, {
  //     maxWidth: "auto",
  //     data: resDialog
  //   });
  //   dialogRef.afterClosed().subscribe(dialogResult => {
  //     this.result = dialogResult;
  //   });


  // }
  isLoggidIn() {
    if (this.token) {
      this.status = true
      this.whois = true
    }
    if (this.tokenPat) {
      this.status = true
      this.whois = false
    }

    if (this.tokenPat = "") {
      this.status = false
    }
    if (this.token = "") {
      this.status = false

    }




   /*  console.log(this.status, this.whois) */
  }
  ngOnDestroy() {


    this.dialog.closeAll();


  }

}

