import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogModel, AuthComponent } from '../../views/shared-components/auth/auth.component';
@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent   {
  result: any;

  constructor( public dialog:MatDialog ) {
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    this.dialog.open(AuthComponent, dialogConfig);


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
}
