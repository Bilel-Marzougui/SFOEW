import { Injectable } from '@angular/core';
import{MatSnackBar} from '@angular/material/snack-bar'
import{NotificationComponent} from '../../shared-components/notification/notification.component'

@Injectable({
  providedIn: 'root'
})
export class NotifService {

  constructor(private snackBar:MatSnackBar) { }
  showNotification(displayMEssage:string,buttonText:string){
    this.snackBar.openFromComponent(NotificationComponent,{
      
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'bottom'
    })
  }
}
