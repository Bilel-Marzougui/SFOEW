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

  confirmDialog(): void {
    const message = `Are you sure you want to delete?`;
    const resDialog = new DialogModel("Confirm Action", message);
    const dialogRef = this.dialog.open(AuthComponent, {
      maxWidth: "600px",
      data: resDialog
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
    });
    const dialogConfig =new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus =true;
    this.dialog.open(AuthComponent,dialogConfig);

  }
}
