import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professionnel } from 'src/app/views/interfaces/professionnel.interface';
import { AuthProfessionnelService } from 'src/app/views/services/professionnel/auth-professionnel.service';
import { InvitaionsService } from 'src/app/views/services/professionnel/invitaions.service';
import { UpdProfilProServiceService } from 'src/app/views/services/professionnel/upd-profil-pro-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-professionnel-layout',
  templateUrl: './professionnel-layout.component.html',
  styleUrls: ['./professionnel-layout.component.css']
})
export class ProfessionnelLayoutComponent implements OnInit {
  professionnel:Professionnel
  updPatient:Professionnel
  submitted = false;
  hide : boolean = true;
  test:Professionnel
  id:any
  invts:any
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
  constructor(private snackBar:MatSnackBar,private invservice:InvitaionsService,private router:Router,private updateservice:UpdProfilProServiceService, private authPro:AuthProfessionnelService) {
    this.id=this.authPro.geid()
    this.professionnel=this.authPro.getUsername()

    this.updateservice.getProf(this.id).subscribe(response=>
      this.dataProf = response)
      this.invservice.getInvts(this.id).subscribe(response =>
        this.invts = response,
        )
        
      

  }

  ngOnInit(): void {
  }
  logout(){
    localStorage.removeItem('token_Pro')
    this.router.navigate(['/'])
  }

  acceptInvt(body:any){
    this.invservice.acceptInvts(this.id,body).subscribe(response=>{
      this.snackBar.open("invite  accepted " ,"×", {

        duration: 5000,

        // here specify the position

        verticalPosition: 'top',
        panelClass:'success'

      });},error=> this.snackBar.open(" invite already accepted " ,"×", {

        duration: 5000,
  
        // here specify the position
  
        verticalPosition: 'top',
        panelClass:'error'
  
      })
      )

  }
  trackByIndex(index: any): any {
this.index=index
    return index;
  }
  numberInvts(){
    var keys = Object.keys(this.invts);
var len = keys.length;
return len
  }

}
